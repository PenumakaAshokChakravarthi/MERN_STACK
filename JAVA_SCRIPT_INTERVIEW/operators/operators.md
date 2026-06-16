# Operators (Part 1)

## Overview

In JavaScript, Operators are special symbols used to perform operations on values and variables.

Operators help us:

- Perform calculations
- Compare values
- Assign values
- Make decisions
- Execute logical operations

Without operators, JavaScript programs cannot perform meaningful tasks.

---

## Definition

An Operator is a symbol that tells JavaScript to perform a specific operation on one or more operands (values).

Example:

```js
let result = 10 + 20;
```

Here:

```text
10, 20 → Operands

+ → Operator
```

Output:

```text
30
```

---

## Why Needed

Imagine an E-Commerce Application.

We need to:

- Calculate product totals
- Apply discounts
- Compare prices
- Check user eligibility
- Validate login credentials

All these operations require operators.

Example:

```js
let total = 1000 + 500;
```

---

## Internal Working

When JavaScript encounters:

```js
let total = 10 + 20;
```

JavaScript:

1. Reads operands.
2. Identifies operator.
3. Performs operation.
4. Stores result.

```text
Operand + Operand
        │
        ▼
   Operation
        │
        ▼
     Result
```

---

## Architecture

```text
Variables
    │
    ▼
Operators
    │
    ▼
Calculation / Comparison
    │
    ▼
Result
```

---

## Diagram

```text
10 + 20

 │
 ▼

Addition Operator

 │
 ▼

30
```

---

# Types of Operators

```text
Operators
│
├── Arithmetic Operators
├── Assignment Operators
├── Comparison Operators
├── Logical Operators
├── Increment & Decrement
├── Unary Operators
├── Ternary Operator
├── Nullish Coalescing Operator
└── Optional Chaining
```

---

# Arithmetic Operators

## Definition

Arithmetic Operators are used to perform mathematical calculations.

---

## Why Needed

Used in:

- Billing Systems
- Banking Applications
- E-Commerce Calculations
- Student Result Systems

---

## Operators

| Operator | Meaning |
|----------|----------|
| + | Addition |
| - | Subtraction |
| * | Multiplication |
| / | Division |
| % | Modulus |
| ** | Exponent |

---

## Addition (+)

### Syntax

```js
a + b
```

### Example

```js
let total = 10 + 20;

console.log(total);
```

### Output

```text
30
```

---

## Subtraction (-)

### Example

```js
let result = 50 - 20;

console.log(result);
```

### Output

```text
30
```

---

## Multiplication (*)

### Example

```js
let result = 10 * 5;

console.log(result);
```

### Output

```text
50
```

---

## Division (/)

### Example

```js
let result = 100 / 5;

console.log(result);
```

### Output

```text
20
```

---

## Modulus (%)

## Definition

Returns the remainder after division.

---

### Example

```js
console.log(10 % 3);
```

### Output

```text
1
```

---

### Real World Example

Check Even/Odd:

```js
let num = 10;

console.log(num % 2 === 0);
```

Output:

```text
true
```

---

## Exponent (**)

### Definition

Used to calculate power values.

---

### Example

```js
console.log(2 ** 3);
```

### Output

```text
8
```

---

# Assignment Operators

## Definition

Assignment Operators are used to assign values to variables.

---

## Why Needed

Used when storing or updating values.

---

## Operators

| Operator | Meaning |
|----------|----------|
| = | Assign |
| += | Add & Assign |
| -= | Subtract & Assign |
| *= | Multiply & Assign |
| /= | Divide & Assign |
| %= | Modulus & Assign |

---

## Assignment (=)

### Example

```js
let age = 25;
```

---

## Add and Assign (+=)

### Example

```js
let total = 100;

total += 50;

console.log(total);
```

### Output

```text
150
```

---

## Subtract and Assign (-=)

### Example

```js
let amount = 1000;

amount -= 200;

console.log(amount);
```

### Output

```text
800
```

---

## Multiply and Assign (*=)

### Example

```js
let salary = 100;

salary *= 5;

console.log(salary);
```

### Output

```text
500
```

---

## Divide and Assign (/=)

### Example

```js
let num = 100;

num /= 10;

console.log(num);
```

### Output

```text
10
```

---

# Real World Example

Shopping Cart:

```js
let total = 1000;

total += 500;

total -= 200;

console.log(total);
```

Output:

```text
1300
```

---

# Advantages

- Simplifies calculations
- Improves readability
- Reduces code complexity
- Supports business logic

---

# Disadvantages

- Wrong operator usage may cause bugs.
- Type coercion may create unexpected results.

---

# Interview Answer

Operators are symbols used to perform operations on values and variables. They are used for calculations, comparisons, assignments, and logical decisions in JavaScript.

---

# Fresher Interview Questions

### What is an Operator?

An Operator is a symbol that performs an operation on values.

---

### What are Arithmetic Operators?

Operators used for mathematical calculations.

---

### What is Modulus Operator?

Returns the remainder after division.

---

### What does += do?

Adds a value and assigns the result.

---

# 1-2 Years Interview Questions

### Difference between / and % ?

/ returns quotient.

% returns remainder.

---

### What is Exponent Operator?

Used to calculate powers.

```js
2 ** 3
```

Output:

```text
8
```

---

### Why are Assignment Operators useful?

They simplify update operations.

---

# Experienced Interview Questions

### How does JavaScript handle arithmetic operations internally?

JavaScript converts operands into numeric values and then performs calculations.

---

### What happens when operands are different types?

JavaScript may perform type coercion.

Example:

```js
"5" + 2
```

Output:

```text
52
```

---

# Tricky Questions

### Question 1

```js
console.log("5" + 2);
```

Output:

```text
52
```

Reason:

String concatenation.

---

### Question 2

```js
console.log("5" - 2);
```

Output:

```text
3
```

Reason:

JavaScript converts "5" into Number.

---

### Question 3

```js
console.log(true + true);
```

Output:

```text
2
```

Reason:

```text
true = 1
false = 0
```

---

### Question 4

```js
console.log(10 % 2);
```

Output:

```text
0
```

---

# Coding Questions

## Q1. Check Even or Odd

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

## Q2. Find Square

```js
let num = 5;

console.log(num ** 2);
```

Output:

```text
25
```

---

## Q3. Calculate Total Price

```js
let price = 1000;

let tax = 200;

console.log(price + tax);
```

Output:

```text
1200
```

---

# Summary

In this chapter, we learned:

- Operators
- Arithmetic Operators
- Assignment Operators
- Addition
- Subtraction
- Multiplication
- Division
- Modulus
- Exponent
- Real-world usage
- Tricky questions
- Coding questions

These operators form the foundation for calculations and business logic in JavaScript applications.

---

## Next Topic

➡️ Comparison Operators, Logical Operators, Unary Operators, Increment/Decrement