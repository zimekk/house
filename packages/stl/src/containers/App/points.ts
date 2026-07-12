import { rect, rib, shift } from "@dev/model/utils";

export default (x = 0, y = 0, z = 10) => {
  // const h = 2.8;
  // const k = 2.1;
  // const w = 8;
  // const d = 0.48;
  const bryla = rect([x + 11.3 - 15.28 - 4.52, y], [x + 11.3, y + 1.9 + 6.1]);
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
  const lazienka2 = ((a) => rect(a, shift(a, [2.2, 3.44])))(
    shift(schody[0], [0.16, 0]),
  );

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

  return {
    bryla,
    gabinet,
    gabinet2,
    garaz,
    garderoba1,
    garderoba2,
    garderoba3,
    kotlownia,
    lazienka,
    lazienka2,
    lazienka3,
    pralnia,
    schody,
    spizarnia,
    sypialnia1,
    sypialnia2,
    sypialnia3,
  };
};
