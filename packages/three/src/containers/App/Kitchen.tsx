import * as THREE from "three";
import { useRef, ComponentPropsWithoutRef, useEffect, useMemo } from "react";
import {
  Edges,
  MeshTransmissionMaterial,
  Outlines,
  PivotControls,
  Wireframe,
} from "@react-three/drei";
import {
  Addition,
  Base,
  Geometry,
  // Intersection,
  Subtraction,
} from "@react-three/csg";
import * as shapes from "./shapes";

interface Cabinet {
  geometry?: THREE.BoxGeometry | THREE.PlaneGeometry;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}

export function Kitchen(props: ComponentPropsWithoutRef<"group">) {
  const boxes = useMemo(() => {
    const { kuchnia } = shapes.rooms();
    const [a, b, c, d] = kuchnia;
    const [ax, ay] = a;
    const [cx, cy] = c;
    const [dx, dy] = d;
    const margin = 0.01;

    return ([] as Cabinet[])
      .concat(
        shapes
          .cabinets1()
          .reduce(
            (result, [w, h = 0.8, d = 0.6, o = 0.1]) => {
              const { space = 0, width = 0 } = result.length
                ? result[result.length - 1]
                : {};
              return result.concat({
                width: w,
                height: h,
                depth: d,
                offset: o,
                space: space + width,
              });
            },
            [] as {
              width: number;
              height: number;
              depth: number;
              offset: number;
              space: number;
            }[],
          )
          .map(
            ({ width, height, depth, offset, space }): Cabinet => ({
              geometry: new THREE.BoxGeometry(
                width - 2 * margin,
                height - 2 * margin,
                depth + margin,
              ),
              position: [
                ax + space + width / 2,
                height / 2 + offset,
                ay + depth / 2,
              ],
            }),
          ),
      )
      .concat(
        shapes
          .cabinets1a()
          .reduce(
            (result, [w, h = 0.8, d = 0.61, o = 0.1]) => {
              const { space = 0, width = 0 } = result.length
                ? result[result.length - 1]
                : {};
              return result.concat({
                width: w,
                height: h,
                depth: d,
                offset: o,
                space: space + width,
              });
            },
            [] as {
              width: number;
              height: number;
              depth: number;
              offset: number;
              space: number;
            }[],
          )
          .map(
            ({ width, height, depth, offset, space }): Cabinet => ({
              geometry: new THREE.BoxGeometry(
                width - 2 * margin,
                height - 2 * margin,
                depth + margin,
              ),
              position: [
                ax + space + width / 2,
                height / 2 + offset,
                ay + depth / 2,
              ],
            }),
          ),
      )
      .concat(
        shapes
          .cabinets1b()
          .reduce(
            (result, [w, h = 1.2, d = 0.61, o = 0.1 + 0.8]) => {
              const { space = 0, width = 0 } = result.length
                ? result[result.length - 1]
                : {};
              return result.concat({
                width: w,
                height: h,
                depth: d,
                offset: o,
                space: space + width,
              });
            },
            [] as {
              width: number;
              height: number;
              depth: number;
              offset: number;
              space: number;
            }[],
          )
          .map(
            ({ width, height, depth, offset, space }): Cabinet => ({
              geometry: new THREE.BoxGeometry(
                width - 2 * margin,
                height - 2 * margin,
                depth + margin,
              ),
              position: [
                ax + space + width / 2,
                height / 2 + offset,
                ay + depth / 2,
              ],
            }),
          ),
      )
      .concat(
        shapes
          .cabinets1c()
          .reduce(
            (result, [w, h = 0.7, d = 0.62, o = 0.1 + 0.8 + 1.2]) => {
              const { space = 0, width = 0 } = result.length
                ? result[result.length - 1]
                : {};
              return result.concat({
                width: w,
                height: h,
                depth: d,
                offset: o,
                space: space + width,
              });
            },
            [] as {
              width: number;
              height: number;
              depth: number;
              offset: number;
              space: number;
            }[],
          )
          .map(
            ({ width, height, depth, offset, space }): Cabinet => ({
              geometry: new THREE.BoxGeometry(
                width - 2 * margin,
                height - 2 * margin,
                depth + margin,
              ),
              position: [
                ax + space + width / 2,
                height / 2 + offset,
                ay + depth / 2,
              ],
            }),
          ),
      )
      .concat(
        [
          [0.7, 0],
          [3 * 0.6 + 0 * 0.8, 0.06, 0.4, 0.9 + 0.8],
          [1 * 0.8, 1.1, 0.5, 0.9 + 0.8],
          [1 * 0.6, 0.06, 0.4, 0.9 + 0.8],
        ]
          .reduce(
            (result, [w, h = 0.8, d = 0.6, o = 0.1]) => {
              const { space = 0, width = 0 } = result.length
                ? result[result.length - 1]
                : {};
              return result.concat({
                width: w,
                height: h,
                depth: d,
                offset: o,
                space: space + width,
              });
            },
            [] as {
              width: number;
              height: number;
              depth: number;
              offset: number;
              space: number;
            }[],
          )
          .map(
            ({ width, height, depth, offset, space }): Cabinet => ({
              geometry: new THREE.BoxGeometry(
                width - 2 * margin,
                height - 2 * margin,
                depth + margin,
              ),
              position: [
                ax + space + width / 2,
                height / 2 + offset,
                ay + depth / 2,
              ],
            }),
          ),
      )
      .concat(
        [
          [0.6, 0],
          [6 * 0.6, 0.04, 0.6, 0.89],
        ]
          .reduce(
            (result, [w, h = 0.8, d = 0.6, o = 0.1]) => {
              const { space = 0, width = 0 } = result.length
                ? result[result.length - 1]
                : {};
              return result.concat({
                width: w,
                height: h,
                depth: d,
                offset: o,
                space: space + width,
              });
            },
            [] as {
              width: number;
              height: number;
              depth: number;
              offset: number;
              space: number;
            }[],
          )
          .map(
            ({ width, height, depth, offset, space }): Cabinet => ({
              geometry: new THREE.BoxGeometry(
                width - 2 * margin,
                height - 2 * margin,
                depth + margin,
              ),
              position: [
                ax + space + width / 2,
                height / 2 + offset,
                ay + depth / 2,
              ],
            }),
          ),
      )
      .concat(
        [[8 * 0.6, 0.1, 0.6, 0]]
          .reduce(
            (result, [w, h = 0.8, d = 0.6, o = 0.1]) => {
              const { space = 0, width = 0 } = result.length
                ? result[result.length - 1]
                : {};
              return result.concat({
                width: w,
                height: h,
                depth: d,
                offset: o,
                space: space + width,
              });
            },
            [] as {
              width: number;
              height: number;
              depth: number;
              offset: number;
              space: number;
            }[],
          )
          .map(
            ({ width, height, depth, offset, space }): Cabinet => ({
              geometry: new THREE.BoxGeometry(
                width - 2 * margin,
                height - 0 * margin,
                depth + margin - 0.1,
              ),
              position: [
                ax + space + width / 2,
                height / 2 + offset,
                ay + depth / 2,
              ],
            }),
          ),
      )
      .concat(
        [[0.8], [0.8], [0.8]]
          .reduce(
            (result, [w, h = 0.8, d = 0.6, o = 0.1]) => {
              const { space = 0, width = 0 } = result.length
                ? result[result.length - 1]
                : {};
              return result.concat({
                width: w,
                height: h,
                depth: d,
                offset: o,
                space: space + width,
              });
            },
            [] as {
              width: number;
              height: number;
              depth: number;
              offset: number;
              space: number;
            }[],
          )
          .map(
            ({ width, height, depth, offset, space }): Cabinet => ({
              geometry: new THREE.BoxGeometry(
                width - 2 * margin,
                height - 2 * margin,
                depth + margin,
              ),
              position: [
                ax + 1.2 + space + width / 2,
                height / 2 + offset,
                ay + 1.8 + depth / 2,
              ],
            }),
          ),
      )
      .concat(
        1
          ? []
          : [
              [0.6, 0.9, 0.3, 0],
              [0.6, 0.9, 0.3, 0],
              [0.6, 0.9, 0.3, 0],
              [0.6, 0.9, 0.3, 0],
            ]
              .reduce(
                (result, [w, h = 0.8, d = 0.6, o = 0.1]) => {
                  const { space = 0, width = 0 } = result.length
                    ? result[result.length - 1]
                    : {};
                  return result.concat({
                    width: w,
                    height: h,
                    depth: d,
                    offset: o,
                    space: space + width,
                  });
                },
                [] as {
                  width: number;
                  height: number;
                  depth: number;
                  offset: number;
                  space: number;
                }[],
              )
              .map(
                ({ width, height, depth, offset, space }): Cabinet => ({
                  geometry: new THREE.BoxGeometry(
                    width - 2 * margin,
                    height - 2 * margin,
                    depth + margin,
                  ),
                  position: [
                    ax + 1.2 + space + width / 2,
                    height / 2 + offset,
                    ay + 2.4 + depth / 2,
                  ],
                }),
              ),
      )
      .concat(
        [
          [0.04, 0.9, 1, 0],
          [2.4, 0.04, 1, 0.89],
          [0.04, 0.9, 1, 0],
        ]
          .reduce(
            (result, [w, h = 0.9, d = 0.6, o = 0]) => {
              const { space = 0, width = 0 } = result.length
                ? result[result.length - 1]
                : {};
              return result.concat({
                width: w,
                height: h,
                depth: d,
                offset: o,
                space: space + width,
              });
            },
            [] as {
              width: number;
              height: number;
              depth: number;
              offset: number;
              space: number;
            }[],
          )
          .map(
            ({ width, height, depth, offset, space }): Cabinet => ({
              geometry: new THREE.BoxGeometry(
                width - 2 * margin,
                height - 2 * margin,
                depth + margin,
              ),
              position: [
                ax + 1.2 + space + width / 2 - 0.04,
                height / 2 + offset,
                ay + 1.8 + depth / 2,
              ],
            }),
          ),
      )
      .concat(
        [[2.4, 0.1, 0.6, 0]]
          .reduce(
            (result, [w, h = 0.9, d = 0.6, o = 0]) => {
              const { space = 0, width = 0 } = result.length
                ? result[result.length - 1]
                : {};
              return result.concat({
                width: w,
                height: h,
                depth: d,
                offset: o,
                space: space + width,
              });
            },
            [] as {
              width: number;
              height: number;
              depth: number;
              offset: number;
              space: number;
            }[],
          )
          .map(
            ({ width, height, depth, offset, space }): Cabinet => ({
              geometry: new THREE.BoxGeometry(
                width - 2 * margin,
                height - 0 * margin,
                depth + margin - 0.1,
              ),
              position: [
                ax + 1.2 + space + width / 2,
                height / 2 + offset,
                ay + 1.8 + depth / 2,
              ],
            }),
          ),
      )
      .concat(
        shapes
          .cabinets2()
          .reduce(
            (result, [w, h = 2.8, d = 0.6, o = 0]) => {
              const { space = 1.8, width = 0 } = result.length
                ? result[result.length - 1]
                : {};
              return result.concat({
                width: w,
                height: h,
                depth: d,
                offset: o,
                space: space + width,
              });
            },
            [] as {
              width: number;
              height: number;
              depth: number;
              offset: number;
              space: number;
            }[],
          )
          .map(
            ({ width, height, depth, offset, space }): Cabinet => ({
              geometry: new THREE.BoxGeometry(
                depth + margin,
                height - 2 * margin,
                width - 2 * margin,
              ),
              position: [
                ax + depth / 2 - 0.6,
                height / 2 + offset,
                ay + space + width / 2,
              ],
            }),
          ),
      )
      .concat(
        shapes
          .cabinets2a()
          .reduce(
            (result, [w, h = 0.8, d = 0.62, o = 0.1]) => {
              const { space = 1.8, width = 0 } = result.length
                ? result[result.length - 1]
                : {};
              return result.concat({
                width: w,
                height: h,
                depth: d,
                offset: o,
                space: space + width,
              });
            },
            [] as {
              width: number;
              height: number;
              depth: number;
              offset: number;
              space: number;
            }[],
          )
          .map(
            ({ width, height, depth, offset, space }): Cabinet => ({
              geometry: new THREE.BoxGeometry(
                depth + margin,
                height - 2 * margin,
                width - 2 * margin,
              ),
              position: [
                ax + depth / 2 - 0.6,
                height / 2 + offset,
                ay + space + width / 2,
              ],
            }),
          ),
      )
      .concat(
        shapes
          .cabinets2b()
          .reduce(
            (result, [w, h = 1.2, d = 0.62, o = 0.1 + 0.8]) => {
              const { space = 1.8, width = 0 } = result.length
                ? result[result.length - 1]
                : {};
              return result.concat({
                width: w,
                height: h,
                depth: d,
                offset: o,
                space: space + width,
              });
            },
            [] as {
              width: number;
              height: number;
              depth: number;
              offset: number;
              space: number;
            }[],
          )
          .map(
            ({ width, height, depth, offset, space }): Cabinet => ({
              geometry: new THREE.BoxGeometry(
                depth + margin,
                height - 2 * margin,
                width - 2 * margin,
              ),
              position: [
                ax + depth / 2 - 0.6,
                height / 2 + offset,
                ay + space + width / 2,
              ],
            }),
          ),
      )
      .concat(
        shapes
          .cabinets2c()
          .reduce(
            (result, [w, h = 0.7, d = 0.62, o = 0.1 + 0.8 + 1.2]) => {
              const { space = 1.8, width = 0 } = result.length
                ? result[result.length - 1]
                : {};
              return result.concat({
                width: w,
                height: h,
                depth: d,
                offset: o,
                space: space + width,
              });
            },
            [] as {
              width: number;
              height: number;
              depth: number;
              offset: number;
              space: number;
            }[],
          )
          .map(
            ({ width, height, depth, offset, space }): Cabinet => ({
              geometry: new THREE.BoxGeometry(
                depth + margin,
                height - 2 * margin,
                width - 2 * margin,
              ),
              position: [
                ax + depth / 2 - 0.6,
                height / 2 + offset,
                ay + space + width / 2,
              ],
            }),
          ),
      )
      .concat(
        shapes
          .cabinets3()
          .reduce(
            (result, [w, h = 2.8, d = 0.2, o = 0]) => {
              const { space = 0, width = 0 } = result.length
                ? result[result.length - 1]
                : {};
              return result.concat({
                width: w,
                height: h,
                depth: d,
                offset: o,
                space: space + width,
              });
            },
            [] as {
              width: number;
              height: number;
              depth: number;
              offset: number;
              space: number;
            }[],
          )
          .map(
            ({ width, height, depth, offset, space }): Cabinet => ({
              geometry: new THREE.BoxGeometry(
                depth + margin,
                height - 2 * margin,
                width - 2 * margin,
              ),
              position: [
                dx - depth / 2,
                height / 2 + offset,
                dy - (space + width / 2),
              ],
            }),
          )
          .concat(
            ((w, h) => [
              {
                geometry: new THREE.BoxGeometry(w, h, 0.2),
                position: [ax + w / 2, -0.1, ay + h / 2],
                rotation: [-Math.PI / 2, 0, 0],
              },
              {
                geometry: new THREE.BoxGeometry(4, h - 1.9, 0.2),
                position: [ax + w + 4 / 2, -0.1, ay + h / 2 + 1.9 / 2],
                rotation: [-Math.PI / 2, 0, 0],
              },
              // N
              {
                geometry: new THREE.PlaneGeometry(w, 2.8),
                position: [ax + w / 2, 2.8 / 2, ay],
                rotation: [0, 0, 0],
              },
              {
                geometry: new THREE.PlaneGeometry(4, 2.8),
                position: [ax + w + 4 / 2, 2.8 / 2, ay + 1.9],
                rotation: [0, 0, 0],
              },
              // S
              {
                geometry: new THREE.PlaneGeometry(w, 2.8),
                position: [ax + w / 2, 2.8 / 2, ay + h],
                rotation: [0, Math.PI, 0],
              },
              // E
              ((h) => ({
                geometry: new THREE.PlaneGeometry(h, 2.8),
                position: [ax + w, 2.8 / 2, ay + h / 2],
                rotation: [0, -Math.PI / 2, 0],
              }))(1.9),
              ((h) => ({
                geometry: new THREE.PlaneGeometry(h, 2.8),
                position: [ax + w + 4, 2.8 / 2, ay + h / 2],
                rotation: [0, -Math.PI / 2, 0],
              }))(5.14),
              // W
              ((h) => ({
                geometry: new THREE.PlaneGeometry(h, 2.8),
                position: [ax, 2.8 / 2, ay + h / 2],
                // position:[ax,2.8/2,ay+1.8/2],
                rotation: [0, Math.PI / 2, 0],
              }))(1.8),
            ])(Math.abs(ax - cx), Math.abs(ay - cy)),
          ),
      );
  }, []);

  const windows = useMemo(() => {
    const { kuchnia } = shapes.rooms();
    const [a, b, c, d] = kuchnia;
    const [ax, ay] = a;
    const [bx, by] = b;
    const [cx, cy] = c;
    const [dx, dy] = d;
    const margin = 0.01;
    return ([] as Cabinet[])
      .concat(
        shapes
          .windows()
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
        [
          [0.62 + 0.8 + 0.48 + 5.14 - 2.1 * 2, 0],
          [2.1, 2.8],
          [2.1, 2.8],
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
                bx + 0.48 / 2 + 4,
                height / 2 + offset,
                by + (space + width / 2),
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
                0.16 + margin,
                height - 2 * margin,
                width - 2 * margin,
              ),
              position: [
                ax - 0.16 / 2,
                height / 2 + offset,
                ay + (space + width / 2),
              ],
            }),
          ),
      )
      .concat(
        [
          [0.48, 0],
          [2, 2.8],
          [2, 2.8],
          [0.48, 0],
          [2, 2.8],
          [2, 2.8],
        ]
          .reduce(
            (result, [w, h, o = 0]) => {
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
                cx - (space + width / 2) + 4.48,
                height / 2 + offset,
                cy + 0.48 / 2,
              ],
            }),
          ),
      );
    // .concat(
    //   (({ bryla }): Cabinet => {
    //     const [a, b, c, d] = bryla;
    //     const [bx, by] = b;

    //     const w = 4,
    //       h = 1.9;

    //     return {
    //       geometry: new THREE.BoxGeometry(w, 2.8, h + margin),
    //       position: [bx - w / 2, 2.8 / 2, by + h / 2],
    //     };
    //   })(shapes.rooms()),
    // );
  }, []);

  return (
    <group {...props}>
      <mesh>
        <Geometry computeVertexNormals>
          {/* <Base geometry={new THREE.PlaneGeometry(5,7)} rotation={[-Math.PI/2,0,0]} position={[12,0,2]}/> */}
          {/* W */}
          {/* <Addition geometry={new THREE.PlaneGeometry(7,2.8)} rotation={[0,Math.PI/2,0]} position={[12-5/2,2.8/2,2]}/> */}
          {/* E */}
          {/* <Addition geometry={new THREE.PlaneGeometry(7,2.8)} rotation={[0,-Math.PI/2,0]} position={[12+5/2,2.8/2,2]}/> */}
          {/* N */}
          {/* <Addition geometry={new THREE.PlaneGeometry(5,2.8)} rotation={[0,0,0]} position={[12,2.8/2,2-7/2]}/> */}
          {/* S */}
          {/* <Addition geometry={new THREE.PlaneGeometry(5,2.8)} rotation={[0,Math.PI,0]} position={[12,2.8/2,2+7/2]}/> */}
          {boxes.map((props, index) => (
            <Addition key={index} {...props} />
          ))}
          {windows.map((props, index) =>
            0 ? (
              <Addition key={index} {...props} />
            ) : (
              <Subtraction key={index} {...props} />
            ),
          )}
          {((w) => (
            <Addition
              geometry={new THREE.BoxGeometry(w, 0.06, 0.522)}
              position={[10.72 + 0.7 + 0.6 * 3 + 0.8 * 0.5, 0.9, 0.78]}
            />
          ))(0.802)}
          {((w, h, d) => (
            <Addition
              geometry={new THREE.BoxGeometry(w, 0.06, h)}
              position={[10.72 + 0.7 + 0.6 * 1.5, 0.9, 0.78]}
            />
          ))(0.53, 0.51, 0.1)}
          {((w, h, d) => (
            <Subtraction
              geometry={new THREE.BoxGeometry(w - 0.03, d, h - 0.03 - 0.08)}
              position={[
                10.72 + 0.7 + 0.6 * 1.5,
                0.94 - d / 2,
                0.78 + (d - 0.03) / 2,
              ]}
            />
          ))(0.53, 0.51, 0.18)}
        </Geometry>
        <meshStandardMaterial color="white" />
      </mesh>
      <Tap position={[10.72 + 0.7 + 1.5 * 0.6, 0.9, 0.6]} />
    </group>
  );
}

