# TypeScript

### Intro
*TypeScript is a statically typed superset of JavaScript that adds type safety and other features to help developers write more robust and maintainable code. It compiles down to plain JavaScript, making it compatible with all JavaScript environments.*

### 1. **Primitive Types**

These types represent the fundamental building blocks in TypeScript, derived from JavaScript.

- **`string`**: Represents textual data.
  ```
  let name: string = "John";
  ```

- **`number`**: Represents both integers and floating-point numbers.
  ```
  let age: number = 25;
  let score: number = 98.7;
  ```

- **`boolean`**: Represents true or false values.
  ```
  let isActive: boolean = true;
  ```

- **`null`**: Represents the absence of a value.
  ```
  let n: null = null;
  ```

- **`undefined`**: Represents an uninitialized variable.
  ```
  let u: undefined = undefined;
  ```

- **`symbol`**: Represents a unique identifier (ES6 feature).
  ```
  let sym: symbol = Symbol("unique");
  ```

- **`bigint`**: Represents large integers beyond the `number` type's safe range.
  ```
  let bigNum: bigint = 9007199254740991n;
  ```

### 2. **`any` Type**
The `any` type is used when you want to opt out of type checking, meaning a variable can hold any type of value.

```
let anything: any = 42;
anything = "Now I'm a string";
```

### 3. **`unknown` Type**
`unknown` is similar to `any`, but it forces you to do type checking before performing operations, making it safer.

```
let notSure: unknown = "hello";
if (typeof notSure === "string") {
    console.log(notSure.toUpperCase());
}
```

### 4. **`void` Type**
Represents the absence of any type, typically used for functions that do not return a value.

```
function logMessage(): void {
    console.log("This function returns nothing");
}
```

### 5. **`never` Type**
Represents values that never occur, such as functions that always throw an error or have infinite loops.

```
function throwError(): never {
    throw new Error("An error occurred");
}
```

### 6. **`object` Type**
Represents non-primitive types such as objects, arrays, and functions.

```
let person: object = { name: "Alice", age: 30 };
```

### 7. **Array Types**

Arrays can be typed either by using the array type (`Type[]`) or by using a generic (`Array<Type>`).

```
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["a", "b", "c"];
```

### 8. **Tuple Types**
Tuples allow you to define an array with a fixed number of elements of specific types.

```
let tuple: [string, number] = ["hello", 42];
```

### 9. **Union Types**
Allows a variable to be one of several types.

```
let unionType: string | number;
unionType = "Hello";
unionType = 42;
```

### 10. **Literal Types**
Allows you to specify exact values a variable can hold, rather than just a type.

```
let direction: "up" | "down" | "left" | "right";
direction = "up";
```

### 11. **Enums**
Enums allow you to define a set of named constants.

```
enum Color {
    Red,
    Green,
    Blue
}

let color: Color = Color.Green;
```

### 12. **Type Aliases**
You can create custom types using type aliases.

```
type ID = number | string;
let userId: ID = 123;
userId = "ABC123";
```

In TypeScript, **interfaces** are used to define the structure of objects, providing a way to ensure consistency in how objects and classes are structured. Interfaces allow you to specify the types of properties and methods an object should have without actually implementing them. They serve as contracts that objects or classes can adhere to.

### Basic Example of an Interface

```
interface Person {
    name: string;
    age: number;
}

let user: Person = {
    name: "Alice",
    age: 30
};
```

In this example:
- The `Person` interface defines two properties: `name` (a string) and `age` (a number).
- The `user` object must adhere to the structure of the `Person` interface, meaning it must have a `name` and `age`.

### Optional Properties

You can make properties optional using the `?` symbol. This means the property doesn’t need to be present in an object implementing the interface.

```
interface Car {
    make: string;
    model: string;
    year?: number;  // year is optional
}

let myCar: Car = {
    make: "Toyota",
    model: "Camry"
};
```

In this case, the `year` property is optional, so `myCar` doesn’t need to have a `year` property.

