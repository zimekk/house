import * as THREE from "three";
import { useRef, ComponentPropsWithoutRef, useEffect, useMemo } from "react";
import { Outlines, PivotControls, Wireframe } from "@react-three/drei";
import {
  Geometry,
  Base,
  Subtraction,
  Addition,
  CSGGeometryRef,
} from "@react-three/csg";
import {
  type Point,
  cross,
  length,
  point,
  rect,
  shift,
} from "@dev/model/utils";

const box = new THREE.BoxGeometry();
const cyl = new THREE.CylinderGeometry(1, 1, 2, 20);
const tri = new THREE.CylinderGeometry(1, 1, 2, 3);

const alpha = (35 * Math.PI) / 180;

export const ria = (a: number) => [a, a / Math.tan(alpha), a / Math.sin(alpha)];
export const rib = (b: number) => [b * Math.tan(alpha), b, b / Math.cos(alpha)];
export const ric = (c: number) => [c * Math.sin(alpha), c * Math.cos(alpha), c];

class Model {
  pointsA() {
    return { ...this.points(), ...this.pointsH() };
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
      _g,
      _s,
      _d,
    };
  }
}

const model = new Model();

const createShape = (edges: Point[]) =>
  edges
    .reduce(
      (shape, [x, y], k) => shape[k > 0 ? "lineTo" : "moveTo"](x, y),
      new THREE.Shape(),
    )
    .closePath();

