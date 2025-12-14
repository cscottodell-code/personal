import type { Module } from '~/types'

export const integrationModule: Module = {
  id: 6,
  title: 'Putting It All Together',
  description: 'Learn to collaborate effectively with developers, write specifications, and build real automations.',
  icon: 'puzzle',
  color: 'from-purple-500 to-pink-500',
  estimatedTime: '2-3 hours',
  sections: [
    {
      id: 'technical-partner-role',
      title: 'Your Role as a Technical Partner',
      content: `
# Your Role as a Technical Partner

Completing this course positions you as a valuable bridge between business needs and technical implementation.

## What You've Learned

| Module | Skills Gained |
|--------|---------------|
| Terminal | Navigate files, run commands, understand the command line |
| Claude Code | Use AI to help write and modify code |
| SurrealDB | Store and query data, understand database concepts |
| n8n | Build automations without code |
| Vue/Nuxt/Tailwind | Understand how modern web apps are built |

## Your New Capabilities

### 1. Speak Both Languages
You can now translate between:
- **Business speak**: "We need to track customer follow-ups"
- **Technical speak**: "Create a table with customer_id, follow_up_date, status, and notes fields"

### 2. Prototype Ideas Quickly
Before involving a developer:
- Build a working n8n automation
- Create a simple Nuxt page
- Query data directly in SurrealDB

### 3. Write Better Specifications
Because you understand the tech, you can write clearer requirements that developers appreciate.

### 4. Debug Basic Issues
- Check terminal output for errors
- Read log messages
- Identify if something is a frontend or backend issue

## The Partnership Model

| What You Do | What the Developer Does |
|-------------|------------------------|
| Define business requirements | Architect the full solution |
| Build prototypes in n8n | Build production-ready code |
| Test and provide feedback | Implement fixes |
| Write specifications | Estimate complexity |
| Query data for reports | Optimize performance |

## Your Value Proposition

You're not becoming a developer—you're becoming a technical translator who can:
1. Save developer time by providing clear specifications
2. Build simple automations yourself
3. Test and validate solutions effectively
4. Communicate technical concepts to non-technical stakeholders
      `
    },
    {
      id: 'writing-specifications',
      title: 'Writing Feature Specifications',
      content: `
# Writing Feature Specifications

A good specification helps developers understand exactly what you need. Here's how to write them effectively.

## The Specification Template

\`\`\`markdown
# Feature: [Name]

## Problem Statement
What problem does this solve? Why is it needed?

## User Story
As a [type of user], I want to [action] so that [benefit].

## Requirements

### Must Have
- [ ] Requirement 1
- [ ] Requirement 2

### Nice to Have
- [ ] Optional feature 1

## User Flow
1. User does X
2. System responds with Y
3. User can then Z

## Data Requirements
- What data needs to be stored?
- What existing data is needed?

## Acceptance Criteria
- [ ] When X happens, Y should occur
- [ ] The page should show Z
\`\`\`

## Example: Sales Follow-Up Tracker

\`\`\`markdown
# Feature: Sales Follow-Up Tracker

## Problem Statement
Sales reps forget to follow up with leads, resulting in lost deals.
We need a system to track and remind reps of pending follow-ups.

## User Story
As a sales rep, I want to see my pending follow-ups
so that I never forget to contact a lead.

## Requirements

### Must Have
- [ ] List of all pending follow-ups sorted by date
- [ ] Ability to mark a follow-up as complete
- [ ] Add notes to each follow-up
- [ ] Filter by lead status (hot, warm, cold)

### Nice to Have
- [ ] Email reminders the morning of
- [ ] Dashboard showing follow-up stats

## User Flow
1. Rep logs in and sees today's follow-ups
2. Rep clicks on a follow-up to see lead details
3. Rep calls/emails the lead
4. Rep marks as complete and adds notes
5. System asks for next follow-up date

## Data Requirements
- Lead table: id, name, email, phone, status
- Follow-up table: id, lead_id, date, notes, completed

## Acceptance Criteria
- [ ] Page loads in under 2 seconds
- [ ] Follow-ups appear in date order (oldest first)
- [ ] Completing a follow-up removes it from the list
- [ ] Notes support basic text (no formatting needed)
\`\`\`

## Tips for Great Specs

1. **Be specific**: "Fast load time" → "Loads in under 2 seconds"
2. **Include examples**: Show sample data or scenarios
3. **Define edges**: What happens if there are no follow-ups?
4. **Prioritize**: Must have vs nice to have
5. **Skip implementation**: Don't tell them how to build it
      `
    },
    {
      id: 'reporting-bugs',
      title: 'Reporting Bugs Effectively',
      content: `
# Reporting Bugs Effectively

A good bug report helps developers fix issues quickly. A bad report wastes everyone's time.

## The Bug Report Template

\`\`\`markdown
# Bug: [Brief Description]

## Environment
- Browser: Chrome 120
- Device: MacBook Pro
- User account: scott@company.com

## Steps to Reproduce
1. Go to /dashboard
2. Click "Add New Lead"
3. Enter name "Test Lead"
4. Click Save

## Expected Behavior
Lead should be saved and appear in the list.

## Actual Behavior
Error message appears: "Failed to save lead"
Lead is not added to the list.

## Screenshots/Video
[Attach screenshot of error]

## Console Errors (if any)
\`\`\`
Error: POST /api/leads failed with status 500
\`\`\`

## Frequency
Happens every time / Sometimes / Only once

## Additional Context
Started happening after yesterday's update.
Only affects the "Add Lead" form, "Edit Lead" works fine.
\`\`\`

## How to Get Console Errors

1. Open the page where the bug occurs
2. Press \`Cmd + Option + I\` (Mac) or \`F12\` (Windows)
3. Click the "Console" tab
4. Reproduce the bug
5. Copy any red error messages

## Good vs Bad Bug Reports

### Bad Report ❌
> "The save button doesn't work"

### Good Report ✅
> "When I click Save on the Add Lead form after entering a name longer than 50 characters, I get an error message 'Failed to save lead'. Console shows 'POST /api/leads failed with status 500'. Happens every time with long names, works fine with short names."

## What Developers Wish You Knew

1. **Reproduce it first**: Can you make it happen again?
2. **One bug per report**: Don't combine multiple issues
3. **Include context**: What were you trying to do?
4. **Check if it's known**: Search existing bug reports
5. **Don't assume the cause**: "Database is broken" vs "Save button returns error"

## Screenshot Tips

- Show the whole screen, not just a cropped portion
- Circle or highlight the problem area
- Include any error messages
- If it's a flow issue, record a short video
      `
    },
    {
      id: 'code-review-basics',
      title: 'Code Review Basics',
      content: `
# Code Review Basics

Even without writing code, you can review it for obvious issues and business logic.

## What You Can Review

### 1. Business Logic
Does the code do what the specification asked for?

\`\`\`javascript
// Spec: "Apply 10% discount for orders over $100"

// Check: Is this implementing the spec correctly?
if (orderTotal > 100) {
  discount = orderTotal * 0.10
}
// ✅ Looks correct!

// What if the code said:
if (orderTotal >= 100) {  // >= instead of >
  discount = orderTotal * 0.15  // 15% instead of 10%
}
// ❌ Wrong threshold and percentage!
\`\`\`

### 2. Text and Labels
Are error messages, labels, and text correct?

\`\`\`javascript
// Check button labels
<button>Submitt</button>  // ❌ Typo

// Check error messages
"Please enter you email"  // ❌ "you" should be "your"
\`\`\`

### 3. Obvious Logic Errors

\`\`\`javascript
// Should this be && or ||?
if (userRole === 'admin' || userRole === 'manager') {
  showAdminPanel()
}

// Is this condition right?
if (temperature > 100) {
  showWarning('Too cold!')  // ❌ Should say "Too hot!"
}
\`\`\`

### 4. Missing Requirements
Did they forget anything from the spec?

- "We asked for email validation—I don't see it"
- "The spec said to show a confirmation message"
- "What about the 'Cancel' button we discussed?"

## How to Leave Review Comments

### Be Specific
❌ "This is wrong"
✅ "The discount should be 10%, not 15% according to the spec"

### Ask Questions
❌ "Change this"
✅ "Should this apply to orders of exactly $100? The spec said 'over $100'"

### Be Kind
❌ "This is obviously broken"
✅ "I think there might be an issue here—the spec mentioned X but I see Y"

## Using GitHub for Reviews

1. Open the Pull Request
2. Click "Files changed" tab
3. Hover over a line and click the "+" icon
4. Type your comment
5. Click "Start a review" or "Add single comment"
6. When done, click "Finish your review"

## What Not to Review

- Code style (leave that to automated tools)
- Performance optimizations (unless obvious)
- Technical architecture decisions
- Language-specific best practices

Focus on: Does it do what we asked for?
      `
    },
    {
      id: 'git-branch-naming',
      title: 'Git Branch Naming',
      content: `
# Git Branch Naming

When requesting features or fixes, knowing branch naming conventions helps you communicate clearly with developers.

## Common Branch Naming Patterns

\`\`\`
feature/description-here
fix/description-here
hotfix/urgent-fix-here
\`\`\`

## Examples

| Type | Branch Name | Purpose |
|------|-------------|---------|
| Feature | \`feature/follow-up-tracker\` | New functionality |
| Bug Fix | \`fix/login-error-message\` | Fix a bug |
| Hotfix | \`hotfix/payment-broken\` | Urgent production fix |

## Why This Matters

When you see or reference branches:

\`\`\`bash
# You might say:
"Can you check the feature/follow-up-tracker branch?"
"When will fix/export-csv be merged?"
"Is hotfix/pricing-calculation deployed?"
\`\`\`

## Pull Request Titles

When features are ready for review, they become Pull Requests (PRs):

\`\`\`
[Feature] Add follow-up tracker to dashboard
[Fix] Correct discount calculation for bulk orders
[Hotfix] Fix payment processing error
\`\`\`

## Understanding Git Flow

\`\`\`
main (production)
  │
  └─── develop (testing)
         │
         ├─── feature/new-thing
         │
         └─── fix/broken-thing
\`\`\`

1. Developers create branches from \`develop\`
2. They build the feature/fix
3. They create a Pull Request
4. Code is reviewed
5. Changes merge into \`develop\`
6. Eventually \`develop\` merges to \`main\` (production)

## Useful Git Commands to Know

\`\`\`bash
# See what branch you're on
git branch

# See recent changes
git log --oneline -10

# See what's changed but not committed
git status

# Switch to a branch to test it
git checkout feature/follow-up-tracker
\`\`\`

## Communication Tips

Instead of:
> "The thing you built isn't working"

Say:
> "I'm seeing an issue with the feature/follow-up-tracker branch—the filter doesn't show hot leads"
      `
    },
    {
      id: 'communication-practices',
      title: 'Communication Best Practices',
      content: `
# Communication Best Practices

Effective communication with developers speeds up projects and reduces frustration.

## The 5 Ws of Feature Requests

### 1. What
Be specific about what you need.

❌ "We need a better dashboard"
✅ "We need a dashboard showing: total leads this month, conversion rate, and top 5 reps by sales"

### 2. Why
Explain the business reason.

❌ "Add an export button"
✅ "Add an export button so reps can share lead lists with their managers during weekly meetings"

### 3. Who
Clarify who will use it.

❌ "Users should see this"
✅ "Only managers should see this; regular reps should not have access"

### 4. When
Provide realistic timelines.

❌ "We need this ASAP"
✅ "We need this before the sales conference on March 15th"

### 5. Where
Specify location in the app.

❌ "Add a button"
✅ "Add an export button in the top-right corner of the Leads table, next to the filter dropdown"

## Prioritization Language

| Phrase | What It Means |
|--------|---------------|
| "Blocker" | We cannot work until this is fixed |
| "Critical" | Major impact, needs attention this week |
| "High priority" | Important, schedule it soon |
| "Medium priority" | Should be done but not urgent |
| "Nice to have" | Do it if there's time |

## Async Communication Tips

### For Chat (Slack, Teams)
- Lead with context: "About the lead tracker feature—"
- Be complete: Don't send "Hey" and wait for response
- Use threads for discussions
- Include screenshots

### For Tickets/Issues
- One topic per ticket
- Use the templates provided
- Link related tickets
- Update status as things change

## Meeting Communication

### Before Sprint Planning
- Have specifications written
- Prioritize your requests
- Be ready to answer questions

### During Demo
- Test before the demo
- Prepare specific feedback
- Note any issues to log later

### After Deployment
- Test thoroughly
- Report issues with details
- Acknowledge what's working

## Building Developer Trust

Things developers appreciate:
1. Clear, complete specifications
2. Prompt responses to questions
3. Thorough testing and feedback
4. Acknowledging good work
5. Realistic expectations

Things that frustrate developers:
1. Vague requirements
2. Changing specs mid-development
3. Saying "ASAP" for everything
4. Not testing before reporting bugs
5. "It doesn't work" without details
      `
    },
    {
      id: 'n8n-automations',
      title: 'Building n8n Automations',
      content: `
# Building n8n Automations

Let's build a practical automation: notifying the team when a new lead is added.

## Automation Goal

When a new lead is added to our system:
1. Send a Slack message to the sales channel
2. Create a follow-up task for 3 days later
3. Log the action

## Step 1: Set Up the Trigger

Create a new workflow and add a **Webhook** trigger:

- Name: "New Lead Webhook"
- HTTP Method: POST
- Path: /new-lead

This creates a URL like:
\`\`\`
https://your-n8n.com/webhook/new-lead
\`\`\`

## Step 2: Process the Data

Add a **Set** node to format the incoming data:

\`\`\`json
{
  "leadName": "{{ $json.name }}",
  "leadEmail": "{{ $json.email }}",
  "leadSource": "{{ $json.source }}",
  "assignedRep": "{{ $json.rep }}",
  "followUpDate": "{{ $now.plus(3, 'days').toISODate() }}"
}
\`\`\`

## Step 3: Send Slack Notification

Add a **Slack** node:

- Channel: #sales-leads
- Message:
\`\`\`
🎯 New Lead: {{ $json.leadName }}
📧 Email: {{ $json.leadEmail }}
📍 Source: {{ $json.leadSource }}
👤 Assigned to: {{ $json.assignedRep }}

Follow up by: {{ $json.followUpDate }}
\`\`\`

## Step 4: Create Follow-Up Task

Add an **HTTP Request** node to your task system:

- Method: POST
- URL: https://your-api.com/tasks
- Body:
\`\`\`json
{
  "title": "Follow up with {{ $json.leadName }}",
  "dueDate": "{{ $json.followUpDate }}",
  "assignee": "{{ $json.assignedRep }}"
}
\`\`\`

## Step 5: Log the Action

Add another **HTTP Request** to log:

- Method: POST
- URL: https://your-api.com/logs
- Body:
\`\`\`json
{
  "action": "lead_created",
  "lead": "{{ $json.leadName }}",
  "timestamp": "{{ $now.toISO() }}"
}
\`\`\`

## Complete Workflow Visual

\`\`\`
[Webhook] → [Set] → [Slack] → [Create Task] → [Log]
\`\`\`

## Testing Your Automation

1. Save and activate the workflow
2. Copy the webhook URL
3. Use the HTTP tool to test:

\`\`\`bash
curl -X POST https://your-n8n.com/webhook/new-lead \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Test Lead",
    "email": "test@example.com",
    "source": "Website",
    "rep": "Scott"
  }'
\`\`\`

4. Check Slack for the message
5. Verify the task was created

## Ideas for More Automations

| Trigger | Action |
|---------|--------|
| Deal closed | Send celebration to Slack, update spreadsheet |
| Lead inactive 7 days | Send reminder email to rep |
| High-value lead added | Notify manager immediately |
| Daily at 8am | Send digest of pending follow-ups |
| Form submission | Create lead, assign rep, send welcome email |
      `
    },
    {
      id: 'next-steps',
      title: 'Next Steps',
      content: `
# Next Steps

Congratulations on completing the course! Here's how to continue building your skills.

## Immediate Actions

### 1. Practice Terminal Daily
For the next 30 days, try to:
- Navigate to project folders using cd
- List files with ls
- Open files in VS Code from terminal
- Run npm commands

### 2. Build Your First n8n Automation
Start with something simple:
- Daily email digest of something
- Slack notification on form submission
- Backup data to Google Sheets

### 3. Create a Simple Nuxt Page
Even just:
- A personal dashboard
- A tool calculator
- A simple form

## Skill Development Path

### Month 1: Foundation
- [ ] Use terminal daily for basic navigation
- [ ] Build 3 n8n automations
- [ ] Query SurrealDB using Surrealist
- [ ] Create one simple Vue component

### Month 2: Integration
- [ ] Connect n8n to SurrealDB
- [ ] Build a simple Nuxt app with 3 pages
- [ ] Write 2 feature specifications
- [ ] Help test and review code

### Month 3: Advanced
- [ ] Build a complete workflow with n8n
- [ ] Create a Nuxt app with database
- [ ] Lead a feature from spec to deployment
- [ ] Train someone else on what you've learned

## Resources for Continued Learning

### Official Documentation
- Vue.js: https://vuejs.org/guide
- Nuxt: https://nuxt.com/docs
- Tailwind: https://tailwindcss.com/docs
- SurrealDB: https://surrealdb.com/docs
- n8n: https://docs.n8n.io

### Practice Projects

1. **Lead Tracker Dashboard**
   - Display leads from SurrealDB
   - Filter by status
   - Show basic stats

2. **Daily Standup Bot**
   - n8n asks team for updates via Slack
   - Compiles responses
   - Posts summary

3. **Sales Calculator**
   - Vue component for income projections
   - Multiple scenarios
   - Export results

## Working with Your Developer

Now that you've completed this course:

1. **Share what you've learned**: Let them know your new capabilities
2. **Start small**: Take on simple tasks that use your new skills
3. **Ask questions**: Use your vocabulary to ask better questions
4. **Prototype first**: Build rough versions in n8n before requesting features
5. **Write specs**: Document requirements clearly

## Final Thoughts

You now have a foundation in:
- ✅ Terminal navigation and commands
- ✅ AI-assisted development with Claude Code
- ✅ Database concepts with SurrealDB
- ✅ Workflow automation with n8n
- ✅ Modern web development with Vue/Nuxt/Tailwind

You're not a developer, but you're a powerful technical partner who can:
- Speak the language
- Build prototypes
- Write specifications
- Test effectively
- Communicate clearly

Keep practicing, keep building, and keep learning!
      `
    }
  ],
  flashcards: [
    {
      id: 1,
      front: 'What is your role as a technical partner?',
      back: 'You translate between business needs and technical implementation, prototype ideas, write specifications, and communicate effectively with developers—without needing to be a developer yourself.'
    },
    {
      id: 2,
      front: 'What are the five sections of a good feature specification?',
      back: 'Problem Statement, User Story, Requirements (must have/nice to have), User Flow, and Acceptance Criteria.'
    },
    {
      id: 3,
      front: 'What information should a bug report include?',
      back: 'Environment details, Steps to Reproduce, Expected Behavior, Actual Behavior, Screenshots/Video, Console Errors, and Frequency.'
    },
    {
      id: 4,
      front: 'How do you open browser developer tools to see console errors?',
      back: 'Press Cmd + Option + I on Mac or F12 on Windows, then click the Console tab.'
    },
    {
      id: 5,
      front: 'What can you review in code even without coding experience?',
      back: 'Business logic correctness, text/labels for typos, obvious logic errors, and missing requirements from the specification.'
    },
    {
      id: 6,
      front: 'What are the three common branch name prefixes?',
      back: 'feature/ for new features, fix/ for bug fixes, and hotfix/ for urgent production fixes.'
    },
    {
      id: 7,
      front: 'What are the 5 Ws of feature requests?',
      back: 'What (specific need), Why (business reason), Who (users), When (timeline), and Where (location in app).'
    },
    {
      id: 8,
      front: 'What is the difference between "Blocker" and "Nice to have" priority?',
      back: 'Blocker means work cannot continue until fixed. Nice to have means do it only if there\'s time—it\'s not essential.'
    },
    {
      id: 9,
      front: 'What frustrates developers most about requirements?',
      back: 'Vague requirements, changing specs mid-development, everything marked "ASAP", not testing before reporting bugs, and "it doesn\'t work" without details.'
    },
    {
      id: 10,
      front: 'What should you do before requesting a feature from a developer?',
      back: 'Consider building a prototype in n8n first to demonstrate the workflow and validate the idea before involving development resources.'
    }
  ],
  quizQuestions: [
    {
      id: 1,
      question: 'What is the primary role of a technical partner?',
      options: [
        'Write production code',
        'Bridge business needs and technical implementation',
        'Manage the development team',
        'Design user interfaces'
      ],
      correctAnswer: 1,
      explanation: 'A technical partner translates between business requirements and technical implementation, without necessarily writing production code.'
    },
    {
      id: 2,
      question: 'Which section of a specification describes the format "As a [user], I want to [action] so that [benefit]"?',
      options: [
        'Problem Statement',
        'User Story',
        'Requirements',
        'Acceptance Criteria'
      ],
      correctAnswer: 1,
      explanation: 'The User Story section uses this format to describe features from the user\'s perspective and motivation.'
    },
    {
      id: 3,
      question: 'What\'s the MOST important part of a bug report?',
      options: [
        'The reporter\'s opinion on what caused it',
        'Steps to Reproduce the bug',
        'How urgent it is',
        'How long it\'s been happening'
      ],
      correctAnswer: 1,
      explanation: 'Steps to Reproduce are most important because developers need to see the bug happen to fix it. Without reproduction steps, they\'re guessing.'
    },
    {
      id: 4,
      question: 'Which branch naming convention indicates a new feature?',
      options: [
        'fix/new-login-page',
        'hotfix/new-login-page',
        'feature/new-login-page',
        'update/new-login-page'
      ],
      correctAnswer: 2,
      explanation: 'The feature/ prefix indicates new functionality being added to the application.'
    },
    {
      id: 5,
      question: 'What should you do before reporting a bug?',
      options: [
        'Try to fix it yourself',
        'Try to reproduce it',
        'Email the developer immediately',
        'Wait a day to see if it fixes itself'
      ],
      correctAnswer: 1,
      explanation: 'Always try to reproduce the bug first. If you can\'t make it happen again, developers will struggle to find and fix it.'
    },
    {
      id: 6,
      question: 'What makes a bad feature request?',
      options: [
        'Including user stories',
        'Prioritizing requirements',
        'Saying "ASAP" without business context',
        'Providing acceptance criteria'
      ],
      correctAnswer: 2,
      explanation: 'Saying "ASAP" for everything without explaining the business need frustrates developers and makes prioritization impossible.'
    },
    {
      id: 7,
      question: 'When reviewing code, what should you focus on?',
      options: [
        'Code formatting and style',
        'Whether it matches the specification',
        'Database optimization',
        'JavaScript best practices'
      ],
      correctAnswer: 1,
      explanation: 'As a non-developer, focus on whether the code does what the specification asked for. Leave technical style and optimization to developers.'
    },
    {
      id: 8,
      question: 'What should you build before requesting a complex feature from a developer?',
      options: [
        'A full database schema',
        'A prototype in n8n',
        'Complete frontend designs',
        'A technical specification'
      ],
      correctAnswer: 1,
      explanation: 'Building a prototype in n8n helps validate the workflow and demonstrate the idea before involving development resources.'
    },
    {
      id: 9,
      question: 'What is the correct order for a basic git workflow?',
      options: [
        'Main → Feature Branch → Pull Request → Review → Merge',
        'Feature Branch → Main → Review → Merge → Deploy',
        'Review → Feature Branch → Main → Pull Request → Merge',
        'Pull Request → Feature Branch → Review → Main → Merge'
      ],
      correctAnswer: 0,
      explanation: 'Work starts from main, a feature branch is created, changes are made, a Pull Request is opened, it\'s reviewed, then merged back.'
    },
    {
      id: 10,
      question: 'What should your first practice goal be after completing this course?',
      options: [
        'Build a complete production application',
        'Learn a new programming language',
        'Use terminal daily for basic navigation',
        'Rewrite all existing automations'
      ],
      correctAnswer: 2,
      explanation: 'Starting with daily terminal practice builds fundamental skills that support everything else you\'ve learned.'
    }
  ]
}
