# Ternary Operator, Nullish Coalescing Operator (??), Optional Chaining (?.) & Operator Precedence

## Overview

In real-world applications, developers frequently need to:

- Make quick decisions
- Provide default values
- Safely access nested object properties
- Control the order of execution

JavaScript provides:

- Ternary Operator (`? :`)
- Nullish Coalescing Operator (`??`)
- Optional Chaining (`?.`)
- Operator Precedence

These operators make code cleaner, shorter, and safer.

---

## Definition

These are special operators used for:

- Conditional expressions
- Handling null and undefined values
- Safe object property access
- Managing execution priority

---

## Why Needed

Imagine a User Profile Application.

We need to:

- Display user name if available
- Show default value if name is missing
- Access nested properties safely
- Check conditions efficiently

Without these operators, code becomes lengthy and difficult to maintain.

---

## Internal Working

```text
Condition
    │
    ▼
Operator
    │
    ▼
Evaluation
    │
    ▼
Result
```

---

## Architecture

```text
Input Data
     │
     ▼
Operator Evaluation
     │
     ▼
Decision / Default Value
     │
     ▼
Output
```

---

## Diagram

```text
Condition
    │
    ▼
True ? Value1 : Value2
    │
    ▼
Result
```

---

# Ternary Operator (? :)

## Definition

The Ternary Operator is a shorthand version of if...else.

It evaluates a condition and returns one of two values.

---

## Why Needed

Instead of writing:

```js
if(age >= 18){
   console.log("Eligible");
}else{
   console.log("Not Eligible");
}
```

We can write:

```js
console.log(age >= 18 ? "Eligible" : "Not Eligible");
```

Cleaner and shorter.

---

## Syntax

```js
condition ? valueIfTrue : valueIfFalse
```

---

## Sample Code

```js
let age = 20;

let result = age >= 18
  ? "Eligible"
  : "Not Eligible";

console.log(result);
```

---

## Output

```text
Eligible
```

---

## Real World Example

Voting Eligibility

```js
let age = 22;

let message =
  age >= 18
  ? "Can Vote"
  : "Cannot Vote";

console.log(message);
```

---

## Advantages

- Shorter than if...else
- Cleaner code
- Easy to read

---

## Disadvantages

- Complex nested ternaries reduce readability

---

## Interview Answer

The Ternary Operator is a shorthand conditional operator that returns one value when a condition is true and another value when the condition is false.

---

# Nullish Coalescing Operator (??)

## Definition

The Nullish Coalescing Operator returns the right-hand value only when the left-hand value is:

```text
null
or
undefined
```

---

## Why Needed

Consider:

```js
let username = null;
```

We want a default value.

Without ??:

```js
let name = username || "Guest";
```

Sometimes this causes issues with:

```js
0
false
""
```

---

## Syntax

```js
value ?? defaultValue
```

---

## Sample Code

```js
let username = null;

console.log(username ?? "Guest");
```

---

## Output

```text
Guest
```

---

## Real World Example

Profile System

```js
let profileImage = null;

console.log(
 profileImage ?? "default.jpg"
);
```

---

## Example 2

```js
console.log(0 ?? 100);
```

Output:

```text
0
```

Because:

```text
0 is NOT null
0 is NOT undefined
```

---

## Advantages

- Safer than ||
- Handles null and undefined only
- Prevents unexpected defaults

---

## Interview Answer

The Nullish Coalescing Operator returns the right-side value only when the left-side value is null or undefined.

---

# Optional Chaining (?.)

## Definition

Optional Chaining safely accesses object properties without throwing errors.

---

## Why Needed

Suppose:

```js
const user = {};
```

Trying:

```js
console.log(user.address.city);
```

Results in:

```text
TypeError
```

Because:

```text
address does not exist
```

Optional Chaining solves this.

---

## Syntax

```js
object?.property
```

---

## Sample Code

```js
const user = {};

console.log(user.address?.city);
```

---

## Output

```text
undefined
```

No error occurs.

---

## Real World Example

API Response Handling

