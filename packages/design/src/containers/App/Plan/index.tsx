function Wall({
  width = 20,
  depth = 20,
  position = [0, 0],
  rotate = 0,
}: {
  width?: number;
  depth?: number;
  position?: [number, number];
  rotate?: number;
}) {
  return (
    <g transform={`rotate(${rotate} 0 0) translate(${position.join(" ")})`}>
      <path
        d={`M0 0 h${width} v${depth} h${-width} z`}
        fill="transparent"
        stroke="red"
        strokeWidth="4"
      />
    </g>
  );
}

export default function Plan() {
  const t = [
    [1142, 1267, 3],
    [762, 154, 62],
    [266, 807, 1339],
    [3, 129, 726, 120],
  ];

  return (
    <g transform={`translate(${[20, 20].join(" ")})`}>
      <g transform={`scale(.339)`}>
        <path
          d={`M0 0 h${t[0].reduce((r, v) => r + v, 0)} v${t[1].reduce(
            (r, v) => r + v,
            0,
          )} z`}
          fill="transparent"
          stroke="orange"
          strokeWidth="4"
        />
        <path
          d={`M0 0 h${t[2].slice(0, 2).reduce((r, v) => r + v, 0)} v${t[3]
            .slice(0, 2)
            .reduce((r, v) => r + v, 0)}
  h${-t[2].slice(1, 2).reduce((r, v) => r + v, 0)} v${t[3]
    .slice(2, 3)
    .reduce((r, v) => r + v, 0)}
  h${-t[2].slice(0, 1).reduce((r, v) => r + v, 0)}  z`}
          fill="transparent"
          stroke="orange"
          strokeWidth="4"
        />
        <path
          d={`M${t[2].slice(0, 2).reduce((r, v) => r + v, 0)} 0
  h${t[2].slice(2, 3).reduce((r, v) => r + v, 0)} v${t[1]
    .slice(0, 1)
    .reduce((r, v) => r + v, 0)} z`}
          fill="transparent"
          stroke="orange"
          strokeWidth="4"
        />
        <path
          d={`M${t[2].slice(0, 0).reduce((r, v) => r + v, 0)} ${t[3]
            .slice(0, 3)
            .reduce((r, v) => r + v, 0)}
  h${t[2].slice(0, 1).reduce((r, v) => r + v, 0)} v${t[3]
    .slice(3, 4)
    .reduce((r, v) => r + v, 0)} z`}
          fill="transparent"
          stroke="orange"
          strokeWidth="4"
        />
        <path
          d={`M${t[0].slice(0, 1).reduce((r, v) => r + v, 0)} ${t[1]
            .slice(0, 1)
            .reduce((r, v) => r + v, 0)}
  h${t[0].slice(1, 2).reduce((r, v) => r + v, 0)} v${t[1]
    .slice(1, 3)
    .reduce((r, v) => r + v, 0)} z`}
          fill="transparent"
          stroke="orange"
          strokeWidth="4"
        />
        <path
          d={`M0 0 v971 h2412 z`}
          fill="transparent"
          stroke="green"
          strokeWidth="2"
        />
        <path
          d={`M0 0 v852 h264 z`}
          fill="transparent"
          stroke="green"
          strokeWidth="2"
        />
        <path
          d={`M0 0 v122 h1493 z`}
          fill="transparent"
          stroke="green"
          strokeWidth="2"
        />
        <path
          d={`M0 0 v662 h622 z`}
          fill="transparent"
          stroke="green"
          strokeWidth="2"
        />
        <g
          transform={`translate(${[
            t[0].reduce((r, v) => r + v, 0),
            t[1].slice(0, 0).reduce((r, v) => r + v, 0),
          ].join(" ")})`}
        >
          {/* G */}
          <path
            d={`M${-45} 45
  h${-622} v${669} z`}
            fill="transparent"
            stroke="green"
            strokeWidth="4"
          />
          {/* 1 */}
          <path
            d={`M${-45 - 622 - 30} ${45 + 669}
  h${-307} v${-215} z`}
            fill="transparent"
            stroke="green"
            strokeWidth="4"
          />
          {/* 2 */}
          <path
            d={`M${-45 - 622 - 30} ${45 + 669 - 215 - 25}
  h${-174} v${-165} z`}
            fill="transparent"
            stroke="green"
            strokeWidth="4"
          />
          {/* 10 */}
          <path
            d={`M${-45 - 622 - 30} ${45}
  h${-169} v${242} z`}
            fill="transparent"
            stroke="green"
            strokeWidth="4"
          />
        </g>
        <g
          transform={`translate(${[
            t[2].slice(0, 2).reduce((r, v) => r + v, 0),
            t[3].slice(0, 1).reduce((r, v) => r + v, 0),
          ].join(" ")})`}
        >
          {/* 4 */}
          <path
            d={`M${45} ${45}
  h${398} v${429} z`}
            fill="transparent"
            stroke="green"
            strokeWidth="4"
          />
        </g>
        <g
          transform={`translate(${[
            t[2].slice(0, 1).reduce((r, v) => r + v, 0),
            t[3].slice(0, 2).reduce((r, v) => r + v, 0),
          ].join(" ")})`}
        >
          {/* 8, 9 */}
          <path
            d={`M${45 + 187 + 421} ${45}
  h${70} v${297} z`}
            fill="transparent"
            stroke="green"
            strokeWidth="4"
          />
          <path
            d={`M${45} ${45}
  h${187 + 421} v${476} z`}
            fill="transparent"
            stroke="green"
            strokeWidth="4"
          />
          {/* 5 */}
          <path
            d={`M${45 + 678 + 15} ${45}
  h${167} v${297} z`}
            fill="transparent"
            stroke="green"
            strokeWidth="4"
          />
          {/* 6 */}
          <path
            d={`M${45 + 187} ${45 + 476}
  h${421} v${280} z`}
            fill="transparent"
            stroke="green"
            strokeWidth="4"
          />
          {/* 3 */}
          <path
            d={`M${45 + 187 + 421} ${45 + 322}
  h${477} v${113 + 102} z`}
            fill="transparent"
            stroke="green"
            strokeWidth="4"
          />
        </g>
        <g
          transform={`translate(${[
            t[2].slice(0, 1).reduce((r, v) => r + v, 0),
            t[3].slice(0, 4).reduce((r, v) => r + v, 0),
          ].join(" ")})`}
        >
          {/* 6 */}
          <path
            d={`M${45} ${-45}
  h${162} v${-194} z`}
            fill="transparent"
            stroke="green"
            strokeWidth="4"
          />
          <path
            d={`M${45} ${-45 - 280}
  h${162} v${60} z`}
            fill="transparent"
            stroke="green"
            strokeWidth="4"
          />
        </g>
      </g>
    </g>
  );
}
