"use client";
import { useEffect, useState } from "react";
import styles from "./RotatingWord.module.css";

export function RotatingWord({ words, interval = 2200, index: controlledIndex }) {
  const [ownIndex, setOwnIndex] = useState(0);
  const isControlled = controlledIndex != null;

  useEffect(() => {
    if (isControlled) return;
    const id = setInterval(() => {
      setOwnIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words.length, interval, isControlled]);

  const index = isControlled ? controlledIndex % words.length : ownIndex;

  return (
    <span className={styles.wrap}>
      <span key={words[index]} className={styles.word}>
        {words[index]}
      </span>
    </span>
  );
}