```js
const response = {
  user: {
    name: "Rahul"
  }
};

console.log(
 response.user?.name
);
```

Output:

```text
Rahul
```

---

## Example 2

```js
console.log(
 response.address?.city
);
```

Output:

```text
undefined
```

---

## Advantages

- Prevents runtime errors
- Cleaner code
- Safe property access

---

## Disadvantages

- Can hide missing data issues if overused

---

## Interview Answer

Optional Chaining safely accesses nested properties and returns undefined instead of throwing an error when a property does not exist.

---

# Operator Precedence

## Definition

Operator Precedence determines which operation executes first when multiple operators exist in an expression.

---

## Why Needed

Without precedence rules:

```js
10 + 5 * 2
```

would be ambiguous.

---

## Example

```js
console.log(10 + 5 * 2);
```

Output:

```text
20
```

Because:

```text
5 * 2 = 10

10 + 10 = 20
```

---

## Parentheses Override Precedence

```js
console.log((10 + 5) * 2);
```

Output:

```text
30
```

---

## Common Precedence Order

```text
()
**
* / %
+ -
Comparison
Logical AND &&
Logical OR ||
Ternary
Assignment
```

---

## Real World Example

Price Calculation

```js
let total =
 (price + tax) * quantity;
```

Parentheses ensure correct order.

---

# Fresher Interview Questions

### What is the Ternary Operator?

A shorthand version of if...else.

---

### What does ?? do?

Provides a default value when the left side is null or undefined.

---

### What does ?. do?

Safely accesses object properties.

---

### What is Operator Precedence?

Rules that determine execution order.

---

# 1–2 Years Interview Questions

### Difference between || and ??

|| treats:

```text
0
false
""
```

as falsy.

?? only checks:

```text
null
undefined
```

---

### Why use Optional Chaining?

To avoid runtime errors while accessing nested properties.

---

### Can Ternary Operators replace if...else?

For simple conditions, yes.

---

# 3–6 Years Interview Questions

### Explain short-circuit evaluation with Optional Chaining.

Optional Chaining stops evaluation once a nullish value is encountered.

---

### Why is ?? safer than ||?

Because it does not incorrectly replace:

```text
0
false
""
```

---

### How does JavaScript determine operator precedence?

Using predefined precedence rules in the language specification.

---

# Tricky Questions

## Question 1

```js
console.log(0 || 100);
```

Output:

```text
100
```

---

## Question 2

```js
console.log(0 ?? 100);
```

Output:

```text
0
```

---

## Question 3

```js
console.log(false || true);
```

Output:

```text
true
```

---

## Question 4

```js
console.log(false ?? true);
```

Output:

```text
false
```

---

## Question 5

```js
const user = {};

console.log(
 user.address?.city
);
```

Output:

```text
undefined
```

---

## Question 6

```js
console.log(10 + 5 * 2);
```

Output:

```text
20
```

---

## Question 7

```js
console.log((10 + 5) * 2);
```

Output:

```text
30
```

---

# Coding Questions

## Q1. Check Voting Eligibility

```js
let age = 20;

let result =
 age >= 18
 ? "Eligible"
 : "Not Eligible";

console.log(result);
```

Output:

```text
Eligible
```

---

## Q2. Provide Default Username

```js
let username = null;

console.log(
 username ?? "Guest"
);
```

Output:

```text
Guest
```

---

## Q3. Safe Property Access

```js
const user = {};

console.log(
 user.profile?.name
);
```

Output:

```text
undefined
```

---

## Q4. Calculate Total

```js
let total =
 (100 + 20) * 2;

console.log(total);
```

Output:

```text
240
```

---

# Summary

In this chapter, we learned:

- Ternary Operator
- Nullish Coalescing Operator (??)
- Optional Chaining (?.)
- Operator Precedence
- Real-world examples
- Tricky interview questions
- Coding questions
- Advanced operator usage

These operators are widely used in modern JavaScript applications to write cleaner, safer, and more maintainable code.

---

## Next Topic

➡️ Conditional Statements (if, if-else, nested if, else-if ladder, switch statement)