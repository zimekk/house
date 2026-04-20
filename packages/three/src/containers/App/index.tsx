import React, { MouseEventHandler, useCallback, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Environment } from "./Environment";
import Kitchen from "./Kitchen";
import { House } from "./Sketch";
// import { House } from "./Floor";
// import { House } from "./House";

const items = ["kitchen", "building"];

export default function App() {
  const [selected, setSelected] = useState(() => items[0]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const onSave = useCallback<MouseEventHandler>(
    (e) => {
      e.preventDefault();
      if (canvasRef.current) {
        const anchor = e.currentTarget as HTMLAnchorElement;
        anchor.download = `${new Date().toISOString().split(".").shift()}-screenshot.png`;
        console.log(anchor.download);
        anchor.href = canvasRef.current.toDataURL("image/png");
      }
    },
    [canvasRef],
  );

  return (
    <>
      <div
        style={{
          position: "absolute",
          zIndex: 1,
          padding: 8,
        }}
      >
        {items.map((item, index) => (
          <a
            href="#"
            key={index}
            style={{
              color: "white",
              margin: 4,
              textDecoration: selected === item ? "underline" : "",
            }}
            onClick={(e) => (e.preventDefault(), setSelected(item))}
          >
            {item}
          </a>
        ))}
        <a href="#" onClick={onSave}>
          save as png
        </a>
      </div>
      {selected === "kitchen" ? (
        <Canvas
          key={selected}
          ref={canvasRef}
          orthographic
          camera={{ position: [10, 10, 10], zoom: 100 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Kitchen />
          <Environment preset />
          <OrbitControls
            makeDefault
            rotateSpeed={2}
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2}
            minDistance={5}
            maxDistance={10}
            minZoom={50}
            maxZoom={250}
          />
        </Canvas>
      ) : (
        <Canvas
          key={selected}
          ref={canvasRef}
          shadows
          camera={{ position: [-35, 5, 35], fov: 25, zoom: 1 }}
        >
          <House />
          <Environment />
          <OrbitControls makeDefault />
        </Canvas>
      )}
    </>
  );
}
