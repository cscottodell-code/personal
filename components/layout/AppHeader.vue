<script setup lang="ts">
const props = defineProps<{
  title: string
  subtitle?: string
  showBack?: boolean
  backTo?: string
}>()

const router = useRouter()

function goBack() {
  if (props.backTo) {
    navigateTo(props.backTo)
  } else {
    router.back()
  }
}
</script>

<template>
  <header class="px-8 py-6 border-b border-course-border bg-course-bg-secondary sticky top-0 z-40">
    <NuxtLink
      v-if="showBack"
      :to="backTo || '/dashboard'"
      class="text-sm text-course-text-muted hover:text-course-text-primary mb-2 inline-block transition-colors"
    >
      ← Back to Dashboard
    </NuxtLink>
    <h1 class="text-2xl font-bold text-course-text-primary">{{ title }}</h1>
    <p v-if="subtitle" class="text-sm text-course-text-secondary mt-1">{{ subtitle }}</p>
  </header>
</template>
