export type Point = [number, number];

const styles = {
  none: {
    fill: "transparent",
    stroke: "black",
    strokeWidth: 0.1,
  },
  line: {
    fill: "transparent",
    stroke: "black",
    strokeWidth: 0.01,
  },
  area: {
    fill: "violet",
    stroke: "black",
    strokeWidth: 0.01,
    opacity: 0.5,
  },
  room: {
    fill: "white",
    stroke: "black",
    strokeWidth: 0.01,
    opacity: 0.5,
  },
  blue: {
    filter: `url(#texture-blue)`,
    fill: "white",
    stroke: "black",
    strokeWidth: 0.1,
  },
  gray: {
    filter: `url(#texture-gray)`,
    fill: "white",
    stroke: "black",
    strokeWidth: 0.1,
  },
  roof: {
    filter: `url(#texture-roof)`,
    fill: "white",
    stroke: "black",
    strokeWidth: 0.1,
  },
  slab: {
    filter: `url(#texture-slab)`,
    fill: "white",
    stroke: "black",
    strokeWidth: 0.1,
  },
  wall: {
    filter: `url(#texture-wall)`,
    fill: "white",
    stroke: "black",
    strokeWidth: 0.1,
  },
  wood: {
    filter: `url(#texture-wood)`,
    fill: "white",
    stroke: "black",
    strokeWidth: 0.1,
  },
};

