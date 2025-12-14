import { getDb } from '~/server/utils/surrealdb'

interface ProgressBody {
  moduleId: number
  completedSections?: string[]
  quizScore?: number
  quizPassed?: boolean
}

export default defineEventHandler(async (event) => {
  const userId = getRouterParam(event, 'userId')
  const body = await readBody<ProgressBody>(event)

  if (!userId) {
    throw createError({
      statusCode: 400,
      message: 'User ID is required'
    })
  }

  if (!body.moduleId) {
    throw createError({
      statusCode: 400,
      message: 'Module ID is required'
    })
  }

  try {
    const db = await getDb()

    // Check if progress record exists
    const existing = await db.query<[{ id: string }[]]>(
      `SELECT id FROM progress
       WHERE user_id = $userId AND module_id = $moduleId`,
      { userId: `users:${userId}`, moduleId: body.moduleId }
    )

    if (existing[0]?.length) {
      // Update existing record
      const updates: string[] = ['updated_at = time::now()']

      if (body.completedSections !== undefined) {
        updates.push('completed_sections = $completedSections')
      }
      if (body.quizScore !== undefined) {
        updates.push('quiz_scores = array::append(quiz_scores, $quizScore)')
      }
      if (body.quizPassed !== undefined) {
        updates.push('quiz_passed = $quizPassed')
      }

      await db.query(
        `UPDATE progress SET ${updates.join(', ')}
         WHERE user_id = $userId AND module_id = $moduleId`,
        {
          userId: `users:${userId}`,
          moduleId: body.moduleId,
          completedSections: body.completedSections,
          quizScore: body.quizScore,
          quizPassed: body.quizPassed
        }
      )
    } else {
      // Create new record
      await db.query(
        `CREATE progress SET
          user_id = $userId,
          module_id = $moduleId,
          completed_sections = $completedSections,
          quiz_scores = $quizScores,
          quiz_passed = $quizPassed`,
        {
          userId: `users:${userId}`,
          moduleId: body.moduleId,
          completedSections: body.completedSections || [],
          quizScores: body.quizScore ? [body.quizScore] : [],
          quizPassed: body.quizPassed || false
        }
      )
    }

    return { success: true }
  } catch (error) {
    console.error('Failed to update progress:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to update progress'
    })
  }
})
