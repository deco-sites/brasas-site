import Image from "apps/website/components/Image.tsx";
import BranchFilter from "site/components/BranchFilter.tsx";
import IconList from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/list.tsx";
import IconMap from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/map.tsx";
import { useEffect, useState } from "preact/hooks";
import BranchCard from "site/components/BranchCard.tsx";
import MapComponent from "site/components/MapComponent.tsx";

export default function BranchesIsland(props) {
  const [view, setView] = useState("list");
  const [filteredBranches, setFilteredBranches] = useState([]);
  const [activeState, setActiveState] = useState(null);
  const [filteredCities, setFilteredCities] = useState<
    { name: string; value: string }[]
  >([]);

  const cityOptions = Array.from(
    new Map(
      props.branches.map((branch: { city: string; state: string }) => [
        `${branch.city}-${branch.state.toLowerCase()}`,
        { name: branch.city, value: branch.state.toLowerCase() },
      ]),
    ).values(),
  );

  const handleFilterBranch = (city: string) => {
    console.log("Filter Branch", city);

    const filtered = props.branches
      .filter((branch) => branch.state.toLowerCase() === city.toLowerCase())
      .map((branch) => ({ name: branch.name }));

    setFilteredBranches(filtered);
  };

  useEffect(() => {
    if (activeState) {
      const cities = cityOptions.filter((city) => city.value === activeState);
      setFilteredCities(cities);
    } else {
      setFilteredCities([]);
    }
  }, [activeState]);

  const [textInputed, setTextInputed] = useState("");

  const handleSearch = () => {
    console.log("Search");
  };

  const handleClear = () => {
    console.log("Clear Filters");
    setTextInputed("");
    setActiveState(null);
    setFilteredBranches([]);
  };

  return (
    <div className="w-full flex justify-center py-12">
      <div className="w-full max-w-[88.5rem] px-9 flex flex-col gap-6 ">
        <div className="flex justify-between items-start">
          <div className="w-96 flex items-start gap-2 p-2 rounded-lg bg-blue-200 text-white">
            <Image src={"/happy-face.svg"} alt="Happy Face" className="" />
            <span>
              <strong>Ative a localização no navegador</strong>{" "}
              e descubra a unidade mais perto de você!
            </span>
          </div>

          <div className="flex h-fit">
            <button
              className={`rounded-l-lg border border-blue-300 p-2 flex items-center justify-center ${
                view === "list"
                  ? "bg-blue-300 text-white"
                  : "text-blue-300 bg-white"
              }`}
              onClick={() => setView("list")}
            >
              <IconList class="w-6 h-6" />
            </button>
            <button
              className={`rounded-r-lg border border-blue-300 p-2 flex items-center justify-center ${
                view === "map"
                  ? "bg-blue-300 text-white"
                  : "text-blue-300 bg-white"
              }`}
              onClick={() => setView("map")}
            >
              <IconMap class="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="flex gap-20">
          {/*Esquerda*/}
          <div className="flex flex-col gap-6 w-96">
            <BranchFilter
              cityOptions={filteredCities.length > 0
                ? filteredCities
                : cityOptions}
              handleFilterBranch={handleFilterBranch}
              filteredBranches={filteredBranches}
              activeState={activeState}
              setActiveState={setActiveState}
              textInputed={textInputed}
              setTextInputed={setTextInputed}
              handleSearch={handleSearch}
              handleClear={handleClear}
            />
          </div>

          {/*Direita*/}
          {view === "list" && (
            <div className="flex flex-col gap-6 flex-1">
              {props.branches.map((branch) => (
                <BranchCard
                  name={branch.name}
                  image={branch.image}
                  address={branch.address}
                  neighborhood={branch.neighborhood}
                  city={branch.city}
                  state={branch.state}
                  email={branch.email}
                  tels={branch.tels}
                  instagram={branch.instagram}
                  lon={branch.lon}
                  lat={branch.lat}
                  zip_code={branch.zip_code}
                />
              ))}
            </div>
          )}

          {view === "map" && (
            <div className="flex flex-1">
              <MapComponent />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
