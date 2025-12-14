<script setup lang="ts">
import { USERS } from '~/types'
import { MODULES } from '~/content'

const store = useCourseStore()
const { isCourseComplete, getEstimatedTimeRemaining } = useProgress()

// Redirect if not logged in
onMounted(() => {
  if (!store.currentUser) {
    navigateTo('/')
  }
  store.setView('dashboard')
})

const currentUser = computed(() => {
  if (!store.currentUser) return null
  return USERS[store.currentUser]
})

const overallProgress = computed(() => {
  if (!store.currentUser) return 0
  return store.overallProgress(store.currentUser, MODULES.length)
})

const completedCount = computed(() => {
  if (!store.currentUser) return 0
  return store.completedModulesCount(store.currentUser)
})

const avgScore = computed(() => {
  if (!store.currentUser) return 0
  return store.averageQuizScore(store.currentUser)
})

const timeRemaining = computed(() => {
  return getEstimatedTimeRemaining(MODULES)
})

const courseComplete = computed(() => isCourseComplete(MODULES))

function openModule(moduleId: number) {
  store.openModule(moduleId)
  navigateTo(`/module/${moduleId}`)
}
</script>

<template>
  <div class="min-h-screen bg-course-bg-primary text-course-text-primary">
    <LayoutAppSidebar />

    <main class="ml-72 min-h-screen">
      <LayoutAppHeader
        title="Dashboard"
        subtitle="Track your learning progress"
      />

      <div class="p-8 max-w-5xl animate-fade-in">
        <!-- Stats Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <UiStatCard
            icon="📚"
            icon-color="purple"
            :value="`${overallProgress}%`"
            label="Overall Progress"
          />
          <UiStatCard
            icon="✓"
            icon-color="green"
            :value="`${completedCount}/${MODULES.length}`"
            label="Modules Completed"
          />
          <UiStatCard
            icon="🎯"
            icon-color="orange"
            :value="`${avgScore}%`"
            label="Average Quiz Score"
          />
          <UiStatCard
            icon="⏱"
            icon-color="blue"
            :value="timeRemaining"
            label="Est. Time Remaining"
          />
        </div>

        <!-- Module Progress -->
        <div class="bg-course-bg-card border border-course-border rounded-2xl p-6 mb-8">
          <h3 class="text-lg font-semibold mb-5">Module Progress</h3>

          <div class="space-y-1">
            <div
              v-for="module in MODULES"
              :key="module.id"
              @click="openModule(module.id)"
              class="flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all hover:bg-course-bg-hover hover:-mx-4 hover:px-8"
            >
              <div
                class="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-semibold flex-shrink-0"
                :class="[
                  store.moduleProgress(module.id) === 100
                    ? 'bg-emerald-500/15 text-emerald-500'
                    : store.moduleProgress(module.id) > 0
                    ? 'bg-course-accent text-white'
                    : 'bg-course-bg-tertiary text-course-text-secondary'
                ]"
              >
                {{ store.moduleProgress(module.id) === 100 ? '✓' : module.id }}
              </div>

              <div class="flex-1 min-w-0">
                <div class="text-sm font-semibold mb-1.5">{{ module.title }}</div>
                <UiProgressBar :value="store.moduleProgress(module.id)" size="sm" />
              </div>

              <div class="text-sm font-semibold text-course-text-secondary min-w-[45px] text-right">
                {{ store.moduleProgress(module.id) }}%
              </div>
            </div>
          </div>
        </div>

        <!-- Certificate (when complete) -->
        <div
          v-if="courseComplete"
          class="bg-gradient-to-br from-course-bg-tertiary to-course-bg-card border-2 border-course-accent rounded-2xl p-12 text-center"
        >
          <div class="w-20 h-20 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
            🏆
          </div>
          <h2 class="text-2xl font-bold mb-2">Course Complete!</h2>
          <p class="text-course-text-secondary mb-6">This certifies that</p>
          <div class="text-3xl font-bold text-course-accent-secondary mb-2">
            {{ currentUser?.name }}
          </div>
          <p class="text-course-text-secondary mb-8">has completed the</p>
          <div class="text-lg text-course-text-secondary mb-8">
            Terminal & AI Development Course
          </div>
          <button @click="window.print()" class="btn btn-primary">
            Print Certificate
          </button>
        </div>
      </div>
    </main>
  </div>
</template>
