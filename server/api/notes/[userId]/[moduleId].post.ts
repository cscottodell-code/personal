import { getDb } from '~/server/utils/surrealdb'

interface NotesBody {
  content: string
}

export default defineEventHandler(async (event) => {
  const userId = getRouterParam(event, 'userId')
  const moduleId = getRouterParam(event, 'moduleId')
  const body = await readBody<NotesBody>(event)

  if (!userId || !moduleId) {
    throw createError({
      statusCode: 400,
      message: 'User ID and Module ID are required'
    })
  }

  try {
    const db = await getDb()

    // Check if notes exist
    const existing = await db.query<[{ id: string }[]]>(
      `SELECT id FROM notes
       WHERE user_id = $userId AND module_id = $moduleId`,
      { userId: `users:${userId}`, moduleId: parseInt(moduleId) }
    )

    if (existing[0]?.length) {
      // Update existing notes
      await db.query(
        `UPDATE notes SET content = $content, updated_at = time::now()
         WHERE user_id = $userId AND module_id = $moduleId`,
        {
          userId: `users:${userId}`,
          moduleId: parseInt(moduleId),
          content: body.content || ''
        }
      )
    } else {
      // Create new notes
      await db.query(
        `CREATE notes SET
          user_id = $userId,
          module_id = $moduleId,
          content = $content`,
        {
          userId: `users:${userId}`,
          moduleId: parseInt(moduleId),
          content: body.content || ''
        }
      )
    }

    return { success: true }
  } catch (error) {
    console.error('Failed to save notes:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to save notes'
    })
  }
})
