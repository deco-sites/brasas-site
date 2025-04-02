interface TextAreaProps {
  label: string;
  placeholder: string;
}

export default function TextArea(
  { label, placeholder, value, setValue, required }: TextAreaProps,
) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-black-500 uppercase leading-6">
        {label}
      </label>
      <textarea
        className="w-full bg-gray-300 p-3 border border-gray-500 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring transition duration-300 focus:border-blue-30 focus:ring-blue-30/25"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required={required}
        placeholder={placeholder}
      >
      </textarea>
    </div>
  );
}
