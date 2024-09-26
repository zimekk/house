import { useRef, useState } from "react";

type Point = [number, number];

interface Room {
  move: Point;
  rect: Point;
}

function Rect({ move, rect }: { move: Point; rect: Point }) {
  const rotate = 0;
  const position = [0, 0];
  const [x, y] = move.map((i) => i * 13);
  const [h, v] = rect.map((i) => i * 13);
  return (
    <g transform={`rotate(${rotate} 0 0) translate(${position.join(" ")})`}>
      <path
        d={`m${x} ${y} h${h} v${v} h${-h} z`}
        fill="transparent"
        stroke="red"
        strokeWidth="4"
      />
    </g>
  );
}

function Section() {
  const rotate = 0;
  const position = [2, 10];
  const alpha = (Math.PI * 35) / 180;

  // 13*.8 -> 10.4 min szerokość elewacji
  // 13*1.2 -> 15.6 max szerokość elewacji
  // 2*(9.6-6)/Math.tan(alpha) -> 10.28 szerokość dachu dla gzymsu 6m
  // 12/2*Math.tan(alpha) -> 4.2 wysokość gzymsu dla szerokości 12m
  // 13*1.2/2*Math.tan(alpha) -> 5.46 wysokość gzymsu dla max szerokości
  // .175 wysokość stopnia
  // .60-2*.175 -> .25 min szerokość stopnia
  // .65-2*.175 -> .3 max szerokość stopnia

  return (
    <g
      transform={`rotate(${rotate} 0 0) scale(15 15) translate(${position.join(" ")})`}
    >
      <path
        d={`m0 0 h${13 * 0.8} v${-8} h${-13 * 0.8} z`}
        fill="transparent"
        stroke="red"
        strokeWidth=".1"
      />
      <path
        d={`m0 0 h${13 * 1.2} v${-6} h${-13 * 1.2} z`}
        fill="transparent"
        stroke="red"
        strokeWidth=".1"
      />
      <path
        d={`m0 0 h${13 * 1.2} v${-9.6} h${-13 * 1.2} z`}
        fill="transparent"
        stroke="red"
        strokeWidth=".1"
      />
      {/* <path
        d={`m0 ${1.6-9.6} h${1.6/Math.tan(alpha)} v${-1.6} z`}
        fill="transparent"
        stroke="red"
        strokeWidth=".1"
      /> */}
      <path
        d={`m0 ${-6} h${(9.6 - 6) / Math.tan(alpha)} v${-(9.6 - 6)} z`}
        fill="transparent"
        stroke="red"
        strokeWidth=".1"
      />
      <path
        d={`m${(2 * (9.6 - 6)) / Math.tan(alpha)} ${-6} h${-(9.6 - 6) / Math.tan(alpha)} v${-(9.6 - 6)} z`}
        fill="transparent"
        stroke="red"
        strokeWidth=".1"
      />
      <path
        d={`m${12} ${-9.6 + (12 / 2) * Math.tan(alpha)} h${-12 / 2} v${(-12 / 2) * Math.tan(alpha)} z`}
        fill="transparent"
        stroke="red"
        strokeWidth=".02"
      />
      <path
        d={`m${0} ${-9.6 + (12 / 2) * Math.tan(alpha)} h${12 / 2} v${(-12 / 2) * Math.tan(alpha)} z`}
        fill="transparent"
        stroke="red"
        strokeWidth=".02"
      />
      <path
        d={`m${13 * 1.2} ${-9.6 + ((13 * 1.2) / 2) * Math.tan(alpha)} h${(-13 * 1.2) / 2} v${((-13 * 1.2) / 2) * Math.tan(alpha)} z`}
        fill="transparent"
        stroke="red"
        strokeWidth=".02"
      />
      <path
        d={`m${0} ${-9.6 + ((13 * 1.2) / 2) * Math.tan(alpha)} h${(13 * 1.2) / 2} v${((-13 * 1.2) / 2) * Math.tan(alpha)} z`}
        fill="transparent"
        stroke="red"
        strokeWidth=".02"
      />
      <path
        d={`m${0} ${0} v${-0.3} h${4} v${-2.8} h${1} v${0.2} h${1} v${-0.2} h${0.3} v${-0.3} h${1} v${-2.8} h${1} v${0.2} h${1} v${-0.2} h${0.3} v${-0.3} h${1} v${-2.8} h${1} v${0.2} h${1} V0 z`}
        fill="transparent"
        stroke="red"
        strokeWidth=".1"
      />
      <path
        d={`m${0} ${0} v${-0.3} h${0.3} ${[...Array(18)]
          .map((_, i) => `v${-0.175} h${0.6 - 2 * 0.175}`)
          .join(" ")} h${1} V0 z`}
        fill="transparent"
        stroke="red"
        strokeWidth=".1"
      />
      <path
        d={`m${0} ${0} v${-0.3} h${0.3} ${[...Array(18)]
          .map((_, i) => `v${-0.175} h${0.6 - 2 * 0.175}`)
          .join(" ")} h${1} V0 z`}
        fill="transparent"
        stroke="red"
        strokeWidth=".1"
      />
      <path
        d={`m${0} ${0} v${-0.3} h${4.5} h${-1} ${[...Array(10)]
          .map((_, i) => `v${-0.175} h${-(0.6 - 2 * 0.175)}`)
          .join(" ")} h${-1} h${1} ${[...Array(10)]
          .map((_, i) => `v${-0.175} h${0.6 - 2 * 0.175}`)
          .join(" ")} h${1} v${-1.5} h${1} v${-1.5} h${1} V0 z`}
        fill="transparent"
        stroke="red"
        strokeWidth=".1"
      />
      <path
        d={`m${8} ${-0.3} h${0.8} v${-2.1} h${-0.8} z`}
        fill="transparent"
        stroke="red"
        strokeWidth=".1"
      />
      <path
        d={`m${8} ${-0.3 - 2 * 10 * 0.175} h${0.8} v${-2.1} h${-0.8} z`}
        fill="transparent"
        stroke="red"
        strokeWidth=".1"
      />
      <path
        d={`m${14} ${-0.3} h${0.8} v${-2.8} h${-0.8} z`}
        fill="transparent"
        stroke="red"
        strokeWidth=".1"
      />
    </g>
  );
}

