# JavaScript Control Statements

## Overview

Control Statements are used to control the flow of execution in a JavaScript program.

By default, JavaScript executes code line by line from top to bottom.

However, in real-world applications, we often need to make decisions based on conditions.

Examples:

- Check whether a user is eligible to vote.
- Verify login credentials.
- Validate form data.
- Display different content based on user roles.

Control Statements help us execute specific blocks of code based on conditions.

---

## Definition

Control Statements are statements that control the execution flow of a program by making decisions or repeating tasks based on conditions.

In simple words:

> Control Statements decide which code should execute and which code should be skipped.

---

## Why It Is Needed

Without Control Statements:

```js
console.log("Welcome");
console.log("You Can Vote");
```

The output will always execute.

But what if the user's age is less than 18?

We need conditions.

Example:

```js
let age = 16;

if(age >= 18){
    console.log("You Can Vote");
}
```

Output:

```text
No Output
```

Control Statements allow programs to make decisions dynamically.

---

## How It Works

Control Statements evaluate a condition.

```text
Condition
    │
    ▼
 true / false
    │
 ┌──┴──┐
 │     │
 ▼     ▼
Execute Skip
```

If the condition is true:

```text
Execute Code
```

If the condition is false:

```text
Skip Code
```

---

## Internal Working

Example:

```js
let age = 20;

if(age >= 18){
   console.log("Eligible");
}
```

Internal Flow:

```text
age = 20
   │
   ▼
20 >= 18
   │
   ▼
true
   │
   ▼
Execute Block
```

Output:

```text
Eligible
```

---

## Types of Control Statements

```text
Control Statements
│
├── if
├── if else
├── else if
├── nested if
├── switch
├── break
├── continue
└── return
```

---

## Syntax

### if Statement

```js
if(condition){
   // code
}
```

### if else Statement

```js
if(condition){
   // code
}else{
   // code
}
```

### else if Statement

```js
if(condition1){

}
else if(condition2){

}
else{

}
```

### switch Statement

```js
switch(expression){

   case value1:
      break;

   case value2:
      break;

   default:
}
```

---

## Examples

### Example 1: Voting Eligibility

```js
let age = 20;

if(age >= 18){
   console.log("Eligible");
}
```

Output:

```text
Eligible
```

---

### Example 2: Login Validation

```js
let password = "admin123";

if(password === "admin123"){
   console.log("Login Success");
}
else{
   console.log("Invalid Password");
}
```

Output:

```text
Login Success
```

---

### Example 3: Grade System

```js
let marks = 85;

if(marks >= 90){
   console.log("A Grade");
}
else if(marks >= 75){
   console.log("B Grade");
}
else{
   console.log("C Grade");
}
```

Output:

```text
B Grade
```

---

### Example 4: Day Finder

```js
let day = 2;

switch(day){

   case 1:
      console.log("Monday");
      break;

   case 2:
      console.log("Tuesday");
      break;

   default:
      console.log("Invalid Day");
}
```

Output:

```text
Tuesday
```

---

## Real-World Use Cases

### User Authentication

```js
if(username && password){
   console.log("Login Success");
}
```

---

### ATM Withdrawal

```js
if(balance >= amount){
   console.log("Withdrawal Successful");
}
```

---

### E-Commerce Discount

```js
if(totalAmount > 5000){
   console.log("Discount Applied");
}
```

---

### Student Result System

```js
if(marks >= 35){
   console.log("Pass");
}
else{
   console.log("Fail");
}
```

---

## Interview Questions

### What are Control Statements?

Control Statements are used to control the flow of execution based on conditions.

---

### Why are Control Statements required?

To make decisions and execute specific code blocks based on conditions.

---

### What are the different types of Control Statements?

- if
- if else
- else if
- nested if
- switch

---

### Which Control Statement is used for multiple conditions?

```text
else if
switch
```

---

### Which statement is preferred for multiple fixed values?

```text
switch
```

---

## Tricky Interview Questions

### Question 1

```js
if(true)
   console.log("Hello");
   console.log("World");
```

