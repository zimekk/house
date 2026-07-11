import { rect, rib, shift } from "@dev/model/utils";

export default (x = 0, y = 0, z = 10) => {
  // const h = 2.8;
  // const k = 2.1;
  // const w = 8;
  // const d = 0.48;
  const bryla = () =>
    rect([x + 11.3 - 15.28 - 4.52, y], [x + 11.3, y + 1.9 + 6.1]);
  const gabinet = () =>
    ((x, y, w, h) => rect([x, y - h], [x + w, y]))(
      x + 11.3 - 15.28 - 4.52 + 0.48,
      y + 1.9 + 6.1 + 1.9 - 0.48,
      3.56,
      2.96,
    );

  return {
    bryla,
    gabinet,
  };
};