function Long() {
  const rotate = 0;
  const position = [20, 10];
  const alpha = (Math.PI * 35) / 180;

  // 13*.8 -> 10.4 min szerokość elewacji
  // 13*1.2 -> 15.6 max szerokość elewacji

  return (
    <g
      transform={`rotate(${rotate} 0 0) scale(15 15) translate(${position.join(" ")})`}
    >
      <path
        d={`m0 0 h${16} v${-0.3} h${-16} z`}
        fill="transparent"
        stroke="red"
        strokeWidth=".1"
      />
      <path
        d={`m0 ${-0.3} h${16} v${-2 * 10 * 0.175} h${-16} z`}
        fill="transparent"
        stroke="red"
        strokeWidth=".1"
      />
      <path
        d={`m3 ${-9.6} h${10} v${(12 / 2) * Math.tan(alpha)} h${-10} z`}
        fill="transparent"
        stroke="red"
        strokeWidth=".1"
      />
      <path
        d={`m3 ${-9.6} h${10} v${9.6 - 2 * 10 * 0.175} h${-10} z`}
        fill="transparent"
        stroke="red"
        strokeWidth=".1"
      />
      <path
        d={`m${5} ${-0.3 - 1.5 - 2 * 10 * 0.175} h${1} v${-1.5} h${-1} z`}
        fill="transparent"
        stroke="red"
        strokeWidth=".1"
      />
      <path
        d={`m${7} ${-0.3 - 1.5 - 2 * 10 * 0.175} h${1} v${-1.5} h${-1} z`}
        fill="transparent"
        stroke="red"
        strokeWidth=".1"
      />
      <path
        d={`m${4} ${-0.3} h${0.8} v${-2.8} h${-0.8} z`}
        fill="transparent"
        stroke="red"
        strokeWidth=".1"
      />
      <path
        d={`m${9} ${-0.3} h${3} v${-2.8} h${-3} z`}
        fill="transparent"
        stroke="red"
        strokeWidth=".1"
      />
      <path
        d={`m${12} ${-0.3} h${3} v${-2.8} h${-3} z`}
        fill="transparent"
        stroke="red"
        strokeWidth=".1"
      />
    </g>
  );
}

