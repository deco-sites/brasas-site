interface TextInputdProps {
  label: string;
  placeholder: string;
  required?: boolean;
  type?: "text" | "email" | "password" | "tel";
  maxLength?: number;
  mask?: (value: string) => string;
}

export default function TextInput(
  {
    label,
    placeholder,
    value,
    setValue,
    required,
    type = "text",
    maxLength,
    mask,
  }: TextInputdProps,
) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-black-500 uppercase leading-6">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-gray-300 p-3 border border-gray-500 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring transition duration-300 focus:border-blue-30 focus:ring-blue-30/25"
        value={value}
        //onChange={(e) => setValue(e.target.value)}
        onChange={(e) => {
          const raw = e.target.value;
          const masked = mask ? mask(raw) : raw;
          setValue(masked);
        }}
        required={required}
        maxLength={maxLength}
      />
    </div>
  );
}
