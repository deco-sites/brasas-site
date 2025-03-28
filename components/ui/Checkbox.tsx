interface CheckboxProps {
  label: string;
  value: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export default function Checkbox(
  { label, value, checked = false, onChange }: CheckboxProps,
) {
  return (
    <div className="flex gap-2">
      <input
        type="checkbox"
        value={value}
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <label className="text-base font-normal text-black-500 leading-6">
        {label}
      </label>
    </div>
  );
}
