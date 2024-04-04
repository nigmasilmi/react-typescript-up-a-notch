## refs and forwardRefs

[forwardRef](https://react.dev/reference/react/forwardRef)

"forwardRef lets your component expose a DOM node to parent component with a ref."

`forwardRef` in React is a higher-order function that allows you to access the underlying DOM element or component instance created by a React component. It enables you to forward a ref to a child component without actually creating a new instance of the child component. This is useful for cases where you need to interact with the DOM or component instance directly, such as focusing an input element or triggering imperative methods on a child component.

A more practical use case for forwardRef in a child component would be when you want a parent component to directly manipulate the child component's DOM or call methods exposed by the child component's instance.

## type predicates

Type predicates in TypeScript are used to narrow down the type of a variable within a conditional block based on a check that happens at compile time. When you use a type predicate in TypeScript, the TypeScript compiler uses that information to infer and narrow down types during compilation. This narrowing down of types helps TypeScript catch type errors and provide better type safety.

## useImperativeHandle hook

The useImperativeHandle hook in React is primarily used to expose imperative functionality from a child component to its parent or other components using a ref. This means that it allows a child component to customize the value or methods that it exposes to its parent or other components, typically through a ref object.

## State management with redux-toolkt vs React Context

In Redux Toolkit, mutating the state directly is possible because Redux Toolkit uses Immer under the hood, which provides a mechanism for writing immutable updates to the state in a more intuitive way. This is in contrast to using React Context, where directly mutating the context's state is discouraged due to potential issues with state management and re-renders.

## ReturnType

In TypeScript, ReturnType is a built-in utility type that extracts the return type of a function type or a constructor type. It is used to infer and extract the type that a function or constructor returns.

```typescript
type ReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : any;
```

In TypeScript, infer is a keyword used within conditional types to infer or capture a type from another type. It allows you to extract and use the type that TypeScript infers during type inference.

```typescript
type MyType<T> = T extends Array<infer U> ? U : never;
```

T extends Array<infer U>: This part of the conditional type checks if T is an array type (Array<T>). If T matches this condition, U is inferred as the type of elements in the array.
? U : never: This part specifies the result type of the conditional type. If T is an array, the result type is U (the inferred type of array elements); otherwise, it is never.

```typescript
type MyType<T> = T extends Array<infer U> ? U : never;

type StringOrNumber = MyType<string[]>; // Inferred type: string
type BooleanOrNever = MyType<boolean[]>; // Inferred type: never
```

## Custom typed useDispatch and useSelector Hooks

In TypeScript, when using hooks like useDispatch and useSelector from React Redux, you can customize their types to provide better type safety and ensure that they work correctly with your Redux store's state and actions. This customization involves creating custom type definitions for these hooks based on your Redux store's setup.

### Creating a Custom Typed useDispatch Hook

```typescript
import { useDispatch as useReduxDispatch } from "react-redux";

type AppDispatch = typeof store.dispatch; // Assuming 'store' is your Redux store

export const useDispatch = () => useReduxDispatch<AppDispatch>();
```

### Creating a Custom Typed useSelector Hook

```typescript
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from "react-redux";
import { RootState } from "./store"; // Assuming 'RootState' is your Redux store's root state type

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
```
