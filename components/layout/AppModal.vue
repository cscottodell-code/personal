<script setup lang="ts">
const store = useCourseStore()

function handleConfirm() {
  if (store.modalContent?.onConfirm) {
    store.modalContent.onConfirm()
  } else {
    store.closeModal()
  }
}

function handleCancel() {
  if (store.modalContent?.onCancel) {
    store.modalContent.onCancel()
  } else {
    store.closeModal()
  }
}

function handleOverlayClick(e: MouseEvent) {
  if (e.target === e.currentTarget) {
    handleCancel()
  }
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="store.showModal && store.modalContent"
      class="fixed inset-0 bg-black/70 flex items-center justify-center z-[1000]"
      @click="handleOverlayClick"
    >
      <div class="bg-course-bg-card border border-course-border rounded-2xl p-8 max-w-md w-[90%] animate-fade-in">
        <!-- Icon -->
        <div
          v-if="store.modalContent.type === 'confirm'"
          class="w-16 h-16 rounded-full bg-course-warning/15 text-course-warning flex items-center justify-center text-3xl mx-auto mb-6"
        >
          ⚠️
        </div>
        <div
          v-else-if="store.modalContent.type === 'success'"
          class="w-16 h-16 rounded-full bg-course-success/15 text-course-success flex items-center justify-center text-3xl mx-auto mb-6"
        >
          ✓
        </div>

        <h3 class="text-xl font-bold text-course-text-primary text-center mb-3">
          {{ store.modalContent.title }}
        </h3>
        <p class="text-course-text-secondary text-center mb-6">
          {{ store.modalContent.message }}
        </p>

        <div class="flex gap-3 justify-center">
          <button
            v-if="store.modalContent.cancelText"
            @click="handleCancel"
            class="btn btn-secondary"
          >
            {{ store.modalContent.cancelText }}
          </button>
          <button
            @click="handleConfirm"
            class="btn"
            :class="store.modalContent.type === 'confirm' ? 'bg-course-error text-white hover:-translate-y-0.5' : 'btn-primary'"
          >
            {{ store.modalContent.confirmText || 'OK' }}
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>
