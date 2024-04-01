type InputProps = {
  label: string;
  id: string;
  //   type: "text" | "email";
};

// even though this could collect all properties for input,
// if it not in InputProps, they won't be valid ones on TypeScript side
// in the next commit the solution
export default function Input({ label, id, ...props }: InputProps) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </p>
  );
}