export function Tap(props: ComponentPropsWithoutRef<"mesh">) {
  const x = 0.225,
    h = 0.27,
    r = 0.05,
    d = 0.025;
  return (
    <mesh {...props}>
      <Geometry computeVertexNormals>
        <Base
          geometry={
            new THREE.ExtrudeGeometry(
              (() => {
                const shape = new THREE.Shape();
                shape.absellipse(0, 0, d / 2, d / 2, 0, 2 * Math.PI);
                return shape;
              })(),
              (() => {
                const extrudePath = new THREE.CatmullRomCurve3([
                  new THREE.Vector3(0, 0, 0),
                  new THREE.Vector3(0, h - r, 0),
                  new THREE.Vector3(0, h, r),
                  new THREE.Vector3(0, h, x - r),
                ]);
                return {
                  steps: 10,
                  bevelEnabled: false,
                  extrudePath,
                };
              })(),
            )
          }
        />
        <Addition
          geometry={
            new THREE.ExtrudeGeometry(
              (() => {
                const shape = new THREE.Shape();
                shape.absellipse(0, 0, 0.045 / 2, 0.045 / 2, 0, 2 * Math.PI);
                return shape;
              })(),
              (() => {
                const extrudePath = new THREE.CatmullRomCurve3([
                  new THREE.Vector3(0, 0, 0),
                  new THREE.Vector3(0, 0.1, 0),
                ]);
                return {
                  steps: 10,
                  bevelEnabled: false,
                  extrudePath,
                };
              })(),
            )
          }
        />
        <Addition
          position={[0, 0.1, 0]}
          geometry={
            new THREE.ExtrudeGeometry(
              (() => {
                const shape = new THREE.Shape();
                shape.absellipse(0, 0, 0.045 / 2, 0.045 / 2, 0, 2 * Math.PI);
                return shape;
              })(),
              (() => {
                const extrudePath = new THREE.CatmullRomCurve3([
                  new THREE.Vector3(-0.03, 0, 0),
                  new THREE.Vector3(0.07, 0, 0),
                ]);
                return {
                  steps: 10,
                  bevelEnabled: false,
                  extrudePath,
                };
              })(),
            )
          }
        />
      </Geometry>
      <meshStandardMaterial color="white" />
    </mesh>
  );
}

