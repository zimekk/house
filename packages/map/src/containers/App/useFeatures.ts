import { useState } from "react";
import { Point } from "ol/geom";
import { fromLonLat, getPointResolution } from "ol/proj";

const ROTATION = -0.19;

// https://media.audi.com/is/content/audi/global/assets/dimensions/q7/Q7PA2-TFSIe-Abmessungen_5-Sitzer.pdf
// const w = 2.150;
// const w = 3.750;
const a6 = [1.886, 2.11, 4.939, 1.467]; // a6
const q7 = [1.97, 2.212, 5.072, 1.735]; // q7

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

export default () => {
  const coordinates = [
    [0, 0, 10, 4 + 12.6 - 1.9],
    [10, 4, 2 + 4.52, 12.6],
    [10 + 2 + 4.52, 4, 10.5 - (2 + 4.52), 12.6 - 1.9],
    [10 + 10.5, 4 + 2.7, 11.3 - 4, 8],
    [10 + 10.5, 4 + 1, 11.3 - 4, 1.7],
    [10 + 10.5 + 11.3 - 4, 4 + 1, 4, 8 + 1.7],
    [10 + 10.5 + 11.3, 4 + 1, 4, 11.6],

    [10 + 10.5, 4, 11.3 + 3 + 1 + 10, 1],
    [10 + 10.5 + 11.3 + 3 + 1 + 10, 4, 4, 12.6],
    // [10+25.8,5,10,1],
    // [10+10.5+11.3+3+1+10,5,5,11.6],
  ];

  console.log(coordinates.reduce((sum, [_x, _y, w, h]) => sum + w * h, 0));

  const [features2] = useState(() => ({
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: coordinates.map(mapFeatureCoordinates),
        },
      },
    ],
  }));

  const [features3] = useState(() => ({
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [
            (([w, _, l]) => [3 + (3 - w) / 2, 0.5, w, l])(a6),
            (([w, _, l]) => [3 + 3 + (3 - w) / 2, 0.5, w, l])(q7),
            (([w, _, l]) => [10 + 2, 4 + 0.8 + (3 - w) / 2, l, w])(a6),
            (([w, _, l]) => [10 + 2, 4 + 0.8 + 3 + (3 - w) / 2, l, w])(q7),
            (([w, _, l]) => [10, 0 + (4 - w) / 2, l, w])(a6),
            (([w, _, l]) => [10 + 5.5, 0 + (4 - w) / 2, l, w])(q7),
            (([w, _, l]) => [0.6, 4 + 0.48 + (7.4 - 0.48 - w) / 2, l, w])(a6),
            (([w, _, l]) => [5.6, 4 + 0.48 + (7.4 - 0.48 - w) / 2, l, w])(q7),
            (([w, l]) => [10 + 0.8, 4 + 0.48 + (7.4 - 0.48 - w) / 2, l, w])([
              5.5, 0.48,
            ]),
            (([w, l]) => [10 + 0.8 + 0.48, 4 + 0.48, l, w])([6.64, 6.36]),
            (([w, l]) => [0, 4 + 0.48 + (7.4 - 0.48 - w) / 2, l, w])([
              4.5, 0.48,
            ]),
            (([w, l]) => [0, 4 + 0.48 + (7.4 - 0.48 - w) / 2 - w, l, w])([
              4.5, 0.48,
            ]),
            (([w, l]) => [0, 0, l, w])([1, 0.48]),
            (([w, l]) => [0, 4 + 0.48 + (7.4 - 0.48 - w) / 2, l, w])([5.5, 10]),
            (([w, l]) => [0, 4 + 7.4, l, w])([1.6, 10 + 2]),
            (([w, l]) => [0, 4 + 7.4 + 0.6, l, w])([1, 0.48]),
            (([w, l]) => [10 + 2, 4 + 7.4, l, w])([0.6, 0.48]),
            (([w, l]) => [10 + 2, 4 + 7.4 + 0.6, l, w])([1, 0.48]),
            (([w, l]) => [-0.2, 4 + 7.4 - (7.4 - 0.48 - 4.5) / 2, l, w])([
              (7.4 - 0.48 - 4.5) / 2 + 0.6,
              0.48,
            ]),
            (([w, l]) => [-0.2, 4 + 7.4 + 1.6, l, w])([5.2 - 1.6 - 1.9, 0.48]),
          ].map(mapFeatureCoordinates),
        },
      },
    ],
  }));

  const [features4] = useState(() => ({
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [
            [0, 4 + 12.6, 35 + 0.8, 10],
            [35.8, 0, 10 + 1, 25 + 1.6],
          ].map(mapFeatureCoordinates),
        },
      },
    ],
  }));

  const coordinates5 = [
    [0, 0, 10, 4 + 12.6],
    // [10, 0, 25.8, 4 + 12.6],
    // [10 + 25.8, 0, 11, 4 + 12.6],
    // [10 + 25.8 + 11, (4 + 12.6) / 2, 13, (4 + 12.6) / 2],
    [10, 0, 0.8 + 9.7, 4 + 12.6],
    [10 + 0.8 + 9.7, 5, 11.3 + 4, 11.6],
    [10 + 25.8, 5, 15, 11.6],
    [10 + 25.8 + 15, 5 + 11.6 / 2, 9, 11.6 / 2],
    [10 + 25.8 + 15 + 5.5, 5 + 11.6, 3.5, 2],
  ];

  const sum = coordinates5.reduce((sum, [_x, _y, w, h]) => sum + w * h, 0);

  console.log({
    sum,
    payment: new Intl.NumberFormat("pl-PL", {
      currency: "PLN",
      minimumFractionDigits: 2,
      style: "currency",
    }).format((Math.abs(sum - 500) / 10_000) * 174870),
  });

  const [features5] = useState(() => ({
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: coordinates5.map(mapFeatureCoordinates),
        },
      },
    ],
  }));

  return [features2, features3, features4, features5];
};
