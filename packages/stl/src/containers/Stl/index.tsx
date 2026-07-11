import * as THREE from "three";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  InputEventHandler,
  MouseEventHandler,
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
import { rib, ric, shift } from "@dev/model/utils";
import defs from "../App/defs";
import points from "../App/points";
import profile from "../App/profile";
import { Target } from "./Target";
import styles from "./styles.module.scss";

const loader = new SVGLoader();

// https://threejs.org/examples/#misc_exporter_stl
function save(href: string, filename: string) {
  const link = document.createElement("a");
  link.style.display = "none";
  document.body.appendChild(link);
  link.href = href;
  link.download = filename;
  link.click();
  document.body.removeChild(link);
}

function saveArrayBuffer(buffer: BlobPart, filename: string) {
  save(
    URL.createObjectURL(
      new Blob([buffer], { type: "application/octet-stream" }),
    ),
    filename,
  );
}

function Ground({ wireframe }: { wireframe: boolean }) {
  const { y: gy, h: gh, d: gd } = defs("ground", 9 - 0.3, 0);
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

  return (
    <mesh
      name="ground"
      castShadow
      position={[0, 0, gy + gh]}
      rotation={[Math.PI, 0, 0]}
    >
      <Geometry>
        <Base name="ground-" geometry={ground} />
      </Geometry>
      {wireframe ? (
        <meshBasicMaterial color="#2f7f4f" wireframe />
      ) : (
        <meshStandardMaterial color="#fff" />
      )}
    </mesh>
  );
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

  const { y: ry, h: rh, d: rd } = defs("garage-windows", 9 - 0.3, 0);
  const garageWindows = useMemo(() => {
    const svgString = `<path d="${rd}"/>`;
    const svgData = loader.parse(svgString);
    const [path] = svgData.paths;

    return new THREE.ExtrudeGeometry(SVGLoader.createShapes(path), {
      steps: 1,
      depth: rh,
      bevelEnabled: false,
    });
  }, [rd, rh]);

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

  const f = profile("window", 0, 0);
  const windowFrames = useMemo(() => {
    const svgString = `<path d="${f}"/>`;
    const svgData = loader.parse(svgString);
    const [path] = svgData.paths;

    return new THREE.ExtrudeGeometry(SVGLoader.createShapes(path), {
      steps: 1,
      depth: 0.1,
      bevelEnabled: false,
    });
  }, [f]);

  return (
    <mesh
      name="ground-floor"
      castShadow
      position={[0, 0, y + h]}
      rotation={[Math.PI, 0, 0]}
    >
      <Geometry>
        <Base name="base-" geometry={base} />
        {/* <Addition name="ground-" geometry={ground} position={[0, 0, h]} /> */}
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
        <Subtraction
          name="garage-"
          geometry={garageWindows}
          position={[0, 0, y + h - rh - ry]}
        />
        <Addition
          name="windowFrames-"
          geometry={windowFrames}
          position={[0.2 + 0.48 - 0.24, 0, 2.8]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
        />
      </Geometry>
      {wireframe ? (
        <meshBasicMaterial color="#2f7f4f" wireframe />
      ) : (
        <meshStandardMaterial color="#fff" />
      )}
    </mesh>
  );
}

function Ceiling({
  wireframe,
  selected,
}: {
  wireframe: boolean;
  selected: string[];
}) {
  const { y: cy, h: ch, d: cd } = defs("ceiling", 9 - 0.3, 0, selected);
  const ceiling = useMemo(() => {
    const svgString = `<path d="${cd}"/>`;
    const svgData = loader.parse(svgString);
    const [path] = svgData.paths;

    return new THREE.ExtrudeGeometry(SVGLoader.createShapes(path), {
      steps: 1,
      depth: ch,
      bevelEnabled: false,
    });
  }, [cd, ch, selected]);

  const { y: ty, h: th, d: td } = defs("terrace-attic", 9 - 0.3, 0);
  const attic = useMemo(() => {
    const svgString = `<path d="${td}"/>`;
    const svgData = loader.parse(svgString);
    const [path] = svgData.paths;

    return new THREE.ExtrudeGeometry(SVGLoader.createShapes(path), {
      steps: 1,
      depth: th,
      bevelEnabled: false,
    });
  }, [td, th]);

  return (
    <mesh
      name="ceiling"
      castShadow
      position={[0, 0, cy + ch]}
      rotation={[Math.PI, 0, 0]}
    >
      <Geometry>
        <Base name="ceiling-" geometry={ceiling} />
        <Addition
          name="attic-"
          geometry={attic}
          position={[0, 0, cy + ch - th - ty]}
        />
        {((x, z) => (
          <>
            <Addition
              name="skylight-"
              geometry={new THREE.BoxGeometry(1.2, 1.2, 0.2)}
              position={[-1.2 + 0.48 + x, -2.1 + 0.48 + z, cy - 2.8 - 0.2 / 2]}
            />
            <Subtraction
              name="skylight-"
              geometry={new THREE.BoxGeometry(1, 1, 0.2 + 0.66 + 0.1)}
              position={[
                -1.2 + 0.48 + x,
                -2.1 + 0.48 + z,
                cy - 2.8 - 0.2 / 2 + 0.65 / 2,
              ]}
            />
          </>
        ))(6.36 - 1 + 0.1, 1 / 2)}
      </Geometry>
      {wireframe ? (
        <meshBasicMaterial color="#2f7f4f" wireframe />
      ) : (
        <meshStandardMaterial color="#fff" />
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

  const { h: fh, d: fd } = defs("front-windows", 9 - 0.3, 0);
  const frontWindows = useMemo(() => {
    const svgString = `<path d="${fd}"/>`;
    const svgData = loader.parse(svgString);
    const [path] = svgData.paths;

    return new THREE.ExtrudeGeometry(SVGLoader.createShapes(path), {
      steps: 1,
      depth: fh,
      bevelEnabled: false,
    });
  }, [fd, fh]);

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

  const f = profile("window", 0, 0);
  const windowFrames = useMemo(() => {
    const svgString = `<path d="${f}"/>`;
    const svgData = loader.parse(svgString);
    const [path] = svgData.paths;

    return new THREE.ExtrudeGeometry(SVGLoader.createShapes(path), {
      steps: 1,
      depth: 0.1,
      bevelEnabled: false,
    });
  }, [f]);

  return (
    <mesh
      name="first-floor"
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
        <Subtraction
          name="windows-"
          geometry={windows}
          position={[0, 0, h - wh]}
        />
        <Subtraction
          name="windows-"
          geometry={frontWindows}
          position={[0, 0, h - fh]}
        />
        <Subtraction
          name="knee-"
          geometry={kneeWindows}
          position={[0, 0, y + h - kh - ky]}
        />
        {/* <Subtraction name="windows-" geometry={windows} position={[0, 0, 0]} /> */}
        <Addition
          name="windowFrames-"
          geometry={windowFrames}
          position={[0.2 + 0.48 - 0.24, 0, h]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
        />
      </Geometry>
      {wireframe ? (
        <meshBasicMaterial color="#2f7f4f" wireframe />
      ) : (
        <meshStandardMaterial color="#fff" />
      )}
    </mesh>
  );
}

function Attic({ wireframe }: { wireframe: boolean }) {
  const { y, h } = defs("first-floor", 9 - 0.3, 0);

  const { y: ty, h: th, d: td } = defs("attic", 9 - 0.3, 0);
  const attic = useMemo(() => {
    const svgString = `<path d="${td}"/>`;
    const svgData = loader.parse(svgString);
    const [path] = svgData.paths;

    return new THREE.ExtrudeGeometry(SVGLoader.createShapes(path), {
      steps: 1,
      depth: th,
      bevelEnabled: false,
    });
  }, [td, th]);

  const { y: gy, h: gh, d: gd } = defs("gable-walls", 9 - 0.3, 0);
  const gable = useMemo(() => {
    const svgString = `<path d="${gd}"/>`;
    const svgData = loader.parse(svgString);
    const [path] = svgData.paths;

    return new THREE.ExtrudeGeometry(SVGLoader.createShapes(path), {
      steps: 1,
      depth: gh,
      bevelEnabled: false,
    });
  }, [gd, gh]);

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

  return (
    <mesh
      name="attic"
      castShadow
      position={[0, 0, ty + th]}
      rotation={[Math.PI, 0, 0]}
    >
      <Geometry>
        <Base name="attic-" geometry={attic} />
        <Addition
          name="gable-"
          geometry={gable}
          position={[0, 0, y + h - gh - gy]}
        />
        {((s = 19.8 - 2 * 0.48, k = 2, n = 24 * k) =>
          Array.from(Array(n + k)).map((_, i) =>
            ((w = 0.24, t = 0.08, h = 6, d = 0.2, m = (s - w) / (n / k)) => (
              <Addition
                key={i}
                name="bar-"
                geometry={new THREE.BoxGeometry(t, h, d)}
                position={(() => [
                  m * Math.floor(i / k) +
                    0.68 +
                    w / 2 +
                    (i % k ? -(w - t) / 2 : (w - t) / 2),
                  h / 2 + 1,
                  d / 2 + 0.02 + (i % k ? -0 : 0),
                ])()}
              />
            ))(),
          ))()}
        <Intersection
          name="profile-"
          geometry={profile1}
          position={[0.2, -5, 1.6 - 0.15]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
        />
      </Geometry>
      {wireframe ? (
        <meshBasicMaterial color="#2f7f4f" wireframe />
      ) : (
        <meshStandardMaterial color="#fff" />
      )}
    </mesh>
  );
}

function Roof({ wireframe }: { wireframe: boolean }) {
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

  const { y: ty, h: th, d: td } = defs("attic", 9 - 0.3, 0);
  const attic = useMemo(() => {
    const svgString = `<path d="${td}"/>`;
    const svgData = loader.parse(svgString);
    const [path] = svgData.paths;

    return new THREE.ExtrudeGeometry(SVGLoader.createShapes(path), {
      steps: 1,
      depth: th,
      bevelEnabled: false,
    });
  }, [td, th]);

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
      position={[0, 0, ty + th]}
      rotation={[Math.PI, 0, 0]}
    >
      <Geometry>
        <Base name="attic-" geometry={attic} />
        <Intersection
          name="profile-"
          geometry={profile1}
          position={[0.2, -5, 1.6 - 0.15]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
        />
        <Addition
          name="roof-"
          geometry={roof}
          // position={[0, 0, y + h - th - ty]}
          position={[0.2, -5, 1.45]}
          rotation={[0, Math.PI / 2, Math.PI / 2]}
        />
        <Subtraction
          name="windows-"
          geometry={windowsS}
          position={[0.2, 0.65, -4.3]}
          rotation={[alpha, 0, 0]}
        />
        <Subtraction
          name="windows-"
          geometry={windowsW}
          position={[0.2, -2.8, 2.8]}
          rotation={[-alpha, 0, 0]}
        />
        {Array.from(Array(32)).map((_, i) =>
          ((
            // https://akademia-fotowoltaiki.pl/wymiary-paneli-fotowoltaicznych/
            w = 1.134,
            // h =1.262,
            h = 1.762,
            // h = 1.961,
            // h = 2.092,
            // h = 2.278,
            d = 0.1,
            m = 0.03,
            r = Math.floor(rib(4)[2] / h),
          ) =>
            [r * 4, r * 5, r * 6].includes(i) ? null : (
              <Addition
                key={i}
                name="pv-"
                geometry={new THREE.BoxGeometry(w, h, d)}
                position={(([a, b], [da, db], x, y) => [
                  0.8 +
                    (w + m) * x +
                    ((rw, wm) => (rw - wm * Math.floor((rw - m) / wm)) / 2)(
                      19.8,
                      w + m,
                    ),
                  7 - b * y + db,
                  0.1 - a * y + da,
                ])(
                  ric(h + m),
                  ric(-1.15 + ((r - 1) * h) / 2),
                  Math.floor(i / r),
                  i % r,
                )}
                rotation={[alpha, 0, 0]}
              />
            ))(),
        )}
      </Geometry>
      {wireframe ? (
        <meshBasicMaterial color="#2f7f4f" wireframe />
      ) : (
        <meshStandardMaterial color="#fff" />
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
        <meshStandardMaterial color="#fff" />
      )}
    </mesh>
  );
}

function Stairs({ wireframe }: { wireframe: boolean }) {
  const w = 1,
    d = 0.28,
    h = 0.1725;
  const a = 1,
    b = 15 + 1,
    c = a + 2;
  let x = 0,
    y = 0,
    z = 0;

  return (
    <mesh
      name="stairs"
      castShadow
      position={[6.62 - 1.72, -8.22 + 1.48, 0.1]}
      rotation={[Math.PI / 2, Math.PI / 2, 0]}
    >
      <Geometry>
        <Base name="stairs-" geometry={new THREE.BoxGeometry(d, h, d)} />
        {Array.from(Array(a)).map((_, i) => (
          <Addition
            key={++x}
            name="step-"
            geometry={new THREE.BoxGeometry(i ? d : d, h, w)}
            position={[(w - d) / 2 - +x * d, x * h, 0]}
          />
        ))}
        {Array.from(Array(b)).map((_, i) => (
          <Addition
            key={++y}
            name="step-"
            geometry={new THREE.BoxGeometry(w, h, i ? d : w)}
            position={[
              (1 - x) * d - d,
              (x + y) * h,
              (i ? (w - d) / 2 : 0) + y * d,
            ]}
          />
        ))}
        {Array.from(Array(c)).map((_, i) => (
          <Addition
            key={++z}
            name="step-"
            geometry={new THREE.BoxGeometry(i ? d : w, h, w)}
            position={[
              (z - x) * d + (i ? (w - d) / 2 : 0),
              (x + y + z) * h,
              (Math.max(y, 1) - 1) * d + w,
            ]}
          />
        ))}
      </Geometry>
      {wireframe ? (
        <meshBasicMaterial color="#2f7f4f" wireframe />
      ) : (
        <meshStandardMaterial color="#fff" />
      )}
    </mesh>
  );
}

function Stairs2({ wireframe }: { wireframe: boolean }) {
  const w = 1.05,
    d = 0.28,
    h = 0.1725;
  const a = 9,
    b = 0,
    c = a + 2;
  let x = 0,
    y = 0,
    z = 0;

  // const { y, h } = defs("stairs", 9 - 0.3, 0);

  return (
    <mesh
      name="stairs"
      castShadow
      position={[6.64, -2.4 - d * 4, 0.1]}
      rotation={[Math.PI / 2, -Math.PI / 2, 0]}
      scale={[1, 1, -1]}
    >
      <Geometry>
        <Base name="stairs-" geometry={new THREE.BoxGeometry(d, h, d)} />
        {Array.from(Array(a)).map((_, i) => (
          <Addition
            key={++x}
            name="step-"
            geometry={new THREE.BoxGeometry(i ? d : d, h, w)}
            position={[(w - d) / 2 - +x * d, x * h, 0]}
          />
        ))}
        {Array.from(Array(b)).map((_, i) => (
          <Addition
            key={++y}
            name="step-"
            geometry={new THREE.BoxGeometry(w, h, i ? d : w)}
            position={[
              (1 - x) * d - d,
              (x + y) * h,
              (i ? (w - d) / 2 : 0) + y * d,
            ]}
          />
        ))}
        {Array.from(Array(c)).map((_, i) => (
          <Addition
            key={++z}
            name="step-"
            geometry={new THREE.BoxGeometry(i ? d : w, h, b || i ? w : 2 * w)}
            position={[
              (z - x) * d + (i ? (w - d) / 2 : 0),
              (x + y + z) * h,
              (Math.max(y, 1) - 1) * d + (b || i ? w : w / 2),
            ]}
          />
        ))}
      </Geometry>
      {wireframe ? (
        <meshBasicMaterial color="#2f7f4f" wireframe />
      ) : (
        <meshStandardMaterial color="#fff" />
      )}
    </mesh>
  );
}

export default function Stl({
  name = "house",
  selected,
}: {
  name?: string;
  selected: string[];
}) {
  const [expanded, setExpanded] = useState(true);
  const [preview, setPreview] = useState("");
  const [wireframe, setWireframe] = useState(false);
  const [showCanvas] = useState(true);
  const [gridConfig] = useState({
    // gridSize: [10.5, 10.5],
    cellSize: { value: 1, min: 0, max: 10, step: 0.1 }.value,
    cellThickness: { value: 0.5, min: 0, max: 5, step: 0.1 }.value,
    cellColor: "#6f6f6f",
    sectionSize: { value: 10, min: 0, max: 10, step: 0.1 }.value,
    sectionThickness: { value: 1.5, min: 0, max: 5, step: 0.1 }.value,
    sectionColor: "#fff",
    fadeDistance: { value: 75, min: 0, max: 100, step: 1 }.value,
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
          // const data: ObjectMap = { nodes: {}, materials: {} };
          const scene = groupRef.current;
          console.log(scene);
          // console.log((groupRef.current.traverse))

          scene.traverse((o) => {
            if (o.name.includes("-")) {
              // o.removeFromParent()
              o.remove();
            } else if (o.name) {
              console.log(o);
              // data.nodes[o.name] = o;
            }
          });
          saveArrayBuffer(
            new OBJExporter().parse(scene),
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

  const handleExpand: ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target }) => setExpanded(target.checked),
    [],
  );

  const handleToggle: ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target }) => setWireframe(target.checked),
    [],
  );

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target }) => {
      const [file] = target.files as FileList;
      if (file) {
        // https://stackoverflow.com/questions/38049966/get-image-preview-before-uploading-in-react
        const objectUrl = URL.createObjectURL(file);
        setPreview(objectUrl);
        // free memory when ever this component is unmounted
        // return () => URL.revokeObjectURL(objectUrl);
      }
    },
    [],
  );

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleSave = useCallback<MouseEventHandler>(
    (e) => {
      e.preventDefault();
      if (canvasRef.current) {
        save(
          canvasRef.current.toDataURL("image/png"),
          `${new Date().toISOString().split(".").shift()}-screenshot.png`,
        );
      }
    },
    [canvasRef],
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
        <button onClick={handleExport}>save as obj</button>{" "}
        <button onClick={handleSave}>save as png</button>{" "}
        <input type="file" onChange={handleFileChange} />
        {preview && <button onClick={() => setPreview("")}>x</button>}{" "}
        <label>
          <input type="checkbox" onChange={handleExpand} checked={expanded} />
          <span>expanded</span>
        </label>{" "}
        <label>
          <input type="checkbox" onChange={handleToggle} checked={wireframe} />
          <span>wireframe</span>
        </label>
      </div>
      <div style={{ height: expanded ? 800 : 200, position: "relative" }}>
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
            ref={canvasRef}
            shadows
            camera={{
              fov: 30,
              position: [-10, -20, 30],
              up: [0, 0, 1],
            }}
            gl={{ preserveDrawingBuffer: true }}
          >
            <group ref={groupRef} name="dom">
              {selected.includes("ground") && <Ground wireframe={wireframe} />}
              {selected.includes("ground-floor") && (
                <GroundFloor wireframe={wireframe} />
              )}
              {selected.includes("ceiling") && (
                <Ceiling wireframe={wireframe} selected={selected} />
              )}
              {selected.includes("first-floor") && (
                <FirstFloor wireframe={wireframe} />
              )}
              {selected.includes("attic") && <Attic wireframe={wireframe} />}
              {selected.includes("roof") && <Roof wireframe={wireframe} />}
              {selected.includes("chimney") && (
                <Chimney wireframe={wireframe} />
              )}
              {selected.includes("stairs") ? (
                <Stairs wireframe={wireframe} />
              ) : (
                <Stairs2 wireframe={wireframe} />
              )}
            </group>
            <Target
              position={(([x, y, z = 2.8 + 0.65]) => [x, -y, z])(
                points(9 - 0.3, 0).bryla()[0],
              )}
              cameraPosition={{
                x: -23.49290137415445,
                y: 11.320843583705859,
                z: 9.972582234518049,
              }}
              zoom={1.1}
            />
            <Target
              position={(([x, y, z = 2.8 + 0.65]) => [x, -y, z])(
                points(9 - 0.3, 0).bryla()[1],
              )}
              cameraPosition={{
                x: 37.1461841006,
                y: 15.025933770520233,
                z: 10.880125836391201,
              }}
              zoom={1}
            />
            <Target
              position={(([x, y, z = 2.8 + 0.65 + 0.2]) => [x, -y, z])(
                points(9 - 0.3, 0).bryla()[2],
              )}
              cameraPosition={{
                x: 49.5410080388676,
                y: -29.996492827845657,
                z: 13.60209681353208,
              }}
              zoom={1.4}
            />
            <Target
              position={(([x, y, z = 2.8 + 0.65]) => [x, -y, z])(
                points(9 - 0.3, 0).bryla()[3],
              )}
              cameraPosition={{
                x: -25.023861038729514,
                y: -30.068002904363183,
                z: 11.990979559929546,
              }}
              zoom={1.4}
            />
            {/* gabinet */}
            <Target
              position={(([x, y, z = 1.2]) => [x, -y, z])(
                shift(points(9 - 0.3, 0).gabinet()[3], [1, -1]),
              )}
              cameraPosition={{
                x: 3.45394145057525,
                y: -7.2118274683613866,
                z: 1.5,
              }}
              zoom={0.5}
            />
            {/* kuchnia */}
            <Target
              position={(([x, y, z = 1.2]) => [x, -y, z])(
                shift(points(9 - 0.3, 0).bryla()[1], [-7, 3]),
              )}
              cameraPosition={{
                x: 14.63235248385119,
                y: -8.215458581486743,
                z: 1.5,
              }}
              zoom={0.5}
            />
            {/* salon */}
            <Target
              position={(([x, y, z = 1.2]) => [x, -y, z])(
                shift(points(9 - 0.3, 0).bryla()[1], [-3, 4]),
              )}
              cameraPosition={{
                x: 11.905121984958786,
                y: -7.368556492116799,
                z: 1.5,
              }}
              zoom={0.5}
            />
            {/* jadalnia */}
            <Target
              position={(([x, y, z = 1.2]) => [x, -y, z])(
                shift(points(9 - 0.3, 0).bryla()[1], [-7, 6]),
              )}
              cameraPosition={{
                x: 16.1701783203853,
                y: -5.055494278961566,
                z: 1.5,
              }}
              zoom={0.5}
            />
            {/* korytarz */}
            <Target
              position={(([x, y, z = 1.2]) => [x, -y, z])(
                shift(points(9 - 0.3, 0).bryla()[1], [-13, 5]),
              )}
              cameraPosition={{
                x: 6.506995241353838,
                y: -10.420035271857179,
                z: 1.5,
              }}
              zoom={0.5}
            />
            {/* schody */}
            <Target
              position={(([x, y, z = 2.8 + 1.2]) => [x, -y, z])(
                shift(points(9 - 0.3, 0).bryla()[1], [-12, 5]),
              )}
              cameraPosition={{
                x: 6.6895928057855185,
                y: -0.3534213357828042,
                z: 2.1657663564714573,
              }}
              zoom={0.3}
            />
            {/* sypialnia1 */}
            <Target
              position={(([x, y, z = 2.8 + 0.65 + 1.2]) => [x, -y, z])(
                shift(points(9 - 0.3, 0).bryla()[0], [1, 2.5]),
              )}
              cameraPosition={{
                x: 4.711495657363763,
                y: -3.8116733807981706,
                z: 2.8 + 0.65 + 1.5,
              }}
              zoom={0.5}
            />
            {/* sypialnia2 */}
            <Target
              position={(([x, y, z = 2.8 + 0.65 + 1.2]) => [x, -y, z])(
                shift(points(9 - 0.3, 0).bryla()[0], [1, 3.44 + 0.16 + 1]),
              )}
              cameraPosition={{
                x: 4.69058788246462,
                y: -4.655383801796499,
                z: 2.8 + 0.65 + 1.5,
              }}
              zoom={0.5}
            />
            <Grid
              position={[0, 0, 0]}
              rotation={[Math.PI / 2, 0, 0]}
              args={[1, 1]}
              {...gridConfig}
            />
            <OrbitControls makeDefault />
            {!wireframe && (
              <Environment
                preset="city"
                environmentRotation={[
                  (90 * Math.PI) / 180,
                  (90 * Math.PI) / 180,
                  (30 * Math.PI) / 180,
                ]}
              />
            )}
            <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
              <GizmoViewport
                axisColors={["#fff", "#2f7f4f", "#3b5b9d"]}
                labelColor="white"
              />
            </GizmoHelper>
          </Canvas>
        )}
      </div>
    </section>
  );
}
