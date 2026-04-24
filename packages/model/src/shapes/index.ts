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
} from "../utils";

export function windows() {
  return [
    [0.6, 0, 0],
    [6 * 0.6, 0.6, 0.9],
  ];
}

export function cabinets1() {
  // return [[0.6, 2.7], [0.6], [0.6], [0.6], [0.6], [0.6], [0.6], [0.6, 2.7]];
  // return [[0.6, 2.7], [0.6], [0.8], [0.8], [0.8], [0.6], [0.6, 2.7]];
  return [
    [0.7, 2.7],
    [0.6],
    [0.6],
    [0.6],
    [0.8],
    [0.6],
    [0.7, 2.7],
    [0.2, 2.8, 0.6, 0],
  ];
}

export function cabinets1a() {
  // return [[0.6, 2.7], [0.6], [0.6], [0.6], [0.6], [0.6], [0.6], [0.6, 2.7]];
  // return [[0.6, 2.7], [0.6], [0.8], [0.8], [0.8], [0.6], [0.6, 2.7]];
  return [[0.7], [0.6], [0.6], [0.6], [0.8], [0.6], [0.7, 2]];
}

export function cabinets1b() {
  // return [[0.6, 2.7], [0.6], [0.6], [0.6], [0.6], [0.6], [0.6], [0.6, 2.7]];
  // return [[0.6, 2.7], [0.6], [0.8], [0.8], [0.8], [0.6], [0.6, 2.7]];
  return [[0.7], [4 * 0.6 + 1 * 0.8, 0]];
}

export function cabinets1c() {
  // return [[0.6, 2.7], [0.6], [0.6], [0.6], [0.6], [0.6], [0.6], [0.6, 2.7]];
  // return [[0.6, 2.7], [0.6], [0.8], [0.8], [0.8], [0.6], [0.6, 2.7]];
  return [[0.7], [4 * 0.6 + 1 * 0.8, 0, 0], [0.7]];
}

export function cabinets2() {
  return [[0.6], [0.6, 0], [0.6, 0], [0.6]];
}

export function cabinets2a() {
  return [
    [0.6, 0.6, 0.62, 0.1],
    [2 * 0.6, 0, 0],
    [0.6, 2],
  ];
}

export function cabinets2b() {
  return [
    [0.6, 0.6, 0.62, 0.1 + 0.6],
    [3 * 0.6, 0, 0],
  ];
}

export function cabinets2c() {
  return [[0.6, 0.4, 0.62, 0.1 + 0.6 + 0.6], [2 * 0.6, 0, 0], [0.6]];
}

export function cabinets3() {
  return [
    [0.6, 0],
    [0.6, 0],
  ];
}

export function rooms() {
  const start = [0, 0] as Point;
  const bryla = ((w, h) => rect(start, [w, h]))(20, 8);

  const salon = ((r1) => {
    const [a, b, c, d] = inner(r1, 0);
    const a2 = shift(b, [-4, 2]);
    const c2 = c;
    return rect(a2, c2);
  })(inner(bryla, 0.48));

  const kuchnia = ((r1, r2) => {
    const [a, b, c, d] = inner(r1, 0);
    const a2 = shift(b, [-4.8, 0]);
    const c2 = c;
    const v = (([_a, _b, _c, c2]) => delta(c, c2))(r2);
    return ((a2, c2) => rect(a2, c2))(shift(a2, v), shift(c2, v));
  })(inner(bryla, 0.48), salon);

  const spizarnia = ((r1) => {
    const [a, b, c, d] = inner(r1, -0.16 / 2);
    const b2 = a;
    const d2 = shift(a, [-2.5, 1.8]);
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
    const [_a, _b, _c, d] = inner(r2, -0.16 / 2);
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
    const [a, b, c, d] = r1;
    const b2 = shift(c, [5, -2]);
    const d2 = c;
    const a2 = cross(d2, b2),
      c2 = cross(b2, d2);
    return rect(a2, c2);
  })(garderoba2);

  return {
    bryla,
    // ground
    salon,
    kuchnia,
    spizarnia,
    gabinet1,
    schody1,
    lazienka,
    garaz,
    // attic
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
  };
}
