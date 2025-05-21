import { type MouseEventHandler, useCallback, useRef, useState } from "react";
import { nanoid } from "nanoid";
import Plan from "./Plan";
import Print from "./Print";
import styles from "./styles.module.scss";

// https://codesandbox.io/s/2w0oy6qnvn
function Draggable({ ...props }: { x: number; y: number }) {
  const [position, setPosition] = useState(() => ({
    x: props.x,
    y: props.y,
    coords: {
      x: 0,
      y: 0,
    },
  }));

  const handleMouseMove = useRef((e: MouseEvent) => {
    setPosition((position) => {
      const xDiff = position.coords.x - e.pageX;
      const yDiff = position.coords.y - e.pageY;
      return {
        x: position.x - xDiff,
        y: position.y - yDiff,
        coords: {
          x: e.pageX,
          y: e.pageY,
        },
      };
    });
  });

  const handleMouseDown: MouseEventHandler = (e) => {
    const pageX = e.pageX;
    const pageY = e.pageY;
    setPosition((position) =>
      Object.assign({}, position, {
        coords: {
          x: pageX,
          y: pageY,
        },
      }),
    );
    document.addEventListener("mousemove", handleMouseMove.current);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove.current);
    setPosition((position) => Object.assign({}, position, { coords: {} }));
  };

  return (
    <rect
      style={{
        cursor: "pointer",
      }}
      stroke="blue"
      x={position.x - 2}
      y={position.y - 2}
      width={4}
      height={4}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    />
  );
}

function Chair({
  position = [0, 0],
  rotate = 0,
}: {
  position?: [number, number];
  rotate?: number;
}) {
  return (
    <g transform={`rotate(${rotate} 45 55) translate(${position.join(" ")})`}>
      <path
        d="M0 0
  h50 v6
  h-50 z
  "
        fill="transparent"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M0 0
  h50 v50
  h-50 z
  "
        fill="transparent"
        stroke="currentColor"
        strokeWidth="2"
      />
    </g>
  );
}

function Table({
  position = [0, 90],
  rotate = 0,
}: {
  position?: [number, number];
  rotate?: number;
}) {
  return (
    <g transform={`rotate(${rotate} 0 0) translate(${position.join(" ")})`}>
      <path
        d="M0 0
  h90 v230
  h-90 z
  "
        fill="transparent"
        stroke="currentColor"
        strokeWidth="2"
      />
    </g>
  );
}

function Sofa({
  position = [0, 90],
  rotate = 0,
}: {
  position?: [number, number];
  rotate?: number;
}) {
  return (
    <g transform={`rotate(${rotate} 0 0) translate(${position.join(" ")})`}>
      <path
        d="M0 0
  h85 v15
  h-70 v280
  h210 v-70
  h15 v85
  h-240 z"
        fill="transparent"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M15 15
  h70 v70
  h-70 z"
        fill="transparent"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M15 85
  h70 v70
  h-70 z"
        fill="transparent"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M15 155
  h70 v70
  h-70 z"
        fill="transparent"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M15 225
  h70 v70
  h-70 z"
        fill="transparent"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M85 225
  h70 v70
  h-70 z"
        fill="transparent"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M155 225
  h70 v70
  h-70 z"
        fill="transparent"
        stroke="currentColor"
        strokeWidth="2"
      />
    </g>
  );
}

function Sunbed({
  position = [0, 0],
  rotate = -38,
}: {
  position?: [number, number];
  rotate?: number;
}) {
  return (
    <g transform={`rotate(${rotate} 0 0) translate(${position.join(" ")})`}>
      <path
        d="M5 0
  h70 v230
  h-70 z"
        fill="transparent"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M5 170
  h70 v60
  h-70 z"
        fill="transparent"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M0 75
  h5 v115
  h-5 z"
        fill="transparent"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M75 75
  h5 v115
  h-5 z"
        fill="transparent"
        stroke="currentColor"
        strokeWidth="2"
      />
    </g>
  );
}

function RoundTable({ position = [0, 0] }: { position?: [number, number] }) {
  return (
    <g transform={`translate(${position.join(" ")})`}>
      <circle
        cx={0}
        cy={0}
        r={28}
        fill="transparent"
        stroke="currentColor"
        strokeWidth="2"
      />
    </g>
  );
}

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

function Door({
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
        stroke="blue"
        strokeWidth="2"
      />
      <path
        d={`M5 ${depth - 8} v${-width} h${3} v${width} z`}
        fill="transparent"
        stroke="blue"
        strokeWidth="1"
      />
      <path
        d={`M0 ${depth} h8 v-5 h-3 v-3 h-5 z`}
        fill="transparent"
        stroke="blue"
        strokeWidth="1"
      />
      <path
        d={`M${width} ${depth} h-8 v-5 h3 v-3 h5 z`}
        fill="transparent"
        stroke="blue"
        strokeWidth="1"
      />
    </g>
  );
}

