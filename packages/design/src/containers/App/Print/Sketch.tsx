import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Svg,
  G,
  Path,
  Polygon,
} from "@react-pdf/renderer";
import {
  type Point,
  type Point4,
  cross,
  inner,
  rect,
  shift,
  swap,
} from "@dev/model/utils";
import * as shapes from "@dev/model/shapes";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  text: {
    fontSize: 0.5,
  },
});

const color = "black";

const createShape = (edges: Point[]) =>
  edges
    .reduce(
      (shape, [x, y], k) => shape.concat(k > 0 ? `L${x} ${y}` : `M${x} ${y}`),
      [] as string[],
    )
    .concat("Z");

function createShapeWithHoles(edges: Point[], holes: Point[][]) {
  const shape = createShape(edges);

  return shape
    .concat(...holes.map((hole) => createShape(hole.reverse())))
    .join(" ");
}

export function attic() {
  const {
    bryla,
    sypialnia1,
    sypialnia2,
    garderoba1,
    garderoba2,
    lazienka1,
    gabinet2,
    lazienka2,
    garderoba3,
    sypialnia3,
    schody2,
  } = shapes.rooms();

  return createShapeWithHoles(bryla, [
    inner(sypialnia1, 0.16 / 2),
    inner(sypialnia2, 0.16 / 2),
    inner(garderoba1, 0.16 / 2),
    inner(garderoba2, 0.16 / 2),
    inner(lazienka1, 0.16 / 2),
    inner(gabinet2, 0.16 / 2),
    inner(lazienka2, 0.16 / 2),
    inner(garderoba3, 0.16 / 2),
    inner(sypialnia3, 0.16 / 2),
    inner(schody2, 0.16 / 2),
  ]);
}

export function ground() {
  const {
    bryla,
    salon,
    kuchnia,
    spizarnia,
    gabinet1,
    schody1,
    lazienka,
    garaz,
  } = shapes.rooms();

  return createShapeWithHoles(bryla, [
    inner(salon, 0 / 2),
    kuchnia,
    inner(spizarnia, 0.16 / 2),
    inner(gabinet1, 0.16 / 2),
    inner(schody1, 0.16 / 2),
    inner(lazienka, 0.16 / 2),
    inner(garaz, 0.16 / 2),
  ]);
}

export function kitchen() {
  const {
    bryla,
    salon,
    kuchnia,
    spizarnia,
    gabinet1,
    schody1,
    lazienka,
    garaz,
  } = shapes.rooms();
  const h = 2.8;

  function flatten(points: Point4, height: number = 2.8) {
    return (([a, b]) => rect(cross(a, [0, 0]), cross(b, [0, height])))(points);
  }

  return createShapeWithHoles(
    flatten(bryla),
    [
      flatten(inner(salon, 0.16 / 2)),
      flatten(kuchnia),
      // flatten(inner(spizarnia, 0.16 / 2)),
      flatten(inner(gabinet1, 0.16 / 2)),
      flatten(inner(schody1, 0.16 / 2)),
      // inner(lazienka, 0.16 / 2),
      // flatten(inner(garaz, 0.16 / 2)),
    ]
      .concat(
        (([a, b, c, d], [p, q, n]) =>
          Array.from(Array(n)).map((_, i) => {
            const a = shift(d, [0, i * q]);
            return rect(a, shift(a, [1, q]));
          }))(flatten(inner(schody1, 0.16 / 2)), [0.28, -0.1725, 2]),
      )
      .concat([
        (([a, b, c, d], [p, q, k, n, sx = 1]) =>
          Array.from(Array(n))
            .reduce((result, _, _i): Point[] => {
              const i = _i + k;
              const [ax, ay] = [(i - k) * p + sx, i * q];
              return result
                .concat(result.length ? [] : [[(i - k) * p + sx, (i - 1) * q]])
                .concat([
                  [ax, ay],
                  [ax, ay + q],
                ]);
            }, [])
            .concat([((i) => [(i - k + 1) * p + sx, i * q])(n + k)])
            .map((a: Point) => shift(a, d)))(
          flatten(inner(schody1, 0.16 / 2)),
          [0.28, -0.1725, 2, 15],
        ),
      ])
      .concat(
        (([a, b, c, d], [p, q, k, n, m, sx = 1]) =>
          Array.from(Array(m)).map((_, _i) => {
            const i = _i + k + n;
            const a = shift(d, [n * p + sx, i * q]);
            return rect(a, shift(a, [1, q]));
          }))(flatten(inner(schody1, 0.16 / 2)), [0.28, -0.1725, 2, 15, 2]),
      )
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
          .map(({ width, height, offset, space }): Point4 => {
            const [a, b, c, d] = flatten(kuchnia);
            const [ax, ay] = a;
            const x = ax + space;

            return rect([x, h - offset], [x + width, h - height - offset]);
          }),
      )
      .concat(
        [
          [0.6, 0, 0, 0],
          [6 * 0.6, 0.02, 0, 0.9],
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
          .map(({ width, height, offset, space }): Point4 => {
            const [a, b, c, d] = flatten(kuchnia);
            const [ax, ay] = a;
            const x = ax + space;

            return rect([x, h - offset], [x + width, h - height - offset]);
          }),
      )
      .concat(
        [[8 * 0.6, 0.1, 0, 0]]
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
          .map(({ width, height, offset, space }): Point4 => {
            const [a, b, c, d] = flatten(kuchnia);
            const [ax, ay] = a;
            const x = ax + space;

            return rect([x, h - offset], [x + width, h - height]);
          }),
      ),
  );
}

