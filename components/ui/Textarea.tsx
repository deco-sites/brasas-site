interface TextAreaProps {
  label: string;
  placeholder: string;
}

export default function TextArea({ label, placeholder }: TextAreaProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-black-500 uppercase leading-6">
        {label}
      </label>
      <textarea className="w-full bg-gray-300 p-3 border border-gray-500 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500">
        {placeholder}
      </textarea>
    </div>
  );
}
