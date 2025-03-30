import { useRef, useState } from "react";
import Table, { formatArea, formatSize } from "../Table";

type Point = [number, number];

interface Room {
  name?: string;
  move: Point;
  size: Point;
}

const SCALE = 25;

function Area({ move, size }: { move: Point; size: Point }) {
  const rotate = 0;
  const position = [0, 0];
  const [x, y] = move.map((i) => i * SCALE);
  const [h, v] = size.map((i) => i * SCALE);
  return (
    <g transform={`rotate(${rotate} 0 0) translate(${position.join(" ")})`}>
      <path
        d={`m${x} ${y} h${h} v${v} h${-h} z`}
        fill="cyan"
        stroke="blue"
        strokeWidth="2"
        opacity={0.1}
      />
    </g>
  );
}

function Rect({
  name,
  move,
  size,
}: {
  name?: string;
  move: Point;
  size: Point;
}) {
  const rotate = 0;
  const position = [0, 0];
  const [x, y] = move.map((i) => i * SCALE);
  const [h, v] = size.map((i) => i * SCALE);
  return (
    <g transform={`rotate(${rotate} 0 0) translate(${position.join(" ")})`}>
      <path
        d={`m${x} ${y} h${h} v${v} h${-h} z`}
        fill="transparent"
        stroke="red"
        strokeWidth="1"
      />
      {name && (
        <g transform={`translate(${[x + v / 2, y].join(" ")})`}>
          <text
            x={0}
            y={0}
            fontSize={8}
            dominantBaseline="middle"
            textAnchor="middle"
          >
            <tspan x={0} dy="1.2em">
              {name}
            </tspan>
            {size.every((x) => x > 0.6) && (
              <>
                <tspan x={0} dy="1.2em">
                  {formatSize(size)}
                </tspan>
                <tspan x={0} dy="1.2em">
                  {formatArea(size)}
                </tspan>
              </>
            )}
          </text>
        </g>
      )}
    </g>
  );
}

