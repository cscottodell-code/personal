<script setup lang="ts">
const props = defineProps<{
  commands: Record<string, string | (() => string)>
}>()

const { output, executeCommand } = useTerminal(props.commands)
const inputValue = ref('')
const outputRef = ref<HTMLElement | null>(null)

function handleCommand() {
  if (inputValue.value.trim()) {
    executeCommand(inputValue.value)
    inputValue.value = ''

    // Scroll to bottom
    nextTick(() => {
      if (outputRef.value) {
        outputRef.value.scrollTop = outputRef.value.scrollHeight
      }
    })
  }
}
</script>

<template>
  <div>
    <h3 class="text-lg font-semibold mb-4">Practice Terminal</h3>
    <p class="text-course-text-secondary mb-4">
      Try out the commands you've learned. This is a safe simulator - nothing you type will affect your real computer.
    </p>

    <div class="terminal-sim">
      <div class="terminal-header">
        <div class="terminal-dot red"></div>
        <div class="terminal-dot yellow"></div>
        <div class="terminal-dot green"></div>
        <span class="terminal-title">Terminal — Practice</span>
      </div>

      <div ref="outputRef" class="terminal-body">
        <div
          v-for="(line, index) in output"
          :key="index"
          class="terminal-line"
        >
          <span :class="`terminal-${line.type}`">{{ line.text }}</span>
        </div>
      </div>

      <div class="p-3 border-t border-course-border">
        <div class="flex items-center gap-2">
          <span class="terminal-prompt">learner@mac ~ %</span>
          <input
            v-model="inputValue"
            @keypress.enter="handleCommand"
            class="terminal-input"
            placeholder="Type command..."
            autofocus
          />
        </div>
      </div>
    </div>

    <p class="text-xs text-course-text-muted mt-3">
      Try: pwd, ls, ls -la, cd Documents, cd .., mkdir test, touch file.txt, whoami, date, clear, help
    </p>
  </div>
</template>