function Stairs() {
  const w = 1;
  return (
    <path
      d={`m${7} ${-12 + 2} h${2 * w} v${-1} h${-2 * w} z ${[...Array(10)]
        .map(
          (_) =>
            `m${0} ${0.6 - 2 * 0.175} h${w} v${-(0.6 - 2 * 0.175)} h${-w} z`,
        )
        .join(" ")} m${w} ${0} ${[...Array(10)]
        .map(
          (_) =>
            `m${0} ${-(0.6 - 2 * 0.175)} h${w} v${-(0.6 - 2 * 0.175)} h${-w} z`,
        )
        .join(" ")}`}
      fill="transparent"
      stroke="red"
      strokeWidth=".1"
    />
  );
}

function Kitchen() {
  const v = 0.6;
  return (
    <>
      <path
        d={`m${11} ${-12} ${[0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]
          .map((h) => `m${h} ${0} h${-h} v${v} h${h} z`)
          .join(" ")}`}
        fill="transparent"
        stroke="red"
        strokeWidth=".02"
      />
      <path
        d={`m${12} ${-10.5} ${[0.6, 0.6, 0.6, 0.6]
          .map((h) => `m${h} ${0} h${-h} v${v} h${h} z`)
          .join(" ")}`}
        fill="transparent"
        stroke="red"
        strokeWidth=".02"
      />
      <path
        d={`m${12} ${-10.5} v${0.8} h${4 * 0.6} v${-0.8} z`}
        fill="transparent"
        stroke="red"
        strokeWidth=".02"
      />
    </>
  );
}

function Table() {
  const w = 1;
  return (
    <>
      <path
        d={`m${11.45} ${-7.5} ${[...Array(4)]
          .map((_) => `m${0.6} ${0} h${0.5} v${-0.5} h${-0.5} z`)
          .join(" ")} m${-2.4} ${1.5} ${[...Array(4)]
          .map((_) => `m${0.6} ${0} h${0.5} v${-0.5} h${-0.5} z`)
          .join(" ")}`}
        fill="transparent"
        stroke="red"
        strokeWidth=".02"
      />
      <path
        d={`m${12} ${-7.5} h${2.4} v${1} h${-2.4} z`}
        fill="transparent"
        stroke="red"
        strokeWidth=".02"
      />
    </>
  );
}

function Floor() {
  const rotate = 0;
  const position = [20, 12.5];

  return (
    <g
      transform={`rotate(${rotate} 0 0) scale(15 15) translate(${position.join(" ")})`}
    >
      <path
        d={`m0 0 h${16} v${-12} h${-16} z`}
        fill="transparent"
        stroke="red"
        strokeWidth=".1"
      />
      {[
        [0, -12, 7, 6],
        [3, 0, 4, -4],
        [7, 0, 2, -4],
        [9, 0, 2, -4],
        [9, -12, 2, 2.5],
        [9, 2.5 - 12, 2, 2.5],
        [11, -12, 5, 3],
        [11, -12 + 3, 5, 4],
        [11, 0, 5, -5],
      ].map(([x, y, w, h], index) => (
        <path
          key={index}
          d={`m${x} ${y} h${w} v${h} h${-w} z`}
          fill="transparent"
          stroke="red"
          strokeWidth=".1"
        />
      ))}
      <Stairs />
      <Kitchen />
      <Table />
      <path
        d={`m3 0 h${10} v${-12} h${-10} z`}
        fill="transparent"
        stroke="red"
        strokeWidth=".01"
      />
    </g>
  );
}

