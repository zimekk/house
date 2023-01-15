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

export default function House() {
  return (
    <group position={[0, -2, 0]}>
      {/* <PivotControls>
        <Block position={[-0.5, 0.5, -1]} />
        <Shape position={[0, 3, -0.5]} />
      </PivotControls> */}
      <Wall />
      <Wall2 />
      <Floor />
    </group>
  );
}
