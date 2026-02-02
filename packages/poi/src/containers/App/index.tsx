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
      name: "9design",
      website: "https://9design.pl/",
      address: "Lucerny 25, 04-687 Warszawa",
      location: [52.2146506, 21.1356086],
    },
    {
      name: "AlmiDécor",
      website: "https://almidecor.com/pages/showroom-almidecor-warszawa",
      address: "Wiertnicza 159, 02-956 Warszawa",
      location: [52.1780127, 21.0705185],
    },
    {
      name: "Bozza Concept'n Design",
      website: "https://bozza.pl/salony-wnetrz/",
      address: "Józefa Piusa Dziekońskiego 3, 00-710 Warszawa",
      location: [52.1940719, 21.0443418],
    },
    {
      name: "Domio Home Interiors Warsaw",
      website: "https://www.domiohome.com/",
      address: "Mokotowska 57, 00-542 Warszawa",
      location: [52.2253928, 21.0188631],
    },
    {
      name: "Flora Point - Świat Roślin",
      website: "https://www.florapoint.pl/",
      address: "Mrówcza 212, 04-697 Warszawa",
      location: [52.2122229, 21.1575947],
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
      name: "Peka Showroom Warszawa",
      website: "https://peka.pl/",
      address: "Józefa Sierakowskiego 4/lok. U10, 03-712 Warszawa",
      location: [52.2490864, 21.0315601],
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

    view.fit(source.getExtent(), {
      padding: [100, 100, 100, 100],
    });

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
