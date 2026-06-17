# JavaScript Loops

## Overview

Loops are used to execute a block of code repeatedly until a specified condition becomes false.

In real-world applications, we often need to perform the same task multiple times.

Examples:

- Printing numbers
- Processing arrays
- Displaying products
- Reading database records
- Generating reports

Without loops, developers would need to write repetitive code.

Loops make code shorter, cleaner, and easier to maintain.

---

## Definition

A loop is a programming construct that repeatedly executes a block of code until a specified condition becomes false.

In simple words:

> Loops help us perform repetitive tasks automatically.

---

## Why It Is Needed

Without loops:

```js
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
```

Using a loop:

```js
for(let i=1;i<=5;i++){
   console.log(i);
}
```

Benefits:

- Reduces code duplication
- Improves readability
- Saves development time
- Handles large datasets efficiently

---

## How It Works

Every loop follows three steps:

```text
Initialization
      │
      ▼
Condition Check
      │
      ▼
Execute Code
      │
      ▼
Update Value
      │
      └──────► Repeat
```

When condition becomes false:

```text
Loop Stops
```

---

## Internal Working

Example:

```js
for(let i=1;i<=3;i++){
   console.log(i);
}
```

Execution Flow:

```text
i = 1

1 <= 3 ✔
Print 1

i = 2

2 <= 3 ✔
Print 2

i = 3

3 <= 3 ✔
Print 3

i = 4

4 <= 3 ✘

Loop Ends
```

---

## Types of Loops

```text
Loops
│
├── Conditional Loops
│   ├── for
│   ├── while
│   └── do while
│
└── Non-Conditional Loops
    ├── for...in
    └── for...of
```

---

# Conditional Loops

## Definition

Conditional Loops execute repeatedly as long as a specified condition evaluates to true.

When the condition becomes false, the loop stops execution.

Examples:

- for
- while
- do while

---

# for Loop

## Definition

The `for` loop is a conditional loop used when the number of iterations is known beforehand.

It contains:

- Initialization
- Condition
- Increment/Decrement

---

## Why It Is Needed

When we know how many times a task should repeat.

Example:

- Print numbers from 1 to 100
- Display student roll numbers

---

## Syntax

```js
for(initialization; condition; increment){
   // code
}
```

---

## Example

```js
for(let i=1;i<=5;i++){
   console.log(i);
}
```

---

## Output

```text
1
2
3
4
5
```

---

## Real-World Example

Generating invoice numbers.

```js
for(let invoice=1;invoice<=10;invoice++){
   console.log(invoice);
}
```

---

# while Loop

## Definition

The `while` loop executes repeatedly as long as the specified condition remains true.

Used when the number of iterations is unknown.

---

## Why It Is Needed

Best for situations where execution depends on a condition.

Examples:

- Login attempts
- Game loops
- Retry mechanisms

---

## Syntax

```js
while(condition){

}
```

---

## Example

```js
let i = 1;

while(i<=5){

   console.log(i);

   i++;
}
```

---

## Output

```text
1
2
3
4
5
```

---

## Real-World Example

ATM Login Attempts

```js
let attempts = 1;

while(attempts <= 3){

   console.log("Try Login");

   attempts++;
}
```

---

# do...while Loop

## Definition

The `do...while` loop executes the code block at least once before checking the condition.

The condition is checked after execution.

---

## Why It Is Needed

Used when code must execute at least once.

Examples:

- Menu Systems
- User Prompts
- Game Menus

---

## Syntax

```js
do{

}while(condition);
```

---

## Example

```js
let i = 10;

do{

   console.log(i);

}while(i<5);
```

---

## Output

```text
10
```

---

## Real-World Example

Menu-driven Application

```text
Display Menu
      │
      ▼
Execute Once
      │
      ▼
Check Continue
```

---

# Non-Conditional Loops

## Definition

Non-Conditional Loops are used to iterate over collections such as arrays, strings, objects, maps, and sets.

Examples:

- for...in
- for...of

---

# for...in Loop

## Definition

The `for...in` loop is used to iterate over the enumerable property keys of an object.

It returns keys.

---

## Why It Is Needed

Used when object property names are required.

---

## Syntax