// https://codesandbox.io/p/sandbox/csg-house-y52tmt
export function Floor(props: object) {
  const csg = useRef<CSGGeometryRef>(null);
  useEffect(() => {
    csg.current?.update();
  }, []);

  const shape = useMemo(() => {
    const { a, b, c, d, e, f, g, h, i, j, k, l, m, n } = model.pointsA();
    return new THREE.ExtrudeGeometry(
      createShape([a, b, c, d, e, f, g, h, i, j, k, l, m, n]),
      { depth: 1, bevelEnabled: false },
    );
  }, []);

  const garaz = useMemo(() => {
    const { a, b, c, d, e, f, g, h, i, j, k, l, m, n, _g, _s, _d } =
      model.pointsA();

    return new THREE.ExtrudeGeometry(
      [
        // garaz
        (([a1, b1, c1, d1], ax = point(a1), bx = point(b1), dx = point(d1)) =>
          createShape([
            ax.shift([0, _s - _g]),
            ax.shift([1.2, 0]),
            ax.shift([0, _g - _s]),
            ...[
              bx.current(),
              bx.shift([-0.2, 0]),
              ...bx.breakx([-1, _s]),
            ].reverse(),
            c1,
            dx.current(),
            dx.shift([0, (length(j, k) - 5.5) / 2]),
            dx.shift([-_g, 0]),
            dx.shift([0, 5.5]),
            dx.shift([_g, 0]),
          ]))(rect(shift(j, [_g, -_s]), shift(n, [-_g - 2.1 - _s, _g]))),
        // gabinet
        (([a1, b1, c1, d1], bx = point(b1), dx = point(d1)) =>
          createShape([
            a1,
            ...[
              bx.current(),
              bx.shift([-0.2, 0]),
              ...bx.breakx([-1, -_d]),
            ].reverse(),
            c1,
            dx.current(),
            dx.shift([0, -0.2]),
            ...dx.breaky([-_g, -1]),
          ]))(rect(shift(i, [_g, 1.6 + _d]), shift(g, [-_g, -_g]))),
        // szatnia
        (([a1, b1, c1, d1], cx = point(c1)) =>
          createShape([
            a1,
            b1,
            ...[cx.current(), cx.shift([-0.2, 0]), ...cx.breakx([-1, -_d])],
            d1,
          ]))(
          rect(shift(f, [-_g + _d, -_g]), shift(cross(g, i), [1.72, 1.6 + _d])),
        ),
        // hol
        (([a1, b1, c1, d1], cx = point(c1)) => createShape([a1, b1, c1, d1]))(
          rect(shift(cross(a, i), [0, 0]), shift(cross(a, f), [-2.1, 0])),
        ),
        // schowek
        (([a1, b1, c1, d1], cx = point(c1)) =>
          createShape([
            a1,
            b1,
            ...[cx.current(), cx.shift([0.2, 0]), ...cx.breakx([1, -_d])],
            d1,
          ]))(
          rect(shift(cross(a, f), [1.76, -_g]), shift(cross(a, i), [_d, 1.6])),
        ),
        // salon
        ((
          [a1, b1, c1, d1],
          ax = point(c, [-_g, _g]),
          bx = point(c1),
          cx = point(c1),
        ) =>
          createShape([
            a1,
            shift(b, [-_g, _g]),
            ...[
              ax.current(),
              ax.shift([0, -_g]),
              ...ax.breaky([_g, -0.8]),
            ].reverse(),
            shift(d, [-_g, _g]),
            ...[...bx.breaky([_g, -2]), ...bx.breaky([_g, -2])].reverse(),
            cx.current(),
            ...cx.breakx([-2, _g]),
            ...cx.breakx([-2, _g]),
            cx.shift([-_g, 0]),
            ...cx.breakx([-2, _g]),
            ...cx.breakx([-2, _g]),
            d1,
          ]))(rect(shift(b, [-_g - 8 * 0.6, _g]), shift(e, [-_g, -_g]))),
      ],
      { depth: 1, bevelEnabled: false },
    );
  }, []);

  const korytarz = useMemo(() => {
    const { a, b, c, d, e, f, g, h, i, j, k, l, m, n, _g, _d } =
      model.pointsA();
    return new THREE.ExtrudeGeometry(
      [
        // korytarz
        (([a1, b1, c1, d1], dx = point(d1)) =>
          createShape([a1, b1, c1, d1, ...dx.breaky([-_g, 1.6])]))(
          rect(shift(i, [_g, 1.6]), shift(cross(g, i), [1.72, 0])),
        ),
      ],
      { depth: 1, bevelEnabled: false },
    );
  }, []);

  const kotlownia = useMemo(() => {
    const { a, b, c, d, e, f, g, h, i, j, k, l, m, n, _g, _s } =
      model.pointsA();
    return new THREE.ExtrudeGeometry(
      [
        // kotlownia
        (([a1, b1, c1, d1], cx = point(c1), bx = point(b1), dx = point(d1)) =>
          createShape([
            a1,
            b1,
            ...[
              cx.current(),
              cx.shift([0, 0.2]),
              ...cx.breaky([-_s, 1]),
            ].reverse(),
            ...[dx.current(), dx.shift([0, 0.2]), ...dx.breaky([_g, 1])],
          ]))(rect(shift(a, [-_g, _g - _s]), shift(n, [-_g - 2.1, _g]))),
      ],
      { depth: 1, bevelEnabled: false },
    );
  }, []);

  const grill = useMemo(() => {
    const { a, b, c, d, e, f, g, h, i, j, k, l, m, n, p, r, _g, _s } =
      model.pointsA();
    return new THREE.ExtrudeGeometry(
      [
        // grill
        (([a1, b1, c1, d1]) => createShape([a1, b1, c1, d1]))(rect(p, r)),
      ],
      { depth: 1, bevelEnabled: false },
    );
  }, []);

  return (
    <mesh receiveShadow castShadow {...props}>
      <Geometry ref={csg} computeVertexNormals>
        <Base
          name="shape"
          geometry={shape}
          position={[0, 3, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1, 1, 3]}
        />
        <Subtraction
          name="garaz"
          geometry={garaz}
          position={[0, 3, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1, 1, 3]}
        />
        <Subtraction
          name="kotlownia"
          geometry={kotlownia}
          position={[0, 3, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1, 1, 3]}
        />
        <Subtraction
          name="korytarz"
          geometry={korytarz}
          position={[0, 3, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1, 1, 3]}
        />
        <Addition
          name="grill"
          geometry={grill}
          position={[0, 3, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1, 1, 3]}
        />
      </Geometry>
      <Outlines thickness={5} color="hotpink" />
      {/* <Wireframe simplify/> */}
      <meshStandardMaterial envMapIntensity={0.25} />
    </mesh>
  );
}

