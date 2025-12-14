import { getDb } from '~/server/utils/surrealdb'

export default defineEventHandler(async (event) => {
  const userId = getRouterParam(event, 'userId')
  const moduleId = getRouterParam(event, 'moduleId')

  if (!userId || !moduleId) {
    throw createError({
      statusCode: 400,
      message: 'User ID and Module ID are required'
    })
  }

  try {
    const db = await getDb()
    const result = await db.query<[{ content: string }[]]>(
      `SELECT content FROM notes
       WHERE user_id = $userId AND module_id = $moduleId`,
      { userId: `users:${userId}`, moduleId: parseInt(moduleId) }
    )

    return {
      content: result[0]?.[0]?.content || ''
    }
  } catch (error) {
    console.error('Failed to fetch notes:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch notes'
    })
  }
})
