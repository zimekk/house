import { type ChangeEventHandler, useCallback, useMemo, useState } from "react";
import styles from "./styles.module.scss";

function Table() {
  const [list] = useState(() => [
    { name: "Sypialnia 1", size: [4, 3.5] },
    { name: "Sypialnia 2", size: [4, 3.5] },
    { name: "Łazienka", size: [3, 2] },
    { name: "Sypialnia", size: [4, 3.5] },
    { name: "Łazienka", size: [2.5, 2] },
    { name: "Garderoba", size: [2.5, 2] },
    { name: "Pralnia", size: [2.5, 2] },
    { name: "Schody", size: [2, 2] },
    { name: "Korytarz", size: [1.5, 4] },
    { name: "Salon", size: [5, 5] },
    { name: "Jadalnia", size: [3, 4] },
    { name: "Kuchnia", size: [3, 4] },
    { name: "Spiżarnia", size: [2.5, 2] },
    { name: "Gabinet", size: [4, 3] },
    { name: "Prysznic", size: [1.5, 2] },
    { name: "Korytarz", size: [1.5, 4] },
    { name: "Garderoba", size: [1.5, 2] },
    { name: "Kotłownia", size: [1.5, 2] },
    { name: "Wiatrołap", size: [2, 2] },
    { name: "Garaż", size: [6, 7] },
  ]);
  const [selected, setSelected] = useState(() => list.map((_, key) => key));

  const filtered = useMemo(() => list, [list]);

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
          <th style={{ width: 20 }}></th>
          <th align="left">name</th>
          <th align="right" style={{ width: 120 }}>
            size
          </th>
          <th align="right" style={{ width: 120 }}>
            area
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
            <td>{item.name}</td>
            <td align="right">{`${item.size.join("x")}m`}</td>
            <td align="right">{`${item.size.reduce((area, size) => area * size, 1)}m2`}</td>
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
                  area:
                    result.area +
                    item.size.reduce((area, size) => area * size, 1),
                }),
              {
                area: 0,
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
            <td align="right"></td>
            <td align="right">{`${item.area}m2`}</td>
          </tr>
        ))}
      </tfoot>
    </table>
  );
}

export default function App() {
  return (
    <div>
      <h1>rooms</h1>
      <Table />
    </div>
  );
}
