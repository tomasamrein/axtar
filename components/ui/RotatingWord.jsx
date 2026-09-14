"use client";
import { useEffect, useState } from "react";
import styles from "./RotatingWord.module.css";

export function RotatingWord({ words, interval = 2200 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className={styles.wrap}>
      <span key={words[index]} className={styles.word}>
        {words[index]}
      </span>
    </span>
  );
}
