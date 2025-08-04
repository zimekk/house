import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Environment } from "./Environment";
import { House } from "./House";

export default function App() {
  return (
    <Canvas shadows camera={{ position: [-15, 10, 15], fov: 25 }}>
      <House />
      <Environment />
      <OrbitControls makeDefault />
    </Canvas>
  );
}
