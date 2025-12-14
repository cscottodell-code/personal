import type { Module } from '~/types'

export const surrealdbModule: Module = {
  id: 3,
  title: "SurrealDB & SurrealQL",
  description: "Modern database queries and data modeling",
  estimatedTime: "3-4 hours",

  sections: [
    {
      id: "3-1",
      title: "3.1 Why SurrealDB?",
      content: `
        <h3>A Modern Database</h3>
        <p>SurrealDB is a multi-model database that combines the best of different database types. For someone with spreadsheet experience, it's like having a super-powered Excel that can:</p>
        <ul>
          <li>Handle millions of rows efficiently</li>
          <li>Link data between "sheets" automatically</li>
          <li>Query data with powerful formulas</li>
          <li>Handle real-time updates</li>
        </ul>

        <h3>Spreadsheet to Database Concepts</h3>
        <table class="command-table">
          <thead><tr><th>Spreadsheet</th><th>SurrealDB</th></tr></thead>
          <tbody>
            <tr><td>Workbook</td><td>Database</td></tr>
            <tr><td>Worksheet/Tab</td><td>Table</td></tr>
            <tr><td>Row</td><td>Record</td></tr>
            <tr><td>Column header</td><td>Field</td></tr>
            <tr><td>Cell value</td><td>Field value</td></tr>
            <tr><td>VLOOKUP</td><td>Relationships (much easier!)</td></tr>
          </tbody>
        </table>

        <h3>Key Features</h3>
        <ul>
          <li><strong>SQL-like syntax:</strong> If you know basic SQL, SurrealQL feels familiar</li>
          <li><strong>Document flexibility:</strong> Store complex nested data like JSON</li>
          <li><strong>Graph relationships:</strong> Connect records naturally without complex JOINs</li>
          <li><strong>Real-time:</strong> Subscribe to data changes live</li>
        </ul>
      `
    },
    {
      id: "3-2",
      title: "3.2 Installation and Setup",
      content: `
        <h3>You Already Have It!</h3>
        <p>We installed SurrealDB earlier. Verify with:</p>
        <div class="code-block"><code>surreal version</code></div>

        <h3>Starting SurrealDB</h3>
        <p>Use the script we created:</p>
        <div class="code-block"><code>~/Sites/start-surreal.sh</code></div>

        <p>Or start manually:</p>
        <div class="code-block"><code>surreal start --user root --pass root --bind 0.0.0.0:8000 file://surreal-data</code></div>

        <h3>Connection Details</h3>
        <table class="command-table">
          <thead><tr><th>Setting</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td>URL</td><td>http://localhost:8000</td></tr>
            <tr><td>Username</td><td>root</td></tr>
            <tr><td>Password</td><td>root</td></tr>
            <tr><td>Namespace</td><td>Your choice (e.g., "test")</td></tr>
            <tr><td>Database</td><td>Your choice (e.g., "myapp")</td></tr>
          </tbody>
        </table>

        <h3>Namespaces and Databases</h3>
        <p>SurrealDB organizes data in layers:</p>
        <ul>
          <li><strong>Namespace:</strong> Top level - like a company or environment (prod, dev)</li>
          <li><strong>Database:</strong> Within namespace - like an application</li>
          <li><strong>Table:</strong> Within database - your actual data tables</li>
        </ul>
      `
    },
    {
      id: "3-3",
      title: "3.3 Using Surrealist",
      content: `
        <h3>The GUI Tool</h3>
        <p>Surrealist is like having a spreadsheet view of your database. Open it from Applications.</p>

        <h3>Connecting</h3>
        <ol>
          <li>Make sure SurrealDB is running</li>
          <li>Open Surrealist</li>
          <li>Click "New Connection"</li>
          <li>Enter: localhost:8000, root, root</li>
          <li>Select or create a namespace and database</li>
        </ol>

        <h3>The Interface</h3>
        <ul>
          <li><strong>Query tab:</strong> Write and run SurrealQL queries</li>
          <li><strong>Explorer tab:</strong> Browse tables and records visually</li>
          <li><strong>Designer tab:</strong> Design table schemas</li>
          <li><strong>Authentication:</strong> Manage users and permissions</li>
        </ul>

        <h3>Running Your First Query</h3>
        <p>In the Query tab:</p>
        <div class="code-block"><code>-- Create your first record
CREATE person SET name = "Scott", role = "learner";

-- See what you created
SELECT * FROM person;</code></div>

        <h3>Spreadsheet Comparison</h3>
        <p>Surrealist is like Excel's interface:</p>
        <ul>
          <li>Explorer = Viewing your spreadsheet</li>
          <li>Query tab = Formula bar (but way more powerful)</li>
          <li>Designer = Column formatting/validation</li>
        </ul>
      `
    },
    {
      id: "3-4",
      title: "3.4 Creating Records (CREATE)",
      content: `
        <h3>Basic CREATE</h3>
        <div class="code-block"><code>CREATE customer SET
  name = "Acme Corp",
  email = "contact@acme.com",
  status = "active";</code></div>

        <h3>With Specific ID</h3>
        <div class="code-block"><code>CREATE customer:acme SET
  name = "Acme Corp",
  email = "contact@acme.com";</code></div>
        <p>The ID becomes <code>customer:acme</code> instead of a random ID.</p>

        <h3>Nested Data</h3>
        <p>Unlike spreadsheets, you can store complex structures:</p>
        <div class="code-block"><code>CREATE customer SET
  name = "Acme Corp",
  address = {
    street: "123 Main St",
    city: "Phoenix",
    state: "AZ",
    zip: "85001"
  },
  contacts = [
    { name: "John", role: "CEO" },
    { name: "Jane", role: "CTO" }
  ];</code></div>

        <h3>Multiple Records</h3>
        <div class="code-block"><code>CREATE customer CONTENT [
  { name: "Company A", status: "active" },
  { name: "Company B", status: "pending" },
  { name: "Company C", status: "active" }
];</code></div>

        <h3>Spreadsheet Analogy</h3>
        <p>CREATE is like adding a new row, but you can have "cells within cells" (nested data) which spreadsheets can't do easily.</p>
      `
    },
    {
      id: "3-5",
      title: "3.5 Querying Data (SELECT)",
      content: `
        <h3>Select All</h3>
        <div class="code-block"><code>SELECT * FROM customer;</code></div>

        <h3>Select Specific Fields</h3>
        <div class="code-block"><code>SELECT name, email FROM customer;</code></div>

        <h3>Select One Record by ID</h3>
        <div class="code-block"><code>SELECT * FROM customer:acme;</code></div>

        <h3>Counting Records</h3>
        <div class="code-block"><code>SELECT count() FROM customer GROUP ALL;</code></div>

        <h3>Accessing Nested Data</h3>
        <div class="code-block"><code>-- Get the city from nested address
SELECT address.city FROM customer;

-- Get first contact's name
SELECT contacts[0].name FROM customer;</code></div>

        <h3>Aliases</h3>
        <div class="code-block"><code>SELECT
  name AS company_name,
  address.city AS city
FROM customer;</code></div>

        <h3>Spreadsheet Comparison</h3>
        <table class="command-table">
          <thead><tr><th>Spreadsheet</th><th>SurrealQL</th></tr></thead>
          <tbody>
            <tr><td>View whole sheet</td><td>SELECT * FROM table</td></tr>
            <tr><td>View columns A,B</td><td>SELECT field1, field2 FROM table</td></tr>
            <tr><td>COUNTA(A:A)</td><td>SELECT count() FROM table GROUP ALL</td></tr>
          </tbody>
        </table>
      `
    },
    {
      id: "3-6",
      title: "3.6 Filtering with WHERE",
      content: `
        <h3>Basic Filtering</h3>
        <div class="code-block"><code>SELECT * FROM customer WHERE status = "active";</code></div>

        <h3>Comparison Operators</h3>
        <table class="command-table">
          <thead><tr><th>Operator</th><th>Meaning</th><th>Example</th></tr></thead>
          <tbody>
            <tr><td>=</td><td>Equals</td><td>status = "active"</td></tr>
            <tr><td>!=</td><td>Not equals</td><td>status != "inactive"</td></tr>
            <tr><td>></td><td>Greater than</td><td>amount > 100</td></tr>
            <tr><td>>=</td><td>Greater or equal</td><td>amount >= 100</td></tr>
            <tr><td><</td><td>Less than</td><td>amount < 1000</td></tr>
            <tr><td><=</td><td>Less or equal</td><td>amount <= 1000</td></tr>
          </tbody>
        </table>

        <h3>Multiple Conditions</h3>
        <div class="code-block"><code>-- AND (both must be true)
SELECT * FROM customer
WHERE status = "active" AND state = "AZ";

-- OR (either can be true)
SELECT * FROM customer
WHERE status = "active" OR status = "pending";</code></div>

        <h3>Pattern Matching</h3>
        <div class="code-block"><code>-- Contains
SELECT * FROM customer WHERE name CONTAINS "Corp";

-- Starts with
SELECT * FROM customer WHERE name ~ /^A/;

-- IN list
SELECT * FROM customer WHERE status IN ["active", "pending"];</code></div>

        <h3>Filtering Nested Data</h3>
        <div class="code-block"><code>SELECT * FROM customer WHERE address.state = "AZ";</code></div>

        <h3>Spreadsheet Comparison</h3>
        <p>WHERE is like Excel's FILTER function:</p>
        <ul>
          <li><code>=FILTER(A:D, C:C="active")</code> → <code>WHERE status = "active"</code></li>
        </ul>
      `
    },
    {
      id: "3-7",
      title: "3.7 Updating Records (UPDATE)",
      content: `
        <h3>Update by ID</h3>
        <div class="code-block"><code>UPDATE customer:acme SET status = "premium";</code></div>

        <h3>Update Multiple Fields</h3>
        <div class="code-block"><code>UPDATE customer:acme SET
  status = "premium",
  tier = "gold",
  updated_at = time::now();</code></div>

        <h3>Update with Conditions</h3>
        <div class="code-block"><code>UPDATE customer SET status = "inactive"
WHERE last_order < "2024-01-01";</code></div>

        <h3>Increment Values</h3>
        <div class="code-block"><code>UPDATE customer:acme SET order_count += 1;</code></div>

        <h3>Update Nested Data</h3>
        <div class="code-block"><code>UPDATE customer:acme SET address.city = "Scottsdale";</code></div>

        <h3>Add to Arrays</h3>
        <div class="code-block"><code>UPDATE customer:acme SET
  contacts += { name: "Bob", role: "Sales" };</code></div>

        <h3>MERGE vs SET</h3>
        <div class="code-block"><code>-- SET replaces all fields you specify
UPDATE customer:acme SET name = "New Name";

-- MERGE only updates what you provide, keeping others
UPDATE customer:acme MERGE { name: "New Name" };</code></div>
      `
    },
    {
      id: "3-8",
      title: "3.8 Deleting Records (DELETE)",
      content: `
        <h3>Delete by ID</h3>
        <div class="code-block"><code>DELETE customer:acme;</code></div>

        <h3>Delete with Conditions</h3>
        <div class="code-block"><code>DELETE customer WHERE status = "inactive";</code></div>

        <h3>Delete All from Table</h3>
        <div class="code-block"><code>DELETE customer;</code></div>
        <p>⚠️ Be careful! This removes ALL records from the table.</p>

        <h3>Safe Deletion Pattern</h3>
        <p>Instead of deleting, consider "soft delete":</p>
        <div class="code-block"><code>-- Add a deleted flag instead
UPDATE customer:acme SET
  deleted = true,
  deleted_at = time::now();

-- Query only non-deleted
SELECT * FROM customer WHERE deleted != true;</code></div>

        <h3>Returning Deleted Data</h3>
        <div class="code-block"><code>DELETE customer:acme RETURN BEFORE;</code></div>
        <p>Returns what the record looked like before deletion.</p>
      `
    },
    {
      id: "3-9",
      title: "3.9 Working with Nested Data",
      content: `
        <h3>Why Nested Data?</h3>
        <p>In spreadsheets, related data often needs separate sheets and VLOOKUP. In SurrealDB, you can embed related data directly:</p>

        <div class="code-block"><code>CREATE order SET
  customer_name = "Acme Corp",
  items = [
    { product: "Widget", qty: 5, price: 10.00 },
    { product: "Gadget", qty: 2, price: 25.00 }
  ],
  shipping = {
    address: "123 Main St",
    method: "express",
    cost: 15.00
  },
  total = 105.00;</code></div>

        <h3>Querying Nested Data</h3>
        <div class="code-block"><code>-- Get specific nested field
SELECT shipping.method FROM order;

-- Get array items
SELECT items FROM order;

-- Filter by nested value
SELECT * FROM order WHERE shipping.method = "express";

-- Access array by index
SELECT items[0].product FROM order;</code></div>

        <h3>Array Functions</h3>
        <div class="code-block"><code>-- Count items in array
SELECT array::len(items) FROM order;

-- Check if array contains value
SELECT * FROM order WHERE "Widget" IN items.product;</code></div>

        <h3>When to Nest vs. Relate</h3>
        <ul>
          <li><strong>Nest:</strong> Data that belongs to this record only (order items)</li>
          <li><strong>Relate:</strong> Data shared across records (customers, products)</li>
        </ul>
      `
    },
    {
      id: "3-10",
      title: "3.10 Graph Relationships (RELATE)",
      content: `
        <h3>The Power of RELATE</h3>
        <p>Instead of complex JOINs or VLOOKUP, SurrealDB lets you create direct connections:</p>

        <div class="code-block"><code>-- Create a relationship
RELATE customer:acme->purchased->product:widget;</code></div>

        <h3>Anatomy of RELATE</h3>
        <ul>
          <li><code>customer:acme</code> - The "from" record</li>
          <li><code>->purchased-></code> - The relationship type (edge)</li>
          <li><code>product:widget</code> - The "to" record</li>
        </ul>

        <h3>Relationships with Data</h3>
        <div class="code-block"><code>RELATE customer:acme->purchased->product:widget SET
  quantity = 5,
  price = 10.00,
  date = "2024-12-01";</code></div>

        <h3>Querying Relationships</h3>
        <div class="code-block"><code>-- What did this customer purchase?
SELECT ->purchased->product FROM customer:acme;

-- Who purchased this product?
SELECT <-purchased<-customer FROM product:widget;

-- Get relationship data too
SELECT ->purchased.* FROM customer:acme;</code></div>

        <h3>Spreadsheet Comparison</h3>
        <p>Relationships replace VLOOKUP:</p>
        <table class="command-table">
          <thead><tr><th>Spreadsheet</th><th>SurrealDB</th></tr></thead>
          <tbody>
            <tr><td>=VLOOKUP(A2, Products!A:B, 2)</td><td>SELECT ->purchased->product.name</td></tr>
            <tr><td>Multiple VLOOKUPs</td><td>Single query with arrows</td></tr>
          </tbody>
        </table>
      `
    },
    {
      id: "3-11",
      title: "3.11 Sorting and Limiting",
      content: `
        <h3>ORDER BY</h3>
        <div class="code-block"><code>-- Ascending (A-Z, low to high)
SELECT * FROM customer ORDER BY name ASC;

-- Descending (Z-A, high to low)
SELECT * FROM customer ORDER BY created_at DESC;

-- Multiple fields
SELECT * FROM customer ORDER BY status ASC, name ASC;</code></div>

        <h3>LIMIT and START</h3>
        <div class="code-block"><code>-- Get first 10
SELECT * FROM customer LIMIT 10;

-- Get next 10 (pagination)
SELECT * FROM customer LIMIT 10 START 10;

-- Top 5 by amount
SELECT * FROM order ORDER BY total DESC LIMIT 5;</code></div>

        <h3>Combining Everything</h3>
        <div class="code-block"><code>SELECT name, total, status FROM customer
WHERE status = "active"
ORDER BY total DESC
LIMIT 10;</code></div>

        <h3>Pagination Pattern</h3>
        <div class="code-block"><code>-- Page 1 (records 1-20)
SELECT * FROM customer LIMIT 20 START 0;

-- Page 2 (records 21-40)
SELECT * FROM customer LIMIT 20 START 20;

-- Page 3 (records 41-60)
SELECT * FROM customer LIMIT 20 START 40;</code></div>
      `
    },
    {
      id: "3-12",
      title: "3.12 Schema and Best Practices",
      content: `
        <h3>Defining Schemas</h3>
        <p>You can enforce structure with DEFINE:</p>
        <div class="code-block"><code>DEFINE TABLE customer SCHEMAFULL;

DEFINE FIELD name ON customer TYPE string;
DEFINE FIELD email ON customer TYPE string
  ASSERT string::is::email($value);
DEFINE FIELD status ON customer TYPE string
  DEFAULT "active"
  ASSERT $value IN ["active", "inactive", "pending"];
DEFINE FIELD created_at ON customer TYPE datetime
  DEFAULT time::now();</code></div>

        <h3>Indexes for Speed</h3>
        <div class="code-block"><code>-- Index for faster lookups
DEFINE INDEX email_idx ON customer FIELDS email UNIQUE;
DEFINE INDEX status_idx ON customer FIELDS status;</code></div>

        <h3>Naming Conventions</h3>
        <ul>
          <li>Tables: singular, lowercase (<code>customer</code> not <code>Customers</code>)</li>
          <li>Fields: snake_case (<code>created_at</code> not <code>createdAt</code>)</li>
          <li>IDs: descriptive when possible (<code>customer:acme</code>)</li>
          <li>Edges: past tense verbs (<code>purchased</code>, <code>created</code>)</li>
        </ul>

        <h3>Common Patterns</h3>
        <div class="code-block"><code>-- Always include timestamps
DEFINE FIELD created_at ON customer TYPE datetime DEFAULT time::now();
DEFINE FIELD updated_at ON customer TYPE datetime;

-- Soft deletes
DEFINE FIELD deleted ON customer TYPE bool DEFAULT false;
DEFINE FIELD deleted_at ON customer TYPE option<datetime>;</code></div>

        <h3>Your Sales Tool Example</h3>
        <div class="code-block"><code>-- For your income projection tool
DEFINE TABLE settings SCHEMAFULL;
DEFINE FIELD user ON settings TYPE record<user>;
DEFINE FIELD defaults ON settings TYPE object;
DEFINE FIELD locks ON settings TYPE object;
DEFINE FIELD colors ON settings TYPE object;
DEFINE FIELD updated_at ON settings TYPE datetime DEFAULT time::now();</code></div>
      `
    }
  ],

  flashcards: [
    { id: "fc-3-1", front: "How do you create a record in SurrealDB?", back: "<code>CREATE table SET field = value;</code>" },
    { id: "fc-3-2", front: "How do you query all records from a table?", back: "<code>SELECT * FROM table;</code>" },
    { id: "fc-3-3", front: "How do you filter records?", back: "<code>WHERE condition</code> (e.g., WHERE status = \"active\")" },
    { id: "fc-3-4", front: "What is a Record ID format?", back: "<code>table:id</code> (e.g., customer:acme)" },
    { id: "fc-3-5", front: "How do you create a relationship?", back: "<code>RELATE from->edge->to</code> (e.g., customer:acme->purchased->product:widget)" },
    { id: "fc-3-6", front: "How do you access nested data?", back: "Dot notation: <code>field.subfield</code> or <code>field[0].subfield</code>" },
    { id: "fc-3-7", front: "How do you update a record?", back: "<code>UPDATE table:id SET field = value;</code>" },
    { id: "fc-3-8", front: "How do you delete a record?", back: "<code>DELETE table:id;</code>" },
    { id: "fc-3-9", front: "What's the official SurrealDB GUI?", back: "Surrealist" },
    { id: "fc-3-10", front: "How do you follow a relationship in a query?", back: "Arrow syntax: <code>->edge->table</code> or <code><-edge<-table</code>" },
    { id: "fc-3-11", front: "How do you sort results?", back: "<code>ORDER BY field ASC</code> or <code>DESC</code>" },
    { id: "fc-3-12", front: "How do you limit results?", back: "<code>LIMIT 10</code> (and <code>START 10</code> for pagination)" }
  ],

  quiz: [
    {
      id: "q-3-1",
      question: "What type of database is SurrealDB?",
      options: ["Relational only", "Document only", "Multi-model (document, graph, relational)", "Key-value only"],
      correctIndex: 2,
      explanation: "SurrealDB combines document, graph, and relational database features in one system."
    },
    {
      id: "q-3-2",
      question: "How do you create a record with ID 'acme'?",
      options: ["INSERT INTO customer", "CREATE customer:acme SET...", "ADD customer id=acme", "NEW customer(acme)"],
      correctIndex: 1,
      explanation: "CREATE table:id SET is the SurrealQL syntax for creating records with specific IDs."
    },
    {
      id: "q-3-3",
      question: "What's the format for a Record ID?",
      options: ["Just a number", "UUID only", "table:identifier", "Auto-assigned only"],
      correctIndex: 2,
      explanation: "Record IDs use the format table:identifier (e.g., customer:acme)."
    },
    {
      id: "q-3-4",
      question: "How do you access a nested city field in an address object?",
      options: ["address->city", "address.city", "city FROM address", "address['city']"],
      correctIndex: 1,
      explanation: "Dot notation (address.city) accesses nested fields in SurrealDB."
    },
    {
      id: "q-3-5",
      question: "What command creates graph relationships?",
      options: ["JOIN", "LINK", "RELATE", "CONNECT"],
      correctIndex: 2,
      explanation: "RELATE creates graph relationships between records (e.g., RELATE a->edge->b)."
    },
    {
      id: "q-3-6",
      question: "How do you query what a customer purchased?",
      options: ["SELECT purchases FROM customer", "JOIN customer ON purchases", "SELECT ->purchased->product FROM customer:id", "LOOKUP purchases"],
      correctIndex: 2,
      explanation: "Arrow syntax (->edge->table) traverses relationships in SurrealDB."
    },
    {
      id: "q-3-7",
      question: "What does SCHEMAFULL mean?",
      options: ["Schema is optional", "All fields must be defined", "Schema is full of data", "Schema is complete"],
      correctIndex: 1,
      explanation: "SCHEMAFULL enforces that only defined fields can be used in a table."
    },
    {
      id: "q-3-8",
      question: "How do you get the first 10 records?",
      options: ["TOP 10", "LIMIT 10", "FIRST 10", "TAKE 10"],
      correctIndex: 1,
      explanation: "LIMIT restricts the number of records returned."
    },
    {
      id: "q-3-9",
      question: "What replaces VLOOKUP in SurrealDB?",
      options: ["JOIN statements", "RELATE and arrow queries", "Nested SELECT", "LOOKUP function"],
      correctIndex: 1,
      explanation: "Graph relationships with RELATE and arrow queries (->edge->) replace VLOOKUP patterns."
    },
    {
      id: "q-3-10",
      question: "How do you update just one field without affecting others?",
      options: ["UPDATE...SET", "UPDATE...MERGE", "UPDATE...PATCH", "UPDATE...MODIFY"],
      correctIndex: 1,
      explanation: "MERGE updates only specified fields, keeping others unchanged."
    }
  ]
}