export function shift(a: Point, b: Point): Point {
  const [ax, ay] = a;
  const [bx, by] = b;

  return [ax + bx, ay + by];
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

export function point(a: Point) {
  let point = a;
  return {
    current() {
      return point;
    },
    shift(m: Point) {
      point = shift(point, m);
      return point;
    },
  };
}

function rect(a: Point, b: Point): Point[] {
  return [a, cross(b, a), b, cross(a, b)];
}

function rot90<T extends Record<string, Point>>(points: T) {
  return Object.entries(points).reduce(
    (points, [n, [x, y]]) =>
      Object.assign(points, {
        [n]: [-y, x],
      }),
    {} as T,
  );
}

function rot180<T extends Record<string, Point>>(points: T) {
  return Object.entries(points).reduce(
    (points, [n, [x, y]]) =>
      Object.assign(points, {
        [n]: [-x, y],
      }),
    {} as T,
  );
}

function rot270<T extends Record<string, Point>>(points: T) {
  return Object.entries(points).reduce(
    (points, [n, [x, y]]) =>
      Object.assign(points, {
        [n]: [y, x],
      }),
    {} as T,
  );
}

const alpha = (35 * Math.PI) / 180;

export const ria = (a: number) => [a, a / Math.tan(alpha), a / Math.sin(alpha)];
export const rib = (b: number) => [b * Math.tan(alpha), b, b / Math.cos(alpha)];
export const ric = (c: number) => [c * Math.sin(alpha), c * Math.cos(alpha), c];

class Model {
  pointsA() {
    return { ...this.points(), ...this.pointsH() };
  }
  pointsB() {
    return { ...rot90(this.points()), ...this.pointsH() };
  }
  pointsC() {
    return { ...rot180(this.points()), ...this.pointsH() };
  }
  pointsD() {
    return { ...rot270(this.points()), ...this.pointsH() };
  }
  pointsH() {
    const z: Point = [0, 0];
    const h = 2.8;
    const k = 2.5;
    const h_0 = cross(z, [0, -0.3]),
      h00 = z,
      h01 = cross(z, [0, h]),
      h10 = cross(z, [0, h + 0.65]),
      h11 = cross(z, [0, h + 0.65 + h]),
      d00 = cross(z, [0, h + 0.65 + k]),
      d01 = (([a]) => cross(z, [0, h + 0.65 + k + a]))(rib(4)),
      _ = z;

    return {
      h_0,
      h00,
      h01,
      h10,
      h11,
      d00,
      d01,
    };
  }
  points() {
    const [_g, _s, _d] = [0.48, 0.24, 0.16];
    const [dn, de, ds, dw] = [0, -0.2, -0.1, 0.2];
    const [ge, gs, gw] = [0, 0.1, 0];
    const [sm] = [0];

    const z: Point = [0, 0];

    const a = z,
      b = shift(z, [1.6 + 5.9 + de, 0]),
      c = shift(z, [1.6 + 5.9 + de, 2 - sm]),
      d = shift(z, [1.6 + 5.9 + de + 4, 2 - sm]),
      e = shift(z, [1.6 + 5.9 + de + 4, 8]),
      f = shift(z, [-2.6 - 5.9 + 4.5 + ge, 8]),
      g = shift(z, [-2.6 - 5.9 + 4.5 + ge, 8 + 1.9 + ds + gs]),
      h = shift(z, [-2.6 - 5.9 - gw, 8 + 1.9 + ds + gs]),
      i = shift(z, [-2.6 - 5.9 - gw, -2.8 + 7.5]),
      j = shift(z, [-2.6 - 5.9 - 1 - dw, -2.8 + 7.5]),
      k = shift(z, [-2.6 - 5.9 - 1 - dw, -2.7 - dn + _g]),
      l = shift(z, [-2.6 - 5.9 - 1 - dw - 0.8, -2.7 - dn + _g]),
      m = shift(z, [-2.6 - 5.9 - 1 - dw - 0.8, -2.7 - dn]),
      n = shift(z, [0, -2.7 - dn]),
      o = shift(d, [0, -2 - 1.7]),
      p = shift(o, [3, 0]),
      q = shift(o, [3, _g]),
      r = shift(o, [0, _g]),
      s = shift(e, [0, 1.9]),
      t = shift(s, [4, 0]), // ?
      // t = shift(s, [4,1]),
      // m0 = cross(j,a),
      // a1 = cross(j,a),
      // b1 = cross(e,a),
      // c1=a,
      // d1=cross(h,e),
      _ = z;
    return {
      a,
      b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
    };
  }
}

const model = new Model();

const line = (p: Point) => `L${p.join(" ")}`;
const move = (p: Point) => `M${p.join(" ")}`;

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

function Meter({ points, anchor }: { points: [Point, Point]; anchor: Point }) {
  const fontSize = 0.4;
  const [a, b] = points;
  const c = anchor;
  const [a0, a1, b1, b0, c1, t, r] = meter(a, b, c);

  return (
    <g>
      <path
        d={[a0, a1].map((p, i) => (i > 0 ? line(p) : move(p))).join(" ")}
        style={styles.line}
      />
      <path
        d={[a1, b1].map((p, i) => (i > 0 ? line(p) : move(p))).join(" ")}
        style={styles.none}
      />
      <path
        d={[b1, b0].map((p, i) => (i > 0 ? line(p) : move(p))).join(" ")}
        style={styles.line}
      />
      <g transform={`translate(${c1.join(" ")})`}>
        <g transform={`rotate(${r})`}>
          <text style={{ fontSize }} textAnchor="middle" y={-0.2}>
            {`${Math.round(1000 * t) / 1000}`}
          </text>
        </g>
      </g>
    </g>
  );
}

export default function Plan() {
  const fontSize = 0.4;

  return (
    <g transform={`scale(${25}) translate(${[14, 4].join(",")})`}>
      {(({
        a,
        b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        d00,
        h11,
      }) => (
        <g>
          <path
            d={[a, b, c, d, e, f, g, h, i, j, k, l, m, n]
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.slab}
          />
          <path
            d={[c, cross(c, o), o, r, q, p, cross(t, p), t, cross(s, t), d]
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.wood}
          />
          <path
            d={rect(o, q)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.slab}
          />
          <path
            d={[cross(b, p), p, cross(p, s), s, d, c]
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.none}
          />

          <path
            d={[
              cross(h, a),
              cross(d, b),
              shift(cross(d, b), [0, 4]),
              shift(cross(h, a), [0, 4]),
            ]
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .concat(
                [
                  shift(cross(h, f), [0, -4]),
                  shift(e, [0, -4]),
                  e,
                  cross(h, f),
                ].map((p, i) => (i > 0 ? line(p) : move(p))),
              )
              .concat("z")
              .join(" ")}
            opacity={0.5}
            style={styles.roof}
          />

          <path
            d={((p, [_, b]) =>
              rect(shift(p, [-0.48, -b]), shift(p, [2.1 + 0.48, 0])))(
              shift(f, [1.72, 0]),
              ria(length(d00, h11) + 0.65),
            )
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.slab}
          />

          <path
            d={((p, [_, b]) =>
              rect(
                shift(p, [0.48, b]),
                shift(p, [
                  -2.7 - 0.16 - 1.3 - 0.16 - 1.6 - 0.16 - 2.2 - 0.48,
                  0,
                ]),
              ))(
              shift(cross(d, b), [-0.48 - 2.7 - 0.16, 0]),
              ria(length(d00, h11) + 0.65),
            )
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.slab}
          />

          {(([a1, b1, c1, d1]) => (
            <g>
              {/* <path
            d={[a1,b1,c1,d1]
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.area}
          /> */}
              {/* 
{(([a1,c1]) => (
(([b1,d1]) => (
          <path
            d={[a1,b1,c1,d1]
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.room}
          />
))([cross(a1,c1), cross(c1,a1)])
))([a1, shift(a1, [3,4])])} */}

              {((tl, tr, br, bl) => (
                <g>
                  {(([a2, c2]) => (
                    <path
                      d={rect(a2, c2)
                        .map((p, i) => (i > 0 ? line(p) : move(p)))
                        .concat("z")
                        .join(" ")}
                      style={styles.room}
                    />
                  ))([
                    bl.current(),
                    shift(bl.shift([3.9, 0]), [0, -3.44]),
                    bl.shift([0.16, 0]),
                  ])}
                  {(([a2, c2]) => (
                    <path
                      d={rect(a2, c2)
                        .map((p, i) => (i > 0 ? line(p) : move(p)))
                        .concat("z")
                        .join(" ")}
                      style={styles.room}
                    />
                  ))([
                    bl.current(),
                    shift(bl.shift([1.38, 0]), [0, -2.04]),
                    bl.shift([0.16, 0]),
                  ])}
                  {(([a2, c2]) => (
                    <g>
                      <path
                        d={rect(a2, c2)
                          .map((p, i) => (i > 0 ? line(p) : move(p)))
                          .concat("z")
                          .join(" ")}
                        style={styles.room}
                      />
                      <path
                        d={rect(
                          shift(cross(a2, c2), [
                            -1.38 - 0.16,
                            (2.64 - 0.16) / 2,
                          ]),
                          shift(cross(a2, c2), [0, -(2.64 + 0.16) / 2]),
                        )
                          .map((p, i) => (i > 0 ? line(p) : move(p)))
                          .concat("z")
                          .join(" ")}
                        style={styles.room}
                      />
                    </g>
                  ))([bl.current(), shift(bl.shift([2.1, -3.44]), [0, 0])])}

                  {(([a2, c2]) => (
                    <path
                      d={rect(a2, c2)
                        .map((p, i) => (i > 0 ? line(p) : move(p)))
                        .concat("z")
                        .join(" ")}
                      style={styles.room}
                    />
                  ))([
                    br.current(),
                    shift(br.shift([-4.16, 0]), [0, -3.44]),
                    br.shift([-0.16, 0]),
                  ])}

                  {(([a2, c2]) => (
                    <path
                      d={rect(a2, c2)
                        .map((p, i) => (i > 0 ? line(p) : move(p)))
                        .concat("z")
                        .join(" ")}
                      style={styles.room}
                    />
                  ))([
                    tl.current(),
                    shift(tl.shift([3.9, 0]), [0, 3.44]),
                    tl.shift([0.16, 0]),
                  ])}
                  {(([a2, c2]) => (
                    <path
                      d={rect(a2, c2)
                        .map((p, i) => (i > 0 ? line(p) : move(p)))
                        .concat("z")
                        .join(" ")}
                      style={styles.room}
                    />
                  ))([
                    tl.current(),
                    shift(tl.shift([1.38, 0]), [0, 2.04]),
                    tl.shift([0.16, 0]),
                  ])}

                  {(([a2, c2]) => (
                    <g>
                      <path
                        d={rect(a2, shift(c2, [-0.7, -1.94]))
                          .map((p, i) => (i > 0 ? line(p) : move(p)))
                          .concat("z")
                          .join(" ")}
                        style={styles.room}
                      />
                      <path
                        d={rect(shift(a2, [0, 1.5]), c2)
                          .map((p, i) => (i > 0 ? line(p) : move(p)))
                          .concat("z")
                          .join(" ")}
                        style={styles.room}
                      />
                    </g>
                  ))([
                    tr.current(),
                    shift(tr.shift([-2, 0]), [0, 3.44]),
                    tr.shift([-0.16, 0]),
                  ])}
                  {(([a2, c2]) => (
                    <g>
                      <path
                        d={rect(shift(a2, [-0.7, 0]), shift(c2, [0, -1.78]))
                          .map((p, i) => (i > 0 ? line(p) : move(p)))
                          .concat("z")
                          .join(" ")}
                        style={styles.room}
                      />
                      <path
                        d={rect(shift(a2, [0, 1.66]), c2)
                          .map((p, i) => (i > 0 ? line(p) : move(p)))
                          .concat("z")
                          .join(" ")}
                        style={styles.room}
                      />
                    </g>
                  ))([
                    tr.current(),
                    shift(tr.shift([-2, 0]), [0, 1.66 + 1.78]),
                    tr.shift([-0.16, 0]),
                  ])}
                  {(([a2, c2]) => (
                    <path
                      d={rect(a2, c2)
                        .map((p, i) => (i > 0 ? line(p) : move(p)))
                        .concat("z")
                        .join(" ")}
                      style={styles.room}
                    />
                  ))([
                    tr.current(),
                    shift(tr.shift([-2.7, 0]), [0, 3.44]),
                    tr.shift([-0.16, 0]),
                  ])}
                  {(([a2, c2]) => (
                    <path
                      d={rect(a2, c2)
                        .map((p, i) => (i > 0 ? line(p) : move(p)))
                        .concat("z")
                        .join(" ")}
                      style={styles.room}
                    />
                  ))([
                    tr.current(),
                    shift(tr.shift([-1.6, 0]), [0, 3.44]),
                    tr.shift([-0.16, 0]),
                  ])}
                  {(([a2, c2]) => (
                    <path
                      d={rect(a2, c2)
                        .map((p, i) => (i > 0 ? line(p) : move(p)))
                        .concat("z")
                        .join(" ")}
                      style={styles.room}
                    />
                  ))([
                    tr.current(),
                    shift(tr.shift([-2.2, 0]), [0, 3.44]),
                    tr.shift([-0.16, 0]),
                  ])}

                  {(([a2, c2]) => (
                    <path
                      d={rect(a2, c2)
                        .map((p, i) => (i > 0 ? line(p) : move(p)))
                        .concat("z")
                        .join(" ")}
                      style={styles.room}
                    />
                  ))([tl.current(), shift(tr.current(), [0, 3.6])])}

                  {(([a2, c2]) => (
                    <path
                      d={rect(a2, c2)
                        .map((p, i) => (i > 0 ? line(p) : move(p)))
                        .concat("z")
                        .join(" ")}
                      style={styles.room}
                    />
                  ))([bl.current(), shift(br.current(), [0, 0])])}
                </g>
              ))(
                point(shift(a1, [0.48, 0.48])),
                point(shift(b1, [-0.48, 0.48])),
                point(shift(c1, [-0.48, -0.48])),
                point(shift(d1, [0.48, -0.48])),
              )}
            </g>
          ))(rect(cross(h, a), e))}

          <Meter
            points={[j, l]}
            anchor={shift(middle(cross(l, j), l), [10.5 - 11.2, 0])}
          />
          <Meter
            points={[h, i]}
            anchor={shift(middle(cross(i, h), i), [10.5 - 11.2 - 2, 0])}
          />
          <Meter
            points={[h, m]}
            anchor={shift(middle(cross(m, h), m), [10.5 - 11.2 - 1.6, 0])}
          />
          <Meter points={[f, h]} anchor={shift(middle(f, g), [0.4, 0])} />
          <Meter points={[m, n]} anchor={shift(middle(m, n), [0, -0.4])} />
          <Meter points={[r, p]} anchor={shift(middle(o, p), [0, -0.4])} />
          <Meter points={[t, s]} anchor={shift(middle(t, s), [0, 0.4])} />
          {Object.entries({
            a,
            b,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
          }).map(([l, [x, y]]) => (
            <text key={l} style={{ fontSize }} x={x} y={y}>
              {l}
            </text>
          ))}
        </g>
      ))(model.pointsA())}

      {/* AY */}
      {(({
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        o,
        p,
        s,
        t,
        h_0,
        h00,
        h01,
        h10,
        h11,
        d00,
        d01,
      }) => (
        <g transform={`translate(${[0, 20].join(",")})`}>
          {[
            [l, g],
            [f, e],
            [s, t],
          ].map(([a, b], i) => (
            <path
              key={i}
              d={rect(cross(a, h_0), cross(b, h00))
                .map(flipy)
                .map((p, i) => (i > 0 ? line(p) : move(p)))
                .concat("z")
                .join(" ")}
              style={styles.slab}
            />
          ))}
          {[
            [l, k],
            /*[j, i],[h,g],[f,e], */ [o, p],
          ].map(([a, b], i) => (
            <path
              key={i}
              d={rect(cross(a, h00), cross(b, h01))
                .map(flipy)
                .map((p, i) => (i > 0 ? line(p) : move(p)))
                .concat("z")
                .join(" ")}
              style={styles.wall}
            />
          ))}
          <path
            d={rect(cross(i, h00), cross(j, h01))
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.wall}
          />
          {[/*[l,g], [f,e], */ [o, p]].map(([a, b], i) => (
            <path
              key={i}
              d={rect(cross(a, h01), cross(b, h10))
                .map(flipy)
                .map((p, i) => (i > 0 ? line(p) : move(p)))
                .concat("z")
                .join(" ")}
              style={styles.wall}
            />
          ))}

          <path
            d={[
              cross(l, h10),
              cross(g, h10),
              cross(g, h00),
              cross(h, h00),
              cross(h, h01),
              cross(l, h01),
            ]
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.wall}
          />
          {/* <path
            d={rect(cross(shift(g, [-.48, 0]), h00), cross(h, h01))
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.wood}
          /> */}
          <path
            d={[cross(h, d01), cross(e, d01), cross(e, d00), cross(h, d00)]
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.roof}
          />
          <path
            d={[
              cross(h, d00),
              cross(shift(f, [1.72 - 0.48, 0]), d00),
              cross(shift(f, [1.72 - 0.48, 0]), shift(h11, [0, 0.65])),
              cross(shift(f, [1.72 + 2.1 + 0.48, 0]), shift(h11, [0, 0.65])),
              cross(shift(f, [1.72 + 2.1 + 0.48, 0]), d00),
              cross(e, d00),
              cross(e, h00),
              cross(f, h00),
              cross(f, h10),
              cross(h, h10),
            ]
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.wall}
          />
          <path
            d={rect(
              cross(shift(e, [0, 0]), h01),
              cross(shift(e, [-0.48, 0]), h00),
            )
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.slab}
          />
          {[2, 2]
            .reduce((list, a, index) => list.concat(a + list[index]), [0.48])
            .map(
              (w, index, list) =>
                index > 0 && (
                  <path
                    key={index}
                    d={rect(
                      cross(shift(e, [-list[index - 1], 0]), h01),
                      cross(shift(e, [-w, 0]), h00),
                    )
                      .map(flipy)
                      .map((p, i) => (i > 0 ? line(p) : move(p)))
                      .concat("z")
                      .join(" ")}
                    style={styles.blue}
                  />
                ),
            )}
          {/* <path
            d={rect(
              cross(shift(e, [-0.48 - 2, 0]), h01),
              cross(shift(e, [-0.48, 0]), h00),
            )
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.blue}
          />
          <path
            d={rect(
              cross(shift(e, [-0.48 - 2 - 2, 0]), h01),
              cross(shift(e, [-0.48 - 2, 0]), h00),
            )
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.blue}
          /> */}
          <path
            d={rect(
              cross(shift(e, [-0.48 - 4, 0]), h01),
              cross(shift(e, [-0.48 - 4 - 0.48, 0]), h00),
            )
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.slab}
          />
          {[2, 2]
            .reduce(
              (list, a, index) => list.concat(a + list[index]),
              [0.48 + 4 + 0.48],
            )
            .map(
              (w, index, list) =>
                index > 0 && (
                  <path
                    key={index}
                    d={rect(
                      cross(shift(e, [-list[index - 1], 0]), h01),
                      cross(shift(e, [-w, 0]), h00),
                    )
                      .map(flipy)
                      .map((p, i) => (i > 0 ? line(p) : move(p)))
                      .concat("z")
                      .join(" ")}
                    style={styles.blue}
                  />
                ),
            )}
          {/* <path
            d={rect(
              cross(shift(e, [-0.48 - 2 - 2 - 0.48 - 2, 0]), h01),
              cross(shift(e, [-0.48 - 2 - 2 - 0.48, 0]), h00),
            )
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.blue}
          />
          <path
            d={rect(
              cross(shift(e, [-0.48 - 2 - 2 - 0.48 - 2 - 2, 0]), h01),
              cross(shift(e, [-0.48 - 2 - 2 - 0.48 - 2, 0]), h00),
            )
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.blue}
          /> */}
          <path
            d={rect(
              cross(shift(f, [1.72, 0]), h01),
              cross(shift(f, [1.72 + 2.1, 0]), h00),
            )
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.blue}
          />
          {/* <path
            d={rect(
              cross(shift(f, [1.72, 0]), h01),
              cross(shift(f, [1.72 + 2.1, 0]), h10),
            )
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.slab}
          /> */}
          <path
            d={rect(
              cross(shift(f, [1.72, 0]), h11),
              cross(shift(f, [1.72 + 2.1, 0]), h10),
            )
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.blue}
          />
          <path
            d={rect(
              cross(shift(f, [1.72, 0]), shift(h11, [0, 0.65])),
              cross(shift(f, [1.72 + 2.1, 0]), h11),
            )
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.slab}
          />
          <Meter
            points={[flipy(h00), flipy(h01)]}
            anchor={shift(middle(flipy(h00), flipy(h10)), [-11.2, 0])}
          />
          <Meter
            points={[flipy(h00), flipy(h10)]}
            anchor={shift(middle(flipy(h00), flipy(h10)), [-11.2 - 0.8, 0])}
          />
          <Meter
            points={[flipy(h00), flipy(d01)]}
            anchor={shift(middle(flipy(h00), flipy(d01)), [-11.2 - 1.6, 0])}
          />
          {/* {[[h,e]].map(([a,b]) => (
        <path
          d={rect(cross(a,h10), cross(b,h11)).map(flipy).map((p, i) => i > 0 ? line(p) : move(p)).concat('z').join(' ')}
          fill="transparent"
          stroke="orange"
          strokeWidth={.1}
        />
            ))}
{Object.entries({h_0,h00,h01,h10,h11}).map(([l,p]) => (([x,y]) => (
  (
  <text key={l} style={{fontSize}} x={x} y={y}>{l}</text>
)
))((flipy(p))))} */}
        </g>
      ))(model.pointsA())}

      {/* BY */}
      {(({
        b,
        c,
        d,
        e,
        g,
        n,
        o,
        p,
        r,
        s,
        t,
        h_0,
        h00,
        h01,
        h10,
        h11,
        d00,
        d01,
      }) => (
        <g transform={`translate(${[13, 30].join(",")})`}>
          {[
            [g, n],
            [t, p],
          ].map(([a, b], i) => (
            <path
              key={i}
              d={rect(cross(a, h_0), cross(b, h00))
                .map(flipy)
                .map((p, i) => (i > 0 ? line(p) : move(p)))
                .concat("z")
                .join(" ")}
              style={styles.slab}
            />
          ))}
          <path
            d={[cross(g, h10), cross(n, h10), cross(n, h00), cross(g, h00)]
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.wall}
          />
          {[
            /*[g,f], */ [e, d],
            [c, b] /*,[a,n], [q,p]*/,
          ].map(([a, b], i) => (
            <path
              key={i}
              d={rect(cross(a, h00), cross(b, h01))
                .map(flipy)
                .map((p, i) => (i > 0 ? line(p) : move(p)))
                .concat("z")
                .join(" ")}
              style={styles.wall}
            />
          ))}
          <path
            d={rect(
              cross(shift(e, [0, 0]), h01),
              cross(shift(e, [0.48, 0]), h00),
            )
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.slab}
          />
          {[2, 2]
            .reduce((list, a, index) => list.concat(a + list[index]), [0.48])
            .map(
              (w, index, list) =>
                index > 0 && (
                  <path
                    key={index}
                    d={rect(
                      cross(shift(e, [list[index - 1], 0]), h01),
                      cross(shift(e, [w, 0]), h00),
                    )
                      .map(flipy)
                      .map((p, i) => (i > 0 ? line(p) : move(p)))
                      .concat("z")
                      .join(" ")}
                    style={styles.blue}
                  />
                ),
            )}
          <path
            d={rect(
              cross(shift(d, [0, 0]), h01),
              cross(shift(e, [0.48 + 4, 0]), h00),
            )
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.wood}
          />
          {/* <path
            d={rect(
              cross(shift(e, [0.48, 0]), h01),
              cross(shift(e, [0.48 + 2, 0]), h00),
            )
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.blue}
          />
          <path
            d={rect(
              cross(shift(e, [0.48 + 2, 0]), h01),
              cross(shift(e, [0.48 + 2 + 2, 0]), h00),
            )
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.blue}
          />
          <path
            d={rect(
              cross(shift(e, [0.48 + 2, 0]), h01),
              cross(shift(e, [0.48 + 2 + 2, 0]), h00),
            )
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.blue}
          /> */}
          <path
            d={rect(
              cross(shift(c, [0, 0]), h01),
              cross(shift(c, [0.8, 0]), h00),
            )
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.blue}
          />
          <path
            d={rect(
              cross(shift(n, [-0.48 - 0.2, 0]), h01),
              cross(shift(n, [-0.48 - 0.2 - 0.8, 0]), h00),
            )
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.blue}
          />
          {/* {[[g,n],[s,p]].map(([a,b]) => (
        <path
          d={rect(cross(a,h01), cross(b,h10)).map(flipy).map((p, i) => i > 0 ? line(p) : move(p)).concat('z').join(' ')}
          fill="transparent"
          stroke="orange"
          strokeWidth={.1}
        />
            ))} */}
          <path
            d={[
              cross(s, h10),
              cross(o, h10),
              cross(o, h00),
              cross(r, h00),
              cross(r, h01),
              cross(s, h01),
            ]
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.wall}
          />
          {/* {[[e,b]].map(([a,b]) => (
        <path
          d={rect(cross(a,h10), cross(b,h11)).map(flipy).map((p, i) => i > 0 ? line(p) : move(p)).concat('z').join(' ')}
          fill="transparent"
          stroke="orange"
          strokeWidth={.1}
        />
            ))} */}
          <path
            d={rect(cross(e, shift(h11, [0, 0.65])), cross(b, h10))
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.wall}
          />
          <path
            d={[
              cross(e, d00),
              cross(middle(e, b), d01),
              cross(b, d00),
              cross(b, h10),
              cross(e, h10),
            ]
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.wall}
          />
          {[0.8]
            .reduce(
              (list, a, index) => list.concat(a + list[index]),
              [4 + 0.68],
            )
            .map(
              (w, index, list) =>
                index > 0 && (
                  <path
                    key={index}
                    d={rect(
                      cross(shift(e, [list[index - 1], 0]), h11),
                      cross(shift(e, [w, 0]), h10),
                    )
                      .map(flipy)
                      .map((p, i) => (i > 0 ? line(p) : move(p)))
                      .concat("z")
                      .join(" ")}
                    style={styles.blue}
                  />
                ),
            )}
          <path
            d={rect(
              cross(shift(e, [4 + 0.68, 0]), h10),
              cross(shift(b, [-4 - 0.28, 0]), h11),
            )
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.wood}
          />
          {[0.6, 1.1]
            .reduce(
              (list, a, index) => list.concat(a + list[index]),
              [4 + 0.28],
            )
            .map(
              (w, index, list) =>
                index > 0 && (
                  <path
                    key={index}
                    d={rect(
                      cross(shift(b, [-list[index - 1], 0]), h11),
                      cross(shift(b, [-w, 0]), h10),
                    )
                      .map(flipy)
                      .map((p, i) => (i > 0 ? line(p) : move(p)))
                      .concat("z")
                      .join(" ")}
                    style={styles.blue}
                  />
                ),
            )}
          {Object.entries({ h_0, h00, h01, h10, h11, d00, d01 }).map(([l, p]) =>
            (([x, y]) => (
              <text key={l} style={{ fontSize }} x={x} y={y}>
                {l}
              </text>
            ))(flipy(p)),
          )}
        </g>
      ))(model.pointsB())}

      {/* CY */}
      {(({
        a,
        b,
        c,
        d,
        h,
        m,
        n,
        o,
        p,
        t,
        h_0,
        h00,
        h01,
        h10,
        h11,
        d00,
        d01,
      }) => (
        <g transform={`translate(${[4, 40].join(",")})`}>
          {[
            [t, b],
            [b, a],
            [n, m],
          ].map(([a, b], i) => (
            <path
              key={i}
              d={rect(cross(a, h_0), cross(b, h00))
                .map(flipy)
                .map((p, i) => (i > 0 ? line(p) : move(p)))
                .concat("z")
                .join(" ")}
              style={styles.slab}
            />
          ))}
          <path
            d={rect(cross(n, h00), cross(m, h10))
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.wall}
          />
          <path
            d={rect(cross(b, h00), cross(d, h10))
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.wall}
          />
          <path
            d={[
              cross(p, h10),
              cross(b, h10),
              cross(b, h01),
              cross(o, h01),
              cross(o, h00),
              cross(p, h00),
            ]
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.wall}
          />

          {/* {[[p,b], [b,a], [n,m]].map(([a,b]) => (
        <path
          d={rect(cross(a,h01), cross(b,h10)).map(flipy).map((p, i) => i > 0 ? line(p) : move(p)).concat('z').join(' ')}
          fill="transparent"
          stroke="orange"
          strokeWidth={.1}
        />
            ))} */}
          {/* {[[d, h]].map(([a, b]) => (
      <path
        d={rect(cross(a, h10), cross(b, d00))
          .map(flipy)
          .map((p, i) => (i > 0 ? line(p) : move(p)))
          .concat("z")
          .join(" ")}
        fill="transparent"
        stroke="orange"
        strokeWidth={0.1}
      />
    ))} */}
          <path
            d={[cross(d, d01), cross(h, d01), cross(h, d00), cross(d, d00)]
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.roof}
          />

          <path
            d={[
              cross(d, d00),

              cross(shift(d, [2.7 + 0.16, 0]), d00),
              cross(shift(d, [2.7 + 0.16, 0]), shift(h11, [0, 0.65])),
              cross(
                shift(d, [
                  4.16 + 0.16 + 2.7 + 0.16 + 1.6 + 0.16 + 2.2 + 0.48 + 0.48,
                  0,
                ]),
                shift(h11, [0, 0.65]),
              ),
              cross(
                shift(d, [
                  4.16 + 0.16 + 2.7 + 0.16 + 1.6 + 0.16 + 2.2 + 0.48 + 0.48,
                  0,
                ]),
                d00,
              ),

              cross(h, d00),
              cross(h, h10),
              cross(n, h10),
              cross(n, h00),
              cross(b, h00),
              cross(b, h10),
              cross(d, h10),
            ]
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.wall}
          />

          {/* <path
            d={rect(
              cross(shift(d, [0.48 + 2.7 + 0.16, 0]), h11),
              cross(shift(d, [0.48 + 2.7 + 0.16 + 1.3, 0]), h10),
            )
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.blue}
          /> */}
          <path
            d={rect(
              cross(shift(d, [0.48 + 2.7 + 0.16, 0]), h11),
              cross(shift(d, [0.48 + 2.7 + 0.16 + 1.3 + 0.16, 0]), h10),
            )
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.wood}
          />
          {/* <path
            d={rect(
              cross(shift(d, [.48+4.16+.16, 0]), h11),
              cross(shift(d, [.48+4.16+.16 + 2.7, 0]), h10),
            )
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.blue}
          /> */}

          {[0.6, 2.1]
            .reduce(
              (list, a, index) => list.concat(a + list[index]),
              [0.48 + 4.16 + 0.16],
            )
            .map(
              (w, index, list) =>
                index > 0 && (
                  <path
                    key={index}
                    d={rect(
                      cross(shift(d, [list[index - 1], 0]), h11),
                      cross(shift(d, [w, 0]), h10),
                    )
                      .map(flipy)
                      .map((p, i) => (i > 0 ? line(p) : move(p)))
                      .concat("z")
                      .join(" ")}
                    style={styles.blue}
                  />
                ),
            )}
          {/* <path
            d={rect(
              cross(shift(d, [0.48 + 4.16 + 0.16 + 2.7 + 0.16, 0]), h11),
              cross(shift(d, [0.48 + 4.16 + 0.16 + 2.7 + 0.16 + 1.6, 0]), h10),
            )
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.blue}
          /> */}
          <path
            d={rect(
              cross(shift(d, [0.48 + 4.16 + 0.16 + 2.7, 0]), h11),
              cross(
                shift(d, [0.48 + 4.16 + 0.16 + 2.7 + 0.16 + 1.6 + 0.16, 0]),
                h10,
              ),
            )
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.wood}
          />
          <path
            d={rect(
              cross(
                shift(d, [0.48 + 4.16 + 0.16 + 2.7 + 0.16 + 1.6 + 0.16, 0]),
                h11,
              ),
              cross(
                shift(d, [
                  0.48 + 4.16 + 0.16 + 2.7 + 0.16 + 1.6 + 0.16 + 2.2,
                  0,
                ]),
                h10,
              ),
            )
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.blue}
          />
          <path
            d={rect(
              cross(
                shift(d, [0.48 + 4.16 + 0.16 + 2.7 + 0.16 + 1.6 + 0.16, 0]),
                h11,
              ),
              cross(
                shift(d, [
                  0.48 + 4.16 + 0.16 + 2.7 + 0.16 + 1.6 + 0.16 + 2.2,
                  0,
                ]),
                h10,
              ),
            )
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.blue}
          />
          <path
            d={rect(
              cross(
                shift(d, [
                  0.48 + 4.16 + 0.16 + 2.7 + 0.16 + 1.6 + 0.16 + 0.7,
                  0,
                ]),
                h11,
              ),
              cross(
                shift(d, [
                  0.48 + 4.16 + 0.16 + 2.7 + 0.16 + 1.6 + 0.16 + 2.2,
                  0,
                ]),
                h10,
              ),
            )
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.wood}
          />
          <path
            d={rect(
              cross(shift(d, [0.48 + 2.7 + 0.16, 0]), shift(h11, [0, 0.65])),
              cross(
                shift(d, [
                  0.48 + 4.16 + 0.16 + 2.7 + 0.16 + 1.6 + 0.16 + 2.2,
                  0,
                ]),
                h11,
              ),
            )
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.slab}
          />

          <path
            d={rect(
              cross(shift(b, [0.48 + 0.6, 0]), shift(h00, [0, 0.9 + 0.6])),
              cross(shift(b, [0.48 + 0.6 + 3.6, 0]), shift(h00, [0, 0.9])),
            )
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.blue}
          />

          {Object.entries({ h_0, h00, h01, h10, h11, d00, d01 }).map(([l, p]) =>
            (([x, y]) => (
              <text key={l} style={{ fontSize }} x={x} y={y}>
                {l}
              </text>
            ))(flipy(p)),
          )}
        </g>
      ))(model.pointsC())}

      {/* DY */}
      {(({ a, f, h, i, j, k, l, m, h_0, h00, h01, h10, h11, d00, d01 }) => (
        <g transform={`translate(${[-8, 30].join(",")})`}>
          {[[m, h]].map(([a, b], i) => (
            <path
              key={i}
              d={rect(cross(a, h_0), cross(b, h00))
                .map(flipy)
                .map((p, i) => (i > 0 ? line(p) : move(p)))
                .concat("z")
                .join(" ")}
              style={styles.slab}
            />
          ))}
          {[
            /*[m,l], [k, j], */
            [i, shift(h, [-0.48, 0])],
          ].map(([a, b], i) => (
            <path
              key={i}
              d={rect(cross(a, h00), cross(b, h01))
                .map(flipy)
                .map((p, i) => (i > 0 ? line(p) : move(p)))
                .concat("z")
                .join(" ")}
              style={styles.wood}
            />
          ))}
          {[[k, j]].map(([a, b], i) => (
            <path
              key={i}
              d={rect(cross(a, h01), cross(b, h00))
                .map(flipy)
                .map((p, i) => (i > 0 ? line(p) : move(p)))
                .concat("z")
                .join(" ")}
              style={styles.wall}
            />
          ))}
          <path
            d={rect(cross(shift(h, [-0.48, 0]), h10), cross(h, h00))
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.wall}
          />
          <path
            d={rect(
              cross(shift(k, [0.69, 2.375]), shift(h00, [0, 2.375])),
              cross(shift(k, [0.69 + 5.5, 0]), h00),
            )
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.gray}
          />
          {/* <path
            d={rect(
              cross(shift(h, [-0.48 - 0.7, 0]), h01),
              cross(shift(h, [-0.48, 0]), h00),
            )
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.blue}
          />
          <path
            d={rect(
              cross(shift(h, [-0.48 - 0.7 - 1.1, 0]), h01),
              cross(shift(h, [-0.48 - 0.7, 0]), h00),
            )
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.blue}
          /> */}
          {[0.6 /*, 1*/]
            .reduce((list, a, index) => list.concat(a + list[index]), [0])
            .map(
              (w, index, list) =>
                index > 0 && (
                  <path
                    key={index}
                    d={rect(
                      cross(shift(i, [list[index - 1], 0]), h01),
                      cross(shift(i, [w, 0]), h00),
                    )
                      .map(flipy)
                      .map((p, i) => (i > 0 ? line(p) : move(p)))
                      .concat("z")
                      .join(" ")}
                    style={index === 2 ? styles.gray : styles.blue}
                  />
                ),
            )}
          <path
            d={rect(
              cross(shift(i, [0.6, 0]), shift(h00, [0, 2.375])),
              cross(shift(i, [0.6 + 1, 0]), h00),
            )
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.gray}
          />
          <path
            d={rect(
              cross(shift(i, [0.6, 0]), shift(h00, [0, 2.375])),
              cross(shift(i, [0.6 + 1, 0]), h01),
            )
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.gray}
          />
          {[0.6, 1.2]
            .reduce((list, a, index) => list.concat(a + list[index]), [0.48])
            .map(
              (w, index, list) =>
                index > 0 && (
                  <path
                    key={index}
                    d={rect(
                      cross(shift(h, [-list[index - 1], 0]), h01),
                      cross(shift(h, [-w, 0]), h00),
                    )
                      .map(flipy)
                      .map((p, i) => (i > 0 ? line(p) : move(p)))
                      .concat("z")
                      .join(" ")}
                    style={styles.blue}
                  />
                ),
            )}
          {/* <path
            d={rect(
              cross(shift(i, [0, 0]), h01),
              cross(shift(i, [0.4, 0]), h00),
            )
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.blue}
          />
          <path
            d={rect(
              cross(shift(i, [0.4, 0]), h01),
              cross(shift(i, [0.4 + 1.1, 0]), h00),
            )
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.blue}
          /> */}
          <path
            d={[
              cross(m, h10),
              cross(h, h10),
              cross(h, h01),
              cross(l, h01),
              cross(l, h00),
              cross(m, h00),
            ]
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.wall}
          />
          {/* {[[a,f]].map(([a,b]) => (
        <path
          d={rect(cross(a,h10), cross(b,h11)).map(flipy).map((p, i) => i > 0 ? line(p) : move(p)).concat('z').join(' ')}
          fill="transparent"
          stroke="orange"
          strokeWidth={.1}
        />
            ))} */}
          <path
            d={rect(cross(a, shift(h11, [0, 0.65])), cross(f, h10))
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.wall}
          />
          <path
            d={[
              cross(a, d00),
              cross(middle(a, f), d01),
              cross(f, d00),
              cross(f, h10),
              cross(a, h10),
            ]
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.wall}
          />

          {[0.6, 1.1]
            .reduce(
              (list, a, index) => list.concat(a + list[index]),
              [4 + 0.28],
            )
            .map(
              (w, index, list) =>
                index > 0 && (
                  <path
                    key={index}
                    d={rect(
                      cross(shift(a, [list[index - 1], 0]), h11),
                      cross(shift(a, [w, 0]), h10),
                    )
                      .map(flipy)
                      .map((p, i) => (i > 0 ? line(p) : move(p)))
                      .concat("z")
                      .join(" ")}
                    style={styles.blue}
                  />
                ),
            )}
          <path
            d={rect(
              cross(shift(a, [4 + 0.28, 0]), h10),
              cross(shift(f, [-4 - 0.28, 0]), h11),
            )
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.wood}
          />
          {[0.6, 1.1]
            .reduce(
              (list, a, index) => list.concat(a + list[index]),
              [4 + 0.28],
            )
            .map(
              (w, index, list) =>
                index > 0 && (
                  <path
                    key={index}
                    d={rect(
                      cross(shift(f, [-list[index - 1], 0]), h11),
                      cross(shift(f, [-w, 0]), h10),
                    )
                      .map(flipy)
                      .map((p, i) => (i > 0 ? line(p) : move(p)))
                      .concat("z")
                      .join(" ")}
                    style={styles.blue}
                  />
                ),
            )}

          {Object.entries({ h_0, h00, h01, h10, h11, d00, d01 }).map(([l, p]) =>
            (([x, y]) => (
              <text key={l} style={{ fontSize }} x={x} y={y}>
                {l}
              </text>
            ))(flipy(p)),
          )}
          <Meter
            points={[flipy(h00), flipy(h10)]}
            anchor={shift(middle(flipy(h00), flipy(h10)), [-2.6 - 0.8, 0])}
          />
          <Meter
            points={[flipy(h10), flipy(d00)]}
            anchor={shift(middle(flipy(h10), flipy(d00)), [-2.6 - 0.8, 0])}
          />
          <Meter
            points={[flipy(h00), flipy(d00)]}
            anchor={shift(middle(flipy(h00), flipy(d00)), [-2.6 - 1.6, 0])}
          />
          <Meter
            points={[flipy(h00), flipy(d01)]}
            anchor={shift(middle(flipy(h00), flipy(d00)), [-2.6 - 2.4, 0])}
          />
        </g>
      ))(model.pointsD())}
    </g>
  );
}
