import { ComponentPropsWithoutRef } from "react";

type ButtonTypeProps = {
  el: "button";
} & ComponentPropsWithoutRef<"button">;

type AnchorTypeProps = {
  el: "anchor";
} & ComponentPropsWithoutRef<"a">;

type ButtonProps = AnchorTypeProps | ButtonTypeProps;

export default function Button(props: ButtonProps) {
  if (props.el === "anchor") {
    return <a {...props}></a>;
  }
  return (
    <button {...props} className={props.el}>
      {props.children}
    </button>
  );
}
