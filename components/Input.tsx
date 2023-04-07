interface InputProps {
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

export default function Input({ onChange, value }: InputProps) {
  return (
    <>
      <label>Search query</label>
      <input value={value} onChange={(e) => onChange(e)} type="text" />
    </>
  );
}