### Readonly Properties

Properties in an interface can also be marked as `readonly`, meaning they cannot be changed after they are initialized.

```
interface Book {
    readonly title: string;
    author: string;
}

let myBook: Book = {
    title: "1984",
    author: "George Orwell"
};

// myBook.title = "Animal Farm";  // Error: Cannot assign to 'title' because it is a read-only property.
```

### Methods in Interfaces

Interfaces can also define methods. The method signature specifies the method name, return type, and parameter types, but the implementation is left to the object or class that implements the interface.

```
interface Animal {
    name: string;
    speak(): void;
}

let dog: Animal = {
    name: "Buddy",
    speak() {
        console.log(`${this.name} barks!`);
    }
};

dog.speak();  // Output: Buddy barks!
```

### Extending Interfaces

Interfaces can extend other interfaces. This allows you to inherit properties and methods from another interface, making it easier to reuse common structures.

```
interface Shape {
    color: string;
}

interface Circle extends Shape {
    radius: number;
}

let circle: Circle = {
    color: "red",
    radius: 10
};
```

Here, the `Circle` interface extends the `Shape` interface, so it has both `color` (from `Shape`) and `radius` (from `Circle`).

### Interface with Index Signatures

You can use **index signatures** to define interfaces that allow dynamic property names. For example, if you don’t know the exact names of all the properties in advance, you can use an index signature.

```
interface StringDictionary {
    [key: string]: string;
}

let translations: StringDictionary = {
    hello: "Hola",
    goodbye: "Adiós"
};
```

This interface allows any number of string properties, and all values must be of type `string`.

### Interface for Functions

Interfaces can also describe function types. Here’s how you define an interface that represents a function:

```
interface MathOperation {
    (x: number, y: number): number;
}

let add: MathOperation = (a, b) => a + b;
let subtract: MathOperation = (a, b) => a - b;
```

The `MathOperation` interface ensures that any function that matches this interface must accept two numbers and return a number.

### Implementing Interfaces in Classes

Classes can implement interfaces, meaning they agree to follow the structure of the interface by providing all the properties and methods defined in the interface.

```
interface Flyable {
    fly(): void;
}

class Bird implements Flyable {
    fly() {
        console.log("The bird is flying");
    }
}

class Airplane implements Flyable {
    fly() {
        console.log("The airplane is flying");
    }
}
```

In this example, both the `Bird` and `Airplane` classes implement the `Flyable` interface, so they both need to have a `fly` method.

### Hybrid Types (Combining Objects and Functions)

Sometimes, you need a type that is both an object and a function. TypeScript interfaces allow for this by combining the two.

```
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

let getCounter = (): Counter => {
    let counter = ((start: number) => `Count started at ${start}`) as Counter;
    counter.interval = 1000;
    counter.reset = () => console.log("Counter reset");
    return counter;
};

let c = getCounter();
c(10);  // Output: "Count started at 10"
c.interval = 500;
c.reset();  // Output: "Counter reset"
```

Here, the `Counter` interface defines an object with both a callable signature (a function that takes a number) and properties like `interval` and `reset()`.

### 1. **Intersection Types**

**Intersection types** combine multiple types into one. This means that a variable of an intersection type must satisfy all the types involved.

#### Syntax:
```
type A = { name: string };
type B = { age: number };

type C = A & B;

let person: C = { name: "Alice", age: 30 };
```

In this example, `C` is the intersection of `A` and `B`, meaning that `person` must have both `name` (from `A`) and `age` (from `B`).

### 2. **Type Guards**

**Type guards** are used to ensure that a variable is of a specific type before performing certain actions. TypeScript uses `typeof`, `instanceof`, or custom functions to narrow down types.

#### Example using `typeof`:
```
function printValue(value: string | number) {
    if (typeof value === "string") {
        console.log(`String value: ${value.toUpperCase()}`);
    } else {
        console.log(`Number value: ${value.toFixed(2)}`);
    }
}
```

