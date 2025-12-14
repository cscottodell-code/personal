<script setup lang="ts">
import { MODULES } from '~/content'

const store = useCourseStore()

// Redirect if not logged in
onMounted(() => {
  if (!store.currentUser) {
    navigateTo('/')
  }
  store.setView('bookmarks')
})

const bookmarks = computed(() => store.allBookmarks)

function getModule(moduleId: number) {
  return MODULES.find(m => m.id === moduleId)
}

function getSection(moduleId: number, sectionId: string) {
  const module = getModule(moduleId)
  if (!module) return null
  return module.sections.find(s => s.id === sectionId)
}

function goToBookmark(moduleId: number, sectionId: string) {
  store.openModule(moduleId)
  navigateTo(`/module/${moduleId}?section=${sectionId}`)
}

function removeBookmark(moduleId: number, sectionId: string) {
  store.toggleBookmark(moduleId, sectionId)
}
</script>

<template>
  <div class="min-h-screen bg-course-bg-primary text-course-text-primary">
    <LayoutAppSidebar />

    <main class="ml-72 min-h-screen">
      <LayoutAppHeader
        title="Bookmarks"
        subtitle="Your saved content"
      />

      <div class="p-8 max-w-5xl animate-fade-in">
        <!-- Empty state -->
        <div
          v-if="bookmarks.length === 0"
          class="text-center py-16"
        >
          <div class="text-5xl mb-4">☆</div>
          <h3 class="text-xl font-semibold text-course-text-primary mb-2">No Bookmarks Yet</h3>
          <p class="text-course-text-muted">
            Save sections while studying by clicking the star icon.
          </p>
        </div>

        <!-- Bookmarks list -->
        <div v-else class="bg-course-bg-card border border-course-border rounded-2xl p-6">
          <h3 class="text-lg font-semibold mb-5">Saved Bookmarks</h3>

          <div class="space-y-1">
            <div
              v-for="bookmark in bookmarks"
              :key="`${bookmark.moduleId}-${bookmark.sectionId}`"
              class="flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all hover:bg-course-bg-hover"
            >
              <div
                class="w-9 h-9 bg-course-bg-tertiary rounded-lg flex items-center justify-center text-sm font-semibold text-course-text-secondary flex-shrink-0"
              >
                {{ bookmark.moduleId }}
              </div>

              <div
                class="flex-1 min-w-0"
                @click="goToBookmark(bookmark.moduleId, bookmark.sectionId)"
              >
                <div class="text-sm font-semibold mb-0.5">
                  {{ getSection(bookmark.moduleId, bookmark.sectionId)?.title || 'Section' }}
                </div>
                <div class="text-xs text-course-text-muted">
                  {{ getModule(bookmark.moduleId)?.title }}
                </div>
              </div>

              <button
                @click.stop="removeBookmark(bookmark.moduleId, bookmark.sectionId)"
                class="text-amber-500 text-lg p-1 hover:scale-110 transition-transform"
                title="Remove bookmark"
              >
                ★
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
