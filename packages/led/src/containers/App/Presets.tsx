import { type ChangeEventHandler, useCallback, useMemo, useState } from "react";
import { Link } from "../../components/link";
import { PresetSchema, type PresetType } from "../../schema";
import styles from "./styles.module.scss";

// export interface PresetType {
//   name: string;
//   type: 'WW'|'NW'|'CW'|'CCT'|'RGB'|'RGB CCT'|'RGB CW'|'RGB NW'|'RGB WW',
//   volt: 'DC5V'|'DC12V'|'DC24V'|'DC48V';
//   // temp: 3000|4000|5000;
//   kind: 'FCOB' | 'SMD';
//   // chip: 'WD2815' | 'SK2814';
//   // leds: 336|480|528;
//   // fpcb: IP30-10mm; IP66-12mm
//   // power: number; 21W
//   // qty; number;
//   // dimm: boolean;
//   // spi: boolean;
//   ip: 'ip20' |'ip65';
// }

const formatAmount = (amount: number) =>
  new Intl.NumberFormat("pl-PL", {
    minimumFractionDigits: 2,
  }).format(amount);

const formatType = (type: PresetType["attributes"]["type"]) =>
  ({
    WW: "Warm White 2700-3000K",
    NW: "Natural White 4000-4500K",
    CW: "Cool White 6000-6500K",
    CCT: "CCT",
    RGB: "RGB",
    RGB_WW: "RGB Warm White",
    RGB_NW: "RGB Natural White",
    RGB_CW: "RGB Cool White",
    RGB_CCT: "RGB CCT",
  })[type];

const formatKind = (kind: PresetType["attributes"]["kind"]) =>
  ({
    FCOB_SPI: "SPI FCOB (IC Chip)",
    FCOB_PWM: "PWM FCOB (No IC Chip)",
    SMD_SPI: "SMD_SPI",
    SMD_PWM: "SMD_PWM",
  })[kind];

const formatPins = ({ type, kind }: PresetType["attributes"]) => {
  const pins = {
    FCOB_SPI: {
      WW: 3,
      NW: 3,
      CW: 3,
      CCT: 3,
      RGB: 3,
      RGB_CW: 3,
      RGB_NW: 3,
      RGB_WW: 3,
    },
    FCOB_PWM: {
      WW: 2,
      NW: 2,
      CW: 2,
      CCT: 3,
      RGB: 4,
      RGB_CW: 5,
      RGB_NW: 5,
      RGB_WW: 5,
    },
    SMD_SPI: {}, // WS2812B, WS2815, WS2814
    SMD_PWM: {}, // 5050 RGBW, 5050 RGBCCT
  }[kind];
  if (type in pins) {
    return (pins as any)[type] || null;
  }
  return null;
};

const formatVolt = (volt: PresetType["attributes"]["volt"]) => volt;

function Table({ list }: { list: PresetType[] }) {
  const [selected, setSelected] = useState(() => list.map((_, key) => key));

  const filtered = useMemo(() => PresetSchema.array().parse(list), [list]);
  console.log({ list });
  const handleSelect = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) =>
      ((key) =>
        setSelected((selected) =>
          selected.filter((id) => id !== key).concat(target.checked ? key : []),
        ))(Number(target.value)),
    [],
  );

  const handleSelectAll = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) =>
      ((keys) =>
        setSelected((selected) =>
          selected
            .filter((id) => !keys.includes(id))
            .concat(target.checked ? keys : []),
        ))(list.map((_, key) => key)),
    [list],
  );

  return (
    <table className={styles.Table}>
      <thead>
        <tr>
          <th style={{ width: 25 }}></th>
          <th align="left">name</th>
          <th align="left">ip</th>
          <th align="left">type</th>
          <th align="left">kind</th>
          <th align="left">volt</th>
          <th align="left">leds</th>
          <th align="left">length</th>
          <th align="right" style={{ width: 90 }}>
            price
          </th>
        </tr>
      </thead>
      <tbody>
        {filtered.map((item, key) => (
          <tr key={key}>
            <td>
              <label>
                <input
                  type="checkbox"
                  value={key}
                  checked={selected.includes(key)}
                  onChange={handleSelect}
                />
              </label>
            </td>
            <td className={styles.Name}>
              <Link
                href={item.url || "#"}
                onClick={(e) => {
                  const range = document.createRange();
                  e.preventDefault();
                  range.selectNode(e.target as HTMLElement);
                  ((selection) =>
                    selection &&
                    (selection.removeAllRanges(), selection.addRange(range)))(
                    window.getSelection(),
                  );
                }}
              >
                {item.name}
              </Link>
            </td>
            <td>{item.attributes.ip}</td>
            <td>
              {formatType(item.attributes.type)} ({formatPins(item.attributes)})
            </td>
            <td>{formatKind(item.attributes.kind)}</td>
            <td>{formatVolt(item.attributes.volt)}</td>
            <td>
              {item.attributes.leds
                ? `${item.attributes.leds} (${item.attributes.width}mm, ${item.attributes.power}W/m)`
                : `-`}
            </td>
            <td>
              {item.attributes.length
                ? `${item.attributes.length}m (${item.attributes.length * (item.attributes.power || 1)}W)`
                : `-`}
            </td>
            <td align="right">{item.price ? formatAmount(item.price) : ""}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        {[
          filtered
            .filter((_, key) => selected.includes(key))
            .reduce(
              (result, item) =>
                Object.assign(result, {
                  price: result.price + (item.price || 0),
                }),
              {
                price: 0,
              },
            ),
        ].map((item, key) => (
          <tr key={key}>
            <td>
              <label>
                <input
                  type="checkbox"
                  checked={list.length > 0 && selected.length === list.length}
                  disabled={list.length === 0}
                  onChange={handleSelectAll}
                />
              </label>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td align="right">{formatAmount(item.price)}</td>
          </tr>
        ))}
      </tfoot>
    </table>
  );
}

export function Results({ results }: { results: PresetType[] }) {
  return <Table list={results} />;
}

export default function Presets({ presets }: { presets: PresetType[] }) {
  return <Table list={presets} />;
}
