import { type ChangeEventHandler, useCallback, useMemo, useState } from "react";
import { Link } from "@dev/tools/components/link";
import { bathroom } from "../../data/bathroom";
import { budget } from "../../data/budget";
import { kitchen } from "../../data/kitchen";
import styles from "./styles.module.scss";

interface ItemType {
  category: string;
  name: string;
  url?: string;
  price: number;
  count: number;
}

const OPTIONS = {
  budget,
  bathroom,
  kitchen,
} as const;

const formatAmount = (amount: number) =>
  new Intl.NumberFormat("pl-PL", {
    minimumFractionDigits: 2,
  }).format(amount);

function Table({ list }: { list: ItemType[] }) {
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
          <th style={{ width: 240 }}>category</th>
          <th>name</th>
          <th style={{ width: 120 }}>price</th>
          <th style={{ width: 120 }}>count</th>
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
            <td>{item.category}</td>
            <td className={styles.Name}>
              <Link
                href={item.url}
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
            <td align="right">{formatAmount(item.price)}</td>
            <td align="right">{item.count}</td>
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
                  price: result.price + item.price * item.count,
                  count: result.count + item.count,
                }),
              {
                price: 0,
                count: 0,
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
            <td align="right">{formatAmount(item.price)}</td>
            <td align="right">{item.count}</td>
          </tr>
        ))}
      </tfoot>
    </table>
  );
}

export default function App() {
  const [option, setOption] = useState(
    () => Object.keys(OPTIONS).pop() as keyof typeof OPTIONS,
  );
  const list = useMemo<Array<ItemType>>(() => OPTIONS[option], [option]);
  return (
    <div>
      <h1>budget</h1>
      <fieldset>
        <select
          value={option}
          onChange={(e) => setOption(e.target.value as keyof typeof OPTIONS)}
        >
          {Object.keys(OPTIONS).map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </fieldset>
      <div className={styles.Columns} key={option}>
        <div key={option}>
          <Table list={list} />
        </div>
      </div>
    </div>
  );
}
