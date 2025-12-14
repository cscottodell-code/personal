import { getDb } from '~/server/utils/surrealdb'

export default defineEventHandler(async (event) => {
  const userId = getRouterParam(event, 'userId')

  if (!userId) {
    throw createError({
      statusCode: 400,
      message: 'User ID is required'
    })
  }

  try {
    const db = await getDb()
    const result = await db.query<[{
      module_id: number
      section_id: string
      created_at: string
    }[]]>(
      `SELECT module_id, section_id, created_at
       FROM bookmarks
       WHERE user_id = $userId
       ORDER BY created_at DESC`,
      { userId: `users:${userId}` }
    )

    return (result[0] || []).map(b => ({
      moduleId: b.module_id,
      sectionId: b.section_id,
      createdAt: b.created_at
    }))
  } catch (error) {
    console.error('Failed to fetch bookmarks:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch bookmarks'
    })
  }
})
