import { ComponentPropsWithoutRef } from "react";

type ButtonTypeProps = ComponentPropsWithoutRef<"button">;

type AnchorTypeProps = ComponentPropsWithoutRef<"a">;

type ButtonProps = AnchorTypeProps | ButtonTypeProps;

export default function Button(props: ButtonProps) {
  // Creating a type predicate
  // // create a helper function that checks 'property in...'
  // // to let TS know that we are validating the property,
  // // // add a type predicate as return type

  function isAnchor(props: ButtonProps): props is AnchorTypeProps {
    return "href" in props;
  }

  if (isAnchor(props)) {
    return <a {...props}></a>;
  }
  // but this button
  // Type 'string' is not assignable to type '"button" | "submit" | "reset" | undefined'
  return <button {...props}>{props.children}</button>;
}
