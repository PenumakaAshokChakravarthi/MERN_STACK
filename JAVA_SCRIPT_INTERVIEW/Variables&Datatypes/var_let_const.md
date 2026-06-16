# Variables in Depth (Part 1)

## Overview

Variables are used to store data in memory so that JavaScript programs can use, update, manipulate, and process information.

JavaScript provides three ways to declare variables:

- var
- let
- const

Understanding variables is important because every JavaScript application stores and works with data through variables.

---

## Definition

A Variable is a named memory location used to store data.

Example:

```js
let name = "Rahul";
```

Here:

- `name` → Variable Name
- `"Rahul"` → Stored Value

---

## Why Needed

Variables help us:

- Store data
- Update data
- Reuse data
- Perform calculations
- Avoid repeating values

Without variables:

```js
console.log("Rahul");
console.log("Rahul");
console.log("Rahul");
```

With variables:

```js
let name = "Rahul";

console.log(name);
console.log(name);
console.log(name);
```

---

## Internal Working

When a variable is declared:

```js
let age = 25;
```

JavaScript:

1. Allocates memory.
2. Stores value in memory.
3. Associates memory with variable name.

```text
Variable Declaration
        ↓
Memory Allocation
        ↓
Store Value
        ↓
Access Using Variable Name
```

---

## Architecture

```text
Variable
    │
    ▼
Memory Location
    │
    ▼
Stored Value
    │
    ▼
Program Uses Value
```

---

## Diagram

```text
let age = 25

      ↓

Memory
┌────────┐
│ age    │
│ 25     │
└────────┘
```

---

# var

## Definition

`var` was the original way to declare variables in JavaScript before ES6.

Introduced in the initial version of JavaScript.

---

## Why Was var Created?

Developers needed a way to store data in memory.

JavaScript initially provided only `var`.

---

## Syntax

```js
var variableName = value;
```

Example:

```js
var name = "Rahul";
```

---

## Sample Code

```js
var city = "Hyderabad";

console.log(city);
```

---

## Output

```text
Hyderabad
```

---

## Real World Example

```js
var totalAmount = 5000;
```

Used in old JavaScript applications.

---

## Advantages

- Simple syntax
- Supported by all browsers
- Function scoped

---

## Disadvantages

- Can be redeclared
- Can be reassigned
- Causes unexpected bugs
- No block scope

---

## Interview Answer

`var` is the traditional way of declaring variables in JavaScript. It is function-scoped and can be both redeclared and reassigned.

---

# let

## Definition

`let` was introduced in ES6 (ECMAScript 2015).

It provides safer variable declarations than `var`.

---

## Why Was let Created?

`var` caused many bugs because:

- It allowed redeclaration.
- It ignored block scope.

To solve these problems, `let` was introduced.

---

## Syntax

```js
let variableName = value;
```

Example:

```js
let age = 25;
```

---

## Sample Code

```js
let age = 25;

age = 30;

console.log(age);
```

---

## Output

```text
30
```

---

## Real World Example

```js
let cartTotal = 1000;

cartTotal = cartTotal + 500;
```

Used when values change during execution.

---

## Advantages

- Block scoped
- Prevents redeclaration
- Safer than var
- Modern JavaScript standard

---

## Disadvantages

- Cannot be redeclared in the same scope

---

## Interview Answer

`let` is a block-scoped variable declaration introduced in ES6. It allows reassignment but prevents redeclaration in the same scope.

---

# const

## Definition

`const` was introduced in ES6.

Used for values that should not be reassigned.

---

## Why Was const Created?

Many variables should never change.

Examples:

- API URLs
- Tax Rates
- Configuration Values

`const` helps prevent accidental changes.

---

## Syntax

```js
const variableName = value;
```

Example:

```js
const country = "India";
```

---

## Sample Code

```js
const country = "India";

console.log(country);
```

---

## Output

```text
India
```

---

## Invalid Example

```js
const country = "India";

country = "USA";
```

Output:

```text
TypeError
```

---

## Real World Example

```js
const API_URL = "https://api.example.com";
```

Used in configuration files.

---

## Advantages

- Prevents reassignment
- Improves code safety
- Better readability

---

## Disadvantages

- Cannot be reassigned

---

## Interview Answer

`const` is a block-scoped variable declaration introduced in ES6. Once assigned, its reference cannot be reassigned.

---

# Scope

## Definition

Scope determines where a variable can be accessed in a program.

In simple terms:

> Scope defines the visibility of a variable.

---

## Why Needed

Without scope:

- Variables may conflict
- Memory management becomes difficult
- Bugs increase

Scope helps isolate variables.

---

## Types of Scope

```text
Scope
│
├── Global Scope
├── Function Scope
└── Block Scope
```

---

# Global Scope

## Definition

Variables declared outside any function or block belong to Global Scope.

They can be accessed anywhere.

---

## Example

```js
let company = "Google";

function showCompany(){
    console.log(company);
}

showCompany();
```

---

## Output

```text
Google
```

---

## Real World Example

```js
const APP_NAME = "E-Commerce";
```

Used throughout the application.

---

# Function Scope

## Definition

Variables declared inside a function are accessible only within that function.

---

## Example

```js
function display(){

    let name = "Rahul";

    console.log(name);
}

display();
```

---

## Output

```text
Rahul
```

---

## Invalid Access

```js
function display(){

    let name = "Rahul";
}

console.log(name);
```

---

## Output

```text
ReferenceError
```

---

## Real World Example

Temporary calculations inside functions.

---

# Block Scope

## Definition

Variables declared using:

```js
let
const
```

inside `{}` are accessible only within that block.

---

## Example

```js
{
    let age = 25;

    console.log(age);
}
```

---

## Output

```text
25
```

---

## Invalid Access

```js
{
    let age = 25;
}

console.log(age);
```

---

## Output

```text
ReferenceError
```

---

## Real World Example

Loop variables and conditional statements.

```js
for(let i = 0; i < 5; i++){

}
```

---

# Scope Diagram

```text
Global Scope
│
├── Function Scope
│       │
│       └── Block Scope
│
└── Block Scope
```

---

# Advantages of Scope

- Prevents variable conflicts
- Improves maintainability
- Better memory management
- Safer code

---

# Disadvantages

- Wrong scope usage can cause bugs
- Global variables can be modified accidentally

---

# Fresher Interview Questions

### What is a variable?

A named memory location used to store data.

### What are the ways to declare variables?

- var
- let
- const

### What is scope?

Scope determines where a variable can be accessed.

### What is Global Scope?

Variables accessible throughout the program.

### What is Block Scope?

Variables accessible only inside a block.

---

# 1–2 Years Interview Questions

### Difference between var and let?

var is function scoped.

let is block scoped.

### Difference between let and const?

let allows reassignment.

const does not allow reassignment.

### Why is let preferred over var?

Because it prevents redeclaration issues and supports block scope.

---

# Experienced Interview Questions

### Why was let introduced in ES6?

To solve problems caused by var such as redeclaration and lack of block scope.

### Why should global variables be avoided?

Because they increase coupling and may be modified accidentally.

---

# Summary

In this chapter, we learned:

- Variables
- var
- let
- const
- Scope
- Global Scope
- Function Scope
- Block Scope

These concepts form the foundation for understanding Hoisting, Temporal Dead Zone (TDZ), and variable behavior in JavaScript.

---

## Next Topic

➡️ Hoisting, Temporal Dead Zone (TDZ), var vs let vs const, Tricky Questions & Coding Problems