export function Shelf(props: ComponentPropsWithoutRef<"mesh">) {
  const w = 1.22,
    d = 0.02;
  return (
    <mesh {...props}>
      <Geometry computeVertexNormals>
        <Base geometry={new THREE.PlaneGeometry(1.22, 2.8)} />
        {/* W */}
        {[1, 1, 1, 1].map((_, index, list) => (
          <Addition
            key={index}
            geometry={new THREE.BoxGeometry(d, 2.8, 0.4)}
            rotation={[0, 0, 0]}
            position={[
              (index * (w - d)) / (list.length - 1) - (w - d) / 2,
              0,
              0.4 / 2,
            ]}
          />
        ))}
        {[0.1, 0.9, 0.9 + 1 * 0.4, 0.9 + 2 * 0.4, 0.9 + 3 * 0.4, 2.8].map(
          (h, index) => (
            <Addition
              key={index}
              geometry={new THREE.BoxGeometry(w, d, 0.4)}
              rotation={[0, 0, 0]}
              position={[0, h - 2.8 / 2, 0.4 / 2]}
            />
          ),
        )}
        {((h) => (
          <Addition
            geometry={new THREE.BoxGeometry(w, h, 0.4 - 2 * d)}
            position={[0, -(2.8 - h) / 2, (0.4 - d) / 2]}
            rotation={[0, 0, 0]}
          />
        ))(0.9)}
        {((h) => (
          <Addition
            geometry={new THREE.BoxGeometry(w, h, 0.4 - 2 * d)}
            position={[0, (2.8 - h) / 2, (0.4 - d) / 2]}
            rotation={[0, 0, 0]}
          />
        ))(0.7)}
      </Geometry>
      <meshStandardMaterial color="white" />
    </mesh>
  );
}

