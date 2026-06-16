# Reference Data Types

## Overview

Primitive Data Types can store only a single value.

In real-world applications, we often need to store multiple related values together.

Examples:

* User Information
* Product Details
* Student Records
* Shopping Cart Items
* API Responses

To handle such data, JavaScript provides **Reference Data Types**.

---

## Definition

Reference Data Types are data types that store multiple values and are accessed through references (memory addresses).

Unlike Primitive Data Types, Reference Types store the actual data in Heap Memory and the variable stores a reference to that memory location.

JavaScript Reference Data Types:

* Object
* Array
* Function
* Date
* Map
* Set

---

## Why Needed

Suppose we want to store user information.

Without Reference Types:

```js
let name = "Rahul";
let age = 25;
let email = "rahul@gmail.com";
let city = "Hyderabad";
```

Managing many variables becomes difficult.

Using an Object:

```js
const user = {
  name: "Rahul",
  age: 25,
  email: "rahul@gmail.com",
  city: "Hyderabad"
};
```

All related information is grouped together.

---

## Internal Working

When a Reference Type is created:

```js
const user = {
  name: "Rahul"
};
```

JavaScript:

1. Creates memory in Heap.
2. Stores object data in Heap.
3. Stores reference address in Stack.
4. Variable points to Heap memory.

---

## Architecture

```text
Variable
   │
   ▼
Reference Address
   │
   ▼
Heap Memory
   │
   ▼
Actual Data
```

---

## Diagram

```text
Stack Memory
┌────────────┐
│ user       │
│ Ref-101    │
└────────────┘
      │
      ▼
Heap Memory
┌─────────────────┐
│ name : Rahul    │
└─────────────────┘
```

---

# 1. Object

## Definition

Object is a Reference Data Type used to store multiple related values in a single variable using key-value pairs.

Objects help organize related information together.

---

## Why Needed

Suppose a user has:

* Name
* Age
* Email
* Mobile Number

Instead of creating multiple variables, we store everything inside one Object.

---

## Syntax

```js
const user = {
  key: value
};
```

---

## Sample Code

```js
const user = {
  name: "Rahul",
  age: 25,
  city: "Hyderabad"
};

console.log(user);
```

---

## Output

```text
{
  name: 'Rahul',
  age: 25,
  city: 'Hyderabad'
}
```

---

## Real World Example

```js
const product = {
  id: 101,
  name: "Laptop",
  price: 50000,
  brand: "Dell"
};
```

Used in:

* E-Commerce Applications
* User Profiles
* API Responses

---

## Interview Answer

An Object is a Reference Data Type that stores multiple related values using key-value pairs.

---

## Coding Question

Print User Name from Object.

### Solution

```js
const user = {
  name: "Rahul",
  age: 25
};

console.log(user.name);
```

Output:

```text
Rahul
```

---

# 2. Array

## Definition

Array is a Reference Data Type used to store multiple values in a single variable.

Each value is accessed using an index.

---

## Why Needed

Without Arrays:

```js
let color1 = "Red";
let color2 = "Blue";
let color3 = "Green";
```

With Arrays:

```js
const colors = ["Red", "Blue", "Green"];
```

---

## Syntax

```js
const arr = [];
```

---

## Sample Code

```js
const colors = ["Red", "Blue", "Green"];

console.log(colors);
```

---

## Output

```text
['Red', 'Blue', 'Green']
```

---

## Real World Example

```js
const cartItems = [
  "Laptop",
  "Mouse",
  "Keyboard"
];
```

Used in:

* Shopping Carts
* Product Lists
* Student Lists

---

## Interview Answer

Array is a Reference Data Type used to store multiple values in a single variable using index positions.

---

## Coding Question

Print Second Element.

### Solution

```js
const nums = [10,20,30];

console.log(nums[1]);
```

Output:

```text
20
```

---

# 3. Function

## Definition

A Function is a reusable block of code used to perform a specific task.

Functions are also Objects in JavaScript.

---

## Why Needed

Without Functions:

```js
console.log(10 + 20);
console.log(10 + 20);
console.log(10 + 20);
```

Code repetition increases.

Functions solve this problem.

---

## Syntax

```js
function functionName(){
}
```

---

## Sample Code

```js
function greet(){
  console.log("Welcome");
}

greet();
```

---

## Output

```text
Welcome
```

