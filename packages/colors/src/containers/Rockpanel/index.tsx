import { useMemo, useState } from "react";
import { getColor } from "../../utils";
import styles from "./styles.module.scss";

function Samples({
  checked,
  onCheck,
  ral,
  rgb,
}: {
  checked?: boolean;
  onCheck?: (checked: boolean) => void;
  ral: string;
  rgb: string;
}) {
  return (
    <div className={styles.Samples}>
      <span style={{ backgroundColor: getColor(ral).rgb }}>
        <label>
          {onCheck && (
            <input
              type="checkbox"
              checked={checked}
              onClick={({ target }) =>
                target instanceof HTMLInputElement && onCheck(target.checked)
              }
            />
          )}
          {ral}
        </label>
      </span>
      <span
        style={{
          backgroundColor: rgb,
        }}
      >
        {rgb}
      </span>
    </div>
  );
}

export function Rockpanel({
  list,
}: {
  list: { name: string; color: string }[];
}) {
  const [selected, setSelected] = useState(() => [
    "RAL 7036",
    "RAL 7037",

    "RAL 8022",
    "RAL 7016",
    "RAL 7022",
    "RAL 7031",
    "RAL 6022",
    "RAL 5008",
    "RAL 5011",

    "RAL 9005",
    "RAL 9011",
    "RAL 7021",
    "RAL 5004",
  ]);

  const filtered = useMemo(
    () => list.filter(({ name }) => selected.includes(name)),
    [list, selected],
  );

  return (
    <div>
      <h3>Rockpanel Colours - Wybrane próbki</h3>
      <div className={styles.Columns} style={{ position: "relative" }}>
        <div className={styles.Overflow}>
          <Samples ral="RAL 9007" rgb="#4d4d4d" />
          <Samples ral="RAL 9007" rgb="#434343" />
          <Samples ral="RAL 9007" rgb="#494a52" />
          {filtered.map(({ name, color }) => (
            <Samples
              ral={name}
              rgb={color}
              checked={selected.includes(name)}
              onCheck={(checked) =>
                setSelected((selected) =>
                  !checked
                    ? selected.filter((item) => name !== item)
                    : selected.concat(name),
                )
              }
            />
          ))}
        </div>
        <div className={styles.Overflow}>
          {list.map(({ name, color }) => (
            <Samples
              ral={name}
              rgb={color}
              checked={selected.includes(name)}
              onCheck={(checked) =>
                setSelected((selected) =>
                  !checked
                    ? selected.filter((item) => name !== item)
                    : selected.concat(name),
                )
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
