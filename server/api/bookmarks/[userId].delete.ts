import { getDb } from '~/server/utils/surrealdb'

interface DeleteBookmarkBody {
  moduleId: number
  sectionId: string
}

export default defineEventHandler(async (event) => {
  const userId = getRouterParam(event, 'userId')
  const body = await readBody<DeleteBookmarkBody>(event)

  if (!userId) {
    throw createError({
      statusCode: 400,
      message: 'User ID is required'
    })
  }

  if (!body.moduleId || !body.sectionId) {
    throw createError({
      statusCode: 400,
      message: 'Module ID and Section ID are required'
    })
  }

  try {
    const db = await getDb()

    await db.query(
      `DELETE bookmarks
       WHERE user_id = $userId AND module_id = $moduleId AND section_id = $sectionId`,
      {
        userId: `users:${userId}`,
        moduleId: body.moduleId,
        sectionId: body.sectionId
      }
    )

    return { success: true }
  } catch (error) {
    console.error('Failed to delete bookmark:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to delete bookmark'
    })
  }
})
