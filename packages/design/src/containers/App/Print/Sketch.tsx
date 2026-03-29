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
import { type Point, inner } from "@dev/model/utils";
import { rooms } from "@dev/model/shapes";

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
  } = rooms();

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
  } = rooms();

  return createShapeWithHoles(bryla, [
    inner(salon, 0.16 / 2),
    kuchnia,
    inner(spizarnia, 0.16 / 2),
    inner(gabinet1, 0.16 / 2),
    inner(schody1, 0.16 / 2),
    inner(lazienka, 0.16 / 2),
    inner(garaz, 0.16 / 2),
  ]);
}

export default () => (
  <G transform="scale(25) translate(5,1)">
    <G transform="translate(0,0)">
      <Path fill="#f2cc99" stroke={color} strokeWidth={0.01} d={ground()} />
      <Text style={styles.text} x={-0.5} y={-0.5} textAnchor="start">
        ground
      </Text>
    </G>
    <G transform="translate(0,10)">
      <Path fill="#f2cc99" stroke={color} strokeWidth={0.01} d={attic()} />
      <Text style={styles.text} x={-0.5} y={-0.5} textAnchor="start">
        attic
      </Text>
    </G>
  </G>
);
