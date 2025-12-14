<script setup lang="ts">
import type { QuizQuestion } from '~/types'

const props = defineProps<{
  moduleId: number
  questions: QuizQuestion[]
}>()

const store = useCourseStore()

const {
  state,
  currentQuestion,
  selectedAnswer,
  isAnswered,
  isCorrect,
  progress,
  score,
  passed,
  correctCount,
  totalQuestions,
  selectAnswer,
  checkAnswer,
  nextQuestion,
  reset,
  goToQuestion
} = useQuiz(props.questions)

const reviewMode = ref(false)

function handleComplete() {
  store.recordQuizScore(props.moduleId, score.value, passed.value)
}

function startReview() {
  reviewMode.value = true
  goToQuestion(0)
  state.value.isComplete = false
}

function retake() {
  reviewMode.value = false
  reset()
}

// Watch for completion
watch(() => state.value.isComplete, (isComplete) => {
  if (isComplete && !reviewMode.value) {
    handleComplete()
  }
})

// Reset when module changes
watch(() => props.moduleId, () => {
  reset()
  reviewMode.value = false
})
</script>

<template>
  <div class="max-w-2xl">
    <!-- Results Screen -->
    <div v-if="state.isComplete && !reviewMode" class="text-center py-8">
      <div
        class="w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-6"
        :class="passed ? 'bg-emerald-500/15 text-emerald-500' : 'bg-amber-500/15 text-amber-500'"
      >
        {{ passed ? '🎉' : '📚' }}
      </div>

      <h3 class="text-2xl font-bold mb-2">
        {{ passed ? 'Congratulations!' : 'Keep Practicing!' }}
      </h3>
      <p class="text-course-text-secondary mb-6">
        {{ passed ? 'You passed the quiz!' : 'You need 70% to pass. Review the material and try again.' }}
      </p>

      <div class="text-5xl font-bold text-course-accent mb-6">
        {{ score }}%
      </div>

      <p class="text-course-text-secondary mb-8">
        {{ correctCount }} / {{ totalQuestions }} correct
      </p>

      <div class="flex gap-3 justify-center">
        <button @click="startReview" class="btn btn-secondary">
          Review Answers
        </button>
        <button @click="retake" class="btn btn-primary">
          Retake Quiz
        </button>
      </div>
    </div>

    <!-- Quiz Questions -->
    <div v-else>
      <!-- Progress Bar -->
      <div class="flex items-center gap-4 mb-6">
        <div class="flex-1">
          <UiProgressBar :value="progress" />
        </div>
        <span class="text-sm text-course-text-muted min-w-[60px]">
          {{ state.currentIndex + 1 }} / {{ totalQuestions }}
        </span>
      </div>

      <!-- Question -->
      <div class="bg-course-bg-tertiary border border-course-border rounded-2xl p-6 mb-5">
        <h4 class="text-lg font-semibold mb-5">
          {{ currentQuestion.question }}
        </h4>

        <!-- Options -->
        <div class="space-y-3">
          <div
            v-for="(option, index) in currentQuestion.options"
            :key="index"
            @click="!state.showExplanation && selectAnswer(index)"
            class="quiz-option"
            :class="{
              'selected': selectedAnswer === index && !state.showExplanation,
              'correct': state.showExplanation && index === currentQuestion.correctIndex,
              'incorrect': state.showExplanation && selectedAnswer === index && index !== currentQuestion.correctIndex,
              'cursor-not-allowed': state.showExplanation
            }"
          >
            <div class="quiz-option-marker">
              {{ String.fromCharCode(65 + index) }}
            </div>
            <div class="flex-1 text-sm">{{ option }}</div>
          </div>
        </div>

        <!-- Explanation -->
        <div
          v-if="state.showExplanation"
          class="mt-4 p-4 bg-course-bg-card rounded-lg text-sm text-course-text-secondary border-l-4"
          :class="isCorrect ? 'border-emerald-500' : 'border-red-500'"
        >
          <strong :class="isCorrect ? 'text-emerald-500' : 'text-red-500'">
            {{ isCorrect ? '✓ Correct!' : '✗ Incorrect.' }}
          </strong>
          {{ currentQuestion.explanation }}
        </div>
      </div>

      <!-- Actions -->
      <div class="flex gap-3">
        <button
          v-if="!state.showExplanation && isAnswered"
          @click="checkAnswer"
          class="btn btn-primary"
        >
          Check Answer
        </button>

        <button
          v-if="state.showExplanation"
          @click="nextQuestion"
          class="btn btn-primary"
        >
          {{ state.currentIndex < totalQuestions - 1 ? 'Next Question' : 'See Results' }}
        </button>
      </div>
    </div>
  </div>
</template>
