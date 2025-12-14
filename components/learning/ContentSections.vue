<script setup lang="ts">
import type { ContentSection } from '~/types'

const props = defineProps<{
  moduleId: number
  sections: ContentSection[]
}>()

const store = useCourseStore()
const isMarkedRead = computed(() => store.moduleProgress(props.moduleId) >= 50)

function markAsRead() {
  store.markContentRead(props.moduleId)
}
</script>

<template>
  <div>
    <!-- Sections -->
    <div
      v-for="(section, index) in sections"
      :key="section.id"
      :id="`section-${section.id}`"
      class="content-section mb-8 pb-8 border-b border-course-border last:border-0"
    >
      <h2 class="text-xl font-bold text-course-accent-secondary mb-4 flex items-center justify-between">
        {{ section.title }}
        <UiBookmarkButton :module-id="moduleId" :section-id="section.id" />
      </h2>
      <div v-html="section.content"></div>
    </div>

    <!-- Mark as Read Button -->
    <div class="mt-8 text-center">
      <button
        @click="markAsRead"
        class="btn btn-primary"
        :class="{ 'opacity-60 cursor-default': isMarkedRead }"
      >
        {{ isMarkedRead ? 'Content Read ✓' : 'Mark as Read' }}
      </button>
    </div>
  </div>
</template>
