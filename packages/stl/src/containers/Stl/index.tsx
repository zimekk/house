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
  type Group,
  type Mesh,
  CatmullRomCurve3,
  Vector3,
} from "three";
import { GLTFExporter } from "three/addons/exporters/GLTFExporter.js";
import { STLExporter } from "three/addons/exporters/STLExporter.js";
import { OBJExporter } from "three/addons/exporters/OBJExporter.js";
import { SVGLoader } from "three/addons/loaders/SVGLoader.js";
import defs from "../App/defs";
import profile from "../App/profile";
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

function GroundFloor({ wireframe }: { wireframe: boolean }) {
  const { y, h, d } = defs("ground-floor", 9 - 0.3, 0);
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

  const { h: gh, d: gd } = defs("ground", 9 - 0.3, 0);
  const ground = useMemo(() => {
    const svgString = `<path d="${gd}"/>`;
    const svgData = loader.parse(svgString);
    const [path] = svgData.paths;

    return new THREE.ExtrudeGeometry(SVGLoader.createShapes(path), {
      steps: 1,
      depth: gh,
      bevelEnabled: false,
    });
  }, [gd, gh]);

  const { h: wh, d: wd } = defs("ground-floor-windows", 9 - 0.3, 0);
  const windows = useMemo(() => {
    const svgString = `<path d="${wd}"/>`;
    const svgData = loader.parse(svgString);
    const [path] = svgData.paths;

    return new THREE.ExtrudeGeometry(SVGLoader.createShapes(path), {
      steps: 1,
      depth: wh,
      bevelEnabled: false,
    });
  }, [wd, wh]);

  const { y: ky, h: kh, d: kd } = defs("kitchen-windows", 9 - 0.3, 0);
  const kitchenWindows = useMemo(() => {
    const svgString = `<path d="${kd}"/>`;
    const svgData = loader.parse(svgString);
    const [path] = svgData.paths;

    return new THREE.ExtrudeGeometry(SVGLoader.createShapes(path), {
      steps: 1,
      depth: kh,
      bevelEnabled: false,
    });
  }, [kd, kh]);

  const { h: dh, d: dd } = defs("garage-doors", 9 - 0.3, 0);
  const garage = useMemo(() => {
    const svgString = `<path d="${dd}"/>`;
    const svgData = loader.parse(svgString);
    const [path] = svgData.paths;

    return new THREE.ExtrudeGeometry(SVGLoader.createShapes(path), {
      steps: 1,
      depth: dh,
      bevelEnabled: false,
    });
  }, [dd, dh]);

  return (
    <mesh
      name="parter"
      castShadow
      position={[0, 0, y + h]}
      rotation={[Math.PI, 0, 0]}
    >
      <Geometry>
        <Base name="base-" geometry={base} />
        <Addition name="ground-" geometry={ground} position={[0, 0, h]} />
        <Subtraction name="windows-" geometry={windows} position={[0, 0, 0]} />
        <Subtraction
          name="kitchen-"
          geometry={kitchenWindows}
          position={[0, 0, y + h - kh - ky]}
        />
        <Subtraction
          name="garage-"
          geometry={garage}
          position={[0, 0, h - dh]}
        />
      </Geometry>
      {wireframe ? (
        <meshBasicMaterial color="#2f7f4f" wireframe />
      ) : (
        <meshStandardMaterial color="#9d4b4b" />
      )}
    </mesh>
  );
}

