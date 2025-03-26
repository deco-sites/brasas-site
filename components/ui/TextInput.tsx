interface TextInputdProps {
  label: string;
  placeholder: string;
}

export default function TextInput(
  { label, placeholder, value, setValue }: TextInputdProps,
) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-black-500 uppercase leading-6">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-gray-300 p-3 border border-gray-500 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
