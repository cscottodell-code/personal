<script setup lang="ts">
defineProps<{
  icon: string
  iconColor: 'purple' | 'green' | 'orange' | 'blue'
  value: string | number
  label: string
}>()

const iconBgClasses = {
  purple: 'bg-indigo-500/15 text-indigo-500',
  green: 'bg-emerald-500/15 text-emerald-500',
  orange: 'bg-amber-500/15 text-amber-500',
  blue: 'bg-sky-500/15 text-sky-500'
}
</script>

<template>
  <div class="bg-course-bg-card border border-course-border rounded-2xl p-6">
    <div
      class="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4"
      :class="iconBgClasses[iconColor]"
    >
      {{ icon }}
    </div>
    <div class="text-3xl font-bold text-course-text-primary mb-1">{{ value }}</div>
    <div class="text-sm text-course-text-secondary">{{ label }}</div>
  </div>
</template>