export function Chair(props: ComponentPropsWithoutRef<"group">) {
  const w = 0.4,
    d = 0.4,
    z = 0.08,
    h = 0.46,
    h2 = 0.79,
    s = 0.04;
  return (
    <group {...props}>
      <mesh position={[0, h - z / 2, 0]}>
        <Geometry computeVertexNormals>
          <Base geometry={new THREE.BoxGeometry(d, z, w)} />
          {[1, 1, -1, -1].map((_, index, list) => (
            <Addition
              key={index}
              geometry={new THREE.BoxGeometry(s, index % 2 ? h2 : h, s)}
              rotation={[0, 0, 0]}
              position={[
                ((2 * (index % 2) - 1) * (d - s)) / 2,
                ((index % 2 ? h2 : h) + z) / 2 - h,
                ((2 * (Math.floor(index / 2) % 2) - 1) * (w - s)) / 2,
              ]}
            />
          ))}
          <Addition
            geometry={new THREE.BoxGeometry(0.02, 0.2, w)}
            rotation={[0, 0, 0]}
            position={[-(0.02 - d) / 2 - s, h2 - h + (z - 0.2) / 2, 0]}
          />
        </Geometry>
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
}

export function Stool(props: ComponentPropsWithoutRef<"group">) {
  const w = 0.4,
    d = 0.4,
    z = 0.08,
    h = 0.69,
    h2 = 0.89,
    s = 0.04;
  return (
    <group {...props}>
      <mesh position={[0, h - z / 2, 0]}>
        <Geometry computeVertexNormals>
          <Base geometry={new THREE.BoxGeometry(d, z, w)} />
          {[1, 1, -1, -1].map((_, index, list) => (
            <Addition
              key={index}
              geometry={new THREE.BoxGeometry(s, index % 2 ? h2 : h, s)}
              rotation={[0, 0, 0]}
              position={[
                ((2 * (index % 2) - 1) * (d - s)) / 2,
                ((index % 2 ? h2 : h) + z) / 2 - h,
                ((2 * (Math.floor(index / 2) % 2) - 1) * (w - s)) / 2,
              ]}
            />
          ))}
          <Addition
            geometry={new THREE.BoxGeometry(0.02, 0.2, w)}
            rotation={[0, 0, 0]}
            position={[-(0.02 - d) / 2 - s, h2 - h + (z - 0.2) / 2, 0]}
          />
        </Geometry>
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
}

export function Table(props: ComponentPropsWithoutRef<"group">) {
  const w = 1.6 + 0.6,
    d = 1,
    z = 0.07,
    h = 0.75,
    s = 0.16;
  return (
    <group {...props}>
      <mesh position={[0, h - z / 2, 0]}>
        <Geometry computeVertexNormals>
          <Base geometry={new THREE.BoxGeometry(d, 0.01, w)} />
          <Addition
            geometry={new THREE.BoxGeometry(d, z, s)}
            position={[0, 0, (w - s) / 2]}
          />
          <Addition
            geometry={new THREE.BoxGeometry(d, z, s)}
            position={[0, 0, (s - w) / 2]}
          />
          <Addition
            geometry={new THREE.BoxGeometry(d, z, 0.6 - s - 0.01)}
            position={[0, 0, -(w - s - 0.6 - 0.01) / 2]}
          />
          <Addition
            geometry={new THREE.BoxGeometry(d, z, 1.6 - s - 0.02)}
            position={[0, 0, (w - s - 1.6) / 2]}
          />
          {[1, 1, -1, -1].map((_, index, list) => (
            <Addition
              key={index}
              geometry={new THREE.BoxGeometry(z, h - z, s)}
              rotation={[0, 0, 0]}
              position={[
                ((2 * (index % 2) - 1) * (d - z)) / 2,
                -h / 2,
                ((2 * (Math.floor(index / 2) % 2) - 1) * (w - s)) / 2,
              ]}
            />
          ))}
        </Geometry>
        <meshStandardMaterial color="white" />
      </mesh>
      {[1, 1, 1, 1, 1, 1].map((_, index, list) => (
        <Chair
          position={[
            ((2 * (Math.floor(index / 3) % 2) - 1) * (d + 0.5)) / 2,
            0,
            (((index % 3) - 1) * (w - 0.8)) / 2,
          ]}
          rotation={[0, ((Math.floor(index / 3) % 2) - 1) * Math.PI, 0]}
        />
      ))}
    </group>
  );
}

export function Coffee(props: ComponentPropsWithoutRef<"mesh">) {
  const w = 1.22,
    d = 0.02,
    z = 0.6;
  return (
    <mesh {...props}>
      <Geometry computeVertexNormals>
        <Base geometry={new THREE.PlaneGeometry(1.22, 2.8)} />
        {/* W */}
        {[1, 1, 1].map((_, index, list, h = 0.5 + z) => (
          <Addition
            key={index}
            geometry={new THREE.BoxGeometry(d, h, z)}
            rotation={[0, 0, 0]}
            position={[
              (index * (w - d)) / (list.length - 1) - (w - d) / 2,
              (2.8 - h) / 2 - d,
              z / 2,
            ]}
          />
        ))}
        {[1, 1, 1].map((_, index, list, h = 0.9) => (
          <Addition
            key={index}
            geometry={new THREE.BoxGeometry(d, h, z)}
            rotation={[0, 0, 0]}
            position={[
              (index * (w - d)) / (list.length - 1) - (w - d) / 2,
              -(2.8 - h) / 2,
              z / 2,
            ]}
          />
        ))}
        {[0.1, 0.5, 0.7, 0.9, 0.9 + 2 * 0.4, 0.9 + 3 * 0.4, 2.8 - d].map(
          (h, index) => (
            <Addition
              key={index}
              geometry={new THREE.BoxGeometry(w, d, z)}
              rotation={[0, 0, 0]}
              position={[0, h - 2.8 / 2, z / 2]}
            />
          ),
        )}
        {((h) => (
          <Addition
            geometry={new THREE.BoxGeometry(w, h, z - 2 * d)}
            position={[0, -(2.8 - h) / 2, (z - d) / 2]}
            rotation={[0, 0, 0]}
          />
        ))(0.9)}
        {((h) => (
          <Addition
            geometry={new THREE.BoxGeometry(w, h, z - 2 * d)}
            position={[0, (2.8 - h) / 2 - d, (z - d) / 2]}
            rotation={[0, 0, 0]}
          />
        ))(0.7)}
      </Geometry>
      <meshStandardMaterial color="white" />
    </mesh>
  );
}

export function Island(props: ComponentPropsWithoutRef<"mesh">) {
  const w = 1.22,
    d = 0.02;
  return (
    <mesh {...props}>
      <Geometry computeVertexNormals>
        <Base geometry={new THREE.PlaneGeometry(1.22, 0.9)} />
        {/* W */}
        {[1, 1, 1].map((_, index, list) => (
          <Addition
            key={index}
            geometry={new THREE.BoxGeometry(d, 0.9, 0.4)}
            rotation={[0, 0, 0]}
            position={[
              (index * (w - d)) / (list.length - 1) - (w - d) / 2,
              0,
              0.4 / 2,
            ]}
          />
        ))}
        {[0.1 + 1 * 0.4, 0.1 + 2 * 0.4].map((h, index) => (
          <Addition
            key={index}
            geometry={new THREE.BoxGeometry(w, d, 0.4)}
            rotation={[0, 0, 0]}
            position={[0, h - 0.9 / 2, 0.4 / 2]}
          />
        ))}
        {((h) => (
          <Addition
            geometry={new THREE.BoxGeometry(w, h, 0.4 - 2 * d)}
            position={[0, -(0.9 - h) / 2, (0.4 - d) / 2]}
            rotation={[0, 0, 0]}
          />
        ))(0.1)}
      </Geometry>
      <meshStandardMaterial color="white" />
    </mesh>
  );
}

export default function House(props: object) {
  return (
    <>
      {[1, 1].map((_, index) => (
        <Stool
          position={[2.5 + index * 0.5, 0, 1.4]}
          rotation={[0, -Math.PI / 2, 0]}
        />
      ))}
      <Table position={[2.2, 0, 4.2]} rotation={[0, Math.PI / 2, 0]} />
      <Shelf
        position={[-0.67, 2.8 / 2, 5.5 - 1.22 / 2]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Coffee
        position={[-0.88, 2.8 / 2, 2.08 - 1.2 / 2]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Island position={[1.22 / 2 + 0.9, 0.9 / 2, 0.9]} rotation={[0, 0, 0]} />
      <Kitchen position={[-11, 0, -2]} />
    </>
  );
}