#### Example using `instanceof`:
```
class Animal { }
class Dog extends Animal { }

function isDog(pet: Animal): pet is Dog {
    return pet instanceof Dog;
}
```

### 3. **Discriminated Unions**

**Discriminated unions** (also known as **tagged unions**) are a powerful way to represent multiple types with a common field, usually called the "discriminant". This helps TypeScript narrow down the possible types.

#### Example:
```
interface Bird {
    type: "bird";
    wingspan: number;
}

interface Fish {
    type: "fish";
    finCount: number;
}

type Animal = Bird | Fish;

function getAnimalInfo(animal: Animal) {
    if (animal.type === "bird") {
        console.log(`Bird with wingspan ${animal.wingspan}`);
    } else {
        console.log(`Fish with fin count ${animal.finCount}`);
    }
}
```

Here, the `type` field is the discriminant that helps determine whether the object is a `Bird` or a `Fish`.

### 4. **Type Casting**

**Type casting** in TypeScript is used to explicitly tell the compiler to treat a variable as a specific type.

#### Two ways to cast:

1. **Using `as` keyword**:
   ```
   let someValue: unknown = "Hello, TypeScript!";
   let strLength: number = (someValue as string).length;
   ```

2. **Angle-bracket syntax**:
   ```
   let someValue: unknown = "Hello!";
   let strLength: number = (<string>someValue).length;
   ```

### 5. **Index Properties**

**Index signatures** are used when the keys of an object are not known in advance but their types are known.

#### Example:
```
interface StringDictionary {
    [key: string]: string;
}

let dictionary: StringDictionary = {
    "hello": "world",
    "typescript": "fun"
};
```

In this case, the `StringDictionary` interface ensures that any property in the object is of type `string`.

### 6. **Function Overloads**

**Function overloads** allow you to define multiple function signatures for the same function, with different parameter types or return types. The implementation can then use type guards to differentiate between them.

#### Example:
```
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    return a + b;
}

console.log(add(5, 10));  // Output: 15
console.log(add("Hello, ", "World!"));  // Output: Hello, World!
```

### 7. **Optional Chaining**

**Optional chaining (`?.`)** allows you to safely access deeply nested properties or methods, even if an intermediate property is `null` or `undefined`.

#### Example:
```
let user = {
    name: "Alice",
    address: {
        city: "Wonderland"
    }
};

console.log(user?.address?.city);  // Output: Wonderland
console.log(user?.contact?.phone);  // Output: undefined (no error)
```

If any part of the chain is `null` or `undefined`, the expression short-circuits and returns `undefined`.

### 8. **Nullish Coalescing**

**Nullish coalescing (`??`)** is used to provide a default value when a value is `null` or `undefined`. It is similar to the logical OR (`||`), but with `??`, `null` and `undefined` are treated as "nullish", and falsy values like `0`, `false`, and `''` are not.

#### Example:
```
let value = null;
let defaultValue = "Default";

console.log(value ?? defaultValue);  // Output: Default

let value2 = 0;
console.log(value2 ?? defaultValue);  // Output: 0 (since 0 is not nullish)
```

### Generics

**Generics** in TypeScript allow you to create reusable, flexible, and type-safe code components that can work with any type of data. They let you define functions, classes, and interfaces that operate on different types without losing type information. Generics enable you to write code that can be applied to a variety of types while preserving type safety.

#### Key Benefits of Generics:
- **Type Safety**: Generics ensure that your code works with a specific type and catches errors at compile time.
- **Reusability**: Instead of writing the same code for different types, you can use generics to make the code reusable.
- **Flexibility**: Generics allow for flexible code that works with a wide range of types.

### Basic Generic Function

Generics in functions allow you to write flexible and type-safe functions that can handle various types.

#### Syntax:
```
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("Hello");
let output2 = identity<number>(42);
```

Here, `T` is a **generic type parameter** that acts as a placeholder for the actual type that will be passed when the function is called. In the first call, `T` is replaced by `string`, and in the second call, `T` is replaced by `number`.

