import { defineStore } from 'pinia'
import type {
  UserId,
  CourseState,
  ViewType,
  TabType,
  UserData,
  ModuleProgress,
  Bookmark,
  ModalContent
} from '~/types'

const STORAGE_KEY = 'terminal-ai-course-state'

const DEFAULT_USER_DATA: UserData = {
  progress: {},
  notes: {},
  bookmarks: [],
  quizScores: {}
}

export const useCourseStore = defineStore('course', {
  state: (): CourseState => ({
    currentUser: null,
    currentView: 'login',
    currentModuleId: null,
    currentTab: 'content',

    users: {
      scott: { ...DEFAULT_USER_DATA, progress: {}, notes: {}, bookmarks: [], quizScores: {} },
      brett: { ...DEFAULT_USER_DATA, progress: {}, notes: {}, bookmarks: [], quizScores: {} }
    },

    showModal: false,
    modalContent: null,
    isLoading: false,
    error: null,
    useDatabaseSync: false
  }),

  getters: {
    // Get current user's data
    currentUserData(): UserData | null {
      if (!this.currentUser) return null
      return this.users[this.currentUser]
    },

    // Overall progress percentage for a user
    overallProgress: (state) => (userId: UserId, totalModules: number): number => {
      const userData = state.users[userId]
      if (!userData.progress || Object.keys(userData.progress).length === 0) return 0

      let total = 0
      for (let i = 1; i <= totalModules; i++) {
        const progress = userData.progress[i]
        if (progress?.quizPassed) {
          total += 100
        } else if (progress?.contentRead) {
          total += 50
        }
      }
      return Math.round(total / totalModules)
    },

    // Module progress percentage
    moduleProgress: (state) => (moduleId: number): number => {
      if (!state.currentUser) return 0
      const progress = state.users[state.currentUser].progress[moduleId]
      if (!progress) return 0
      if (progress.quizPassed) return 100
      if (progress.contentRead) return 50
      return 0
    },

    // Check if a section is bookmarked
    isBookmarked: (state) => (moduleId: number, sectionId: string): boolean => {
      if (!state.currentUser) return false
      return state.users[state.currentUser].bookmarks.some(
        b => b.moduleId === moduleId && b.sectionId === sectionId
      )
    },

    // Count completed modules
    completedModulesCount: (state) => (userId: UserId): number => {
      const userData = state.users[userId]
      return Object.values(userData.progress).filter(p => p.quizPassed).length
    },

    // Average quiz score
    averageQuizScore: (state) => (userId: UserId): number => {
      const scores = Object.values(state.users[userId].quizScores)
      if (scores.length === 0) return 0
      return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
    },

    // Get notes for a module
    getModuleNotes: (state) => (moduleId: number): string => {
      if (!state.currentUser) return ''
      return state.users[state.currentUser].notes[moduleId] || ''
    },

    // Get all bookmarks for current user
    allBookmarks(): Bookmark[] {
      if (!this.currentUser) return []
      return this.users[this.currentUser].bookmarks
    }
  },

  actions: {
    // User selection
    async selectUser(userId: UserId) {
      this.currentUser = userId
      this.currentView = 'dashboard'

      // Try to load from database if enabled
      if (this.useDatabaseSync) {
        await this.loadFromDatabase()
      }

      this.saveToStorage()
    },

    logout() {
      this.currentUser = null
      this.currentView = 'login'
      this.currentModuleId = null
      this.currentTab = 'content'
    },

    // Navigation
    setView(view: ViewType) {
      this.currentView = view
      if (view !== 'module') {
        this.currentModuleId = null
      }
    },

    openModule(moduleId: number) {
      this.currentView = 'module'
      this.currentModuleId = moduleId
      this.currentTab = 'content'
    },

    setTab(tab: TabType) {
      this.currentTab = tab
    },

    // Progress tracking
    async markContentRead(moduleId: number) {
      if (!this.currentUser) return

      if (!this.users[this.currentUser].progress[moduleId]) {
        this.users[this.currentUser].progress[moduleId] = {
          moduleId,
          contentRead: false,
          flashcardsCompleted: false,
          quizScore: null,
          quizPassed: false
        }
      }

      this.users[this.currentUser].progress[moduleId].contentRead = true
      this.saveToStorage()

      if (this.useDatabaseSync) {
        await this.syncProgressToDatabase(moduleId)
      }
    },

    async markFlashcardsCompleted(moduleId: number) {
      if (!this.currentUser) return

      if (!this.users[this.currentUser].progress[moduleId]) {
        this.users[this.currentUser].progress[moduleId] = {
          moduleId,
          contentRead: true,
          flashcardsCompleted: false,
          quizScore: null,
          quizPassed: false
        }
      }

      this.users[this.currentUser].progress[moduleId].flashcardsCompleted = true
      this.saveToStorage()

      if (this.useDatabaseSync) {
        await this.syncProgressToDatabase(moduleId)
      }
    },

    async recordQuizScore(moduleId: number, score: number, passed: boolean) {
      if (!this.currentUser) return

      this.users[this.currentUser].quizScores[moduleId] = score

      if (!this.users[this.currentUser].progress[moduleId]) {
        this.users[this.currentUser].progress[moduleId] = {
          moduleId,
          contentRead: true,
          flashcardsCompleted: true,
          quizScore: score,
          quizPassed: passed
        }
      } else {
        this.users[this.currentUser].progress[moduleId].quizScore = score
        this.users[this.currentUser].progress[moduleId].quizPassed = passed
        if (passed) {
          this.users[this.currentUser].progress[moduleId].completedAt = new Date().toISOString()
        }
      }

      this.saveToStorage()

      if (this.useDatabaseSync) {
        await this.syncProgressToDatabase(moduleId)
      }
    },

    // Bookmarks
    async toggleBookmark(moduleId: number, sectionId: string) {
      if (!this.currentUser) return

      const bookmarks = this.users[this.currentUser].bookmarks
      const index = bookmarks.findIndex(
        b => b.moduleId === moduleId && b.sectionId === sectionId
      )

      const isRemoving = index !== -1

      if (isRemoving) {
        bookmarks.splice(index, 1)
      } else {
        bookmarks.push({
          moduleId,
          sectionId,
          createdAt: new Date().toISOString()
        })
      }

      this.saveToStorage()

      if (this.useDatabaseSync) {
        try {
          if (isRemoving) {
            await $fetch(`/api/bookmarks/${this.currentUser}`, {
              method: 'DELETE',
              body: { moduleId, sectionId }
            })
          } else {
            await $fetch(`/api/bookmarks/${this.currentUser}`, {
              method: 'POST',
              body: { moduleId, sectionId }
            })
          }
        } catch (e) {
          console.error('Failed to sync bookmark:', e)
        }
      }
    },

    // Notes
    async saveNotes(moduleId: number, content: string) {
      if (!this.currentUser) return
      this.users[this.currentUser].notes[moduleId] = content
      this.saveToStorage()

      if (this.useDatabaseSync) {
        try {
          await $fetch(`/api/notes/${this.currentUser}/${moduleId}`, {
            method: 'POST',
            body: { content }
          })
        } catch (e) {
          console.error('Failed to sync notes:', e)
        }
      }
    },

    // Reset
    resetUserProgress() {
      if (!this.currentUser) return

      this.users[this.currentUser] = {
        progress: {},
        notes: {},
        bookmarks: [],
        quizScores: {}
      }

      this.saveToStorage()
    },

    // Modal
    showConfirmModal(content: ModalContent) {
      this.modalContent = content
      this.showModal = true
    },

    closeModal() {
      this.showModal = false
      this.modalContent = null
    },

    // localStorage persistence
    saveToStorage() {
      if (typeof localStorage === 'undefined') return

      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        users: this.users
      }))
    },

    loadFromStorage() {
      if (typeof localStorage === 'undefined') return

      try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored) {
          const data = JSON.parse(stored)
          if (data.users) {
            // Merge with defaults to handle new fields
            this.users = {
              scott: {
                ...DEFAULT_USER_DATA,
                progress: {},
                notes: {},
                bookmarks: [],
                quizScores: {},
                ...data.users.scott
              },
              brett: {
                ...DEFAULT_USER_DATA,
                progress: {},
                notes: {},
                bookmarks: [],
                quizScores: {},
                ...data.users.brett
              }
            }
          }
        }
      } catch (e) {
        console.error('Failed to load from storage:', e)
      }
    },

    // Enable/disable database sync
    setDatabaseSync(enabled: boolean) {
      this.useDatabaseSync = enabled
    },

    // SurrealDB integration
    async loadFromDatabase() {
      if (!this.currentUser) return

      this.isLoading = true
      this.error = null

      try {
        // Load progress
        const progress = await $fetch<Record<number, {
          completedSections: string[]
          quizScores: number[]
          quizPassed: boolean
        }>>(`/api/progress/${this.currentUser}`)

        // Convert API format to store format
        for (const [moduleIdStr, data] of Object.entries(progress)) {
          const moduleId = parseInt(moduleIdStr)
          const latestScore = data.quizScores.length > 0
            ? data.quizScores[data.quizScores.length - 1]
            : null

          this.users[this.currentUser].progress[moduleId] = {
            moduleId,
            contentRead: data.completedSections.length > 0,
            flashcardsCompleted: false,
            quizScore: latestScore,
            quizPassed: data.quizPassed
          }

          if (latestScore !== null) {
            this.users[this.currentUser].quizScores[moduleId] = latestScore
          }
        }

        // Load bookmarks
        const bookmarks = await $fetch<{
          moduleId: number
          sectionId: string
          createdAt: string
        }[]>(`/api/bookmarks/${this.currentUser}`)

        this.users[this.currentUser].bookmarks = bookmarks

        // Notes are loaded on-demand per module

        console.log('Loaded data from SurrealDB')
      } catch (e: any) {
        console.error('Failed to load from database:', e)
        this.error = e.message || 'Failed to load from database'
        // Fall back to localStorage
        this.loadFromStorage()
      } finally {
        this.isLoading = false
      }
    },

    async syncProgressToDatabase(moduleId: number) {
      if (!this.currentUser) return

      const progress = this.users[this.currentUser].progress[moduleId]
      if (!progress) return

      try {
        await $fetch(`/api/progress/${this.currentUser}`, {
          method: 'POST',
          body: {
            moduleId,
            completedSections: progress.contentRead ? ['all'] : [],
            quizScore: progress.quizScore,
            quizPassed: progress.quizPassed
          }
        })
      } catch (e) {
        console.error('Failed to sync progress to database:', e)
      }
    },

    async loadNotesFromDatabase(moduleId: number): Promise<string> {
      if (!this.currentUser) return ''

      try {
        const result = await $fetch<{ content: string }>(
          `/api/notes/${this.currentUser}/${moduleId}`
        )
        return result.content
      } catch (e) {
        console.error('Failed to load notes from database:', e)
        return this.users[this.currentUser].notes[moduleId] || ''
      }
    }
  }
})
