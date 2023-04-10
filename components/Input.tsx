interface InputProps {
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

export default function Input({ onChange, value }: InputProps) {
  return (
    <>
      <label>Search query</label>
      <input
        className="border-2 px-3 py-2 border-green-600 rounded-md"
        value={value}
        onChange={(e) => onChange(e)}
        type="text"
      />
    </>
  );
}
