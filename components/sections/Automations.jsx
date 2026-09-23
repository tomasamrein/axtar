"use client";
import { Fragment, useState } from "react";
import { Tabs as TabsPrimitive } from "radix-ui";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  Bell,
  Box,
  BrainCircuit,
  CalendarCheck,
  Camera,
  ChartColumn,
  CircleCheck,
  Clock,
  FileText,
  Files,
  Mail,
  MessagesSquare,
  MousePointerClick,
  ReceiptText,
  RefreshCw,
  ShoppingCart,
  Sheet,
  Star,
  UserRound,
} from "lucide-react";
import { SiMercadopago, SiWhatsapp } from "react-icons/si";
import { SpotlightButton } from "@/components/ui/SpotlightButton";
import { AUTOMATIONS, AUTOMATION_GROUPS } from "@/lib/automations";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import styles from "./Automations.module.css";

const ICONS = {
  whatsapp: SiWhatsapp,
  mercadopago: SiMercadopago,
  brain: BrainCircuit,
  calendar: CalendarCheck,
  user: UserRound,
  click: MousePointerClick,
  check: CircleCheck,
  clock: Clock,
  bell: Bell,
  star: Star,
  invoice: ReceiptText,
  mail: Mail,
  sheet: Sheet,
  camera: Camera,
  form: FileText,
  cart: ShoppingCart,
  box: Box,
  refresh: RefreshCw,
  chart: ChartColumn,
  docs: Files,
  chat: MessagesSquare,
};

export function Automations() {
  const [active, setActive] = useState(AUTOMATIONS[0].id);
  const reduce = useReducedMotion();

  return (
    <section id="automatizaciones" className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <h2 className="display">Lo que hoy hacés a mano, mañana se hace solo.</h2>
          <p className="lead">
            Automatizaciones con IA que ya podemos poner a trabajar en tu negocio. Elegí una y mirá cómo funciona, paso a paso.
          </p>
        </header>

        <TabsPrimitive.Root value={active} onValueChange={setActive} orientation="vertical" className={styles.layout}>
          <TabsPrimitive.List className={styles.list} aria-label="Automatizaciones disponibles">
            {AUTOMATION_GROUPS.map((g) => (
              <Fragment key={g.id}>
                <p className={styles.group} aria-hidden="true">
                  {g.label}
                </p>
                {AUTOMATIONS.filter((a) => a.group === g.id).map((a) => (
                  <TabsPrimitive.Trigger key={a.id} value={a.id} className={styles.trigger}>
                    {active === a.id && (
                      <motion.span
                        layoutId="automation-pill"
                        className={styles.pill}
                        transition={reduce ? { duration: 0 } : { type: "spring", duration: 0.4, bounce: 0.1 }}
                      />
                    )}
                    <span className={styles.triggerLabel}>{a.title}</span>
                  </TabsPrimitive.Trigger>
                ))}
              </Fragment>
            ))}
          </TabsPrimitive.List>

          <div className={styles.stage}>
            <AnimatePresence mode="wait" initial={false}>
              {AUTOMATIONS.filter((a) => a.id === active).map((a) => (
                <TabsPrimitive.Content key={a.id} value={a.id} forceMount asChild>
                  <motion.article
                    className={styles.panel}
                    initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={reduce ? { opacity: 0 } : { opacity: 0, y: -6, filter: "blur(4px)" }}
                    transition={{ duration: 0.26, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <p className={styles.kicker}>{AUTOMATION_GROUPS.find((g) => g.id === a.group).label}</p>
                    <h3 className={styles.title}>{a.title}</h3>
                    <p className={styles.summary}>{a.summary}</p>

                    <ol className={styles.flow} aria-label="Cómo funciona">
                      {a.flow.map((step, i) => {
                        const Icon = ICONS[step.icon];
                        return (
                          <li key={step.label} className={styles.node} style={{ "--i": i }}>
                            <span className={styles.nodeIcon} aria-hidden="true">
                              <Icon />
                            </span>
                            <span className={styles.nodeLabel}>{step.label}</span>
                          </li>
                        );
                      })}
                    </ol>

                    <p className={styles.example}>
                      <span>Ejemplo de uso</span>
                      {a.example}
                    </p>

                    <SpotlightButton
                      href={getWhatsAppUrl(`Hola Tomás, me interesa la automatización "${a.title}" para mi negocio.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="ghost"
                      arrow
                    >
                      Quiero esta automatización
                    </SpotlightButton>
                  </motion.article>
                </TabsPrimitive.Content>
              ))}
            </AnimatePresence>
          </div>
        </TabsPrimitive.Root>

        <p className={styles.more}>
          ¿Tenés otra tarea que se repite todos los días? Casi siempre se puede automatizar: contanos cuál y te decimos cómo.
        </p>
      </div>
    </section>
  );
}
