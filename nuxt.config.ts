// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Terminal & AI Development Course',
      meta: [
        { name: 'description', content: 'Interactive learning platform for Terminal, Claude Code, SurrealDB, n8n, Vue, and Nuxt' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap' }
      ]
    }
  },

  runtimeConfig: {
    // Server-side only (set via environment variables in Vercel)
    surrealUrl: process.env.SURREALDB_URL || 'http://localhost:8000/rpc',
    surrealUser: process.env.SURREALDB_USER || 'root',
    surrealPass: process.env.SURREALDB_PASS || 'root',
    surrealNamespace: process.env.SURREALDB_NS || 'courses',
    surrealDatabase: process.env.SURREALDB_DB || 'terminal',

    // Public (client-side)
    public: {
      appName: 'Terminal & AI Development Course'
    }
  },

  pinia: {
    storesDirs: ['./stores/**']
  }
})
