import { type Point, inner, rect, shift } from "@dev/model/utils";

export const draw = (ps: Point[]) =>
  ps
    .map((p, i) => (i > 0 ? line(p) : move(p)))
    .concat("z")
    .join(" ");

export const hole = (ps: Point[]) => draw(ps.slice().reverse());

export const line = (p: Point) => `L${p.join(" ")}`;
export const move = (p: Point) => `M${p.join(" ")}`;

const at = 0.6;

export default (level: string, x = 0, y = 0, selected: string[] = []) => {
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

  return level === "ground"
    ? {
        y: -0.2,
        h: 0.2,
        d: [
          draw([
            [x, y],
            [x + 11.3 - 4 - 0.48, y],
            [x + 11.3 - 4 - 0.48, y - 1.7],
            [x + 11.3 + 4, y - 1.7],
            [x + 11.3 + 4, y + 1.9 + 6.1 + 1.9],
            [x + 11.3 - 0.48, y + 1.9 + 6.1 + 1.9],
            [x + 11.3 - 0.48, y + 1.9 + 6.1],
            [x + 11.3 - 15.28, y + 1.9 + 6.1],
            [x + 11.3 - 15.28, y + 1.9 + 6.1 + 1.9],
            [x + 11.3 - 15.28 - 4.52, y + 1.9 + 6.1 + 1.9],
            [x + 11.3 - 15.28 - 4.52, y + 1.9 + 6.1 + 1.9 - 5.2 + 1.6],
            [
              x + 11.3 - 15.28 - 4.52 - 1.2 - 0.8,
              y + 1.9 + 6.1 + 1.9 - 5.2 + 1.6,
            ],
            // [
            //   x + 11.3 - 15.28 - 4.52 - 1.2,
            //   y + 1.9 + 6.1 + 1.9 - 5.2 - 7.4 + 0.66,
            // ],
            // [
            //   x + 11.3 - 15.28 - 4.52 - 1.2 - 0.8,
            //   y + 1.9 + 6.1 + 1.9 - 5.2 - 7.4 + 0.66,
            // ],
            [
              x + 11.3 - 15.28 - 4.52 - 1.2 - 0.8,
              y + 1.9 + 6.1 + 1.9 - 5.2 - 7.4,
            ],
            [
              x + 11.3 - 15.28 - 4.52 - 1.2 + 9.7,
              y + 1.9 + 6.1 + 1.9 - 5.2 - 7.4,
            ],
          ]),
        ].join(" "),
      }
    : level === "ceiling"
      ? {
          y: 2.8,
          h: 0.65,
          d: [
            draw([
              [x, y],
              [x + 11.3 - 4 - at, y],
              [x + 11.3 - 4 - at, y - 1.7],
              [x + 11.3 + 3, y - 1.7],
              [x + 11.3 + 3, y + 1.9 + 6.1 + 1.9],
              [x + 11.3 - at, y + 1.9 + 6.1 + 1.9],
              [x + 11.3 - at, y + 1.9 + 6.1],
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
            !selected.includes("stairs")
              ? hole([
                  shift(garderoba1[1], [0.16, 0]),
                  shift(lazienka2[0], [-0.16, 0]),
                  shift(lazienka2[3], [-0.16, 0.16]),
                  shift(lazienka2[3], [-0.16 - 1, 0.16]),
                  shift(garderoba1[2], [0.16 + 1.1, 0.16]),
                  shift(garderoba1[2], [0.16, 0.16]),
                ])
              : hole(
                  ((d = 0.28, w = 1, b = 14, c = 1) => [
                    shift(garderoba2[2], [0, 0]),
                    shift(garderoba2[2], [0, -w]),
                    shift(garderoba2[2], [w + b * d - 1.38, -w]),
                    shift(garderoba2[2], [w + b * d - 1.38, -w - c * d]),
                    shift(garderoba2[2], [w + b * d + w - 1.38, -w - c * d]),
                    shift(garderoba2[2], [w + b * d + w - 1.38, 0]),
                  ])(),
                ),
          ].join(" "),
        }
      : level === "terrace-attic"
        ? {
            y: 2.8 + 0.65,
            h: 0.18,
            d: [
              // draw([
              //   shift(bryla[1], [-4,.48-1.7]),
              //   shift(bryla[1], [3-.48,.48-1.7]),
              //   shift(bryla[2], [3-.48,1.9-.48]),
              //   shift(bryla[2], [0,1.9-.48]),
              //   shift(bryla[1], [0,0]),
              //   shift(bryla[1], [-4,0]),
              // ]),
              draw([
                shift(bryla[1], [-4 - at, -1.7]),
                shift(bryla[1], [3, -1.7]),
                shift(bryla[2], [3, 1.9]),
                shift(bryla[2], [-at, 1.9]),
                shift(bryla[2], [-at, 0]),
                shift(bryla[2], [0, 0]),
                shift(bryla[2], [0, 1.9 - at]),
                shift(bryla[2], [3 - at, 1.9 - at]),
                shift(bryla[1], [3 - at, at - 1.7]),
                shift(bryla[1], [-4, at - 1.7]),
                shift(bryla[1], [-4, 0]),
                shift(bryla[1], [-4 - at, 0]),
              ]),
              // draw([
              //   shift(bryla[0], [.48+5.44+2.1,-2.7+.48]),
              //   shift(bryla[0], [.48+5.44+2.1,0]),
              //   shift(bryla[0], [0,0]),
              //   shift(bryla[3], [0,0]),
              //   shift(bryla[3], [.48+3.56,0]),
              //   shift(bryla[3], [.48+3.56,1.9-.48]),
              //   shift(bryla[3], [-1.2-.8+.48,1.9-.48]),
              //   shift(bryla[0], [-1.2-.8+.48,-2.7+.48]),
              // ]),
              draw([
                shift(garaz[0], [-0.48 - 0.8, -0.48]),
                shift(kotlownia[1], [0.48, -0.48]),
                shift(kotlownia[2], [0.48, 0.24 - 0.48]),
                shift(kotlownia[2], [0.48 - at, 0.24 - 0.48]),
                shift(kotlownia[1], [0.48 - at, at - 0.48]),
                shift(garaz[0], [at - 0.48 - 0.8, at - 0.48]),
                shift(gabinet[3], [at - 0.48 - 0.8 - 1.2, 0.48 - at]),
                shift(gabinet[2], [0.48 - at, 0.48 - at]),
                shift(gabinet[2], [0.48 - at, -1.9 + 0.48]),
                shift(gabinet[2], [+0.48, -1.9 + 0.48]),
                shift(gabinet[2], [+0.48, +0.48]),
                shift(gabinet[3], [-0.48 - 0.8 - 1.2, +0.48]),
                // shift(bryla[0], [.48+5.44+2.1,-2.7+.48]),
                // shift(bryla[0], [.48+5.44+2.1,0]),
                // shift(bryla[0], [0,0]),
                // shift(bryla[3], [0,0]),
                // shift(bryla[3], [.48+3.56,0]),
                // shift(bryla[3], [.48+3.56,1.9-.48]),
                // shift(bryla[3], [-1.2-.8+.48,1.9-.48]),
                // shift(bryla[0], [-1.2-.8+.48,-2.7+.48]),
              ]),
            ].join(" "),
          }
        : level === "first-floor"
          ? {
              y: 2.8 + 0.65,
              h: 2.8,
              d: [
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
              ].join(" "),
            }
          : level === "attic"
            ? {
                y: 2.8 + 0.65 + 2.8 + 0.2 - 0.02,
                h: 0.02,
                d: [
                  (([a, b, c, d]) =>
                    draw(rect(shift(a, [3.9, 0]), shift(c, [3.9, 0]))))(
                    inner(bryla, 0.48),
                  ),
                ].join(" "),
              }
            : level === "chimney"
              ? {
                  y: 0,
                  h: 2.8 + 0.65 + 2.8 + 2,
                  d: [
                    draw(
                      ((a) => rect(shift(a, [0, 0]), shift(a, [0.4, 0.4])))(
                        shift(bryla[1], [-4, 1.9 + 0.48]),
                      ),
                    ),
                  ].join(" "),
                }
              : level === "stairs"
                ? {
                    y: 0,
                    h: 2.8 + 0.65 + 2.8 + 2,
                    d: [].join(" "),
                  }
                : level === "ground-floor-windows"
                  ? {
                      y: 0,
                      h: 2.8,
                      d: [
                        draw(
                          ((a, w) =>
                            rect(shift(a, [0, 0]), shift(a, [0.48, w])))(
                            shift(bryla[1], [-11.3 - 0.48, -2.7 + 0.48]),
                            1,
                          ),
                        ),
                        draw(
                          ((a, w) =>
                            rect(shift(a, [-0.48, -w]), shift(a, [0, 0])))(
                            shift(bryla[1], [-4, 1.9]),
                            0.8,
                          ),
                        ),
                        draw(
                          ((a, w) =>
                            rect(shift(a, [0, -w]), shift(a, [0.48, 0])))(
                            shift(bryla[2], [-0.48, -0.48]),
                            2.2,
                          ),
                        ),
                        draw(
                          ((a, w) =>
                            rect(shift(a, [0, -w]), shift(a, [0.48, 0])))(
                            shift(bryla[2], [-0.48, -0.48 - 2.2]),
                            2.2,
                          ),
                        ),
                        draw(
                          ((a, w) =>
                            rect(shift(a, [-w, 0]), shift(a, [0, 0.48])))(
                            shift(bryla[2], [-0.48, -0.48]),
                            2,
                          ),
                        ),
                        draw(
                          ((a, w) =>
                            rect(shift(a, [-w, 0]), shift(a, [0, 0.48])))(
                            shift(bryla[2], [-0.48 - 2, -0.48]),
                            2,
                          ),
                        ),
                        draw(
                          ((a, w) =>
                            rect(shift(a, [-w, 0]), shift(a, [0, 0.48])))(
                            shift(bryla[2], [-0.48 - 2 - 2 - 0.48, -0.48]),
                            2,
                          ),
                        ),
                        draw(
                          ((a, w) =>
                            rect(shift(a, [-w, 0]), shift(a, [0, 0.48])))(
                            shift(bryla[2], [-0.48 - 2 - 2 - 2 - 0.48, -0.48]),
                            2,
                          ),
                        ),
                        draw(
                          ((a, w) =>
                            rect(shift(a, [0, 0]), shift(a, [w, 0.48])))(
                            shift(bryla[3], [
                              0.48 + 3.9 + 0.16 + 1.22 + 0.16,
                              -0.48,
                            ]),
                            2.1,
                          ),
                        ), // fixme
                        draw(
                          ((a, w) =>
                            rect(shift(a, [0, -w]), shift(a, [0.48, 0])))(
                            shift(bryla[3], [0, 1.9 - 0.48]),
                            0.6,
                          ),
                        ), // fixme
                        draw(
                          ((a, w) =>
                            rect(shift(a, [0, -w]), shift(a, [0.48, 0])))(
                            shift(bryla[3], [0, 1.9 - 0.48 - 0.6]),
                            1.5,
                          ),
                        ), // fixme
                        draw(
                          ((a, w) =>
                            rect(shift(a, [0, -w]), shift(a, [0.1, 0])))(
                            shift(bryla[3], [0, -0.48 - 1.22]),
                            1,
                          ),
                        ), // fixme
                        draw(
                          ((a, w) =>
                            rect(shift(a, [0, -w]), shift(a, [0.48, 0])))(
                            shift(bryla[3], [0, -0.48 - 1.22 - 1]),
                            0.6,
                          ),
                        ), // fixme
                      ].join(" "),
                    }
                  : level === "garage-windows"
                    ? {
                        y: 2.4,
                        h: 0.4,
                        d: Array.from(Array(4))
                          .map((_, i) =>
                            ((w = 1.88, m = 0.36) =>
                              draw(
                                ((a) =>
                                  rect(shift(a, [-w, 0]), shift(a, [0, 0.48])))(
                                  shift(kotlownia[0], [
                                    (-m - w) * (i - 1) - 0.28,
                                    -0.48,
                                  ]),
                                ),
                              ))(),
                          )
                          //   .concat(Array.from(Array(3)).map((_, i) => ((w = (6.36-.48)/3, m = .48) => draw(
                          //     ((a) =>
                          //       rect(shift(a, [0, 0]), shift(a, [w, .48])))(
                          //       shift(garaz[0], [(m+w)*i, -.48]),
                          //     ),
                          //   ))())
                          // )
                          .join(" "),
                      }
                    : level === "garage-doors"
                      ? {
                          y: 0,
                          h: 2.375,
                          d: [
                            draw(
                              ((a, w) =>
                                rect(shift(a, [0, 0]), shift(a, [0.1, w])))(
                                shift(bryla[1], [
                                  -15.28 - 4.52 - 1.2,
                                  -2.7 + 0.48 + 0.6,
                                ]),
                                5.5, // fixme
                              ),
                            ),
                          ].join(" "),
                        }
                      : level === "first-floor-windows"
                        ? {
                            y: 2.8,
                            h: 2.4,
                            d: [
                              draw(
                                ((a, w) =>
                                  rect(shift(a, [-0.48, 0]), shift(a, [0, w])))(
                                  shift(bryla[1], [0, 0.48 + 1 + 1.5]),
                                  0.8,
                                ),
                              ), // fixme
                              draw(
                                ((a, w) =>
                                  rect(
                                    shift(a, [-0.48, -w]),
                                    shift(a, [0, 0]),
                                  ))(shift(bryla[2], [0, -0.48 - 1]), 1.5),
                              ), // fixme
                              draw(
                                ((a, w) =>
                                  rect(
                                    shift(a, [-0.48, -w]),
                                    shift(a, [0, 0]),
                                  ))(
                                  shift(bryla[2], [0, -0.48 - 1 - 1.5]),
                                  0.6,
                                ),
                              ), // fixme
                              // draw(
                              //   ((a, w) =>
                              //     rect(shift(a, [0, 0]), shift(a, [w, 0.48])))(
                              //     shift(bryla[3], [
                              //       0.48 + 3.9 + 0.16 + 1.22 + 0.16,
                              //       -0.48,
                              //     ]),
                              //     2.1,
                              //     // shift(bryla[3], [0.48 + 3 + 3, -0.48]),
                              //   ),
                              // ), // fixme
                              draw(
                                ((a, w) =>
                                  rect(shift(a, [0, -w]), shift(a, [0.48, 0])))(
                                  shift(bryla[3], [0, -0.48 - 1]),
                                  1.5 + 0.6,
                                ),
                              ), // fixme
                              // draw(
                              //   ((a, w) =>
                              //     rect(shift(a, [0, -w]), shift(a, [0.48, 0])))(
                              //     shift(bryla[3], [0, -0.48 - 1 - 1.5]),
                              //     0.6,
                              //   ),
                              // ), // fixme
                              draw(
                                ((a, w) =>
                                  rect(shift(a, [0, 0]), shift(a, [0.48, w])))(
                                  shift(bryla[0], [0, 0.48 + 1]),
                                  1.5 + 0.6,
                                ),
                              ), // fixme
                              // draw(
                              //   ((a, w) =>
                              //     rect(shift(a, [0, 0]), shift(a, [0.48, w])))(
                              //     shift(bryla[0], [0, 0.48 + 1 + 1.5]),
                              //     0.6,
                              //   ),
                              // ), // fixme
                            ].join(" "),
                          }
                        : level === "front-windows"
                          ? {
                              y: 2.8,
                              h: 1.8,
                              d: [
                                draw(
                                  ((a, w) =>
                                    rect(
                                      shift(a, [0, 0]),
                                      shift(a, [w, 0.48]),
                                    ))(
                                    shift(bryla[3], [
                                      0.48 + 3.9 + 0.16 + 1.22 + 0.16,
                                      -0.48,
                                    ]),
                                    2.1,
                                    // shift(bryla[3], [0.48 + 3 + 3, -0.48]),
                                  ),
                                ), // fixme
                              ].join(" "),
                            }
                          : level === "knee-windows"
                            ? {
                                y: 2.8 + 0.65 + 0.74,
                                h: 1.37,
                                d: [
                                  draw(
                                    ((a, w = 0.94) =>
                                      rect(
                                        shift(a, [-w, -0.48]),
                                        shift(a, [0, 0]),
                                      ))(
                                      shift(gabinet2[0], [
                                        2.7 / 2 - 0.16 / 2,
                                        0,
                                      ]),
                                    ),
                                  ), // fixme
                                  draw(
                                    ((a, w = 0.94) =>
                                      rect(
                                        shift(a, [0, -0.48]),
                                        shift(a, [w, 0]),
                                      ))(
                                      shift(gabinet2[1], [
                                        -2.7 / 2 + 0.16 / 2,
                                        0,
                                      ]),
                                    ),
                                  ), // fixme
                                ].join(" "),
                              }
                            : level === "kitchen-windows"
                              ? {
                                  y: 0.9,
                                  h: 0.6,
                                  d: [
                                    draw(
                                      ((a, w) =>
                                        rect(
                                          shift(a, [-w, 0]),
                                          shift(a, [0, 0.48]),
                                        ))(
                                        shift(bryla[1], [-0.48 - 4 - 0.6, 0]),
                                        3.2,
                                      ),
                                    ), // fixme
                                  ].join(" "),
                                }
                              : level === "gable-walls"
                                ? {
                                    y: 2.8 + 0.65 + 0.7 + 1.2 + 0.7,
                                    h: 2,
                                    d: [
                                      draw(
                                        ((a, d) => rect(a, d))(
                                          shift(bryla[0], [0, 0]),
                                          shift(bryla[3], [0.48, 0]),
                                        ),
                                      ), // fixme
                                      draw(
                                        ((b, c) => rect(b, c))(
                                          shift(bryla[1], [-0.48, 0]),
                                          shift(bryla[2], [0, 0]),
                                        ),
                                      ), // fixme
                                    ].join(" "),
                                  }
                                : // : level === "ground-floor"
                                  {
                                    y: 0,
                                    h: 2.8,
                                    d: [
                                      draw([
                                        [x, y],
                                        [x + 11.3 - 4, y],
                                        [x + 11.3 - 4, y + 1.9],
                                        [x + 11.3, y + 1.9],
                                        [x + 11.3, y + 1.9 + 6.1],
                                        [x + 11.3 - 15.28, y + 1.9 + 6.1],
                                        [x + 11.3 - 15.28, y + 1.9 + 6.1 + 1.9],
                                        [
                                          x + 11.3 - 15.28 - 4.52,
                                          y + 1.9 + 6.1 + 1.9,
                                        ],
                                        [
                                          x + 11.3 - 15.28 - 4.52,
                                          y + 1.9 + 6.1 + 1.9 - 5.2,
                                        ],
                                        [
                                          x + 11.3 - 15.28 - 4.52 - 1.2,
                                          y + 1.9 + 6.1 + 1.9 - 5.2,
                                        ],
                                        [
                                          x + 11.3 - 15.28 - 4.52 - 1.2,
                                          y + 1.9 + 6.1 + 1.9 - 5.2 - 7.4 + at,
                                        ],
                                        [
                                          x + 11.3 - 15.28 - 4.52 - 1.2 - 0.8,
                                          y + 1.9 + 6.1 + 1.9 - 5.2 - 7.4 + at,
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
                                      // draw(
                                      //   ((x, y, w, h) => rect([x, y], [x + w, y + h]))(
                                      //     x + 11.3 - 4 - 0.48,
                                      //     y + 0.48,
                                      //     -4.82,
                                      //     1.9,
                                      //   ),
                                      // ),
                                      // draw(
                                      //   ((x, y, w, h) => rect([x, y], [x + w, y + h]))(
                                      //     x + 11.3 - 0.48,
                                      //     y + 1.9 + 0.48,
                                      //     -(4 + 4.82),
                                      //     5.14,
                                      //   ),
                                      // ),
                                      // draw(((x, y, w, h) => rect([x, y], [x+w,y+h]))(x+11.3-.48,y+1.9+.48, -(4), 5.14)),
                                      // draw(((x, y, w, h) => rect([x, y], [x+w,y+h]))(x+11.3-4-.48,y+1.9+.48, -(4.82), 5.14)),
                                      draw(
                                        ((x, y, w, h) =>
                                          rect([x, y - h], [x + w, y]))(
                                          x + 11.3 - 0.48 - (4 + 4.82),
                                          y + 1.9 + 6.1 - 0.48,
                                          -0.6,
                                          1.22,
                                        ),
                                      ),
                                      // hole(
                                      //   ((x, y, w, h) => rect([x, y + h], [x + w, y]))(
                                      //     x + 11.3 - 0.48 - (4 + 4.82),
                                      //     y + 1.8 + 0.1 + 0.48,
                                      //     -0.6,
                                      //     2.42 - 0.1,
                                      //   ),
                                      // ),
                                      hole(gabinet),
                                      // hole(
                                      //   ((x, y, w, h) => rect([x, y], [x + w, y + h]))(
                                      //     x + 11.3 - 15.28 - 4.52,
                                      //     y + 1.9 + 6.1 + 1.9 - 5.2,
                                      //     0.48 + 5.44 + 2.1 + 2.48,
                                      //     1.6,
                                      //   ),
                                      // ),
                                      // hole(
                                      //   ((x, y, w, h) => rect([x, y - h], [x + w, y]))(
                                      //     x + 11.3 - 15.28 - 0.48 + 0.16,
                                      //     y + 1.9 + 6.1 - 0.48,
                                      //     1.72 + 2.1 + 1.72,
                                      //     1.22,
                                      //   ),
                                      // ),
                                      hole(garaz),
                                      hole(kotlownia),
                                      hole([
                                        shift(bryla[1], [
                                          -4 - 0.48 - 4.82,
                                          0.48,
                                        ]),
                                        shift(bryla[1], [-4 - 0.48, 0.48]),
                                        shift(bryla[1], [
                                          -4 - 0.48,
                                          0.48 + 1.9,
                                        ]),
                                        shift(bryla[1], [-0.48, 0.48 + 1.9]),
                                        shift(bryla[2], [-0.48, -0.48]),
                                        shift(bryla[2], [
                                          -0.48 - 4 - 0.48 - 4 - 0.94,
                                          -0.48,
                                        ]),
                                        shift(bryla[2], [
                                          -0.48 - 4 - 0.48 - 4 - 0.94,
                                          -0.48 - 1.22,
                                        ]),
                                        shift(bryla[2], [
                                          -0.48 - 4 - 0.48 - 4 - 0.94 - 0.16,
                                          -0.48 - 1.22,
                                        ]),
                                        shift(bryla[2], [
                                          -0.48 - 4 - 0.48 - 4 - 0.94 - 0.16,
                                          -0.48,
                                        ]),
                                        shift(gabinet[1], [0.16, -0.16 + 1.22]),
                                        shift(gabinet[1], [0.16, -0.16]),
                                        shift(gabinet[0], [0, -0.16]),
                                        shift(gabinet[0], [0, -0.16 - 1.6]),
                                        shift(schody[2], [0, 0]),
                                        shift(schody[1], [0, 0]),
                                        shift(schody[0], [0, 0]),
                                        shift(schody[3], [0, 0]),
                                        shift(bryla[1], [
                                          -0.48 - 4 - 0.48 - 4 - 0.94,
                                          0.48 + 1.8 + 2.42,
                                        ]),
                                        shift(bryla[1], [
                                          -0.48 - 4 - 0.48 - 4 - 0.94,
                                          0.48 + 1.8,
                                        ]),
                                        shift(bryla[1], [
                                          -0.48 - 4 - 0.48 - 4 - 0.94 + 0.6,
                                          0.48 + 1.8,
                                        ]),
                                      ]),
                                      // draw(schody),
                                      draw(lazienka),
                                      draw(
                                        ((a) => rect(a, shift(a, [3, at])))(
                                          shift(bryla[1], [0, -1.7]),
                                        ),
                                      ), // fixme
                                    ].join(" "),
                                  };
};