Output:

```text
Hello
World
```

Why?

Only the first statement belongs to if.

---

### Question 2

```js
if(0){
   console.log("Hello");
}
```

Output:

```text
No Output
```

Because:

```text
0 = false
```

---

### Question 3

```js
if(""){
   console.log("Hello");
}
```

Output:

```text
No Output
```

Because:

```text
Empty String = false
```

---

### Question 4

```js
if("Rahul"){
   console.log("Hello");
}
```

Output:

```text
Hello
```

Because non-empty strings are truthy values.

---

### Question 5

```js
switch(1){

   case "1":
      console.log("One");
      break;

   default:
      console.log("Default");
}
```

Output:

```text
Default
```

Because switch uses strict comparison (`===`).

---

## Common Mistakes

### Missing Curly Braces

Bad:

```js
if(true)
   console.log("A");
   console.log("B");
```

Good:

```js
if(true){
   console.log("A");
   console.log("B");
}
```

---

### Forgetting break in switch

Bad:

```js
switch(day){

   case 1:
      console.log("Monday");

   case 2:
      console.log("Tuesday");
}
```

Output:

```text
Monday
Tuesday
```

This is called fall-through.

---

### Using Assignment Instead of Comparison

Wrong:

```js
if(age = 18)
```

Correct:

```js
if(age === 18)
```

---
# Additional Interview Questions

## Fresher Interview Questions

### What is the difference between if and if else?

**if**

Executes code only when the condition is true.

```js
if(age >= 18){
   console.log("Eligible");
}
```

---

**if else**

Provides an alternative block when the condition is false.

```js
if(age >= 18){
   console.log("Eligible");
}
else{
   console.log("Not Eligible");
}
```

---

### What is the difference between else if and switch?

**else if**

Best when conditions are ranges.

```js
if(marks >= 90){
   console.log("A");
}
else if(marks >= 75){
   console.log("B");
}
```

---

**switch**

Best when checking fixed values.

```js
switch(day){

   case 1:
      console.log("Monday");
      break;
}
```

---

### Can we write multiple if statements?

Yes.

```js
let age = 20;

if(age > 10){
   console.log("Age > 10");
}

if(age > 18){
   console.log("Adult");
}
```

Output:

```text
Age > 10
Adult
```

---

### Which values are considered false in JavaScript?

Falsy Values:

```js
false
0
-0
""
null
undefined
NaN
```

---

### Which values are considered true?

Truthy Values:

```js
"Hello"
[]
{}
1
100
true
```

---

# 1-2 Years Interview Questions

### When should we use switch instead of if else?

Use switch when comparing a single variable against multiple fixed values.

Example:

```js
switch(role){

   case "admin":
      break;

   case "user":
      break;
}
```

---

### Does switch use == or === ?

Answer:

```text
===
```

Strict Comparison.

Example:

```js
switch(1){

   case "1":
      console.log("Match");
      break;

   default:
      console.log("No Match");
}
```

Output:

```text
No Match
```

---

### What is Fall Through in switch?

When break is omitted.

Example:

```js
switch(1){

   case 1:
      console.log("One");

   case 2:
      console.log("Two");
}
```

Output:

```text
One
Two
```

---

### Can nested if statements be avoided?

Yes.

Using:

- Logical Operators
- Early Returns
- Switch Statements

---

### What is the time complexity of switch?

Generally:

```text
O(1) to O(n)
```

Depends on JavaScript engine optimization.

---

# 3-6 Years Experienced Questions

### Which is more readable: switch or if else?

Depends on the use case.

Use:

```text
switch
```

For fixed values.

Use:

```text
if else
```

For conditions and ranges.

---

### Why can deeply nested if statements be dangerous?

Problems:

- Difficult debugging
- Reduced readability
- Higher maintenance cost

Example:

```js
if(user){

   if(user.isActive){

      if(user.role === "admin"){

      }
   }
}
```

---

### How would you refactor multiple if else conditions?

Using:

- Object Mapping
- Switch
- Strategy Pattern

Example:

