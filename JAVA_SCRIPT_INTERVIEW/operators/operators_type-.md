# Comparison Operators, Logical Operators, Unary Operators & Increment/Decrement Operators

## Overview

In JavaScript, applications often need to compare values and make decisions.

Examples:

- Is user age greater than 18?
- Is password correct?
- Is product available?
- Is user logged in?

To perform these checks, JavaScript provides:

- Comparison Operators
- Logical Operators
- Unary Operators
- Increment & Decrement Operators

These operators are heavily used in:

- Conditions
- Loops
- Authentication Systems
- Form Validation
- Business Logic

---

## Definition

Operators that compare values, evaluate conditions, and modify variables are called Comparison, Logical, Unary, and Increment/Decrement Operators.

Example:

```js
let age = 20;

console.log(age > 18);
```

Output:

```text
true
```

---

## Why Needed

Imagine a Login System.

We need to check:

```text
Is Username Correct?
Is Password Correct?
Is User Active?
```

These checks are impossible without comparison and logical operators.

---

## Internal Working

```text
Values
  │
  ▼
Comparison
  │
  ▼
true / false
  │
  ▼
Logical Evaluation
  │
  ▼
Decision
```

---

## Architecture

```text
Variables
   │
   ▼
Comparison Operators
   │
   ▼
Boolean Result
   │
   ▼
Logical Operators
   │
   ▼
Final Decision
```

---

## Diagram

```text
20 > 18

  │
  ▼

Comparison

  │
  ▼

true
```

---

# Comparison Operators

## Definition

Comparison Operators compare two values and return either:

```text
true
false
```

---

## Why Needed

Used in:

- Login Validation
- Eligibility Checks
- Product Availability
- Conditional Statements

---

## Comparison Operators Table

| Operator | Meaning |
|----------|----------|
| == | Equal |
| === | Strict Equal |
| != | Not Equal |
| !== | Strict Not Equal |
| > | Greater Than |
| < | Less Than |
| >= | Greater Than or Equal |
| <= | Less Than or Equal |

---

# Equal Operator (==)

## Definition

Checks only value.

Performs type conversion if necessary.

---

## Example

```js
console.log(10 == "10");
```

---

## Output

```text
true
```

---

## Why?

JavaScript converts:

```text
"10" → 10
```

Then compares.

---

# Strict Equal (===)

## Definition

Checks both:

- Value
- Data Type

---

## Example

```js
console.log(10 === "10");
```

---

## Output

```text
false
```

---

## Why?

```text
10      → Number

"10"    → String
```

Different types.

---

## Real World Example

Login Validation

```js
let otp = 1234;

console.log(otp === 1234);
```

---

# Not Equal (!=)

## Example

```js
console.log(10 != 20);
```

Output:

```text
true
```

---

# Strict Not Equal (!==)

## Example

```js
console.log(10 !== "10");
```

Output:

```text
true
```

---

# Greater Than (>)

## Example

```js
console.log(20 > 18);
```

Output:

```text
true
```

---

# Less Than (<)

## Example

```js
console.log(10 < 20);
```

Output:

```text
true
```

---

# Greater Than or Equal (>=)

## Example

```js
console.log(18 >= 18);
```

Output:

```text
true
```

---

# Less Than or Equal (<=)

## Example

```js
console.log(10 <= 20);
```

Output:

```text
true
```

---

# Logical Operators

## Definition

Logical Operators combine multiple conditions.

---

## Why Needed

Suppose a user can login only if:

```text
Username Correct
AND
Password Correct
```

Logical Operators help combine conditions.

---

## Types

| Operator | Meaning |
|----------|----------|
| && | AND |
| \|\| | OR |
| ! | NOT |

---

# AND Operator (&&)

## Definition

Returns true only if all conditions are true.

---

## Example

```js
let age = 25;

let citizen = true;

console.log(age >= 18 && citizen);
```

---

## Output

```text
true
```

---

## Real World Example

Voting Eligibility

```js
age >= 18 && citizen
```

---

# OR Operator (||)

## Definition

Returns true if at least one condition is true.

---

## Example

```js
console.log(true || false);
```

Output:

```text
true
```

---

## Real World Example

```js
loginByEmail || loginByMobile
```

---

# NOT Operator (!)

## Definition

Reverses a boolean value.

---

## Example

```js
console.log(!true);
```

---

## Output

```text
false
```

---

