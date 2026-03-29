import * as THREE from "three";
import { useRef, ComponentPropsWithoutRef, useEffect, useMemo } from "react";
import { Outlines, PivotControls, Wireframe } from "@react-three/drei";
import {
  Addition,
  Base,
  Geometry,
  // Intersection,
  Subtraction,
} from "@react-three/csg";
import * as shapes from "./shapes";

export function Roof(props: ComponentPropsWithoutRef<"mesh">) {
  const shape = useMemo(() => {
    // return new THREE.ShapeGeometry(shapes.attic());
    const geometry = new THREE.ExtrudeGeometry(shapes.roof(), {
      depth: 20,
      bevelEnabled: false,
    });
    geometry.rotateY(Math.PI / 2);
    geometry.translate(0, 2.8 + 0.65 + 0.1, 8);
    return geometry;
  }, []);

  const chimney = useMemo(() => {
    const radius = 0.15,
      height = 2;
    const geometry = new THREE.CylinderGeometry(radius, radius, height);
    geometry.translate(0, height / 2, 0);
    return geometry;
  }, []);

  return (
    <mesh {...props}>
      <Geometry computeVertexNormals>
        <Base geometry={shape} />
        <Addition geometry={chimney} position={[20 - 4, 2.8 + 0.65 + 2.8, 2]} />
      </Geometry>
      {/* <Outlines thickness={5} color="hotpink" /> */}
      <Wireframe />
      <meshStandardMaterial envMapIntensity={0.25} />
    </mesh>
  );
}

export function Attic(props: ComponentPropsWithoutRef<"mesh">) {
  const offset = 2.8 + 0.65;
  const shape = useMemo(() => {
    // return new THREE.ShapeGeometry(shapes.attic());
    const geometry = new THREE.ExtrudeGeometry(shapes.attic(), {
      depth: 2.8,
      bevelEnabled: false,
    });
    geometry.translate(0, 0, -(2.8 + offset));
    return geometry;
  }, []);

  const inter = useMemo(() => {
    return new THREE.ExtrudeGeometry(shapes.gable(), {
      depth: 20,
      bevelEnabled: false,
    });
  }, []);

  const addit = useMemo(() => {
    return new THREE.ExtrudeGeometry(shapes.roof(), {
      depth: 20,
      bevelEnabled: false,
    });
  }, []);

  return (
    <mesh {...props} rotation={[Math.PI / 2, 0, 0]}>
      <Geometry computeVertexNormals>
        <Base geometry={shape} />
        <Subtraction
          geometry={inter}
          position={[20, 0, -offset]}
          rotation={[0, -Math.PI / 2, Math.PI / 2]}
        />
      </Geometry>
      {/* <Outlines thickness={5} color="hotpink" /> */}
      <Wireframe />
      <meshStandardMaterial envMapIntensity={0.25} />
    </mesh>
  );
}

