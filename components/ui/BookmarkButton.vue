<script setup lang="ts">
const props = defineProps<{
  moduleId: number
  sectionId: string
}>()

const store = useCourseStore()

const isBookmarked = computed(() => store.isBookmarked(props.moduleId, props.sectionId))

function toggle() {
  store.toggleBookmark(props.moduleId, props.sectionId)
}
</script>

<template>
  <button
    @click.stop="toggle"
    class="p-1 text-lg transition-colors"
    :class="isBookmarked ? 'text-amber-500' : 'text-course-text-muted hover:text-amber-500'"
    :title="isBookmarked ? 'Remove bookmark' : 'Add bookmark'"
  >
    {{ isBookmarked ? '★' : '☆' }}
  </button>
</template>
