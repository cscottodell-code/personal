<script setup lang="ts">
const props = defineProps<{
  moduleId: number
}>()

const store = useCourseStore()
const notes = ref('')
const saved = ref(false)

// Load notes when component mounts or module changes
watch(() => props.moduleId, () => {
  notes.value = store.getModuleNotes(props.moduleId)
  saved.value = false
}, { immediate: true })

function saveNotes() {
  store.saveNotes(props.moduleId, notes.value)
  saved.value = true

  // Reset saved indicator after 2 seconds
  setTimeout(() => {
    saved.value = false
  }, 2000)
}

// Auto-save on blur
function handleBlur() {
  if (notes.value !== store.getModuleNotes(props.moduleId)) {
    saveNotes()
  }
}
</script>

<template>
  <div>
    <h3 class="text-lg font-semibold mb-4">Your Notes</h3>
    <p class="text-course-text-secondary mb-4">
      Write notes as you study. They'll be saved and available whenever you return to this module.
    </p>

    <textarea
      v-model="notes"
      @blur="handleBlur"
      class="w-full min-h-[200px] p-4 bg-course-bg-tertiary border border-course-border rounded-xl text-course-text-primary text-sm resize-y outline-none focus:border-course-accent transition-colors"
      placeholder="Add your notes here..."
    ></textarea>

    <div class="flex justify-end items-center gap-4 mt-4">
      <span
        v-if="saved"
        class="text-sm text-emerald-500 animate-fade-in"
      >
        ✓ Saved
      </span>
      <button @click="saveNotes" class="btn btn-primary">
        Save Notes
      </button>
    </div>
  </div>
</template>
