import { getDb } from '~/server/utils/surrealdb'

interface BookmarkBody {
  moduleId: number
  sectionId: string
}

export default defineEventHandler(async (event) => {
  const userId = getRouterParam(event, 'userId')
  const body = await readBody<BookmarkBody>(event)

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

    // Check if bookmark already exists
    const existing = await db.query<[{ id: string }[]]>(
      `SELECT id FROM bookmarks
       WHERE user_id = $userId AND module_id = $moduleId AND section_id = $sectionId`,
      {
        userId: `users:${userId}`,
        moduleId: body.moduleId,
        sectionId: body.sectionId
      }
    )

    if (existing[0]?.length) {
      // Already exists, return success
      return { success: true, action: 'exists' }
    }

    // Create new bookmark
    await db.query(
      `CREATE bookmarks SET
        user_id = $userId,
        module_id = $moduleId,
        section_id = $sectionId`,
      {
        userId: `users:${userId}`,
        moduleId: body.moduleId,
        sectionId: body.sectionId
      }
    )

    return { success: true, action: 'created' }
  } catch (error) {
    console.error('Failed to create bookmark:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to create bookmark'
    })
  }
})
