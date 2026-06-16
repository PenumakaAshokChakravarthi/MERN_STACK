# Hoisting, Temporal Dead Zone (TDZ), var vs let vs const

## Overview

When JavaScript executes a program, it first scans the code and allocates memory before executing it line by line.

This behavior leads to concepts such as:

- Hoisting
- Temporal Dead Zone (TDZ)
- Variable Initialization
- Execution Context

Understanding these concepts is important because they are among the most frequently asked JavaScript interview topics.

---

## Definition

### What is Hoisting?

Hoisting is JavaScript's default behavior of moving declarations to the top of their scope during the memory creation phase.

In simple words:

> Before executing code, JavaScript allocates memory for variables and functions.

---

## Why Was Hoisting Created?

JavaScript uses a two-phase execution model:

```text
1. Memory Creation Phase
2. Code Execution Phase
```

During Memory Creation Phase:

- Variables are allocated memory.
- Functions are stored completely in memory.

This process is called Hoisting.

---

## Internal Working

JavaScript Execution:

```text
JavaScript Code
        │
        ▼
Memory Creation Phase
        │
        ▼
Hoisting
        │
        ▼
Execution Phase
        │
        ▼
Output
```

---

## Architecture

```text
Execution Context
│
├── Memory Phase
│      │
│      ├── Variables
│      └── Functions
│
└── Execution Phase
       │
       └── Runs Code
```

---

## Diagram

```text
Code

console.log(a);

var a = 10;


Memory Phase

a = undefined


Execution Phase

a = 10
```

---

# Hoisting with var

## Definition

Variables declared with var are hoisted and initialized with undefined.

---

## Syntax

```js
var a = 10;
```

---

## Sample Code

```js
console.log(a);

var a = 10;
```

---

## Output

```text
undefined
```

---

## Why?

JavaScript internally converts:

```js
var a;

console.log(a);

a = 10;
```

---

## Real World Example

```js
var username;

fetchUser();

username = "Rahul";
```

Memory exists before assignment.

---

## Interview Answer

Variables declared with var are hoisted and automatically initialized with undefined.

---

# Hoisting with let

## Definition

Variables declared with let are hoisted but not initialized.

---

## Sample Code

```js
console.log(age);

let age = 25;
```

---

## Output

```text
ReferenceError
```

---

## Why?

Memory is allocated but access is blocked until initialization.

---

## Internal Diagram

```text
Memory Created
      │
      ▼
age = <uninitialized>
      │
      ▼
TDZ
      │
      ▼
Initialization
```

---

## Interview Answer

let variables are hoisted but remain inaccessible before initialization because they stay inside the Temporal Dead Zone.

---

# Hoisting with const

## Definition

const behaves similar to let.

It is hoisted but remains uninitialized.

---

## Sample Code

```js
console.log(country);

const country = "India";
```

---

## Output

```text
ReferenceError
```

---

## Interview Answer

const is hoisted but cannot be accessed before initialization due to Temporal Dead Zone.

---

# Temporal Dead Zone (TDZ)

## Definition

The time between memory allocation and initialization is called Temporal Dead Zone.

---

## Why Needed?

TDZ prevents developers from using variables before proper initialization.

This helps avoid unexpected bugs.

---

## Diagram

```text
Memory Created
      │
      ▼
Variable Exists
      │
      ▼
TDZ
      │
      ▼
Initialization
      │
      ▼
Accessible
```

---

## Sample Code

```js
console.log(name);

let name = "Rahul";
```

---

## Output

```text
ReferenceError
```

---

## Real World Example

```js
let apiData;

fetchData();

apiData = {};
```

Initialization must happen before usage.

---

## Advantages

- Prevents accidental access.
- Reduces bugs.
- Encourages safer coding.

---

## Disadvantages

- Confuses beginners.

---

# var vs let vs const

## Comparison Table

| Feature | var | let | const |
|----------|----------|----------|----------|
| Scope | Function | Block | Block |
| Hoisted | Yes | Yes | Yes |
| Initial Value | undefined | Uninitialized | Uninitialized |
| Redeclaration | Yes | No | No |
| Reassignment | Yes | Yes | No |
| TDZ | No | Yes | Yes |

