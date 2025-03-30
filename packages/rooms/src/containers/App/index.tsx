import Flat from "./Flat";
import Plan from "./Plan";
import Roof from "./Roof";
import Table from "./Table";
import styles from "./styles.module.scss";

export default function App() {
  return (
    <div>
      <h1>rooms</h1>
      <Flat />
      <Roof />
      <Plan />
      <div className={styles.Columns}>
        <div>
          <Table
            list={[
              { name: "Sypialnia 1", size: [4, 3.5] },
              { name: "Sypialnia 2", size: [4, 3.5] },
              { name: "Łazienka", size: [3, 2] },
              { name: "Sypialnia", size: [4, 3.5] },
              { name: "Garderoba", size: [2.5, 2] },
              { name: "Łazienka", size: [2.5, 2] },
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
            ]}
          />
        </div>
        <div>
          <Table
            list={[
              { name: "Sypialnia 1", size: [3.25, 2.95] },
              { name: "", size: [0, 0] },
              { name: "", size: [0, 0] },
              { name: "Sypialnia", size: [3.55, 2.95] },
              { name: "Garderoba", size: [2, 0.6] },
              { name: "Łazienka", size: [1.85, 2.18] },
              { name: "Pralnia", size: [1.2, 0.65] },
              { name: "", size: [0, 0] },
              { name: "Korytarz", size: [1.2, 4.95] },
              { name: "Salon", size: [5.25, 5] },
              { name: "Jadalnia", size: [0, 0] },
              { name: "Kuchnia", size: [3.1, 2.85 + 0.6] },
              { name: "", size: [0, 0] },
              { name: "", size: [0, 0] },
              { name: "Prysznic", size: [1.95, 1.5] },
              { name: "Korytarz", size: [2.9, 2] },
              { name: "Szafa", size: [1.85, 0.65] },
              { name: "", size: [0, 0] },
              { name: "", size: [0, 0] },
              { name: "", size: [0, 0] },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
