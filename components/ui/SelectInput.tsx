interface Option {
  name: string;
  value: string;
}

interface SelectInputProps {
  label: string;
  placeholder: string;
  options: Option[];
  bgColor: "white" | "gray";
  onChangeFunction: (value: string) => void;
  functionToExecute?: () => void;
  required?: boolean;
  value?: string;
}

const BG_COLORS = {
  white: "bg-white",
  gray: "bg-gray-300",
};

export default function SelectInput(
  {
    label,
    placeholder,
    options,
    bgColor,
    onChangeFunction,
    required,
    value,
    functionToExecute,
  }: SelectInputProps,
) {
  const handleChange = (e: Event) => {
    const target = e.target as HTMLSelectElement;
    onChangeFunction(target.value);
    if (functionToExecute) {
      functionToExecute(target.value);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-black-500 uppercase leading-6">
        {label}
      </label>
      <select
        required={required}
        value={value || ""}
        className={`w-full ${
          BG_COLORS[bgColor]
        } p-3 h-full border border-gray-500 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring transition duration-300 focus:border-blue-30 focus:ring-blue-30/25`}
        onChange={handleChange}
      >
        <option
          value=""
          disabled
          hidden
        >
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