```js
for(let key in object){

}
```

---

## Example

```js
const user = {

   name:"Rahul",
   age:25
};

for(let key in user){

   console.log(key);
}
```

---

## Output

```text
name
age
```

---

## Real-World Example

Dynamic Object Processing

```js
for(let key in user){

   console.log(user[key]);
}
```

---

# for...of Loop

## Definition

The `for...of` loop is used to iterate over iterable objects such as arrays, strings, maps, and sets.

It returns values.

---

## Why It Is Needed

Used when actual values are required.

---

## Syntax

```js
for(let value of iterable){

}
```

---

## Example

```js
const numbers = [10,20,30];

for(let num of numbers){

   console.log(num);
}
```

---

## Output

```text
10
20
30
```

---

## Real-World Example

Product Listing

```js
for(let product of products){

   console.log(product);
}
```

---

# Difference Between Loops

## for vs while vs do while

| Feature | for | while | do while |
|----------|----------|----------|----------|
| Condition Check | Before | Before | After |
| Executes At Least Once | No | No | Yes |
| Known Iterations | Yes | No | No |
| Unknown Iterations | No | Yes | Yes |

---

## for...in vs for...of

| Feature | for...in | for...of |
|----------|----------|----------|
| Returns | Keys | Values |
| Used For | Objects | Arrays |
| Output | Property Names | Actual Values |

---

# Break, Continue & Nested Loops

## Overview

While working with loops, sometimes we need to:

- Stop a loop immediately
- Skip a specific iteration
- Run a loop inside another loop

For these situations JavaScript provides:

- break
- continue
- nested loops

These statements give more control over loop execution.

---

## break Statement

### Definition

The `break` statement is used to immediately terminate a loop.

When break executes, the control comes out of the loop.

---

### Why It Is Needed

Suppose we are searching for a specific value.

Once the value is found, there is no need to continue looping.

---

### Syntax

```js
break;
```

---

### Example

```js
for(let i=1;i<=10;i++){

   if(i===5){
      break;
   }

   console.log(i);
}
```

---

### Output

```text
1
2
3
4
```

---

### Internal Working

```text
1
2
3
4
5 Found
   │
   ▼
Break
   │
   ▼
Loop Ends
```

---

### Real-World Example

Searching a user.

```js
const users = ["Ram","Rahul","John"];

for(let user of users){

   if(user==="Rahul"){
      console.log("User Found");
      break;
   }
}
```

---

## continue Statement

### Definition

The `continue` statement skips the current iteration and moves to the next iteration.

---

### Why It Is Needed

Sometimes we don't want to stop the loop completely.

We only want to skip specific values.

---

### Syntax

```js
continue;
```

---

### Example

```js
for(let i=1;i<=5;i++){

   if(i===3){
      continue;
   }

   console.log(i);
}
```

---

### Output

```text
1
2
4
5
```

---

### Internal Working

```text
1 Print
2 Print

3 Found
  │
  ▼
Continue
  │
  ▼
Skip

4 Print
5 Print
```

---

### Real-World Example

Skip inactive users.

```js
for(let user of users){

   if(!user.isActive){
      continue;
   }

   console.log(user.name);
}
```

---

## Difference Between break and continue

| Feature | break | continue |
|----------|----------|----------|
| Stops Loop | Yes | No |
| Skips Iteration | No | Yes |
| Remaining Iterations Execute | No | Yes |

---

### Example

```js
for(let i=1;i<=5;i++){

   if(i===3){
      break;
   }

   console.log(i);
}
```

Output:

```text
1
2
```

---

```js
for(let i=1;i<=5;i++){

   if(i===3){
      continue;
   }

   console.log(i);
}
```

Output:

```text
1
2
4
5
```

---

# Nested Loops

## Definition

A loop inside another loop is called a Nested Loop.

---

## Why It Is Needed

Used for:

- Matrix operations
- Pattern printing
- Table generation
- Grid systems

---

## Syntax

```js
for(){

   for(){

   }

}
```

---

## Example

```js
for(let i=1;i<=3;i++){

   for(let j=1;j<=3;j++){

      console.log(i,j);

   }

}
```

---

## Output

