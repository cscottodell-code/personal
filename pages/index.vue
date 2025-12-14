<script setup lang="ts">
import { USERS } from '~/types'
import { MODULES } from '~/content'

const store = useCourseStore()

// Redirect if already logged in
onMounted(() => {
  if (store.currentUser) {
    navigateTo('/dashboard')
  }
})

function selectUser(userId: 'scott' | 'brett') {
  store.selectUser(userId)
  navigateTo('/dashboard')
}

function getProgress(userId: 'scott' | 'brett') {
  return store.overallProgress(userId, MODULES.length)
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-course-bg-primary relative">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(99,102,241,0.15)_0%,transparent_50%),radial-gradient(ellipse_at_80%_80%,rgba(168,85,247,0.1)_0%,transparent_50%)]"></div>

    <!-- Login Card -->
    <div class="relative bg-course-bg-card border border-course-border rounded-2xl p-12 w-full max-w-md animate-fade-in">
      <!-- Logo -->
      <div class="text-center mb-8">
        <div class="w-16 h-16 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
          ⌘
        </div>
        <h1 class="text-2xl font-bold text-course-text-primary mb-2">Terminal & AI Development</h1>
        <p class="text-sm text-course-text-secondary">Interactive Learning Platform</p>
      </div>

      <!-- User Selection -->
      <div class="text-xs font-semibold text-course-text-secondary uppercase tracking-wider mb-3">
        Select Your Profile
      </div>

      <div class="space-y-3">
        <button
          v-for="(user, id) in USERS"
          :key="id"
          @click="selectUser(id as 'scott' | 'brett')"
          class="w-full flex items-center gap-4 p-4 bg-course-bg-tertiary border border-course-border rounded-xl cursor-pointer transition-all hover:bg-course-bg-hover hover:border-course-accent hover:-translate-y-0.5"
        >
          <div
            class="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold text-white bg-gradient-to-br"
            :class="user.avatarColor"
          >
            {{ user.name[0] }}
          </div>
          <div class="text-left">
            <h3 class="text-base font-semibold text-course-text-primary">{{ user.name }}</h3>
            <p class="text-sm text-course-text-muted">{{ getProgress(id as 'scott' | 'brett') }}% complete</p>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
