import { useEffect, useRef, useState } from "react";
// openlayers
import { ScaleLine, defaults as defaultControls } from "ol/control";
import { type Coordinate } from "ol/coordinate";
import Map from "ol/Map";
import View from "ol/View";
import Feature from "ol/Feature";
import { Point } from "ol/geom";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { fromLonLat, transform } from "ol/proj";
import OSM from "ol/source/OSM";
import VectorSource from "ol/source/Vector";
import { Circle, Fill, Stroke, Style } from "ol/style";
import "ol/ol.css";
import styles from "./styles.module.scss";

interface Place {
  name: string;
  website: string;
  address: string;
  location: [number, number];
}

function Places({ places }: { places: Place[] }) {
  return (
    <ul>
      {places.map(({ name, website, address, location }, index) => (
        <li key={index}>
          <a
            href={website}
            onClick={(e) => {
              const range = document.createRange();
              e.preventDefault();
              range.selectNode(e.target as HTMLElement);
              ((selection) =>
                selection &&
                (selection.removeAllRanges(), selection.addRange(range)))(
                window.getSelection(),
              );
            }}
          >
            {name}
          </a>
          {" // "}
          <a
            href={`https://google.com/maps/dir/?api=1&destination=${location.join(",")}`}
            onClick={(e) => {
              const range = document.createRange();
              e.preventDefault();
              range.selectNode(e.target as HTMLElement);
              ((selection) =>
                selection &&
                (selection.removeAllRanges(), selection.addRange(range)))(
                window.getSelection(),
              );
            }}
          >
            {address}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function App() {
  const [selectedCoord, setSelectedCoord] = useState<Coordinate>();
  const [places] = useState<Place[]>(() => [
    {
      name: "Powiatowy Inspektorat Nadzoru Budowlanego w Pruszkowie",
      website: "http://www.pinbpruszkow.pl/",
      address: "Henryka Sienkiewicza 5, 05-800 Pruszków",
      location: [52.1677015, 20.7968206],
    },
    {
      name: "Wydział Architektury Starostwa Powiatowego w Pruszkowie",
      website: "https://samorzad.gov.pl/web/powiat-pruszkowski",
      address: "Michała Drzymały 30, 05-800 Pruszków",
      location: [52.1631744, 20.7991336],
    },
    {
      name: "PGE Dystrybucja S.A.",
      website: "http://www.pgedystrybucja.pl/",
      address: "Ludwika Waryńskiego 4/6, 05-800 Pruszków",
      location: [52.1707894, 20.6585957],
    },
    {
      name: "9design",
      website: "https://9design.pl/",
      address: "Lucerny 25, 04-687 Warszawa",
      location: [52.2146506, 21.1356086],
    },
    {
      name: "ABB",
      website: "https://new.abb.com/pl",
      address: "Żegańska 1, 04-713 Warszawa",
      location: [52.382775, 19.5649775],
    },
    {
      name: "Producent stolarki aluminiowej ALMATEX",
      website: "https://almatex.com.pl/kontakt",
      address: "Leśna 45, 05-270 Marki",
      location: [52.3115735, 21.1063488],
    },
    {
      name: "AlmiDécor",
      website: "https://almidecor.com/pages/showroom-almidecor-warszawa",
      address: "Wiertnicza 159, 02-956 Warszawa",
      location: [52.1780127, 21.0705185],
    },
    {
      name: "Balneo - Showroom Pruszków",
      website: "https://balneo.pl/",
      address: "Aleja Wojska Polskiego 123/lokal U5, 05-800 Pruszków",
      location: [52.1530299, 20.6522369],
    },
    {
      name: "Bozza Concept'n Design",
      website: "https://bozza.pl/salony-wnetrz/",
      address: "Józefa Piusa Dziekońskiego 3, 00-710 Warszawa",
      location: [52.1940719, 21.0443418],
    },
    {
      name: "Bramet",
      website: "http://www.bramy-wisniowski.pl/",
      address: "Płowiecka 42, 04-501 Warszawa",
      location: [52.1735863, 20.9904477],
    },
    {
      name: "Brilliant Anko",
      website: "https://abbanko.pl/kontakt/",
      address: "Czerniakowska 126a, 00-453 Warszawa",
      location: [52.216771, 21.0455371],
    },
    {
      name: "CENTER-MEBEL",
      website: "https://center-mebel.pl/kontakt/",
      address: "Mazowiecka 12/36, 00-048 Warszawa",
      location: [52.2378176, 21.0082636],
    },
    {
      name: "Domio Home Interiors Warsaw",
      website: "https://www.domiohome.com/",
      address: "Mokotowska 57, 00-542 Warszawa",
      location: [52.2253928, 21.0188631],
    },
    {
      name: "DOMO-STREFA.PL | Salon Okien i Drzwi Premium",
      website: "http://www.domo-strefa.pl/",
      address: "Warszawska 262A, 05-082 Babice Nowe",
      location: [52.2478858, 20.7039494],
    },
    {
      name: "Sklep budowlany | Hurtownia materiałów budowlanych DTM Bronisze",
      website: "https://dtmhurtownia.pl/",
      address: "Piastowska 3, 05-850 Bronisze",
      location: [52.2080308, 20.8112657],
    },
    {
      name: "Elkamino Dom",
      website: "https://elkaminodom.pl/kontakt",
      address: "Średnia 33, 05-822 Milanówek",
      location: [52.1055434, 20.6892325],
    },
    {
      name: "Flora Point - Świat Roślin",
      website: "https://www.florapoint.pl/",
      address: "Mrówcza 212, 04-697 Warszawa",
      location: [52.2122229, 21.1575947],
    },
    {
      name: "GRODNO S.A. Hurtownia Elektryczna Warszawa Ursynów",
      website: "https://www.grodno.pl/punkty-sprzedazy",
      address: "Puławska 294, 02-819 Warszawa",
      location: [52.1735863, 20.9904477],
    },
    {
      name: "Intar Sp. z o.o. - Materiały i usługi dla meblarstwa",
      website: "https://intar.pl/",
      address: "Kutrzeby 30, 05-082 Stare Babice",
      location: [52.252215, 20.7630715],
    },
    {
      name: "Internity Home - Wyposażenie Wnętrz",
      website: "https://internityhome.pl/",
      address: "Duchnicka 3, 01-797 Warszawa",
      location: [52.2568729, 20.825336],
    },
    {
      name: "Internity Home Bartycka",
      website: "https://internityhome.pl/",
      address: "Bartycka 24/26/Paw. 208, 00-716 Warszawa",
      location: [52.213226, 20.9150625],
    },
    {
      name: "ISS Ogrodzenia - Wiśniowski, Konsport - Ogrodzenia panelowe i palisadowe, Bramy garażowe",
      website: "https://ogrodzenia-iss.pl/",
      address: "Obwodnica 1, 05-840 Brwinów",
      location: [52.1315122, 20.6059591],
    },
    {
      name: "Jarbetal sp.j. Szkiela B.J.",
      website: "https://jarbetal.pl/kontakt/",
      address: "Groblowa 3, 05-804 Pruszków",
      location: [52.1660478, 20.7719672],
    },
    {
      name: "KOMA Oświetlenie",
      website: "https://koma.lux.pl/Kontakt,pid,45.html",
      address: "Czerniakowska 42, 00-715 Warszawa",
      location: [52.2061738, 21.0470168],
    },
    {
      name: "Laminam Showroom Warszawa",
      website: "http://laminam.pl/",
      address: "Al. Jerozolimskie 132, 02-305 Warszawa",
      location: [52.2212331, 20.9740399],
    },
    {
      name: "Łazienki-Branicki Piotr Branicki",
      website: "https://lazienki-branicki.pl/",
      address:
        "ul. Królewska 26, dojazd do firmy ul. Aleje Jerozolimskie 337a, 05-816 Michałowice",
      location: [52.1715992, 20.8435987],
    },
    {
      name: "Marazzi Showroom Warszawa",
      website: "https://www.marazzi.pl/store/marazzi-showroom-warszawa-sklep/",
      address: "Budynek Eurocentrum, Al. Jerozolimskie 132, 02-017 Warszawa",
      location: [52.2213208, 20.9044583],
    },
    {
      name: "Marmorin design",
      website: "https://marmorindesign.pl/kontakt/",
      address: "Puławska 300A/6, 02-819 Warszawa",
      location: [52.1476162, 21.0161285],
    },
    {
      name: "MASSI Showroom Warszawa Puchały",
      website: "https://www.massi.pl/",
      address: "Żwirowa 68/moduł 10, 05-090 Puchały",
      location: [52.148277, 20.8842186],
    },
    {
      name: "NaNovo Salon Łazienek Warszawa Pruszków",
      website: "https://www.nanovolazienki.pl/",
      address: "Al. Jerozolimskie 476, 05-800 Pruszków",
      location: [52.1708263, 20.8192646],
    },
    {
      name: "OKAWI | Salon Wzorcowy Okien i Drzwi WIKĘD",
      website: "https://okawi.pl/",
      address: "Warszawska 766, 05-083 Wierzbin",
      location: [52.2571597, 20.7506389],
    },
    {
      name: "Peka Showroom Warszawa",
      website: "https://peka.pl/",
      address: "Józefa Sierakowskiego 4/lok. U10, 03-712 Warszawa",
      location: [52.2490864, 21.0315601],
    },
    {
      name: "Salon Łazienek Seto Trade",
      website: "https://setotrade.pl/",
      address: "Al. Jerozolimskie 433, 05-802 Pruszków",
      location: [52.1719186, 20.8322464],
    },
    {
      name: "Autoryzowany Dealer STIHL, Serwis wszystkich marek",
      website: "",
      address: "Al. Jerozolimskie 338, 05-820 Piastów",
      location: [52.1723529, 20.8433937],
    },
    {
      name: "Stone Group",
      website: "https://www.ceglynaelewacje.pl/",
      address: "Powstańców Śląskich 65, 01-355 Warszawa",
      location: [52.2332554, 20.9118035],
    },
    {
      name: "STUV HOUSE KOMINKI KOZŁOWSKI WARSZAWA",
      website: "http://kominki-kozlowski.pl/",
      address: "Sokołowska 50, 05-090 Wypędy",
      location: [52.1440676, 20.881056],
    },
    {
      name: "VIYAR – wszystko do produkcji mebli",
      website: "https://viyar.pl/",
      address: "Ogrodowa 8, 05-850 Macierzysz",
      location: [52.2173781, 20.7107496],
    },
    {
      name: "Wibram - Bramy, drzwi, ogrodzenia, okna",
      website: "https://www.wibram.com.pl/",
      address: "Szpitalna 44, 05-802 Pruszków",
      location: [52.1708461, 20.8194577],
    },
    {
      name: "Sklep Würth",
      website:
        "https://eshop.wurth.pl/Sklepy-stacjonarne/Sklepy_stacjonarne.cyid/Sklepy_stacjonarne.cgid/pl/PL/PLN/?tab=shops-info",
      address: "Al. Jerozolimskie 332A, 05-816 Warszawa",
      location: [52.1723529, 20.8433937],
    },
  ]);
  const mapElement = useRef<HTMLDivElement>(null);

  // create state ref that can be accessed in OpenLayers onclick callback function
  //  https://stackoverflow.com/a/60643670
  const mapRef = useRef<Map>(null);

  // initialize map on first render - logic formerly put into componentDidMount
  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setTarget(undefined);
    }

    const coordinates = [
      [20.7594, 52.1346],
      [20.75907447322544, 52.13477143461034],
      [20.75974786143117, 52.13469118662698],
      [20.759971036190713, 52.13442983819979],
      [20.758997907993905, 52.134528896721974],
    ].concat(places.map(({ location }) => [...location].reverse()));

    const features: Feature[] = coordinates
      .map((coordinates) => fromLonLat(coordinates))
      .map((coordinates) => new Feature(new Point(coordinates)));

    const source = new VectorSource({
      features,
    });

    const view = new View({
      projection: "EPSG:3857",
      // center: fromLonLat([20.7594, 52.1346]),
      // zoom: 20,
    });

    // create map
    const map = new Map({
      target: mapElement.current || undefined,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new VectorLayer({
          source,
          style: new Style({
            image: new Circle({
              radius: 7,
              fill: new Fill({ color: "#ffffff80" }),
              stroke: new Stroke({
                color: "#3333ff",
                width: 2,
              }),
            }),
          }),
        }),
      ].filter(Boolean),
      view,
      controls: defaultControls().extend([new ScaleLine()]),
    });

    const extent = source.getExtent();
    if (extent) {
      view.fit(extent, {
        padding: [100, 100, 100, 100],
      });
    }

    // set map onclick handler
    map.on("click", handleMapClick);

    mapRef.current = map;
  }, [places]);

  // map click handler
  const handleMapClick = (event: any) => {
    if (!mapRef.current) {
      return;
    }
    // get clicked coordinate using mapRef to access current React state inside OpenLayers callback
    //  https://stackoverflow.com/a/60643670
    const clickedCoord = mapRef.current.getCoordinateFromPixel(event.pixel);

    // transform coord to EPSG 4326 standard Lat Long
    const transormedCoord = transform(clickedCoord, "EPSG:3857", "EPSG:4326");
    // console.log({clickedCoord,transormedCoord})

    // set React state
    setSelectedCoord(transormedCoord);
  };

  return (
    <div className={styles.App}>
      <h1>poi</h1>
      <div ref={mapElement} className={styles.Map}></div>
      <div>{JSON.stringify(selectedCoord, null, 2)}</div>
      <Places places={places} />
    </div>
  );
}
