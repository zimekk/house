import React, { useMemo, useRef, useState } from "react";
import { Extrude, PivotControls } from "@react-three/drei";
import * as THREE from "three";

const extrudeSettings = { steps: 2, depth: 1, bevelEnabled: false };
const SIDE = 1;

// https://varun.ca/modular-webgl/
function Block(props) {
  const shape = useMemo(() => {
    const _shape = new THREE.Shape();

    _shape.moveTo(0, 0);
    _shape.lineTo(SIDE, 0);
    _shape.lineTo(SIDE, SIDE * 2);
    _shape.lineTo(0, SIDE * 2);
    _shape.lineTo(0, SIDE * 3);
    _shape.lineTo(-SIDE, SIDE * 3);
    _shape.lineTo(-SIDE, SIDE);
    _shape.lineTo(0, SIDE);

    return _shape;
  }, []);

  return (
    <Extrude args={[shape, extrudeSettings]} {...props}>
      <meshPhysicalMaterial
        flatShading
        color="#3E64FF"
        thickness={SIDE}
        roughness={0.4}
        clearcoat={1}
        clearcoatRoughness={1}
        transmission={0.8}
        ior={1.25}
        attenuationTint="#fff"
        attenuationDistance={0}
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
        <meshStandardMaterial color={"green"}>
          <plane attach="clippingPlanes-0" normal={[0, 1, 0]} constant={0} />
        </meshStandardMaterial>
      </mesh>
    </group>
  );
}

export default function House() {
  return (
    <group position={[0, -0.5, 0]}>
      <PivotControls>
        <Block />
      </PivotControls>
      <Wall />
      <Floor />
    </group>
  );
}
