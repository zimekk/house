import { useEffect, useRef, useState } from "react";
// openlayers
import { Control, ScaleLine, defaults as defaultControls } from "ol/control";
import { type Coordinate } from "ol/coordinate";
// import { toStringXY } from 'ol/coordinate';
import Feature from "ol/Feature";
import Map from "ol/Map";
import View from "ol/View";
import { Polygon } from "ol/geom";
import { Draw, Modify, Snap } from "ol/interaction";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { transform } from "ol/proj";
import OSM from "ol/source/OSM";
import TileWMS from "ol/source/TileWMS";
import VectorSource from "ol/source/Vector";
// import XYZ from "ol/source/XYZ";
import { Circle, Fill, Stroke, Style } from "ol/style";
import "ol/ol.css";
import styles from "./styles.module.scss";

// https://openlayers.org/en/latest/examples/custom-controls.html
// Define rotate to north control.
class RotateNorthControl extends Control {
  constructor(options = {}) {
    const button = document.createElement("button");
    button.innerHTML = "N";

    const element = document.createElement("div");
    element.className = `${styles.RotateNorth} ol-unselectable ol-control`;
    element.appendChild(button);

    Object.assign(options, { element });

    super(options);

    button.addEventListener("click", this.handleRotateNorth.bind(this), false);
  }

  handleRotateNorth() {
    const map = this.getMap();
    if (map) {
      console.log(map.getView().getRotation());
      map.getView().setRotation(-0.19);
    }
  }
}

export default function App() {
  const [features] = useState(() => [
    new Feature({
      geometry: new Polygon([
        [
          transform(
            [20.75907447322544, 52.13477143461034],
            "EPSG:4326",
            "EPSG:3857",
          ),
          transform(
            [20.75974786143117, 52.13469118662698],
            "EPSG:4326",
            "EPSG:3857",
          ),
          transform(
            [20.759971036190713, 52.13442983819979],
            "EPSG:4326",
            "EPSG:3857",
          ),
          transform(
            [20.758997907993905, 52.134528896721974],
            "EPSG:4326",
            "EPSG:3857",
          ),
        ],
      ]),
    }),
  ]);
  const [selectedCoord, setSelectedCoord] = useState<Coordinate>();

  // pull refs
  const mapElement = useRef(null);

  // create state ref that can be accessed in OpenLayers onclick callback function
  //  https://stackoverflow.com/a/60643670
  const mapRef = useRef<Map>();
  const featuresLayerRef = useRef<VectorLayer<VectorSource>>();

  // initialize map on first render - logic formerly put into componentDidMount
  useEffect(() => {
    const source = new VectorSource({ features });
    const vector = new VectorLayer({
      source: source,
      style: new Style({
        fill: new Fill({
          color: "rgba(255, 255, 255, 0.2)",
        }),
        stroke: new Stroke({
          color: "#ffcc33",
          width: 2,
        }),
        image: new Circle({
          radius: 7,
          fill: new Fill({
            color: "#ffcc33",
          }),
        }),
      }),
    });

    // create map
    const map = new Map({
      target: mapElement.current || undefined,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        // USGS Topo
        // https://github.com/openlayers/openlayers/issues/9900
        // new TileLayer({
        //   source: new XYZ({
        //     url: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}',
        //   })
        // }),
        // Google Maps Terrain
        // new TileLayer({
        //   source: new XYZ({
        //     url: "https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}",
        //   }),
        // }),
        // https://openlayers.org/en/latest/examples/wms-tiled.html
        new TileLayer({
          source: new TileWMS({
            url: "https://integracja.gugik.gov.pl/cgi-bin/KrajowaIntegracjaEwidencjiGruntow",
            params: {
              LAYERS: "dzialki,numery_dzialek,budynki",
              TILED: true,
            },
          }),
        }),
        vector,
      ].filter(Boolean),
      view: new View({
        // projection: 'EPSG:4326',
        projection: "EPSG:3857",
        center: transform(
          [20.75854578484479, 52.13468296989453],
          "EPSG:4326",
          "EPSG:3857",
        ),
        zoom: 18,
      }),
      controls: defaultControls().extend([
        new RotateNorthControl(),
        new ScaleLine(),
      ]),
    });

    // https://openlayers.org/en/latest/examples/draw-and-modify-features.html
    const modify = new Modify({ source: source });
    map.addInteraction(modify);

    // https://tsauerwein.github.io/ol3/animation-flights/examples/draw-features.html
    const draw = new Draw({
      source: source,
      type: "Polygon",
    });
    map.addInteraction(draw);

    const snap = new Snap({ source: source });
    map.addInteraction(snap);

    // set map onclick handler
    map.on("click", handleMapClick);

    mapRef.current = map;
  }, []);

  // update map if features prop changes - logic formerly put into componentDidUpdate
  useEffect(() => {
    if (mapRef.current && featuresLayerRef.current && features.length) {
      // fit map to feature extent (with 100px of padding)
      // const source = featuresLayerRef.current.getSource();
      // if (source) {
      //   mapRef.current.getView().fit(source.getExtent(), {
      //     padding: [100, 100, 100, 100],
      //   });
      // }
    }
  }, [features]);

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

    // set React state
    setSelectedCoord(transormedCoord);
  };

  return (
    <div className={styles.App}>
      <h1>map</h1>
      <div ref={mapElement} className={styles.Map}></div>
      <div>{JSON.stringify(selectedCoord, null, 2)}</div>
    </div>
  );
}