export function Ground(props: ComponentPropsWithoutRef<"mesh">) {
  const shape = useMemo(() => {
    // return new THREE.ShapeGeometry(shapes);
    return new THREE.ExtrudeGeometry(shapes.ground(), {
      depth: 2.8,
      bevelEnabled: false,
    });
  }, []);

  const windows = useMemo(() => {
    const { kuchnia } = shapes.rooms();
    const [a, b, c, d] = kuchnia;
    const [ax, ay] = a;
    const [dx, dy] = d;
    const [bx, by] = b;
    const margin = 0.01;
    return ([] as Cabinet[])
      .concat(
        [
          [0.6, 0],
          [5 * 0.6, 0.6, 0.9],
        ]
          .reduce(
            (result, [w, h = 0.9, o = 0.6]) => {
              const { space = 0, width = 0 } = result.length
                ? result[result.length - 1]
                : {};
              return result.concat({
                width: w,
                height: h,
                offset: o,
                space: space + width,
              });
            },
            [] as {
              width: number;
              height: number;
              offset: number;
              space: number;
            }[],
          )
          .map(
            ({ width, height, offset, space }): Cabinet => ({
              geometry: new THREE.BoxGeometry(
                width - 2 * margin,
                height - 2 * margin,
                0.48 + margin,
              ),
              position: [
                ax + space + width / 2,
                height / 2 + offset,
                ay - 0.48 / 2,
              ],
            }),
          ),
      )
      .concat(
        [
          [0.62, 0],
          [0.8, 2.8],
        ]
          .reduce(
            (result, [w, h = 0.9, o = 0]) => {
              const { space = 0, width = 0 } = result.length
                ? result[result.length - 1]
                : {};
              return result.concat({
                width: w,
                height: h,
                offset: o,
                space: space + width,
              });
            },
            [] as {
              width: number;
              height: number;
              offset: number;
              space: number;
            }[],
          )
          .map(
            ({ width, height, offset, space }): Cabinet => ({
              geometry: new THREE.BoxGeometry(
                0.48 + margin,
                height - 2 * margin,
                width - 2 * margin,
              ),
              position: [
                bx + 0.48 / 2,
                height / 2 + offset,
                by + (space + width / 2),
              ],
            }),
          ),
      )
      .concat(
        (({ bryla }): Cabinet => {
          const [a, b, c, d] = bryla;
          const [bx, by] = b;

          const w = 4,
            h = 1.9;

          return {
            geometry: new THREE.BoxGeometry(w, 2.8, h + margin),
            position: [bx - w / 2, 2.8 / 2, by + h / 2],
          };
        })(shapes.rooms()),
      );
  }, []);

  return (
    <mesh {...props}>
      <Geometry computeVertexNormals>
        <Base
          geometry={shape}
          position={[0, 2.8, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        {windows.map((props, index) =>
          0 ? (
            <Addition key={index} {...props} />
          ) : (
            <Subtraction key={index} {...props} />
          ),
        )}
      </Geometry>
      <Wireframe />
      <meshStandardMaterial envMapIntensity={0.25} />
    </mesh>
  );
}

const box = new THREE.BoxGeometry();

interface Cabinet {
  geometry?: THREE.BoxGeometry;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}

export function Kitchen(props: ComponentPropsWithoutRef<"mesh">) {
  const boxes = useMemo(() => {
    const { kuchnia } = shapes.rooms();
    const [a, b, c, d] = kuchnia;
    const [ax, ay] = a;
    const [dx, dy] = d;
    const margin = 0.01;

    return ([] as Cabinet[])
      .concat(
        [[0.6, 2], [0.6], [0.6], [0.6], [0.6], [0.6], [0.6, 2, 0.4]]
          .reduce(
            (result, [w, h = 0.9, d = 0.6]) => {
              const { space = 0, width = 0 } = result.length
                ? result[result.length - 1]
                : {};
              return result.concat({
                width: w,
                height: h,
                depth: d,
                space: space + width,
              });
            },
            [] as {
              width: number;
              height: number;
              depth: number;
              space: number;
            }[],
          )
          .map(
            ({ width, height, depth, space }): Cabinet => ({
              geometry: new THREE.BoxGeometry(
                width - 2 * margin,
                height - 2 * margin,
                depth + margin,
              ),
              position: [ax + space + width / 2, height / 2, ay + depth / 2],
            }),
          ),
      )
      .concat(
        [
          [0.6, 2],
          [0.6, 2],
          [0.6, 2],
          [0.6, 2],
        ]
          .reduce(
            (result, [w, h = 0.9, d = 0.5]) => {
              const { space = 2, width = 0 } = result.length
                ? result[result.length - 1]
                : {};
              return result.concat({
                width: w,
                height: h,
                depth: d,
                space: space + width,
              });
            },
            [] as {
              width: number;
              height: number;
              depth: number;
              space: number;
            }[],
          )
          .map(
            ({ width, height, depth, space }): Cabinet => ({
              geometry: new THREE.BoxGeometry(
                depth + margin,
                height - 2 * margin,
                width - 2 * margin,
              ),
              position: [ax - depth / 2, height / 2, ay + space + width / 2],
            }),
          ),
      )
      .concat(
        [
          [0.6, 2],
          [0.6, 2],
        ]
          .reduce(
            (result, [w, h = 0.9, d = 0.2]) => {
              const { space = 0, width = 0 } = result.length
                ? result[result.length - 1]
                : {};
              return result.concat({
                width: w,
                height: h,
                depth: d,
                space: space + width,
              });
            },
            [] as {
              width: number;
              height: number;
              depth: number;
              space: number;
            }[],
          )
          .map(
            ({ width, height, depth, space }): Cabinet => ({
              geometry: new THREE.BoxGeometry(
                depth + margin,
                height - 2 * margin,
                width - 2 * margin,
              ),
              position: [dx - depth / 2, height / 2, dy - (space + width / 2)],
            }),
          ),
      );
  }, []);

  return (
    <mesh {...props}>
      <Geometry computeVertexNormals>
        <Base geometry={box} />
        {boxes.map((props, index) => (
          <Addition key={index} {...props} />
        ))}
      </Geometry>
      <Wireframe />
      <meshStandardMaterial envMapIntensity={0.25} />
    </mesh>
  );
}

export function House(props: object) {
  return (
    <>
      <Roof position={[-10, 0, -5]} />
      <Attic position={[-10, 0, -5]} />
      <Ground position={[-10, 0, -5]} />
      <Kitchen position={[-10, 0, -5]} />
    </>
  );
}
