"use client";
import ScrollVelocity from "@/components/reactbits/ScrollVelocity";
import styles from "./KineticBand.module.css";

export function KineticBand({ texts, label }) {
  return (
    <div className={styles.band} role="presentation">
      <ScrollVelocity
        texts={texts}
        velocity={42}
        numCopies={8}
        damping={40}
        stiffness={280}
        className={styles.word}
        parallaxClassName={styles.parallax}
        scrollerClassName={styles.scroller}
      />
      {label ? <span className={styles.srOnly}>{label}</span> : null}
    </div>
  );
}
