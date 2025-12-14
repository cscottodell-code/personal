import { getDb } from '~/server/utils/surrealdb'

export default defineEventHandler(async () => {
  try {
    const db = await getDb()
    const result = await db.query<[{ id: string; name: string; avatar: string }[]]>(
      'SELECT * FROM users ORDER BY name'
    )
    return result[0] || []
  } catch (error) {
    console.error('Failed to fetch users:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch users'
    })
  }
})