## Real World Example

```js
if(!isLoggedIn){
   console.log("Please Login");
}
```

---

# Unary Operators

## Definition

Unary Operators work on a single operand.

---

## Examples

```js
typeof
+
-
++
--
!
```

---

## Unary Plus (+)

### Example

```js
console.log(+"10");
```

---

### Output

```text
10
```

String converted to Number.

---

## Unary Minus (-)

### Example

```js
console.log(-10);
```

---

### Output

```text
-10
```

---

# Increment Operator (++)

## Definition

Increases value by 1.

---

## Example

```js
let count = 10;

count++;

console.log(count);
```

---

## Output

```text
11
```

---

## Real World Example

Page View Counter

```js
views++;
```

---

# Decrement Operator (--)

## Definition

Decreases value by 1.

---

## Example

```js
let stock = 10;

stock--;

console.log(stock);
```

---

## Output

```text
9
```

---

## Real World Example

Inventory Management

```js
stock--;
```

---

# Prefix Increment

## Example

```js
let a = 10;

console.log(++a);
```

---

## Output

```text
11
```

Value increases first.

---

# Postfix Increment

## Example

```js
let a = 10;

console.log(a++);
```

---

## Output

```text
10
```

After execution:

```text
a = 11
```

---

# Advantages

- Helps in decision making
- Used in loops
- Used in authentication
- Simplifies complex conditions

---

# Disadvantages

- Wrong operator selection causes bugs
- Type coercion can create unexpected results

---

# Interview Answer

Comparison Operators compare values and return boolean results.

Logical Operators combine conditions.

Unary Operators work on a single operand.

Increment and Decrement Operators increase or decrease values by one.

---

# Fresher Interview Questions

### Difference between == and === ?

== checks value only.

=== checks value and type.

---

### What does && do?

Returns true only when all conditions are true.

---

### What does || do?

Returns true when at least one condition is true.

---

### What is ++ ?

Increment Operator.

---

# 1–2 Years Interview Questions

### Difference between Prefix and Postfix Increment?

Prefix increments before use.

Postfix increments after use.

---

### Why is === preferred over == ?

Because it avoids type coercion issues.

---

### What is Short Circuit Evaluation?

Logical operators stop evaluation once the result is determined.

---

# 3–6 Years Interview Questions

### Explain Type Coercion in Comparison Operators.

JavaScript automatically converts values before comparison.

---

### Why should == be avoided?

Because automatic conversions may cause unexpected results.

---

### Explain Short-Circuiting with && and ||.

JavaScript evaluates only as much as necessary.

---

# Tricky Questions

## Question 1

```js
console.log(10 == "10");
```

Output:

```text
true
```

---

## Question 2

```js
console.log(10 === "10");
```

Output:

```text
false
```

---

## Question 3

```js
console.log(false == 0);
```

Output:

```text
true
```

---

## Question 4

```js
console.log(false === 0);
```

Output:

```text
false
```

---

## Question 5

```js
console.log(null == undefined);
```

Output:

```text
true
```

---

## Question 6

```js
console.log(null === undefined);
```

Output:

```text
false
```

---

## Question 7

```js
let a = 10;

console.log(a++);
console.log(a);
```

Output:

```text
10
11
```

---

## Question 8

```js
let a = 10;

console.log(++a);
```

Output:

```text
11
```

---

# Coding Questions

## Q1. Check Voting Eligibility

```js
let age = 20;

console.log(age >= 18);
```

Output:

```text
true
```

---

## Q2. Check Largest Number

```js
let a = 10;
let b = 20;

console.log(a > b ? a : b);
```

Output:

```text
20
```

---

## Q3. Login Validation

```js
let username = true;
let password = true;

console.log(username && password);
```

Output:

```text
true
```

---

## Q4. Count Visitors

```js
let visitors = 0;

visitors++;

console.log(visitors);
```

Output:

```text
1
```

---

# Summary

In this chapter, we learned:

- Comparison Operators
- Logical Operators
- Unary Operators
- Increment Operator
- Decrement Operator
- Prefix Increment
- Postfix Increment
- Type Coercion
- Short Circuit Evaluation
- Coding Questions
- Tricky Interview Questions

These operators are heavily used in conditions, loops, validations, authentication systems, and business logic.

---

## Next Topic

➡️ Ternary Operator, Nullish Coalescing Operator (??), Optional Chaining (?.), Operator Precedence