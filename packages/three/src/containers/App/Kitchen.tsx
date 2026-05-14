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
import { type Point, inner, shift } from "@dev/model/utils";
import * as shapes from "./shapes";

interface Cabinet {
  geometry?: THREE.BoxGeometry | THREE.PlaneGeometry;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}

function createFloor([a, c]: [Point, Point]): Cabinet {
  const [ax, ay] = a;
  const [cx, cy] = c;

  const w = Math.abs(ax - cx),
    h = Math.abs(ay - cy);

  return {
    geometry: new THREE.BoxGeometry(w, h, 0.2),
    position: [ax + w / 2, -0.1, ay + h / 2],
    rotation: [-Math.PI / 2, 0, 0],
  };
}

function createWalls(list: [Point, Point][]): Cabinet[] {
  return list.map(([a, b]) => {
    const [ax, ay] = a;
    const [bx, by] = b;
    const dx = bx - ax;
    const dy = by - ay;

    console.log({ ax, ay, bx, by, dx, dy });

    return dx
      ? {
          geometry: new THREE.PlaneGeometry(dx, 2.8),
          position: [ax + dx / 2, 2.8 / 2, ay],
          rotation: [0, 0, 0],
        }
      : {
          geometry: new THREE.PlaneGeometry(dy, 2.8),
          position: [ax, 2.8 / 2, ay + dy / 2],
          rotation: [0, -Math.PI / 2, 0],
        };
  });
}

function createWindows(a: Point, b: Point, list: [number, number, number?][]) {
  const [ax, ay] = a;
  const [bx, by] = b;
  const margin = 0.01;

  const dx = bx - ax;
  const dy = by - ay;

  return list
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
        geometry: dx
          ? new THREE.BoxGeometry(
              width - 2 * margin,
              height - 2 * margin,
              0.16 + margin,
            )
          : new THREE.BoxGeometry(
              0.16 + margin,
              height - 2 * margin,
              width - 2 * margin,
            ),
        position: dx
          ? dx > 0
            ? [ax + (space + width / 2), height / 2 + offset, ay - 0.16 / 2]
            : [ax - (space + width / 2), height / 2 + offset, ay - 0.16 / 2]
          : dy > 0
            ? [ax - 0.16 / 2, height / 2 + offset, ay + (space + width / 2)]
            : [ax - 0.16 / 2, height / 2 + offset, ay - (space + width / 2)],
      }),
    );
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
          ),
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
      <Sofa position={[17, 0, 5.5]} rotation={[0, Math.PI / 2, 0]} />
    </group>
  );
}

export function Pantry(props: ComponentPropsWithoutRef<"group">) {
  const boxes = useMemo(() => {
    const { spizarnia } = shapes.rooms();
    const [a, b, c, d] = inner(spizarnia, 0.16 / 2);
    const [ax, ay] = a;
    const [bx, by] = b;
    const [cx, cy] = c;
    // const [dx, dy] = d;
    const margin = 0.01;

    return ([] as Cabinet[])
      .concat(
        [[0.6], [0.6], [0.6], [0.7, 2.7]]
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
                bx - space - width / 2,
                height / 2 + offset,
                by + depth / 2,
              ],
            }),
          ),
      )
      .concat(
        ((w, h) => [
          {
            geometry: new THREE.BoxGeometry(w, h, 0.2),
            position: [ax + w / 2, -0.1, ay + h / 2],
            rotation: [-Math.PI / 2, 0, 0],
          },
          // N
          {
            geometry: new THREE.PlaneGeometry(w, 2.8),
            position: [ax + w / 2, 2.8 / 2, ay],
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
          }))(h),
          // W
          ((h) => ({
            geometry: new THREE.PlaneGeometry(h, 2.8),
            position: [ax, 2.8 / 2, ay + h / 2],
            // position:[ax,2.8/2,ay+1.8/2],
            rotation: [0, Math.PI / 2, 0],
          }))(h),
        ])(Math.abs(ax - cx), Math.abs(ay - cy)),
      );
  }, []);

  const windows = useMemo(() => {
    const { spizarnia } = shapes.rooms();
    const [a, b, c, d] = inner(spizarnia, 0.16 / 2);
    const [ax, ay] = a;
    const [bx, by] = b;
    const [cx, cy] = c;
    const [dx, dy] = d;
    const margin = 0.01;
    return ([] as Cabinet[]).concat(
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
    );
  }, []);

  return (
    <group {...props}>
      <mesh>
        <Geometry computeVertexNormals>
          {/* <Base geometry={new THREE.PlaneGeometry(5,7)} rotation={[-Math.PI/2,0,0]} position={[12,0,2]}/> */}
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
        </Geometry>
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
}

