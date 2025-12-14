<script setup lang="ts">
import type { Flashcard } from '~/types'

const props = defineProps<{
  moduleId: number
  flashcards: Flashcard[]
}>()

const store = useCourseStore()
const currentIndex = ref(0)
const isFlipped = ref(false)

const currentCard = computed(() => props.flashcards[currentIndex.value])
const isFirst = computed(() => currentIndex.value === 0)
const isLast = computed(() => currentIndex.value === props.flashcards.length - 1)

function flip() {
  isFlipped.value = !isFlipped.value
}

function next() {
  if (!isLast.value) {
    currentIndex.value++
    isFlipped.value = false
  }
}

function prev() {
  if (!isFirst.value) {
    currentIndex.value--
    isFlipped.value = false
  }
}

function markComplete() {
  store.markFlashcardsCompleted(props.moduleId)
}

// Reset when module changes
watch(() => props.moduleId, () => {
  currentIndex.value = 0
  isFlipped.value = false
})
</script>

<template>
  <div>
    <h3 class="text-lg font-semibold mb-4">Flashcards</h3>
    <p class="text-course-text-secondary mb-6">
      Click the card to flip it and reveal the answer. Use these to test your memory of key concepts.
    </p>

    <!-- Flashcard -->
    <div class="flashcard-container mb-6">
      <div
        class="flashcard"
        :class="{ flipped: isFlipped }"
        @click="flip"
      >
        <div class="flashcard-face flashcard-front">
          {{ currentCard.front }}
        </div>
        <div class="flashcard-face flashcard-back" v-html="currentCard.back">
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <div class="flex items-center justify-center gap-4 mb-6">
      <button
        @click="prev"
        :disabled="isFirst"
        class="btn btn-secondary"
        :class="{ 'opacity-50 cursor-not-allowed': isFirst }"
      >
        ← Previous
      </button>

      <span class="text-sm text-course-text-muted min-w-[80px] text-center">
        {{ currentIndex + 1 }} / {{ flashcards.length }}
      </span>

      <button
        @click="next"
        :disabled="isLast"
        class="btn btn-secondary"
        :class="{ 'opacity-50 cursor-not-allowed': isLast }"
      >
        Next →
      </button>
    </div>

    <!-- Help text -->
    <p class="text-center text-sm text-course-text-muted mb-6">
      Click card to flip
    </p>

    <!-- Mark Complete -->
    <div v-if="isLast" class="text-center">
      <button @click="markComplete" class="btn btn-primary">
        I've Reviewed All Flashcards
      </button>
    </div>
  </div>
</template>
