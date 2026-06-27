import { type Point, rib } from "@dev/model/utils";

const draw = (ps: Point[]) =>
  ps
    .map((p, i) => (i > 0 ? line(p) : move(p)))
    .concat("z")
    .join(" ");

const line = (p: Point) => `L${p.join(" ")}`;
const move = (p: Point) => `M${p.join(" ")}`;

export default (profile: string, x = 0, y = 0) => {
  const h = 2.8;
  const k = 2.1;
  const w = 8;
  const d = 0.48;
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
