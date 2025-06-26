import { useEffect } from "preact/hooks";
import IconSearch from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/search.tsx";
import SelectInput from "site/components/ui/SelectInput.tsx";

export default function BranchFilter(
  {
    cityOptions,
    handleFilterBranch,
    filteredBranches,
    activeState,
    setActiveState,
    selectedCity,
    setSelectedCity,
    selectedUnity,
    setSelectedUnity,
    textInputed,
    setTextInputed,
    handleSearch,
    handleClear,
    props,
  },
) {
  const stateFilters = [
    { name: "Distrito Federal", value: "df" },
    { name: "Espírito Santo", value: "es" },
    { name: "Goiás", value: "go" },
    { name: "Minas Gerais", value: "mg" },
    { name: "Rio de Janeiro", value: "rj" },
  ];

  useEffect(() => {
    setSelectedCity(null);
    setSelectedUnity(null);
  }, [activeState]);

  return (
    <div className="sticky top-4 w-full flex flex-col gap-6 border border-gray-100 rounded-2xl p-6">
      <div className="hidden lg:flex gap-7 py-3 px-4 border border-gray-100 rounded-lg">
        <input
          className="placeholder:text-gray-500 placeholder:font-normal placeholder:text-base w-full outline-none"
          placeholder={props.searchInputPlaceholder}
          onChange={(e) => setTextInputed(e.target.value)}
          value={textInputed}
        />
        <IconSearch class="w-6 h-6 text-blue-300" />
      </div>

      <div className="w-full flex justify-between">
        <span className="text-gray-500 font-semibold text-base">
          {props.filterLabel}
        </span>
        <button
          className="text-base capitalize underline font-semibold text-gray-100 hover:text-blue-300 transition duration-100"
          onClick={handleClear}
        >
          {props.clearButtonText}
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <span className="uppercase text-black-500 font-black text-xs leading-6">
          {props.stateLabel}
        </span>
        <div className="flex flex-wrap gap-2">
          {stateFilters.map((state, index) => (
            <button
              key={state.value}
              className={`border border-gray-500 text-gray-500 p-2 rounded-lg hover:bg-blue-300 hover:text-white transition duration-100 ${
                activeState === state.value ? "bg-blue-300 text-white" : ""
              }`}
              onClick={() => setActiveState(state.value)}
            >
              {state.name}
            </button>
          ))}
        </div>
      </div>

      <SelectInput
        label={props.cityInput.label}
        placeholder={props.cityInput.placeholder}
        options={cityOptions}
        bgColor="white"
        value={selectedCity}
        onChangeFunction={setSelectedCity}
        functionToExecute={handleFilterBranch}
      />

      <SelectInput
        label={props.branchInput.label}
        placeholder={!selectedCity
          ? props.selectCityFirst
          : props.branchInput.placeholder}
        options={filteredBranches}
        bgColor="white"
        value={selectedUnity}
        onChangeFunction={setSelectedUnity}
      />

      <button
        className="bg-blue-300 rounded-lg text-white capitalize py-3 border border-blue-300 border-opacity-0 hover:bg-white hover:text-blue-300  hover:border-opacity-100 transition duration-100"
        onClick={handleSearch}
      >
        {props.searchInputPlaceholder}
      </button>
    </div>
  );
}
