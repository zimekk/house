import { useMemo } from "react";
import hex from "ral-to-hex";
import { Color } from "../../components/color";
import styles from "./styles.module.scss";

interface ItemType {
  name: string;
  ral: string;
  rgb: string;
}

const parseList = (text: string) =>
  text
    .split("\n")
    .filter(Boolean)
    .map((line) =>
      (([name, color]) =>
        ((m) => {
          const ral = m ? m[1] : "";
          return {
            name,
            ral,
            rgb: hex(ral),
          };
        })(color.match(/RAL (\d+)/)))(line.split("\t")),
    );

function Table({ list }: { list: ItemType[] }) {
  const filtered = useMemo(() => list, [list]);

  return (
    <table className={styles.Table}>
      <thead>
        <tr>
          <th style={{ width: 50 }}></th>
          <th></th>
          <th style={{ width: 150 }}>RAL</th>
          <th style={{ width: 150 }}>RGB</th>
        </tr>
      </thead>
      <tbody>
        {filtered.map(({ name, ral, rgb }, key) => (
          <tr key={key}>
            <td>
              <Color color={rgb} />
            </td>
            <td>{name}</td>
            <td>{ral}</td>
            <td>{rgb}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function App() {
  return (
    <div>
      <h1>colors</h1>
      <div className={styles.Columns}>
        <div>
          <h3>
            Galeco - Kolorystyka / Typ rynny / Rozmiar rury - Kolor RAL 125 /
            70x80
          </h3>
          <Table
            list={parseList(`
Grafitowy\tRAL 7015
Czarny\tRAL 9005
Ciemnosrebrny\tRAL 9007`)}
          />
        </div>
      </div>
      <div className={styles.Columns}>
        <div>
          <h3>Galeco - Kolorystyka maskownic - Kolor RAL</h3>
          <Table
            list={parseList(`
Grafitowy\tRAL 7015
Grafitowy MAT\tRAL 7016
Czarny\tRAL 9005
Czarny MAT\tRAL 9005
Ciemnosrebrny\tRAL 9007`)}
          />
        </div>
      </div>
      <div className={styles.Columns}>
        <div>
          <h3>Siba Modern - Dostępne kolory maskownic</h3>
          <Table
            list={parseList(`
Czarny\tRAL 9005
Antracytowy\tRAL 7021
Grafitowy\tRAL 7024
Szary\tRAL 7045`)}
          />
        </div>
      </div>
    </div>
  );
}
