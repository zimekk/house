type Point = [number, number];

const styles = {
  none: {
    fill: "transparent",
    stroke: "black",
    strokeWidth: 0.1,
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

function shift(a: Point, b: Point): Point {
  const [ax, ay] = a;
  const [bx, by] = b;

  return [ax + bx, ay + by];
}

function middle(a: Point, b: Point): Point {
  const [ax, ay] = a;
  const [bx, by] = b;

  return [(ax + bx) / 2, (ay + by) / 2];
}

function cross(a: Point, b: Point): Point {
  const [ax] = a;
  const [, by] = b;

  return [ax, by];
}

function flipy(a: Point): Point {
  const [ax, ay] = a;

  return [ax, -ay];
}

function rect(a: Point, b: Point): Point[] {
  return [a, cross(a, b), b, cross(b, a)];
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
    const h_0 = cross(z, [0, -0.3]),
      h00 = z,
      h01 = cross(z, [0, 2.8]),
      h10 = cross(z, [0, 2.8 + 0.65]),
      h11 = cross(z, [0, 2.8 + 0.65 + 2.8]),
      d00 = cross(z, [0, 2.8 + 0.65 + 2]),
      d01 = cross(z, [0, 2.8 + 0.65 + 2.8 + 1]),
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

export default function Plan() {
  const fontSize = 0.4;

  return (
    <g transform={`scale(${25}) translate(${[14, 4].join(",")})`}>
      {(({ a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t }) => (
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
        <g transform={`translate(${[0, 18].join(",")})`}>
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
            style={styles.wood}
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

          <path
            d={[
              cross(h, d00),
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
          />
          <path
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
          />
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
          <path
            d={[cross(h, d01), cross(e, d01), cross(e, d00), cross(h, d00)]
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.roof}
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
        <g transform={`translate(${[13, 27].join(",")})`}>
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
          />
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
        <g transform={`translate(${[4, 36].join(",")})`}>
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
            d={[
              cross(d, d00),
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
          <path
            d={rect(
              cross(shift(b, [0.48, 0]), shift(h00, [0, 0.9 + 0.6])),
              cross(shift(b, [0.48 + 3.6, 0]), shift(h00, [0, 0.9])),
            )
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.blue}
          />
          <path
            d={[cross(d, d01), cross(h, d01), cross(h, d00), cross(d, d00)]
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.roof}
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
        <g transform={`translate(${[-8, 27].join(",")})`}>
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
            /*[m,l], */ [k, j],
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
          {/* {[[m,h]].map(([a,b]) => (
        <path
          d={rect(cross(a,h01), cross(b,h10)).map(flipy).map((p, i) => i > 0 ? line(p) : move(p)).concat('z').join(' ')}
          fill="transparent"
          stroke="orange"
          strokeWidth={.1}
        />
            ))} */}
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
              cross(shift(k, [0.5, 2.35]), shift(h00, [0, 2.35])),
              cross(shift(j, [-0.5, 0]), h00),
            )
              .map(flipy)
              .map((p, i) => (i > 0 ? line(p) : move(p)))
              .concat("z")
              .join(" ")}
            style={styles.gray}
          />
          <path
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
          />
          <path
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
          />
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
          {Object.entries({ h_0, h00, h01, h10, h11, d00, d01 }).map(([l, p]) =>
            (([x, y]) => (
              <text key={l} style={{ fontSize }} x={x} y={y}>
                {l}
              </text>
            ))(flipy(p)),
          )}
        </g>
      ))(model.pointsD())}
    </g>
  );
}
