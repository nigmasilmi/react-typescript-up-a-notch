import { type FormEvent, type ComponentPropsWithoutRef } from "react";

type FormProps = ComponentPropsWithoutRef<"form">;

export default function Form(props: FormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("submiting");
  }
  return (
    <form {...props} onSubmit={handleSubmit}>
      {props.children}
    </form>
  );
}
