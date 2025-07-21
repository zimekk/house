import Plan from "./Plan";
import styles from "./styles.module.scss";

export default function App() {
  return (
    <div className={styles.Container}>
      <h1>model</h1>
      <div className={styles.Wrapper}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{
            height: "150vh",
          }}
        >
          <Plan />
        </svg>
      </div>
    </div>
  );
}
