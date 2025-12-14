import type { Module } from '~/types'

export const claudeCodeModule: Module = {
  id: 2,
  title: "Claude Code Mastery",
  description: "AI-powered coding from your Terminal",
  estimatedTime: "2-3 hours",

  sections: [
    {
      id: "2-1",
      title: "2.1 What is Claude Code?",
      content: `
        <h3>AI in Your Terminal</h3>
        <p>Claude Code is Anthropic's command-line interface for Claude AI. Instead of using a web chat, you interact with Claude directly in your Terminal, with full access to your project files.</p>

        <h3>Why Use Claude Code?</h3>
        <ul>
          <li><strong>File Access:</strong> Claude can read and write your actual project files</li>
          <li><strong>Context Awareness:</strong> It understands your entire codebase</li>
          <li><strong>Direct Execution:</strong> It can run commands on your behalf</li>
          <li><strong>Persistent Sessions:</strong> Continue conversations across sessions</li>
        </ul>

        <h3>Your Role</h3>
        <p>As someone learning development, Claude Code is like having a senior developer sitting next to you. You can:</p>
        <ul>
          <li>Ask it to explain code</li>
          <li>Have it write new features</li>
          <li>Get help debugging issues</li>
          <li>Learn by asking "why" questions</li>
        </ul>

        <h3>Important Mindset</h3>
        <p>Claude Code is a tool, not a replacement for understanding. Always review changes it makes, ask it to explain things, and build your own knowledge.</p>
      `
    },
    {
      id: "2-2",
      title: "2.2 Prerequisites and Installation",
      content: `
        <h3>What You Need</h3>
        <ol>
          <li><strong>Node.js 18+</strong> - You have this via nvm</li>
          <li><strong>Claude Pro/Max subscription</strong> or API key</li>
        </ol>

        <h3>Check Node Version</h3>
        <div class="code-block"><code>node --version
# Should show v18.x.x or higher</code></div>

        <h3>Installation</h3>
        <div class="code-block"><code>npm install -g @anthropic-ai/claude-code</code></div>

        <h3>Verify Installation</h3>
        <div class="code-block"><code>claude --version</code></div>

        <h3>First Run - Authentication</h3>
        <p>When you first run <code>claude</code>, it will:</p>
        <ol>
          <li>Open your browser for authentication</li>
          <li>Ask you to log in with your Anthropic account</li>
          <li>Store your credentials locally</li>
        </ol>

        <div class="code-block"><code># Navigate to your project folder first!
cd ~/Sites/your-project

# Then start Claude Code
claude</code></div>
      `
    },
    {
      id: "2-3",
      title: "2.3 Starting Your First Session",
      content: `
        <h3>Always Start in a Project Folder</h3>
        <p>Claude Code works best when you start it from within a project:</p>
        <div class="code-block"><code>cd ~/Sites/my-project
claude</code></div>

        <h3>The Welcome Screen</h3>
        <p>You'll see:</p>
        <ul>
          <li>Claude Code version</li>
          <li>Current directory</li>
          <li>Available commands</li>
          <li>A prompt waiting for your input</li>
        </ul>

        <h3>Your First Interaction</h3>
        <p>Just type naturally, like you're talking to a colleague:</p>
        <div class="code-block"><code>> What files are in this project?

> Explain what this project does

> Show me the main entry point</code></div>

        <h3>Context Matters</h3>
        <p>Claude Code automatically sees:</p>
        <ul>
          <li>Your current directory structure</li>
          <li>Package.json and config files</li>
          <li>Git history (if available)</li>
          <li>Files you reference with @</li>
        </ul>
      `
    },
    {
      id: "2-4",
      title: "2.4 Essential Slash Commands",
      content: `
        <h3>Built-in Commands</h3>
        <p>Slash commands control Claude Code's behavior:</p>

        <table class="command-table">
          <thead>
            <tr><th>Command</th><th>What It Does</th></tr>
          </thead>
          <tbody>
            <tr><td>/help</td><td>Show all available commands</td></tr>
            <tr><td>/clear</td><td>Clear conversation context (start fresh)</td></tr>
            <tr><td>/exit</td><td>End the session</td></tr>
            <tr><td>/init</td><td>Create a CLAUDE.md project file</td></tr>
            <tr><td>/cost</td><td>Show token usage for the session</td></tr>
            <tr><td>/compact</td><td>Compress context to save tokens</td></tr>
          </tbody>
        </table>

        <h3>When to Use /clear</h3>
        <p>Use <code>/clear</code> when:</p>
        <ul>
          <li>Starting a new, unrelated task</li>
          <li>Claude seems confused about context</li>
          <li>You want to reduce token usage</li>
          <li>The conversation has gotten too long</li>
        </ul>

        <h3>Session Management</h3>
        <div class="code-block"><code># Start a new session
claude

# Continue last session
claude --continue

# Resume a specific session
claude --resume</code></div>
      `
    },
    {
      id: "2-5",
      title: "2.5 Referencing Files with @",
      content: `
        <h3>The @ Symbol</h3>
        <p>Use <code>@</code> to reference specific files:</p>
        <div class="code-block"><code>> Explain what @src/components/Header.vue does

> Add a logout button to @pages/dashboard.vue

> Compare @old-file.js with @new-file.js</code></div>

        <h3>Tab Completion</h3>
        <p>After typing @, press Tab to autocomplete file paths:</p>
        <div class="code-block"><code>> Look at @src/[Tab]
# Shows: components/ pages/ stores/ utils/</code></div>

        <h3>Why @ Matters</h3>
        <ul>
          <li>Claude reads the actual file content</li>
          <li>No need to copy-paste code</li>
          <li>Changes are made to the real file</li>
          <li>Prevents misunderstandings about which file</li>
        </ul>

        <h3>Pro Tips</h3>
        <ul>
          <li>Reference multiple files: <code>@file1.js @file2.js</code></li>
          <li>Reference folders: <code>@src/components/</code></li>
          <li>Be specific when files have similar names</li>
        </ul>
      `
    },
    {
      id: "2-6",
      title: "2.6 Running Shell Commands",
      content: `
        <h3>The ! Prefix</h3>
        <p>Use <code>!</code> to run shell commands:</p>
        <div class="code-block"><code>> !npm run dev

> !git status

> !ls -la src/</code></div>

        <h3>Claude Running Commands</h3>
        <p>Claude can also run commands for you. It will ask permission first:</p>
        <div class="code-block"><code>> Run the tests

Claude: I'll run the test suite. Allow me to execute:
  npm test
[Yes/No]</code></div>

        <h3>Common Use Cases</h3>
        <ul>
          <li>Check git status before committing</li>
          <li>Run tests after making changes</li>
          <li>Start/stop development servers</li>
          <li>Install dependencies</li>
        </ul>

        <h3>Safety Note</h3>
        <p>Claude will ask for permission before running commands. Always review what it wants to run, especially for:</p>
        <ul>
          <li>Anything with <code>rm</code> (delete)</li>
          <li>Git pushes to remote</li>
          <li>Installing packages</li>
          <li>Running scripts you haven't reviewed</li>
        </ul>
      `
    },
    {
      id: "2-7",
      title: "2.7 The CLAUDE.md Project File",
      content: `
        <h3>What is CLAUDE.md?</h3>
        <p>A special file that gives Claude context about your project. Create it with:</p>
        <div class="code-block"><code>/init</code></div>

        <h3>What to Include</h3>
        <div class="code-block"><code># Project: My Sales Tool

## Tech Stack
- Vue 3 with Nuxt 4
- Tailwind CSS
- SurrealDB
- n8n for automation

## Project Structure
- /pages - Route pages
- /components - Reusable components
- /stores - Pinia stores
- /server - API endpoints

## Conventions
- Use Composition API with script setup
- Use TypeScript for type safety
- Follow existing naming patterns

## Current Status
Building an income projection tool for sales team</code></div>

        <h3>Why It Helps</h3>
        <ul>
          <li>Claude reads it automatically</li>
          <li>Provides consistent context every session</li>
          <li>Reduces repeated explanations</li>
          <li>Helps Claude follow your conventions</li>
        </ul>

        <h3>Keep It Updated</h3>
        <p>Update CLAUDE.md when:</p>
        <ul>
          <li>You add new major features</li>
          <li>Tech stack changes</li>
          <li>Project conventions evolve</li>
          <li>Important decisions are made</li>
        </ul>
      `
    },
    {
      id: "2-8",
      title: "2.8 Effective Prompting",
      content: `
        <h3>Be Specific</h3>
        <p><strong>Bad:</strong></p>
        <div class="code-block"><code>> Fix the bug</code></div>

        <p><strong>Good:</strong></p>
        <div class="code-block"><code>> The login form in @components/LoginForm.vue doesn't validate
> email addresses. Add validation using the same pattern as
> @components/RegisterForm.vue</code></div>

        <h3>Provide Context</h3>
        <ul>
          <li>Reference specific files with @</li>
          <li>Describe what you're trying to achieve</li>
          <li>Mention related code or patterns</li>
          <li>Explain any constraints</li>
        </ul>

        <h3>Ask for Plans First</h3>
        <p>For complex changes:</p>
        <div class="code-block"><code>> Before making changes, explain your plan for adding
> user authentication to this project</code></div>

        <h3>Prompt Templates</h3>
        <div class="code-block"><code># Bug fix
> In @file.vue, [describe bug]. It should [expected behavior]
> instead of [current behavior]. Fix it.

# New feature
> Add [feature] to @file.vue. It should [requirements].
> Follow the pattern in @similar-file.vue.

# Explanation
> Explain how @file.vue works, especially the [specific part].
> I'm new to [technology] so explain like I'm a beginner.</code></div>
      `
    },
    {
      id: "2-9",
      title: "2.9 Reviewing and Approving Changes",
      content: `
        <h3>The Approval Flow</h3>
        <p>When Claude wants to make changes, it shows you:</p>
        <ol>
          <li>The file(s) to modify</li>
          <li>A diff showing exact changes</li>
          <li>A prompt asking for approval</li>
        </ol>

        <h3>Reading Diffs</h3>
        <div class="code-block"><code>- const name = "old value"  // Red = removed
+ const name = "new value"  // Green = added</code></div>

        <h3>Your Options</h3>
        <ul>
          <li><strong>Yes (y):</strong> Apply the changes</li>
          <li><strong>No (n):</strong> Reject and explain why</li>
          <li><strong>Edit (e):</strong> Modify the proposed changes</li>
        </ul>

        <h3>What to Check</h3>
        <ul>
          <li>Does it match what you asked for?</li>
          <li>Are there any unintended changes?</li>
          <li>Does it follow your project's patterns?</li>
          <li>Is it touching the right file?</li>
        </ul>

        <h3>After Approval</h3>
        <p>Always verify changes work:</p>
        <div class="code-block"><code>> Run the dev server and check if it works

> Run the tests to make sure nothing broke</code></div>
      `
    },
    {
      id: "2-10",
      title: "2.10 Best Practices",
      content: `
        <h3>1. Start Fresh for New Tasks</h3>
        <div class="code-block"><code>/clear</code></div>
        <p>Old context can confuse new tasks.</p>

        <h3>2. Use Version Control</h3>
        <div class="code-block"><code>> !git status    # Check before changes
# ... make changes ...
> !git diff      # Review what changed
> !git add -A && git commit -m "message"</code></div>

        <h3>3. Ask for Explanations</h3>
        <p>Don't just accept code - learn from it:</p>
        <div class="code-block"><code>> Why did you use computed() here instead of ref()?

> Explain this line: const { data } = await useFetch()</code></div>

        <h3>4. Break Down Large Tasks</h3>
        <p>Instead of:</p>
        <div class="code-block"><code>> Build a complete user dashboard</code></div>

        <p>Do:</p>
        <div class="code-block"><code>> First, create the basic dashboard page layout
# ... approve ...
> Now add the stats cards component
# ... approve ...
> Add the recent activity section</code></div>

        <h3>5. Test Incrementally</h3>
        <p>After each change:</p>
        <ul>
          <li>Save the file</li>
          <li>Check for errors in the browser</li>
          <li>Run tests if available</li>
          <li>Commit if it works</li>
        </ul>

        <h3>6. Document Decisions</h3>
        <p>Update CLAUDE.md with important decisions so future sessions have context.</p>
      `
    },
    {
      id: "2-11",
      title: "2.11 Troubleshooting",
      content: `
        <h3>Problem: Claude Seems Lost</h3>
        <p><strong>Solution:</strong> Clear context and provide fresh information:</p>
        <div class="code-block"><code>/clear
> I'm working on @specific-file.vue. Here's what I need...</code></div>

        <h3>Problem: Changes Don't Apply</h3>
        <p><strong>Check:</strong></p>
        <ul>
          <li>Did you approve the changes?</li>
          <li>Is the file path correct?</li>
          <li>Do you have write permissions?</li>
        </ul>

        <h3>Problem: Command Not Found</h3>
        <div class="code-block"><code># Check if installed
which claude

# Reinstall if needed
npm install -g @anthropic-ai/claude-code</code></div>

        <h3>Problem: Authentication Issues</h3>
        <div class="code-block"><code># Clear auth and re-authenticate
claude logout
claude</code></div>

        <h3>Problem: Token Limit Reached</h3>
        <p>When conversations get too long:</p>
        <div class="code-block"><code>/compact    # Compress context
# or
/clear      # Start fresh</code></div>

        <h3>Problem: Wrong File Modified</h3>
        <div class="code-block"><code># Check git for changes
!git diff

# Restore if needed
!git checkout -- path/to/file</code></div>
      `
    },
    {
      id: "2-12",
      title: "2.12 Workflow Integration",
      content: `
        <h3>Daily Workflow</h3>
        <ol>
          <li>Open Terminal, navigate to project</li>
          <li>Start Claude Code: <code>claude</code></li>
          <li>Check git status: <code>!git status</code></li>
          <li>Work on tasks with Claude's help</li>
          <li>Review and test changes</li>
          <li>Commit working code</li>
        </ol>

        <h3>For Prototyping (Your Role)</h3>
        <p>Since you're building prototypes to show your developer:</p>
        <ol>
          <li>Start with clear requirements</li>
          <li>Have Claude scaffold basic structure</li>
          <li>Iterate on the UI and logic</li>
          <li>Document what you built and why</li>
          <li>Share the code and your CLAUDE.md</li>
        </ol>

        <h3>Handoff to Developer</h3>
        <p>When sharing prototypes:</p>
        <ul>
          <li>Commit all changes to git</li>
          <li>Update CLAUDE.md with context</li>
          <li>Note any known issues or TODOs</li>
          <li>Explain your design decisions</li>
        </ul>

        <h3>Learning Strategy</h3>
        <p>Use Claude Code to accelerate learning:</p>
        <ul>
          <li>Ask "why" after every change</li>
          <li>Request explanations in spreadsheet terms</li>
          <li>Build small features yourself, then compare with Claude's approach</li>
          <li>Keep notes of patterns you learn</li>
        </ul>
      `
    }
  ],

  flashcards: [
    { id: "fc-2-1", front: "How do you install Claude Code?", back: "<code>npm install -g @anthropic-ai/claude-code</code>" },
    { id: "fc-2-2", front: "What command starts Claude Code?", back: "<code>claude</code> (from within a project folder)" },
    { id: "fc-2-3", front: "How do you clear the conversation context?", back: "<code>/clear</code>" },
    { id: "fc-2-4", front: "How do you reference a specific file?", back: "Use <code>@filename</code> (e.g., @src/App.vue)" },
    { id: "fc-2-5", front: "How do you run a shell command in Claude Code?", back: "Prefix with <code>!</code> (e.g., !npm run dev)" },
    { id: "fc-2-6", front: "What file stores project context for Claude?", back: "<code>CLAUDE.md</code> (created with /init)" },
    { id: "fc-2-7", front: "How do you continue your last session?", back: "<code>claude --continue</code>" },
    { id: "fc-2-8", front: "What should you do before approving changes?", back: "Review the diff, check it matches your request, verify the file path" },
    { id: "fc-2-9", front: "How do you see token usage?", back: "<code>/cost</code>" },
    { id: "fc-2-10", front: "What's the best practice for large tasks?", back: "Break them into smaller steps, approve and test each one" },
    { id: "fc-2-11", front: "How do you ask Claude to explain before making changes?", back: "\"Before making changes, explain your plan for...\"" },
    { id: "fc-2-12", front: "What should you do after Claude makes changes?", back: "Test the changes, run the app, check for errors, commit if working" }
  ],

  quiz: [
    {
      id: "q-2-1",
      question: "What is Claude Code?",
      options: ["A text editor", "An AI coding assistant in Terminal", "A programming language", "A VS Code extension"],
      correctIndex: 1,
      explanation: "Claude Code is Anthropic's command-line interface for Claude AI, designed for coding assistance."
    },
    {
      id: "q-2-2",
      question: "How do you install Claude Code?",
      options: ["brew install claude", "npm install -g @anthropic-ai/claude-code", "pip install claude", "Download from website"],
      correctIndex: 1,
      explanation: "Claude Code is installed globally via npm (Node Package Manager)."
    },
    {
      id: "q-2-3",
      question: "What does /clear do?",
      options: ["Clears the screen", "Deletes files", "Clears conversation context", "Logs you out"],
      correctIndex: 2,
      explanation: "/clear resets the conversation context, useful when starting new tasks."
    },
    {
      id: "q-2-4",
      question: "How do you reference a file for Claude to read?",
      options: ["file:name", "@name", "#name", "[name]"],
      correctIndex: 1,
      explanation: "Use @ before the filename (e.g., @src/App.vue) to reference files."
    },
    {
      id: "q-2-5",
      question: "What command creates the CLAUDE.md file?",
      options: ["/init", "/create", "/setup", "/new"],
      correctIndex: 0,
      explanation: "/init creates a CLAUDE.md file for storing project context."
    },
    {
      id: "q-2-6",
      question: "How do you run 'git status' in Claude Code?",
      options: ["git status", "run git status", "!git status", "/git status"],
      correctIndex: 2,
      explanation: "Prefix shell commands with ! to run them directly."
    },
    {
      id: "q-2-7",
      question: "What's the best practice before asking Claude to make changes?",
      options: ["Just ask", "Ask for a plan first", "Close all apps", "Backup everything"],
      correctIndex: 1,
      explanation: "For complex changes, asking Claude to explain its plan helps catch issues early."
    },
    {
      id: "q-2-8",
      question: "How do you continue your last Claude Code session?",
      options: ["claude -r", "claude --continue", "claude resume", "/resume"],
      correctIndex: 1,
      explanation: "Use --continue flag to resume your previous session with full context."
    },
    {
      id: "q-2-9",
      question: "What should you always check before approving changes?",
      options: ["Token count", "The diff showing exact changes", "Weather forecast", "Email"],
      correctIndex: 1,
      explanation: "Review the diff to ensure changes match what you requested and don't have unintended modifications."
    },
    {
      id: "q-2-10",
      question: "What's a key benefit of CLAUDE.md?",
      options: ["Required for installation", "Provides persistent project context", "Improves internet speed", "Stores passwords"],
      correctIndex: 1,
      explanation: "CLAUDE.md gives Claude consistent context about your project across sessions."
    }
  ]
}
