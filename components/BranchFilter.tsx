import { useState } from "preact/hooks";
import IconSearch from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/search.tsx";
import SelectInput from "site/components/ui/SelectInput.tsx";

export default function BranchFilter(
  {
    cityOptions,
    handleFilterBranch,
    filteredBranches,
    activeState,
    setActiveState,
    textInputed,
    setTextInputed,
    handleSearch,
    handleClear,
  },
) {
  const stateFilters = [
    { name: "Distrito Federal", value: "df" },
    { name: "Espírito Santo", value: "es" },
    { name: "Goiás", value: "go" },
    { name: "Minas Gerais", value: "mg" },
    { name: "Rio de Janeiro", value: "rj" },
    { name: "Rio Grande do Sul", value: "rs" },
  ];

  return (
    <div className="flex flex-col gap-6 border border-gray-100 rounded-2xl p-6">
      <div className="flex gap-7 py-3 px-4 border border-gray-100 rounded-lg">
        <input
          className="placeholder:text-gray-500 placeholder:font-normal placeholder:text-base w-full outline-none"
          placeholder="Buscar"
          onChange={(e) => setTextInputed(e.target.value)}
          value={textInputed}
        />
        <IconSearch class="w-6 h-6 text-blue-300" />
      </div>

      <div className="w-full flex justify-between">
        <span className="text-gray-500 font-semibold text-base">
          Filtrar por
        </span>
        <button
          className="text-base capitalize underline font-semibold text-gray-100 hover:text-blue-300 transition duration-100"
          onClick={handleClear}
        >
          Limpar
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <span className="uppercase text-black-500 font-black text-xs leading-6">
          Estado
        </span>
        <div className="flex flex-wrap gap-2">
          {stateFilters.map((city, index) => (
            <button
              key={city.value}
              className={`border border-gray-500 text-gray-500 p-2 rounded-lg hover:bg-blue-300 hover:text-white transition duration-100 ${
                activeState === city.value ? "bg-blue-300 text-white" : ""
              }`}
              onClick={() => setActiveState(city.value)}
            >
              {city.name}
            </button>
          ))}
        </div>
      </div>

      <SelectInput
        label={"cidade"}
        placeholder={"Selecione a cidade"}
        options={cityOptions}
        bgColor="white"
        onChangeFunction={handleFilterBranch}
      />

      <SelectInput
        label={"unidade"}
        placeholder={"Selecione a unidade"}
        options={filteredBranches}
        bgColor="white"
      />

      <button
        className="bg-blue-300 rounded-lg text-white capitalize py-3 border border-blue-300 border-opacity-0 hover:bg-white hover:text-blue-300  hover:border-opacity-100 transition duration-100"
        onClick={handleSearch}
      >
        Buscar
      </button>
    </div>
  );
}