export function Attic(props: ComponentPropsWithoutRef<"mesh">) {
  const csg = useRef<CSGGeometryRef>(null);
  useEffect(() => {
    csg.current?.update();
  }, []);

  const shape = useMemo(() => {
    const { a, b, c, d, e, f, g, h, i, j, k, l, m, n } = model.pointsA();
    return new THREE.ExtrudeGeometry(
      [
        (([a1, b1, c1, d1]) => createShape([a1, b1, c1, d1]))(
          rect(cross(h, a), e),
        ),
      ],
      { depth: 1, bevelEnabled: false },
    );
  }, []);

  //   const garaz = useMemo(() => {
  //     const {a, b, c, d, e, f, g, h, i, j, k, l, m, n, _g,_s,_d} = model.pointsA();

  //     return new THREE.ExtrudeGeometry([
  //       // garaz
  //       (([a1,b1,c1,d1], ax=point(a1), bx=point(b1), dx=point(d1)) =>createShape([
  // ax.shift([0, _s-_g]),
  // ax.shift([1.2, 0]),
  // ax.shift([0, _g-_s]),
  // ...[
  //   bx.current(),
  //   bx.shift([-.2, 0]),
  //   ...bx.breakx([-1, _s]),
  // ].reverse(),
  // c1,
  // dx.current(),
  // dx.shift([0,(length(j, k)-5.5)/2]),
  // dx.shift([-_g,0]),
  // dx.shift([0,5.5]),
  // dx.shift([_g,0]),
  //     ])
  //       )(rect(shift(j, [_g,-_s]), shift(n,[-_g-2.1-_s,_g]))),
  //       // gabinet
  //     (([a1,b1,c1,d1], bx=point(b1), dx=point(d1)) => createShape([
  // a1,
  // ...[
  //   bx.current(),
  //   bx.shift([-.2, 0]),
  //   ...bx.breakx([-1, -_d]),
  // ].reverse(),
  // c1,dx.current(),
  // dx.shift([0, -.2]),
  // ...dx.breaky([-_g, -1]),
  //     ]))(rect(shift(i, [_g,1.6+_d]), shift(g,[-_g,-_g]))),
  //     ], { depth: 1, bevelEnabled: false })
  //   }, [])

  const korytarz = useMemo(() => {
    const { a, b, c, d, e, f, g, h, i, j, k, l, m, n, _g, _d } =
      model.pointsA();
    return new THREE.ExtrudeGeometry(
      [
        // korytarz
        (([a1, b1, c1, d1], dx = point(d1)) =>
          createShape([a1, b1, c1, d1, ...dx.breaky([-_g, 1.6])]))(
          rect(shift(i, [_g, 1.6]), shift(cross(g, i), [1.72, 0])),
        ),
      ],
      { depth: 1, bevelEnabled: false },
    );
  }, []);

  return (
    <mesh receiveShadow castShadow {...props}>
      <Geometry ref={csg} computeVertexNormals>
        <Base
          name="shape2"
          geometry={shape}
          position={[0, 3, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1, 1, 3]}
        />
        {/* <Subtraction name="garaz" geometry={garaz} position={[0,3,0]} rotation={[Math.PI/2,0,0]} scale={[1, 1, 3]} /> */}
        {/* <Subtraction name="kotlownia" geometry={kotlownia} position={[0,3,0]} rotation={[Math.PI/2,0,0]} scale={[1, 1, 3]} /> */}
        <Subtraction
          name="korytarz"
          geometry={korytarz}
          position={[0, 3, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1, 1, 3]}
        />
        {/* <Addition
          name="grill"
          geometry={grill} position={[0,3,0]} rotation={[Math.PI/2,0,0]} scale={[1, 1, 3]} /> */}
      </Geometry>
      <Outlines thickness={5} color="hotpink" />
      {/* <Wireframe simplify/> */}
      <meshStandardMaterial envMapIntensity={0.25} />
    </mesh>
  );
}

export function House(props: object) {
  return (
    <>
      <Floor />
      <Attic position={[0, 4, 0]} />
    </>
  );
}
