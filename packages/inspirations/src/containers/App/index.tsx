import { type ChangeEventHandler, useCallback, useMemo, useState } from "react";
import { LazyImage } from "../../components/image";
import { inspirations } from "../../data";
import styles from "./styles.module.scss";

function Table() {
  const [list] = useState(() => inspirations);
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

  return (
    <table className={styles.Table}>
      <thead>
        <tr>
          <th style={{ width: 20 }}></th>
          <th align="left">url</th>
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
            <td>
              <div>
                <a
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
                  {item.url}
                </a>
              </div>
              <div>
                <LazyImage src={item.src} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function App() {
  return (
    <div>
      <h1>inspirations</h1>
      <Table />
    </div>
  );
}