export function Toilet(props: ComponentPropsWithoutRef<"group">) {
  const boxes = useMemo(() => {
    const { lazienka } = shapes.rooms();
    const [a, b, c, d] = inner(lazienka, 0.16 / 2);
    const [ax, ay] = a;
    const [bx, by] = b;
    const [cx, cy] = c;
    // const [dx, dy] = d;
    const margin = 0.01;

    return ([] as Cabinet[]).concat(
      ((w, h) => [
        {
          geometry: new THREE.BoxGeometry(w, h, 0.2),
          position: [ax + w / 2, -0.1, ay + h / 2],
          rotation: [-Math.PI / 2, 0, 0],
        },
        // N
        {
          geometry: new THREE.PlaneGeometry(w, 2.8),
          position: [ax + w / 2, 2.8 / 2, ay],
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
        }))(h),
        // W
        ((h) => ({
          geometry: new THREE.PlaneGeometry(h, 2.8),
          position: [ax, 2.8 / 2, ay + h / 2],
          // position:[ax,2.8/2,ay+1.8/2],
          rotation: [0, Math.PI / 2, 0],
        }))(h),
      ])(Math.abs(ax - cx), Math.abs(ay - cy)),
    );
  }, []);

  const windows = useMemo(() => {
    const { lazienka } = shapes.rooms();
    const [a, b, c, d] = inner(lazienka, 0.16 / 2);
    const [ax, ay] = a;
    const [bx, by] = b;
    const [cx, cy] = c;
    const [dx, dy] = d;
    const margin = 0.01;
    return ([] as Cabinet[]).concat(
      [
        [0.2, 0],
        [0.8, 2.8],
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
              cx - (space + width / 2),
              height / 2 + offset,
              cy + 0.48 / 2,
            ],
          }),
        ),
    );
  }, []);

  return (
    <group {...props}>
      <mesh>
        <Geometry computeVertexNormals>
          {/* <Base geometry={new THREE.PlaneGeometry(5,7)} rotation={[-Math.PI/2,0,0]} position={[12,0,2]}/> */}
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
        </Geometry>
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
}

export function Entrance(props: ComponentPropsWithoutRef<"group">) {
  const boxes = useMemo(() => {
    const { korytarz } = shapes.rooms();
    const [a, b, c, d] = inner(korytarz, 0.16 / 2);
    const [ax, ay] = a;
    const [cx, cy] = shift(c, [0.16, 0]);
    // const [dx, dy] = d;
    // const margin = 0.01;

    return ([] as Cabinet[]).concat(
      ((w, h) => [
        {
          geometry: new THREE.BoxGeometry(w, h, 0.2),
          position: [ax + w / 2, -0.1, ay + h / 2],
          rotation: [-Math.PI / 2, 0, 0],
        },
        // N
        {
          geometry: new THREE.PlaneGeometry(w, 2.8),
          position: [ax + w / 2, 2.8 / 2, ay],
          rotation: [0, 0, 0],
        },
        // S
        {
          geometry: new THREE.PlaneGeometry(w, 2.8),
          position: [ax + w / 2, 2.8 / 2, ay + h],
          rotation: [0, Math.PI, 0],
        },
        // W
        ((h) => ({
          geometry: new THREE.PlaneGeometry(h, 2.8),
          position: [ax, 2.8 / 2, ay + h / 2],
          // position:[ax,2.8/2,ay+1.8/2],
          rotation: [0, Math.PI / 2, 0],
        }))(h),
      ])(Math.abs(ax - cx), Math.abs(ay - cy)),
    );
  }, []);

  const windows = useMemo(() => {
    const { korytarz } = shapes.rooms();
    const [a, b, c, d] = inner(korytarz, 0.16 / 2);
    const [ax, ay] = a;
    const [bx, by] = b;
    const [cx, cy] = c;
    const [dx, dy] = d;
    const margin = 0.01;
    return ([] as Cabinet[]).concat(
      [
        [1, 2.8],
        [0.6, 2.8],
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
              dx - 0.16 / 2,
              height / 2 + offset,
              dy - (space + width / 2),
            ],
          }),
        ),
    );
  }, []);

  return (
    <group {...props}>
      <mesh>
        <Geometry computeVertexNormals>
          {/* <Base geometry={new THREE.PlaneGeometry(5,7)} rotation={[-Math.PI/2,0,0]} position={[12,0,2]}/> */}
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
        </Geometry>
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
}

export function Hall(props: ComponentPropsWithoutRef<"group">) {
  const boxes = useMemo(() => {
    const { schody1 } = shapes.rooms();
    const [a, b, c, d] = inner(schody1, 0.16 / 2);
    const [ax, ay] = a;
    const [cx, cy] = shift(c, [0.16, 0]);

    return ([] as Cabinet[]).concat(
      ((w, h) => [
        {
          geometry: new THREE.BoxGeometry(w, h, 0.2),
          position: [ax + w / 2, -0.1, ay + h / 2],
          rotation: [-Math.PI / 2, 0, 0],
        },
        // N
        {
          geometry: new THREE.PlaneGeometry(w, 2.8),
          position: [ax + w / 2, 2.8 / 2, ay],
          rotation: [0, 0, 0],
        },
        // S
        {
          geometry: new THREE.PlaneGeometry(w, 2.8),
          position: [ax + w / 2, 2.8 / 2, ay + h],
          rotation: [0, Math.PI, 0],
        },
        // W
        ((h, w) => ({
          geometry: new THREE.PlaneGeometry(h - w, 2.8),
          position: [ax, 2.8 / 2, ay + w / 2 + h / 2],
          rotation: [0, Math.PI / 2, 0],
        }))(h, 1.6 - 0.16),
      ])(Math.abs(ax - cx), Math.abs(ay - cy)),
    );
  }, []);

  const windows = useMemo(() => {
    const { schody1 } = shapes.rooms();
    const [a, b, c, d] = inner(schody1, 0.16 / 2);
    const [ax, ay] = a;
    const [bx, by] = b;
    const [cx, cy] = c;
    const [dx, dy] = d;
    const margin = 0.01;
    return ([] as Cabinet[])
      .concat(
        [
          [1.72, 0],
          [2.1, 2.8],
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
                cx - (space + width / 2),
                height / 2 + offset,
                cy + 0.48 / 2,
              ],
            }),
          ),
      )
      .concat(
        [
          [0.6 + 0.2, 0],
          [0.8, 2.8],
          [1.2, 0],
          [0.8, 2.8],
          [1.2, 0],
          [0.8, 2.8],
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
                bx - (space + width / 2),
                height / 2 + offset,
                by + 0.48 / 2,
              ],
            }),
          ),
      );
  }, []);

  return (
    <group {...props}>
      <mesh>
        <Geometry computeVertexNormals>
          {/* <Base geometry={new THREE.PlaneGeometry(5,7)} rotation={[-Math.PI/2,0,0]} position={[12,0,2]}/> */}
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
        </Geometry>
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
}

