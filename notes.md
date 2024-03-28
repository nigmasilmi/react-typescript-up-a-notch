# Notes on React and TypeScript

Following along React & TypeScript The Practical Guide course by Academind

TS refresher:

### Types

- Types inference
- Explicit type assignments

- Types, primitives: string, number, boolean
- Types, objects: object
- Types, custom: {something: string, somethingElse:{hello: string, world: number}}
- Type: union |

```typescript
// defining a type without calling it a type but a variable

let user: {
  id: string | number;
  isAdmin: boolean;
  lastName: string;
};

const firstPerson: user = {
  id: "123",
  isAdmin: true,
  lastName: "Parker",
};
```

- Types, arrays string[], number, user[], Array<string>

### Adding types to functions

```typescript
// types in arguments
function add(a: number, b: number) {
  return a + b;
}

// types in return values

// this could be ommited by type inference
function add(a: number, b: number): number {
  return a + b;
}

function add(a: number, b: number): void {
  console.log(a + b);
}

function calculate(
  a: number,
  b: number,
  calcFn: (c: number, d: number) => number
) {
  return calcFn(a, b);
}
```

### Create custom types

```typescript
type AddFn = (a: number, b: number) => number;

function calculate(a: number, b: number, calcFn: AddFn) {
  return calcFn(a, b);
}
```

### Create custom types with interfaces

```typescript
interface Credential {
  id: number;
  name: string;
  alias: string;
}

let credentialTwd: Credential = { id: 123, name: "John", alias: "JS" };
```

### Implementing interfaces

```typescript
class AuthCredentials implements Credentials {
  id: number;
  name: string;
  alias: string;
  contractNumber: number;
}
```

### Type merging

```typescript
type Color = {red: string; green: string; blue: string};

type Shape = { sides: number; platonicSolid: string };

// a box has form and color, not one of those
let box : Color | Form;

// merging the types
let box: Color & Form = {red:};

```

### Literal Types

```typescript
type Role = "admin" | "user" | "editor";

let userRole: Role = "admin";
```

### Type Guards

```typescript
function performAction(action: string | number, role: Role) {
  // type checking
  if (role === "admin" && typeof action === "string") {
    console.log("isAdmin");
  }
}
```

<blockquote>
"You can add all kinds of "Type Guards" to run code conditionally and get TypeScript to narrow a type:

Use JavaScript's typeof operator as shown above to check if you're dealing with a string, number, boolean, object, function, symbol or bigint type

Use JavaScript's instanceof operator to check if an object value is based on some specific class

Use JavaScript's in operator to check if an object contains a specific property"

```typescript
function performAction(action: string | number, role: Role) {
  // type checking
  if (role === "admin" && typeof action === "string") {
    console.log("isAdmin");
  }
}
```

In TypeScript, the keyword "is" is often used as part of a type guard to perform runtime checks on types. A type guard is a function or expression that checks if a value has a specific type at runtime, and it helps TypeScript narrow down the type of a variable within a conditional block.

The syntax `variable is Type` is used in a type guard to indicate that if the condition `variable is Type` evaluates to `true`, then TypeScript should consider the variable to have the specified `Type`. This type narrowing is helpful for writing more precise and type-safe code, especially when dealing with unions, interfaces, and complex types.

Here's a breakdown of how the "is" keyword is used in a type guard:

1. **Type Guard Function:**

   ```typescript
   function isCar(car: any): car is Car {
     return "brand" in car && "model" in car && "year" in car;
   }
   ```

   In this example, `isCar` is a type guard function that checks if the `car` parameter has all the properties of a `Car` object. If the condition `'brand' in car && 'model' in car && 'year' in car` is `true`, TypeScript will consider `car` to be of type `Car`.

2. **Usage in Conditional Blocks:**
   ```typescript
   if (isCar(car)) {
     // Inside this block, TypeScript knows that 'car' is of type 'Car'
     console.log(car.brand); // Safe to access 'brand' property
     console.log(car.model); // Safe to access 'model' property
     console.log(car.year); // Safe to access 'year' property
   }
   ```
   In the `if` block, the type guard `isCar(car)` narrows down the type of `car` to `Car`. TypeScript understands that inside this block, `car` has the properties of a `Car` object, so it allows you to access those properties without type errors.

The "is" keyword in a type guard is a powerful feature in TypeScript that enhances type safety and helps in writing more robust code, especially when dealing with dynamic or uncertain types. It's commonly used in conjunction with conditional checks to handle different types of data and ensure type correctness at runtime.

</blockquote>

### Generic Types

<blockquote>
In TypeScript, you can define a generic type by using angle brackets (`< >`) to specify one or more type parameters. Generic types allow you to create reusable and flexible components that can work with different types while maintaining type safety. Here's how you define a generic type:

```typescript
// Define a generic type with a single type parameter T
type Box<T> = {
  value: T;
};

// Usage of the generic type Box
const box1: Box<number> = { value: 42 }; // 'value' must be a number
const box2: Box<string> = { value: "Hello" }; // 'value' must be a string
```

In this example:

- `Box<T>` is a generic type, where `T` is a type parameter that represents the type of the `value` property.
- When using `Box<T>`, you specify the actual type to be used for `T`, such as `number` or `string`, by providing the type within angle brackets (`< >`).

You can also define generic interfaces, functions, and classes using the same syntax. Here are examples of generic interfaces, functions, and classes:

1. **Generic Interface:**

   ```typescript
   interface Pair<T, U> {
     first: T;
     second: U;
   }

   const pair: Pair<number, string> = { first: 1, second: "two" };
   ```

2. **Generic Function:**

   ```typescript
   function identity<T>(arg: T): T {
     return arg;
   }

   const numberValue: number = identity(42); // 'arg' and return type are inferred as number
   const stringValue: string = identity("Hello"); // 'arg' and return type are inferred as string
   ```

3. **Generic Class:**

   ```typescript
   class Wrapper<T> {
     constructor(private value: T) {}

     getValue(): T {
       return this.value;
     }
   }

   const numberWrapper = new Wrapper<number>(42);
   const stringValue = new Wrapper<string>("Hello");
   ```

In each case, the type parameter `T` (and `U` for the interface) allows you to specify the type dynamically when using the generic construct. TypeScript infers types automatically based on usage but also allows you to explicitly specify types when needed. Generics are a powerful feature in TypeScript that enables you to write reusable and type-safe code for various data types.

</blockquote>
