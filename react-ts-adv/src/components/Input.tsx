import { type ComponentPropsWithoutRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

export default function Input({ label, id, ...props }: InputProps) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </>
  );
}
