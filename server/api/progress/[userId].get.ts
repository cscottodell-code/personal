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
      completed_sections: string[]
      quiz_scores: number[]
      quiz_passed: boolean
    }[]]>(
      `SELECT module_id, completed_sections, quiz_scores, quiz_passed
       FROM progress
       WHERE user_id = $userId`,
      { userId: `users:${userId}` }
    )

    // Convert to a map format for easier frontend consumption
    const progressMap: Record<number, {
      completedSections: string[]
      quizScores: number[]
      quizPassed: boolean
    }> = {}

    for (const item of result[0] || []) {
      progressMap[item.module_id] = {
        completedSections: item.completed_sections,
        quizScores: item.quiz_scores,
        quizPassed: item.quiz_passed
      }
    }

    return progressMap
  } catch (error) {
    console.error('Failed to fetch progress:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch progress'
    })
  }
})