```text
1 1
1 2
1 3
2 1
2 2
2 3
3 1
3 2
3 3
```

---

## Internal Working

```text
Outer Loop = 1

   Inner Loop
   1
   2
   3

Outer Loop = 2

   Inner Loop
   1
   2
   3

Outer Loop = 3

   Inner Loop
   1
   2
   3
```

---

## Example: Multiplication Table

```js
for(let i=1;i<=3;i++){

   for(let j=1;j<=10;j++){

      console.log(
         `${i} x ${j} = ${i*j}`
      );

   }

}
```

---

## Example: Pattern Printing

```js
for(let i=1;i<=5;i++){

   let star = "";

   for(let j=1;j<=i;j++){

      star += "*";

   }

   console.log(star);
}
```

---

## Output

```text
*
**
***
****
*****
```

---

## Real-World Example

Seat Allocation

```text
Row 1
   Seat 1
   Seat 2
   Seat 3

Row 2
   Seat 1
   Seat 2
   Seat 3
```

---

# Interview Questions

### What is break?

Used to terminate a loop immediately.

---

### What is continue?

Used to skip the current iteration.

---

### Difference between break and continue?

break:

```text
Stops Loop
```

continue:

```text
Skips Current Iteration
```

---

### What is a Nested Loop?

A loop inside another loop.

---

### Why are Nested Loops used?

For:

- Patterns
- Tables
- Matrices
- Grid Structures

---

# Tricky Interview Questions

### Question 1

```js
for(let i=1;i<=5;i++){

   if(i===3){
      break;
   }

   console.log(i);
}
```

Output:

```text
1
2
```

---

### Question 2

```js
for(let i=1;i<=5;i++){

   if(i===3){
      continue;
   }

   console.log(i);
}
```

Output:

```text
1
2
4
5
```

---

### Question 3

```js
for(let i=1;i<=3;i++){

   for(let j=1;j<=2;j++){

      console.log(i,j);

   }

}
```

Output:

```text
1 1
1 2
2 1
2 2
3 1
3 2
```

---

### Question 4

```js
for(let i=1;i<=5;i++){

   break;

   console.log(i);
}
```

Output:

```text
No Output
```

---

### Question 5

```js
for(let i=1;i<=3;i++){

   continue;

   console.log(i);
}
```

Output:

```text
No Output
```

---

# Common Mistakes

### Using break instead of continue

Wrong:

```js
if(i===3){
   break;
}
```

May stop loop unexpectedly.

---

### Infinite Nested Loops

```js
for(;;){

   for(;;){

   }

}
```

Avoid this.

---

# Summary

In this chapter, we learned:

- break Statement
- continue Statement
- Difference Between break and continue
- Nested Loops
- Pattern Printing
- Multiplication Tables
- Real-World Examples
- Interview Questions
- Tricky Questions

These concepts help developers gain better control over loop execution and are frequently used in real-world applications.

---

# Sample Programs

## Program 1

Print 1 to 10

```js
for(let i=1;i<=10;i++){

   console.log(i);
}
```

---

## Program 2

Print Even Numbers

```js
for(let i=2;i<=20;i+=2){

   console.log(i);
}
```

---

## Program 3

Sum of Numbers

```js
let sum = 0;

for(let i=1;i<=5;i++){

   sum += i;
}

console.log(sum);
```

Output:

```text
15
```

---

## Program 4

Reverse Counting

```js
for(let i=10;i>=1;i--){

   console.log(i);
}
```

---

## Program 5

Array Traversal

```js
const arr = [10,20,30];

for(let value of arr){

   console.log(value);
}
```

---

# Real-World Use Cases

## Product Listing

```js
for(let product of products){

}
```

---

## Student Results

```js
for(let student of students){

}
```

---

## Retry Login

```js
while(attempts < 3){

}
```

---

## Object Processing

```js
for(let key in user){

}
```

---

# Interview Questions

### What is a loop?

A loop repeatedly executes a block of code until a condition becomes false.

---

### What are the types of loops?

- for
- while
- do while
- for...in
- for...of

---

### Which loop executes at least once?

```text
do...while
```

---

### Which loop is used for arrays?

```text
for...of
```

---

