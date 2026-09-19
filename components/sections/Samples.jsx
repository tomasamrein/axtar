import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./Samples.module.css";

const SAMPLES = [
  {
    slug: "navaja-style",
    href: "/muestras/navaja-style",
    src: "/muestras/navaja-style.jpg",
    title: "Navaja Style",
    kind: "Barbería",
    description: "Reserva de turnos en vivo, precios sin sorpresas y una galería de trabajos que vende el oficio a primera vista.",
    live: true,
  },
  {
    slug: "veterinaria",
    src: "/muestras/veterinaria.jpg",
    title: "Huella Norte",
    kind: "Clínica veterinaria",
    description: "Turnos online, urgencias visibles desde el primer viewport y las prestaciones al alcance de un scroll.",
  },
  {
    slug: "cafe",
    src: "/muestras/cafe.jpg",
    title: "Café Raíz",
    kind: "Tienda online",
    description: "Catálogo de café de especialidad con suscripción, notas de cata y la fecha de tostado como argumento de venta.",
  },
  {
    slug: "contable",
    src: "/muestras/contable.jpg",
    title: "Ledesma & Asociados",
    kind: "Estudio contable",
    description: "Servicios claros, contador asignado y una consulta inicial como puerta de entrada, sin jerga contable.",
  },
];

export function Samples() {
  return (
    <section id="muestras" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.heading}>Muestras</h2>
        <p className={styles.lead}>
          Demos propias del estudio para mostrar cómo trabajo. Todavía no son proyectos de clientes: los casos reales van a ocupar este lugar cuando estén listos.
        </p>

        <Reveal as="ul" className={styles.grid} stagger>
          {SAMPLES.map((sample) => (
            <li key={sample.slug} className={styles.item}>
              <div className={styles.frame}>
                {(() => {
                  const shot = (
                    <Image
                      src={sample.src}
                      alt={`Landing de muestra para ${sample.title}, ${sample.kind.toLowerCase()}`}
                      width={1440}
                      height={900}
                      sizes="(max-width: 900px) 92vw, 33vw"
                      className={styles.shot}
                    />
                  );
                  return sample.href ? (
                    <Link
                      href={sample.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Abrir demo en vivo de ${sample.title}`}
                    >
                      {shot}
                    </Link>
                  ) : (
                    shot
                  );
                })()}
              </div>
              <div className={styles.meta}>
                <span className={styles.tag}>{sample.live ? "Demo en vivo" : "Demo"}</span>
                <h3 className={styles.title}>{sample.title}</h3>
                <p className={styles.kind}>{sample.kind}</p>
                <p className={styles.description}>{sample.description}</p>
              </div>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
