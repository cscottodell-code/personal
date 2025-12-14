import { getDb } from '~/server/utils/surrealdb'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')

  if (!id) {
    throw createError({
      statusCode: 400,
      message: 'User ID is required'
    })
  }

  try {
    const db = await getDb()
    const result = await db.query<[{ id: string; name: string; avatar: string }[]]>(
      `SELECT * FROM users WHERE id = $id`,
      { id: `users:${id}` }
    )

    const user = result[0]?.[0]
    if (!user) {
      throw createError({
        statusCode: 404,
        message: 'User not found'
      })
    }

    return user
  } catch (error: any) {
    if (error.statusCode) throw error
    console.error('Failed to fetch user:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch user'
    })
  }
})
