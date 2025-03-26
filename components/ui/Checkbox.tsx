export default function Checkbox({ label, value }) {
  return (
    <div className="flex gap-2">
      <input type="checkbox" value={value} />
      <label className="text-base font-normal text-black-500 leading-6">
        {label}
      </label>
    </div>
  );
}
