import { useEffect, useRef, useState } from "preact/hooks";
import { useClickOutsideListener } from "../../helpers/useClickOutsideListener.tsx";

interface Option {
  name: string;
  value: string;
  disabled?: boolean;
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
  disabled?: boolean;
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
    disabled,
  }: SelectInputProps,
) {
  const handleOptionClick = (option: Option) => {
    onChangeFunction(option.name);
    if (functionToExecute) {
      functionToExecute(option.value);
    }
    setIsOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const avatarRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      // Espera a animação de fechamento antes de remover da árvore
      const timeout = setTimeout(() => setIsVisible(false), 300); // duração igual ao CSS
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  useClickOutsideListener(dropdownRef, avatarRef, setIsOpen);

  const handleClickInside = (event: MouseEvent) => {
    event.stopPropagation();
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-black-500 uppercase leading-6">
        {label}
      </label>

      <div className="relative w-full">
        {/* Select box */}
        <div
          tabIndex={disabled ? -1 : 0}
          onFocus={() => !disabled && setIsFocused(true)}
          onBlur={() => !disabled && setIsFocused(false)}
          className={`flex items-center ${
            BG_COLORS[bgColor]
          } border outline-none rounded-lg p-3 w-full transition-all duration-300
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
    ${
            !disabled && (isOpen || isFocused)
              ? "border-blue-30 ring ring-blue-30/25"
              : "border-gray-500 ring-transparent"
          }`}
          ref={avatarRef}
          onClick={() => !disabled && toggleDropdown()}
          onKeyDown={(e) => {
            if (disabled) return;
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggleDropdown();
            }
          }}
        >
          <span className={value ? "text-gray-700" : "text-gray-500"}>
            {value || placeholder || "Selecione"}
          </span>

          <svg
            className={`transform transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            } ml-auto`}
            width="14"
            height="7"
            viewBox="0 0 16 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L8 6.58579L14.2929 0.292893C14.6834 -0.0976311 15.3166 -0.0976311 15.7071 0.292893C16.0976 0.683417 16.0976 1.31658 15.7071 1.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
              fill="black"
              fillOpacity="0.25"
            />
          </svg>
        </div>

        {/* Dropdown */}
        {isOpen && (
          <div
            ref={dropdownRef}
            onClick={handleClickInside}
            className={`absolute z-50 max-h-80 overflow-y-scroll left-0 mt-[14px] bg-white shadow-sm text-black text-opacity-25 rounded-xl w-full animate-[dropdown-bounce_0.3s_ease-out]`}
          >
            {options.map((option, index) => (
              <div
                key={index}
                className={`text-center py-3 
  ${
                  option.disabled
                    ? "opacity-40 cursor-not-allowed"
                    : "cursor-pointer hover:bg-gray-300"
                } 
  ${
                  value === option.name && !option.disabled
                    ? "bg-gray-300"
                    : ""
                }
`}
                onClick={() => !option.disabled && handleOptionClick(option)}
              >
                {option.name}
              </div>
            ))}
          </div>
        )}

        {/* Select oculto para validação nativa */}
        <select
          className="sr-only absolute bottom-0 left-1/2"
          required={required}
          disabled={disabled}
          name={label.toLowerCase().normalize("NFD").replace(
            /[\u0300-\u036f]/g,
            "",
          ).replace(/\s+/g, "_")}
          value={value || ""}
          onChange={() => {}}
        >
          <option value="">{placeholder || "Selecione"}</option>
          {options.map((option) => (
            <option key={option.value} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
