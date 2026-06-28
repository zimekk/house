import * as THREE from "three";
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
  Geometry,
  Base,
  Subtraction,
  Intersection,
  Addition,
  CSGGeometryRef,
} from "@react-three/csg";
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
// import { OBJExporter } from "three/addons/exporters/OBJExporter.js";
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

export default function Stl({
  path,
  p,
  r,
  ws,
  ww,
}: {
  path: {
    y: number;
    h: number;
    d: string;
  };
  p?: string;
  r?: string;
  ws?: string;
  ww?: string;
}) {
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
  const { y, h, d } = path;

  const meshRef = useRef<Mesh>(null);

  const handleExport = useCallback(() => {
    const exporter = new STLExporter();
    // const exporter = new OBJExporter();
    if (meshRef.current) {
      const result = exporter.parse(meshRef.current, { binary: true });
      saveArrayBuffer(
        result,
        `${new Date().toISOString().split(".").shift()}-shape.stl`,
        // `${new Date().toISOString().split(".").shift()}-shape.obj`,
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

  const base = useMemo(() => {
    const svgString = `<path d="${d}"/>`;
    const svgData = loader.parse(svgString);
    const [path] = svgData.paths;

    return new THREE.ExtrudeGeometry(SVGLoader.createShapes(path), {
      steps: 1,
      depth: h,
      bevelEnabled: false,
    });
  }, [d, h]);

  const roof = useMemo(() => {
    const svgString = `<path d="${r}"/>`;
    const svgData = loader.parse(svgString);
    const [path] = svgData.paths;

    return new THREE.ExtrudeGeometry(SVGLoader.createShapes(path), {
      steps: 1,
      depth: 19.8,
      bevelEnabled: false,
    });
  }, [r]);

  const profile = useMemo(() => {
    const svgString = `<path d="${p}"/>`;
    const svgData = loader.parse(svgString);
    const [path] = svgData.paths;

    return new THREE.ExtrudeGeometry(SVGLoader.createShapes(path), {
      steps: 1,
      depth: 19.8,
      bevelEnabled: false,
    });
  }, [p]);

  const windowsS = useMemo(() => {
    const svgString = `<path d="${ws}"/>`;
    const svgData = loader.parse(svgString);
    const [path] = svgData.paths;

    return new THREE.ExtrudeGeometry(SVGLoader.createShapes(path), {
      steps: 1,
      depth: 0.35,
      bevelEnabled: false,
    });
  }, [ws]);

  const windowsW = useMemo(() => {
    const svgString = `<path d="${ww}"/>`;
    const svgData = loader.parse(svgString);
    const [path] = svgData.paths;

    return new THREE.ExtrudeGeometry(SVGLoader.createShapes(path), {
      steps: 1,
      depth: 0.35,
      bevelEnabled: false,
    });
  }, [ww]);

  const alpha = (35 * Math.PI) / 180;

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
            {/* <Extrude
              ref={meshRef}
              args={[shape, extrudeSettings]}
              position={[0, 0, y + h]}
              rotation={[Math.PI, 0, 0]}
              castShadow
            >
              {wireframe ? (
                <meshBasicMaterial color="#2f7f4f" wireframe />
              ) : (
                <meshStandardMaterial color="#9d4b4b" />
              )}
            </Extrude> */}
            <mesh
              ref={meshRef}
              castShadow
              position={[0, 0, y + h]}
              rotation={[Math.PI, 0, 0]}
            >
              <Geometry>
                <Base name="shape" geometry={base} />
                {/* <Intersection
                  name="profile"
                  geometry={profile}
                  position={[0.2, -5, y + h - 5]}
                  rotation={[Math.PI / 2, Math.PI / 2, 0]}
                /> */}
                <Addition
                  name="roof"
                  geometry={roof}
                  position={[0.2, -5, y + h - 5]}
                  rotation={[Math.PI / 2, Math.PI / 2, 0]}
                />
                <Addition
                  name="windows"
                  geometry={windowsS}
                  position={[0.2, -0.1, y + h - 11.3]}
                  rotation={[alpha, 0, 0]}
                />
                <Addition
                  name="windows"
                  geometry={windowsW}
                  position={[0.2, -1.7, y + h - 4.4]}
                  rotation={[-alpha, 0, 0]}
                />
              </Geometry>
              {wireframe ? (
                <meshBasicMaterial color="#2f7f4f" wireframe />
              ) : (
                <meshStandardMaterial color="#9d4b4b" />
              )}
            </mesh>
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