---

## Real World Example

```js
function calculateTotal(price, tax){
  return price + tax;
}
```

Used in business logic.

---

## Interview Answer

A Function is a reusable block of code that executes whenever it is called.

---

## Coding Question

Add Two Numbers.

### Solution

```js
function add(a,b){
  return a+b;
}

console.log(add(10,20));
```

Output:

```text
30
```

---

# 4. Date

## Definition

Date is a built-in object used to work with dates and time.

---

## Why Needed

Applications frequently require:

* Current Date
* Current Time
* Booking Dates
* Attendance Records

---

## Syntax

```js
const today = new Date();
```

---

## Sample Code

```js
const today = new Date();

console.log(today);
```

---

## Real World Example

Used in:

* Ticket Booking Systems
* Attendance Systems
* Banking Applications

---

# 5. Map

## Definition

Map is a collection of key-value pairs.

Unlike Objects, Map allows any data type as a key.

---

## Why Needed

Useful when dynamic keys are required.

---

## Sample Code

```js
const user = new Map();

user.set("name","Rahul");

console.log(user.get("name"));
```

---

## Output

```text
Rahul
```

---

## Real World Example

Used in:

* Caching
* Dynamic Data Storage
* Lookup Tables

---

# 6. Set

## Definition

Set stores only unique values.

Duplicate values are automatically removed.

---

## Why Needed

Useful when duplicates should not exist.

---

## Sample Code

```js
const nums = new Set([1,2,2,3,3]);

console.log(nums);
```

---

## Output

```text
Set(3) {1,2,3}
```

---

## Real World Example

Used in:

* Removing Duplicates
* Unique User IDs
* Unique Tags

---

# Advantages

* Stores multiple values
* Better organization
* Reusable structures
* Represents real-world entities
* Easy data management

---

# Disadvantages

* Uses more memory than Primitive Types
* Copying can cause reference issues
* More complex than Primitive Types

---

# Fresher Interview Questions

### What are Reference Data Types?

Reference Data Types store multiple values and are accessed using references.

### Name Reference Data Types.

* Object
* Array
* Function
* Date
* Map
* Set

### What is an Object?

An Object stores data using key-value pairs.

### What is an Array?

An Array stores multiple values using indexes.

---

# 1–2 Years Interview Questions

### Difference between Object and Array?

Object stores key-value pairs.

Array stores indexed values.

### Why are Arrays used?

To store multiple values in a single variable.

### Are Functions Objects in JavaScript?

Yes.

Functions are special types of Objects.

---

# Experienced Interview Questions

### Why are Objects stored in Heap Memory?

Because their size can grow dynamically during runtime.

### Difference between Map and Object?

Map supports any data type as keys.

Object keys are generally strings or symbols.

### When would you use Set instead of Array?

When duplicate values must be removed automatically.

---

# Tricky Interview Questions

### Is Array a Primitive Data Type?

❌ No

Array is a Reference Data Type.

---

### Is Function a Reference Data Type?

✅ Yes

Functions are Objects.

---

### What is the output?

```js
console.log(typeof []);
```

Output:

```text
object
```

---

### What is the output?

```js
console.log(typeof function(){});
```

Output:

```text
function
```

---

### Are two objects equal?

```js
const a = {};
const b = {};

console.log(a === b);
```

Output:

```text
false
```

Reason:

Both objects have different references.

---

# Coding Questions

## Find Array Length

```js
const nums = [10,20,30,40];

console.log(nums.length);
```

Output:

```text
4
```

---

## Remove Duplicate Values

```js
const nums = [1,2,2,3,3];

const unique = [...new Set(nums)];

console.log(unique);
```

Output:

```text
[1,2,3]
```

---

## Iterate Object

```js
const user = {
  name:"Rahul",
  age:25
};

for(let key in user){
  console.log(key,user[key]);
}
```

Output:

```text
name Rahul
age 25
```

---

# Summary

In this chapter, we learned:

* What Reference Data Types are
* Why they are needed
* Object
* Array
* Function
* Date
* Map
* Set
* Real-world usage
* Coding examples
* Interview questions
* Tricky questions

Reference Data Types are used extensively in real-world applications because they allow developers to organize and manage complex data efficiently.

---

## Next Topic

➡️ typeof Operator, Stack vs Heap Memory, Copy by Value & Copy by Reference
