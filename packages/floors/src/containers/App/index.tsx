import {
  type ChangeEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
// openlayers
import { Control, ScaleLine, defaults as defaultControls } from "ol/control";
import { type Coordinate } from "ol/coordinate";
// import { toStringXY } from 'ol/coordinate';
// import Feature from "ol/Feature";
import Map from "ol/Map";
import View from "ol/View";
import { GeoJSON } from "ol/format";
// import { Polygon } from "ol/geom";
import { Point } from "ol/geom";
import { Draw, Modify, Snap } from "ol/interaction";
// import { Graticule as GraticuleLayer } from "ol/layer";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { fromLonLat, getPointResolution, transform } from "ol/proj";
// import OSM from "ol/source/OSM";
// import TileWMS from "ol/source/TileWMS";
// import VectorSource from "ol/source/Vector";
import { TileDebug, Vector as VectorSource } from "ol/source";
// import XYZ from "ol/source/XYZ";
import { Circle, Fill, Stroke, Style } from "ol/style";
import "ol/ol.css";
import styles from "./styles.module.scss";

const ROTATION = -0.19;

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
      map.getView().setRotation(ROTATION);
    }
  }
}

function mapFeatureCoordinates([x, y, h, v]: number[]) {
  return [
    [x, -y],
    [x + h, -y],
    [x + h, -y - v],
    [x, -y - v],
  ].map(([x, y]) => {
    // https://stackoverflow.com/questions/65296242/move-given-point-by-x-y-meters-openlayers
    const point = new Point(fromLonLat([20.75907447322544, 52.13477143461034]));
    const resolution = getPointResolution(
      "EPSG:3857",
      1,
      point.getCoordinates(),
    );
    point.translate(
      (x * Math.cos(ROTATION) - y * Math.sin(ROTATION)) / resolution,
      (x * Math.sin(ROTATION) + y * Math.cos(ROTATION)) / resolution,
    );
    return point.getCoordinates();
  });
}

// https://media.audi.com/is/content/audi/global/assets/dimensions/q7/Q7PA2-TFSIe-Abmessungen_5-Sitzer.pdf
// const w = 2.150;
// const w = 3.750;
const a6 = [1.886, 2.11, 4.939, 1.467]; // a6
const q7 = [1.97, 2.212, 5.072, 1.735]; // q7

