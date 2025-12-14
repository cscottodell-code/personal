import type { Module } from '~/types'

export const vueNuxtModule: Module = {
  id: 5,
  title: 'Vue, Nuxt & Tailwind',
  description: 'Build modern web interfaces with Vue.js, Nuxt framework, and Tailwind CSS utility classes.',
  icon: 'code',
  color: 'from-green-500 to-teal-500',
  estimatedTime: '3-4 hours',
  sections: [
    {
      id: 'modern-web-stack',
      title: 'The Modern Web Stack',
      content: `
# The Modern Web Stack

When you build websites today, you're typically working with three layers that work together—think of it like building a house.

## The Three Layers

### 1. HTML - The Structure (The Frame)
HTML is like the wooden frame of a house. It defines what exists:
- This is a paragraph
- This is a button
- This is an image
- This is a list

### 2. CSS - The Style (The Paint & Decoration)
CSS is like the paint, flooring, and decorations. It defines how things look:
- This text should be blue
- This button should be rounded
- This image should be 200 pixels wide

### 3. JavaScript - The Behavior (The Electrical & Plumbing)
JavaScript is like the electrical and plumbing systems. It makes things work:
- When you click this button, show a message
- When you type in this field, validate the input
- When the page loads, fetch data from the server

## Where Vue, Nuxt, and Tailwind Fit

| Tool | What It Does | Spreadsheet Analogy |
|------|--------------|---------------------|
| **Vue.js** | Makes JavaScript easier, handles reactivity | Like Excel formulas that auto-update |
| **Nuxt** | Organizes Vue projects, handles routing | Like a workbook with organized sheets |
| **Tailwind** | Makes CSS easier with utility classes | Like cell styles you can quickly apply |

## Why This Stack?

1. **Vue** is beginner-friendly compared to alternatives like React
2. **Nuxt** removes configuration headaches—things just work
3. **Tailwind** lets you style without writing custom CSS

Together, they let you build professional web applications faster than traditional methods.
      `
    },
    {
      id: 'vue-fundamentals',
      title: 'Vue.js Fundamentals',
      content: `
# Vue.js Fundamentals

Vue.js is a JavaScript framework that makes building interactive websites easier. Let's understand its core concepts.

## What Makes Vue Special: Reactivity

In a spreadsheet, when you change a cell that a formula depends on, the formula automatically recalculates. Vue works the same way:

\`\`\`javascript
// When 'count' changes, anything displaying it updates automatically
const count = ref(0)
\`\`\`

This is called **reactivity**—the page reacts to data changes automatically.

## The Vue File Structure (.vue files)

Vue uses single-file components with three sections:

\`\`\`vue
<template>
  <!-- HTML goes here (what you see) -->
  <div>
    <h1>{{ title }}</h1>
    <button @click="increment">Count: {{ count }}</button>
  </div>
</template>

<script setup lang="ts">
// JavaScript goes here (how it works)
const title = 'My Counter'
const count = ref(0)

function increment() {
  count.value++
}
</script>

<style scoped>
/* CSS goes here (how it looks) */
h1 {
  color: blue;
}
</style>
\`\`\`

## The Template Syntax

Vue uses special syntax in templates:

| Syntax | Purpose | Example |
|--------|---------|---------|
| \`{{ }}\` | Display data | \`{{ userName }}\` |
| \`@click\` | Handle click events | \`@click="doSomething"\` |
| \`:src\` | Dynamic attributes | \`:src="imageUrl"\` |
| \`v-if\` | Conditional display | \`v-if="isLoggedIn"\` |
| \`v-for\` | Loop through items | \`v-for="item in items"\` |

## Understanding \`ref()\`

\`ref()\` creates a reactive variable:

\`\`\`typescript
import { ref } from 'vue'

// Create a reactive variable
const message = ref('Hello')

// In script: access with .value
message.value = 'Goodbye'

// In template: Vue handles .value automatically
// {{ message }} shows "Goodbye"
\`\`\`

Think of \`ref()\` as putting your data in a special container that Vue watches for changes.
      `
    },
    {
      id: 'components-props',
      title: 'Components and Props',
      content: `
# Components and Props

Components are reusable pieces of your interface. Think of them like reusable templates in a spreadsheet that you can use multiple times with different data.

## What is a Component?

A component is a self-contained piece of UI. For example:
- A button component
- A card component
- A navigation menu component

You build them once, then use them anywhere.

## Creating a Simple Component

\`\`\`vue
<!-- components/UserCard.vue -->
<template>
  <div class="card">
    <h2>{{ name }}</h2>
    <p>{{ email }}</p>
  </div>
</template>

<script setup lang="ts">
// Define what data this component expects
defineProps<{
  name: string
  email: string
}>()
</script>
\`\`\`

## Using the Component

\`\`\`vue
<!-- pages/team.vue -->
<template>
  <div>
    <h1>Our Team</h1>

    <!-- Use the component multiple times with different data -->
    <UserCard name="Scott" email="scott@company.com" />
    <UserCard name="Brett" email="brett@company.com" />
    <UserCard name="Alex" email="alex@company.com" />
  </div>
</template>
\`\`\`

## Props: Passing Data to Components

Props are like function parameters—they let you pass data into a component.

\`\`\`typescript
// Define props with types
defineProps<{
  title: string           // Required string
  count?: number          // Optional number (? means optional)
  items: string[]         // Array of strings
  user: { name: string }  // Object with specific shape
}>()
\`\`\`

## Props with Default Values

\`\`\`typescript
const props = withDefaults(defineProps<{
  title: string
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}>(), {
  variant: 'primary',
  size: 'md'
})
\`\`\`

## The Component Mental Model

Think of components like this:

| Spreadsheet | Vue Component |
|-------------|---------------|
| A formatted cell template | The component's template |
| The data you paste in | Props |
| Conditional formatting rules | Component logic |
| Reusing the template on multiple cells | Using the component multiple times |
      `
    },
    {
      id: 'reactive-data',
      title: 'Reactive Data',
      content: `
# Reactive Data

Reactivity is Vue's superpower. When data changes, everything using that data updates automatically—just like spreadsheet formulas.

## ref() - For Single Values

Use \`ref()\` for primitive values (strings, numbers, booleans):

\`\`\`typescript
import { ref } from 'vue'

const count = ref(0)
const name = ref('Scott')
const isActive = ref(true)

// Change values with .value
count.value++
name.value = 'Brett'
isActive.value = false
\`\`\`

## reactive() - For Objects

Use \`reactive()\` for objects with multiple properties:

\`\`\`typescript
import { reactive } from 'vue'

const user = reactive({
  name: 'Scott',
  email: 'scott@example.com',
  age: 30
})

// Change properties directly (no .value needed)
user.name = 'Brett'
user.age = 31
\`\`\`

## When to Use Which?

| Use \`ref()\` | Use \`reactive()\` |
|-------------|-------------------|
| Single values | Objects with properties |
| When you might reassign the whole value | When you update individual properties |
| \`const count = ref(0)\` | \`const form = reactive({ name: '', email: '' })\` |

## Reactivity in Templates

In templates, Vue automatically unwraps refs:

\`\`\`vue
<template>
  <!-- No .value needed in template -->
  <p>Count: {{ count }}</p>
  <p>User: {{ user.name }}</p>
</template>

<script setup lang="ts">
const count = ref(0)
const user = reactive({ name: 'Scott' })
</script>
\`\`\`

## Watching for Changes

Sometimes you need to do something when data changes:

\`\`\`typescript
import { ref, watch } from 'vue'

const searchQuery = ref('')

// Run this function whenever searchQuery changes
watch(searchQuery, (newValue, oldValue) => {
  console.log(\`Search changed from "\${oldValue}" to "\${newValue}"\`)
  // Maybe fetch new search results here
})
\`\`\`

This is like having a macro that runs whenever a cell value changes.
      `
    },
    {
      id: 'event-handling',
      title: 'Event Handling',
      content: `
# Event Handling

Events are how users interact with your app—clicks, typing, hovering, etc. Vue makes handling these easy.

## Basic Click Events

\`\`\`vue
<template>
  <!-- When clicked, run the increment function -->
  <button @click="increment">Add One</button>
  <p>Count: {{ count }}</p>
</template>

<script setup lang="ts">
const count = ref(0)

function increment() {
  count.value++
}
</script>
\`\`\`

## Common Events

| Event | Triggers When | Example |
|-------|---------------|---------|
| \`@click\` | Element is clicked | \`@click="save"\` |
| \`@input\` | Input value changes | \`@input="search"\` |
| \`@submit\` | Form is submitted | \`@submit="handleSubmit"\` |
| \`@keyup\` | Key is released | \`@keyup.enter="search"\` |
| \`@mouseover\` | Mouse enters element | \`@mouseover="showTooltip"\` |

## Inline vs Function Handlers

\`\`\`vue
<template>
  <!-- Inline: good for simple one-liners -->
  <button @click="count++">Add</button>

  <!-- Function: better for complex logic -->
  <button @click="handleClick">Complex Action</button>

  <!-- With parameters -->
  <button @click="setUser('Scott')">Select Scott</button>
</template>
\`\`\`

## Event Modifiers

Vue provides shortcuts for common event patterns:

\`\`\`vue
<template>
  <!-- .prevent stops form from refreshing page -->
  <form @submit.prevent="handleSubmit">
    <input v-model="email" />
    <button type="submit">Submit</button>
  </form>

  <!-- .stop prevents event bubbling -->
  <div @click="outer">
    <button @click.stop="inner">Won't trigger outer</button>
  </div>

  <!-- .once only triggers once -->
  <button @click.once="initialize">Initialize (once only)</button>
</template>
\`\`\`

## Key Modifiers

Handle specific keys easily:

\`\`\`vue
<template>
  <!-- Only trigger on Enter key -->
  <input @keyup.enter="search" />

  <!-- Only trigger on Escape key -->
  <input @keyup.escape="cancel" />
</template>
\`\`\`

## The Event Object

Access the original event when needed:

\`\`\`vue
<template>
  <input @input="handleInput" />
</template>

<script setup lang="ts">
function handleInput(event: Event) {
  const target = event.target as HTMLInputElement
  console.log('Current value:', target.value)
}
</script>
\`\`\`
      `
    },
    {
      id: 'computed-properties',
      title: 'Computed Properties',
      content: `
# Computed Properties

Computed properties are Vue's equivalent to spreadsheet formulas. They calculate a value based on other data and automatically update when dependencies change.

## Basic Computed Property

\`\`\`typescript
import { ref, computed } from 'vue'

const firstName = ref('Scott')
const lastName = ref('Smith')

// This automatically updates when firstName or lastName changes
const fullName = computed(() => {
  return \`\${firstName.value} \${lastName.value}\`
})
\`\`\`

In a spreadsheet, this is like:
- Cell A1: "Scott"
- Cell A2: "Smith"
- Cell A3: \`=A1 & " " & A2\` → "Scott Smith"

## Why Not Just Use a Function?

\`\`\`typescript
// Function: recalculates every time it's called
function getFullName() {
  return \`\${firstName.value} \${lastName.value}\`
}

// Computed: only recalculates when dependencies change (cached)
const fullName = computed(() => {
  return \`\${firstName.value} \${lastName.value}\`
})
\`\`\`

Computed properties are **cached**. If you display \`fullName\` 10 times in your template, the calculation only runs once.

## Practical Examples

### Filtering a List

\`\`\`typescript
const todos = ref([
  { text: 'Learn Vue', done: true },
  { text: 'Build app', done: false },
  { text: 'Deploy', done: false }
])

const filter = ref('all') // 'all', 'active', 'completed'

const filteredTodos = computed(() => {
  if (filter.value === 'active') {
    return todos.value.filter(t => !t.done)
  }
  if (filter.value === 'completed') {
    return todos.value.filter(t => t.done)
  }
  return todos.value
})
\`\`\`

### Calculating Totals

\`\`\`typescript
const items = ref([
  { name: 'Widget', price: 10, quantity: 2 },
  { name: 'Gadget', price: 25, quantity: 1 }
])

const subtotal = computed(() => {
  return items.value.reduce((sum, item) => {
    return sum + (item.price * item.quantity)
  }, 0)
})

const tax = computed(() => subtotal.value * 0.08)
const total = computed(() => subtotal.value + tax.value)
\`\`\`

This is exactly like a spreadsheet with:
- Subtotal formula
- Tax formula (depends on subtotal)
- Total formula (depends on subtotal and tax)

## Computed vs Methods vs Watch

| Feature | Use When |
|---------|----------|
| **Computed** | Deriving data from existing data |
| **Methods** | Performing actions, not caching needed |
| **Watch** | Running side effects when data changes |
      `
    },
    {
      id: 'nuxt-introduction',
      title: 'Introduction to Nuxt',
      content: `
# Introduction to Nuxt

Nuxt is a framework built on top of Vue that adds structure and features to make building web applications easier.

## What Nuxt Adds to Vue

| Feature | Without Nuxt | With Nuxt |
|---------|--------------|-----------|
| Routing | Configure manually | Automatic from file structure |
| Components | Import in each file | Auto-imported |
| API routes | Separate backend needed | Built-in server |
| Configuration | Complex setup | Works out of the box |

## The Key Concept: File-Based Everything

In Nuxt, your folder structure **is** your configuration:

\`\`\`
your-project/
├── pages/           ← Each file becomes a URL route
│   ├── index.vue    ← yoursite.com/
│   ├── about.vue    ← yoursite.com/about
│   └── contact.vue  ← yoursite.com/contact
│
├── components/      ← Auto-imported everywhere
│   ├── Button.vue
│   └── Card.vue
│
├── composables/     ← Auto-imported functions
│   └── useAuth.ts
│
└── server/          ← Backend API routes
    └── api/
        └── users.ts ← yoursite.com/api/users
\`\`\`

## Nuxt vs Plain Vue

Think of it like:
- **Vue** = A powerful engine
- **Nuxt** = A complete car built around that engine

With plain Vue, you need to:
1. Set up a router
2. Configure build tools
3. Set up server-side rendering (if wanted)
4. Configure module imports

With Nuxt, all of this is handled for you.

## Creating a Nuxt Project

\`\`\`bash
# Create new project
npx nuxi@latest init my-project

# Enter directory
cd my-project

# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`

## The nuxt.config.ts File

This is your main configuration file:

\`\`\`typescript
export default defineNuxtConfig({
  // Add Nuxt modules
  modules: [
    '@pinia/nuxt',        // State management
    '@nuxtjs/tailwindcss' // CSS framework
  ],

  // Environment variables
  runtimeConfig: {
    // Server-only (secret)
    apiSecret: '',
    // Public (available in browser)
    public: {
      apiBase: ''
    }
  }
})
\`\`\`
      `
    },
    {
      id: 'file-based-routing',
      title: 'File-Based Routing',
      content: `
# File-Based Routing

In Nuxt, the files you create in the \`pages/\` folder automatically become URLs. No configuration needed.

## Basic Routes

\`\`\`
pages/
├── index.vue        → /
├── about.vue        → /about
├── contact.vue      → /contact
└── pricing.vue      → /pricing
\`\`\`

## Nested Routes (Folders)

\`\`\`
pages/
├── index.vue              → /
└── products/
    ├── index.vue          → /products
    ├── featured.vue       → /products/featured
    └── sale.vue           → /products/sale
\`\`\`

## Dynamic Routes (Parameters)

Use square brackets for dynamic segments:

\`\`\`
pages/
├── users/
│   ├── index.vue          → /users
│   └── [id].vue           → /users/123, /users/456, etc.
└── blog/
    └── [slug].vue         → /blog/my-first-post, /blog/hello-world
\`\`\`

### Accessing the Parameter

\`\`\`vue
<!-- pages/users/[id].vue -->
<template>
  <div>
    <h1>User Profile</h1>
    <p>Viewing user: {{ route.params.id }}</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
// If URL is /users/42, route.params.id = "42"
</script>
\`\`\`

## Navigation

### Using NuxtLink

\`\`\`vue
<template>
  <nav>
    <!-- Internal links use NuxtLink -->
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink :to="\`/users/\${userId}\`">My Profile</NuxtLink>
  </nav>
</template>
\`\`\`

### Programmatic Navigation

\`\`\`typescript
const router = useRouter()

// Navigate to a page
router.push('/dashboard')

// Navigate with parameters
router.push(\`/users/\${userId}\`)

// Go back
router.back()
\`\`\`

## Route Comparison Table

| File Path | URL | Parameters |
|-----------|-----|------------|
| \`pages/index.vue\` | \`/\` | none |
| \`pages/about.vue\` | \`/about\` | none |
| \`pages/blog/index.vue\` | \`/blog\` | none |
| \`pages/blog/[slug].vue\` | \`/blog/hello\` | \`{ slug: 'hello' }\` |
| \`pages/users/[id].vue\` | \`/users/42\` | \`{ id: '42' }\` |
      `
    },
    {
      id: 'tailwind-basics',
      title: 'Tailwind CSS Basics',
      content: `
# Tailwind CSS Basics

Tailwind is a utility-first CSS framework. Instead of writing custom CSS, you apply pre-built classes directly to your HTML.

## The Traditional Way vs Tailwind

### Traditional CSS:
\`\`\`html
<button class="primary-button">Click me</button>

<style>
.primary-button {
  background-color: blue;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
}
</style>
\`\`\`

### Tailwind Way:
\`\`\`html
<button class="bg-blue-500 text-white px-4 py-2 rounded">Click me</button>
\`\`\`

No separate CSS file needed!

## Understanding Tailwind Classes

Each class does one thing:

| Class | What It Does | CSS Equivalent |
|-------|--------------|----------------|
| \`bg-blue-500\` | Blue background | \`background-color: #3b82f6\` |
| \`text-white\` | White text | \`color: white\` |
| \`px-4\` | Horizontal padding | \`padding-left: 1rem; padding-right: 1rem\` |
| \`py-2\` | Vertical padding | \`padding-top: 0.5rem; padding-bottom: 0.5rem\` |
| \`rounded\` | Rounded corners | \`border-radius: 0.25rem\` |

## The Spacing Scale

Tailwind uses a consistent spacing scale:

| Value | Size | Pixels |
|-------|------|--------|
| 1 | 0.25rem | 4px |
| 2 | 0.5rem | 8px |
| 4 | 1rem | 16px |
| 6 | 1.5rem | 24px |
| 8 | 2rem | 32px |

So \`p-4\` means padding of 1rem (16px), \`m-2\` means margin of 0.5rem (8px).

## Common Utility Categories

### Spacing
- \`p-4\` / \`px-4\` / \`py-4\` - padding
- \`m-4\` / \`mx-4\` / \`my-4\` - margin
- \`space-x-4\` - space between horizontal children

### Colors
- \`bg-{color}-{shade}\` - background (bg-blue-500, bg-gray-100)
- \`text-{color}-{shade}\` - text color
- \`border-{color}-{shade}\` - border color

### Layout
- \`flex\` - display: flex
- \`grid\` - display: grid
- \`hidden\` - display: none

### Sizing
- \`w-full\` - width: 100%
- \`h-screen\` - height: 100vh
- \`max-w-md\` - max-width for medium size

## A Practical Example

\`\`\`html
<div class="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
  <h2 class="text-2xl font-bold text-gray-800 mb-4">Card Title</h2>
  <p class="text-gray-600 mb-4">Card description goes here.</p>
  <button class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">
    Click Me
  </button>
</div>
\`\`\`

This creates a centered card with shadow, rounded corners, and a button—all without writing any CSS.
      `
    },
    {
      id: 'responsive-design',
      title: 'Responsive Design',
      content: `
# Responsive Design with Tailwind

Responsive design means your website looks good on all screen sizes—phones, tablets, and desktops.

## Tailwind's Breakpoint System

Tailwind uses a mobile-first approach with these breakpoints:

| Prefix | Min Width | Common Devices |
|--------|-----------|----------------|
| (none) | 0px | All devices (mobile default) |
| \`sm:\` | 640px | Large phones |
| \`md:\` | 768px | Tablets |
| \`lg:\` | 1024px | Laptops |
| \`xl:\` | 1280px | Desktops |
| \`2xl:\` | 1536px | Large screens |

## How It Works

Start with mobile styles, then add larger screen styles:

\`\`\`html
<!-- Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>
\`\`\`

## Common Responsive Patterns

### Stack to Row
\`\`\`html
<!-- Stack on mobile, side-by-side on tablet+ -->
<div class="flex flex-col md:flex-row gap-4">
  <div>Left content</div>
  <div>Right content</div>
</div>
\`\`\`

### Hide/Show Elements
\`\`\`html
<!-- Hide on mobile, show on desktop -->
<nav class="hidden lg:flex">Desktop Menu</nav>

<!-- Show on mobile, hide on desktop -->
<button class="lg:hidden">Mobile Menu</button>
\`\`\`

### Responsive Text
\`\`\`html
<!-- Smaller on mobile, larger on desktop -->
<h1 class="text-2xl md:text-4xl lg:text-6xl">
  Responsive Heading
</h1>
\`\`\`

### Responsive Padding/Margin
\`\`\`html
<!-- Less padding on mobile, more on desktop -->
<section class="p-4 md:p-8 lg:p-16">
  Content with responsive padding
</section>
\`\`\`

## Real-World Example: Responsive Card Grid

\`\`\`html
<div class="container mx-auto px-4">
  <h1 class="text-2xl md:text-3xl font-bold mb-6">Our Services</h1>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    <div class="bg-white rounded-lg shadow p-4 md:p-6">
      <h3 class="text-lg md:text-xl font-semibold mb-2">Service 1</h3>
      <p class="text-sm md:text-base text-gray-600">Description...</p>
    </div>
    <!-- More cards... -->
  </div>
</div>
\`\`\`

## Testing Responsive Design

1. Use browser dev tools (F12 or Cmd+Option+I)
2. Click the device toggle icon
3. Select different device sizes or drag to resize
4. Check that your layout adapts properly
      `
    },
    {
      id: 'common-patterns',
      title: 'Common Vue/Nuxt Patterns',
      content: `
# Common Vue/Nuxt Patterns

These patterns solve problems you'll encounter repeatedly.

## Pattern 1: Loading States

\`\`\`vue
<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <div v-else>
      <!-- Show data -->
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const loading = ref(true)
const error = ref<string | null>(null)
const users = ref([])

onMounted(async () => {
  try {
    users.value = await fetchUsers()
  } catch (e) {
    error.value = 'Failed to load users'
  } finally {
    loading.value = false
  }
})
</script>
\`\`\`

## Pattern 2: Form Handling with v-model

\`\`\`vue
<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="form.name" placeholder="Name" />
    <input v-model="form.email" type="email" placeholder="Email" />
    <select v-model="form.role">
      <option value="user">User</option>
      <option value="admin">Admin</option>
    </select>
    <button type="submit">Save</button>
  </form>
</template>

<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  role: 'user'
})

function handleSubmit() {
  console.log('Form data:', form)
  // Send to API
}
</script>
\`\`\`

\`v-model\` creates two-way binding—changes in the input update the data, and changes in the data update the input.

## Pattern 3: Conditional Classes

\`\`\`vue
<template>
  <!-- Object syntax -->
  <button
    :class="{
      'bg-blue-500': !loading,
      'bg-gray-400': loading,
      'cursor-not-allowed': loading
    }"
  >
    {{ loading ? 'Saving...' : 'Save' }}
  </button>

  <!-- Array syntax -->
  <div :class="[baseClasses, isActive ? 'bg-green-500' : 'bg-gray-500']">
    Status
  </div>
</template>

<script setup lang="ts">
const loading = ref(false)
const isActive = ref(true)
const baseClasses = 'px-4 py-2 rounded text-white'
</script>
\`\`\`

## Pattern 4: Emitting Events to Parent

\`\`\`vue
<!-- ChildComponent.vue -->
<template>
  <button @click="handleClick">Click me</button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  selected: [id: number]
  closed: []
}>()

function handleClick() {
  emit('selected', 42)
}
</script>

<!-- ParentComponent.vue -->
<template>
  <ChildComponent @selected="onSelected" @closed="onClosed" />
</template>

<script setup lang="ts">
function onSelected(id: number) {
  console.log('Selected:', id)
}

function onClosed() {
  console.log('Closed!')
}
</script>
\`\`\`

## Pattern 5: Slots for Flexible Components

\`\`\`vue
<!-- Card.vue -->
<template>
  <div class="bg-white rounded-lg shadow p-4">
    <div class="font-bold mb-2">
      <slot name="header">Default Header</slot>
    </div>
    <div>
      <slot>Default content</slot>
    </div>
  </div>
</template>

<!-- Using the Card -->
<template>
  <Card>
    <template #header>Custom Title</template>
    <p>This is the card body content.</p>
  </Card>
</template>
\`\`\`
      `
    },
    {
      id: 'project-structure',
      title: 'Nuxt Project Structure',
      content: `
# Nuxt Project Structure

Understanding the folder structure helps you know where to put things.

## Standard Nuxt 4 Structure

\`\`\`
my-nuxt-project/
│
├── .nuxt/              # Generated (don't edit)
├── node_modules/       # Dependencies (don't edit)
│
├── assets/             # Uncompiled assets
│   └── css/
│       └── main.css    # Global styles
│
├── components/         # Vue components (auto-imported)
│   ├── layout/
│   │   ├── AppHeader.vue
│   │   └── AppSidebar.vue
│   └── ui/
│       ├── Button.vue
│       └── Card.vue
│
├── composables/        # Reusable logic (auto-imported)
│   ├── useAuth.ts
│   └── useApi.ts
│
├── content/            # Content files (if using @nuxt/content)
│
├── pages/              # Routes (auto-generated)
│   ├── index.vue       # /
│   ├── about.vue       # /about
│   └── users/
│       ├── index.vue   # /users
│       └── [id].vue    # /users/:id
│
├── public/             # Static files (served as-is)
│   ├── favicon.ico
│   └── images/
│
├── server/             # Backend code
│   ├── api/            # API routes
│   │   └── users.ts    # /api/users
│   └── utils/
│       └── db.ts       # Database connection
│
├── stores/             # Pinia stores
│   └── user.ts
│
├── types/              # TypeScript types
│   └── index.ts
│
├── app.vue             # Root component
├── nuxt.config.ts      # Nuxt configuration
├── tailwind.config.ts  # Tailwind configuration
├── package.json        # Dependencies
└── tsconfig.json       # TypeScript configuration
\`\`\`

## What Goes Where?

| Folder | Purpose | Example |
|--------|---------|---------|
| \`components/\` | Reusable UI pieces | Button.vue, Modal.vue |
| \`composables/\` | Shared logic functions | useAuth.ts, useForm.ts |
| \`pages/\` | URL routes | index.vue, about.vue |
| \`stores/\` | Global state (Pinia) | user.ts, cart.ts |
| \`server/api/\` | Backend API routes | users.ts, products.ts |
| \`types/\` | TypeScript interfaces | index.ts |
| \`assets/\` | CSS, fonts (processed) | main.css |
| \`public/\` | Static files (not processed) | images, favicon |

## Auto-Import Magic

Nuxt auto-imports from these folders:

\`\`\`typescript
// You don't need to import these - they just work!

// From composables/
const { user, login } = useAuth()

// From stores/
const userStore = useUserStore()

// Vue functions
const count = ref(0)
const doubled = computed(() => count.value * 2)

// Components in templates just work
// <Button>, <Card>, <AppHeader> - no imports needed
\`\`\`

## The app.vue File

This is your root component, wrapping everything:

\`\`\`vue
<template>
  <div>
    <!-- NuxtPage renders the current page -->
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
// Global setup code here
</script>
\`\`\`

This is like the master template for your entire application.
      `
    }
  ],
  flashcards: [
    {
      id: 1,
      front: 'What is reactivity in Vue?',
      back: 'Reactivity means the UI automatically updates when data changes—like how spreadsheet formulas recalculate when referenced cells change.'
    },
    {
      id: 2,
      front: 'What is the difference between ref() and reactive()?',
      back: 'ref() is for single values (strings, numbers) and requires .value to access. reactive() is for objects and you access properties directly without .value.'
    },
    {
      id: 3,
      front: 'What does the @ symbol mean in Vue templates?',
      back: 'The @ symbol is shorthand for v-on: and is used to listen for events. For example, @click="doSomething" runs doSomething when clicked.'
    },
    {
      id: 4,
      front: 'What does the : symbol mean in Vue templates?',
      back: 'The : symbol is shorthand for v-bind: and makes an attribute dynamic. For example, :src="imageUrl" binds the src attribute to the imageUrl variable.'
    },
    {
      id: 5,
      front: 'What is a computed property?',
      back: 'A computed property is like a spreadsheet formula—it calculates a value from other data and automatically updates when dependencies change. It\'s also cached for performance.'
    },
    {
      id: 6,
      front: 'How does file-based routing work in Nuxt?',
      back: 'Files in the pages/ folder automatically become URL routes. pages/about.vue becomes /about, pages/users/[id].vue becomes /users/:id with a dynamic parameter.'
    },
    {
      id: 7,
      front: 'What is mobile-first responsive design?',
      back: 'Mobile-first means you write styles for mobile by default, then add styles for larger screens using breakpoints like md: and lg: in Tailwind.'
    },
    {
      id: 8,
      front: 'What are props in Vue?',
      back: 'Props are data passed from a parent component to a child component—like function parameters. They allow you to reuse components with different data.'
    },
    {
      id: 9,
      front: 'What does v-model do?',
      back: 'v-model creates two-way binding between a form input and a variable. Changes to the input update the variable, and changes to the variable update the input.'
    },
    {
      id: 10,
      front: 'What is the purpose of the composables/ folder?',
      back: 'Composables are reusable functions that contain reactive logic. They let you share code between components—like having a library of custom spreadsheet formulas.'
    },
    {
      id: 11,
      front: 'What breakpoint prefix shows styles only on tablets and up?',
      back: 'md: - This prefix applies styles at 768px and wider. For example, md:flex makes an element flex only on tablet-sized screens and larger.'
    },
    {
      id: 12,
      front: 'What is the difference between components and pages?',
      back: 'Pages are special components in the pages/ folder that become URL routes. Components are reusable pieces that can be used inside pages or other components.'
    }
  ],
  quizQuestions: [
    {
      id: 1,
      question: 'What does Vue\'s reactivity system do?',
      options: [
        'Automatically updates the UI when data changes',
        'Makes the website load faster',
        'Adds animations to elements',
        'Connects to a database'
      ],
      correctAnswer: 0,
      explanation: 'Vue\'s reactivity automatically updates the DOM whenever the underlying data changes, similar to how spreadsheet formulas auto-recalculate.'
    },
    {
      id: 2,
      question: 'Which is the correct way to create a reactive variable for a number?',
      options: [
        'const count = 0',
        'const count = ref(0)',
        'const count = reactive(0)',
        'let count = ref(0)'
      ],
      correctAnswer: 1,
      explanation: 'Use ref() for primitive values like numbers. reactive() is for objects. Use const because you\'re not reassigning the ref itself.'
    },
    {
      id: 3,
      question: 'In the template, which syntax displays the value of a variable called "userName"?',
      options: [
        '{userName}',
        '{{userName}}',
        '${userName}',
        '[userName]'
      ],
      correctAnswer: 1,
      explanation: 'Vue uses double curly braces {{ }} (called mustache syntax) to display reactive data in templates.'
    },
    {
      id: 4,
      question: 'What file path creates a route at /products/featured?',
      options: [
        'pages/products-featured.vue',
        'pages/products/featured.vue',
        'routes/products/featured.vue',
        'views/products/featured.vue'
      ],
      correctAnswer: 1,
      explanation: 'Nuxt uses the file structure in pages/ to create routes. Nested folders create nested URL paths.'
    },
    {
      id: 5,
      question: 'What does [id].vue in the pages folder mean?',
      options: [
        'A private page only admins can see',
        'A dynamic route that captures a parameter',
        'An optional page that may or may not exist',
        'A page that requires authentication'
      ],
      correctAnswer: 1,
      explanation: 'Square brackets create dynamic route segments. [id].vue matches any value and makes it available as route.params.id.'
    },
    {
      id: 6,
      question: 'Which Tailwind class adds horizontal padding?',
      options: [
        'p-4',
        'px-4',
        'py-4',
        'm-4'
      ],
      correctAnswer: 1,
      explanation: 'px-4 adds padding on the x-axis (left and right). p-4 is all sides, py-4 is vertical, m-4 is margin not padding.'
    },
    {
      id: 7,
      question: 'How do you make a div flex only on medium screens and up?',
      options: [
        'class="flex-md"',
        'class="md:flex"',
        'class="flex:md"',
        'class="@md:flex"'
      ],
      correctAnswer: 1,
      explanation: 'Tailwind uses the pattern breakpoint:class. md:flex applies display:flex at 768px and wider.'
    },
    {
      id: 8,
      question: 'What is the purpose of computed()?',
      options: [
        'To define a function that runs on page load',
        'To create a cached value derived from other reactive data',
        'To delay code execution',
        'To handle form submissions'
      ],
      correctAnswer: 1,
      explanation: 'Computed properties derive values from other reactive data and are cached—they only recalculate when dependencies change.'
    },
    {
      id: 9,
      question: 'How do you pass data to a child component?',
      options: [
        'Using global variables',
        'Using props',
        'Using localStorage',
        'Using emit'
      ],
      correctAnswer: 1,
      explanation: 'Props pass data down from parent to child. emit sends events back up from child to parent.'
    },
    {
      id: 10,
      question: 'What does @submit.prevent do on a form?',
      options: [
        'Prevents the form from being submitted',
        'Handles submit and prevents page reload',
        'Validates the form before submit',
        'Clears the form after submit'
      ],
      correctAnswer: 1,
      explanation: 'The .prevent modifier calls event.preventDefault(), which stops the default form submission (page reload) while still running your handler.'
    }
  ]
}
