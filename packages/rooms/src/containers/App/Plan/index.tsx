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

export default function Plan() {
  const ref = useRef<SVGSVGElement>(null);
  // const [active, setActive] = useState<string | undefined>(() => undefined);
  // const [points, setPoints] = useState<Record<string, PointType>>(() => ({}));
  const [rooms] = useState<Room[]>(() => [
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
  ]);

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
      </div>
    </div>
  );
}
