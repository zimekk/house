import React, { useMemo, useRef, useState } from "react";
import { Edges, Extrude, PivotControls } from "@react-three/drei";
import * as THREE from "three";

const extrudeSettings = { steps: 2, depth: 1, bevelEnabled: false };
const SIDE = 1;

// https://varun.ca/modular-webgl/
function Block(props) {
  const shape = useMemo(() => {
    const shape = new THREE.Shape()
      .moveTo(0, 0)
      .lineTo(SIDE, 0)
      .lineTo(SIDE, SIDE * 2)
      .lineTo(0, SIDE * 2)
      .lineTo(0, SIDE * 3)
      .lineTo(-SIDE, SIDE * 3)
      .lineTo(-SIDE, SIDE)
      .lineTo(0, SIDE);

    return shape;
  }, []);

  return (
    <Extrude args={[shape, extrudeSettings]} {...props}>
      {/* <meshPhysicalMaterial */}
      {/* <meshBasicMaterial */}
      <meshBasicMaterial
        transparent
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

function Shape(props) {
  const shape = useMemo(() => {
    // https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_shapes.html
    const shape = new THREE.Shape()
      .moveTo(0, 0)
      .lineTo(2, 0)
      .lineTo(2, 2)
      .lineTo(0, 2)
      .lineTo(0, 0);

    const holePath = new THREE.Path()
      .moveTo(1, 1)
      .absarc(1, 1, 0.5, 0, Math.PI * 2, true);

    shape.holes.push(holePath);
    return shape;
  }, []);

  return (
    <Extrude
      args={[
        shape,
        { ...extrudeSettings, bevelEnabled: true, bevelSegments: 1 },
      ]}
      {...props}
    >
      {/* <meshPhysicalMaterial
        flatShading */}
      {/* <meshBasicMaterial */}
      <meshBasicMaterial
        transparent
        // color="#ff3e7b"
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

function Floor(props) {
  return (
    <group position={[0, -0.1, 0]}>
      <mesh
        // position={[0,-1,0]}
        {...props}
      >
        <boxGeometry args={[5, 0.2, 5]} />
        <meshBasicMaterial color={"blue"} />
        {/* <meshStandardMaterial color={"blue"} /> */}
      </mesh>
    </group>
  );
}

function Wall(props) {
  return (
    <group position={[0, 2.5, -2.6]}>
      <mesh position={[0, 0, 0]} {...props}>
        <boxGeometry args={[5, 5, 0.2]} />
        <meshBasicMaterial color={"green"} />
        {/* <meshStandardMaterial color={"green"} /> */}
      </mesh>
    </group>
  );
}

function Window(props) {
  const shape = useMemo(() => {
    const shape = new THREE.Shape()
      .moveTo(0, 0)
      .lineTo(1.35, 0)
      .lineTo(1.35, 3.2)
      .lineTo(0, 3.2);

    const holePath = new THREE.Path()
      .moveTo(0.1, 0.1)
      .lineTo(1.25, 0.1)
      .lineTo(1.25, 3.1)
      .lineTo(0.1, 3.1);

    shape.holes.push(holePath);

    return shape;
  }, []);

  return (
    <group {...props}>
      <Extrude
        args={[shape, { depth: 0.2, steps: 1, bevelEnabled: false }]}
        position={[2.7, 0, -2.5]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <meshBasicMaterial transparent />
        <Edges />
      </Extrude>
    </group>
  );
}

function Frame(props) {
  const shape = useMemo(() => {
    const shape = new THREE.Shape()
      .moveTo(0, 0)
      .lineTo(3, 0)
      .lineTo(3, 3.4)
      .lineTo(0, 3.4);

    shape.holes.push(
      new THREE.Path()
        .moveTo(0.1, 0.1)
        .lineTo(1.45, 0.1)
        .lineTo(1.45, 3.3)
        .lineTo(0.1, 3.3)
    );

    shape.holes.push(
      new THREE.Path()
        .moveTo(1.55, 0.1)
        .lineTo(2.9, 0.1)
        .lineTo(2.9, 3.3)
        .lineTo(1.55, 3.3)
    );

    return shape;
  }, []);

  return (
    <group {...props}>
      <Extrude
        args={[shape, { depth: 0.1, steps: 1, bevelEnabled: false }]}
        position={[2.7, 0, -2.5]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <meshBasicMaterial transparent />
        <Edges />
      </Extrude>
    </group>
  );
}

function Windowsill(props) {
  return (
    <group {...props}>
      <mesh position={[-0.05, 0.05, 0]}>
        <boxGeometry args={[0.5, 0.1, 3]} />
        <meshBasicMaterial transparent />
        <Edges />
      </mesh>
    </group>
  );
}

// https://codesandbox.io/s/iup24
function Wall2(props) {
  const shape = useMemo(() => {
    const shape = new THREE.Shape()
      .moveTo(0, 0)
      .lineTo(5, 0)
      .lineTo(5, 5)
      .lineTo(0, 5);

    shape.holes.push(
      new THREE.Path().moveTo(1, 1).lineTo(4, 1).lineTo(4, 4.5).lineTo(1, 4.5)
    );

    return shape;
  }, []);

  return (
    <group {...props}>
      <Extrude
        args={[shape, { depth: 0.2, steps: 1, bevelEnabled: false }]}
        position={[2.7, 0, -2.5]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <meshBasicMaterial transparent />
        <Edges />
      </Extrude>
      <Frame position={[-0.05, 1.1, 1.0]} />
      <Window position={[0.0, 1.2, 1.1]} />
      <Window position={[0.0, 1.2, 2.55]} />
      <Windowsill position={[2.5, 1, 0]} />
    </group>
  );
}

function Window3({ w, h, x, y }) {
  const shape = useMemo(() => {
    // const h = 2;
    // const edges = [
    //   [v,0],
    //   [v,h],
    //   [0,h],
    // ]

    // const shape = edges.reduce((shape, [x,y]) => shape.lineTo(x,y), new THREE.Shape().moveTo(0, 0))

    // const shape = new THREE.Shape()
    //   .moveTo(0, 0)
    //   .lineTo(5, 0)
    //   .lineTo(5, 5)
    //   .lineTo(0, 5);

    // shape.holes.push(
    //   new THREE.Path().moveTo(1, 1).lineTo(4, 1).lineTo(4, 4.5).lineTo(1, 4.5)
    // );
    const edges = square(w, h, x, y);
    const shape = createShape(edges);

    return shape;
  }, []);

  return (
    <group>
      <Extrude
        args={[shape, { depth: 0.05, steps: 1, bevelEnabled: false }]}
        position={[0.1, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <meshBasicMaterial transparent />
        <Edges />
      </Extrude>
      {/* <Frame position={[-0.05, 1.1, 1.0]} />
      <Window position={[0.0, 1.2, 1.1]} />
      <Window position={[0.0, 1.2, 2.55]} />
      <Windowsill position={[2.5, 1, 0]} /> */}
    </group>
  );
}

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
    new THREE.Shape()
  );

function Wall3({ x, y, v, rotate }) {
  const h = 2;
  const m = 0.5;
  const n = 0.5;

  const boxes = useMemo(
    () =>
      v > 3
        ? [
            {
              w: v - 2 * m,
              h: h - 2 * n,
              x: m,
              y: n,
            },
          ]
        : [],
    []
  );

  const shape = useMemo(() => {
    const edges = square(v, h);
    const shape = createShape(edges);

    boxes.forEach(({ w, h, x, y }) => {
      const holes = square(w, h, x, y);
      shape.holes.push(createShape(holes));
    });

    return shape;
  }, []);

  //   <mesh position={[x, 0, -y]} rotation={[0,-rotate,0]}>
  //   <group rotateZ={rotate} position={[-.1/2,0,-v/2]}>
  // <boxGeometry args={[.1, 1, v]}/>
  // <meshBasicMaterial transparent />
  // <Edges />
  // </group>
  // </mesh>

  return (
    <group position={[x, 0, -y]} rotation={[0, -rotate, 0]}>
      <Extrude
        args={[shape, { depth: 0.2, steps: 1, bevelEnabled: false }]}
        // position={[-.1/2,0,-v/2]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <meshBasicMaterial transparent />
        <Edges />
      </Extrude>
      {boxes.map((box) => (
        <Window3 {...box} />
      ))}
    </group>
  );
}

function Floor2(props) {
  const { edges, walls } = useMemo(() => {
    const vectors = [
      [1, 5],
      [-1, 5],
      [-1, 4],
      [-1, 2],
      [1, 1],
      [-1, 3],
    ];

    const { edges, walls } = vectors.reduce(
      ({ vector, edges, walls, rotate }, [r, v]) =>
        ((vector, [x, y], rotate) => ({
          rotate,
          vector,
          edges: edges.concat([[x + v * vector[0], y + v * vector[1]]]),
          walls: walls.concat([{ rotate, x, y, v }]),
        }))(
          {
            [0]: vector,
            [1]: [vector[1], -1 * vector[0]],
            [-1]: [-1 * vector[1], vector[0]],
          }[r],
          edges.length > 0 ? edges[edges.length - 1] : [0, 0],
          rotate + (r * Math.PI) / 2
        ),
      {
        rotate: 0,
        vector: [0, 1],
        edges: [],
        walls: [],
      }
    );

    console.log({ vectors, edges, walls });
    return { edges, walls };
  }, []);

  const shape = useMemo(() => {
    // const shape = new THREE.Shape()
    //   .moveTo(0, 0)
    //   .lineTo(5, 0)
    //   .lineTo(5, 5)
    //   .lineTo(1, 5)
    //   .lineTo(1, 3)
    //   .lineTo(0, 3)
    //   .lineTo(0, 0)

    // const edges = [
    //   [5,0],
    //   [5,5],
    //   [1,5],
    //   [1,3],
    //   [0,3],
    //   [0,0],
    // ]

    const shape = edges.reduce(
      (shape, [x, y]) => shape.lineTo(x, y),
      new THREE.Shape().moveTo(0, 0)
    );

    return shape;
  }, [edges]);

  return (
    <group {...props}>
      <Extrude
        args={[shape, { depth: -1, steps: 1, bevelEnabled: false }]}
        // position={[2.7, 0, -2.5]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshBasicMaterial transparent />
        <Edges />
      </Extrude>
      {walls.map(({ rotate, x, y, v }, key) => (
        <Wall3 key={key} rotate={rotate} x={x} y={y} v={v} />
      ))}
    </group>
  );
}

export default function House(props) {
  // const walls = [
  // [0, 0],
  // [0, 0],

  // ];

  return (
    <group {...props}>
      {/* <PivotControls>
        <Block position={[-0.5, 0.5, -1]} />
        <Shape position={[0, 3, -0.5]} />
      </PivotControls> */}
      {/* <Wall />
      <Wall2 />
      <Floor /> */}
      <Floor2 />
    </group>
  );
}
