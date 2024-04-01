import { forwardRef, type ComponentPropsWithoutRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

const InputWitFwRef = forwardRef<HTMLInputElement, InputProps>(
  function InputWFR({ label, id, ...props }, ref) {
    return (
      <p>
        <label htmlFor={id}>{label}</label>
        <input id={id} {...props} ref={ref} />
      </p>
    );
  }
);

export default InputWitFwRef;
