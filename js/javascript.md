# JavaScript

### Intro
*JavaScript is a powerful and versatile programming language that has become an indispensable tool in web development. Initially designed to make web pages interactive, it has grown far beyond its original purpose. Today, JavaScript not only enables developers to add dynamic content and interactive effects to web pages, making the user experience smoother and more engaging, but it also serves as the backbone of many modern web applications. With the advent of Node.js, JavaScript extended its reach to the server-side, allowing developers to build full-stack applications with a single language. Its event-driven, non-blocking I/O model makes it particularly well-suited for developing scalable network applications and real-time web applications. Supported by a vast ecosystem of libraries and frameworks, such as React, Angular, and Vue.js for the frontend, and Express.js for the backend, JavaScript continues to be at the forefront of web technology, empowering developers to create fast, efficient, and accessible applications across platforms.*

### Variables & Constants
* *Variables in JavaScript are declared using the "var", "let", or "const" keywords. Before ES6 (ECMAScript 2015), "var" was the only way to declare a variable.*
* var: *Declares a variable, optionally initializing it to a value. Variables declared with "var" are function-scoped or globally-scoped if declared outside any function.*
* let: *Similar to "var", but "let" provides block-level scope. It's generally recommended over "var" for its better scoping, which can reduce errors and make code more understandable.*
* Scope: *The main difference between "var" and "let" is their scope. "var" is function-scoped, while "let" is block-scoped.*
* const: *Declares a block-scoped, read-only named constant. Once a constant is assigned a value, that value cannot be changed. Attempting to reassign a "const" variable will result in a runtime error.*
* Immutability: *It's important to note that "const" prevents re-assignment to the variable, but it doesn't make the value itself immutable. For objects or arrays, the contents can still be altered.*
* Basic Rules for JavaScript Variable Names:
    1. Characters: Variable names can include letters, digits, underscores ("_"), and dollar signs ("$"). However, they must begin with a letter, an underscore, or a dollar sign. They cannot start with a digit.
    2. Case Sensitivity: JavaScript is case-sensitive. This means that "myVariable", "MyVariable", and "MYVARIABLE" are considered three distinct variables.
    3. No Reserved Keywords: Variable names cannot use reserved keywords. For example, you cannot name a variable "if", "let", "class", or "return" as these are part of the language syntax.
    4. Unicode Characters: JavaScript supports Unicode, so you can use characters from languages other than English in your variable names, as well as certain Unicode characters like emoji. However, this is generally discouraged for the sake of code clarity and maintainability.

### Operators
*JavaScript operators are symbols that are used to perform operations on operands. Operators are the foundation of any programming language, allowing you to execute various kinds of operations on variables and values.*
1. Arithmetic Operators
These operators are used with numeric values to perform common mathematical operations:
* "+" Addition
* "-" Subtraction
* "*" Multiplication
* "/" Division
* "%" Modulus (remainder)
* "++" Increment
* "--" Decrement
2. Assignment Operators
Assignment operators assign values to JavaScript variables:
* "=" assigns the value of its right operand to its left operand.
* "+=" adds the right operand to the left operand and assigns the result to the left operand.
* "-=" subtracts the right operand from the left operand and assigns the result to the left operand.
* "*=" multiplies the left operand by the right operand and assigns the result to the left operand.
* "/=" divides the left operand by the right operand and assigns the result to the left operand.
* "%=" assigns the remainder of the division of the left operand by the right operand to the left operand.
3. Comparison Operators
Comparison operators compare two values and return a boolean value, either true or false:
* "==" equal to
* "===" equal value and equal type
* "!=" not equal
* "!==" not equal value or not equal type
* ">" greater than
* "<" less than
* ">=" greater than or equal to
* "<=" less than or equal to
4. Logical Operators
Logical operators are used with boolean (logical) values; when they are, they return a boolean value:
* "&&" logical AND
* "||" logical OR
* "!" logical NOT
5. String Operator
The + operator can also be used to concatenate (join) two or more strings.
6. Conditional (Ternary) Operator
The conditional operator assigns a value to a variable based on a condition.
7. Type Operators
* "typeof" returns the type of a variable or expression.
* "instanceof" returns true if an object is an instance of an object type.
8. Bitwise Operators
Bitwise operators perform operations on binary representations of numbers:
* "&" AND
* "|" OR
* "^" XOR
* "~" NOT
* "<<" Left shift
* ">>" Right shift
* ">>>" Unsigned right shift

