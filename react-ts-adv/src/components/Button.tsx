import { ComponentPropsWithoutRef } from "react";

type ButtonTypeProps = ComponentPropsWithoutRef<"button"> & { href?: never };

type AnchorTypeProps = ComponentPropsWithoutRef<"a"> & { href?: string };

type ButtonProps = AnchorTypeProps | ButtonTypeProps;

// see notes.md on type predicates

export default function Button(props: ButtonProps) {
  function isAnchor(props: ButtonProps): props is AnchorTypeProps {
    return "href" in props;
  }

  if (isAnchor(props)) {
    return <a {...props}></a>;
  }

  return <button {...props}>{props.children}</button>;
}
