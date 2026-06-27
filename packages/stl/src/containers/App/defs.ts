import { type Point, rect, shift } from "@dev/model/utils";

const draw = (ps: Point[]) =>
  ps
    .map((p, i) => (i > 0 ? line(p) : move(p)))
    .concat("z")
    .join(" ");

const hole = (ps: Point[]) => draw(ps.slice().reverse());

const line = (p: Point) => `L${p.join(" ")}`;
const move = (p: Point) => `M${p.join(" ")}`;

export default (level: string, x = 0, y = 0) => {
  const gabinet = ((x, y, w, h) => rect([x, y - h], [x + w, y]))(
    x + 11.3 - 15.28 - 4.52 + 0.48,
    y + 1.9 + 6.1 + 1.9 - 0.48,
    3.56,
    2.96,
  );
  const garaz = ((x, y, w, h) => rect([x, y], [x + w, y + h]))(
    x + 11.3 - 15.28 - 4.52 - 1.2 + 0.48,
    y + 1.9 + 6.1 + 1.9 - 5.2 - 7.4 + 0.48,
    6.36,
    6.64 + 0.28 - 0.48,
  );
  const kotlownia = ((x, y, w, h) => rect([x - w, y - h], [x, y]))(
    x - 0.48,
    y - 0.28 + 0.48,
    2.1,
    2.42,
  );
  const schody = rect(
    shift(kotlownia[2], [0, 0.28]),
    shift(garaz[2], [0.28, 0.48]),
  );
  const spizarnia = ((x, y, w, h) => rect([x, y], [x + w, y + h]))(
    x - 0.48 + 0.16,
    y + 0.48,
    2.16,
    1.64,
  );
  const lazienka = rect(
    shift(schody[3], [0.16, -0.16]),
    shift(spizarnia[2], [-0.6, 0.16]),
  );

  const bryla = rect([x + 11.3 - 15.28 - 4.52, y], [x + 11.3, y + 1.9 + 6.1]);
  const sypialnia1 = ((a) => rect(a, shift(a, [3.9, 3.44])))(
    shift(bryla[0], [0.48, 0.48]),
  );
  const garderoba1 = ((a) => rect(a, shift(a, [1.22, 2.04])))(
    shift(sypialnia1[1], [0.16, 0]),
  );
  const sypialnia2 = ((a) => rect(shift(a, [0, -3.44]), shift(a, [3.9, 0])))(
    shift(bryla[3], [0.48, -0.48]),
  );
  const sypialnia3 = ((a) => rect(shift(a, [-4.16, -3.44]), shift(a, [0, 0])))(
    shift(bryla[2], [-0.48, -0.48]),
  );
  const garderoba2 = ((a) => rect(shift(a, [0, -2.04]), shift(a, [1.22, 0])))(
    shift(sypialnia2[2], [0.16, 0]),
  );
  const lazienka2 = ((a) => rect(a, shift(a, [2.2, 3.44])))(
    shift(schody[0], [0.16, 0]),
  );
  const lazienka3 = ((a) => rect(shift(a, [-2.5, 0]), shift(a, [0, 3.44])))(
    shift(bryla[1], [-0.48, 0.48]),
  );
  const garderoba3 = ((a) => rect(shift(a, [-1.5, 0]), shift(a, [0, 3.44])))(
    shift(lazienka3[0], [-0.16, 0]),
  );
  const gabinet2 = ((a) => rect(shift(a, [-2.7, 0]), shift(a, [0, 3.44])))(
    shift(garderoba3[0], [-0.16, 0]),
  );
  const pralnia = ((a, b) => rect(a, shift(b, [0, 3.44])))(
    shift(lazienka2[1], [0.16, 0]),
    shift(gabinet2[0], [-0.16, 0]),
  );

  const path =
    level === "ground"
      ? [
          draw([
            [x, y],
            [x + 11.3 - 4, y],
            [x + 11.3 - 4, y - 1.7],
            [x + 11.3 + 4, y - 1.7],
            [x + 11.3 + 4, y + 1.9 + 6.1 + 1.9],
            [x + 11.3, y + 1.9 + 6.1 + 1.9],
            [x + 11.3, y + 1.9 + 6.1],
            [x + 11.3 - 15.28, y + 1.9 + 6.1],
            [x + 11.3 - 15.28, y + 1.9 + 6.1 + 1.9],
            [x + 11.3 - 15.28 - 4.52, y + 1.9 + 6.1 + 1.9],
            [x + 11.3 - 15.28 - 4.52, y + 1.9 + 6.1 + 1.9 - 5.2],
            [x + 11.3 - 15.28 - 4.52 - 1.2, y + 1.9 + 6.1 + 1.9 - 5.2],
            [
              x + 11.3 - 15.28 - 4.52 - 1.2,
              y + 1.9 + 6.1 + 1.9 - 5.2 - 7.4 + 0.66,
            ],
            [
              x + 11.3 - 15.28 - 4.52 - 1.2 - 0.8,
              y + 1.9 + 6.1 + 1.9 - 5.2 - 7.4 + 0.66,
            ],
            [
              x + 11.3 - 15.28 - 4.52 - 1.2 - 0.8,
              y + 1.9 + 6.1 + 1.9 - 5.2 - 7.4,
            ],
            [
              x + 11.3 - 15.28 - 4.52 - 1.2 + 9.7,
              y + 1.9 + 6.1 + 1.9 - 5.2 - 7.4,
            ],
          ]),
        ]
      : level === "ceiling"
        ? [
            draw([
              [x, y],
              [x + 11.3 - 4, y],
              [x + 11.3 - 4, y - 1.7],
              [x + 11.3 + 3, y - 1.7],
              [x + 11.3 + 3, y + 1.9 + 6.1 + 1.9],
              [x + 11.3, y + 1.9 + 6.1 + 1.9],
              [x + 11.3, y + 1.9 + 6.1],
              [x + 11.3 - 15.28, y + 1.9 + 6.1],
              [x + 11.3 - 15.28, y + 1.9 + 6.1 + 1.9],
              [x + 11.3 - 15.28 - 4.52 - 1.2 - 0.8, y + 1.9 + 6.1 + 1.9],
              [
                x + 11.3 - 15.28 - 4.52 - 1.2 - 0.8,
                y + 1.9 + 6.1 + 1.9 - 5.2 - 7.4,
              ],
              [
                x + 11.3 - 15.28 - 4.52 - 1.2 + 9.7,
                y + 1.9 + 6.1 + 1.9 - 5.2 - 7.4,
              ],
            ]),
            hole([
              shift(garderoba1[1], [0.16, 0]),
              shift(lazienka2[0], [-0.16, 0]),
              shift(lazienka2[3], [-0.16, 0.16]),
              shift(lazienka2[3], [-0.16 - 1, 0.16]),
              shift(garderoba1[2], [0.16 + 1.1, 0.16]),
              shift(garderoba1[2], [0.16, 0.16]),
            ]),
          ]
        : level === "first-floor"
          ? [
              draw(bryla),
              hole(sypialnia1),
              hole(garderoba1),
              hole(sypialnia2),
              hole(sypialnia3),
              hole(garderoba2),
              hole(garderoba3),
              hole(lazienka2),
              hole(lazienka3),
              hole(gabinet2),
              hole(pralnia),
              hole([
                shift(garderoba1[1], [0.16, 0]),
                shift(lazienka2[0], [-0.16, 0]),
                shift(lazienka2[3], [-0.16, 0.16]),
                shift(sypialnia3[0], [-0.16, 0]),
                shift(sypialnia3[3], [-0.16, 0]),
                shift(garderoba2[2], [0.16, 0]),
                shift(garderoba2[1], [0.16, -0.16]),
                shift(garderoba2[0], [0, -0.16]),
                shift(garderoba1[3], [0, 0.16]),
                shift(garderoba1[2], [0.16, 0.16]),
              ]),
            ]
          : level === "attic"
            ? [draw(bryla)]
            : [
                draw([
                  [x, y],
                  [x + 11.3 - 4, y],
                  [x + 11.3 - 4, y + 1.9],
                  [x + 11.3, y + 1.9],
                  [x + 11.3, y + 1.9 + 6.1],
                  [x + 11.3 - 15.28, y + 1.9 + 6.1],
                  [x + 11.3 - 15.28, y + 1.9 + 6.1 + 1.9],
                  [x + 11.3 - 15.28 - 4.52, y + 1.9 + 6.1 + 1.9],
                  [x + 11.3 - 15.28 - 4.52, y + 1.9 + 6.1 + 1.9 - 5.2],
                  [x + 11.3 - 15.28 - 4.52 - 1.2, y + 1.9 + 6.1 + 1.9 - 5.2],
                  [
                    x + 11.3 - 15.28 - 4.52 - 1.2,
                    y + 1.9 + 6.1 + 1.9 - 5.2 - 7.4 + 0.66,
                  ],
                  [
                    x + 11.3 - 15.28 - 4.52 - 1.2 - 0.8,
                    y + 1.9 + 6.1 + 1.9 - 5.2 - 7.4 + 0.66,
                  ],
                  [
                    x + 11.3 - 15.28 - 4.52 - 1.2 - 0.8,
                    y + 1.9 + 6.1 + 1.9 - 5.2 - 7.4,
                  ],
                  [
                    x + 11.3 - 15.28 - 4.52 - 1.2 + 9.7,
                    y + 1.9 + 6.1 + 1.9 - 5.2 - 7.4,
                  ],
                ]),
                hole(spizarnia),
                draw(
                  ((x, y, w, h) => rect([x, y], [x + w, y + h]))(
                    x + 11.3 - 4 - 0.48,
                    y + 0.48,
                    -4.82,
                    1.9,
                  ),
                ),
                draw(
                  ((x, y, w, h) => rect([x, y], [x + w, y + h]))(
                    x + 11.3 - 0.48,
                    y + 1.9 + 0.48,
                    -(4 + 4.82),
                    5.14,
                  ),
                ),
                // draw(((x, y, w, h) => rect([x, y], [x+w,y+h]))(x+11.3-.48,y+1.9+.48, -(4), 5.14)),
                // draw(((x, y, w, h) => rect([x, y], [x+w,y+h]))(x+11.3-4-.48,y+1.9+.48, -(4.82), 5.14)),
                draw(
                  ((x, y, w, h) => rect([x, y - h], [x + w, y]))(
                    x + 11.3 - 0.48 - (4 + 4.82),
                    y + 1.9 + 6.1 - 0.48,
                    -0.6,
                    1.22,
                  ),
                ),
                hole(
                  ((x, y, w, h) => rect([x, y + h], [x + w, y]))(
                    x + 11.3 - 0.48 - (4 + 4.82),
                    y + 1.8 + 0.1 + 0.48,
                    -0.6,
                    2.42 - 0.1,
                  ),
                ),
                hole(gabinet),
                hole(
                  ((x, y, w, h) => rect([x, y], [x + w, y + h]))(
                    x + 11.3 - 15.28 - 4.52,
                    y + 1.9 + 6.1 + 1.9 - 5.2,
                    0.48 + 5.44 + 2.1 + 2.48,
                    1.6,
                  ),
                ),
                hole(
                  ((x, y, w, h) => rect([x, y - h], [x + w, y]))(
                    x + 11.3 - 15.28 - 0.48 + 0.16,
                    y + 1.9 + 6.1 - 0.48,
                    1.72 + 2.1 + 1.72,
                    1.22,
                  ),
                ),
                hole(garaz),
                hole(kotlownia),
                draw(schody),
                draw(lazienka),
              ];
  return path.join(" ");
};