function FirstFloor({ wireframe }: { wireframe: boolean }) {
  const { y, h, d } = defs("first-floor", 9 - 0.3, 0);
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

  const p = profile("profile", 9, 5);
  const profile1 = useMemo(() => {
    const svgString = `<path d="${p}"/>`;
    const svgData = loader.parse(svgString);
    const [path] = svgData.paths;

    return new THREE.ExtrudeGeometry(SVGLoader.createShapes(path), {
      steps: 1,
      depth: 19.8,
      bevelEnabled: false,
    });
  }, [p]);

  const { h: ch, d: cd } = defs("ceiling", 9 - 0.3, 0);
  const ceiling = useMemo(() => {
    const svgString = `<path d="${cd}"/>`;
    const svgData = loader.parse(svgString);
    const [path] = svgData.paths;

    return new THREE.ExtrudeGeometry(SVGLoader.createShapes(path), {
      steps: 1,
      depth: ch,
      bevelEnabled: false,
    });
  }, [cd, ch]);

  const { h: wh, d: wd } = defs("first-floor-windows", 9 - 0.3, 0);
  const windows = useMemo(() => {
    const svgString = `<path d="${wd}"/>`;
    const svgData = loader.parse(svgString);
    const [path] = svgData.paths;

    return new THREE.ExtrudeGeometry(SVGLoader.createShapes(path), {
      steps: 1,
      depth: wh,
      bevelEnabled: false,
    });
  }, [wd, wh]);

  const { y: ky, h: kh, d: kd } = defs("knee-windows", 9 - 0.3, 0);
  const kneeWindows = useMemo(() => {
    const svgString = `<path d="${kd}"/>`;
    const svgData = loader.parse(svgString);
    const [path] = svgData.paths;

    return new THREE.ExtrudeGeometry(SVGLoader.createShapes(path), {
      steps: 1,
      depth: kh,
      bevelEnabled: false,
    });
  }, [kd, kh]);

  return (
    <mesh
      name="parter"
      castShadow
      position={[0, 0, y + h]}
      rotation={[Math.PI, 0, 0]}
    >
      <Geometry>
        <Base name="base-" geometry={base} />
        <Intersection
          name="profile-"
          geometry={profile1}
          position={[0.2, -5, y + h - 5]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
        />
        <Addition name="ceiling-" geometry={ceiling} position={[0, 0, h]} />
        <Subtraction
          name="windows-"
          geometry={windows}
          position={[0, 0, h - wh]}
        />
        <Subtraction
          name="knee-"
          geometry={kneeWindows}
          position={[0, 0, y + h - kh - ky]}
        />
      </Geometry>
      {wireframe ? (
        <meshBasicMaterial color="#2f7f4f" wireframe />
      ) : (
        <meshStandardMaterial color="#9d4b4b" />
      )}
    </mesh>
  );
}

function Roof({ wireframe }: { wireframe: boolean }) {
  const { y, h } = defs("first-floor", 9 - 0.3, 0);
  const r = profile("roof", 9, 5);
  const ws = profile("windows-s", 9 - 0.5, 2);
  const ww = profile("windows-w", 9 - 0.5, 2);

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
    <mesh
      name="roof"
      castShadow
      position={[0.2, 5, y + h - 1.2]}
      rotation={[-Math.PI / 2, Math.PI / 2, 0]}
    >
      <Geometry>
        <Base name="roof-" geometry={roof} />
        <Subtraction
          name="windows-"
          geometry={windowsS}
          position={[19, 4, 0]}
          rotation={[Math.PI / 2, +alpha, Math.PI / 2]}
        />
        <Subtraction
          name="windows-"
          geometry={windowsW}
          position={[9, -3, 0]}
          rotation={[Math.PI / 2, -alpha, Math.PI / 2]}
        />
      </Geometry>
      {wireframe ? (
        <meshBasicMaterial color="#2f7f4f" wireframe />
      ) : (
        <meshStandardMaterial color="#9d4b4b" />
      )}
    </mesh>
  );
}

function Chimney({ wireframe }: { wireframe: boolean }) {
  const { y, h, d } = defs("chimney", 9 - 0.3, 0);

  const chimney = useMemo(() => {
    const svgString = `<path d="${d}"/>`;
    const svgData = loader.parse(svgString);
    const [path] = svgData.paths;

    return new THREE.ExtrudeGeometry(SVGLoader.createShapes(path), {
      steps: 1,
      depth: h,
      bevelEnabled: false,
    });
  }, [d, h]);

  return (
    <mesh
      name="chimney"
      castShadow
      position={[0, 0, y + h]}
      rotation={[Math.PI, 0, 0]}
    >
      <Geometry>
        <Base name="chimney-" geometry={chimney} />
      </Geometry>
      {wireframe ? (
        <meshBasicMaterial color="#2f7f4f" wireframe />
      ) : (
        <meshStandardMaterial color="#9d4b4b" />
      )}
    </mesh>
  );
}

export default function Stl({ name }: { name: string }) {
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

  const groupRef = useRef<Group>(null);

  const handleExport = useCallback(async () => {
    // const exporter = new GLTFExporter();
    // const exporter = new STLExporter();
    // const exporter = new OBJExporter();
    if (groupRef.current) {
      // const result = await exporter.parseAsync(groupRef.current, { binary: true });
      // const result = exporter.parse(groupRef.current, { binary: true });
      // saveArrayBuffer(
      //   result,
      //   // `${new Date().toISOString().split(".").shift()}-shape.glb`,
      //   // `${new Date().toISOString().split(".").shift()}-shape.stl`,
      //   `${new Date().toISOString().split(".").shift()}-shape.obj`,
      // );
      const format = "obj" as string;
      switch (format) {
        case "stl":
          saveArrayBuffer(
            new STLExporter().parse(groupRef.current, { binary: true }),
            `${new Date().toISOString().split(".").shift()}-shape.stl`,
          );
          break;
        case "obj":
          saveArrayBuffer(
            new OBJExporter().parse(groupRef.current),
            `${new Date().toISOString().split(".").shift()}-${name}.obj`,
          );
          break;
      }
      // exporter.parse(
      //     groupRef.current,
      //     function (gltf) {
      //         // OnDone callback
      //         const output = JSON.stringify(gltf, null, 2);
      //         const blob = new Blob([output], { type: 'application/json' });

      //         const link = document.createElement('a');
      //         link.href = URL.createObjectURL(blob);
      //         link.download = `${new Date().toISOString().split(".").shift()}-shape.gltf`
      //         link.click();
      //     },
      //     function (error) {
      //         // OnError callback
      //         console.log('An error parsing to GLTF', error);
      //     },
      //     { binary: false } // Options object
      // );
    }
  }, [groupRef, name]);

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
            <group ref={groupRef} name="dom">
              <GroundFloor wireframe={wireframe} />
              <FirstFloor wireframe={wireframe} />
              <Roof wireframe={wireframe} />
              <Chimney wireframe={wireframe} />
            </group>
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
