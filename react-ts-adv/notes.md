## Refs and ForwardRefs

[forwardRef](https://react.dev/reference/react/forwardRef)

"forwardRef lets your component expose a DOM node to parent component with a ref."

`forwardRef` in React is a higher-order function that allows you to access the underlying DOM element or component instance created by a React component. It enables you to forward a ref to a child component without actually creating a new instance of the child component. This is useful for cases where you need to interact with the DOM or component instance directly, such as focusing an input element or triggering imperative methods on a child component.

A more practical use case for forwardRef in a child component would be when you want a parent component to directly manipulate the child component's DOM or call methods exposed by the child component's instance.
