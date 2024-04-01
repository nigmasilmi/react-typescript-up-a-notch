import { ComponentPropsWithoutRef } from "react";

type ButtonTypeProps = ComponentPropsWithoutRef<"button">;

type AnchorTypeProps = ComponentPropsWithoutRef<"a">;

type ButtonProps = AnchorTypeProps | ButtonTypeProps;

export default function Button(props: ButtonProps) {
  // if (props.href ) Property 'href' does not exist on type 'ButtonProps'.
  // the solution for this conditional is as follows
  if ("href" in props) {
    return <a {...props}></a>;
  }
  // but this button
  // Type 'string' is not assignable to type '"button" | "submit" | "reset" | undefined'
  return <button {...props}>{props.children}</button>;
}
