import { useEffect, useRef, useState } from "react";
// openlayers
import { Control, defaults as defaultControls } from "ol/control";
import ScaleLine from "ol/control/ScaleLine";
import { type Coordinate } from "ol/coordinate";
// import { toStringXY } from 'ol/coordinate';
import Feature from "ol/Feature";
import Map from "ol/Map";
import View from "ol/View";
import Point from "ol/geom/Point";
import Polygon from "ol/geom/Polygon";
import Draw from "ol/interaction/Draw";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import { transform } from "ol/proj";
import OSM from "ol/source/OSM";
import TileWMS from "ol/source/TileWMS";
import VectorSource from "ol/source/Vector";
// import XYZ from "ol/source/XYZ";
import Style from "ol/style/Style";
import Circle from "ol/style/Circle";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
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
            [20.759074648790126, 52.134771410381745],
            "EPSG:4326",
            "EPSG:3857",
          ),
          transform(
            [20.75974792819471, 52.13469098286498],
            "EPSG:4326",
            "EPSG:3857",
          ),
          transform(
            [20.75997122979982, 52.13442974707036],
            "EPSG:4326",
            "EPSG:3857",
          ),
          transform(
            [20.758997850859455, 52.13452854926538],
            "EPSG:4326",
            "EPSG:3857",
          ),
        ],
      ]),
      labelPoint: new Point(
        transform(
          [20.75940405898775, 52.13464930933981],
          "EPSG:4326",
          "EPSG:3857",
        ),
      ),
      name: "My Polygon",
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
    const source = new VectorSource();
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

    // create and add vector source layer
    const initalFeaturesLayer = new VectorLayer({
      source: new VectorSource(),
    });

    // create map
    const initialMap = new Map({
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
        initalFeaturesLayer,
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

    // https://tsauerwein.github.io/ol3/animation-flights/examples/draw-features.html
    const draw = new Draw({
      source: source,
      type: "Polygon",
    });
    initialMap.addInteraction(draw);

    // set map onclick handler
    initialMap.on("click", handleMapClick);

    mapRef.current = initialMap;
    featuresLayerRef.current = initalFeaturesLayer;
  }, []);

  // update map if features prop changes - logic formerly put into componentDidUpdate
  useEffect(() => {
    if (mapRef.current && featuresLayerRef.current && features.length) {
      // may be null on first render

      // set features to map
      featuresLayerRef.current.setSource(
        new VectorSource({
          features: features, // make sure features is an array
        }),
      );

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
