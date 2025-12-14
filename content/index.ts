import { terminalModule } from './modules/01-terminal'
import { claudeCodeModule } from './modules/02-claude-code'
import { surrealdbModule } from './modules/03-surrealdb'
import { n8nModule } from './modules/04-n8n'
import { vueNuxtModule } from './modules/05-vue-nuxt'
import { integrationModule } from './modules/06-integration'
import type { Module } from '~/types'

export const MODULES: Module[] = [
  terminalModule,
  claudeCodeModule,
  surrealdbModule,
  n8nModule,
  vueNuxtModule,
  integrationModule
]

export function getModule(id: number): Module | undefined {
  return MODULES.find(m => m.id === id)
}

export function getModuleCount(): number {
  return MODULES.length
}