### Which loop is used for objects?

```text
for...in
```

---

### Difference between for and while?

for:

Used when iterations are known.

while:

Used when iterations are unknown.

---

### Difference between for...in and for...of?

for...in:

Returns keys.

for...of:

Returns values.

---

### Can we use for...of on objects?

No.

Objects are not iterable by default.

---

### Which loop performs better?

Generally:

```text
for loop
```

---

# Tricky Interview Questions

### Question 1

```js
for(let i=1;i<=3;i++){

}

console.log(i);
```

Output:

```text
ReferenceError
```

Because `let` is block scoped.

---

### Question 2

```js
var i;

for(i=1;i<=3;i++){

}

console.log(i);
```

Output:

```text
4
```

---

### Question 3

```js
let i=10;

while(i<5){

   console.log(i);
}
```

Output:

```text
No Output
```

---

### Question 4

```js
let i=10;

do{

   console.log(i);

}while(i<5);
```

Output:

```text
10
```

---

### Question 5

```js
const arr=[10,20];

for(let index in arr){

   console.log(index);
}
```

Output:

```text
0
1
```

---

### Question 6

```js
const arr=[10,20];

for(let value of arr){

   console.log(value);
}
```

Output:

```text
10
20
```

---

### Question 7

```js
for(var i=0;i<3;i++){

}

console.log(i);
```

Output:

```text
3
```

---

### Question 8

```js
for(let i=0;i<3;i++){

}

console.log(typeof i);
```

Output:

```text
undefined
```

Actually:

```text
ReferenceError
```

Because i is block scoped.

---

# Common Mistakes

## Infinite Loop

```js
while(true){

}
```

---

## Missing Increment

```js
let i=1;

while(i<=5){

   console.log(i);
}
```

Infinite loop.

---

## Using for...in for Arrays

Bad Practice:

```js
for(let key in arr){

}
```

Prefer:

```js
for(let value of arr){

}
```

---
# Additional Interview Questions

## Fresher Interview Questions

### What is the purpose of the break statement?

The `break` statement immediately terminates the loop and transfers control to the next statement after the loop.

---

### What is the purpose of the continue statement?

The `continue` statement skips the current iteration and moves to the next iteration of the loop.

---

### Can break be used inside if statements?

Yes, but only if the if statement is inside a loop or switch statement.

Example:

```js
for(let i=1;i<=5;i++){

   if(i===3){
      break;
   }

   console.log(i);
}
```

---

### Can continue be used inside switch?

No.

`continue` can only be used inside loops.

---

### Which statement completely exits a loop?

```text
break
```

---

### Which statement skips only one iteration?

```text
continue
```

---

## 1–2 Years Interview Questions

### Can break be used in nested loops?

Yes.

However, it only terminates the nearest loop.

Example:

```js
for(let i=1;i<=3;i++){

   for(let j=1;j<=3;j++){

      if(j===2){
         break;
      }

      console.log(i,j);
   }

}
```

Output:

```text
1 1
2 1
3 1
```

---

### How can we exit multiple nested loops?

Using:

- Flags
- Functions
- Labels

Example:

```js
outer:

for(let i=1;i<=3;i++){

   for(let j=1;j<=3;j++){

      if(i===2 && j===2){
         break outer;
      }

      console.log(i,j);
   }

}
```

---

### What is a labeled statement?

A label allows controlling outer loops directly.

Example:

```js
outer:

for(let i=1;i<=3;i++){

   for(let j=1;j<=3;j++){

      break outer;

   }

}
```

---

### Why are nested loops expensive?

Because the number of iterations increases rapidly.

Example:

```js
for(let i=0;i<n;i++){

   for(let j=0;j<n;j++){

   }

}
```

Time Complexity:

```text
O(n²)
```

---

## Experienced Interview Questions

### What is the time complexity of nested loops?

Usually:

```text
O(n²)
```

Triple nested loops:

```text
O(n³)
```

---

### How can nested loops be optimized?

Using:

- Hash Maps
- Sets
- Lookup Tables
- Better Algorithms

---

### Why should deep nested loops be avoided?

Problems:

- Poor Performance
- Difficult Maintenance
- Reduced Readability