### Functions
*In JavaScript, functions are fundamental building blocks of code that allow you to encapsulate a task. They are objects, making JavaScript a functional programming language. You can define functions in several ways, and they can take parameters and return values. Functions provide modularity and reusability to your code, making it more readable and maintainable.*
1. Function Declaration (Function Statement)
This is perhaps the most common way to define a function. The function keyword is used, followed by the name of the function, a list of parameters enclosed in parentheses, and the function body enclosed in curly braces.
``` 
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet('Alice')); // Output: "Hello, Alice!"
```
2. Function Expression
A function expression is very similar to a function declaration, except that the function is assigned to a variable. The function can be named, or it can be anonymous (without a name).
```
const greet = function(name) {
    return `Hello, ${name}!`;
};
console.log(greet('Bob')); // Output: "Hello, Bob!"
```
3. Arrow Functions (ES6)
Arrow functions provide a concise syntax for writing function expressions. They are especially useful for single-line functions and do not have their own "this", "arguments", "super", or "new.target".
```
const greet = name => `Hello, ${name}!`;
console.log(greet('Carol')); // Output: "Hello, Carol!"
```
4. Function Parameters and Arguments
- **Parameters** are the names listed in the function definition.
- **Arguments** are the real values passed to the function.
- Functions can also include default parameter values in their definition, which are used if no argument is passed for that parameter.
```
function greet(name = 'Guest') {
    return `Hello, ${name}!`;
}
console.log(greet()); // Output: "Hello, Guest!"
```
5. Rest Parameters and Spread Syntax
- **Rest parameters** allow you to work with an indefinite number of arguments as an array.
```
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10
```
- **Spread syntax** allows an iterable (e.g., array) to be expanded in places where zero or more arguments (for function calls) are expected.
```
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6
```
6. Returning Values
Functions can return a value back to the caller. If a function doesn't have a return statement, it implicitly returns "undefined".
```
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 3)); // Output: 6
```

### Data Types
JavaScript is a dynamically typed language, meaning you don't have to declare the type of a variable ahead of time. The language automatically determines types at runtime. JavaScript has several built-in data types. These can be divided into two categories: primitive values and objects.
#### Primitive Data Types
1. **String**: Represents textual data. It's how you work with text. Strings are created by enclosing text in single quotes (`'`), double quotes (`"`), or backticks (`` ` ``) for template literals.
```
let name = "John";
let greeting = `Hello, ${name}!`;
```
2. **Number**: Represents both integer and floating-point numbers. JavaScript uses floating-point arithmetic for all numeric operations.
```
let integer = 10;
let floatingPoint = 10.5;
```
3. **BigInt**: Represents integers with arbitrary precision. You can create a BigInt by appending `n` to the end of an integer literal or by calling the `BigInt()` function.
```
const largeNumber = 9007199254740991n;
```
4. **Boolean**: Represents a logical entity having two values: true and false.
```
let isFinished = false;
```
5. **Undefined**: Indicates that a variable has not been assigned a value.
```
let notDefined;
```
6. **Null**: Represents the intentional absence of any object value. It's usually assigned to a variable as a representation of "no value".
```
let empty = null;
```
7. **Symbol**: A unique and immutable primitive value that can be used as the key of an Object property.
```
let symbol = Symbol('description');
```
#### Non-Primitive Data Type
- **Object**: The most complex data type. An object can be used to store collections of data and more complex entities. Objects are created using curly braces `{}` with an optional list of properties.
```
let person = { name: "John", age: 30 };
```
Objects can store data and functions as properties. When a function is stored as an object property, it's called a method.
#### Type Checking and Conversion
- To check the type of a variable in JavaScript, you can use the `typeof` operator.
- JavaScript is a loosely typed language, so it performs type coercion automatically in certain contexts, converting values from one type to another. For example, when you attempt to concatenate a number and a string, the number is converted to a string.
```
console.log(typeof "Hello"); // "string"
console.log(typeof 5); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof {name: "John"}); // "object"
console.log(typeof null); // "object" - This is considered a bug in JavaScript
console.log(typeof Symbol('symbol')); // "symbol"
console.log("5" + 1); // "51" - Number 1 is converted to a string
```

