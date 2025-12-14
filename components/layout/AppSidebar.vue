<script setup lang="ts">
import { USERS } from '~/types'
import { MODULES } from '~/content'

const store = useCourseStore()

const currentUser = computed(() => {
  if (!store.currentUser) return null
  return USERS[store.currentUser]
})

const overallProgress = computed(() => {
  if (!store.currentUser) return 0
  return store.overallProgress(store.currentUser, MODULES.length)
})

const bookmarkCount = computed(() => {
  return store.allBookmarks.length
})

function handleLogout() {
  store.logout()
  navigateTo('/')
}

function handleReset() {
  store.showConfirmModal({
    title: 'Reset Progress?',
    message: 'This will clear all your progress, quiz scores, notes, and bookmarks. This cannot be undone.',
    confirmText: 'Reset Everything',
    cancelText: 'Cancel',
    type: 'confirm',
    onConfirm: () => {
      store.resetUserProgress()
      store.closeModal()
    },
    onCancel: () => {
      store.closeModal()
    }
  })
}

function openModule(moduleId: number) {
  store.openModule(moduleId)
  navigateTo(`/module/${moduleId}`)
}
</script>

<template>
  <aside class="w-72 bg-course-bg-secondary border-r border-course-border flex flex-col fixed top-0 left-0 h-screen z-50">
    <!-- Header -->
    <div class="p-5 border-b border-course-border">
      <!-- Brand -->
      <div class="flex items-center gap-3 mb-4">
        <div class="w-10 h-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-lg">
          ⌘
        </div>
        <h2 class="text-base font-bold text-course-text-primary">Learning Hub</h2>
      </div>

      <!-- User Profile -->
      <div v-if="currentUser" class="flex items-center gap-3 p-3 bg-course-bg-tertiary rounded-xl">
        <div
          class="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold text-white bg-gradient-to-br"
          :class="currentUser.avatarColor"
        >
          {{ currentUser.name[0] }}
        </div>
        <div class="flex-1 min-w-0">
          <div class="text-sm font-semibold text-course-text-primary">{{ currentUser.name }}</div>
          <div class="text-xs text-course-text-muted">{{ overallProgress }}% complete</div>
        </div>
        <button
          @click="handleLogout"
          class="text-course-text-muted hover:text-course-error transition-colors p-1"
          title="Switch User"
        >
          ⎋
        </button>
      </div>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 p-3 overflow-y-auto">
      <!-- Overview Section -->
      <div class="mb-6">
        <div class="text-[11px] font-semibold text-course-text-muted uppercase tracking-wider px-2 mb-2">
          Overview
        </div>

        <NuxtLink
          to="/dashboard"
          class="flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-all"
          :class="store.currentView === 'dashboard' ? 'bg-course-accent text-white' : 'hover:bg-course-bg-hover text-course-text-primary'"
        >
          <span class="w-5 text-center text-sm">📊</span>
          <span class="text-sm font-medium">Dashboard</span>
        </NuxtLink>

        <NuxtLink
          to="/bookmarks"
          class="flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-all"
          :class="store.currentView === 'bookmarks' ? 'bg-course-accent text-white' : 'hover:bg-course-bg-hover text-course-text-primary'"
        >
          <span class="w-5 text-center text-sm">⭐</span>
          <span class="flex-1 text-sm font-medium">Bookmarks</span>
          <span
            class="text-xs px-1.5 py-0.5 rounded"
            :class="store.currentView === 'bookmarks' ? 'bg-white/20 text-white' : 'bg-course-bg-tertiary text-course-text-muted'"
          >
            {{ bookmarkCount }}
          </span>
        </NuxtLink>
      </div>

      <!-- Modules Section -->
      <div>
        <div class="text-[11px] font-semibold text-course-text-muted uppercase tracking-wider px-2 mb-2">
          Modules
        </div>

        <div
          v-for="module in MODULES"
          :key="module.id"
          @click="openModule(module.id)"
          class="relative flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 cursor-pointer transition-all"
          :class="[
            store.currentModuleId === module.id ? 'bg-course-accent text-white' : 'hover:bg-course-bg-hover text-course-text-primary',
            store.moduleProgress(module.id) === 100 ? 'completed' : ''
          ]"
        >
          <!-- Progress indicator bar -->
          <div class="absolute left-0 top-0 bottom-0 w-0.5 bg-course-border rounded overflow-hidden">
            <div
              class="w-full bg-course-accent transition-all duration-300"
              :style="{ height: `${store.moduleProgress(module.id)}%` }"
            ></div>
          </div>

          <span
            class="w-5 text-center text-sm"
            :class="store.currentModuleId === module.id ? 'text-white' : ''"
          >
            {{ store.moduleProgress(module.id) === 100 ? '✓' : module.id }}
          </span>
          <span class="flex-1 text-sm font-medium truncate">{{ module.title }}</span>
          <span
            class="text-xs px-1.5 py-0.5 rounded"
            :class="[
              store.currentModuleId === module.id ? 'bg-white/20 text-white' :
              store.moduleProgress(module.id) === 100 ? 'bg-emerald-500/15 text-emerald-500' :
              'bg-course-bg-tertiary text-course-text-muted'
            ]"
          >
            {{ store.moduleProgress(module.id) }}%
          </span>
        </div>
      </div>
    </nav>

    <!-- Footer -->
    <div class="p-4 border-t border-course-border">
      <button
        @click="handleReset"
        class="w-full py-2.5 bg-course-error/15 border border-course-error/30 rounded-lg text-course-error text-sm font-medium hover:bg-course-error hover:text-white transition-all"
      >
        Reset All Progress
      </button>
    </div>
  </aside>
</template>
