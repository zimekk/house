import React, {
  MouseEventHandler,
  Suspense,
  lazy,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Svg from "../Svg";
import Stl from "../Stl";
import defs from "./defs";
import profile from "./profile";
import styles from "./styles.module.scss";

const items = ["ground", "ground-floor", "ceiling", "first-floor", "attic"];

export default function App() {
  const [selected, setSelected] = useState(() => "");
  const svgRef = useRef<SVGSVGElement>(null);

  const onSave = useCallback<MouseEventHandler>(
    (e) => {
      e.preventDefault();
      if (svgRef.current) {
        const svg = svgRef.current;
        svg.setAttribute("width", "1000mm");
        svg.setAttribute("height", "1000mm");
        svg.setAttribute("viewBox", "0 -50 50 50");
        const data = new XMLSerializer().serializeToString(svg);
        const svgBlob = new Blob([data], {
          type: "image/svg+xml;charset=utf-8",
        });
        svg.removeAttribute("width");
        svg.removeAttribute("height");
        svg.removeAttribute("viewBox");
        var svgUrl = URL.createObjectURL(svgBlob);
        var anchor = document.createElement("a");
        anchor.href = svgUrl;
        anchor.download = `${new Date().toISOString().split(".").shift()}-shape.svg`;
        anchor.click();
      }
    },
    [svgRef],
  );

  useEffect(() => {
    setSelected(items[0]);
  }, []);

  return (
    <>
      <div
        style={{
          position: "absolute",
          zIndex: 1,
          padding: 8,
        }}
      >
        {items.map((item, index) => (
          <a
            href="#"
            key={index}
            style={{
              // color: "white",
              margin: 4,
              textDecoration: selected === item ? "underline" : "",
            }}
            onClick={(e) => (e.preventDefault(), setSelected(item))}
          >
            {item}
          </a>
        ))}
        <a href="#" onClick={onSave}>
          save as svg
        </a>
      </div>
      {selected && (
        <div className={styles.Container}>
          <div className={styles.Wrapper}>
            <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg">
              <Svg d={defs(selected, 9 - 0.3, 0)} />
              <Svg d={profile("profile", 9, 6)} />
              <Svg d={profile("roof", 9 + 10, 6)} />
            </svg>
            <Stl
              d={defs(selected, 9 - 0.3, 0)}
              r={profile("roof", 9, 5)}
              p={profile("profile", 9, 5)}
              {...({
                ground: {
                  y: -0.2,
                  h: 0.2,
                },
                "ground-floor": {
                  y: 0,
                  h: 2.8,
                },
                ceiling: {
                  y: 2.8,
                  h: 0.65,
                },
                "first-floor": {
                  y: 2.8 + 0.65,
                  h: 2.8,
                },
                attic: {
                  y: 2.8 + 0.65 + 2.8,
                  h: 0.65,
                },
              }[selected] as { y: number; h: number })}
            />
          </div>
        </div>
      )}
    </>
  );
}
