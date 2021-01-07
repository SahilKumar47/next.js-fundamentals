import Head from "next/head";
import { useEffect } from "react";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <div>
      <h1 className={styles.red}>
        <span>Red hello world </span>Hello world
      </h1>
    </div>
  );
}