export default function Flat() {
  const ref = useRef<SVGSVGElement>(null);
  const [floor] = useState<Room[]>(() =>
    ([] as Room[]).concat(
      ((x, y) => [
        // {
        //   name: 'Zabudowa 1',
        //   move: [x-1.5-.48, y-.48],
        //   size: [20.92, 2.51+.48+.48],
        // },
        // {
        //   name: 'Zabudowa 2',
        //   move: [x-.48, y+2.51+.48],
        //   size: [20.92-1.5, 6.99-2.51],
        // },
        // {
        //   name: 'Zabudowa 3',
        //   move: [x-.48, y+6.99+.48],
        //   size: [6.9+.48+.48, 2.48+2.48],
        // },
        {
          name: "Zabudowa 1",
          move: [x - 1.5 - 0.48, y - 0.48],
          size: [1.5, 2.51 + 0.48 + 0.48],
        },
        {
          name: "Zabudowa 2",
          move: [x - 0.48, y - 0.48],
          size: [0.48 + 6.9 + 0.48, 7.95 + 2.48 + 2.48],
        },
        {
          name: "Zabudowa 3",
          move: [x + 6.9 + 0.48, y - 0.48],
          size: [0.28 - 0.48 + 3.62 + 7.66 + 0.48, 0.48 + 6.99 + 0.48],
        },
      ])(2.5, 1),
    ),
  );

  const [attic] = useState<Room[]>(() =>
    ([] as Room[]).concat(
      ((x, y) => [
        {
          name: "Poddasze",
          move: [x - 0.48, y - 0.48],
          size: [20.92 - 1.5, 6.99 + 0.48 + 0.48],
        },
        {
          name: "Strych",
          move: [x + 4.02 + 0.16, y],
          size: [3 + 3.6 + 2.21, 6.99],
        },
      ])(22, 1),
    ),
  );

  const [rooms] = useState<Room[]>(() =>
    ([] as Room[])
      .concat(
        ((x, y) => [
          {
            name: "Garaż",
            move: [x, y + 2.51 + 0.16 + 0.6 + 1.6 + 0.28],
            size: [6.9, 6.8],
          },
          {
            name: "Hol wejściowy",
            move: [x, y + 2.51 + 0.16],
            size: [1.2 + 3.16, 1.6 + 0.6],
          },
          {
            name: "Gabinet",
            move: [x - 1.5, y],
            size: [4.41, 2.51],
          },
          {
            name: "Kotłownia",
            move: [x - 1.5 + 4.41 + 0.16, y],
            size: [3.6, 1.75],
          },
          {
            name: "Spiżarnia",
            move: [x - 1.5 + 4.41 + 0.16 + 3.6 + 0.16, y],
            size: [1.6, 1.75],
          },
          {
            name: "Toaleta",
            move: [x + 1.2 + 3.16 + 1.2 + 0.16, y + 1.75 + 0.16],
            size: [2.7, 1.2],
          },
          {
            name: "Komunikacja",
            move: [x + 1.2 + 3.16, y + 0.6 + 2.51 + 0.16],
            size: [1.2 + 1.62, 1.6],
          },
          {
            name: "Schody",
            move: [x + 1.2 + 3.16 + 1.2 + 1.62, y + 0.6 + 2.51 + 0.16 + 1.6],
            size: [3.62, 2.12],
          },
          {
            name: "Salon",
            move: [x - 1.5 + 4.41 + 0.16 + 3.6 + 0.16 + 1.6 + 0.16, y],
            size: [4.2 + 5.67, 6.99],
          },
        ])(2.5, 1),
      )
      .concat(
        ((x, y) => [
          {
            name: "Pokój",
            move: [x, y],
            size: [4.02, 3.41],
          },
          {
            name: "Pokój",
            move: [x, y + 3.41 + 0.16],
            size: [4.02, 3.41],
          },
          {
            name: "Łazienka",
            move: [x + 4.02 + 0.16, y],
            size: [3, 2],
          },
          {
            name: "Pralnia",
            move: [x + 4.02 + 0.16 + 3 + 0.16, y],
            size: [2.19, 1.65],
          },
          {
            name: "Garderoba",
            move: [x + 4.02 + 0.16 + 3 + 0.16, y + 1.65 + 0.16],
            size: [2.19, 1.65],
          },
          {
            name: "Gabinet",
            move: [x + 4.02 + 0.16 + 3 + 0.16 + 2.19 + 0.16, y],
            size: [3.3, 3.46],
          },
          {
            name: "Hol",
            move: [x + 4.02 + 0.16, y + 2 + 0.16],
            size: [3, 4.83],
          },
          {
            name: "Schody",
            move: [x + 4.02 + 0.16 + 3, y + 3.46 + 0.16 + 1.25],
            size: [3.62, 2.12],
          },
          {
            name: "Komunikacja",
            move: [x + 4.02 + 0.16 + 3, y + 3.46 + 0.16],
            size: [3.6, 1.25],
          },
          {
            name: "Komunikacja",
            move: [x + 4.02 + 0.16 + 3 + 3.6, y + 3.46 + 0.16],
            size: [2.21, 1.25 + 2.12],
          },
          {
            name: "Garderoba",
            move: [x + 4.02 + 0.16 + 3 + 0.16 + 2.19 + 0.16 + 3.3 + 0.16, y],
            size: [2.55, 3.77],
          },
          {
            name: "Łazienka",
            move: [
              x +
                4.02 +
                0.16 +
                3 +
                0.16 +
                2.19 +
                0.16 +
                3.3 +
                0.16 +
                2.55 +
                0.16,
              y,
            ],
            size: [2.6, 3.77],
          },
          {
            name: "Sypialnia",
            move: [
              x + 4.02 + 0.16 + 3 + 0.16 + 2.19 + 0.16 + 3.3 + 0.16,
              y + 3.77 + 0.16,
            ],
            size: [5.31, 3.06],
          },
        ])(22, 1),
      ),
  );

  const [furniture] = useState<Room[]>(() =>
    ([] as Room[])
      .concat(
        ((x, y, w, h) =>
          [
            // {
            //   move: [x, y],
            //   size: [.6,.6],
            // },
            // {
            //   move: [x+.6, y],
            //   size: [.6,.6],
            // },
            // {
            //   move: [x+.6*2, y],
            //   size: [.6,.6],
            // },
            // {
            //   move: [x+.6*3, y],
            //   size: [.6,.6],
            // },
            // {
            //   move: [x+.6*4, y],
            //   size: [.6,.6],
            // },
            // {
            //   move: [x+.6*4, y],
            //   size: [.6,.6],
            // },
            // Zabudowa kuchenna
            ...[...Array(7)].map((_, i) =>
              Object.assign(
                {
                  move: [x + 0.6 * i, y],
                  size: [0.6, 0.6],
                },
                {
                  0: { name: "X" },
                  2: { name: "K" },
                  4: { name: "Z" },
                  6: { name: "X" },
                }[i],
              ),
            ),
            // Zabudowa wysoka
            ...[...Array(2)].map((_, i) => ({
              move: [x, y + 1.8 + 0.6 * i],
              size: [0.6, 0.6],
            })),
            // Bufet
            ...[...Array(3)].map((_, i) => ({
              move: [x, y + h - 0.6 - 0.6 * i],
              size: [0.6, 0.6],
            })),
            // Wyspa
            {
              name: "Wyspa",
              move: [x + 1.2 + 0.6, y + 1.2 + 0.6],
              size: [0.6 * 3, 0.8],
            },
            // ...[...Array(3)].map((_, i) => ({
            //   move: [x+1.2+.6*i, y+1.2+.6],
            //   size: [.6,.8],
            // })),
            // Krzesła
            ...[...Array(3)].map((_, i) => ({
              move: [x + 2.25 + 0.6 * i, y + h - 1.5 - 0.25 - (0.5 + 0.4)],
              size: [0.5, 0.5],
            })),
            // Stół
            {
              name: "Stół",
              move: [x + 2, y + h - 1.5 - 0.5],
              size: [2.2, 1],
            },
            // Krzesła
            ...[...Array(3)].map((_, i) => ({
              move: [x + 2.25 + 0.6 * i, y + h - 1.5 - 0.25 + (0.5 + 0.4)],
              size: [0.5, 0.5],
            })),
            // {
            //   move: [x, y+1.8+.6*0],
            //   size: [.6,.6],
            // },
            // {
            //   move: [x, y+1.8+.6*1],
            //   size: [.6,.6],
            // },
            // Wyspa
            // {
            //   move: [x+.6+1.2, y+1.8],
            //   size: [.6*3,.6*2],
            // },
          ].concat() as Room[])(
          ...((item) =>
            [...item.move, ...item.size] as [number, number, number, number])(
            rooms.find(({ name }) => name === "Salon") as Room,
          ),
          // ...((item => (item.size))((rooms.find(({name}) => name === 'Salon') as Room))),
        ),
      )
      .concat(
        ((x, y) => [
          {
            name: "Pokój",
            move: [x, y],
            size: [4.02, 3.41],
          },
        ])(22, 1),
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
            height: 350,
          }}
        >
          {floor.map((item, index) => (
            <Area key={index} {...item} />
          ))}
          {attic.map((item, index) => (
            <Area key={index} {...item} />
          ))}
          {rooms.map((item, index) => (
            <Rect key={index} {...item} />
          ))}
          {furniture.map((item, index) => (
            <Rect key={index} {...item} />
          ))}
        </svg>
      </div>
      <div>
        <Table
          list={[
            { name: "Powierzchnia działki", size: [1, 1530] },
            { name: "Powierzchnia zabudowy", size: [1, 1530 * 0.13] },
          ]}
        />
      </div>
      <div>
        <Table list={floor} />
      </div>
      <div>
        <Table list={attic} />
      </div>
      <div>
        <Table list={rooms} />
      </div>
    </div>
  );
}
