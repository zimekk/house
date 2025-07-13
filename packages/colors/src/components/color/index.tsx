import { type ComponentPropsWithoutRef } from "react";
import styles from "./styles.module.scss";

export function Color({ color = "", ...props }: ComponentPropsWithoutRef<"a">) {
  return <div className={styles.Color} style={{ background: color }}></div>;
}
