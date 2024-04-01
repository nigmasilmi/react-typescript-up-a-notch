import { forwardRef, type ComponentPropsWithoutRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

const InputWitFwRef = forwardRef<HTMLInputElement, InputProps>(
  function InputWFR({ label, id, name, ...props }, ref) {
    return (
      <p>
        <label htmlFor={id}>{label}</label>
        <input id={id} {...props} ref={ref} name={name} />
      </p>
    );
  }
);

export default InputWitFwRef;
