# Additional Important Concepts

## Variable Naming Rules

Variables must follow certain rules.

### Valid

```js
let firstName = "Rahul";
let _name = "Rahul";
let $salary = 50000;
```

### Invalid

```js
let 1name = "Rahul";

let first-name = "Rahul";

let let = "Rahul";
```

### Rules

- Cannot start with a number.
- Spaces are not allowed.
- Hyphens (-) are not allowed.
- Reserved keywords cannot be used.
- Variable names are case-sensitive.

---

## Variable Naming Conventions

### camelCase

Used for variables and functions.

```js
let firstName = "Rahul";
let totalAmount = 5000;
```

### PascalCase

Used for Classes.

```js
class Student {}
```

### UPPER_CASE

Used for constants.

```js
const API_URL = "https://api.com";
```

---

# typeof Operator

## Definition

The `typeof` operator is used to determine the data type of a value.

---

## Why Needed

Used for:

- Type Checking
- Validation
- Debugging

---

## Syntax

```js
typeof value
```

---

## Sample Code

```js
console.log(typeof "Hello");
console.log(typeof 100);
console.log(typeof true);
```

---

## Output

```text
string
number
boolean
```

---

## Real World Example

```js
function processData(data){
  if(typeof data === "string"){
    console.log("Valid String");
  }
}
```

---

## Tricky Examples

```js
console.log(typeof null);
```

Output:

```text
object
```

Historical JavaScript bug.

```js
console.log(typeof []);
```

Output:

```text
object
```

Arrays are objects in JavaScript.

---

# Stack vs Heap Memory

## Definition

JavaScript uses two memory areas:

- Stack Memory
- Heap Memory

---

## Stack Memory

Stores:

- Primitive Values
- References

Example:

```js
let age = 25;
```

---

## Heap Memory

Stores:

- Objects
- Arrays
- Functions

Example:

```js
const user = {
  name: "Rahul"
};
```

---

## Diagram

```text
Primitive

Stack
┌──────────┐
│ age = 25 │
└──────────┘


Reference

Stack
┌──────────┐
│ Ref-101  │
└──────────┘
      │
      ▼

Heap
┌──────────────┐
│ name: Rahul  │
└──────────────┘
```

---

# Primitive Copy Behavior

## Definition

Primitive values are copied by value.

A new copy is created.

---

## Sample Code

```js
let a = 10;

let b = a;

b = 20;

console.log(a);
console.log(b);
```

---

## Output

```text
10
20
```

---

## Explanation

Changing `b` does not affect `a` because both variables contain separate copies.

---

# Reference Copy Behavior

## Definition

Objects and Arrays are copied by reference.

Both variables point to the same memory location.

---

## Sample Code

```js
const user1 = {
  name: "Rahul"
};

const user2 = user1;

user2.name = "John";

console.log(user1.name);
```

---

## Output

```text
John
```

---

## Explanation

Both variables reference the same object.

---

# Object Property Access

## Dot Notation

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

## Bracket Notation

```js
console.log(user["age"]);
```

Output:

```text
25
```

---

# Array Element Access

## Sample Code

```js
const colors = ["Red", "Blue", "Green"];

console.log(colors[0]);
console.log(colors[2]);
```

---

## Output

```text
Red
Green
```

---

# Programming Questions

## Q1. Sum of Two Numbers

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

## Q2. Check Even or Odd

```js
let num = 10;

if(num % 2 === 0){
  console.log("Even");
}else{
  console.log("Odd");
}
```

Output:

```text
Even
```

---

## Q3. Reverse a String

```js
let str = "Rahul";

let reversed = str.split("").reverse().join("");

console.log(reversed);
```

Output:

```text
luhaR
```

---

## Q4. Find Largest Number

```js
const nums = [10,20,50,30];

console.log(Math.max(...nums));
```

Output:

```text
50
```

---

# Tricky Interview Questions

## Question 1

```js
console.log(typeof null);
```

Output:

```text
object
```

Reason:

Historical JavaScript bug.

---

## Question 2

```js
console.log([] == false);
```

Output:

```text
true
```

Reason:

Type coercion.

---

## Question 3

```js
console.log([] === false);
```

Output:

```text
false
```

Reason:

Strict equality checks both type and value.

---

## Question 4

```js
console.log(NaN === NaN);
```

Output:

```text
false
```

Reason:

NaN is never equal to itself.

---

# Experienced Interview Concepts

## Shallow Copy

```js
const user1 = {
  name: "Rahul"
};

const user2 = {...user1};
```

Creates a new object but nested objects are still shared.

---

## Deep Copy

```js
const user2 = structuredClone(user1);
```

Creates a completely independent copy.

---

## Interview Question

### Difference between Shallow Copy and Deep Copy?

Shallow Copy copies only the first level.

Deep Copy copies all nested levels.