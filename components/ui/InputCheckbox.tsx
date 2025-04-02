export default function InputCheckbox({ text, value, setValue, required }) {
  return (
    <div className="flex gap-2 items-start">
      <input
        className="mt-2"
        type="checkbox"
        checked={value}
        onChange={(e) => setValue(e.target.checked)}
        required={required}
      />
      <span>{text}</span>
    </div>
  );
}