### Generic Arrays

You can also use generics with arrays to create type-safe, reusable array functions.

```
function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

let firstNumber = getFirstElement([1, 2, 3]);  // Type is number
let firstString = getFirstElement(["a", "b", "c"]);  // Type is string
```

Here, `T[]` means that the function can accept an array of any type, and `T` represents the type of the array elements.

### Generic Interfaces

You can define interfaces with generics, allowing objects of various types to conform to the same interface while maintaining type safety.

```
interface Box<T> {
    content: T;
}

let stringBox: Box<string> = { content: "Hello" };
let numberBox: Box<number> = { content: 100 };
```

The `Box` interface has a generic type parameter `T`, meaning the `content` can be of any type specified when the interface is used.

### Generic Classes

Generics can also be used in classes to create reusable and type-safe data structures.

```
class GenericClass<T> {
    value: T;
    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

let stringClass = new GenericClass<string>("Hello");
console.log(stringClass.getValue());  // Output: Hello

let numberClass = new GenericClass<number>(123);
console.log(numberClass.getValue());  // Output: 123
```

In this example, `GenericClass` can work with any type, depending on how it's instantiated (`string` or `number` in this case).

### Generic Constraints

Sometimes, you may want to limit the types that can be used as generic parameters. **Constraints** allow you to enforce that certain operations are only available on specific types.

#### Example with constraints:
```
interface Lengthwise {
    length: number;
}

function logLength<T extends Lengthwise>(item: T): void {
    console.log(item.length);
}

logLength("Hello");  // Works because string has a length property
logLength([1, 2, 3]);  // Works because arrays have a length property
// logLength(123);  // Error: number does not have a length property
```

Here, `T extends Lengthwise` means that `T` can only be types that have a `length` property (like `string` or `array`).

### Default Type Parameters

You can provide a **default type** for a generic parameter. If no type is provided, the default type will be used.

```
function createArray<T = string>(length: number, value: T): T[] {
    return Array(length).fill(value);
}

let result = createArray(3, "hello");  // Type inferred as string[]
let result2 = createArray<number>(3, 42);  // Type explicitly set to number[]
```

Here, the default type for `T` is `string`, so if no type is provided, TypeScript assumes the type to be `string`.

### Generic Functions with Multiple Parameters

Generics can have more than one type parameter. For example, if you need two or more types to be generic, you can specify multiple type parameters.

```
function merge<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

let mergedObject = merge({ name: "Alice" }, { age: 25 });
// mergedObject: { name: string; age: number }
```

Here, `T` and `U` represent two different types, and the result is an intersection of both types.

### Keyof with Generics

The `keyof` operator can be used with generics to ensure that the key exists in the object being used.

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

let person = { name: "Alice", age: 25 };
let personName = getProperty(person, "name");  // OK
let personAge = getProperty(person, "age");  // OK
// let invalid = getProperty(person, "address");  // Error: Property 'address' does not exist
```

In this example, `K` must be a key of `T`, so TypeScript ensures the key exists in the object at compile time.

### Decorators

**Decorators** are a special feature in TypeScript that allow you to modify or extend the behavior of classes, methods, properties, or parameters. They provide a way to annotate and meta-program classes and methods. Decorators can be used to apply cross-cutting concerns such as logging, validation, and other behaviors without modifying the core functionality.

Decorators are a stage 2 proposal for JavaScript, and in TypeScript, they are an experimental feature (you need to enable them in your `tsconfig.json` by setting `"experimentalDecorators": true`).

### Types of Decorators

TypeScript provides several types of decorators:

1. **Class Decorators**
2. **Method Decorators**
3. **Accessor Decorators**
4. **Property Decorators**
5. **Parameter Decorators**

### 1. **Class Decorators**

A **class decorator** is applied to the class constructor and can modify or replace the class definition. It takes a single argument, which is the constructor of the class.

#### Example:
```
function LogClass(target: Function) {
    console.log(`Class decorated: ${target.name}`);
}

