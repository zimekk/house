import { useMemo, useState } from "react";
import { type Point, rect } from "../../../utils";
import { type Model, getPosition } from "../hooks";

const styles = {
  none: {
    fill: "transparent",
    stroke: "black",
    strokeWidth: 0.1,
  },
  line: {
    fill: "transparent",
    stroke: "black",
    strokeWidth: 0.01,
  },
};

const line = (p: Point) => `L${p.join(" ")}`;
const move = (p: Point) => `M${p.join(" ")}`;

// https://codepen.io/anthonydugois/pen/mewdyZ
export default function Draw({ model }: { model: Model }) {
  const fontSize = 0.4;

  const delta = useMemo(() => 0.1, []);

  return (
    <g transform={`scale(${25}) translate(${[14, 4].join(",")})`}>
      <g transform={`translate(${[-8, -2].join(" ")})`}>
        <text style={{ fontSize }} textAnchor="middle" y={-0.2}>
          {`mouse: ${model.mouse ? [model.mouse.x, model.mouse.y].join(", ") : "-"}; click: ${model.click ? [model.click.x, model.click.y].join(", ") : "-"}; active: ${model.active}; hover: ${model.hover}`}
        </text>
      </g>
      <path
        d={rect([0, 0], [8, 0.65])
          .map((p, i) => (i > 0 ? line(p) : move(p)))
          .concat("z")
          .join(" ")}
        style={styles.line}
      />
      {model.points.map((p, index) => (
        <path
          key={index}
          data-index={index}
          d={((p) =>
            rect([p.x - delta, p.y - delta], [p.x + delta, p.y + delta]))(
            model.active === index ? getPosition(model, p) : p,
          )
            .map((p, i) => (i > 0 ? line(p) : move(p)))
            .concat("z")
            .join(" ")}
          className="point"
          style={{
            fill:
              model.hover === index
                ? "blue"
                : model.active === index
                  ? "red"
                  : "grey",
          }}
        />
      ))}
    </g>
  );
}
