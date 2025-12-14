import type { QuizQuestion, QuizState } from '~/types'

export function useQuiz(questions: QuizQuestion[]) {
  const state = ref<QuizState>({
    currentIndex: 0,
    answers: {},
    showExplanation: false,
    isComplete: false
  })

  const currentQuestion = computed(() => questions[state.value.currentIndex])
  const selectedAnswer = computed(() => state.value.answers[state.value.currentIndex])
  const isAnswered = computed(() => selectedAnswer.value !== undefined)

  const isCorrect = computed(() => {
    if (!isAnswered.value) return false
    return selectedAnswer.value === currentQuestion.value.correctIndex
  })

  const progress = computed(() => {
    return ((state.value.currentIndex + 1) / questions.length) * 100
  })

  const score = computed(() => {
    let correct = 0
    questions.forEach((q, i) => {
      if (state.value.answers[i] === q.correctIndex) {
        correct++
      }
    })
    return Math.round((correct / questions.length) * 100)
  })

  const passed = computed(() => score.value >= 70)

  const correctCount = computed(() => {
    let count = 0
    questions.forEach((q, i) => {
      if (state.value.answers[i] === q.correctIndex) {
        count++
      }
    })
    return count
  })

  function selectAnswer(index: number) {
    if (state.value.showExplanation) return
    state.value.answers[state.value.currentIndex] = index
  }

  function checkAnswer() {
    state.value.showExplanation = true
  }

  function nextQuestion() {
    if (state.value.currentIndex < questions.length - 1) {
      state.value.currentIndex++
      state.value.showExplanation = false
    } else {
      state.value.isComplete = true
    }
  }

  function reset() {
    state.value = {
      currentIndex: 0,
      answers: {},
      showExplanation: false,
      isComplete: false
    }
  }

  function goToQuestion(index: number) {
    if (index >= 0 && index < questions.length) {
      state.value.currentIndex = index
      state.value.showExplanation = true // Show answers in review mode
    }
  }

  return {
    state,
    currentQuestion,
    selectedAnswer,
    isAnswered,
    isCorrect,
    progress,
    score,
    passed,
    correctCount,
    totalQuestions: questions.length,
    selectAnswer,
    checkAnswer,
    nextQuestion,
    reset,
    goToQuestion
  }
}
