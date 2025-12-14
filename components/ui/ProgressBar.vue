<script setup lang="ts">
defineProps<{
  value: number
  showLabel?: boolean
  size?: 'sm' | 'md' | 'lg'
}>()

const sizeClasses = {
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-3'
}
</script>

<template>
  <div class="flex items-center gap-3">
    <div class="flex-1 progress-bar" :class="sizeClasses[size || 'md']">
      <div
        class="progress-bar-fill"
        :style="{ width: `${Math.min(100, Math.max(0, value))}%` }"
      ></div>
    </div>
    <span v-if="showLabel" class="text-sm text-course-text-muted min-w-[40px] text-right">
      {{ Math.round(value) }}%
    </span>
  </div>
</template>
