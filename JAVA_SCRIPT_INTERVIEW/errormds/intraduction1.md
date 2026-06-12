<!-- Navigation -->

<p align="right">
  <a href="../01-introduction/README.md">⬅️ Previous</a> |
  <a href="../03-execution-context/README.md">Next ➡️</a>
</p>

# JavaScript Basics

> Complete JavaScript Basics Interview Guide for Freshers, 1–2 Years, and Experienced Developers.

---

## 📚 Table of Contents

* [What is JavaScript?](#-what-is-javascript)
* [Where Does JavaScript Run?](#-where-does-javascript-run)
* [Why Was JavaScript Created?](#-why-was-javascript-created)
* [History of JavaScript](#-history-of-javascript)
* [JavaScript vs Browser](#-javascript-vs-browser)
* [How JavaScript Executes Internally](#-how-javascript-executes-internally)
* [Key Features of JavaScript](#-key-features-of-javascript)
* [Common Interview Questions](#-common-interview-questions)
* [Tricky Interview Questions](#-tricky-interview-questions)
* [var vs let vs const](#-var-vs-let-vs-const)

---

# 📖 What is JavaScript?

JavaScript (JS) is a **high-level, interpreted, dynamically typed programming language** used to make web pages interactive.

### Alternative Interview Definition

JavaScript is a **high-level, dynamically typed, single-threaded programming language** used to create interactive web applications. It runs in browsers and on servers through Node.js and supports object-oriented, functional, and asynchronous programming paradigms.

### Examples

* Button Click Actions
* Form Validation
* Dropdown Menus
* Image Sliders
* API Calls
* Real-Time Chat Applications
* Online Games

### Three Core Technologies of Web Development

| Technology | Purpose                  |
| ---------- | ------------------------ |
| HTML       | Structure                |
| CSS        | Styling                  |
| JavaScript | Behavior & Interactivity |

---

# 🌐 Where Does JavaScript Run?

## Browser

Examples:

* Chrome
* Firefox
* Edge
* Safari

### Browser Engines

| Browser | JavaScript Engine |
| ------- | ----------------- |
| Chrome  | V8                |
| Firefox | SpiderMonkey      |
| Safari  | JavaScriptCore    |
| Edge    | V8                |

---

## Server

Using **Node.js**

Examples:

* REST APIs
* Authentication
* Database Operations
* Real-Time Applications

---

# 🚀 Why Was JavaScript Created?

In the early days, websites were mostly static.

Every action required communication with the server.

JavaScript was introduced to:

* Add interactivity to web pages
* Validate forms without server requests
* Improve user experience
* Create dynamic web applications

Created by **Brendan Eich** in **1995**.

---

# 📜 History of JavaScript

## Before JavaScript

Websites were mostly static pages.

Problems:

* Buttons did very little
* Forms couldn't validate instantly
* Every action required a server request
* Frequent page reloads

### Without JavaScript

```text
User Enters Email
       ↓
Click Submit
       ↓
Request Sent To Server
       ↓
Validation
       ↓
Response
       ↓
Page Reload
```

### With JavaScript

```text
User Enters Email
       ↓
Browser Validation
       ↓
Instant Feedback
```

### Interview Answer

> JavaScript was created in 1995 by Brendan Eich to make web pages interactive. Before JavaScript, websites were mostly static and every user action required communication with the server. JavaScript enabled client-side validation, dynamic updates, event handling, and a better user experience without constant page reloads.

---

# 🖥️ JavaScript vs Browser

Many beginners think JavaScript and Browser are the same.

They are not.

```text
Browser
│
├── HTML Parser
├── CSS Parser
├── Rendering Engine
├── Web APIs
└── JavaScript Engine (V8)
```

The JavaScript Engine is only one component of the browser.

---

# ⚙️ How JavaScript Executes Internally

Example:

```js
let a = 10;
let b = 20;

console.log(a + b);
```

---

## Step 1: Parsing

The parser checks syntax.

Valid:

```js
let a = 10;
```

Invalid:

```js
let = 10;
```

Result:

```text
SyntaxError
```

---

## Step 2: AST (Abstract Syntax Tree)

Example:

```js
a + b
```

AST:

```text
    +
   / \
  a   b
```

The engine understands AST better than raw source code.

---

## Step 3: Interpreter

Converts code into bytecode.

```text
Load 10
Store a

Load 20
Store b

Add
Print
```

---

## Step 4: JIT Compiler

If code executes repeatedly:

```js
function add(a, b) {
  return a + b;
}

for (let i = 0; i < 100000; i++) {
  add(10, 20);
}
```

The engine optimizes it using **Just-In-Time (JIT) Compilation**.

---

## Step 5: Execution

Output:

```text
30
```

---

## Internal Flow

```text
JavaScript Code
      ↓
Parser
      ↓
AST
      ↓
Interpreter
      ↓
JIT Compiler (If Needed)
      ↓
Execution
```

---

# ⭐ Key Features of JavaScript

## High-Level Language

```js
let name = "John";
```

No manual memory management.

---

## Dynamically Typed

```js
let x = 10;
x = "Hello";
```

Variable types can change during runtime.

---

## Single-Threaded

JavaScript executes one task at a time using a single call stack.

---

## Event-Driven

```js
button.addEventListener("click", () => {
  console.log("Clicked");
});
```

Code runs when an event occurs.

---

## Asynchronous

Supports:

* API Calls
* Timers
* User Interactions

Without blocking execution.

---

# 🎯 Common Interview Questions

### Is JavaScript Interpreted or Compiled?

Modern JavaScript is:

* Parsed
* Interpreted
* JIT Compiled

---

### Is JavaScript Single-Threaded?

Yes.

JavaScript itself is single-threaded but handles asynchronous operations using:

* Event Loop
* Web APIs
* Callback Queue

---

### Can JavaScript Run Without HTML?

Yes.

Using:

* Node.js
* Deno

JavaScript can run independently of browsers.

---

### Was JavaScript Created For Backend Development?

No.

JavaScript was originally created for browser-side scripting.

Node.js enabled backend development later.

---

### Was JavaScript Created To Replace Java?

No.

JavaScript and Java are completely different languages.

---

# 🧠 Tricky Interview Questions

### What Was JavaScript Originally Called?

```text
Mocha
  ↓
LiveScript
  ↓
JavaScript
```

---

### What Problem Did JavaScript Solve?

* Client-Side Validation
* Instant Feedback
* Dynamic Updates
* Better User Experience

---

### Can HTML Make Websites Interactive Without JavaScript?

No.

```html
<button>Submit</button>
```

HTML provides structure only.

---

### Can CSS Replace JavaScript?

No.

| CSS        | JavaScript      |
| ---------- | --------------- |
| Styling    | Logic           |
| Layouts    | API Calls       |
| Animations | Event Handling  |
| Design     | Dynamic Updates |

---

### Why Did Browsers Need A Scripting Language?

To respond instantly to user actions without contacting the server for every interaction.

---

### What Would Happen If JavaScript Never Existed?

The web would mostly consist of static pages, and almost every interaction would require a server request and page reload.

---

# 📊 var vs let vs const

| Feature       | var      | let   | const |
| ------------- | -------- | ----- | ----- |
| Scope         | Function | Block | Block |
| Reassignable  | ✅ Yes    | ✅ Yes | ❌ No  |
| Hoisted       | ✅ Yes    | ✅ TDZ | ✅ TDZ |
| Redeclaration | ✅ Yes    | ❌ No  | ❌ No  |

---

## 📝 Next Topic

➡️ **Execution Context**

---

<p align="left">
  <a href="../01-introduction/README.md">⬅️ Previous</a>
</p>

<p align="right">
  <a href="../03-execution-context/README.md">Next ➡️</a>
</p>
