<script setup lang="ts">
const store = useCourseStore()

onMounted(() => {
  store.loadFromStorage()
})
</script>

<template>
  <NuxtPage />
  <LayoutAppModal />
</template>