@LogClass
class Person {
    constructor(public name: string) {}
}
```

When the `Person` class is defined, the `LogClass` decorator is invoked, and the name of the class (`Person`) is logged.

### 2. **Method Decorators**

A **method decorator** is applied to a method in a class. It can modify the behavior of the method, and it receives three parameters:
- `target`: The class's prototype.
- `propertyKey`: The name of the method.
- `descriptor`: The method's descriptor, which can be used to modify its behavior.

#### Example:
```
function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Method called: ${propertyKey} with arguments: ${args}`);
        return originalMethod.apply(this, args);
    };
}

class Calculator {
    @LogMethod
    add(a: number, b: number): number {
        return a + b;
    }
}

let calculator = new Calculator();
calculator.add(5, 10);  // Logs: "Method called: add with arguments: 5,10"
```

In this example, every time the `add` method is called, the decorator logs the method name and the arguments before executing the original method.

### 3. **Accessor Decorators**

An **accessor decorator** is applied to a class's getter or setter. It is similar to method decorators, and it can be used to modify or observe the behavior of property accessors.

#### Example:
```
function LogAccessor(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalGetter = descriptor.get;

    descriptor.get = function () {
        console.log(`Getting value of ${propertyKey}`);
        return originalGetter?.apply(this);
    };
}

class Rectangle {
    private _width: number = 0;

    @LogAccessor
    get width(): number {
        return this._width;
    }

    set width(value: number) {
        this._width = value;
    }
}

let rect = new Rectangle();
rect.width = 10;  // Sets the width without logging
console.log(rect.width);  // Logs: "Getting value of width" and returns the width
```

### 4. **Property Decorators**

A **property decorator** is applied to a class's property. It receives two parameters:
- `target`: The prototype of the class (for instance members) or the constructor function (for static members).
- `propertyKey`: The name of the property.

Property decorators do not provide access to a property’s value directly. They can be useful for metadata annotation or frameworks like dependency injection.

#### Example:
```
function LogProperty(target: any, propertyKey: string) {
    console.log(`Property decorated: ${propertyKey}`);
}

class Car {
    @LogProperty
    model: string;

    constructor(model: string) {
        this.model = model;
    }
}

let car = new Car("Toyota");
// Logs: "Property decorated: model"
```

### 5. **Parameter Decorators**

A **parameter decorator** is applied to the parameters of a method. It receives the following parameters:
- `target`: The class's prototype or the constructor.
- `propertyKey`: The method's name.
- `parameterIndex`: The index of the parameter in the method's parameter list.

#### Example:
```
function LogParameter(target: any, propertyKey: string, parameterIndex: number) {
    console.log(`Parameter decorated at position: ${parameterIndex} in method: ${propertyKey}`);
}

class Example {
    greet(@LogParameter name: string) {
        console.log(`Hello, ${name}`);
    }
}

let ex = new Example();
ex.greet("Alice");
// Logs: "Parameter decorated at position: 0 in method: greet"
```

### Using Multiple Decorators

You can use multiple decorators on a single class, method, or property. They are applied in a **top-down** manner when decorating the declaration and **bottom-up** when invoking them.

#### Example:
```
function First() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("First decorator");
    };
}

function Second() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("Second decorator");
    };
}

class Test {
    @First()
    @Second()
    method() {
        console.log("Method executed");
    }
}

let t = new Test();
t.method();
// Logs:
// "First decorator"
// "Second decorator"
// "Method executed"
```

### Practical Example: Logging with Class Decorators

Class decorators can be used to log creation of instances or modify constructor behavior.

```
function LogClass(target: any) {
    return class extends target {
        constructor(...args: any[]) {
            super(...args);
            console.log(`New instance of ${target.name} created`);
        }
    };
}

@LogClass
class User {
    constructor(public name: string) {}
}

let user = new User("Alice");
// Logs: "New instance of User created"
```