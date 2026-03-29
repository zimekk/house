export type Point = [number, number];
export type Points = Point[];
export type Point4 = [Point, Point, Point, Point];

const alpha = (35 * Math.PI) / 180;

export const ria = (a: number) => [a, a / Math.tan(alpha), a / Math.sin(alpha)];
export const rib = (b: number) => [b * Math.tan(alpha), b, b / Math.cos(alpha)];
export const ric = (c: number) => [c * Math.sin(alpha), c * Math.cos(alpha), c];

export function center(points: Point[]): Point {
  return points.reduce(
    (center, [x2, y2]) => {
      const [x1, y1] = center;
      return [x1 + x2 / points.length, y1 + y2 / points.length];
    },
    [0, 0] as Point,
  );
}

export function cross(a: Point, b: Point): Point {
  const [ax] = a;
  const [, by] = b;

  return [ax, by];
}

export function delta(a: Point, b: Point): Point {
  const [ax, ay] = a;
  const [bx, by] = b;

  return [bx - ax, by - ay];
}

export function flipy(a: Point): Point {
  const [ax, ay] = a;

  return [ax, -ay];
}

export function inner([a, b, c, d]: Point4, m: number): Point4 {
  const [ax, ay] = a;
  const [bx, by] = b;
  const [cx, cy] = c;
  const [dx, dy] = d;

  return [
    shift(a, [ax < bx ? m : -m, ay < dy ? m : -m]),
    shift(b, [bx < ax ? m : -m, by < cy ? m : -m]),
    shift(c, [cx < dx ? m : -m, cy < by ? m : -m]),
    shift(d, [dx < cx ? m : -m, dy < ay ? m : -m]),
  ];
}

export function length(a: Point, b: Point): number {
  const [ax, ay] = a;
  const [bx, by] = b;
  const adx = Math.abs(ax - bx);
  const ady = Math.abs(ay - by);

  return Math.max(adx, ady);
}

export function meter(
  a: Point,
  b: Point,
  c: Point,
): [Point, Point, Point, Point, Point, number, number] {
  const [ax, ay] = a;
  const [bx, by] = b;
  const [cx, cy] = c;
  const mx = (bx + ax) / 2;
  const my = (by + ay) / 2;
  const acmdx = Math.abs(cx - mx);
  const acmdy = Math.abs(cy - my);

  if (acmdx > acmdy) {
    const a1: Point = [cx, ay];
    const b1: Point = [cx, by];
    const c1 = c;

    return [a, a1, b1, b, c1, Math.abs(ay - by), ay < by ? 90 : -90];
  } else {
    const a1: Point = [ax, cy];
    const b1: Point = [bx, cy];
    const c1 = c;

    return [a, a1, b1, b, c1, Math.abs(ax - bx), ax < bx ? 0 : 180];
  }
}

export function middle(a: Point, b: Point): Point {
  const [ax, ay] = a;
  const [bx, by] = b;

  return [(ax + bx) / 2, (ay + by) / 2];
}

export function mirrorh<T extends Points>(points: T, center: Point): T {
  const [x1, y1] = center;
  const r = points
    .map(([x2, y2]) => {
      const dx = x2 - x1;
      const dy = y2 - y1;
      return [x1 - dx, y2];
    })
    .reverse() as T;
  return r;
}

export function mirrorv<T extends Points>(points: T, center: Point): T {
  const [x1, y1] = center;
  const r = points
    .map(([x2, y2]) => {
      const dx = x2 - x1;
      const dy = y2 - y1;
      return [x2, y1 - dy];
    })
    .reverse() as T;
  return r;
}

export function point(a: Point, m: Point = [0, 0]) {
  let point = shift(a, m);
  return {
    current() {
      return point;
    },
    shift(m: Point) {
      point = shift(point, m);
      return point;
    },
    breakx([x, _g]: Point) {
      return [
        (point = shift(point, [0, _g])),
        (point = shift(point, [x, 0])),
        (point = shift(point, [0, -_g])),
      ];
    },
    breaky([_g, y]: Point) {
      return [
        (point = shift(point, [_g, 0])),
        (point = shift(point, [0, y])),
        (point = shift(point, [-_g, 0])),
      ];
    },
  };
}

export function rect(a: Point, b: Point): Point4 {
  return [a, cross(b, a), b, cross(a, b)];
}

export function shift(a: Point, b: Point): Point {
  const [ax, ay] = a;
  const [bx, by] = b;

  return [ax + bx, ay + by];
}

export function swap(points: Point[]): Point[] {
  return points.map(([x, y]) => [y, x]);
}
