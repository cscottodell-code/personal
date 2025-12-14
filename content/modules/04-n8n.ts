import type { Module } from '~/types'

export const n8nModule: Module = {
  id: 4,
  title: "n8n Workflow Automation",
  description: "Visual workflow building and automation",
  estimatedTime: "2-3 hours",

  sections: [
    {
      id: "4-1",
      title: "4.1 What is n8n?",
      content: `
        <h3>Visual Automation</h3>
        <p>n8n (pronounced "n-eight-n") is a workflow automation platform. Think of it as creating flowcharts that actually DO things - send emails, update databases, call APIs, and more.</p>

        <h3>Spreadsheet Analogy</h3>
        <p>If you've used Excel macros or Power Automate:</p>
        <ul>
          <li>n8n workflows = Macros on steroids</li>
          <li>Nodes = Individual steps/actions</li>
          <li>Connections = The flow between steps</li>
          <li>Data = Like passing cell values between formulas</li>
        </ul>

        <h3>Why n8n?</h3>
        <ul>
          <li><strong>Visual:</strong> Drag-and-drop interface</li>
          <li><strong>Self-hosted:</strong> Your data stays on your machine</li>
          <li><strong>Extensible:</strong> 400+ integrations, plus custom code</li>
          <li><strong>Free:</strong> Open source core</li>
        </ul>

        <h3>Real Use Cases</h3>
        <ul>
          <li>When a form is submitted → Add to CRM → Send welcome email</li>
          <li>Daily at 9am → Pull sales data → Create report → Post to Slack</li>
          <li>When file uploaded → Process with AI → Save results to database</li>
        </ul>
      `
    },
    {
      id: "4-2",
      title: "4.2 Installation and First Launch",
      content: `
        <h3>You Already Have It!</h3>
        <p>We installed n8n earlier. Start it with:</p>
        <div class="code-block"><code>n8n</code></div>

        <h3>First Launch</h3>
        <ol>
          <li>Open Terminal</li>
          <li>Type <code>n8n</code> and press Enter</li>
          <li>Wait for "Editor is now accessible via: http://localhost:5678"</li>
          <li>Open that URL in your browser</li>
        </ol>

        <h3>Initial Setup</h3>
        <p>First time, you'll:</p>
        <ol>
          <li>Create an owner account (email + password)</li>
          <li>Choose your usage type</li>
          <li>See the main workflow editor</li>
        </ol>

        <h3>The Interface</h3>
        <ul>
          <li><strong>Canvas:</strong> Where you build workflows (center)</li>
          <li><strong>Node panel:</strong> Add nodes (+ button or right-click)</li>
          <li><strong>Sidebar:</strong> Workflows list, credentials, settings</li>
          <li><strong>Execute button:</strong> Run your workflow (top right)</li>
        </ul>

        <h3>Stopping n8n</h3>
        <p>In Terminal, press <code>Ctrl + C</code> to stop the server.</p>
      `
    },
    {
      id: "4-3",
      title: "4.3 Understanding Nodes",
      content: `
        <h3>What's a Node?</h3>
        <p>A node is one step in your workflow. Each node does one thing - receives data, processes it, or sends it somewhere.</p>

        <h3>Node Types</h3>
        <table class="command-table">
          <thead><tr><th>Type</th><th>Purpose</th><th>Examples</th></tr></thead>
          <tbody>
            <tr><td>Trigger</td><td>Starts the workflow</td><td>Webhook, Schedule, Form</td></tr>
            <tr><td>Action</td><td>Does something</td><td>Send Email, HTTP Request, Database</td></tr>
            <tr><td>Logic</td><td>Makes decisions</td><td>If, Switch, Merge</td></tr>
            <tr><td>Transform</td><td>Changes data</td><td>Set, Code, Split</td></tr>
          </tbody>
        </table>

        <h3>Node Anatomy</h3>
        <ul>
          <li><strong>Input:</strong> Left side - receives data</li>
          <li><strong>Output:</strong> Right side - sends data</li>
          <li><strong>Settings:</strong> Configure what the node does</li>
          <li><strong>Run data:</strong> See results after execution</li>
        </ul>

        <h3>Connecting Nodes</h3>
        <p>Drag from one node's output (right) to another's input (left). Data flows through the connection.</p>

        <h3>Spreadsheet Analogy</h3>
        <p>Each node is like a cell with a formula:</p>
        <ul>
          <li>Input = Cell references (A1, B2)</li>
          <li>Node logic = The formula</li>
          <li>Output = The result that can be used by other cells</li>
        </ul>
      `
    },
    {
      id: "4-4",
      title: "4.4 Trigger Nodes",
      content: `
        <h3>Starting Your Workflow</h3>
        <p>Every workflow needs a trigger - the event that starts it.</p>

        <h3>Common Triggers</h3>
        <table class="command-table">
          <thead><tr><th>Trigger</th><th>When It Runs</th></tr></thead>
          <tbody>
            <tr><td>Manual Trigger</td><td>When you click "Execute"</td></tr>
            <tr><td>Schedule Trigger</td><td>At set times (cron)</td></tr>
            <tr><td>Webhook</td><td>When URL is called</td></tr>
            <tr><td>Form Trigger</td><td>When form is submitted</td></tr>
            <tr><td>Email Trigger</td><td>When email received</td></tr>
          </tbody>
        </table>

        <h3>Schedule Trigger</h3>
        <p>Run workflows automatically:</p>
        <ul>
          <li>Every hour</li>
          <li>Daily at 9am</li>
          <li>Every Monday at 8am</li>
          <li>First day of month</li>
        </ul>

        <h3>Webhook Trigger</h3>
        <p>Creates a URL that starts your workflow when called:</p>
        <ol>
          <li>Add Webhook node</li>
          <li>Copy the webhook URL</li>
          <li>Activate workflow</li>
          <li>Any POST to that URL triggers it</li>
        </ol>

        <h3>Testing Triggers</h3>
        <p>Click "Execute" on Manual Trigger, or "Listen for Test Event" on Webhook to test without activating.</p>
      `
    },
    {
      id: "4-5",
      title: "4.5 Action Nodes",
      content: `
        <h3>Making Things Happen</h3>
        <p>Action nodes do the actual work - sending emails, making API calls, updating databases.</p>

        <h3>Popular Action Nodes</h3>
        <table class="command-table">
          <thead><tr><th>Node</th><th>What It Does</th></tr></thead>
          <tbody>
            <tr><td>HTTP Request</td><td>Call any API</td></tr>
            <tr><td>Send Email</td><td>Send via Gmail, SMTP, etc.</td></tr>
            <tr><td>Slack</td><td>Post messages to Slack</td></tr>
            <tr><td>Google Sheets</td><td>Read/write spreadsheets</td></tr>
            <tr><td>Postgres/MySQL</td><td>Database operations</td></tr>
          </tbody>
        </table>

        <h3>HTTP Request Node</h3>
        <p>The most versatile node - can call any web API:</p>
        <ul>
          <li>Method: GET, POST, PUT, DELETE</li>
          <li>URL: The API endpoint</li>
          <li>Headers: Authentication, content type</li>
          <li>Body: Data to send (for POST/PUT)</li>
        </ul>

        <h3>Credentials</h3>
        <p>Many nodes need credentials (API keys, passwords):</p>
        <ol>
          <li>Click the node</li>
          <li>Look for "Credentials" dropdown</li>
          <li>Click "Create New"</li>
          <li>Enter your credentials once</li>
          <li>n8n stores them securely</li>
        </ol>
      `
    },
    {
      id: "4-6",
      title: "4.6 Logic Nodes (If/Switch)",
      content: `
        <h3>Making Decisions</h3>
        <p>Logic nodes create branches in your workflow based on conditions.</p>

        <h3>If Node</h3>
        <p>Two outputs: True or False</p>
        <div class="code-block"><code>Condition: {{ $json.status }} equals "approved"

True path → Send confirmation email
False path → Send rejection email</code></div>

        <h3>Switch Node</h3>
        <p>Multiple outputs based on a value:</p>
        <div class="code-block"><code>Based on: {{ $json.department }}

"Sales" → Route to sales team
"Support" → Route to support
"Billing" → Route to billing
Default → Route to general</code></div>

        <h3>Condition Types</h3>
        <table class="command-table">
          <thead><tr><th>Type</th><th>Example</th></tr></thead>
          <tbody>
            <tr><td>Equals</td><td>status equals "active"</td></tr>
            <tr><td>Not equals</td><td>status not equals "deleted"</td></tr>
            <tr><td>Contains</td><td>email contains "@gmail"</td></tr>
            <tr><td>Greater than</td><td>amount > 100</td></tr>
            <tr><td>Is empty</td><td>notes is empty</td></tr>
          </tbody>
        </table>

        <h3>Spreadsheet Analogy</h3>
        <p>Logic nodes are like IF functions:</p>
        <ul>
          <li>If node = <code>=IF(A1="approved", do_this, do_that)</code></li>
          <li>Switch node = Nested IFs or SWITCH function</li>
        </ul>
      `
    },
    {
      id: "4-7",
      title: "4.7 Data Expressions",
      content: `
        <h3>Accessing Data</h3>
        <p>Use expressions to reference data from previous nodes:</p>

        <h3>Basic Syntax</h3>
        <div class="code-block"><code>{{ $json.fieldName }}        // Current item's field
{{ $json.user.email }}       // Nested field
{{ $json.items[0].name }}    // Array item</code></div>

        <h3>Referencing Other Nodes</h3>
        <div class="code-block"><code>{{ $('Node Name').item.json.field }}   // Specific node
{{ $input.first().json.field }}        // First item from input
{{ $input.all() }}                     // All input items</code></div>

        <h3>Useful Functions</h3>
        <div class="code-block"><code>{{ $now }}                    // Current timestamp
{{ $today }}                  // Today's date
{{ $json.name.toUpperCase() }} // JavaScript methods work!
{{ $json.price * 1.1 }}       // Math operations</code></div>

        <h3>Expression Editor</h3>
        <p>Click the expression button (fx) next to any field to:</p>
        <ul>
          <li>See available data</li>
          <li>Browse previous node outputs</li>
          <li>Test expressions</li>
          <li>Get autocomplete suggestions</li>
        </ul>

        <h3>Spreadsheet Analogy</h3>
        <table class="command-table">
          <thead><tr><th>Spreadsheet</th><th>n8n Expression</th></tr></thead>
          <tbody>
            <tr><td>=A1</td><td>{{ $json.fieldName }}</td></tr>
            <tr><td>=Sheet2!B5</td><td>{{ $('Other Node').item.json.field }}</td></tr>
            <tr><td>=UPPER(A1)</td><td>{{ $json.field.toUpperCase() }}</td></tr>
          </tbody>
        </table>
      `
    },
    {
      id: "4-8",
      title: "4.8 Working with JSON",
      content: `
        <h3>Data in n8n is JSON</h3>
        <p>All data flowing through n8n is JSON (JavaScript Object Notation). It's similar to how spreadsheet data has rows and columns.</p>

        <h3>JSON Structure</h3>
        <div class="code-block"><code>{
  "name": "John Doe",
  "email": "john@example.com",
  "orders": [
    { "id": 1, "total": 99.99 },
    { "id": 2, "total": 149.99 }
  ]
}</code></div>

        <h3>Accessing JSON</h3>
        <div class="code-block"><code>{{ $json.name }}           // "John Doe"
{{ $json.orders[0].total }} // 99.99
{{ $json.orders.length }}   // 2</code></div>

        <h3>Set Node</h3>
        <p>Transform or create data:</p>
        <div class="code-block"><code>// Create new fields
fullName = {{ $json.firstName }} {{ $json.lastName }}
orderTotal = {{ $json.items.reduce((sum, i) => sum + i.price, 0) }}</code></div>

        <h3>Split Out Node</h3>
        <p>Turn one item with an array into multiple items:</p>
        <div class="code-block"><code>// Before: 1 item with 3 orders
{ orders: [order1, order2, order3] }

// After Split Out on "orders": 3 items
order1
order2
order3</code></div>
      `
    },
    {
      id: "4-9",
      title: "4.9 Connecting to APIs",
      content: `
        <h3>HTTP Request Node</h3>
        <p>Your gateway to any API:</p>

        <h3>GET Request (Fetch Data)</h3>
        <div class="code-block"><code>Method: GET
URL: https://api.example.com/users
Authentication: Bearer Token
Headers:
  Content-Type: application/json</code></div>

        <h3>POST Request (Send Data)</h3>
        <div class="code-block"><code>Method: POST
URL: https://api.example.com/users
Body:
{
  "name": "{{ $json.name }}",
  "email": "{{ $json.email }}"
}</code></div>

        <h3>Authentication Types</h3>
        <ul>
          <li><strong>None:</strong> Public APIs</li>
          <li><strong>Basic Auth:</strong> Username + password</li>
          <li><strong>Header Auth:</strong> API key in header</li>
          <li><strong>OAuth2:</strong> Token-based (Google, etc.)</li>
        </ul>

        <h3>Error Handling</h3>
        <p>Configure what happens when API calls fail:</p>
        <ul>
          <li>Continue workflow</li>
          <li>Stop workflow</li>
          <li>Retry with delay</li>
        </ul>
      `
    },
    {
      id: "4-10",
      title: "4.10 Building Your First Workflow",
      content: `
        <h3>Example: Daily Report Email</h3>
        <p>Let's build a practical workflow:</p>

        <h3>Step 1: Trigger</h3>
        <ol>
          <li>Add "Schedule Trigger" node</li>
          <li>Set to: Every day at 9:00 AM</li>
        </ol>

        <h3>Step 2: Fetch Data</h3>
        <ol>
          <li>Add "HTTP Request" node</li>
          <li>GET your data endpoint</li>
          <li>Connect from trigger</li>
        </ol>

        <h3>Step 3: Format Message</h3>
        <ol>
          <li>Add "Set" node</li>
          <li>Create "message" field</li>
          <li>Value: "Today's sales: $" + "{{ $json.total }}"</li>
        </ol>

        <h3>Step 4: Send Email</h3>
        <ol>
          <li>Add "Send Email" node</li>
          <li>Configure Gmail credentials</li>
          <li>To: your@email.com</li>
          <li>Subject: Daily Sales Report</li>
          <li>Body: {{ $json.message }}</li>
        </ol>

        <h3>Step 5: Test & Activate</h3>
        <ol>
          <li>Click "Execute Workflow"</li>
          <li>Check each node ran successfully</li>
          <li>Toggle "Active" in top right</li>
        </ol>

        <h3>Debugging Tips</h3>
        <ul>
          <li>Click any node to see its output data</li>
          <li>Check execution history in left sidebar</li>
          <li>Use "Execute Previous Node" to test incrementally</li>
        </ul>
      `
    }
  ],

  flashcards: [
    { id: "fc-4-1", front: "What are the 4 main node types in n8n?", back: "Trigger, Action, Logic, Transform" },
    { id: "fc-4-2", front: "How do you access a field from the previous node?", back: "<code>{{ $json.fieldName }}</code>" },
    { id: "fc-4-3", front: "What node starts a workflow?", back: "A Trigger node (Schedule, Webhook, Form, etc.)" },
    { id: "fc-4-4", front: "How do you access nested data?", back: "<code>{{ $json.parent.child }}</code> or <code>{{ $json.array[0].field }}</code>" },
    { id: "fc-4-5", front: "What's the HTTP Request node used for?", back: "Calling any web API (GET, POST, PUT, DELETE)" },
    { id: "fc-4-6", front: "How do you reference a specific node by name?", back: "<code>{{ $('Node Name').item.json.field }}</code>" },
    { id: "fc-4-7", front: "What node creates conditional branches?", back: "If node (2 branches) or Switch node (multiple branches)" },
    { id: "fc-4-8", front: "How do you stop a running n8n server?", back: "<code>Ctrl + C</code> in Terminal" },
    { id: "fc-4-9", front: "What format does data use in n8n?", back: "JSON (JavaScript Object Notation)" },
    { id: "fc-4-10", front: "How do you make a workflow run automatically?", back: "Toggle 'Active' in the top right after adding a Trigger" }
  ],

  quiz: [
    {
      id: "q-4-1",
      question: "What is n8n?",
      options: ["A database", "A workflow automation platform", "A programming language", "A text editor"],
      correctIndex: 1,
      explanation: "n8n is a visual workflow automation platform for connecting apps and automating tasks."
    },
    {
      id: "q-4-2",
      question: "What node type starts a workflow?",
      options: ["Action", "Logic", "Trigger", "Transform"],
      correctIndex: 2,
      explanation: "Trigger nodes (Schedule, Webhook, Form, etc.) start workflows."
    },
    {
      id: "q-4-3",
      question: "How do you access the 'email' field from the previous node?",
      options: ["$email", "{{ $json.email }}", "email.value", "get('email')"],
      correctIndex: 1,
      explanation: "{{ $json.fieldName }} is the syntax to access data from the previous node."
    },
    {
      id: "q-4-4",
      question: "What does an If node do?",
      options: ["Loops through data", "Creates two branches based on condition", "Sends emails", "Stores data"],
      correctIndex: 1,
      explanation: "If nodes create True/False branches based on a condition."
    },
    {
      id: "q-4-5",
      question: "What data format does n8n use?",
      options: ["XML", "CSV", "JSON", "Plain text"],
      correctIndex: 2,
      explanation: "n8n passes JSON data between nodes."
    },
    {
      id: "q-4-6",
      question: "How do you call an external API in n8n?",
      options: ["API node", "HTTP Request node", "Call node", "Web node"],
      correctIndex: 1,
      explanation: "The HTTP Request node can call any web API."
    },
    {
      id: "q-4-7",
      question: "What does the Schedule Trigger do?",
      options: ["Sends emails on schedule", "Runs workflow at set times", "Schedules meetings", "Creates reminders"],
      correctIndex: 1,
      explanation: "Schedule Trigger runs your workflow automatically at specified times."
    },
    {
      id: "q-4-8",
      question: "How do you reference data from a node named 'Get Users'?",
      options: ["{{ GetUsers.data }}", "{{ $('Get Users').item.json }}", "{{ users }}", "{{ node.GetUsers }}"],
      correctIndex: 1,
      explanation: "Use $('Node Name') to reference specific nodes by name."
    },
    {
      id: "q-4-9",
      question: "What makes a workflow actually run on schedule?",
      options: ["Saving the workflow", "Clicking Execute", "Toggling 'Active'", "Adding a trigger"],
      correctIndex: 2,
      explanation: "You must activate the workflow (toggle Active) for triggers to work automatically."
    },
    {
      id: "q-4-10",
      question: "Can n8n connect to AI services?",
      options: ["No, it's only for basic automation", "Yes, via LLM nodes and HTTP requests", "Only with paid version", "Only to OpenAI"],
      correctIndex: 1,
      explanation: "n8n has built-in LLM nodes and can connect to any AI service via HTTP Request."
    }
  ]
}
