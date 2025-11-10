import { type ChangeEventHandler, useCallback, useMemo, useState } from "react";
import { LazyImage } from "@acme/ui";
import { Link } from "../../components/link";
import { boards } from "../../data/boards";
import { daliknx } from "../../data/daliknx";
import { garden } from "../../data/garden";
import { lights } from "../../data/lights";
import { orders } from "../../data/orders";
import styles from "./styles.module.scss";

interface ItemType {
  name: string;
  image?: string;
  price: number;
  url?: string;
}

const OPTIONS = {
  boards,
  daliknx,
  garden,
  lights,
  orders,
} as const;

const formatAmount = (amount: number) =>
  new Intl.NumberFormat("pl-PL", {
    minimumFractionDigits: 2,
  }).format(amount);

function Image({ src }: { src: string }) {
  return <LazyImage className={styles.Image} src={src} />;
}

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
          <th style={{ width: 25 }}></th>
          <th align="left">name</th>
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
              {item.image && <Image src={item.image} />}
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
                  price: result.price + item.price,
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
            <td align="right">{formatAmount(item.price)}</td>
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
  const options = useMemo<Array<ItemType[]>>(() => OPTIONS[option], [option]);
  return (
    <div>
      <h1>tools</h1>
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
        {options.map((list, index) => (
          <div key={index}>
            <Table list={list} />
          </div>
        ))}
      </div>
    </div>
  );
}
