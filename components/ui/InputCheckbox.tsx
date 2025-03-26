export default function InputCheckbox({ text }) {
  return (
    <div className="flex gap-2 items-start">
      <input className="mt-2" type="checkbox" />
      <span>
        {text}
      </span>
    </div>
  );
}