### Comparison Operators
- Comparison operators are used to compare two values in JavaScript. They return a boolean value, either true or false, based on the comparison result. These operators are commonly used in conditional statements to determine the flow of the program based on different conditions.
- Strict Equality (`===`); Compares both value and type.
- Equality (`==`); Compares values after type coercion (converts the operands to the same type).
- Less Than (`<`); Checks if the left operand is less than the right operand.
- Greater Than (`>`); Checks if the left operand is greater than the right operand.
- Strict Inequality (`!==`); Compares both value and type, returns true if they are not equal.
- Inequality (`!=`); Compares values after type coercion, returns true if they are not equal.
- Less Than or Equal To (`<=`); Checks if the left operand is less than or equal to the right operand.
- Greater Than or Equal To (`>=`); Checks if the left operand is greater than or equal to the right operand.
- Ternary Operator (`condition ? exprIfTrue : exprIfFalse`); A conditional operator that assigns a value to a variable based on a condition.
- Use `===` and `!==`: It's generally recommended to use `===` and `!==` instead of `==` and `!=` to avoid unexpected results due to type coercion.
- Type Coercion with `==` and `!=`: Using `==` and `!=` can lead to bugs because they perform type coercion, which can produce surprising results.

### Boolean Operators
- Boolean operators are used to perform logical operations.
- AND (`&&`); Returns true if both operands are true.
```
let a = true && true;   // true
let b = true && false;  // false
let c = false && true;  // false
let d = false && false; // false
```
- OR (`||`); Returns true if at least one of the operands is true.
```
let a = true || true;   // true
let b = true || false;  // true
let c = false || true;  // true
let d = false || false; // false
```
- NOT (`!`); Returns the opposite boolean value of the operand.
```
let a = !true;  // false
let b = !false; // true
```
- Truthy and Falsy Values; Values can be considered "truthy" or "falsy" in a boolean context. Here are some examples:
    1. Falsy values: `false`, `0`, `""` (empty string), `null`, `undefined`, `NaN`
    2. Truthy values: Everything else (including objects, non-zero numbers, non-empty strings, etc.)
- Combining Operators; You can combine multiple boolean operators to form more complex expressions.
```
let a = (true && false) || (false && true); // false
let b = !false && (true || false);          // true
```

### Conditional Statements
- `if`, `else if`, and `else` statements are used to perform different actions based on different conditions.
- `if` Statement; Executes a block of code if a specified condition is true.
```
if (condition) {
    // block of code to be executed if the condition is true
}
```
- `else` Statement; Executes a block of code if the same condition is false.
```
if (condition) {
    // block of code to be executed if the condition is true
} else {
    // block of code to be executed if the condition is false
}
```
- `else if` Statement; Specifies a new condition to test if the first condition is false.
```
if (condition1) {
    // block of code to be executed if condition1 is true
} else if (condition2) {
    // block of code to be executed if condition1 is false and condition2 is true
} else {
    // block of code to be executed if both condition1 and condition2 are false
}
```

