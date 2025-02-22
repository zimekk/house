import { useRef } from "react";

export default function Plan() {
  const ref = useRef<SVGSVGElement>(null);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: "1 1 auto",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          flex: "1 1 auto",
        }}
      >
        <svg
          ref={ref}
          xmlns="http://www.w3.org/2000/svg"
          style={{
            border: "1px solid red",
            flex: "1 1 auto",
          }}
        >
          <g transform={`rotate(${0} 0 0) translate(${[0, 0].join(" ")})`}>
            <path
              d={[`m${0} ${0}`]
                .concat(
                  [
                    [10],
                    [20, Math.PI / 4],
                    [30, Math.PI / 4],
                    [20, Math.PI / 4],
                    [30],
                  ]
                    .reduce(
                      ({ a, r }, [x, g = 0]) => ({
                        a: a + g,
                        r: r.concat({ x: x * Math.sin(a), y: x * Math.cos(a) }),
                      }),
                      {
                        a: 0,
                        r: [] as { x: number; y: number }[],
                      },
                    )
                    .r.map(({ x, y }) => `l${[x, y].join(" ")}`),
                )
                .concat([`z`])
                .join(" ")}
              fill="transparent"
              stroke="red"
              strokeWidth="2"
            />
            <path
              d={[`m${100} ${140}`]
                .concat(
                  [
                    [30],
                    [300],
                    [40],
                    [300],
                    [40, (2 * Math.PI * (90 - 35)) / 360],
                    [280, (2 * Math.PI * (2 * 35)) / 360],
                    [280, (2 * Math.PI * (90 - 35)) / 360],
                    [40],
                    [300],
                    [40],
                    [300],
                    [30],
                  ]
                    .reduce(
                      ({ a, l }, [x, g = 0, r = 0.1]) => ({
                        a: a + g,
                        l: l.concat({
                          x: x * Math.sin(a) * r,
                          y: x * Math.cos(a) * r,
                        }),
                      }),
                      {
                        a: Math.PI,
                        l: [] as { x: number; y: number }[],
                      },
                    )
                    .l.map(({ x, y }) => `l${[x, y].join(" ")}`),
                )
                .concat([`z`])
                .join(" ")}
              fill="transparent"
              stroke="red"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
