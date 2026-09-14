import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { RotatingWord } from "@/components/ui/RotatingWord";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import styles from "./Hero.module.css";

const ROTATING_WORDS = ["business", "venture", "store", "company"];

export function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.decor} aria-hidden="true">
        <span className={styles.decorShapeBack} />
        <span className={styles.decorShapeFront} />
      </div>
      <div className={`container ${styles.inner}`}>
        <Badge tone="outline">Desarrollo de software a medida</Badge>
        <h1 className={styles.headline}>
          The technology behind
          <br />
          the growth of your <RotatingWord words={ROTATING_WORDS} />.
        </h1>
        <p className={styles.subhead}>
          Diseñamos, desarrollamos y automatizamos productos digitales para negocios que necesitan algo que funcione, no una promesa genérica.
        </p>
        <div className={styles.actions}>
          <Button href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
            Empecemos tu proyecto
          </Button>
          <Button variant="secondary" href="#servicios">
            Ver qué hacemos
          </Button>
        </div>
      </div>
    </section>
  );
}
