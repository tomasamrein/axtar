"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";
import { SiWhatsapp, SiInstagram, SiMessenger, SiGooglecalendar, SiGmail, SiMercadopago } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/shadcn/tabs";
import { Reveal } from "@/components/ui/Reveal";
import { FEATURED_PRODUCT, OTHER_PRODUCTS } from "@/lib/projects";
import styles from "./Products.module.css";

const INTEGRATION_ICONS = {
  WhatsApp: SiWhatsapp,
  Instagram: SiInstagram,
  Messenger: SiMessenger,
  "Google Calendar": SiGooglecalendar,
  Gmail: SiGmail,
  "Mercado Pago": SiMercadopago,
};

export function Products() {
  const p = FEATURED_PRODUCT;
  const [screen, setScreen] = useState(p.screens[0].id);
  const reduce = useReducedMotion();

  return (
    <section id="productos" className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <h2 className="display">Sistemas completos que te ahorran horas y te traen más ventas.</h2>
          <p className="lead">
            Tenemos experiencia resolviendo flujos complejos: ventas, IA, turnos, pagos y facturación trabajando juntos, para que en el día a día todo se sienta simple. Tecnología de última generación para que tu negocio llegue con ventaja.
          </p>
        </header>

        <article className={styles.featured}>
          <div className={styles.featuredHead}>
            <div className={styles.copy}>
              <div className={styles.nameRow}>
                <h3 className={styles.name}>{p.name}</h3>
                {p.status && <span className={styles.status}>{p.status}</span>}
              </div>
              <p className={styles.tagline}>{p.tagline}</p>
              <p className={styles.description}>{p.description}</p>

              <div className={styles.block}>
                <p className={styles.label}>Conecta</p>
                <ul className={styles.integrations}>
                  {p.integrations.map((name) => {
                    const Icon = INTEGRATION_ICONS[name];
                    return (
                      <li key={name}>
                        <Icon aria-hidden="true" />
                        {name}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className={styles.block}>
                <p className={styles.label}>Pensado para</p>
                <ul className={styles.audience}>
                  {p.audience.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.aside}>
              <blockquote className={styles.day}>{p.day}</blockquote>
              <ul className={styles.features}>
                {p.features.map((f) => (
                  <li key={f}>
                    <Check strokeWidth={2} aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <a className={styles.visit} href={p.url} target="_blank" rel="noopener noreferrer">
                Conocer {p.name}
                <ArrowUpRight strokeWidth={1.75} aria-hidden="true" />
              </a>
            </div>
          </div>

          <Tabs value={screen} onValueChange={setScreen} className={styles.viewer}>
            <TabsList className={styles.list} aria-label={`Pantallas de ${p.name}`}>
              {p.screens.map((s) => (
                <TabsTrigger key={s.id} value={s.id} className={styles.trigger}>
                  {screen === s.id && (
                    <motion.span
                      layoutId="screen-pill"
                      className={styles.pill}
                      transition={reduce ? { duration: 0 } : { type: "spring", duration: 0.4, bounce: 0.12 }}
                    />
                  )}
                  <span className={styles.triggerLabel}>{s.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {p.screens.map((s, i) => (
              <TabsContent key={s.id} value={s.id} className={styles.screen}>
                <div className={styles.chrome} aria-hidden="true">
                  <span className={styles.dots}>
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className={styles.url}>chatcore-plum.vercel.app{s.path}</span>
                </div>
                <Image
                  src={s.image}
                  alt={s.alt}
                  width={s.width}
                  height={s.height}
                  sizes="(max-width: 1240px) 94vw, 1180px"
                  priority={i === 0}
                  className={styles.screenImg}
                />
              </TabsContent>
            ))}
          </Tabs>
        </article>

        <div className={styles.othersHead}>
          <h3 className={styles.othersTitle}>Más sistemas propios</h3>
          <p className={styles.othersLead}>Diseñados y desarrollados de punta a punta, cada uno con su propia landing.</p>
        </div>

        <Reveal as="ul" className={styles.others} stagger>
          {OTHER_PRODUCTS.map((o) => (
            <li key={o.slug} className={styles.other}>
              <a href={o.url} target="_blank" rel="noopener noreferrer" className={styles.otherLink}>
                <div className={styles.otherShot}>
                  <Image src={o.image} alt={`Landing de ${o.name}`} fill sizes="(max-width: 900px) 92vw, 45vw" className={styles.otherImg} />
                </div>
                <div className={styles.otherBody}>
                  <div className={styles.otherTop}>
                    <h4 className={styles.otherName}>{o.name}</h4>
                    <span className={styles.otherCat}>{o.category}</span>
                  </div>
                  <p className={styles.otherDesc}>{o.description}</p>
                  <p className={styles.otherFor}>
                    <span>Para</span> {o.audience}
                  </p>
                  <span className={styles.otherCta}>
                    Ver landing
                    <ArrowUpRight strokeWidth={1.75} aria-hidden="true" />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
