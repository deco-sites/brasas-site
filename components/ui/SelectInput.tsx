interface Option {
  name: string;
  value: string;
}

interface SelectInputProps {
  label: string;
  placeholder: string;
  options: Option[];
  bgColor: "white" | "gray";
  onChangeFunction: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const BG_COLORS = {
  white: "bg-white",
  gray: "bg-gray-300",
};

export default function SelectInput(
  { label, placeholder, options, bgColor, onChangeFunction }: SelectInputProps,
) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-black text-black-500 uppercase leading-6">
        {label}
      </label>
      <select
        className={`w-full ${
          BG_COLORS[bgColor]
        } p-3 border border-gray-500 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500`}
        onChange={(e) => onChangeFunction(e.target.value)}
      >
        <option selected disabled value="default">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