---

## Example

### var

```js
var age = 25;

var age = 30;

console.log(age);
```

Output:

```text
30
```

---

### let

```js
let age = 25;

let age = 30;
```

Output:

```text
SyntaxError
```

---

### const

```js
const age = 25;

age = 30;
```

Output:

```text
TypeError
```

---

# Real World Example

## Configuration

```js
const API_URL = "https://api.example.com";
```

---

## Counter

```js
let count = 0;

count++;
```

---

## Legacy Code

```js
var userName = "Rahul";
```

Found in older applications.

---

# Advantages

## var

- Browser support
- Legacy compatibility

---

## let

- Block scope
- Safer than var

---

## const

- Prevents reassignment
- Best for constants

---

# Disadvantages

## var

- Scope issues
- Hoisting confusion

---

## let

- Cannot redeclare

---

## const

- Cannot reassign

---

# Fresher Interview Questions

### What is Hoisting?

JavaScript's behavior of moving declarations to the top during memory creation.

---

### What is TDZ?

The period between memory allocation and initialization.

---

### Is let hoisted?

Yes.

---

### Is const hoisted?

Yes.

---

### Why does var print undefined?

Because it is initialized with undefined during hoisting.

---

# 1-2 Years Interview Questions

### Difference between Hoisting and TDZ?

Hoisting allocates memory.

TDZ blocks access until initialization.

---

### Why should we avoid var?

Because it allows redeclaration and lacks block scope.

---

### When should we use const?

When the variable reference should not change.

---

### Which is preferred in modern JavaScript?

const first, let second, avoid var.

---

# 3-6 Years Experienced Interview Questions

### Explain JavaScript Execution Context.

Execution Context contains:

```text
Memory Creation Phase
Execution Phase
```

---

### Why are let and const safer than var?

Because:

- Block scope
- No redeclaration
- TDZ protection

---

### What happens internally during hoisting?

JavaScript scans code, allocates memory, stores functions, and initializes variables depending on declaration type.

---

### Why was TDZ introduced in ES6?

To prevent accessing variables before initialization.

---

# Tricky Interview Questions

## Question 1

```js
console.log(a);

var a = 10;
```

Output:

```text
undefined
```

---

## Question 2

```js
console.log(a);

let a = 10;
```

Output:

```text
ReferenceError
```

---

## Question 3

```js
console.log(a);

const a = 10;
```

Output:

```text
ReferenceError
```

---

## Question 4

```js
var a = 10;

function test(){
    console.log(a);

    var a = 20;
}

test();
```

Output:

```text
undefined
```

Reason:

Function scope creates its own hoisted variable.

---

## Question 5

```js
let a = 10;

{
   let a = 20;

   console.log(a);
}

console.log(a);
```

Output:

```text
20
10
```

---

# Coding Questions

## Question 1

Predict Output

```js
console.log(x);

var x = 5;
```

### Solution

```text
undefined
```

---

## Question 2

Predict Output

```js
console.log(x);

let x = 5;
```

### Solution

```text
ReferenceError
```

---

## Question 3

Scope Example

```js
let a = 10;

function test(){
   let a = 20;

   console.log(a);
}

test();

console.log(a);
```

### Output

```text
20
10
```

---

## Question 4

Block Scope

```js
{
   const age = 25;
}

console.log(age);
```

### Output

```text
ReferenceError
```

---

# Summary

In this chapter, we learned:

- Hoisting
- Temporal Dead Zone
- Memory Creation Phase
- Execution Phase
- var Hoisting
- let Hoisting
- const Hoisting
- Scope Behavior
- var vs let vs const
- Coding Questions
- Tricky Interview Questions
- Experienced-Level Concepts

Understanding Hoisting and TDZ is essential because they explain how JavaScript creates memory, executes code, and manages variables internally.

---

## Next Topic

➡️ Stack Memory, Heap Memory, Copy by Value, Copy by Reference, Shallow Copy & Deep Copy