---

### When should continue be avoided?

When excessive continue statements make the code difficult to understand.

---

### What is the difference between break and return?

break:

```text
Exits Loop
```

return:

```text
Exits Function
```

Example:

```js
function test(){

   for(let i=1;i<=5;i++){

      if(i===3){
         return;
      }

      console.log(i);
   }

}
```

Output:

```text
1
2
```

Function ends completely.

---

# Additional Tricky Questions

### Question 6

```js
for(let i=1;i<=5;i++){

   if(i===3){
      continue;
   }

   console.log(i);
}
```

Output:

```text
1
2
4
5
```

---

### Question 7

```js
for(let i=1;i<=5;i++){

   if(i===3){
      break;
   }

   console.log(i);
}
```

Output:

```text
1
2
```

---

### Question 8

```js
for(let i=1;i<=3;i++){

   for(let j=1;j<=3;j++){

      if(j===2){
         continue;
      }

      console.log(i,j);
   }

}
```

Output:

```text
1 1
1 3

2 1
2 3

3 1
3 3
```

---

### Question 9

```js
for(let i=1;i<=3;i++){

   for(let j=1;j<=3;j++){

      if(j===2){
         break;
      }

      console.log(i,j);
   }

}
```

Output:

```text
1 1
2 1
3 1
```

---

### Question 10

```js
let i=1;

while(i<=5){

   if(i===3){
      break;
   }

   console.log(i);

   i++;
}
```

Output:

```text
1
2
```

---

### Question 11

```js
let i=1;

while(i<=5){

   if(i===3){
      continue;
   }

   console.log(i);

   i++;
}
```

Output:

```text
Infinite Loop
```

Why?

```js
i++;
```

never executes when `i === 3`.

---

### Question 12

```js
for(let i=0;i<3;i++){

   console.log(i);

   break;

   console.log("Hello");
}
```

Output:

```text
0
```

Code after break never executes.

---

### Question 13

```js
for(let i=0;i<3;i++){

   continue;

   console.log(i);
}
```

Output:

```text
No Output
```

---

### Question 14

```js
outer:

for(let i=1;i<=3;i++){

   for(let j=1;j<=3;j++){

      break outer;

   }

}
```

Output:

```text
Loop Ends Immediately
```

---

### Question 15

```js
for(let i=1;i<=2;i++){

   for(let j=1;j<=2;j++){

      console.log("*");

   }

}
```

How many times will * print?

Output:

```text
*
*
*
*
```

Total:

```text
4 Times
```

---

### Question 16

```js
for(let i=1;i<=3;i++){

   for(let j=1;j<=i;j++){

      console.log(j);

   }

}
```

Output:

```text
1

1
2

1
2
3
```

---

### Question 17

```js
for(let i=1;i<=3;i++){

   break;

}

console.log("Done");
```

Output:

```text
Done
```

---

### Question 18

```js
for(let i=1;i<=3;i++){

   continue;

}

console.log("Done");
```

Output:

```text
Done
```

---

### Question 19

```js
let count = 0;

for(let i=1;i<=3;i++){

   for(let j=1;j<=3;j++){

      count++;

   }

}

console.log(count);
```

Output:

```text
9
```

---

### Question 20

```js
for(let i=1;i<=5;i++){

   if(i%2===0){
      continue;
   }

   console.log(i);
}
```

Output:

```text
1
3
5
```

Odd numbers only.

# Summary

In this chapter, we learned:

- What Loops are
- Why Loops are needed
- Conditional Loops
- for Loop
- while Loop
- do...while Loop
- Non-Conditional Loops
- for...in Loop
- for...of Loop
- Differences Between Loops
- Real-World Examples
- Interview Questions
- Tricky Questions
- Common Mistakes
- break Statement
- continue Statement
- Difference Between break and continue
- Nested Loops
- Pattern Printing
- Multiplication Tables
- Real-World Examples
- Interview Questions
- Tricky Questions

These concepts help developers gain better control over loop execution and are frequently used in real-world applications.

Loops are one of the most important concepts in JavaScript because they help automate repetitive tasks and efficiently process large amounts of data.

---

# Next Topic

[Functions](../Functions/functions.md)