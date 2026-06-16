# Variables and Data Types

## Overview

Every application works with data such as usernames, passwords, product details, prices, API responses, and user inputs.

To use, update, delete, or manipulate this information, JavaScript stores data in memory using variables.

Data stored in variables can be of different types, known as Data Types.

---

## Definition

A Variable is a named memory location used to store data.

A Data Type defines the type of value stored inside a variable.

Example:

```js
let name = "John";
let age = 25;
```

Here:

- `name` and `age` are Variables.
- `"John"` is a String.
- `25` is a Number.

---

## Why Needed

We store data in memory when we want to:

- Save information
- Update information
- Delete information
- Perform calculations
- Manipulate data
- Send data to APIs
- Receive data from APIs

Without storing data, applications cannot process user information.

### Real World Example

```js
let username = "Rahul";
let password = "12345";
```

When a user logs in, the application stores these values temporarily in memory for validation.

---

## Internal Working

When a variable is created:

```js
let name = "John";
```

JavaScript allocates memory and stores the value.

```text
Variable Creation
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
User Input
     ↓
Variable
     ↓
Memory
     ↓
Processing
     ↓
Output
```

---

## Diagram

```text
Data
 │
 ▼
Variable
 │
 ▼
Memory
 │
 ▼
Operations
 │
 ▼
Result
```

---

# Variables

## Definition

A Variable is a container used to store data in memory.

Variables allow us to reuse and manipulate data whenever required.

---

## Why Needed

Variables help us:

- Store data
- Update data
- Reuse data
- Perform operations
- Avoid repeating values

---

## Variable Declaration

JavaScript provides three ways to declare variables:

```js
var userName = "John";

let age = 25;

const country = "India";
```

We'll learn `var`, `let`, and `const` in detail in the next chapter.

---

## Syntax

### Variable Declaration

```js
let variableName = value;
```

Example:

```js
let city = "Hyderabad";
```

---

## Sample Code

```js
let name = "Rahul";

console.log(name);
```

---

## Output

```text
Rahul
```

---

## Real World Example

```js
let cartTotal = 2500;

cartTotal = cartTotal + 500;
```

Used in shopping cart calculations.

---

## Advantages

- Easy data storage
- Easy updates
- Reusable values
- Better code readability

---

## Disadvantages

- Incorrect naming causes confusion
- Unused variables consume memory
- Wrong data types may create bugs

---

# Data Types

## Definition

A Data Type defines what kind of value is stored in a variable.

Example:

```js
let age = 25;
```

Here:

```text
25 → Number Data Type
```

---

## Why Needed

Different types of data require different operations.

Example:

```js
25 + 10
```

Output:

```text
35
```

But:

```js
"25" + "10"
```

Output:

```text
2510
```

Because Strings and Numbers behave differently.

---

## Types of Data Types

```text
Data Types
│
├── Primitive Data Types
│
└── Reference Data Types
```

---

# Primitive Data Types

## Definition

Primitive Data Types store a single value directly in memory.

JavaScript provides 7 Primitive Data Types.

```text
1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. BigInt
7. Symbol
```

---

# 1. String

## Definition

String is used to store textual data.

---

## Why Needed

Used to store:

- Names
- Emails
- Addresses
- Messages

---

## Syntax

```js
let name = "John";
```

---

## Sample Code

```js
let firstName = "Rahul";
let city = "Hyderabad";

console.log(firstName);
console.log(city);
```

---

## Output

```text
Rahul
Hyderabad
```

---

## Real World Example

```js
let email = "rahul@gmail.com";
```

Used in:

- Login Forms
- Registration Forms
- User Profiles

---

# 2. Number

## Definition

Number is used to store numeric values.

JavaScript uses a single Number type for both integers and decimals.

---

## Why Needed

Used for:

- Age
- Salary
- Product Price
- Calculations

---

## Syntax

```js
let age = 25;
```

---

## Sample Code

```js
let price = 50000;
let discount = 5000;

console.log(price - discount);
```

---

## Output

```text
45000
```

---

## Real World Example

```js
let productPrice = 25000;
```

Used in E-Commerce Applications.

---

# 3. Boolean

## Definition

Boolean stores only two values.

```text
true
false
```

---

## Why Needed

Used for decision making.

---

## Syntax

```js
let isLoggedIn = true;
```

---

## Sample Code

```js
let isAdmin = false;

console.log(isAdmin);
```

---

## Output

```text
false
```

---

## Real World Example

```js
let isLoggedIn = true;
```

Used in:

- Authentication
- Authorization
- Conditional Statements

---

# 4. Undefined

## Definition

When a variable is declared but not assigned a value, JavaScript automatically assigns `undefined`.

---

## Why Needed

Represents a value that is not yet assigned.

---

## Syntax

```js
let username;
```

---

## Sample Code

```js
let username;

console.log(username);
```

---

## Output

```text
undefined
```

---

## Real World Example

```js
let apiResponse;
```

Waiting for API response.

---

# 5. Null

## Definition

Null represents an intentional empty value.

The developer explicitly assigns null.

---

## Why Needed

Used when no value is available.

---

## Syntax

```js
let user = null;
```

---

## Sample Code

```js
let selectedProduct = null;

console.log(selectedProduct);
```

---

## Output

```text
null
```

---

## Real World Example

```js
let currentUser = null;
```

No user logged in.

---

# 6. BigInt

## Definition

BigInt is used to store very large integer values beyond Number limits.

---

## Why Needed

Used in:

- Banking Systems
- Financial Applications
- Scientific Calculations

---

## Syntax

```js
let amount = 12345678901234567890n;
```

---

## Sample Code

```js
let balance = 999999999999999999999n;

console.log(balance);
```

---

## Output

```text
999999999999999999999n
```

---

## Real World Example

Used in financial systems where very large numbers are required.

---

# 7. Symbol

## Definition

Symbol creates unique identifiers.

Every Symbol value is unique.

---

## Why Needed

Used to create unique object properties.

---

## Syntax

```js
const id = Symbol("id");
```

---

## Sample Code

```js
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2);
```

---

## Output

```text
false
```

---

## Real World Example

Used internally by:

- React
- Frameworks
- Library Development

---

## Fresher Interview Questions

### What is a Variable?

A named memory location used to store data.

### Why do we use variables?

To store and manipulate data.

### What is a Data Type?

A Data Type defines the type of value stored in memory.

### How many Primitive Data Types are available in JavaScript?

7 Primitive Data Types.

### What is the difference between Undefined and Null?

Undefined means value not assigned.

Null means intentionally empty.

---

## Next Topic

➡️ Reference Data Types, Stack vs Heap Memory, typeof Operator, Copy Behavior