export function Elements() {
  return (
    <>
      {[
        [1, 1],
        [9, 9],
      ].map(([x, y], key) => (
        <Draggable key={key} x={x} y={y} />
      ))}
      <g>
        <path
          d="M10 20
              L20 20
              L30 20
              "
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2" />
        <polygon
          points="100,100 100,200 400,600 400,100"
          fill="url(#tile)"
          stroke="green"
        />
      </g>
      {/* https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths */}
      <g transform={`translate(${[80, 0].join(" ")})`}>
        <Chair position={[20, 30]} />
        <Chair position={[90, -50]} rotate={90} />
        <Chair position={[170, -50]} rotate={90} />
        <Chair position={[240, -50]} rotate={90} />
        <Chair position={[20, -270]} rotate={180} />
        <Chair position={[-50, -50]} rotate={-90} />
        <Chair position={[-130, -50]} rotate={-90} />
        <Chair position={[-200, -50]} rotate={-90} />
        <Table />
      </g>
      <g transform={`translate(${[280, 0].join(" ")})`}>
        <Sofa />
      </g>
      <g transform={`translate(${[470, 115].join(" ")})`}>
        <Sunbed />
      </g>
      <g transform={`translate(${[295, 85].join(" ")})`}>
        <Sunbed rotate={-16} />
      </g>
      <g transform={`translate(${[470, 210].join(" ")})`}>
        <RoundTable />
      </g>
      <g transform={`scale(1.12) translate(${[400, 100].join(" ")})`}>
        <Wall width={174} depth={-12} />
        <Wall
          width={175 + 235 + 12}
          depth={20}
          position={[-235, 0]}
          rotate={90}
        />
        <Wall
          width={313}
          depth={20}
          position={[174 - 313, 175 + 12]}
          rotate={0}
        />
        <Wall
          width={471}
          depth={20}
          position={[174 - 313 - 471, 175 + 12]}
          rotate={0}
        />
        <Wall
          width={662}
          depth={20}
          position={[-235 - 175 - 20, 174]}
          rotate={-90}
        />
        <Wall
          width={662}
          depth={20}
          position={[-20, -235 - 20 - 12]}
          rotate={0}
        />
        <Door width={90} depth={20} position={[10, 175 + 12]} rotate={0} />
        <Door
          width={90}
          depth={20}
          position={[50 - 329 - 20, 175 + 12]}
          rotate={0}
        />
        <Door width={90} depth={20} position={[40, 175]} rotate={-90} />
        <path
          d={`M0 0 h174 v175 z`}
          fill="transparent"
          stroke="green"
          strokeWidth="2"
        />
        <path
          d={`M${5} ${-12 - 235 - 15} h169 v235 z`}
          fill="transparent"
          stroke="green"
          strokeWidth="2"
        />
      </g>
    </>
  );
}

type PointType = {
  i: string;
  x: number;
  y: number;
};

function Point({ point }: { point: PointType }) {
  return (
    <circle
      data-index={point.i}
      cx={point.x}
      cy={point.y}
      r={15}
      stroke="red"
      className={styles.Point}
    ></circle>
  );
}

export default function App() {
  const [active, setActive] = useState<string | undefined>(() => undefined);
  const [points, setPoints] = useState<Record<string, PointType>>(() => ({}));
  const ref = useRef<SVGSVGElement>(null);

  console.log({ points });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: "1 1 auto",
      }}
    >
      <h1>design</h1>
      <Print />
      <a href="/api/design">download</a>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          flex: "1 1 auto",
        }}
      >
        {/* <iframe
          src="/tmp/hk-91-rysunek-szczegolowy.pdf"
          style={{
            flex: "1 1 auto",
          }}
        /> */}
        {/* <iframe
          src="/tmp/hk-99-rysunek-szczegolowy.pdf"
          style={{
            flex: "1 1 auto",
          }}
        /> */}
        <svg
          ref={ref}
          xmlns="http://www.w3.org/2000/svg"
          onMouseDown={useCallback<MouseEventHandler>(
            (e) => {
              console.log(["onMouseDown"], e, e.target);
              if (e.target === ref.current) {
                const { x, y } = ref.current.getBoundingClientRect();
                const point = { i: nanoid(), x: e.pageX - x, y: e.pageY - y };
                setPoints((points) => ({
                  ...points,
                  [point.i]: point,
                }));
              } else if (
                e.target instanceof SVGElement &&
                e.target.classList.contains(styles.Point)
              ) {
                setActive(e.target.dataset["index"]);
              }
            },
            [ref],
          )}
          onMouseMove={useCallback<MouseEventHandler>(
            (e) => {
              if (ref.current && active) {
                const { x, y } = ref.current.getBoundingClientRect();
                setPoints((points) => ({
                  ...points,
                  [active]: {
                    ...points[active],
                    x: e.pageX - x,
                    y: e.pageY - y,
                  },
                }));
              }
            },
            [active, points],
          )}
          onMouseUp={useCallback(() => {
            console.log(["onMouseUp"]);
            setActive(undefined);
          }, [])}
          onMouseOut={useCallback(() => {
            // console.log(["onMouseOut"]);
          }, [])}
          style={{
            position: "absolute",
            top: 56,
            left: 10,
            width: "95%",
            height: "85%",
            border: "1px solid red",
            flex: "1 1 auto",
          }}
        >
          {/* https://developer.mozilla.org/en-US/docs/Web/SVG/Element/pattern */}
          <defs>
            <pattern
              id="tile"
              viewBox="0 0 20 20"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path d="M20 0 L20 20 L0 20" fill="transparent" stroke="red" />
            </pattern>
            <path
              id="smiley"
              style={{
                fill: "yellow",
                stroke: "black",
                strokeWidth: 8,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                pointerEvents: "none",
              }}
              d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60"
            />
          </defs>
          {Object.values(points).map((point) => (
            <Point key={point.i} point={point} />
          ))}
          {/* <Elements /> */}
          <Plan />
          {/* <svg
            viewBox="0 0 100 100"
            width="60"
            height="30"
            preserveAspectRatio="xMaxYMid meet"
            x="140"
            y="0"
          >
            <use href="#smiley" />
          </svg> */}
        </svg>
      </div>
    </div>
  );
}
