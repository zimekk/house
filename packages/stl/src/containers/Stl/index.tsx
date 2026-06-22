import React, {
  ChangeEvent,
  ChangeEventHandler,
  InputEventHandler,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  // Center,
  // Edges,
  Environment,
  GizmoHelper,
  GizmoViewport,
  Grid,
  OrbitControls,
} from "@react-three/drei";
import { Extrude } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  // DoubleSide,
  type Mesh,
  CatmullRomCurve3,
  Vector3,
} from "three";
import { STLExporter } from "three/addons/exporters/STLExporter.js";
import { SVGLoader } from "three/addons/loaders/SVGLoader.js";
import styles from "./styles.module.scss";

const loader = new SVGLoader();

// https://threejs.org/examples/#misc_exporter_stl
function save(blob: Blob, filename: string) {
  const link = document.createElement("a");
  link.style.display = "none";
  document.body.appendChild(link);
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  document.body.removeChild(link);
}

function saveArrayBuffer(buffer: BlobPart, filename: string) {
  save(new Blob([buffer], { type: "application/octet-stream" }), filename);
}

export default function Stl({ d }: { d: string }) {
  const [preview, setPreview] = useState("");
  const [wireframe, setWireframe] = useState(true);
  const [showCanvas] = useState(true);
  const [gridConfig] = useState({
    // gridSize: [10.5, 10.5],
    cellSize: { value: 10, min: 0, max: 10, step: 0.1 }.value,
    cellThickness: { value: 1, min: 0, max: 5, step: 0.1 }.value,
    cellColor: "#6f6f6f",
    sectionSize: { value: 100, min: 0, max: 10, step: 0.1 }.value,
    sectionThickness: { value: 1.5, min: 0, max: 5, step: 0.1 }.value,
    sectionColor: "#9d4b4b",
    fadeDistance: { value: 250, min: 0, max: 100, step: 1 }.value,
    fadeStrength: { value: 1, min: 0, max: 1, step: 0.1 }.value,
    followCamera: false,
    infiniteGrid: true,
  });

  const meshRef = useRef<Mesh>(null);

  const handleExport = useCallback(() => {
    const exporter = new STLExporter();
    if (meshRef.current) {
      const result = exporter.parse(meshRef.current, { binary: true });
      saveArrayBuffer(
        result,
        `${new Date().toISOString().split(".").shift()}-shape.stl`,
      );
    }
  }, []);

  const handleToggle: ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target }) => setWireframe(target.checked),
    [],
  );

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target }) => {
      // https://stackoverflow.com/questions/38049966/get-image-preview-before-uploading-in-react
      const objectUrl = URL.createObjectURL((target.files as FileList)[0]);
      setPreview(objectUrl);

      // free memory when ever this component is unmounted
      return () => URL.revokeObjectURL(objectUrl);
    },
    [],
  );

  const shape = useMemo(() => {
    const svgString = `<path d="${d}"/>`;
    console.log({ d });
    const svgData = loader.parse(svgString);
    const [path] = svgData.paths;
    return SVGLoader.createShapes(path);
  }, [d]);

  const extrudeSettings = { steps: 1, depth: 2, bevelEnabled: false };

  return (
    <section className={styles.Section}>
      <div
        style={{
          position: "absolute",
          zIndex: 1,
          padding: 8,
        }}
      >
        <button onClick={handleExport}>save as stl</button>
        <input type="file" onChange={handleFileChange} />
        {preview && <button onClick={() => setPreview("")}>x</button>}
        <label>
          <input type="checkbox" onChange={handleToggle} checked={wireframe} />
          <span>wireframe</span>
        </label>
      </div>
      <div style={{ height: 400, position: "relative" }}>
        {preview && (
          <div style={{ position: "absolute", width: "100%", height: "100%" }}>
            <img
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              src={preview}
            />
          </div>
        )}
        {showCanvas && (
          <Canvas
            shadows
            camera={{
              fov: 30,
              position: [-10, -20, 30],
              up: [0, 0, 1],
            }}
          >
            <Extrude
              ref={meshRef}
              args={[shape, extrudeSettings]}
              rotation={[Math.PI, 0, 0]}
              castShadow
            >
              {wireframe ? (
                <meshBasicMaterial color="#2f7f4f" wireframe />
              ) : (
                <meshStandardMaterial color="#9d4b4b" />
              )}
            </Extrude>
            <Grid
              position={[0, 0, 0]}
              rotation={[Math.PI / 2, 0, 0]}
              args={[1, 1]}
              {...gridConfig}
            />
            <OrbitControls makeDefault />
            {!wireframe && <Environment preset="city" />}
            <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
              <GizmoViewport
                axisColors={["#9d4b4b", "#2f7f4f", "#3b5b9d"]}
                labelColor="white"
              />
            </GizmoHelper>
          </Canvas>
        )}
      </div>
    </section>
  );
}
