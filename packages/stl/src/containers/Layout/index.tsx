import { type Point, rect } from "@dev/model/utils";

const styles = {
  fill: {
    fill: "lightgray",
    stroke: "black",
    strokeWidth: 0.01,
  },
};

const draw = (ps: Point[]) =>
  ps
    .map((p, i) => (i > 0 ? line(p) : move(p)))
    .concat("z")
    .join(" ");

const line = (p: Point) => `L${p.join(" ")}`;
const move = (p: Point) => `M${p.join(" ")}`;

export default function Layout() {
  return (
    <g transform={`scale(${50})`}>
      {((x, y, w, h) => {
        return (
          <path
            d={[draw(rect([x, y], [x + w, y + h]))].join(" ")}
            style={styles.fill}
          />
        );
      })(1, 2, 3, 4)}
    </g>
  );
}
