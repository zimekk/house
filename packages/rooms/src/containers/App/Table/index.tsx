import { type ChangeEventHandler, useCallback, useMemo, useState } from "react";
import styles from "./styles.module.scss";

interface ItemType {
  name?: string;
  size: [number, number];
}

const formatNumber = (size: number) =>
  new Intl.NumberFormat("pl-PL", {
    maximumFractionDigits: 2,
  }).format(size);

export const formatArea = (size: [number, number]) =>
  `${formatNumber(size.reduce((area, size) => area * size, 1))}m2`;

export const formatSize = (size: [number, number]) =>
  `${size.map(formatNumber).join("x")}m`;

export default function Table({ list }: { list: ItemType[] }) {
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
            <td align="right">{formatSize(item.size)}</td>
            <td align="right">{formatArea(item.size)}</td>
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
            <td align="right">{formatArea([item.area, 1])}</td>
          </tr>
        ))}
      </tfoot>
    </table>
  );
}
