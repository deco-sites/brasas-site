import Image from "apps/website/components/Image.tsx";
import BranchFilter from "site/components/BranchFilter.tsx";
import IconList from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/list.tsx";
import IconMap from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/map.tsx";
import { useEffect, useState } from "preact/hooks";
import BranchCard from "site/components/BranchCard.tsx";
import MapComponent from "site/components/MapComponent.tsx";
import IconSearch from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/search.tsx";
import IconHeartFilled from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/heart-filled.tsx";
import { useSelectLanguage } from "site/sdk/language.ts";

export default function BranchesIsland(props) {
  const STATE_NAMES = {
    "DF": "Distrito Federal",
    "ES": "Espírito Santo",
    "GO": "Goiás",
    "MG": "Minas Gerais",
    "RJ": "Rio de Janeiro",
  };
  // Transforma a estrutura de props.states em uma lista plana de branches
  const allBranches = props.states.flatMap((state) => state.branches);

  // Agrupa as branches por estado para exibição (incluindo apenas estados com branches)
  const groupedBranches = props.states.reduce((acc, state) => {
    if (state.branches.length > 0) {
      // Primeiro remove o primeiro item se for o Rio de Janeiro
      const branchesToSort = state.name === "Rio de Janeiro"
        ? state.branches.slice(1)
        : [...state.branches];

      // Depois ordena os branches restantes por nome
      acc[state.name] = branchesToSort.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }
    return acc;
  }, {});

  const { selectedLanguage } = useSelectLanguage();
  const [view, setView] = useState("list");
  const [filteredBranches, setFilteredBranches] = useState([{
    name: selectedLanguage.value === "ptBr"
      ? "Selecione uma cidade"
      : "Select a city",
    value: "",
  }]);
  const [finalFilteredBranches, setFinalFilteredBranches] = useState(
    Object.values(groupedBranches).flat(),
  );
  const [textInputed, setTextInputed] = useState("");
  const [activeState, setActiveState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedUnity, setSelectedUnity] = useState(null);
  const [filteredCities, setFilteredCities] = useState<
    { name: string; value: string }[]
  >([]);
  const [showAlert, setShowAlert] = useState(false);
  const [isShowingFilters, setIsShowingFilters] = useState(false);

  const slicedBranches = allBranches.slice(1);
  const cityOptions = Array.from(
    new Map(
      slicedBranches.map((branch: { city: string; state: string }) => [
        `${branch.city}-${branch.state?.toLowerCase()}`,
        {
          name: branch.city,
          value: branch.city?.toLowerCase(),
          state: branch.state,
        },
      ]),
    ).values(),
  );

  const handleFilterBranch = (city: string) => {
    const filtered = allBranches
      .filter((branch) => branch.city?.toLowerCase() === city?.toLowerCase())
      .map((branch) => ({ name: branch.name }));

    setFilteredBranches(filtered);
  };

  // Nova função para verificar se há filtros ativos
  const hasActiveFilters = () => {
    return textInputed || activeState || selectedCity || selectedUnity;
  };

  const [searchActive, setSearchActive] = useState(false);

  useEffect(() => {
    if (activeState) {
      const cities = cityOptions.filter((city) =>
        city.state?.toLowerCase() === activeState
      );
      setFilteredCities(cities);
    } else {
      setFilteredCities([]);
    }
  }, [activeState]);

  // Efeito para sincronizar quando o idioma mudar
  useEffect(() => {
    setFilteredBranches([{
      name: selectedLanguage.value === "ptBr"
        ? "Selecione uma cidade"
        : "Select a city",
      value: "",
    }]);
  }, [selectedLanguage.value]);

  // Função para filtrar branches com base nos filtros ativos
  const filterBranches = (branches) => {
    return branches.filter((branch) => {
      const textFilter = textInputed !== ""
        ? (
          branch.name?.toLowerCase().includes(textInputed?.toLowerCase()) ||
          branch.city?.toLowerCase().includes(textInputed?.toLowerCase()) ||
          branch.address?.toLowerCase().includes(textInputed?.toLowerCase()) ||
          branch.neighborhood?.toLowerCase().includes(
            textInputed?.toLowerCase(),
          ) ||
          branch.email?.toLowerCase().includes(textInputed?.toLowerCase()) ||
          branch.zip_code?.toLowerCase().includes(textInputed?.toLowerCase())
        )
        : true;

      const stateFilter = activeState !== null
        ? branch.state?.toLowerCase() === activeState?.toLowerCase()
        : true;

      const cityFilter = selectedCity !== null
        ? branch.city?.toLowerCase() === selectedCity?.toLowerCase()
        : true;

      const unityFilter = selectedUnity !== null
        ? (
          branch.name?.toLowerCase() === selectedUnity?.toLowerCase() ||
          branch.neighborhood?.toLowerCase() === selectedUnity?.toLowerCase()
        )
        : true;

      return textFilter && stateFilter && cityFilter && unityFilter;
    });
  };

  const handleSearch = () => {
    const filtered = filterBranches(allBranches)
      .sort((a, b) => a.name.localeCompare(b.name)); // Ordena os resultados
    setFinalFilteredBranches(filtered);
    setSearchActive(true);
  };

  const handleClear = () => {
    setTextInputed("");
    setActiveState(null);
    setSelectedCity(null);
    setSelectedUnity(null);
    setFilteredBranches([{
      name: selectedLanguage.value === "ptBr"
        ? "Selecione uma cidade"
        : "Select a city",
      value: "",
    }]);
    setFinalFilteredBranches(Object.values(groupedBranches).flat());
    setSearchActive(false);
  };

  {/*Implementação da Geolocalização*/}
  const checkLocationPermission = async () => {
    try {
      // Verifica o status da permissão
      const permissionStatus = await navigator.permissions?.query({
        name: "geolocation",
      });

      if (permissionStatus?.state === "granted") {
        // Permissão já concedida - pode prosseguir com geolocalização
        navigator.geolocation.getCurrentPosition(
          (position) => {
            //console.log("Localização:", position.coords);
            // Lógica para encontrar a unidade mais próxima
          },
          (error) => {
            console.error("Erro ao obter localização:", error);
            setShowAlert(true);
          },
        );
      } else if (permissionStatus?.state === "prompt") {
        // O navegador vai pedir permissão
        navigator.geolocation.getCurrentPosition(
          (position) => {
            //console.log("Localização:", position.coords);

            // Lógica para ordenar as unidades por proximidade
            const userLat = position.coords.latitude;
            const userLon = position.coords.longitude;

            // Função para calcular distância entre duas coordenadas (Haversine formula)
            const calculateDistance = (
              lat1: number,
              lon1: number,
              lat2: number,
              lon2: number,
            ) => {
              const R = 6371; // Raio da Terra em km
              const dLat = (lat2 - lat1) * Math.PI / 180;
              const dLon = (lon2 - lon1) * Math.PI / 180;
              const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(lat1 * Math.PI / 180) *
                  Math.cos(lat2 * Math.PI / 180) *
                  Math.sin(dLon / 2) * Math.sin(dLon / 2);
              const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
              return R * c; // Distância em km
            };

            // Criar array com unidades e suas distâncias
            const branchesWithDistance = allBranches
              .filter((branch) => branch.lat && branch.lon) // Filtra unidades sem coordenadas
              .map((branch) => ({
                ...branch,
                distance: calculateDistance(
                  userLat,
                  userLon,
                  parseFloat(branch.lat),
                  parseFloat(branch.lon),
                ),
              }));

            // Ordenar por distância (mais próxima primeiro)
            const sortedBranches = [...branchesWithDistance].sort((a, b) =>
              a.distance - b.distance
            );

            // Atualizar estado com as unidades ordenadas
            setFinalFilteredBranches(sortedBranches);

            // Se quisermos também atualizar os filtros com a unidade mais próxima
            {
              /*
            if (sortedBranches.length > 0) {
              const closestBranch = sortedBranches[0];
              setActiveState(closestBranch.state.toLowerCase());
              setSelectedCity(closestBranch.city.toLowerCase());
              setSelectedUnity(closestBranch.name.toLowerCase());
              setTextInputed(closestBranch.name);
            }*/
            }

            //Aqui acaba a lógica que ordena as unidades com base na localização
          },
          (error) => {
            console.error("Erro ao obter localização:", error);
            setShowAlert(true);
          },
        );
      } else {
        // Permissão negada
        setShowAlert(true);
      }
    } catch (error) {
      console.error("Erro ao verificar permissão:", error);
      setShowAlert(true);
    }
  };

  const showFilters = () => {
    setIsShowingFilters(!isShowingFilters);
  };

  return (
    <div className="w-full flex justify-center py-12">
      <div className="w-full max-w-[88.5rem] px-9 flex flex-col gap-6 ">
        <div className="flex flex-col gap-4 lg:flex-row justify-between items-end lg:items-start">
          <div
            onClick={checkLocationPermission}
            className="w-full lg:w-96 flex items-start gap-2 p-2 rounded-lg bg-blue-200 text-white cursor-pointer"
          >
            <Image src={"/happy-face.svg"} alt="Happy Face" className="" />
            <span>
              {selectedLanguage.value === "ptBr"
                ? "Ative a localização no navegador e descubra a unidade mais perto de você!"
                : "Activate the location in your browser and find the unit closest to you!"}
            </span>
          </div>

          <button
            onClick={showFilters}
            className="flex gap-2 items-center justify-center py-3 lg:hidden w-full text-blue-300 border border-blue-300 bg-transparent hover:bg-blue-300 hover:text-white rounded-lg transition-all duration-300"
          >
            <IconHeartFilled class="w-6 h-6" />
            <span>
              {selectedLanguage.value === "ptBr" ? "Filtrar por" : "Filter by"}
            </span>
          </button>

          <div className="flex lg:hidden gap-7 py-3 px-4 border border-gray-100 rounded-lg w-full">
            <input
              className="placeholder:text-gray-500 placeholder:font-normal placeholder:text-base w-full outline-none"
              placeholder={selectedLanguage.value === "ptBr"
                ? "Buscar"
                : "Search"}
              onChange={(e) => setTextInputed(e.target.value)}
              value={textInputed}
            />
            <button className="" onClick={handleSearch}>
              <IconSearch class="w-6 h-6 text-blue-300" />
            </button>
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

          {isShowingFilters && (
            <div className="w-full lg:hidden">
              <BranchFilter
                cityOptions={filteredCities.length > 0
                  ? filteredCities
                  : cityOptions}
                handleFilterBranch={handleFilterBranch}
                filteredBranches={filteredBranches}
                activeState={activeState}
                setActiveState={setActiveState}
                selectedCity={selectedCity}
                setSelectedCity={setSelectedCity}
                selectedUnity={selectedUnity}
                setSelectedUnity={setSelectedUnity}
                textInputed={textInputed}
                setTextInputed={setTextInputed}
                handleSearch={handleSearch}
                handleClear={handleClear}
              />
            </div>
          )}
        </div>

        <div className="flex gap-20">
          {/*Esquerda*/}
          <div className="relative hidden lg:flex flex-col gap-6 w-96 max-w-full">
            <BranchFilter
              cityOptions={filteredCities.length > 0
                ? filteredCities
                : cityOptions}
              handleFilterBranch={handleFilterBranch}
              filteredBranches={filteredBranches}
              activeState={activeState}
              setActiveState={setActiveState}
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
              selectedUnity={selectedUnity}
              setSelectedUnity={setSelectedUnity}
              textInputed={textInputed}
              setTextInputed={setTextInputed}
              handleSearch={handleSearch}
              handleClear={handleClear}
            />
          </div>

          {/*Direita*/}
          {view === "list" && (
            <div className="flex flex-col gap-6 flex-1">
              {allBranches[0] && ( //Se quiser tirar o card do bol é só adicionar && !searchActive
                <BranchCard
                  name={allBranches[0].name}
                  image={allBranches[0].image}
                  address={allBranches[0].address}
                  neighborhood={allBranches[0].neighborhood}
                  city={allBranches[0].city}
                  state={allBranches[0].state}
                  email={allBranches[0].email}
                  tels={allBranches[0].tels}
                  instagram={allBranches[0].instagram}
                  lon={allBranches[0].lon}
                  lat={allBranches[0].lat}
                  zip_code={allBranches[0].zip_code}
                />
              )}

              {/* Lista de branches */}
              {searchActive
                ? (
                  finalFilteredBranches.length > 0
                    ? (
                      // Agrupa os branches filtrados por estado
                      Object.entries(
                        finalFilteredBranches.reduce((acc, branch) => {
                          const stateName = branch.state;
                          if (!acc[stateName]) {
                            acc[stateName] = [];
                          }
                          acc[stateName].push(branch);
                          return acc;
                        }, {}),
                      )
                        .map(([stateName, branches]) => (
                          <div key={stateName} className="flex flex-col gap-4">
                            <h3 className="text-xl font-bold text-gray-800">
                              {STATE_NAMES[stateName] || stateName}
                            </h3>
                            {branches.map((branch, index) => (
                              <BranchCard
                                key={index}
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
                        ))
                    )
                    : (
                      <div className="text-center py-8 text-gray-500">
                        Nenhuma unidade encontrada com os filtros selecionados
                      </div>
                    )
                )
                : (
                  // Sem filtros ativos - mostra agrupado por estado (já ordenado)
                  Object.entries(groupedBranches).map((
                    [stateName, branches],
                  ) => (
                    <div key={stateName} className="flex flex-col gap-4">
                      <h3 className="text-xl font-bold text-gray-800">
                        {STATE_NAMES[stateName] || stateName}
                      </h3>
                      {branches.map((branch, index) => (
                        <BranchCard
                          key={index}
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
                  ))
                )}
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