export function windows() {
  const {
    bryla,
    salon,
    kuchnia,
    spizarnia,
    gabinet1,
    schody1,
    lazienka,
    garaz,
  } = shapes.rooms();
  const h = 2.8;

  function flatten(points: Point4, height: number = 2.8) {
    return (([a, b]) => rect(cross(a, [0, 0]), cross(b, [0, height])))(points);
  }

  return createShapeWithHoles(
    rect([0, 0], [0, 0]),
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
      .map(({ width, height, offset, space }): Point4 => {
        const [a, b, c, d] = flatten(kuchnia);
        const [ax, ay] = a;
        const x = ax + space;

        return rect([x, h - offset], [x + width, h - offset - height]);
      }),
  );
}

export function kitchen2() {
  const {
    bryla,
    salon,
    kuchnia,
    spizarnia,
    gabinet1,
    schody1,
    lazienka,
    garaz,
  } = shapes.rooms();
  const h = 2.8;

  function flatten(points: Point4, height: number = 2.8) {
    return (([a, b, c, d]) => rect(cross(a, [0, 0]), cross(d, [0, height])))(
      swap(points),
    );
  }

  return createShapeWithHoles(
    flatten(bryla),
    [flatten(kuchnia)]
      .concat(
        [[0.6], [1.2, 0, 0, 0]]
          .concat(shapes.cabinets2())
          .reduce(
            (result, [w, h = 2.7, d = 0.5, o = 0.1]) => {
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
          .map(({ width, height, offset, space }): Point4 => {
            const [a, b, c, d] = flatten(kuchnia);
            const [ax, ay] = a;
            const [bx, by] = b;
            const x = bx - space;

            return rect([x - width, h - offset], [x, h - height - offset]);
          }),
      )
      .concat(
        [
          [0.6, 0.1, 0, 0],
          [1.2, 0, 0, 0],
          [4 * 0.6, 0.1, 0, 0],
        ]
          .reduce(
            (result, [w, h = 2.8, d = 0.5, o = 0.1]) => {
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
          .map(({ width, height, offset, space }): Point4 => {
            const [a, b, c, d] = flatten(kuchnia);
            const [ax, ay] = a;
            const [bx, by] = b;
            const x = bx - space;

            return rect([x - width, h - offset], [x, h - height]);
          }),
      )
      .concat(
        shapes
          .cabinets3()
          .reduce(
            (result, [w, h = 2.7, d = 0.2, o = 0.1]) => {
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
          .map(({ width, height, offset, space }): Point4 => {
            const [a, b, c, d] = flatten(kuchnia);
            const [ax, ay] = a;
            const x = ax + space;

            return rect([x, h - offset], [x + width, h - height - offset]);
          }),
      )
      .concat(
        [[2 * 0.6, 0.1, 0, 0]]
          .reduce(
            (result, [w, h = 2.7, d = 0.5, o = 0.1]) => {
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
          .map(({ width, height, offset, space }): Point4 => {
            const [a, b, c, d] = flatten(kuchnia);
            const [ax, ay] = a;
            const x = ax + space;

            return rect([x, h - offset], [x + width, h - height]);
          }),
      ),
  );
}

let y = 0;

export default () => (
  <G transform="scale(25) translate(5,1)">
    <G transform={`translate(0,${((y, _) => y)(y, (y += 5))})`}>
      <Path fill="#99ddf2" stroke={color} strokeWidth={0.01} d={windows()} />
      <Path fill="#f2cc99" stroke={color} strokeWidth={0.01} d={kitchen()} />
      <Text style={styles.text} x={-0.5} y={-0.5} textAnchor="start">
        kitchen
      </Text>
    </G>
    <G transform={`translate(0,${((y, _) => y)(y, (y += 5))})`}>
      <Path fill="#f2cc99" stroke={color} strokeWidth={0.01} d={kitchen2()} />
      <Text style={styles.text} x={-0.5} y={-0.5} textAnchor="start">
        kitchen2
      </Text>
    </G>
    <G transform={`translate(0,${((y, _) => y)(y, (y += 10))})`}>
      <Path fill="#f2cc99" stroke={color} strokeWidth={0.01} d={ground()} />
      <Text style={styles.text} x={-0.5} y={-0.5} textAnchor="start">
        ground
      </Text>
    </G>
    <G transform={`translate(0,${((y, _) => y)(y, (y += 10))})`}>
      <Path fill="#f2cc99" stroke={color} strokeWidth={0.01} d={attic()} />
      <Text style={styles.text} x={-0.5} y={-0.5} textAnchor="start">
        attic
      </Text>
    </G>
  </G>
);
