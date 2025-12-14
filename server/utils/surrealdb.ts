import Surreal from 'surrealdb'

let db: Surreal | null = null

export async function getDb(): Promise<Surreal> {
  if (db) return db

  const config = useRuntimeConfig()

  db = new Surreal()

  try {
    // Connect to SurrealDB (works for both local and cloud)
    const url = config.surrealUrl || 'http://localhost:8000/rpc'
    console.log('Connecting to SurrealDB at:', url)
    await db.connect(url)

    // Use database-level authentication (for SurrealDB Cloud)
    await db.signin({
      namespace: config.surrealNamespace || 'courses',
      database: config.surrealDatabase || 'terminal',
      username: config.surrealUser || 'root',
      password: config.surrealPass || 'root'
    })

    // Select namespace and database
    await db.use({
      namespace: config.surrealNamespace || 'courses',
      database: config.surrealDatabase || 'terminal'
    })

    // Initialize schema if needed
    await initializeSchema(db)

    console.log('Connected to SurrealDB successfully')
  } catch (error) {
    console.error('Failed to connect to SurrealDB:', error)
    db = null
    throw error
  }

  return db
}

async function initializeSchema(db: Surreal): Promise<void> {
  // Create users table
  await db.query(`
    DEFINE TABLE IF NOT EXISTS users SCHEMAFULL;
    DEFINE FIELD IF NOT EXISTS name ON users TYPE string;
    DEFINE FIELD IF NOT EXISTS avatar ON users TYPE string;
    DEFINE FIELD IF NOT EXISTS created_at ON users TYPE datetime DEFAULT time::now();
    DEFINE INDEX IF NOT EXISTS users_name ON users FIELDS name UNIQUE;
  `)

  // Create progress table
  await db.query(`
    DEFINE TABLE IF NOT EXISTS progress SCHEMAFULL;
    DEFINE FIELD IF NOT EXISTS user_id ON progress TYPE record<users>;
    DEFINE FIELD IF NOT EXISTS module_id ON progress TYPE int;
    DEFINE FIELD IF NOT EXISTS completed_sections ON progress TYPE array DEFAULT [];
    DEFINE FIELD IF NOT EXISTS quiz_scores ON progress TYPE array DEFAULT [];
    DEFINE FIELD IF NOT EXISTS quiz_passed ON progress TYPE bool DEFAULT false;
    DEFINE FIELD IF NOT EXISTS updated_at ON progress TYPE datetime DEFAULT time::now();
    DEFINE INDEX IF NOT EXISTS progress_user_module ON progress FIELDS user_id, module_id UNIQUE;
  `)

  // Create notes table
  await db.query(`
    DEFINE TABLE IF NOT EXISTS notes SCHEMAFULL;
    DEFINE FIELD IF NOT EXISTS user_id ON notes TYPE record<users>;
    DEFINE FIELD IF NOT EXISTS module_id ON notes TYPE int;
    DEFINE FIELD IF NOT EXISTS content ON notes TYPE string DEFAULT '';
    DEFINE FIELD IF NOT EXISTS updated_at ON notes TYPE datetime DEFAULT time::now();
    DEFINE INDEX IF NOT EXISTS notes_user_module ON notes FIELDS user_id, module_id UNIQUE;
  `)

  // Create bookmarks table
  await db.query(`
    DEFINE TABLE IF NOT EXISTS bookmarks SCHEMAFULL;
    DEFINE FIELD IF NOT EXISTS user_id ON bookmarks TYPE record<users>;
    DEFINE FIELD IF NOT EXISTS module_id ON bookmarks TYPE int;
    DEFINE FIELD IF NOT EXISTS section_id ON bookmarks TYPE string;
    DEFINE FIELD IF NOT EXISTS created_at ON bookmarks TYPE datetime DEFAULT time::now();
    DEFINE INDEX IF NOT EXISTS bookmarks_unique ON bookmarks FIELDS user_id, module_id, section_id UNIQUE;
  `)

  // Create default users if they don't exist
  const existingUsers = await db.query<[{ name: string }[]]>('SELECT name FROM users')
  const userNames = existingUsers[0]?.map(u => u.name) || []

  if (!userNames.includes('Scott')) {
    await db.query(`
      CREATE users SET
        name = 'Scott',
        avatar = '👨‍💻'
    `)
  }

  if (!userNames.includes('Brett')) {
    await db.query(`
      CREATE users SET
        name = 'Brett',
        avatar = '🧑‍💼'
    `)
  }
}

export async function closeDb(): Promise<void> {
  if (db) {
    await db.close()
    db = null
  }
}
