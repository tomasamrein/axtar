import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { LEGAL_UPDATED } from "@/lib/legal";
import styles from "../legal.module.css";

export const metadata = {
  title: "Términos y condiciones | Axtar Studio",
  description: "Condiciones de uso del sitio de Axtar Studio y de la contratación de sus servicios.",
  alternates: { canonical: "/terminos" },
};

export default function TerminosPage() {
  return (
    <>
      <h1>Términos y condiciones</h1>
      <p className={styles.updated}>Última actualización: {LEGAL_UPDATED}</p>

      <p>
        Estos términos regulan el uso de este sitio web y la contratación de los servicios de <strong>Axtar Studio</strong>,
        estudio de desarrollo de software a cargo de Tomás Amrein, con domicilio en Santo Tomé, Santa Fe, Argentina
        (en adelante, &quot;Axtar Studio&quot;, &quot;nosotros&quot;). Al navegar el sitio aceptás estos términos. Si no estás de
        acuerdo con ellos, te pedimos que no uses el sitio.
      </p>

      <h2>1. Qué es este sitio</h2>
      <p>
        El sitio es informativo: presenta los servicios de Axtar Studio (sitios web, sistemas a medida, e-commerce,
        automatizaciones e integración de inteligencia artificial) y muestra proyectos realizados. En el sitio no se
        venden productos ni se cobran servicios: la contratación ocurre siempre por fuera, a partir de una propuesta escrita.
      </p>

      <h2>2. Cómo se contratan los servicios</h2>
      <ul>
        <li>El contacto inicial se hace por WhatsApp. Esa conversación no genera ninguna obligación para ninguna de las partes.</li>
        <li>
          Antes de empezar un proyecto enviamos una <strong>propuesta escrita</strong> con el alcance, los entregables, los plazos,
          el precio y la forma de pago. El trabajo comienza cuando aceptás la propuesta.
        </li>
        <li>
          Si algo de la propuesta aceptada difiere de estos términos, prevalece la propuesta, salvo en lo que afecte derechos que
          la ley de defensa del consumidor te reconoce y que no pueden dejarse de lado.
        </li>
        <li>Los cambios de alcance durante el proyecto se acuerdan por escrito y pueden modificar el precio y los plazos.</li>
      </ul>

      <h2>3. Precios</h2>
      <p>
        Los precios que se muestran en el sitio están expresados en pesos argentinos, son valores de referencia
        (&quot;desde&quot;) e incluyen el alcance básico de cada servicio. El precio final depende de lo que necesite cada proyecto
        y queda fijado en la propuesta. Los valores publicados pueden actualizarse sin aviso previo, pero nunca afectan una
        propuesta ya aceptada.
      </p>

      <h2>4. Derecho de revocación</h2>
      <p>
        Si sos consumidor en los términos de la Ley 24.240 y contrataste a distancia, tenés derecho a revocar la aceptación
        dentro de los 10 días corridos desde que aceptaste la propuesta, sin costo ni necesidad de explicar el motivo.
        Para hacerlo alcanza con avisarnos por el mismo medio por el que contrataste. Si ya se había abonado algún importe,
        se devuelve completo.
      </p>

      <h2>5. Propiedad intelectual</h2>
      <ul>
        <li>
          Los textos, el diseño, el logo y el código de este sitio pertenecen a Axtar Studio. No podés copiarlos ni reutilizarlos
          sin autorización escrita.
        </li>
        <li>
          Los proyectos que mostramos pertenecen a sus respectivos titulares y se exhiben como muestra de trabajo. Las marcas
          de terceros que aparecen (por ejemplo, WhatsApp, Mercado Pago o Tienda Nube) pertenecen a sus dueños y se mencionan
          solo para indicar con qué herramientas trabajamos.
        </li>
        <li>
          La titularidad y la licencia de lo que desarrollamos para vos (código, diseños, contenidos) se definen en cada
          propuesta. Salvo que se acuerde otra cosa, los derechos sobre lo entregado se transfieren al cliente una vez
          cancelado el pago total.
        </li>
      </ul>

      <h2>6. Servicios y herramientas de terceros</h2>
      <p>
        Muchos proyectos se apoyan en servicios de terceros (hosting, dominios, pasarelas de pago, plataformas de e-commerce,
        APIs de mensajería o modelos de inteligencia artificial). Esos servicios tienen sus propios términos, precios y
        disponibilidad, que no controlamos. Te avisamos en la propuesta cuáles se usan y qué costos tienen por separado.
      </p>

      <h2>7. Uso de inteligencia artificial</h2>
      <p>
        Las automatizaciones y asistentes con inteligencia artificial pueden cometer errores. Los configuramos y probamos para
        tu caso, pero recomendamos que las decisiones importantes (cobros, respuestas sensibles, información legal o médica)
        tengan supervisión humana.
      </p>

      <h2>8. Responsabilidad</h2>
      <p>
        Hacemos lo posible para que el sitio esté disponible y la información sea correcta, pero puede haber interrupciones o
        datos desactualizados. En lo que la ley permita, Axtar Studio no responde por daños derivados del uso del sitio o de
        sitios de terceros enlazados desde él. La responsabilidad por los servicios contratados se rige por la propuesta
        aceptada y por la normativa aplicable.
      </p>

      <h2>9. Datos personales</h2>
      <p>
        El tratamiento de tus datos se explica en la <Link href="/privacidad">Política de privacidad</Link> y el uso de
        cookies en la <Link href="/cookies">Política de cookies</Link>.
      </p>

      <h2>10. Cambios en estos términos</h2>
      <p>
        Podemos actualizar estos términos. La versión vigente es la publicada en esta página, con su fecha de actualización.
        Los cambios no afectan los proyectos ya contratados.
      </p>

      <h2>11. Ley aplicable y jurisdicción</h2>
      <p>
        Estos términos se rigen por las leyes de la República Argentina. Ante cualquier conflicto, y sin perjuicio de los
        derechos que la normativa de defensa del consumidor te reconoce, intervienen los tribunales ordinarios de la ciudad
        de Santa Fe, provincia de Santa Fe.
      </p>

      <h2>12. Contacto</h2>
      <p>
        Por cualquier consulta sobre estos términos, escribinos por{" "}
        <a href={getWhatsAppUrl("Hola Tomás, tengo una consulta sobre los términos y condiciones.")} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
        .
      </p>
    </>
  );
}
