import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        course: {
          'bg-primary': 'var(--bg-primary, #0a0a0f)',
          'bg-secondary': 'var(--bg-secondary, #12121a)',
          'bg-tertiary': 'var(--bg-tertiary, #1a1a25)',
          'bg-card': 'var(--bg-card, #16161f)',
          'bg-hover': 'var(--bg-hover, #1e1e2a)',
          'border': 'var(--border-color, #2a2a3a)',
          'border-light': 'var(--border-light, #3a3a4a)',
          'text-primary': 'var(--text-primary, #e8e8ed)',
          'text-secondary': 'var(--text-secondary, #a0a0b0)',
          'text-muted': 'var(--text-muted, #6a6a7a)',
          'accent': 'var(--accent-primary, #6366f1)',
          'accent-secondary': 'var(--accent-secondary, #818cf8)',
          'success': 'var(--success, #10b981)',
          'warning': 'var(--warning, #f59e0b)',
          'error': 'var(--error, #ef4444)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      animation: {
        'flip': 'flip 0.6s ease-in-out',
        'fade-in': 'fadeIn 0.3s ease'
      },
      keyframes: {
        flip: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' }
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: []
} satisfies Config
