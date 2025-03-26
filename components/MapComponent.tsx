import { useEffect } from "preact/hooks";

export default function MapComponent() {
  useEffect(() => {
    // Garante que o Leaflet está carregado
    if (typeof window !== "undefined" && (window as any).L) {
      const L = (window as any).L;

      // Lista de lojas com coordenadas
      const stores = [
        {
          name: "Jardim Goiás",
          position: [-16.6996234, -49.2621436],
        },
        {
          name: "Marista",
          position: [-16.68935, -49.23695],
        },
        {
          name: "Vitória",
          position: [-20.007327, -40.408408],
        },
      ];

      // Verifica se o mapa já foi inicializado para evitar recriação
      if (!document.getElementById("map")?.dataset.mapInitialized) {
        const map = L.map("map").setView([-16.6996234, -49.2621436], 5);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
          map,
        );

        // Adiciona um marcador azul
        const blueIcon = L.icon({
          iconUrl: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
          iconSize: [30, 30],
        });

        // Adiciona os markers ao mapa
        stores.forEach((store) => {
          L.marker(store.position, { icon: blueIcon })
            .addTo(map)
            .bindPopup(store.name);
        });

        // Marca a `div` como inicializada para evitar recriação
        document.getElementById("map")!.dataset.mapInitialized = "true";
      }
    }
  }, []);

  return (
    <div
      id="map"
      className="w-full rounded-2xl h-full"
    />
  );
}
