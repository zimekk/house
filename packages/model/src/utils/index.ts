export type Point = [number, number];

export function shift(a: Point, b: Point): Point {
  const [ax, ay] = a;
  const [bx, by] = b;

  return [ax + bx, ay + by];
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

export function cross(a: Point, b: Point): Point {
  const [ax] = a;
  const [, by] = b;

  return [ax, by];
}

export function length(a: Point, b: Point): number {
  const [ax, ay] = a;
  const [bx, by] = b;
  const adx = Math.abs(ax - bx);
  const ady = Math.abs(ay - by);

  return Math.max(adx, ady);
}

export function flipy(a: Point): Point {
  const [ax, ay] = a;

  return [ax, -ay];
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

export function rect(a: Point, b: Point): Point[] {
  return [a, cross(b, a), b, cross(a, b)];
}
