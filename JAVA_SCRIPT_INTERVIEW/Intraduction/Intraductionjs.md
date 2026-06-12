<!-- Navigation -->

<p align="right">
  <button  color="| ,red,green,yellow|"<a href="../01-introduction/README.md">⬅️ Previous</a></button>
  <button><a href="../03-execution-context/README.md">Next ➡️</a></button>
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
* [What is ECMAScript (ES)?](#-what-is-ecmascript-es)
* [What is Node.js?](#-what-is-nodejs)
* [Setting Up the Development Environment](#-setting-up-the-development-environment)
* [Front-End Development Environment](#-front-end-development-environment)
* [Back-End Development Environment](#-back-end-development-environment)
* [Front-End vs Back-End JavaScript](#-front-end-vs-back-end-javascript)
* [Common Interview Questions](#-common-interview-questions)
* [Tricky Interview Questions](#-tricky-interview-questions)
* 

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
<styling align="left">
| Technology | Purpose                  |
| ---------- | ------------------------ |
| HTML       | Structure                |
| CSS        | Styling                  |
| JavaScript | Behavior & Interactivity |
</styling>
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


<!-- # 📊 var vs let vs const

| Feature       | var      | let   | const |
| ------------- | -------- | ----- | ----- |
| Scope         | Function | Block | Block |
| Reassignable  | ✅ Yes    | ✅ Yes | ❌ No  |
| Hoisted       | ✅ Yes    | ✅ TDZ | ✅ TDZ |
| Redeclaration | ✅ Yes    | ❌ No  | ❌ No  |

--- -->
## What is ECMAScript (ES)?

ECMAScript (ES) is the official specification or standard on which JavaScript is based.

JavaScript implementations such as browsers and Node.js follow the ECMAScript specification.

### Why ECMAScript Was Created

Before ECMAScript, different browsers implemented JavaScript differently.

This created compatibility issues.

ECMA International standardized JavaScript to ensure consistency across platforms and browsers.

### Common ECMAScript Versions

| Version      | Release Year   | Features                             |
| ------------ | -------------- | ------------------------------------ |
| ES5          | 2009           | Strict Mode, JSON Support            |
| ES6 (ES2015) | 2015           | let, const, Arrow Functions, Classes |
| ES7          | 2016           | Array.includes()                     |
| ES8          | 2017           | Async/Await                          |
| ES9+         | Later Versions | New Features and Improvements        |


#### What is ECMAScript?

**Answer:**

ECMAScript is the standard specification for JavaScript. JavaScript follows the ECMAScript standard to ensure consistent behavior across browsers and environments.

---

## What is Node.js?

Node.js is a JavaScript Runtime Environment that allows JavaScript to run outside the browser.

Before Node.js:

```text
JavaScript → Browser Only
```

After Node.js:

```text
JavaScript → Browser + Server
```

### Important Points

* Node.js is a Runtime Environment.
* Node.js allows JavaScript to run on servers.
* Node.js can be used to build APIs and backend applications.
* Node.js uses Google's V8 JavaScript Engine internally.

### Node.js Is NOT

❌ A Programming Language

❌ A Library

❌ A Framework

### Node.js Is

✅ A Runtime Environment

### What Can We Build Using Node.js?

* REST APIs
* Authentication Systems
* Real-Time Applications
* Backend Services
* Full Stack Applications

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
------------- -----------------
| CSS        | JavaScript      |
| ---------- | --------------- |
| Styling    | Logic           |
| Layouts    | API Calls       |
| Animations | Event Handling  |
| Design     | Dynamic Updates |
--------------------------------
---

### Why Did Browsers Need A Scripting Language?

To respond instantly to user actions without contacting the server for every interaction.

---

### What Would Happen If JavaScript Never Existed?

The web would mostly consist of static pages, and almost every interaction would require a server request and page reload.

---

#### What is Node.js?

**Answer:**

Node.js is a JavaScript Runtime Environment that allows JavaScript to run outside the browser using the V8 engine.

---
### What is ECMAScript?

ECMAScript is the standard specification for JavaScript.

---

### Is Node.js a Programming Language?

No.

---

### Is Node.js a Framework?

No.

---

### Is Node.js a Library?

No.

---

### What is required to run JavaScript in the browser?

* Browser
* IDE
* HTML File

---

### What is required to run JavaScript on the server?

* Node.js
* IDE
* JavaScript File

---

### How do you run a JavaScript file using Node.js?

```bash
node app.js
```

---

### Can JavaScript run without HTML?

Yes.

Using Node.js, JavaScript can run independently without a browser or HTML file.



## Setting Up the Development Environment

Before learning JavaScript, we need an environment to write and execute JavaScript code.

JavaScript can run in:

1. Front-End Environment
2. Back-End Environment

---

## Front-End Development Environment

JavaScript was originally designed to run inside browsers.

### Requirements

### 1. Browser

We need a browser to execute JavaScript code.

Examples:

* Chrome
* Firefox
* Edge
* Safari

Every browser contains a JavaScript Engine.

| Browser | JavaScript Engine |
| ------- | ----------------- |
| Chrome  | V8                |
| Firefox | SpiderMonkey      |
| Safari  | JavaScriptCore    |
| Edge    | V8                |

---

### 2. IDE (Code Editor)

We need an editor to write JavaScript code.

Examples:

* Visual Studio Code (VS Code)
* WebStorm
* Sublime Text

Recommended:

```text
VS Code
```

---

### 3. HTML File

To run JavaScript in the browser, we generally use an HTML file.

Example:

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Demo</title>
</head>
<body>

  <script>
    console.log("Hello JavaScript");
  </script>

</body>
</html>
```

### Front-End Execution Flow

```text
HTML File
     ↓
Browser
     ↓
<script> Tag
     ↓
JavaScript Engine
     ↓
Execution
```

---

## Back-End Development Environment

To run JavaScript on the server, we need Node.js.

### Requirements

### 1. Node.js

Install Node.js.

Node.js provides a JavaScript Runtime Environment.

### 2. IDE (Code Editor)

Use:

* VS Code
* WebStorm
* Sublime Text

### 3. JavaScript File

Create a file:

```text
app.js
```

Example:

```js
console.log("Hello from Node.js");
```

### Running a JavaScript File

Open terminal:

```bash
node app.js
```

Output:

```text
Hello from Node.js
```

### Back-End Execution Flow

```text
app.js
    ↓
Node.js Runtime
    ↓
V8 Engine
    ↓
Execution
```

---

## Front-End vs Back-End JavaScript

| Feature         | Front-End         | Back-End     |
| --------------- | ----------------- | ------------ |
| Runs In         | Browser           | Node.js      |
| HTML Required   | Yes               | No           |
| Access DOM      | Yes               | No           |
| Create APIs     | No                | Yes          |
| Database Access | No                | Yes          |
| Main Purpose    | UI & Interactions | Server Logic |

---

## 📝 Next Topic
Variables, Data Types, and Operators

➡️ **Execution Context**

---



<p align="bottom-right">
   <button><a href="../03-execution-context/README.md">Next ➡️</a></button>
</p>     
