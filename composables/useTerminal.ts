import type { TerminalLine } from '~/types'

export function useTerminal(commands: Record<string, string | (() => string)>) {
  const output = ref<TerminalLine[]>([
    { type: 'output', text: 'Welcome! Try commands like: pwd, ls, cd, mkdir, whoami, date, clear' }
  ])

  const currentDirectory = ref('/Users/learner')

  function executeCommand(input: string) {
    const trimmed = input.trim()
    if (!trimmed) return

    // Add the command to output
    output.value.push({
      type: 'prompt',
      text: `learner@mac ${currentDirectory.value === '/Users/learner' ? '~' : currentDirectory.value} % `
    })
    output.value.push({
      type: 'command',
      text: trimmed
    })

    // Handle clear command
    if (trimmed === 'clear') {
      output.value = []
      return
    }

    // Handle help command
    if (trimmed === 'help') {
      output.value.push({
        type: 'output',
        text: 'Available commands: pwd, ls, ls -la, cd [dir], cd .., cd ~, mkdir [name], touch [file], whoami, date, clear, help'
      })
      return
    }

    // Look up command in provided commands
    const response = commands[trimmed]
    if (response) {
      const text = typeof response === 'function' ? response() : response
      text.split('\n').forEach(line => {
        output.value.push({
          type: 'output',
          text: line
        })
      })
    } else {
      // Try to handle dynamic commands
      if (trimmed.startsWith('cd ')) {
        const dir = trimmed.slice(3)
        if (dir === '~' || dir === '') {
          currentDirectory.value = '/Users/learner'
          output.value.push({ type: 'output', text: '(changed to home directory)' })
        } else if (dir === '..') {
          const parts = currentDirectory.value.split('/')
          if (parts.length > 2) {
            parts.pop()
            currentDirectory.value = parts.join('/') || '/'
          }
          output.value.push({ type: 'output', text: '(moved up one level)' })
        } else {
          output.value.push({ type: 'output', text: `(changed to ${dir})` })
        }
      } else if (trimmed.startsWith('mkdir ')) {
        const name = trimmed.slice(6)
        output.value.push({ type: 'output', text: `(created folder: ${name})` })
      } else if (trimmed.startsWith('touch ')) {
        const name = trimmed.slice(6)
        output.value.push({ type: 'output', text: `(created file: ${name})` })
      } else if (trimmed.startsWith('rm ')) {
        output.value.push({ type: 'output', text: `(file removed - be careful with rm!)` })
      } else if (trimmed.startsWith('cat ')) {
        output.value.push({ type: 'output', text: `(would display file contents)` })
      } else if (trimmed.startsWith('echo ')) {
        const text = trimmed.slice(5)
        output.value.push({ type: 'output', text: text.replace(/['"]/g, '') })
      } else {
        output.value.push({
          type: 'output',
          text: `Command not found: ${trimmed.split(' ')[0]}. Type 'help' for available commands.`
        })
      }
    }
  }

  function clearOutput() {
    output.value = []
  }

  return {
    output,
    currentDirectory,
    executeCommand,
    clearOutput
  }
}