```js
const roles = {
   admin : "Admin Panel",
   user : "User Panel"
};

console.log(
   roles["admin"]
);
```

---

### Why does switch use strict equality?

To prevent type coercion bugs.

Example:

```js
1 === "1"
```

Output:

```text
false
```

---

# Tricky Interview Questions

## Question 1

```js
if([]){
   console.log("Hello");
}
```

Output:

```text
Hello
```

Why?

Arrays are truthy.

---

## Question 2

```js
if({}){
   console.log("Hello");
}
```

Output:

```text
Hello
```

Objects are truthy.

---

## Question 3

```js
if("0"){
   console.log("Hello");
}
```

Output:

```text
Hello
```

Why?

```text
"0"
```

is a non-empty string.

---

## Question 4

```js
if(0){
   console.log("Hello");
}
else{
   console.log("World");
}
```

Output:

```text
World
```

---

## Question 5

```js
if(null){
   console.log("Hello");
}
else{
   console.log("World");
}
```

Output:

```text
World
```

---

## Question 6

```js
if(undefined){
   console.log("Hello");
}
else{
   console.log("World");
}
```

Output:

```text
World
```

---

## Question 7

```js
if(NaN){
   console.log("Hello");
}
else{
   console.log("World");
}
```

Output:

```text
World
```

---

## Question 8

```js
switch(true){

   case 10 > 5:
      console.log("True");
      break;

   default:
      console.log("False");
}
```

Output:

```text
True
```

---

## Question 9

```js
let age = 18;

if(age = 20){
   console.log("Adult");
}
```

Output:

```text
Adult
```

Why?

Assignment returns:

```text
20
```

Which is truthy.

---

## Question 10

```js
console.log(Boolean([]));
console.log(Boolean({}));
```

Output:

```text
true
true
```

---

## Question 11

```js
if([] == false){
   console.log("True");
}
```

Output:

```text
True
```

Due to type coercion.

---

## Question 12

```js
if("" == false){
   console.log("True");
}
```

Output:

```text
True
```

---

## Question 13

```js
switch("2"){

   case 2:
      console.log("Two");
      break;

   default:
      console.log("Default");
}
```

Output:

```text
Default
```

Because:

```js
"2" !== 2
```

---

## Question 14

```js
if(true)
if(false)
console.log("A");
else
console.log("B");
```

Output:

```text
B
```

This is known as the:

```text
Dangling Else Problem
```

---

## Question 15

```js
if("false"){
   console.log("Hello");
}
```

Output:

```text
Hello
```

Because:

```text
"false"
```

is a non-empty string.

---

# Coding Questions

## Q1 Check Positive, Negative or Zero

```js
let num = -10;

if(num > 0){
   console.log("Positive");
}
else if(num < 0){
   console.log("Negative");
}
else{
   console.log("Zero");
}
```

---

## Q2 Largest Of Three Numbers

```js
let a = 10;
let b = 20;
let c = 30;

if(a > b && a > c){
   console.log(a);
}
else if(b > c){
   console.log(b);
}
else{
   console.log(c);
}
```

---

## Q3 Grade Calculator

```js
let marks = 88;

if(marks >= 90){
   console.log("A");
}
else if(marks >= 75){
   console.log("B");
}
else{
   console.log("C");
}
```

---

## Q4 Traffic Signal System

```js
let signal = "red";

switch(signal){

   case "red":
      console.log("Stop");
      break;

   case "green":
      console.log("Go");
      break;

   default:
      console.log("Wait");
}
```

## Summary

In this chapter, we learned:

- What Control Statements are
- Why Control Statements are needed
- How Control Statements work
- Internal execution flow
- Types of Control Statements
- if Statement
- if else Statement
- else if Statement
- switch Statement
- Real-world examples
- Interview questions
- Tricky questions
- Common mistakes

Control Statements are one of the most important concepts in JavaScript because they allow applications to make decisions dynamically based on user input and business logic.

---

## Next Topic
In the next chapter, we will learn about Loops in JavaScript, which are used to repeat a block of code multiple times based on a condition.