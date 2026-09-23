import {
  CalendarDays,
  ChartColumn,
  ClipboardCheck,
  FileText,
  History,
  Package,
  ShieldCheck,
  SquareKanban,
} from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { CASE_STUDY } from "@/lib/projects";
import styles from "./CaseStudy.module.css";

const ICONS = {
  board: SquareKanban,
  invoice: FileText,
  checklist: ClipboardCheck,
  history: History,
  calendar: CalendarDays,
  stock: Package,
  finance: ChartColumn,
  roles: ShieldCheck,
};

export function CaseStudy() {
  const c = CASE_STUDY;

  return (
    <section id="caso" className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <p className="eyebrow">Sistemas de gestión y automatizaciones</p>
          <h2 className={`display ${styles.headline}`}>{c.headline}</h2>
        </header>

        <figure className={styles.hero}>
          <div className={styles.frame}>
            <Image
              src={c.images.dashboard.src}
              alt={c.images.dashboard.alt}
              width={c.images.dashboard.width}
              height={c.images.dashboard.height}
              sizes="(max-width: 1240px) 94vw, 1180px"
              className={styles.shot}
            />
          </div>
          <figcaption className={styles.caption}>Capturas reales del sistema. Montos, nombres y patentes ocultos por privacidad.</figcaption>
        </figure>

        <div className={styles.layout}>
          <aside className={styles.facts} aria-label="Ficha del proyecto">
            <p className={styles.since}>
              <span className={styles.sinceLabel}>En uso todos los días desde</span>
              <span className={styles.sinceValue}>{c.since}</span>
            </p>
            <dl className={styles.list}>
              <div>
                <dt>Cliente</dt>
                <dd>{c.client}</dd>
              </div>
              <div>
                <dt>Ubicación</dt>
                <dd>{c.location}</dd>
              </div>
              <div>
                <dt>Proyecto</dt>
                <dd>Sistema de gestión a medida</dd>
              </div>
              <div>
                <dt>Se usa desde</dt>
                <dd>{c.access}</dd>
              </div>
            </dl>
          </aside>

          <div className={styles.story}>
            <div className={styles.chapters}>
              <div className={styles.chapter}>
                <h3 className={styles.chapterTitle}>El problema</h3>
                <p>{c.problem}</p>
              </div>
              <div className={styles.chapter}>
                <h3 className={styles.chapterTitle}>Qué construimos</h3>
                <p>{c.solution}</p>
              </div>
            </div>

            <div className={styles.pair}>
              {[c.images.board, c.images.vehicles].map((img) => (
                <div key={img.src} className={styles.frame}>
                  <Image src={img.src} alt={img.alt} width={img.width} height={img.height} sizes="(max-width: 1000px) 92vw, 780px" className={styles.shot} />
                </div>
              ))}
            </div>

            <Reveal as="ul" className={styles.features} stagger>
              {c.features.map((f) => {
                const Icon = ICONS[f.icon];
                return (
                  <li key={f.title} className={styles.feature}>
                    <span className={styles.icon} aria-hidden="true">
                      <Icon strokeWidth={1.5} />
                    </span>
                    <div>
                      <h4 className={styles.featureTitle}>{f.title}</h4>
                      <p className={styles.featureText}>{f.text}</p>
                    </div>
                  </li>
                );
              })}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
