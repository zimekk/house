import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { addListener, get, set } from "../storage";

export default function Options() {
  const [data, setData] = useState(null);

  useEffect(() => {
    get().then(setData);
  }, []);

  useEffect(() => {
    addListener(() => get().then(setData));
  }, []);

  return (
    <section className={styles.Options}>
      <h1 className={styles.Nav}>
        {import.meta.env.DEV
          ? "Catch Extension Options [dev]"
          : "Catch Extension Options"}
      </h1>
      {data && (
        <div>
          <button
            onClick={() =>
              navigator.clipboard.writeText(JSON.stringify(data, null, 2))
            }
          >
            copy
          </button>
          <button onClick={() => set([])}>clear</button>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </section>
  );
}
