<script setup lang="ts">
import { MODULES } from '~/content'
import type { TabType } from '~/types'

const route = useRoute()
const store = useCourseStore()

// Redirect if not logged in
onMounted(() => {
  if (!store.currentUser) {
    navigateTo('/')
    return
  }
  store.setView('module')
})

const moduleId = computed(() => parseInt(route.params.id as string))
const module = computed(() => MODULES.find(m => m.id === moduleId.value))

// Set current module in store
watch(moduleId, (id) => {
  if (id) {
    store.openModule(id)
  }
}, { immediate: true })

const tabs = computed(() => {
  const baseTabs: TabType[] = ['content', 'flashcards', 'quiz', 'notes']
  if (module.value?.terminalCommands) {
    return ['content', 'terminal', 'flashcards', 'quiz', 'notes'] as TabType[]
  }
  return baseTabs
})

const tabLabels: Record<TabType, string> = {
  content: 'Content',
  terminal: 'Terminal',
  flashcards: 'Flashcards',
  quiz: 'Quiz',
  notes: 'Notes'
}

function setTab(tab: TabType) {
  store.setTab(tab)
}
</script>

<template>
  <div class="min-h-screen bg-course-bg-primary text-course-text-primary">
    <LayoutAppSidebar />

    <main class="ml-72 min-h-screen">
      <LayoutAppHeader
        v-if="module"
        :title="`Module ${module.id}: ${module.title}`"
        :subtitle="module.description"
        show-back
        back-to="/dashboard"
      />

      <div v-if="module" class="p-8 max-w-5xl animate-fade-in">
        <!-- Module Content Card -->
        <div class="bg-course-bg-card border border-course-border rounded-2xl overflow-hidden">
          <!-- Tabs -->
          <div class="flex border-b border-course-border bg-course-bg-tertiary overflow-x-auto">
            <button
              v-for="tab in tabs"
              :key="tab"
              @click="setTab(tab)"
              class="px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors"
              :class="[
                store.currentTab === tab
                  ? 'text-course-accent border-course-accent bg-course-bg-card'
                  : 'text-course-text-secondary border-transparent hover:text-course-text-primary hover:bg-course-bg-hover'
              ]"
            >
              {{ tabLabels[tab] }}
            </button>
          </div>

          <!-- Tab Content -->
          <div class="p-8">
            <!-- Content Tab -->
            <div v-if="store.currentTab === 'content'">
              <LearningContentSections
                :module-id="module.id"
                :sections="module.sections"
              />
            </div>

            <!-- Terminal Tab -->
            <div v-else-if="store.currentTab === 'terminal' && module.terminalCommands">
              <LearningTerminalSimulator :commands="module.terminalCommands" />
            </div>

            <!-- Flashcards Tab -->
            <div v-else-if="store.currentTab === 'flashcards'">
              <LearningFlashcardDeck
                :module-id="module.id"
                :flashcards="module.flashcards"
              />
            </div>

            <!-- Quiz Tab -->
            <div v-else-if="store.currentTab === 'quiz'">
              <LearningQuizContainer
                :module-id="module.id"
                :questions="module.quiz"
              />
            </div>

            <!-- Notes Tab -->
            <div v-else-if="store.currentTab === 'notes'">
              <LearningNotesEditor :module-id="module.id" />
            </div>
          </div>
        </div>
      </div>

      <!-- Module not found -->
      <div v-else class="p-8 text-center">
        <h2 class="text-xl font-semibold mb-2">Module not found</h2>
        <NuxtLink to="/dashboard" class="text-course-accent hover:underline">
          Return to Dashboard
        </NuxtLink>
      </div>
    </main>
  </div>
</template>
