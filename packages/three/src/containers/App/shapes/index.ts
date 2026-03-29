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

const createShape = (edges: Point[]) =>
  edges
    .reduce(
      (shape, [x, y], k) => shape[k > 0 ? "lineTo" : "moveTo"](x, y),
      new THREE.Shape(),
    )
    .closePath();

export function attic() {
  const start = [0, 0] as Point;
  const bryla = ((w, h) => rect(start, [w, h]))(20, 8);

  const sypialnia1 = ((r1) => {
    const [a, b, c, d] = inner(r1, -0.16 / 2);
    const c2 = shift(middle(a, d), [4, 0]);
    const a2 = a;
    return rect(a2, c2);
  })(inner(bryla, 0.48));

  const sypialnia3 = ((r1) => {
    const [a, b, c, d] = inner(r1, -0.16 / 2);
    const a2 = shift(middle(b, c), [-4, 0]);
    const c2 = c;
    return rect(a2, c2);
  })(inner(bryla, 0.48));

  const garderoba1 = ((r1) => {
    const [a, b, c, d] = r1;
    const a2 = b;
    const c2 = shift(b, [2, 3]);
    return rect(a2, c2);
  })(sypialnia1);

  const lazienka1 = ((r1, r2) => {
    const [a, b, c, d] = inner(r1, -0.16 / 2);
    const a2 = a;
    const c2 = shift(middle(a, d), [4, 0]);
    const v = (([_, b]) => delta(a, b))(r2);
    return ((a2, c2) => rect(a2, c2))(shift(a2, v), shift(c2, v));
  })(inner(bryla, 0.48), garderoba1);

  const lazienka2 = ((r1, r2) => {
    const [a, b, c, d] = inner(r1, -0.16 / 2);
    const a2 = shift(b, [-3, 0]);
    const c2 = middle(b, c);
    const v = [0, 0] as Point;
    return rect(shift(a2, v), shift(c2, v));
  })(inner(bryla, 0.48), garderoba1);

  const garderoba3 = ((r1) => {
    const [a, b, c, d] = r1;
    const a2 = shift(a, [-3, 0]);
    const c2 = d;
    const v = [0, 0] as Point;
    return rect(shift(a2, v), shift(c2, v));
  })(lazienka2);

  const gabinet2 = ((r1, r2) => {
    const [a, b, c, d] = r1;
    const a2 = b;
    const c2 = (([a, b, c, d]) => d)(r2);
    const v = [0, 0] as Point;
    return rect(shift(a2, v), shift(c2, v));
  })(lazienka1, garderoba3);

  const garderoba2 = mirrorv(garderoba1, center(bryla));
  const sypialnia2 = mirrorv(sypialnia1, center(bryla));

  const schody2 = ((r1) => {
    const [a, b, c, _d] = r1;
    const b2 = shift(b, [5, -2]);
    const d2 = b;
    const a2 = cross(d2, b2),
      c2 = cross(b2, d2);
    return rect(a2, c2);
  })(garderoba2);

  const shape = createShape(bryla);
  shape.holes.push(
    createShape(inner(sypialnia1, 0.16 / 2)),
    createShape(inner(sypialnia2, 0.16 / 2)),
    createShape(inner(garderoba1, 0.16 / 2)),
    createShape(inner(garderoba2, 0.16 / 2)),
    createShape(inner(lazienka1, 0.16 / 2)),
    createShape(inner(gabinet2, 0.16 / 2)),
    createShape(inner(lazienka2, 0.16 / 2)),
    createShape(inner(garderoba3, 0.16 / 2)),
    createShape(inner(sypialnia3, 0.16 / 2)),
    createShape(inner(schody2, 0.16 / 2)),
  );

  return [shape];
}

export function rooms() {
  const start = [0, 0] as Point;
  const bryla = ((w, h) => rect(start, [w, h]))(20, 8);

  const salon = ((r1) => {
    const [a, b, c, d] = inner(r1, -0.16 / 2);
    const a2 = shift(b, [-4, 2]);
    const c2 = c;
    return rect(a2, c2);
  })(inner(bryla, 0.48));

  const kuchnia = ((r1, r2) => {
    const [a, b, c, d] = inner(r1, -0.16 / 2);
    const a2 = shift(b, [-4, 0]);
    const c2 = c;
    const v = (([_a, _b, _c, c2]) => delta(c, c2))(r2);
    return ((a2, c2) => rect(a2, c2))(shift(a2, v), shift(c2, v));
  })(inner(bryla, 0.48), salon);

  const spizarnia = ((r1) => {
    const [a, b, c, d] = r1;
    const b2 = a;
    const d2 = shift(a, [-4, 3]);
    const a2 = cross(d2, b2),
      c2 = cross(b2, d2);
    return rect(a2, c2);
  })(kuchnia);

  const gabinet1 = ((r1) => {
    const [a, b, c, d] = inner(r1, -0.16 / 2);
    const b2 = shift(d, [4, -3]);
    const d2 = d;
    const a2 = cross(d2, b2),
      c2 = cross(b2, d2);
    return rect(a2, c2);
  })(inner(bryla, 0.48));

  const schody1 = ((r1, r2) => {
    const [a, b, c, _d] = r1;
    const [_a, _b, _c, d] = r2;
    const a2 = b;
    const c2 = d;
    return rect(a2, c2);
  })(gabinet1, kuchnia);

  const lazienka = ((r1, r2) => {
    const [a, _b, c, d] = r1;
    const [_a, b, _c, _d] = r2;
    const a2 = d,
      c2 = b;
    return rect(a2, c2);
  })(spizarnia, schody1);

  const garaz = ((r1, r2) => {
    const [a, b, c, _d] = inner(r1, -0.16 / 2);
    const [_a, _b, _c, d] = r2;
    const a2 = shift(a, [0, 0]);
    const c2 = d;
    return rect(a2, c2);
  })(inner(bryla, 0.48), lazienka);

  return {
    bryla,
    salon,
    kuchnia: inner(kuchnia, 0.16 / 2),
    spizarnia,
    gabinet1,
    schody1,
    lazienka,
    garaz,
  };
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

  const shape = createShape(bryla);

  shape.holes.push(
    createShape(inner(salon, 0.16 / 2)),
    createShape(kuchnia),
    createShape(inner(spizarnia, 0.16 / 2)),
    createShape(inner(gabinet1, 0.16 / 2)),
    createShape(inner(schody1, 0.16 / 2)),
    createShape(inner(lazienka, 0.16 / 2)),
    createShape(inner(garaz, 0.16 / 2)),
  );

  return [shape];
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

    return points.concat(mirrorh(points, [h / 2, 0]).reverse());
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
      .concat(mirrorh(points, [h / 2, 0]).reverse())
      .concat([[h / 2, (([a, b, c]) => 2.1 + a)(rib(h / 2))]]);
  })(20, 8);

  const shape = createShape(bryla);

  return [shape];
}
