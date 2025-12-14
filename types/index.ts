// User types
export type UserId = 'scott' | 'brett'

export interface User {
  id: UserId
  name: string
  avatarColor: string
}

export const USERS: Record<UserId, User> = {
  scott: { id: 'scott', name: 'Scott', avatarColor: 'from-sky-500 to-indigo-600' },
  brett: { id: 'brett', name: 'Brett', avatarColor: 'from-emerald-500 to-sky-500' }
}

// Module types
export interface Module {
  id: number
  title: string
  description: string
  icon: string
  color: string
  estimatedTime: string
  sections: ContentSection[]
  flashcards: Flashcard[]
  quizQuestions: QuizQuestion[]
  terminalCommands?: Record<string, string | (() => string)>
}

export interface ContentSection {
  id: string
  title: string
  content: string
}

export interface Flashcard {
  id: number
  front: string
  back: string
}

export interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

// Progress types
export interface ModuleProgress {
  moduleId: number
  contentRead: boolean
  flashcardsCompleted: boolean
  quizScore: number | null
  quizPassed: boolean
  completedAt?: string
}

export interface UserProgress {
  [moduleId: number]: ModuleProgress
}

// Notes types
export interface UserNotes {
  [moduleId: number]: string
}

// Bookmark types
export interface Bookmark {
  moduleId: number
  sectionId: string
  createdAt: string
}

// Store state types
export type ViewType = 'login' | 'dashboard' | 'module' | 'bookmarks'
export type TabType = 'content' | 'terminal' | 'flashcards' | 'quiz' | 'notes'

export interface UserData {
  progress: UserProgress
  notes: UserNotes
  bookmarks: Bookmark[]
  quizScores: Record<number, number>
}

export interface CourseState {
  currentUser: UserId | null
  currentView: ViewType
  currentModuleId: number | null
  currentTab: TabType

  users: Record<UserId, UserData>

  // UI state
  showModal: boolean
  modalContent: ModalContent | null
  isLoading: boolean
  error: string | null

  // Database sync flag
  useDatabaseSync: boolean
}

export interface ModalContent {
  title: string
  message: string
  confirmText?: string
  cancelText?: string
  onConfirm?: () => void
  onCancel?: () => void
  type: 'confirm' | 'info' | 'success'
}

// Quiz state (for composable)
export interface QuizState {
  currentIndex: number
  answers: Record<number, number>
  showExplanation: boolean
  isComplete: boolean
}

// Terminal state (for composable)
export interface TerminalLine {
  type: 'prompt' | 'command' | 'output'
  text: string
}

// Database models (SurrealDB)
export interface DbUser {
  id?: string
  profile_id: UserId
  name: string
  created_at?: string
  updated_at?: string
}

export interface DbProgress {
  id?: string
  user: string
  module_id: number
  content_read: boolean
  flashcards_completed: boolean
  quiz_score: number | null
  quiz_passed: boolean
  completed_at?: string
  updated_at?: string
}

export interface DbNote {
  id?: string
  user: string
  module_id: number
  content: string
  updated_at?: string
}

export interface DbBookmark {
  id?: string
  user: string
  module_id: number
  section_id: string
  created_at?: string
}
