type InputProps = {
  label: string;
  id: string;
  //   type: "text" | "email";
};

export default function Input({ label, id }: InputProps) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} />
    </p>
  );
}
