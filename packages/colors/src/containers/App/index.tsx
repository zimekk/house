import { useMemo } from "react";
import hex from "ral-to-hex";
import ncsColor from "ncs-color";
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
      (([name, color = name]) =>
        color.match(/RAL/)
          ? ((m) => {
              const ral = m ? m[1] : "";
              return {
                name,
                ral,
                rgb: hex(ral),
              };
            })(color.match(/RAL (\d+)/))
          : ((m) => {
              const ncs = m ? `${m[1]}-${m[2]}` : "";
              console.log(m);
              return {
                name,
                ral: ncs,
                rgb: ncsColor.hex(ncs),
              };
            })(color.match(/(NCS S \d+)\s*-\s*(\S+)/)))(line.split("\t")),
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
      <div className={styles.Columns}>
        <div>
          {/* https://www.hormann.pl/prywatni-inwestorzy/bramy-garazowe/bramy-segmentowe/ */}
          <h3>Hörmann - Kolory bram segmentowych ze stali</h3>
          <Table
            list={parseList(`
czarny ***\tRAL 9005
szary łupkowy ***\tRAL 7015
antracytowy metallic ***\tCH 703
bazaltowy ***\tRAL 7012
szary kwarcowy ***\tRAL 7039
szare aluminium\tRAL 9007
białe aluminium\tRAL 9006
szary ***\tRAL 7040
szary kamienny ***\tRAL 7030
jasnoszary ***\tRAL 7035
antracytowy ***\tRAL 7016
brązowy ***\tRAL 8028
ciemnozielony\tRAL 6009
zielony\tRAL 6005
jasna kość słoniowa\tRAL 1015`)}
          />
        </div>
      </div>
      <div className={styles.Columns}>
        <div>
          {/* https://selt.com/lakierowanie_konstr-pl */}
          <h3>Selt - Kolory konstrukcji</h3>
          <Table
            list={parseList(`
MAT\tRAL 9016
MAT\tRAL 9010
MAT\tRAL 9001
MAT\tRAL 1013
MAT\tRAL 1015
MAT\tRAL 7035
MAT\tRAL 7001
MAT\tRAL 7022
MAT\tRAL 7037
MAT\tRAL 7012
MAT\tRAL 7015
MAT\tRAL 7024
MAT\tRAL 7016
MAT\tRAL 7021
MAT\tRAL 9005
MAT\tRAL 9006
MAT\tRAL 9007
MAT\tDB 703
MAT\tFSM 71319
MAT\tRAL 8014
MAT\tRAL 8016
satyna\tVSR 240
MAT\tVSR 780
MAT\tRAL 7039
MAT\tRAL 7043
MAT\tRAL 8003`)}
          />
        </div>
      </div>
      <div className={styles.Columns}>
        <div>
          {/* https://sunprotect.aluprof.com/oferta/zaluzje-fasadowe/lamele-z90 */}
          <h3>Lamele Z90 - Dostępne kolory</h3>
          <Table
            list={parseList(`
Kość słoniowa\tRAL 1015
Szary Antracyt\tRAL 7016
Jasny Szary\tRAL 7035
Szary\tRAL 7038
Mysi Szary\tRAL 7048
Czarny\tRAL 9005
Srebrny\tRAL 9006
Szare aluminium\tRAL 9007
Ultra Biały\tRAL 9016
Miedziany brąz\tVSR 780`)}
          />
        </div>
      </div>
      <div className={styles.Columns}>
        <div>
          {/* https://materialy.velux.pl/produkty-montazowe/kolnierze */}
          <h3>Velux - Nowy kołnierz EDT do dachówki płaskiej</h3>
          <Table
            list={parseList(`
szary\tRAL 7043
              `)}
          />
        </div>
      </div>
      <div className={styles.Columns}>
        <div>
          {/* https://www.rockpanel.com/pl/zamow-probki/ */}
          <h3>Rockpanel Colours - Dostępne próbki</h3>
          <Table
            list={parseList(`
RAL 1013
RAL 1015
RAL 5011
RAL 6009
RAL 7001
RAL 7004
RAL 7012
RAL 7016
RAL 7021
RAL 7022
RAL 7030
RAL 7031
RAL 7035
RAL 7037
RAL 7039
RAL 8028
RAL 9001
RAL 9002
RAL 9003
RAL 9005
RAL 9010
RAL 9016
RAL 1002
RAL 2010
RAL 3001
RAL 3004
RAL 3009
RAL 3016
RAL 5010
RAL 6034
RAL 7006
RAL 7024
RAL 7036
RAL 7038
RAL 8022
RAL 8023
RAL 9011
RAL 1012
RAL 1032
RAL 2012
RAL 3007
RAL 3015
RAL 3028
RAL 4004
RAL 4007
RAL 5000
RAL 5001
RAL 5003
RAL 5004
RAL 5008
RAL 5021
RAL 5022
RAL 6001
RAL 6013
RAL 6015
RAL 6022
RAL 6028
RAL 7009
RAL 7010
RAL 7033
RAL 8001
RAL 8024
NCS S 0520 - R10B
NCS S 1040 - B70G
NCS S 2010 - B70G
NCS S 2050 - B
NCS S 2050 - Y
NCS S 2060 - B90G
NCS S 2070 - G30Y
NCS S 3030 - Y10R
NCS S 3040 - B20G
NCS S 4030 - R50B
NCS S 5020 - Y10R
NCS S 0570 - Y90R`)}
          />
        </div>
      </div>
    </div>
  );
}