export default function App() {
  const [features] = useState(() => ({
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [20.75907447322544, 52.13477143461034],
              [20.75974786143117, 52.13469118662698],
              [20.759971036190713, 52.13442983819979],
              [20.758997907993905, 52.134528896721974],
            ],
          ],
        },
      },
    ],
  }));
  const [features2] = useState(() => {
    const [x, y] = [9, 3];
    const [gw, gl, bw, bh] = [6.75, 6.6, 5.5, 2.25];
    const g = 0.48,
      s = 0.28,
      c = 0.16;

    return {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              [x + g, y + g, gl, gw],
              [x, y + g + (gw - bw) / 2, bh + g, bw],
              [9, 3, g + 6.6 + s + 1.8 + g, g + 6.75 + g],
              [
                9 + 1.2,
                3 + 3.43,
                g + 5.68 + 2.1 + 2.42 + 8.88 + g,
                g + 3.6 + 1.6 + 1.5 + g,
              ],
              [9 + 1.2, 3 + 3.43 + g + 3.6 + 1.6, g + 3.6 + g, c + 2.9 + g],
            ].map(mapFeatureCoordinates),
          },
        },
      ],
    };
  });
  const [features3] = useState(() => {
    const g = 0.48;
    const [x, y] = [9, 3];
    const [gw, gl, bw, bh] = [6.75, 6.6, 5.5, 2.25];
    const [m, s] = [0.8, 0.15];

    return {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              [x + g, y + g, gl, gw],
              ...((w, d) => [[x + g + gl - d, y + g + (gw - w) / 2, d, w]])(
                gw - 2 * 1,
                0.6,
              ),
              [x, y + g + (gw - bw) / 2, bh + g, bw],
              ...(([w, wl, l], s) => [
                [x + 2 * g, y + g + gw / 2 + s, l, wl],
                [x + 2 * g, y + g + (gw + wl - w) / 2 + s, l, w],
                [
                  x + 3 * g,
                  y + g + (gw + wl - w) / 2 + s - m,
                  l - 2 * g,
                  w + 2 * m,
                ],
              ])(a6, s - bw / 2),
              ...(([w, wl, l], s) => [
                [x + 2 * g, y + g + gw / 2 - wl + s, l, wl],
                [x + 2 * g, y + g + (gw + wl - w) / 2 - wl + s, l, w],
                [
                  x + 3 * g,
                  y + g + (gw + wl - w) / 2 - wl + s - m,
                  l - 2 * g,
                  w + 2 * m,
                ],
              ])(q7, bw / 2 - s),
            ].map(mapFeatureCoordinates),
          },
        },
      ],
    };
  });
  const [features4] = useState(() => {
    const g = 0.48;
    const [x, y] = [9, 3];
    const [gw, gl, bw, bh] = [6.75, 6.6, 5.5, 2.25];
    const [, s] = [0.8, 0.15];

    return {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              ...(([w, wl, l], s) => [
                // [x+2*g, y+g+(gw)/2+s, l, wl],
                [x + 2 * g, y + g + (gw + wl - w) / 2 + s, l, w],
                // [x+3*g, y+g+(gw+wl-w)/2+s-m, l-2*g, w+2*m],
              ])(a6, s - bw / 2),
            ].map(mapFeatureCoordinates),
          },
        },
      ],
    };
  });
  const [features5] = useState(() => {
    const g = 0.48;
    const [x, y] = [9, 3];
    const [gw, gl, bw, bh] = [6.75, 6.6, 5.5, 2.25];
    const [, s] = [0.8, 0.15];

    return {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              ...(([w, wl, l], s) => [
                // [x+2*g, y+g+(gw)/2-wl+s, l, wl],
                [x + 2 * g, y + g + (gw + wl - w) / 2 - wl + s, l, w],
                // [x+3*g, y+g+(gw+wl-w)/2-wl+s-m, l-2*g, w+2*m],
              ])(q7, bw / 2 - s),
            ].map(mapFeatureCoordinates),
          },
        },
      ],
    };
  });
  const [selectedCoord, setSelectedCoord] = useState<Coordinate>();
  const [debug, setDebug] = useState(() => false);

  // pull refs
  const mapElement = useRef(null);

  // create state ref that can be accessed in OpenLayers onclick callback function
  //  https://stackoverflow.com/a/60643670
  const mapRef = useRef<Map>();
  // const featuresLayerRef = useRef<VectorLayer<VectorSource>>();

  // initialize map on first render - logic formerly put into componentDidMount
  useEffect(() => {
    // https://gis.stackexchange.com/questions/330287/reproject-geojson-with-openlayers-5
    const source = new VectorSource({
      features: new GeoJSON({
        // dataProjection: 'EPSG:4326',
        featureProjection: "EPSG:3857",
      }).readFeatures(features),
    }) as any; // https://github.com/infra-geo-ouverte/igo2-lib/issues/1516
    const vector = new VectorLayer({
      source,
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

    const vector2 = new VectorLayer({
      source: new VectorSource({
        features: new GeoJSON({
          // dataProjection: 'EPSG:4326',
          // featureProjection: "EPSG:3857",
        }).readFeatures(features2),
      }),
      style: new Style({
        stroke: new Stroke({
          color: "blue",
          width: 1.5,
        }),
      }),
    });

    const vector3 = new VectorLayer({
      source: new VectorSource({
        features: new GeoJSON({}).readFeatures(features3),
      }),
      style: new Style({
        stroke: new Stroke({
          color: "green",
          width: 0.5,
        }),
      }),
    });

    const vector4 = new VectorLayer({
      source: new VectorSource({
        features: new GeoJSON({}).readFeatures(features4),
      }),
      style: new Style({
        stroke: new Stroke({
          color: "orange",
          width: 1.5,
        }),
      }),
    });

    const vector5 = new VectorLayer({
      source: new VectorSource({
        features: new GeoJSON({}).readFeatures(features5),
      }),
      style: new Style({
        stroke: new Stroke({
          color: "red",
          width: 1.5,
        }),
      }),
    });

    const debugLayer = new TileLayer({
      source: new TileDebug({
        // template: 'z:{z} x:{x} y:{-y}',
        // projection: vector.getSource().getProjection(),
        // tileGrid: vector.getSource().getTileGrid(),
        // zDirection: 1,
      }),
    });

    // create map
    const map = new Map({
      target: mapElement.current || undefined,
      layers: [
        // new TileLayer({
        //   source: new OSM(),
        // }),
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
        // new TileLayer({
        //   source: new TileWMS({
        //     url: "https://integracja.gugik.gov.pl/cgi-bin/KrajowaIntegracjaEwidencjiGruntow",
        //     params: {
        //       LAYERS: "dzialki,numery_dzialek,budynki",
        //       TILED: true,
        //     },
        //   }),
        // }),
        vector,
        vector2,
        vector3,
        vector4,
        vector5,
        ...(debug ? [debugLayer] : []),
        // new GraticuleLayer({
        //   // the style to use for the lines, optional.
        //   strokeStyle: new Stroke({
        //     color: 'rgba(255,120,0,0.9)',
        //     width: 1,
        //     lineDash: [0.5, 4],
        //   }),
        //   // showLabels: true,
        //   // wrapX: false,
        // }),
      ].filter(Boolean),
      view: new View({
        projection: "EPSG:3857",
        rotation: ROTATION,
        center: fromLonLat([20.7595, 52.1346]),
        zoom: 20,
      }),
      controls: defaultControls().extend([
        new RotateNorthControl(),
        new ScaleLine(),
      ]),
    });

    // https://openlayers.org/en/latest/examples/draw-and-modify-features.html
    const modify = new Modify({ source });
    map.addInteraction(modify);

    // https://tsauerwein.github.io/ol3/animation-flights/examples/draw-features.html
    const draw = new Draw({
      source,
      type: "Polygon",
    });
    map.addInteraction(draw);

    const snap = new Snap({ source });
    map.addInteraction(snap);

    // set map onclick handler
    map.on("click", handleMapClick);

    mapRef.current = map;
  }, []);

  // update map if features prop changes - logic formerly put into componentDidUpdate
  useEffect(() => {
    // if (mapRef.current && featuresLayerRef.current && features.length) {
    //   // fit map to feature extent (with 100px of padding)
    //   const source = featuresLayerRef.current.getSource();
    //   if (source) {
    //     mapRef.current.getView().fit(source.getExtent(), {
    //       padding: [100, 100, 100, 100],
    //     });
    //   }
    // }
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
      <h1>floors</h1>
      <label>
        <input
          type="checkbox"
          checked={debug}
          onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
            ({ target }) => setDebug(() => target.checked),
            [],
          )}
        />
        <span> debugLayer</span>
      </label>
      <div ref={mapElement} className={styles.Map}></div>
      <div>{JSON.stringify(selectedCoord, null, 2)}</div>
    </div>
  );
}
