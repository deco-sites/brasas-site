import { useEffect } from "preact/hooks";
import { userLocation } from "../islands/Branches/BranchesIsland.tsx";

export default function MapComponent() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).L) {
      const L = (window as any).L;

      // Lista completa de lojas com todas as informações
      const stores = [
        {
          name: "Bangu - Polo Colégio Matriz",
          position: [-22.878473, -43.458808],
          address: "R. Agrícola, 318",
          neighborhood: "Bangu",
          city: "Rio de Janeiro",
          state: "RJ",
          zip_code: "21810-090",
        },
        {
          name: "Barra - Downtown",
          position: [-23.004389, -43.318482],
          address: "Av. das Américas, 500 - Bloco 10 - Loja 104",
          neighborhood: "Barra da Tijuca",
          city: "Rio de Janeiro",
          state: "RJ",
          zip_code: "22640-100",
        },
        {
          name: "Barra - Novo Leblon",
          position: [-23.00098, -43.38297],
          address: "Av. das Américas, 7607 - Sala 330",
          neighborhood: "Barra da Tijuca",
          city: "Rio de Janeiro",
          state: "RJ",
          zip_code: "22793-081",
        },
        {
          name: "Barra - Parque Olímpico",
          position: [-22.97246, -43.385978],
          address: "Est. Cel. Pedro Correa, 1427 - Condomínio Rio 2",
          neighborhood: "Barra Olímpica",
          city: "Rio de Janeiro",
          state: "RJ",
          zip_code: "22775-090",
        },
        {
          name: "Botafogo",
          position: [-22.952635, -43.18828],
          address: "R. Voluntários da Pátria, 147",
          neighborhood: "Botafogo",
          city: "Rio de Janeiro",
          state: "RJ",
          zip_code: "22270-010",
        },
        {
          name: "Cachambi",
          position: [-22.887251, -43.285735],
          address: "Av. Dom Hélder Câmara, 5644 - Loja B e C",
          neighborhood: "Engenho de Dentro",
          city: "Rio de Janeiro",
          state: "RJ",
          zip_code: "20771-004",
        },
        {
          name: "Campo Grande",
          position: [-22.904497, -43.555788],
          address: "Av. Cesário de Melo, 2400 - Sala 107",
          neighborhood: "Campo Grande",
          city: "Rio de Janeiro",
          state: "RJ",
          zip_code: "23052-100",
        },
        {
          name: "Copacabana",
          position: [-22.973409, -43.192272],
          address: "R. Pompeu Loureiro, 41",
          neighborhood: "Copacabana",
          city: "Rio de Janeiro",
          state: "RJ",
          zip_code: "22061-000",
        },
        {
          name: "Duque de Caxias",
          position: [-22.789872, -43.305969],
          address: "R. Prof. José de Souza Herdy, 1165",
          neighborhood: "Jardim 25 de Agosto",
          city: "Rio de Janeiro",
          state: "RJ",
          zip_code: "25071-200",
        },
        {
          name: "Ilha",
          position: [-22.806543, -43.207877],
          address: "R. Cambaúba, 205",
          neighborhood: "Jardim Guanabara",
          city: "Rio de Janeiro",
          state: "RJ",
          zip_code: "21940-000",
        },
        {
          name: "Ipanema",
          position: [-22.984091, -43.20454],
          address: "R. Visconde de Pirajá, 330 - Sala 207 / 208 / 209",
          neighborhood: "Ipanema",
          city: "Rio de Janeiro",
          state: "RJ",
          zip_code: "22410-000",
        },
        {
          name: "Jpa - Freguesia",
          position: [-22.939528, -43.341825],
          address: "Est. dos Três Rios, 200 - 2º andar",
          neighborhood: "Freguesia - Jacarepaguá",
          city: "Rio de Janeiro",
          state: "RJ",
          zip_code: "22755-000",
        },
        {
          name: "Jpa - Pechincha",
          position: [-22.935223, -43.358448],
          address: "Rua Retiro dos Artistas, nº 855 - Lojas A, B, C - Bloco 1",
          neighborhood: "Pechincha",
          city: "Rio de Janeiro",
          state: "RJ",
          zip_code: "22770-102",
        },
        {
          name: "Jpa - Taquara",
          position: [-22.920085, -43.369665],
          address: "R. Apiacás, 23",
          neighborhood: "Taquara",
          city: "Rio de Janeiro",
          state: "RJ",
          zip_code: "22730-190",
        },
        {
          name: "Laranjeiras",
          position: [-22.933933, -43.179219],
          address: "R. São Salvador, 49",
          neighborhood: "Laranjeiras",
          city: "Rio de Janeiro",
          state: "RJ",
          zip_code: "22231-130",
        },
        {
          name: "Madureira",
          position: [-22.872476, -43.341016],
          address: "R. Américo Brasiliense, 184",
          neighborhood: "Madureira",
          city: "Rio de Janeiro",
          state: "RJ",
          zip_code: "21351-060",
        },
        {
          name: "Méier",
          position: [-22.905863, -43.288452],
          address: "R. Vilela Tavares, 46",
          neighborhood: "Méier",
          city: "Rio de Janeiro",
          state: "RJ",
          zip_code: "20725-220",
        },
        {
          name: "Niterói - Icaraí",
          position: [-22.9021386, -43.1075613],
          address: "Rua Lopes Trovão, 287",
          neighborhood: "Icaraí - Niterói",
          city: "Rio de Janeiro",
          state: "RJ",
          zip_code: "02675-031",
        },
        {
          name: "Niterói - Itaipu",
          position: [-22.940929, -43.04421],
          address: "R. Doutor Heitor Collet, 88",
          neighborhood: "Itaipu - Niterói",
          city: "Rio de Janeiro",
          state: "RJ",
          zip_code: "24342-250",
        },
        {
          name: "Nova Iguaçu",
          position: [-22.761705, -43.452959],
          address: "R. Coronel Alfredo Soares, 101",
          neighborhood: "Centro - Nova Iguaçu",
          city: "Rio de Janeiro",
          state: "RJ",
          zip_code: "26255-150",
        },
        {
          name: "Recreio",
          position: [-23.020324, -43.488132],
          address: "Recreio Shopping - Av. das Américas, 19019 - Sala 399F",
          neighborhood: "Recreio dos Bandeirantes",
          city: "Rio de Janeiro",
          state: "RJ",
          zip_code: "22790-701",
        },
        {
          name: "Tijuca",
          position: [-22.926972, -43.232266],
          address: "R. Guapiara, 82",
          neighborhood: "Tijuca",
          city: "Rio de Janeiro",
          state: "RJ",
          zip_code: "20521-180",
        },
        {
          name: "Valqueire",
          position: [-22.88453, -43.367101],
          address: "R. Luís Beltrão, 160 - 2º andar",
          neighborhood: "Vila Valqueire",
          city: "Rio de Janeiro",
          state: "RJ",
          zip_code: "21321-230",
        },
        {
          name: "Vila da Penha",
          position: [-22.848364, -43.310884],
          address: "Av. Meriti, 1125",
          neighborhood: "Vila da Penha",
          city: "Rio de Janeiro",
          state: "RJ",
          zip_code: "21211-007",
        },
        {
          name: "Volta Redonda",
          position: [-22.523044, -44.104255],
          address: "R. 31, 113",
          neighborhood: "Vila Santa Cecília, Volta Redonda",
          city: "Rio de Janeiro",
          state: "RJ",
          zip_code: "27261-305",
        },
        {
          name: "Campos",
          position: [-21.761955, -41.335874],
          address: "R. Barão da Lagoa Dourada, 543",
          neighborhood: "Centro, Campos dos Goytacazes",
          city: "Rio de Janeiro",
          state: "RJ",
          zip_code: "28030-011",
        },
        {
          name: "Itaipava",
          position: [-22.395571, -43.13293],
          address: "Est. União e Industria, 9300 - Sobre Loja",
          neighborhood: "Araras, Petrópolis",
          city: "Rio de Janeiro",
          state: "RJ",
          zip_code: "25745-240",
        },
        {
          name: "Macaé",
          position: [-22.377121, -41.780322],
          address: "R. Francisco Portela, 798",
          neighborhood: "Centro, Macaé",
          city: "Rio de Janeiro",
          state: "RJ",
          zip_code: "27910-200",
        },
        {
          name: "Petrópolis",
          position: [-22.506209, -43.178575],
          address: "Av. Tiradentes 106",
          neighborhood: "Centro, Petrópolis",
          city: "Rio de Janeiro",
          state: "RJ",
          zip_code: "25685-311",
        },
        {
          name: "Resende",
          position: [-22.462904, -44.445883],
          address: "R. Leonel Joaquim Serra Filho, 13",
          neighborhood: "Jardim Tropical, Resende",
          city: "Rio de Janeiro",
          state: "RJ",
          zip_code: "27541-240",
        },
        {
          name: "Rio das Ostras",
          position: [-22.523655, -41.947072],
          address: "Av. Amazonas, 541",
          neighborhood: "Balneário Remanso, Rio das Ostras",
          city: "Rio de Janeiro",
          state: "RJ",
          zip_code: "28890-000",
        },
        {
          name: "Teresópolis",
          position: [-22.407155, -42.96378],
          address: "Av. Delfim Moreira, 1092",
          neighborhood: "Artistas, Teresópolis",
          city: "Rio de Janeiro",
          state: "RJ",
          zip_code: "25953-236",
        },
        {
          name: "Brasília - Asa Norte",
          position: [-15.78045, -47.88303],
          address:
            "EQ/NORTE 102/103 LOTE A SALA 9B, ENTRADA A TÉRREO (MEZANINO)",
          neighborhood: "Centro Comercial Avenida 102",
          city: "Brasília",
          state: "DF",
          zip_code: "70722-400",
        },
        {
          name: "Brasília - Asa Sul",
          position: [-15.82134, -47.9104],
          address:
            "A138 SHC/ SUL EQ 110/111 - Bloco A - Lojas 1, 2, 3, 4, 12, 13, 14 e 15",
          neighborhood: "Asa Sul",
          city: "Brasília",
          state: "DF",
          zip_code: "70373-400",
        },
        {
          name: "Brasília - Noroeste",
          position: [-15.74857, -47.91082],
          address: "SHCNW SQNW 8/9 SQNW BL D - Loja 4",
          neighborhood: "Setor Noroeste",
          city: "Brasília",
          state: "DF",
          zip_code: "70686-290",
        },
        {
          name: "Brasília - Sudoeste",
          position: [-15.80221, -47.92892],
          address:
            "Q CLSW 304 BLOCO B - S/N - Sala 113, 115, 117, 118, 119 - Ed. Oasis",
          neighborhood: "Setor Sudoeste",
          city: "Brasília",
          state: "DF",
          zip_code: "70673-632",
        },
        {
          name: "Brasília - Águas Claras",
          position: [-15.84186, -48.02441],
          address:
            "Av. Araucárias, Lotes 1835, 1905, 1955 e 2005 - Salas 333 e 334",
          neighborhood: "Águas Claras, Brasília",
          city: "Brasília",
          state: "DF",
          zip_code: "71936-250",
        },
        {
          name: "Vitória",
          position: [-20.007327, -40.408408],
          address: "R. Eugênio Neto, 456",
          neighborhood: "Praia de Canto",
          city: "Vitória",
          state: "ES",
          zip_code: "29055-275",
        },
        {
          name: "Marista",
          position: [-16.68935, -49.23695],
          address: "R. 32, 346",
          neighborhood: "Setor Marista",
          city: "Goiânia",
          state: "GO",
          zip_code: "74150-210",
        },
        {
          name: "Jardim Goiás",
          position: [-16.70058, -49.24092],
          address: "Av. R 54, nº 453 - QD B 19 - Lote 31",
          neighborhood: "Jardim Goiás",
          city: "Goiânia",
          state: "GO",
          zip_code: "74810-220",
        },
        {
          name: "Juiz de Fora",
          position: [-21.778694, -43.345599],
          address: "R. Belmiro Braga, 120",
          neighborhood: "Alto dos Passos",
          city: "Juiz de Fora",
          state: "MG",
          zip_code: "36026-490",
        },
        {
          name: "Savassi",
          position: [-19.9415828, -43.937658],
          address: "Rua Major Lopes 34 A",
          neighborhood: "Savassi",
          city: "Belo Horizonte",
          state: "MG",
          zip_code: "30330-050",
        },
      ];

      if (!document.getElementById("map")?.dataset.mapInitialized) {
        const map = L.map("map").setView([-16.6996234, -49.2621436], 5);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
          map,
        );

        const blueIcon = L.icon({
          iconUrl:
            "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
          iconSize: [25, 41],
        });

        // Adiciona os markers ao mapa com popup completo
        stores.forEach((store) => {
          const popupContent = `
            <div style="min-width: 200px; font-family: Arial, sans-serif;">
              <strong style="font-size: 14px; color: #1a365d;">${store.name}</strong><br>
              <div style="margin-top: 5px; font-size: 12px; color: #4a5568;">
                ${store.address}<br>
                ${store.neighborhood}, ${store.city} - ${store.state}<br>
                CEP: ${store.zip_code}
              </div>
            </div>
          `;

          L.marker(store.position, { icon: blueIcon })
            .addTo(map)
            .bindPopup(popupContent);
        });

        document.getElementById("map")!.dataset.mapInitialized = "true";
        // Observa o signal de localização do usuário
        const unsubscribe = userLocation.subscribe((coords) => {
          if (coords) {
            map.setView(coords, 11); // Zoom mais próximo
          }
        });

        return () => {
          unsubscribe();
          map.remove();
        };
      }
    }
  }, []);

  return (
    <div
      id="map"
      className="w-full rounded-2xl min-h-96 h-full"
    />
  );
}