export function Garage(props: ComponentPropsWithoutRef<"group">) {
  const boxes = useMemo(() => {
    const { garaz } = shapes.rooms();
    const [a, b, c, d] = inner(garaz, 0.16 / 2);
    const [ax, ay] = a;
    const [cx, cy] = c;
    // const [dx, dy] = d;
    // const margin = 0.01;

    return ([] as Cabinet[]).concat(
      ((w, h) => [
        {
          geometry: new THREE.BoxGeometry(w, h, 0.2),
          position: [ax + w / 2, -0.1, ay + h / 2],
          rotation: [-Math.PI / 2, 0, 0],
        },
        // N
        {
          geometry: new THREE.PlaneGeometry(w, 2.8),
          position: [ax + w / 2, 2.8 / 2, ay],
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
        }))(h),
        // W
        ((h) => ({
          geometry: new THREE.PlaneGeometry(h, 2.8),
          position: [ax, 2.8 / 2, ay + h / 2],
          // position:[ax,2.8/2,ay+1.8/2],
          rotation: [0, Math.PI / 2, 0],
        }))(h),
      ])(Math.abs(ax - cx), Math.abs(ay - cy)),
    );
  }, []);

  const windows = useMemo(() => {
    const { garaz } = shapes.rooms();
    const [a, b, c, d] = inner(garaz, 0.16 / 2);
    const [ax, ay] = a;
    const [bx, by] = b;
    const [cx, cy] = c;
    const [dx, dy] = d;
    const margin = 0.01;
    return ([] as Cabinet[])
      .concat(
        [
          [0.66, 0],
          [5.5, 2.375],
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
                dx - 0.16 / 2,
                height / 2 + offset,
                dy - (space + width / 2),
              ],
            }),
          ),
      )
      .concat(
        [
          [0.2, 0],
          [0.8, 2.8],
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
                cx - (space + width / 2),
                height / 2 + offset,
                cy + 0.48 / 2,
              ],
            }),
          ),
      );
  }, []);

  return (
    <group {...props}>
      <mesh>
        <Geometry computeVertexNormals>
          {/* <Base geometry={new THREE.PlaneGeometry(5,7)} rotation={[-Math.PI/2,0,0]} position={[12,0,2]}/> */}
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
        </Geometry>
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
}

export function Technical(props: ComponentPropsWithoutRef<"group">) {
  const boxes = useMemo(() => {
    const { techniczne } = shapes.rooms();
    const [a, b, c, d] = inner(techniczne, 0.16 / 2);
    const [ax, ay] = a;
    const [cx, cy] = c;
    // const [dx, dy] = d;
    // const margin = 0.01;

    return ([] as Cabinet[]).concat(
      ((w, h) => [
        {
          geometry: new THREE.BoxGeometry(w, h, 0.2),
          position: [ax + w / 2, -0.1, ay + h / 2],
          rotation: [-Math.PI / 2, 0, 0],
        },
        // N
        {
          geometry: new THREE.PlaneGeometry(w, 2.8),
          position: [ax + w / 2, 2.8 / 2, ay],
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
        }))(h),
        // W
        ((h) => ({
          geometry: new THREE.PlaneGeometry(h, 2.8),
          position: [ax, 2.8 / 2, ay + h / 2],
          // position:[ax,2.8/2,ay+1.8/2],
          rotation: [0, Math.PI / 2, 0],
        }))(h),
      ])(Math.abs(ax - cx), Math.abs(ay - cy)),
    );
  }, []);

  const windows = useMemo(() => {
    const { techniczne } = shapes.rooms();
    const [a, b, c, d] = inner(techniczne, 0.16 / 2);
    const [ax, ay] = a;
    const [bx, by] = b;
    const [cx, cy] = c;
    const [dx, dy] = d;
    const margin = 0.01;
    return ([] as Cabinet[])
      .concat(
        [
          [0.2, 0],
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
                dx - 0.16 / 2,
                height / 2 + offset,
                dy - (space + width / 2),
              ],
            }),
          ),
      )
      .concat(
        [
          [0.2, 0],
          [0.8, 2.8],
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
                cx - (space + width / 2),
                height / 2 + offset,
                cy + 0.48 / 2,
              ],
            }),
          ),
      );
  }, []);

  return (
    <group {...props}>
      <mesh>
        <Geometry computeVertexNormals>
          {/* <Base geometry={new THREE.PlaneGeometry(5,7)} rotation={[-Math.PI/2,0,0]} position={[12,0,2]}/> */}
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
        </Geometry>
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
}

