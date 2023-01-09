import React, { useMemo, useRef, useState } from "react";
import { Extrude, PivotControls } from "@react-three/drei";
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
      <meshPhysicalMaterial
        // flatShading
        color="#3E64FF"
        // thickness={SIDE}
        // roughness={0.4}
        // clearcoat={1}
        // clearcoatRoughness={1}
        // transmission={0.8}
        // ior={1.25}
        // attenuationTint="#fff"
        // attenuationDistance={0}
      />
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
      <meshPhysicalMaterial
        flatShading
        color="#ff3e7b"
        // thickness={SIDE}
        // roughness={0.4}
        // clearcoat={1}
        // clearcoatRoughness={1}
        // transmission={0.8}
        // ior={1.25}
        // attenuationTint="#fff"
        // attenuationDistance={0}
      />
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
        <meshStandardMaterial color={"blue"} />
      </mesh>
    </group>
  );
}

function Wall(props) {
  return (
    <group position={[0, 2.5, -2.6]}>
      <mesh position={[0, 0, 0]} {...props}>
        <boxGeometry args={[5, 5, 0.2]} />
        <meshStandardMaterial color={"green"} />
      </mesh>
    </group>
  );
}

export default function House() {
  return (
    <group position={[0, -0.5, 0]}>
      <PivotControls>
        <Block position={[-0.5, 0.5, -1]} />
        <Shape position={[0, 3, -0.5]} />
      </PivotControls>
      <Wall />
      <Floor />
    </group>
  );
}
