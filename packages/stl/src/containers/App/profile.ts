import { rect, rib, shift } from "@dev/model/utils";
import { draw, hole } from "./defs";
import points from "./points";

// https://contenthub.velux.com/api/public/content/d8834-2b885-bd479_downloadOriginal?v=5db6af7a
// 78x118
// 94x118
// console.log((b => rib(b))(1))

export default (profile: string, x = 0, y = 0) => {
  const h = 2.8;
  const k = 2.1;
  const w = 8;
  const d = 0.48;
  const { bryla } = points(x, y);
  // const bryla = rect([x + 11.3 - 15.28 - 4.52, y], [x + 11.3, y + 1.9 + 6.1]);
  const path =
    profile === "roof"
      ? [
          draw([
            [x, y - (([a]) => h + 0.65 + k + a)(rib(w / 2 - d))],
            // [x+4, y],
            [x + w / 2 - d, y - (h + 0.65 + k)],
            [x + w / 2, y - (h + 0.65 + k)],
            [x, y - (([a]) => h + 0.65 + k + a)(rib(w / 2))],
            [x - w / 2, y - (h + 0.65 + k)],
            [x - w / 2 + d, y - (h + 0.65 + k)],
            // [x-4, y],
          ]),
        ]
      : profile === "window"
        ? ((x, y, w = 1.5, h = 2.4, m = 0.08) => [
            draw(rect([x, y - h], [x + w, y])),
            hole(rect([x + m, y - h + m], [x + w - m, y - m])),
          ])(x + 1.48, y)
            .concat(
              ((x, y, w = 0.6, h = 2.4, m = 0.08) => [
                draw(rect([x, y - h], [x + w, y])),
                hole(rect([x + m, y - h + m], [x + w - m, y - m])),
              ])(x + 1.48 + 1.5, y),
            )
            .concat(
              ((x, y, w = 1.5, h = 2.4, m = 0.08) => [
                draw(rect([x - w, y - h], [x, y])),
                hole(rect([x - w + m, y - h + m], [x - m, y - m])),
              ])(x + 8 - 1.48, y),
            )
            .concat(
              ((x, y, w = 0.6, h = 2.4, m = 0.08) => [
                draw(rect([x - w, y - h], [x, y])),
                hole(rect([x - w + m, y - h + m], [x - m, y - m])),
              ])(x + 8 - 1.48 - 1.5, y),
            )
        : profile === "windows-s"
          ? [
              draw(
                ((a, w = 2.1, h = 1.18 + 0.4) =>
                  rect(shift(a, [0, 0]), shift(a, [w, h])))(
                  shift(bryla[3], [0.48 + 3.56 + 0.16 + 1.72, -2.6]),
                ),
              ), // fixme
            ]
          : profile === "windows-w"
            ? [
                // garderoba
                draw(
                  ((a, w = 0.94, h = 1.18) =>
                    rect(shift(a, [-w, 0]), shift(a, [0, h])))(
                    shift(bryla[1], [
                      -0.48 - 2.5 - 0.16 - (1.5 - 0.94) / 2,
                      1.8,
                    ]),
                    // shift(bryla[1], [0, 0.48]),
                  ),
                ),
                // gabinet
                draw(
                  ((a, w = 0.94, h = 1.5) =>
                    rect(shift(a, [-w, -h]), shift(a, [0, 0])))(
                    shift(bryla[1], [
                      -0.48 -
                        2.5 -
                        0.16 -
                        1.5 -
                        0.16 -
                        2.7 / 2 +
                        0.94 +
                        0.16 / 2,
                      1.8 + 1.18,
                    ]),
                  ),
                ),
                draw(
                  ((a, w = 0.94, h = 1.5) =>
                    rect(shift(a, [-w, -h]), shift(a, [0, 0])))(
                    shift(bryla[1], [
                      -0.48 - 2.5 - 0.16 - 1.5 - 0.16 - 2.7 / 2 - 0.16 / 2,
                      1.8 + 1.18,
                    ]),
                  ),
                ),
                // pralnia
                draw(
                  ((a, w = 0.94, h = 1.18) =>
                    rect(shift(a, [-w, 0]), shift(a, [0, h])))(
                    shift(bryla[1], [
                      -0.48 -
                        2.5 -
                        0.16 -
                        1.5 -
                        0.16 -
                        2.7 -
                        0.16 -
                        (1.6 - 0.94) / 2,
                      1.8,
                    ]),
                  ),
                ),
                // lazienka
                draw(
                  ((a, w = 0.94, h = 1.18) =>
                    rect(shift(a, [-w, 0]), shift(a, [0, h])))(
                    shift(bryla[1], [
                      -0.48 -
                        2.5 -
                        0.16 -
                        1.5 -
                        0.16 -
                        2.7 -
                        0.16 -
                        1.6 -
                        0.16 -
                        2.2 / 2 +
                        0.94 +
                        0.16 / 2,
                      1.8,
                    ]),
                  ),
                ),
                draw(
                  ((a, w = 0.94, h = 1.18) =>
                    rect(shift(a, [-w, 0]), shift(a, [0, h])))(
                    shift(bryla[1], [
                      -0.48 -
                        2.5 -
                        0.16 -
                        1.5 -
                        0.16 -
                        2.7 -
                        0.16 -
                        1.6 -
                        0.16 -
                        2.2 / 2 -
                        0.16 / 2,
                      1.8,
                    ]),
                  ),
                ),
              ]
            : [
                draw([
                  [x + w / 2, y],
                  [x + w / 2, y - (h + 0.65 + k)],
                  [x + w / 2 - d, y - (h + 0.65 + k)],
                  // [x, y-(([a]) => (h+.65+k+a))(rib(w/2))],
                  [x, y - (([a]) => h + 0.65 + k + a)(rib(w / 2 - d))],
                  [x - w / 2 + d, y - (h + 0.65 + k)],
                  [x - w / 2, y - (h + 0.65 + k)],
                  [x - w / 2, y],
                ]),
              ];
  return path.join(" ");
};
