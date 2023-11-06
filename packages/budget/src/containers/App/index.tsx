import { type ChangeEventHandler, useCallback, useMemo, useState } from "react";
import styles from "./styles.module.scss";

const formatAmount = (amount: number) =>
  new Intl.NumberFormat("pl-PL", {
    minimumFractionDigits: 2,
  }).format(amount);

function Table() {
  const [list] = useState(() => [
    // { category: "Telewizor", name: "TX-65MZ800E", price: 9999, count: 1 },
    { category: "Płyta indukcyjna", name: "ED851FWB5E", price: 3049, count: 1 },
    {
      category: "Piekarnik elektryczny",
      name: "HB578A0S6",
      price: 3459,
      count: 1,
    },
    {
      category: "Okap kuchenny wyspowy",
      name: "3500679879",
      price: 9_449,
      count: 1,
    },
    {
      category: "Kuchenka mikrofalowa",
      name: "BF634LGS1",
      price: 2199,
      count: 1,
    },
    { category: "Lodówka", name: "KI86NADD0", price: 5109, count: 1 },
    { category: "Zmywarka", name: "SN65ZX07CE", price: 5299, count: 1 },
    { category: "Zamrażarka", name: "GS36NVIEP", price: 3_539, count: 1 },
    { category: "Pralka", name: "WG56B2AXPL", price: 9499, count: 1 },
    { category: "Suszarka", name: "WT47XEH0PL", price: 4999, count: 1 },
    {
      category: "Zlewozmywak stalowy",
      name: "1270453656",
      price: 1_949,
      count: 1,
    },
    {
      category: "Bateria kuchenna stojąca z wyciąganą wylewką",
      name: "1150628210",
      price: 1_929,
      count: 1,
    },
    { category: "Dozownik do płynu", name: "1190547902", price: 439, count: 1 },
    {
      category: "Sortownik na odpady",
      name: "1210557763",
      price: 1_339,
      count: 1,
    },
    {
      category: "Umywalka nablatowa",
      name: "17535ZE00",
      price: 1_196.53,
      count: 4,
    },
    {
      category: "Bateria umywalkowa stojąca",
      name: "38026000",
      price: 1_493.99,
      count: 4,
    },
    { category: "Syfon umywalkowy", name: "52100000", price: 732.1, count: 4 },
    {
      category: "Miska WC wisząca",
      name: "1VS55NR00",
      price: 1_592.95,
      count: 3,
    },
    { category: "Deska sedesowa", name: "5SCSTP000", price: 772.99, count: 3 },
    {
      category: "Stelaż podtynkowy do WC",
      name: "111030001",
      price: 1_248,
      count: 3,
    },
    { category: "Przycisk spłukujący", name: "37547000", price: 264, count: 3 },
    {
      category: "Uchwyt na papier toaletowy",
      name: "41726000",
      price: 120.52,
      count: 3,
    },
    {
      category: "Szczotka toaletowa ścienna",
      name: "40522000",
      price: 599.0,
      count: 1,
    },
    {
      category: "Szczotka toaletowa ścienna",
      name: "41722000",
      price: 169.42,
      count: 2,
    },
    {
      category: "Wanna owalna",
      name: "291400013001",
      price: 4_156.22,
      count: 1,
    },
    {
      category: "Zestaw odpływowo-przelewowy",
      name: "687772330999",
      price: 596.49,
      count: 1,
    },
    {
      category: "Bateria wannowo-prysznicowa",
      name: "38421000",
      price: 2_354.99,
      count: 1,
    },
    {
      category: "Słuchawka prysznicowa",
      name: "10531000",
      price: 471.14,
      count: 1,
    },
    {
      category: "Bateria wannowo-prysznicowa podtynkowa termostatyczna",
      name: "38720000",
      price: 3_320.99,
      count: 1,
    },
    { category: "Deszczownica", name: "27378000", price: 2_027, count: 1 },
    { category: "Wąż prysznicowy", name: "28282000", price: 223.99, count: 4 },
    { category: "Przyłącze węża", name: "27451000", price: 170.48, count: 3 },
    {
      category: "Uchwyt prysznicowy",
      name: "27515000",
      price: 189.99,
      count: 2,
    },
    {
      category: "Drążek prysznicowy",
      name: "27609000",
      price: 201.83,
      count: 2,
    },
    {
      category: "Bateria prysznicowa podtynkowa termostatyczna",
      name: "38715000",
      price: 2_663.99,
      count: 2,
    },
    {
      category: "Słuchawka prysznicowa",
      name: "26014000",
      price: 350.39,
      count: 3,
    },
    { category: "Element podtynkowy", name: "01700180", price: 499, count: 3 },
    {
      category: "Brodzik 80x120 cm prostokątny",
      name: "355200010001",
      price: 3_496.82,
      count: 3,
    },
    {
      category: "Syfon do brodzika",
      name: "687772560999",
      price: 402,
      count: 3,
    },
    {
      category: "Grzejnik łazienkowy",
      name: "BATHLINE BB-EL",
      price: 1_277.74,
      count: 3,
    },
    {
      category: "Grzejnik łazienkowy",
      name: "AGAVE HR-EL",
      price: 4_478.87,
      count: 0,
    },
    { category: "Zawór kątowy", name: "13954820", price: 304, count: 2 * 4 },
    {
      category: "Zawór kątowy z filtrem",
      name: "054280699",
      price: 106.74,
      count: 2 + 1 + 1,
    },
    { category: "Drzwi wewnętrzne", name: "", price: 3_000, count: 7 + 5 + 2 },
    { category: "Drzwi zewnętrzne", name: "", price: 8_000, count: 1 },
    { category: "Rejestratory IP", name: "UNVR-Pro", price: 3_149, count: 1 },
    { category: "Kamery IP", name: "UVC-G4-BULLET", price: 1_299, count: 4 },
    {
      category: "Dyski twarde do monitoringu",
      name: "WD8001PURP",
      price: 1_099,
      count: 1,
    },
    { category: "Szafa RACK 12U", name: "WF01-6612-10B", price: 639, count: 1 },
    { category: "Patchpanel", name: "PPU6-1048-B", price: 189, count: 1 },
    {
      category: "Zasilacze awaryjne (UPS)",
      name: "SUA750RMI1U",
      price: 4_139,
      count: 1,
    },
    { category: "Switche POE", name: "USW-24-POE-EU", price: 1_999, count: 1 },
    { category: "Switche POE", name: "USW-16-POE-EU", price: 1_399, count: 1 },
    { category: "Access Pointy", name: "USW-24-POE-EU", price: 529, count: 2 },
    {
      category: "Access Pointy",
      name: "UAP-AC-M-EU UniFi Mesh Indoor/Outdoor",
      price: 499,
      count: 1,
    },
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
          <th>category</th>
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
            <td>{item.name}</td>
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
  return (
    <div>
      <h1>budget</h1>
      <Table />
    </div>
  );
}
