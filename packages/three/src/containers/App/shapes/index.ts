import * as THREE from "three";
import {
  type Point,
  cross,
  inner,
  mirrorh,
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
    salon,
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

export function stairs() {
  const { schody1 } = rooms();

  const points = (([a, b, c, d], [p, q, k, n, sx = 1]) =>
    Array.from(Array(n))
      .reduce((result, _, _i): Point[] => {
        const i = _i + k;
        const [ax, ay] = [(i - k) * p + sx, i * q];
        return result
          .concat(result.length ? [] : [[(i - k) * p + sx, (i - 1) * q]])
          .concat([
            [ax, ay],
            [ax, ay + q],
          ]);
      }, [])
      .concat([((i) => [(i - k + 1) * p + sx, i * q])(n + k)])
      .map((a: Point) => shift(a, cross(d, [0, 0]))))(
    inner(schody1, 0.16 / 2),
    [0.28, 0.1725, 2, 15],
  );

  return createShapeWithHoles(points, []);
}

export function stairs1() {
  const { schody1 } = rooms();

  const points = (([a, b, c, d], [p, q, k, n, sx = 0]) =>
    Array.from(Array(n))
      .reduce((result, _, _i): Point[] => {
        const i = _i + k;
        const [ax, ay] = [(i - k) * p + sx, i * q];
        return result
          .concat(result.length ? [] : [[(n - 1) * p + sx + 1, i * q]])
          .concat([
            [ax, ay],
            [ax, ay + q],
          ]);
      }, [])
      .concat([((i) => [(i - k - 1) * p + sx + 1, i * q])(n + k)])
      .map((a: Point) => shift(a, cross([d[1] - 1.28, d[0]], [0, 0]))))(
    inner(schody1, 0.16 / 2),
    [0.28, 0.1725, 0, 2],
  );

  return createShapeWithHoles(points, []);
}

export function stairs2() {
  const { schody1 } = rooms();

  const points = (([a, b, c, d], [p, q, k, n, sx = 0]) =>
    Array.from(Array(n))
      .reduce((result, _, _i): Point[] => {
        const i = _i + k;
        const [ax, ay] = [(_i ? (i - k - 1) * p : (i - k) * p + 1) + sx, i * q];
        return result
          .concat(result.length ? [] : [[(i - k + 1 - 1) * p + sx, i * q]])
          .concat([
            [ax, ay],
            [ax, ay + q],
          ]);
      }, [])
      .concat([((i) => [(i - k + 1 - 1) * p + sx, i * q])(n + k)])
      .map((a: Point) => shift(a, [8 - 0.48 - 1, 0])))(
    inner(schody1, 0.16 / 2),
    [-0.28, 0.1725, 2 + 15, 3],
  );

  return createShapeWithHoles(points, []);
}