function First() {
  const rotate = 0;
  const position = [2, 12.5];

  return (
    <g
      transform={`rotate(${rotate} 0 0) scale(15 15) translate(${position.join(" ")})`}
    >
      <path
        d={`m0 0 h${16} v${-12} h${-16} z`}
        fill="transparent"
        stroke="red"
        strokeWidth=".01"
      />
      <path
        d={`m3 -1 h${10} v${-10} h${-10} z`}
        fill="transparent"
        stroke="red"
        strokeWidth=".1"
      />
      <Stairs />
      {[
        [0, -2, 4, -5],
        [0, -12, 4, 5],
        // [6, -12, 2, 4],
        // [8, -12, 2, 4],
        [4, -2, 2, -3],
        [6, -2, 4, -4],
        [6, -10, 4, 4],
        [6, -12, 2, 2],
        [8, -12, 2, 2],
        // [2, 2, 4,4],
      ].map(([x, y, w, h], index) => (
        <path
          key={index}
          d={`m${x + 3} ${y + 1} h${w} v${h} h${-w} z`}
          fill="transparent"
          stroke="red"
          strokeWidth=".1"
        />
      ))}
    </g>
  );
}

export default function Plan() {
  const ref = useRef<SVGSVGElement>(null);
  // const [active, setActive] = useState<string | undefined>(() => undefined);
  // const [points, setPoints] = useState<Record<string, PointType>>(() => ({}));
  const [rooms] = useState<Room[]>(() =>
    ([] as Room[])
      .concat([
        {
          move: [2, 10 - 5],
          rect: [5.25, 5], // Salon
        },
        {
          move: [2 + 5.25, 10 - 2.95],
          rect: [3.25, 2.95], // Sypialnia
        },
        {
          move: [2 + 5.25 + 3.25, 10 - 2.95],
          rect: [3.55, 2.95], // Sypialnia
        },
        {
          move: [2 + 5.25 + 3.25 + 3.55 - 2, 10 - 2.95 - 0.6],
          rect: [2, 0.6], // Garderoba
        },
        {
          move: [2 + 3.1 + 0.65 + 2.9 + 0.65, 10 - 2.95 - 1.2 - 2],
          rect: [2.18, 1.85], // Łazienka
        },
        {
          move: [2 + 5.25, 10 - 2.95 - 1.2],
          rect: [4.95, 1.2], // Korytarz
        },
        {
          move: [2 + 3.1 + 0.65 + 2.9, 10 - 2.95 - 1.2 - 2],
          rect: [0.65, 1.85], // Szafa
        },
        {
          move: [2 + 3.1 + 0.65, 10 - 2.95 - 1.2 - 2],
          rect: [2.9, 2], // Korytarz
        },
        {
          move: [2 + 3.1, 10 - 5 - 1.2],
          rect: [0.65, 1.2], // Pralnia
        },
        {
          move: [2 + 3.1, 10 - 5 - 3.45],
          rect: [1.2, 1.95], // Prysznic
        },
        {
          move: [2, 10 - 5 - 3.45],
          rect: [3.1, 3.45], // Kuchnia
        },

        {
          move: [18, 2],
          rect: [3.5, 4], // Sypialnia 1
        },
        {
          move: [18, 2 + 4],
          rect: [3.5, 4], // Sypialnia 2
        },
        {
          move: [18 + 3.5, 2],
          rect: [3, 2], // Łazienka
        },
        {
          move: [18 + 3.5 + 3, 2],
          rect: [2.5, 2], // Pralnia
        },

        {
          move: [18 + 3.5, 2 + 2 + 1.5],
          rect: [2, 2], // Schody
        },
        {
          move: [18 + 3.5, 2 + 2],
          rect: [4, 1.5], // Korytarz
        },

        {
          move: [28, 2],
          rect: [2, 2.5], // Łazienka
        },
        {
          move: [28 + 2, 2],
          rect: [2, 2.5], // Garderoba
        },
        {
          move: [28, 2 + 2.5],
          rect: [4, 3.5], // Sypialnia
        },

        {
          move: [36, 2],
          rect: [7, 6], // Garaż
        },
        {
          move: [36, 2 + 6],
          rect: [2, 2], // Wiatrołap
        },
        {
          move: [36 + 2, 2 + 6],
          rect: [2, 2], // Schody
        },
        {
          move: [36 + 2 + 2, 2 + 6],
          rect: [1.5, 2], // Kotłownia
        },
        {
          move: [36 + 2 + 2 + 1.5, 2 + 6],
          rect: [1.5, 2], // Garderoba
        },
        {
          move: [36 + 2 + 2 + 1.5 + 1.5 + 1.5, 2 + 4],
          rect: [1.5, 2], // Prysznic
        },
        {
          move: [36 + 2 + 2 + 1.5 + 1.5, 2 + 4],
          rect: [1.5, 4], // Korytarz
        },
        {
          move: [36 + 2 + 2 + 1.5 + 1.5, 2],
          rect: [3, 4], // Gabinet
        },
        {
          move: [36 + 2 + 2 + 1.5 + 1.5 + 3, 2 + 4],
          rect: [2.5, 2], // Spiżarnia
        },
        {
          move: [36 + 2 + 2 + 1.5 + 1.5 + 3, 2],
          rect: [3, 4], // Kuchnia
        },
        {
          move: [36 + 2 + 2 + 1.5 + 1.5 + 3 + 3, 2],
          rect: [3, 4], // Jadalnia
        },
        {
          move: [36 + 2 + 2 + 1.5 + 1.5 + 1.5 + 4, 2 + 4],
          rect: [5, 5], // Salon
        },
      ])
      .concat(
        ((x, y) => [
          {
            move: [x, y],
            rect: [7, 6], // Garaż
          },
          {
            move: [x, y + 6],
            rect: [2, 2], // Wiatrołap
          },
          {
            move: [x + 2, y + 6],
            rect: [2, 2], // Schody
          },
          {
            move: [x + 2 + 2, y + 6],
            rect: [1.5, 2], // Kotłownia
          },
          {
            move: [x + 2 + 2 + 1.5, y + 6],
            rect: [1.5, 2], // Garderoba
          },
          {
            move: [x + 2 + 2 + 1.5 + 1.5 + 1.5, y + 4],
            rect: [1.5, 2], // Prysznic
          },
          {
            move: [x + 2 + 2 + 1.5 + 1.5, y + 4],
            rect: [1.5, 4], // Korytarz
          },
          {
            move: [x + 2 + 2 + 1.5 + 1.5, y],
            rect: [3, 4], // Gabinet
          },
          {
            move: [x + 2 + 2 + 1.5 + 1.5 + 3, y + 4],
            rect: [2.5, 2], // Spiżarnia
          },
          {
            move: [x + 2 + 2 + 1.5 + 1.5 + 3, y],
            rect: [3, 4], // Kuchnia
          },
          {
            move: [x + 2 + 2 + 1.5 + 1.5 + 3 + 3, y],
            rect: [3, 4], // Jadalnia
          },
          {
            move: [x + 2 + 2 + 1.5 + 1.5 + 1.5 + 4, y + 4],
            rect: [5, 5], // Salon
          },
        ])(58, 2),
      ),
  );

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
          style={{
            border: "1px solid red",
            flex: "1 1 auto",
          }}
        >
          {rooms.map(({ move, rect }, index) => (
            <Rect key={index} move={move} rect={rect} />
          ))}
        </svg>
        <svg
          ref={ref}
          xmlns="http://www.w3.org/2000/svg"
          style={{
            border: "1px solid red",
            flex: "1 1 auto",
          }}
        >
          <Section />
          <Long />
        </svg>
        <svg
          ref={ref}
          xmlns="http://www.w3.org/2000/svg"
          style={{
            border: "1px solid red",
            flex: "1 1 auto",
            height: "12em",
          }}
        >
          <Floor />
          <First />
        </svg>
      </div>
    </div>
  );
}