export function Guest(props: ComponentPropsWithoutRef<"group">) {
  const boxes = useMemo(() => {
    const { gabinet1 } = shapes.rooms();
    const [a, b, c, d] = inner(gabinet1, 0.16 / 2);
    const [ax, ay] = a;
    const [cx, cy] = c;
    // const [dx, dy] = d;
    // const margin = 0.01;

    return ([] as Cabinet[]).concat(
      ((w, h) => [
        {
          geometry: new THREE.BoxGeometry(w, h, 0.2),
          position: [ax + w / 2, -0.1, ay + h / 2],
          rotation: [-Math.PI / 2, 0, 0],
        },
        // N
        {
          geometry: new THREE.PlaneGeometry(w, 2.8),
          position: [ax + w / 2, 2.8 / 2, ay],
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
        }))(h),
        // W
        ((h) => ({
          geometry: new THREE.PlaneGeometry(h, 2.8),
          position: [ax, 2.8 / 2, ay + h / 2],
          // position:[ax,2.8/2,ay+1.8/2],
          rotation: [0, Math.PI / 2, 0],
        }))(h),
      ])(Math.abs(ax - cx), Math.abs(ay - cy)),
    );
  }, []);

  const windows = useMemo(() => {
    const { gabinet1 } = shapes.rooms();
    const [a, b, c, d] = inner(gabinet1, 0.16 / 2);
    const [ax, ay] = a;
    const [bx, by] = b;
    const [cx, cy] = c;
    const [dx, dy] = d;
    const margin = 0.01;
    return ([] as Cabinet[])
      .concat(
        [
          // [0.62, 0],
          [0.6, 2.8],
          [1.5, 2.8],
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
                dx - 0.16 / 2,
                height / 2 + offset,
                dy - (space + width / 2),
              ],
            }),
          ),
      )
      .concat(
        [
          [0.2, 0],
          [0.8, 2.8],
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
                bx - (space + width / 2),
                height / 2 + offset,
                by + 0.48 / 2,
              ],
            }),
          ),
      );
  }, []);

  return (
    <group {...props}>
      <mesh>
        <Geometry computeVertexNormals>
          {/* <Base geometry={new THREE.PlaneGeometry(5,7)} rotation={[-Math.PI/2,0,0]} position={[12,0,2]}/> */}
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
        </Geometry>
        <meshStandardMaterial color="white" />
      </mesh>
      <Desk position={[1, 0, 7.2]} rotation={[0, 0, 0]} />
      <Sofa position={[2.4, 0, 8.8]} rotation={[0, Math.PI / 2, 0]} />
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
          key={index}
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

export function Sofa(props: ComponentPropsWithoutRef<"group">) {
  return (
    <group {...props}>
      <mesh position={[0, 0.48 / 2 + 0.06, 0]}>
        <Geometry computeVertexNormals>
          <Base geometry={new THREE.BoxGeometry(0.98, 0.48, 2.52 - 0.81)} />
          <Addition
            geometry={new THREE.BoxGeometry(1.64, 0.48, 0.81)}
            position={[(1.64 - 0.98) / 2, 0, +2.52 / 2]}
          />
          <Addition
            geometry={new THREE.BoxGeometry(0.98, 0.68, 0.15)}
            position={[0, (0.68 - 0.48) / 2, -(2.52 - 0.81 + 0.15) / 2]}
          />
          <Addition
            geometry={new THREE.BoxGeometry(0.98, 0.68, 0.15)}
            position={[0, (0.68 - 0.48) / 2, (2.52 - 0.81 + 0.15) / 2 + 0.81]}
          />
          <Addition
            geometry={new THREE.BoxGeometry(0.2, 0.83, 2.52)}
            position={[(0.1 - 0.98) / 2, (0.83 - 0.48) / 2, 0.81 / 2]}
          />
        </Geometry>
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
}

export function Bed(props: ComponentPropsWithoutRef<"group">) {
  const w = 1.4,
    d = 2,
    g = 0.04,
    s = 0.03;

  return (
    <group {...props}>
      <mesh position={[0, 0.2 / 2 + 0.3, 0]}>
        <Geometry computeVertexNormals>
          <Base geometry={new THREE.BoxGeometry(d, 0.2, w)} />
          <Addition
            geometry={new THREE.BoxGeometry(g, g, w)}
            rotation={[0, 0, 0]}
            position={[-1, 0.95 / 2 + g / 2, 0]}
          />
          <Addition
            geometry={new THREE.BoxGeometry(g, 0.2, w)}
            rotation={[0, 0, 0]}
            position={[-1, -0.2 + 0.2 / 2, 0]}
          />
          {[1, 1].map((_, index, list) => (
            <Addition
              key={index}
              geometry={new THREE.BoxGeometry(s, 0.95 - 0.5, w / 2 - 0.1)}
              rotation={[0, 0, 0]}
              position={[
                -1,
                0.95 / 2 - 0.2,
                ((2 * (index % 2) - 1) * (w / 2 - 0.1 / 2)) / 2,
              ]}
            />
          ))}
          {[1, 1].map((_, index, list) => (
            <Addition
              key={index}
              geometry={new THREE.BoxGeometry(g, 0.95, g)}
              rotation={[0, 0, 0]}
              position={[
                -1,
                -0.4 + 0.95 / 2,
                ((2 * (index % 2) - 1) * (w + g / 2)) / 2,
              ]}
            />
          ))}
          {[1, 1].map((_, index, list) => (
            <Addition
              key={index}
              geometry={new THREE.BoxGeometry(g, 0.41, g)}
              rotation={[0, 0, 0]}
              position={[
                1,
                0.2 / 2 + -0.3,
                ((2 * (index % 2) - 1) * (w + g / 2)) / 2,
              ]}
            />
          ))}
          {[1, 1].map((_, index, list) => (
            <Addition
              key={index}
              geometry={new THREE.BoxGeometry(2, 0.2, s)}
              rotation={[0, 0, 0]}
              position={[
                0,
                0.2 / 2 + -0.2,
                ((2 * (index % 2) - 1) * (w + g / 2)) / 2,
              ]}
            />
          ))}
          <Addition
            geometry={new THREE.BoxGeometry(s, 0.2, w)}
            rotation={[0, 0, 0]}
            position={[1, 0.2 / 2 + -0.2, 0]}
          />
        </Geometry>
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
}

export function Bed2(props: ComponentPropsWithoutRef<"group">) {
  const w = 1.8,
    d = 2,
    g = 0.04,
    s = 0.03;

  return (
    <group {...props}>
      <mesh position={[0, 0.2 / 2 + 0.3, 0]}>
        <Geometry computeVertexNormals>
          <Base geometry={new THREE.BoxGeometry(d, 0.2, w)} />
          <Addition
            geometry={new THREE.BoxGeometry(g, g, w)}
            rotation={[0, 0, 0]}
            position={[-1, 0.95 / 2 + g / 2, 0]}
          />
          <Addition
            geometry={new THREE.BoxGeometry(g, 0.2, w)}
            rotation={[0, 0, 0]}
            position={[-1, -0.2 + 0.2 / 2, 0]}
          />
          {[1, 1].map((_, index, list) => (
            <Addition
              key={index}
              geometry={new THREE.BoxGeometry(s, 0.95 - 0.5, w / 2 - 0.1)}
              rotation={[0, 0, 0]}
              position={[
                -1,
                0.95 / 2 - 0.2,
                ((2 * (index % 2) - 1) * (w / 2 - 0.1 / 2)) / 2,
              ]}
            />
          ))}
          {[1, 1].map((_, index, list) => (
            <Addition
              key={index}
              geometry={new THREE.BoxGeometry(g, 0.95, g)}
              rotation={[0, 0, 0]}
              position={[
                -1,
                -0.4 + 0.95 / 2,
                ((2 * (index % 2) - 1) * (w + g / 2)) / 2,
              ]}
            />
          ))}
          {[1, 1].map((_, index, list) => (
            <Addition
              key={index}
              geometry={new THREE.BoxGeometry(g, 0.41, g)}
              rotation={[0, 0, 0]}
              position={[
                1,
                0.2 / 2 + -0.3,
                ((2 * (index % 2) - 1) * (w + g / 2)) / 2,
              ]}
            />
          ))}
          {[1, 1].map((_, index, list) => (
            <Addition
              key={index}
              geometry={new THREE.BoxGeometry(2, 0.2, s)}
              rotation={[0, 0, 0]}
              position={[
                0,
                0.2 / 2 + -0.2,
                ((2 * (index % 2) - 1) * (w + g / 2)) / 2,
              ]}
            />
          ))}
          <Addition
            geometry={new THREE.BoxGeometry(s, 0.2, w)}
            rotation={[0, 0, 0]}
            position={[1, 0.2 / 2 + -0.2, 0]}
          />
        </Geometry>
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
}

export function Desk(props: ComponentPropsWithoutRef<"group">) {
  const w = 1.2,
    d = 0.6,
    h = 0.73,
    z = 0.035;
  const r = 0.04 / 2,
    m = 0.1;
  return (
    <group {...props}>
      <mesh position={[0, h - z / 2, 0]}>
        <Geometry computeVertexNormals>
          <Base geometry={new THREE.BoxGeometry(d, z, w)} />
          {[1, 1, -1, -1].map((_, index, list) => (
            <Addition
              key={index}
              geometry={new THREE.CylinderGeometry(r, r, h)}
              rotation={[0, 0, 0]}
              position={[
                ((2 * (index % 2) - 1) * (d - m)) / 2,
                -h / 2,
                ((2 * (Math.floor(index / 2) % 2) - 1) * (w - m)) / 2,
              ]}
            />
          ))}
        </Geometry>
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
}

function RainShower(props: ComponentPropsWithoutRef<"group">) {
  const x = 0.4,
    h = 0.1,
    r = 0.05,
    d = 0.025;

  return (
    <group {...props}>
      <mesh position={[0, 2.1, -0.9 / 2]}>
        <Geometry computeVertexNormals>
          <Base
            geometry={
              new THREE.TubeGeometry(
                (() =>
                  new THREE.CatmullRomCurve3([
                    new THREE.Vector3(0, 0, 0),
                    new THREE.Vector3(0, 0, x - r),
                    new THREE.Vector3(0, -h + r, x),
                    new THREE.Vector3(0, -h, x),
                  ]))(),
                48,
                d / 2,
                16,
                false,
              )
            }
          />
          {((r, d) => (
            <Addition
              geometry={new THREE.CylinderGeometry(r, r, d)}
              position={[0, 0, d / 2]}
              rotation={[Math.PI / 2, 0, 0]}
            />
          ))(0.05, 0.02)}
          {((r, d) => (
            <Addition
              geometry={new THREE.CylinderGeometry(r, r, d)}
              position={[0, -0.1, 0.4]}
              rotation={[0, 0, 0]}
            />
          ))(0.15, 0.02)}
        </Geometry>
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
}

export function Shower(props: ComponentPropsWithoutRef<"group">) {
  const { lazienka } = shapes.rooms();
  const [a, b, c, d] = inner(lazienka, 0.16 / 2);
  const [ax, ay] = a;
  // const [bx, by] = b;
  // const [cx, cy] = c;
  // const [dx, dy] = d;
  const w = 1.4,
    h = 0.9,
    s = 0.04;

  return (
    <group {...props}>
      <group position={[ax + w / 2, s / 2, ay + h / 2]}>
        <mesh>
          <Geometry computeVertexNormals>
            <Base geometry={new THREE.BoxGeometry(w, s, h)} />
            {((r, d) => (
              <Addition
                geometry={new THREE.CylinderGeometry(r, r, d)}
                position={[0, d / 2, 0]}
                rotation={[0, 0, 0]}
              />
            ))(0.08, 0.03)}
          </Geometry>
          <meshStandardMaterial color="white" />
        </mesh>
        <RainShower />
      </group>
    </group>
  );
}

export function MediaWall(props: ComponentPropsWithoutRef<"group">) {
  const { salon } = shapes.rooms();
  const [a, b, c, d] = inner(salon, 0 / 2);
  const [ax, ay] = a;
  const [bx, by] = b;
  // const [cx, cy] = c;
  // const [dx, dy] = d;
  const w = bx - ax,
    h = 0.6,
    s = 0.2;

  return (
    <group {...props}>
      <group position={[ax + w / 2, s / 2, ay + h / 2 - 0.1]}>
        <mesh>
          <Geometry computeVertexNormals>
            <Base geometry={new THREE.BoxGeometry(w, s, h)} />
            {((l, m) => (
              <Addition
                geometry={new THREE.BoxGeometry(w, l - m, h)}
                position={[0, (l + m - s) / 2, 0]}
              />
            ))(2.8, s + 0.4)}
            {/* https://www.tcl.com/in/en/blog/tv-screen-sizes-what-are-the-numbers-for-why-should-i-care */}
            {((w, l, h2, m) => (
              <Addition
                geometry={new THREE.BoxGeometry(w, l, h2)}
                position={[0, l / 2 - s / 2 + m, h2 / 2 + h / 2]}
              />
            ))(1.44, 0.81, 0.02, s + 0.4 + 0.1)}
            {((w2, l, h2, m) => (
              <Addition
                geometry={new THREE.BoxGeometry(w2, l, h2)}
                position={[(w2 - w) / 2 + m, l / 2 - s / 2 + s, (h2 - h) / 2]}
              />
            ))(0.8, 0.4, 0.5, 0.1)}
          </Geometry>
          <meshStandardMaterial color="white" />
        </mesh>
      </group>
    </group>
  );
}

export function Stairs(props: ComponentPropsWithoutRef<"group">) {
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
    <group {...props}>
      <mesh position={[a * d + 1 * w, h / 2, -b * d - 1 * w]}>
        <Geometry computeVertexNormals>
          <Base geometry={new THREE.BoxGeometry(d, h, d)} />
          {Array.from(Array(a)).map((_, i) => (
            <Addition
              key={++x}
              geometry={new THREE.BoxGeometry(i ? d : d, h, w)}
              position={[(w - d) / 2 - +x * d, x * h, 0]}
            />
          ))}
          {Array.from(Array(b)).map((_, i) => (
            <Addition
              key={++y}
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
              geometry={new THREE.BoxGeometry(i ? d : w, h, w)}
              position={[
                (z - x) * d + (i ? (w - d) / 2 : 0),
                (x + y + z) * h,
                (Math.max(y, 1) - 1) * d + w,
              ]}
            />
          ))}
        </Geometry>
        <meshStandardMaterial color="white" />
      </mesh>
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

export function Bedroom1(props: ComponentPropsWithoutRef<"group">) {
  const boxes = useMemo(() => {
    const { sypialnia1 } = shapes.rooms();
    const [a, b, c, d] = inner(sypialnia1, 0.16 / 2);
    return ([] as Cabinet[]).concat(
      createFloor([a, c]),
      createWalls([
        [a, b], // N
        [b, c], // E
        [c, d], // S
        [d, a], // W
      ]),
    );
  }, []);

  const windows = useMemo(() => {
    const { sypialnia1 } = shapes.rooms();
    const [a, b, c, d] = inner(sypialnia1, 0.16 / 2);
    return ([] as Cabinet[])
      .concat(
        createWindows(d, a, [
          [0.2, 0],
          [0.6, 2.8],
          [1.5, 2.8],
        ]),
      )
      .concat(
        createWindows(c, b, [
          [0.2, 0],
          [0.8, 2.8],
          [0.8, 0],
          [0.8, 2.8],
        ]),
      );
  }, []);

  return (
    <group {...props}>
      <mesh>
        <Geometry computeVertexNormals>
          {/* <Base geometry={new THREE.PlaneGeometry(5,7)} rotation={[-Math.PI/2,0,0]} position={[12,0,2]}/> */}
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
        </Geometry>
        <meshStandardMaterial color="white" />
      </mesh>
      <Bed position={[2, 0, 1.5]} rotation={[0, -Math.PI / 2, 0]} />
      <Desk position={[2, 0, 3.5]} rotation={[0, Math.PI / 2, 0]} />
    </group>
  );
}

export function Bedroom2(props: ComponentPropsWithoutRef<"group">) {
  const [a, b, c, d] = inner(shapes.rooms().sypialnia2, 0.16 / 2);

  return (
    <group {...props}>
      <mesh>
        <Geometry computeVertexNormals>
          {((props) => <Base {...props} />)(createFloor([a, c]))}
          {createWalls([
            [a, b], // N
            [b, c], // E
            [c, d], // S
            [d, a], // W
          ]).map((props, index) => (
            <Addition key={index} {...props} />
          ))}
          {createWindows(a, d, [
            [0.2, 0],
            [0.6, 2.8],
            [1.5, 2.8],
          ])
            .concat(
              createWindows(b, c, [
                [0.2, 0],
                [0.8, 2.8],
                [0.8, 0],
                [0.8, 2.8],
              ]),
            )
            .map((props, index) =>
              0 ? (
                <Addition key={index} {...props} />
              ) : (
                <Subtraction key={index} {...props} />
              ),
            )}
        </Geometry>
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
}

export function Bedroom3(props: ComponentPropsWithoutRef<"group">) {
  const [a, b, c, d] = inner(shapes.rooms().sypialnia3, 0.16 / 2);

  return (
    <group {...props}>
      <mesh>
        <Geometry computeVertexNormals>
          {((props) => <Base {...props} />)(createFloor([a, c]))}
          {createWalls([
            [a, b], // N
            [b, c], // E
            [c, d], // S
            [d, a], // W
          ]).map((props, index) => (
            <Addition key={index} {...props} />
          ))}
          {createWindows(b, c, [
            [0.2, 0],
            [0.6, 2.8],
            [1.5, 2.8],
          ])
            .concat(
              createWindows(a, d, [
                [0.2, 0],
                [0.8, 2.8],
                [0.8, 0],
                [0.8, 2.8],
              ]),
            )
            .map((props, index) =>
              0 ? (
                <Addition key={index} {...props} />
              ) : (
                <Subtraction key={index} {...props} />
              ),
            )}
        </Geometry>
        <meshStandardMaterial color="white" />
      </mesh>
      <Bed2
        position={(([x, y]) => [x, 0, y])(shift(c, [-1.9, -1.1]))}
        rotation={[0, Math.PI / 2, 0]}
      />
    </group>
  );
}

export function Wardrobe1(props: ComponentPropsWithoutRef<"group">) {
  const [a, b, c, d] = inner(shapes.rooms().garderoba1, 0.16 / 2);

  return (
    <group {...props}>
      <mesh>
        <Geometry computeVertexNormals>
          {((props) => <Base {...props} />)(createFloor([a, c]))}
          {createWalls([
            [a, b], // N
            [b, c], // E
            [c, d], // S
            [d, a], // W
          ]).map((props, index) => (
            <Addition key={index} {...props} />
          ))}
          {createWindows(d, a, [
            [0.8, 0],
            [0.8, 2.8],
          ]).map((props, index) =>
            0 ? (
              <Addition key={index} {...props} />
            ) : (
              <Subtraction key={index} {...props} />
            ),
          )}
        </Geometry>
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
}

export function Wardrobe2(props: ComponentPropsWithoutRef<"group">) {
  const [a, b, c, d] = inner(shapes.rooms().garderoba2, 0.16 / 2);

  return (
    <group {...props}>
      <mesh>
        <Geometry computeVertexNormals>
          {((props) => <Base {...props} />)(createFloor([a, c]))}
          {createWalls([
            [a, b], // N
            [b, c], // E
            [c, d], // S
            [d, a], // W
          ]).map((props, index) => (
            <Addition key={index} {...props} />
          ))}
          {createWindows(a, d, [
            [0.8, 0],
            [0.8, 2.8],
          ]).map((props, index) =>
            0 ? (
              <Addition key={index} {...props} />
            ) : (
              <Subtraction key={index} {...props} />
            ),
          )}
        </Geometry>
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
}

export function Loundry(props: ComponentPropsWithoutRef<"group">) {
  const [a, b, c, d] = inner(shapes.rooms().pralnia, 0.16 / 2);

  return (
    <group {...props}>
      <mesh>
        <Geometry computeVertexNormals>
          {((props) => <Base {...props} />)(createFloor([a, c]))}
          {createWalls([
            [a, b], // N
            [b, c], // E
            [c, d], // S
            [d, a], // W
          ]).map((props, index) => (
            <Addition key={index} {...props} />
          ))}
          {createWindows(b, c, [
            [0.2, 0],
            [0.8, 2.8],
          ]).map((props, index) =>
            0 ? (
              <Addition key={index} {...props} />
            ) : (
              <Subtraction key={index} {...props} />
            ),
          )}
        </Geometry>
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
}

export function Hall2(props: ComponentPropsWithoutRef<"group">) {
  const [a, b, c, d] = inner(shapes.rooms().korytarz2, 0.16 / 2);

  return (
    <group {...props}>
      <mesh>
        <Geometry computeVertexNormals>
          {/* {((props) => <Base {...props} />)(createFloor([a, c]))} */}
          {createWalls([
            // [a, b], // N
            [b, c], // E
            [c, d], // S
            [d, a], // W
          ]).map((props, index) => (
            <Addition key={index} {...props} />
          ))}
          {createWindows(d, c, [
            [1, 0],
            [2.1, 2.1],
          ]).map((props, index) =>
            0 ? (
              <Addition key={index} {...props} />
            ) : (
              <Subtraction key={index} {...props} />
            ),
          )}
        </Geometry>
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
}

export function Wardrobe3(props: ComponentPropsWithoutRef<"group">) {
  const [a, b, c, d] = inner(shapes.rooms().garderoba3, 0.16 / 2);

  return (
    <group {...props}>
      <mesh>
        <Geometry computeVertexNormals>
          {((props) => <Base {...props} />)(createFloor([a, c]))}
          {createWalls([
            [a, b], // N
            [b, c], // E
            [c, d], // S
            [d, a], // W
          ]).map((props, index) => (
            <Addition key={index} {...props} />
          ))}
          {createWindows(c, d, [
            [0.2, 0],
            [0.8, 2.8],
          ])
            .concat(
              createWindows(a, b, [
                [0.2, 0],
                [0.8, 0.7, 2.1],
              ]),
            )
            .concat(
              createWindows(b, a, [
                [0.2, 0],
                [0.8, 0.7, 2.1],
              ]),
            )
            .map((props, index) =>
              0 ? (
                <Addition key={index} {...props} />
              ) : (
                <Subtraction key={index} {...props} />
              ),
            )}
        </Geometry>
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
}

export function Bathroom1(props: ComponentPropsWithoutRef<"group">) {
  const [a, b, c, d] = inner(shapes.rooms().lazienka1, 0.16 / 2);

  return (
    <group {...props}>
      <mesh>
        <Geometry computeVertexNormals>
          {((props) => <Base {...props} />)(createFloor([a, c]))}
          {createWalls([
            [a, b], // N
            [b, c], // E
            [c, d], // S
            [d, a], // W
          ]).map((props, index) => (
            <Addition key={index} {...props} />
          ))}
          {createWindows(c, d, [
            [0.8, 0],
            [0.8, 2.8],
          ])
            .concat(
              createWindows(a, b, [
                [0.2, 0],
                [0.8, 0.7, 2.1],
              ]),
            )
            .concat(
              createWindows(b, a, [
                [0.2, 0],
                [0.8, 0.7, 2.1],
              ]),
            )
            .map((props, index) =>
              0 ? (
                <Addition key={index} {...props} />
              ) : (
                <Subtraction key={index} {...props} />
              ),
            )}
        </Geometry>
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
}

export function Bathroom2(props: ComponentPropsWithoutRef<"group">) {
  const [a, b, c, d] = inner(shapes.rooms().lazienka2, 0.16 / 2);

  return (
    <group {...props}>
      <mesh>
        <Geometry computeVertexNormals>
          {((props) => <Base {...props} />)(createFloor([a, c]))}
          {createWalls([
            [a, b], // N
            [b, c], // E
            [c, d], // S
            [d, a], // W
          ]).map((props, index) => (
            <Addition key={index} {...props} />
          ))}
          {createWindows(a, d, [
            [0.8, 0],
            [0.8, 2.8],
          ])
            .concat(
              createWindows(b, c, [
                [1, 0],
                [0.8, 2.8],
              ]),
            )
            .map((props, index) =>
              0 ? (
                <Addition key={index} {...props} />
              ) : (
                <Subtraction key={index} {...props} />
              ),
            )}
        </Geometry>
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
}

export function Office(props: ComponentPropsWithoutRef<"group">) {
  const [a, b, c, d] = inner(shapes.rooms().gabinet2, 0.16 / 2);

  return (
    <group {...props}>
      <mesh>
        <Geometry computeVertexNormals>
          {((props) => <Base {...props} />)(createFloor([a, c]))}
          {createWalls([
            [a, b], // N
            [b, c], // E
            [c, d], // S
            [d, a], // W
          ]).map((props, index) => (
            <Addition key={index} {...props} />
          ))}
          {createWindows(c, d, [
            [0.2, 0],
            [0.8, 2.8],
          ])
            .concat(
              createWindows(a, b, [
                [0.2, 0],
                [0.8, 2.1, 0.7],
              ]),
            )
            .concat(
              createWindows(b, a, [
                [0.2, 0],
                [0.8, 2.1, 0.7],
              ]),
            )
            .map((props, index) =>
              0 ? (
                <Addition key={index} {...props} />
              ) : (
                <Subtraction key={index} {...props} />
              ),
            )}
        </Geometry>
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
}

export function FirstFloor(props: ComponentPropsWithoutRef<"group">) {
  return (
    <group {...props}>
      <Bedroom1 position={[0, 0, 0]} />
      <Wardrobe1 position={[0, 0, 0]} />
      <Bedroom2 position={[0, 0, 0]} />
      <Wardrobe2 position={[0, 0, 0]} />
      <Bathroom1 position={[0, 0, 0]} />
      <Office position={[0, 0, 0]} />
      <Bedroom3 position={[0, 0, 0]} />
      <Wardrobe3 position={[0, 0, 0]} />
      <Bathroom2 position={[0, 0, 0]} />
      <Loundry position={[0, 0, 0]} />
      <Hall2 position={[0, 0, 0]} />
    </group>
  );
}

export default function House(props: object) {
  return (
    <>
      {[1, 1].map((_, index) => (
        <Stool
          key={index}
          position={[2.5 + index * 0.5, 0, 1.4]}
          rotation={[0, -Math.PI / 2, 0]}
        />
      ))}
      <Table position={[2.2, 0, 4.2]} rotation={[0, Math.PI / 2, 0]} />
      <Stairs position={[0.1, 0, 6]} rotation={[0, Math.PI / 2, 0]} />
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
      <Entrance position={[-11, 0, -2]} />
      <Hall position={[-11, 0, -2]} />
      <Guest position={[-11, 0, -2]} />
      <Pantry position={[-11, 0, -2]} />
      <Toilet position={[-11, 0, -2]} />
      <Technical position={[-11, 0, -2]} />
      <Shower position={[-11, 0, -2]} />
      <Garage position={[-11, 0, -2]} />
      <FirstFloor position={[-11, 2.8 + 0.65, -2]} />
      <MediaWall position={[-11, 0, -2]} />
    </>
  );
}
