## refs and forwardRefs

[forwardRef](https://react.dev/reference/react/forwardRef)

"forwardRef lets your component expose a DOM node to parent component with a ref."

`forwardRef` in React is a higher-order function that allows you to access the underlying DOM element or component instance created by a React component. It enables you to forward a ref to a child component without actually creating a new instance of the child component. This is useful for cases where you need to interact with the DOM or component instance directly, such as focusing an input element or triggering imperative methods on a child component.

A more practical use case for forwardRef in a child component would be when you want a parent component to directly manipulate the child component's DOM or call methods exposed by the child component's instance.

## type predicates

Type predicates in TypeScript are used to narrow down the type of a variable within a conditional block based on a check that happens at compile time. When you use a type predicate in TypeScript, the TypeScript compiler uses that information to infer and narrow down types during compilation. This narrowing down of types helps TypeScript catch type errors and provide better type safety.

## useImperativeHandle hook

The useImperativeHandle hook in React is primarily used to expose imperative functionality from a child component to its parent or other components using a ref. This means that it allows a child component to customize the value or methods that it exposes to its parent or other components, typically through a ref object.
