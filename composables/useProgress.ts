import type { Module } from '~/types'

export function useProgress() {
  const store = useCourseStore()

  function getModuleStatus(moduleId: number): 'locked' | 'available' | 'in-progress' | 'completed' {
    const progress = store.moduleProgress(moduleId)
    if (progress === 100) return 'completed'
    if (progress > 0) return 'in-progress'
    return 'available'
  }

  function getModuleStatusText(moduleId: number): string {
    const status = getModuleStatus(moduleId)
    switch (status) {
      case 'completed': return 'Completed'
      case 'in-progress': return 'In Progress'
      case 'available': return 'Start'
      default: return 'Locked'
    }
  }

  function getNextIncompleteModule(modules: Module[]): number | null {
    for (const m of modules) {
      if (store.moduleProgress(m.id) < 100) {
        return m.id
      }
    }
    return null
  }

  function isCourseComplete(modules: Module[]): boolean {
    return modules.every(m => store.moduleProgress(m.id) === 100)
  }

  function getEstimatedTimeRemaining(modules: Module[]): string {
    const incomplete = modules.filter(m => store.moduleProgress(m.id) < 100)
    if (incomplete.length === 0) return 'Complete!'

    // Parse estimated times and sum
    let totalMinutes = 0
    incomplete.forEach(m => {
      const match = m.estimatedTime.match(/(\d+)-(\d+)/)
      if (match) {
        const avg = (parseInt(match[1]) + parseInt(match[2])) / 2
        totalMinutes += avg * 60
      }
    })

    const hours = Math.round(totalMinutes / 60)
    return `~${hours} hours`
  }

  return {
    getModuleStatus,
    getModuleStatusText,
    getNextIncompleteModule,
    isCourseComplete,
    getEstimatedTimeRemaining
  }
}
