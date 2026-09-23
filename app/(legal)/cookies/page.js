import Link from "next/link";
import { LEGAL_UPDATED } from "@/lib/legal";
import styles from "../legal.module.css";

export const metadata = {
  title: "Política de cookies | Axtar Studio",
  description: "Axtar Studio no usa cookies de seguimiento, analítica ni publicidad. Qué significa y cómo gestionarlas.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <>
      <h1>Política de cookies</h1>
      <p className={styles.updated}>Última actualización: {LEGAL_UPDATED}</p>

      <p className={styles.notice}>
        <strong>En corto:</strong> este sitio no usa cookies de seguimiento, analítica ni publicidad. Por eso no te mostramos
        un cartel para aceptarlas.
      </p>

      <h2>1. Qué son las cookies</h2>
      <p>
        Las cookies son pequeños archivos que un sitio guarda en tu navegador para recordar información sobre tu visita,
        como tus preferencias o qué páginas viste. Algunas son necesarias para que un sitio funcione y otras se usan para
        medir el tráfico o mostrar publicidad.
      </p>

      <h2>2. Qué cookies usa este sitio</h2>
      <p>
        Ninguna. El sitio de Axtar Studio no instala cookies propias ni de terceros: no usamos Google Analytics, píxeles de
        redes sociales ni herramientas de publicidad, y las tipografías se sirven desde nuestro propio dominio, sin
        conexiones a servicios externos.
      </p>

      <h2>3. Sitios de terceros</h2>
      <p>
        Cuando tocás un enlace externo, por ejemplo el botón para escribirnos por WhatsApp o el acceso a un proyecto
        publicado en otro dominio, salís de nuestro sitio. Esos servicios pueden usar sus propias cookies, que se rigen por
        sus políticas y no dependen de nosotros.
      </p>

      <h2>4. Cómo gestionar las cookies</h2>
      <p>
        Podés ver, bloquear o borrar las cookies desde la configuración de tu navegador (Chrome, Safari, Firefox, Edge u
        otro). Como este sitio no las usa, bloquearlas no afecta su funcionamiento.
      </p>

      <h2>5. Cambios</h2>
      <p>
        Si en el futuro sumamos alguna herramienta que use cookies no esenciales, vamos a actualizar esta política y a
        pedirte tu consentimiento antes de activarlas.
      </p>
      <p>
        Para saber cómo tratamos tus datos personales, leé la <Link href="/privacidad">Política de privacidad</Link>.
      </p>
    </>
  );
}
