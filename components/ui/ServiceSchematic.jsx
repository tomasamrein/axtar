import styles from "./ServiceSchematic.module.css";

const VIEW = "0 0 320 200";

function Custom() {
  return (
    <g>
      <rect x="18" y="20" width="120" height="48" className={styles.solid} />
      <rect x="18" y="88" width="120" height="48" className={styles.line} />
      <rect x="18" y="156" width="120" height="26" className={styles.line} />
      <rect x="196" y="44" width="106" height="112" className={styles.line} />
      <rect x="208" y="58" width="82" height="10" className={styles.solid} />
      <rect x="208" y="78" width="60" height="10" className={styles.faint} />
      <rect x="208" y="98" width="72" height="10" className={styles.faint} />
      <rect x="208" y="118" width="48" height="10" className={styles.faint} />
      <path d="M138 44 H196" className={styles.wire} />
      <path d="M138 112 H168 V72 H196" className={styles.wire} />
      <path d="M138 169 H168 V128 H196" className={styles.wire} />
    </g>
  );
}

function Web() {
  return (
    <g>
      <rect x="18" y="20" width="284" height="162" className={styles.line} />
      <path d="M18 48 H302" className={styles.wire} />
      <rect x="30" y="30" width="10" height="8" className={styles.solid} />
      <rect x="48" y="30" width="10" height="8" className={styles.faint} />
      <rect x="66" y="30" width="10" height="8" className={styles.faint} />
      <rect x="36" y="66" width="130" height="18" className={styles.solid} />
      <rect x="36" y="94" width="96" height="10" className={styles.faint} />
      <rect x="36" y="112" width="112" height="10" className={styles.faint} />
      <rect x="36" y="140" width="72" height="24" className={styles.solid} />
      <rect x="192" y="66" width="98" height="98" className={styles.line} />
      <path d="M192 132 L232 100 L262 130 L290 108" className={styles.wire} />
    </g>
  );
}

function Commerce() {
  return (
    <g>
      {[0, 1, 2].map((col) =>
        [0, 1].map((row) => (
          <rect
            key={`${col}-${row}`}
            x={18 + col * 78}
            y={20 + row * 76}
            width="62"
            height="62"
            className={col === 1 && row === 0 ? styles.solid : styles.line}
          />
        ))
      )}
      <rect x="252" y="20" width="50" height="50" className={styles.line} />
      <path d="M262 36 H292 L288 60 H266 Z" className={styles.wire} />
      <rect x="252" y="96" width="50" height="14" className={styles.solid} />
      <rect x="252" y="120" width="34" height="8" className={styles.faint} />
      <rect x="252" y="136" width="42" height="8" className={styles.faint} />
      <rect x="252" y="158" width="50" height="24" className={styles.solid} />
    </g>
  );
}

function Automation() {
  return (
    <g>
      <rect x="18" y="82" width="64" height="36" className={styles.solid} />
      <rect x="132" y="26" width="64" height="36" className={styles.line} />
      <rect x="132" y="82" width="64" height="36" className={styles.line} />
      <rect x="132" y="138" width="64" height="36" className={styles.line} />
      <rect x="246" y="82" width="56" height="36" className={styles.solid} />
      <path d="M82 100 H108 V44 H132" className={styles.wire} />
      <path d="M108 100 H132" className={styles.wire} />
      <path d="M108 100 V156 H132" className={styles.wire} />
      <path d="M196 44 H222 V100 H246" className={styles.wire} />
      <path d="M196 100 H246" className={styles.wire} />
      <path d="M196 156 H222 V100" className={styles.wire} />
      <circle cx="108" cy="100" r="5" className={styles.dot} />
      <circle cx="222" cy="100" r="5" className={styles.dot} />
    </g>
  );
}

function Audit() {
  return (
    <g>
      <rect x="18" y="30" width="180" height="30" className={styles.line} />
      <rect x="18" y="72" width="180" height="30" className={styles.solid} />
      <rect x="18" y="114" width="180" height="30" className={styles.line} />
      <rect x="18" y="156" width="180" height="26" className={styles.line} />
      <path d="M30 42 H84" className={styles.wire} />
      <path d="M30 126 H110" className={styles.wire} />
      <path d="M30 167 H68" className={styles.wire} />
      <circle cx="252" cy="78" r="42" className={styles.line} />
      <path d="M283 109 L302 150" className={styles.thick} />
      <path d="M234 78 L247 92 L272 62" className={styles.check} />
    </g>
  );
}

const DRAWINGS = {
  custom: Custom,
  web: Web,
  commerce: Commerce,
  automation: Automation,
  audit: Audit,
};

export function ServiceSchematic({ variant }) {
  const Drawing = DRAWINGS[variant];
  if (!Drawing) return null;

  return (
    <svg viewBox={VIEW} className={styles.svg} aria-hidden="true" focusable="false">
      <Drawing />
    </svg>
  );
}
