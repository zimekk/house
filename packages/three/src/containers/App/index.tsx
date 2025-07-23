import React, { useMemo, useRef, useState } from "react";
import { type Mesh } from "three";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Edges, Extrude, PivotControls } from "@react-three/drei";
// import styles from "./styles.module.scss";

const extrudeSettings = { steps: 2, depth: 3, bevelEnabled: false };

function square(w: number, h: number, x = 0, y = 0) {
  return [
    [x, y],
    [w + x, y],
    [w + x, y + h],
    [x, y + h],
  ];
}

const createShape = (edges: number[][]) =>
  edges.reduce(
    (shape, [x, y], k) => shape[k > 0 ? "lineTo" : "moveTo"](x, y),
    new THREE.Shape(),
  );

// https://varun.ca/modular-webgl/
function Floor({ shape, ...props }: any) {
  const extrudeSettings = { steps: 2, depth: 0.2, bevelEnabled: false };
  return (
    <Extrude
      args={[shape, extrudeSettings]}
      rotation={[Math.PI / 2, 0, 0]}
      {...props}
    >
      {/* <meshPhysicalMaterial */}
      {/* <meshBasicMaterial */}
      <meshBasicMaterial
      // transparent
      // flatShading
      // color="#3E64FF"
      // thickness={SIDE}
      // roughness={0.4}
      // clearcoat={1}
      // clearcoatRoughness={1}
      // transmission={0.8}
      // ior={1.25}
      // attenuationTint="#fff"
      // attenuationDistance={0}
      />
      <Edges />
    </Extrude>
  );
}

function Wall({ x, y, v, h, ...props }: any) {
  const shape = useMemo(() => {
    const scale = 1;
    const edges = square(scale * h, scale * v, scale * x, scale * y);
    const shape = createShape(edges);
    return shape;
  }, [v, h]);

  return (
    <Extrude
      args={[shape, extrudeSettings]}
      rotation={[Math.PI / 2, 0, 0]}
      {...props}
    >
      {/* <meshPhysicalMaterial */}
      {/* <meshBasicMaterial */}
      <meshBasicMaterial
      // transparent
      // flatShading
      // color="#3E64FF"
      // thickness={SIDE}
      // roughness={0.4}
      // clearcoat={1}
      // clearcoatRoughness={1}
      // transmission={0.8}
      // ior={1.25}
      // attenuationTint="#fff"
      // attenuationDistance={0}
      />
      <Edges />
    </Extrude>
  );
}

// https://codesandbox.io/s/rrppl0y8l4
function Box(props: any) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<Mesh>(null);
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (ref.current.rotation.x += delta));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={hovered ? "hotpink" : "orange"} />
      {/* <meshStandardMaterial color={hovered ? "hotpink" : "orange"} /> */}
    </mesh>
  );
}

const G = 0.48;
const S = 0.28;
const C = 0.16;

export default function App() {
  // const [filters, setFilters] = useState<FiltersState>(() => INITIAL_FILTERS);

  // const [H] = useState(() => []);
  const [H, V] = [
    [
      -1.2 - 1.2,
      -1.2,
      0,
      G + 3.6,
      -1.2 + G + 6.6 + S,
      -1.2 + G + 6.6 + S + 1.8 + G,
      -1.2 + G + 6.6 + S + 1.8 + G + 1.5,
      -1.2 + G + 6.6 + S + 1.8 + G + 1.5 + C + 5.4 + G,
      -1.2 + G + 6.6 + S + 1.8 + G + 1.5 + C + 5.4 + 4.08 + G,
    ],
    [
      -3.43,
      0,
      1.8,
      G + 2.24,
      G + 3.6,
      G + 3.6 + 1.6,
      G + 3.6 + 1.6 + 1.5 + G,
      G + 3.6 + 1.6 + 1.5 + G + 1.56,
    ],
  ];

  const shape = useMemo(() => {
    const scale = 0.2;
    const edges = [
      [H[0], V[0]],
      [H[5], V[0]],
      [H[5], V[1]],
      [H[7], V[1]],
      [H[7], V[2]],
      [H[8], V[2]],
      [H[8], V[6]],
      [H[3], V[6]],
      [H[3], V[7]],
      [H[2], V[7]],
      [H[2], V[4]],
      [H[1], V[4]],
      [H[1], V[0] + G],
      [H[0], V[0] + G],
    ];
    const shape = createShape(
      edges.map((coords) => coords.map((x) => x * scale)),
    );
    return shape;
  }, []);

  // const [queries, setQueries] = useState(() => filters);
  // const search$ = useMemo(() => new Subject<any>(), []);

  // useEffect(() => {
  //   const subscription = search$
  //     .pipe(
  //       map(({ search, ...filters }) =>
  //         JSON.stringify({
  //           ...queries,
  //           ...filters,
  //           search: search.toLowerCase().trim(),
  //         }),
  //       ),
  //       distinctUntilChanged(),
  //       debounceTime(400),
  //     )
  //     .subscribe((filters) =>
  //       setQueries((queries) => ({ ...queries, ...JSON.parse(filters) })),
  //     );
  //   return () => subscription.unsubscribe();
  // }, [search$]);

  // useEffect(() => {
  //   search$.next(filters);
  // }, [filters]);

  return (
    <Canvas>
      {/* <ClippingPlane /> */}
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[-1.2, -1.5, 0]} />
      <Box position={[1.2, -1.5, 0]} />
      <Wall x={H[0]} h={H[5]} y={V[0]} v={G} />
      <Wall x={H[1]} h={G} y={V[0] + G} v={V[4] - S + G} />
      <Wall x={H[2]} h={S} y={V[0] + G} v={V[4] - S} />
      <Wall x={H[3]} h={G} y={V[0] + G} v={V[1] - V[0] - G} />
      <Wall x={H[3]} h={H[3] - H[2]} y={V[1]} v={S} />
      <Floor shape={shape} />
      {/* <Extrusion
            steps={10}
            bevelSegments={10}
            start={[-2, 2]}
            paths={[
              [2, 2.5, 2.0, 0, 0, -1],
              [4.0, 0, 3.0, 3.5, 5.0, 3.5],
              [3.0, 5.5, 1.0, 1.7, 1.5, 6.5]
            ]}
          /> */}
      <gridHelper
        args={[20, 20, "#4D089A", "#4D089A"]}
        position={[0, -2, 0]}
        rotation={[0, 0, 0]}
      />
      <OrbitControls makeDefault dampingFactor={0.3} />
    </Canvas>
  );
}
