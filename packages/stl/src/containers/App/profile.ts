import { type Point, rect, rib, shift } from "@dev/model/utils";

const draw = (ps: Point[]) =>
  ps
    .map((p, i) => (i > 0 ? line(p) : move(p)))
    .concat("z")
    .join(" ");

const line = (p: Point) => `L${p.join(" ")}`;
const move = (p: Point) => `M${p.join(" ")}`;

// https://contenthub.velux.com/api/public/content/d8834-2b885-bd479_downloadOriginal?v=5db6af7a
// 78x118
// 94x118
// console.log((b => rib(b))(1))

export default (profile: string, x = 0, y = 0) => {
  const h = 2.8;
  const k = 2.1;
  const w = 8;
  const d = 0.48;
  const bryla = rect([x + 11.3 - 15.28 - 4.52, y], [x + 11.3, y + 1.9 + 6.1]);
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
              draw(
                ((a, w = 0.94, h = 1.18) =>
                  rect(shift(a, [-w, 0]), shift(a, [0, h])))(
                  shift(bryla[1], [-0.48 - 3, 1.8]),
                  // shift(bryla[1], [0, 0.48]),
                ),
              ),
              draw(
                ((a, w = 0.94, h = 1.5) =>
                  rect(shift(a, [-w, -h]), shift(a, [0, 0])))(
                  shift(bryla[1], [-0.48 - 3 - 1.8, 1.8 + 1.18]),
                ),
              ),
              draw(
                ((a, w = 0.94, h = 1.5) =>
                  rect(shift(a, [-w, -h]), shift(a, [0, 0])))(
                  shift(bryla[1], [-0.48 - 3 - 1.8 - 1, 1.8 + 1.18]),
                ),
              ),
              draw(
                ((a, w = 0.94, h = 1.18) =>
                  rect(shift(a, [-w, 0]), shift(a, [0, h])))(
                  shift(bryla[1], [-0.48 - 3 - 1.8 - 2.1 - 2.2, 1.8]),
                ),
              ),
              draw(
                ((a, w = 0.94, h = 1.18) =>
                  rect(shift(a, [-w, 0]), shift(a, [0, h])))(
                  shift(bryla[1], [-0.48 - 3 - 1.8 - 2.1 - 2.2 - 1, 1.8]),
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
