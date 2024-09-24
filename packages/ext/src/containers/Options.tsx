import React from "react";
import styles from "./styles.module.scss";

export default function Options() {
  return (
    <section className={styles.Options}>
      <h1 className={styles.Nav}>
        {import.meta.env.DEV
          ? "Catch Extension Options [dev]"
          : "Catch Extension Options"}
      </h1>
    </section>
  );
}
