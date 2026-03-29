import * as THREE from "three";
import {
  type Point,
  center,
  cross,
  delta,
  inner,
  middle,
  mirrorh,
  mirrorv,
  rect,
  ria,
  rib,
  shift,
} from "@dev/model/utils";
import { rooms } from "@dev/model/shapes";

export * from "@dev/model/shapes";

const createShape = (edges: Point[]) =>
  edges
    .reduce(
      (shape, [x, y], k) => shape[k > 0 ? "lineTo" : "moveTo"](x, y),
      new THREE.Shape(),
    )
    .closePath();

function createShapeWithHoles(edges: Point[], holes: Point[][]) {
  const shape = createShape(edges);

  shape.holes.push(...holes.map((hole) => createShape(hole)));
  return [shape];
}

export function attic() {
  const {
    bryla,
    sypialnia1,
    sypialnia2,
    garderoba1,
    garderoba2,
    lazienka1,
    gabinet2,
    lazienka2,
    garderoba3,
    sypialnia3,
    schody2,
  } = rooms();

  return createShapeWithHoles(bryla, [
    inner(sypialnia1, 0.16 / 2),
    inner(sypialnia2, 0.16 / 2),
    inner(garderoba1, 0.16 / 2),
    inner(garderoba2, 0.16 / 2),
    inner(lazienka1, 0.16 / 2),
    inner(gabinet2, 0.16 / 2),
    inner(lazienka2, 0.16 / 2),
    inner(garderoba3, 0.16 / 2),
    inner(sypialnia3, 0.16 / 2),
    inner(schody2, 0.16 / 2),
  ]);
}

export function ground() {
  const {
    bryla,
    salon,
    kuchnia,
    spizarnia,
    gabinet1,
    schody1,
    lazienka,
    garaz,
  } = rooms();

  return createShapeWithHoles(bryla, [
    inner(salon, 0.16 / 2),
    kuchnia,
    inner(spizarnia, 0.16 / 2),
    inner(gabinet1, 0.16 / 2),
    inner(schody1, 0.16 / 2),
    inner(lazienka, 0.16 / 2),
    inner(garaz, 0.16 / 2),
  ]);
}

export function gable() {
  const start = [0, 0] as Point;
  const bryla = ((w, h): Point[] => {
    const points: Point[] = [
      [(([a, b, c]) => 0.48 + b)(ria(2.8 - 2.1)), 2.8],
      [0.48, 2.1],
      [-1, 2.1],
      [-1, 3],
    ];

    return points.concat(mirrorh(points, [h / 2, 0]));
  })(20, 8);

  const shape = createShape(bryla);

  return [shape];
}

export function roof() {
  const start = [0, 0] as Point;
  const bryla = ((w, h): Point[] => {
    const points: Point[] = [
      [0, 2.1],
      [0.48, 2.1],
    ];

    return points
      .concat([[h / 2, (([a, b, c]) => 2.1 + a)(rib(h / 2 - 0.48))]])
      .concat(mirrorh(points, [h / 2, 0]))
      .concat([[h / 2, (([a, b, c]) => 2.1 + a)(rib(h / 2))]]);
  })(20, 8);

  const shape = createShape(bryla);

  return [shape];
}
