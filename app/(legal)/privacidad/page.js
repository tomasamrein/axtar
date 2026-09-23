import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { LEGAL_UPDATED } from "@/lib/legal";
import styles from "../legal.module.css";

export const metadata = {
  title: "Política de privacidad | Axtar Studio",
  description: "Qué datos personales trata Axtar Studio, para qué, y cómo ejercer tus derechos.",
  alternates: { canonical: "/privacidad" },
};

export default function PrivacidadPage() {
  const contactUrl = getWhatsAppUrl("Hola Tomás, quiero hacer una consulta sobre mis datos personales.");

  return (
    <>
      <h1>Política de privacidad</h1>
      <p className={styles.updated}>Última actualización: {LEGAL_UPDATED}</p>

      <p>
        En Axtar Studio cuidamos tus datos personales y los tratamos conforme a la Ley 25.326 de Protección de los Datos
        Personales y su normativa complementaria. Acá te contamos, en lenguaje simple, qué datos usamos, para qué y qué
        derechos tenés.
      </p>

      <h2>1. Responsable</h2>
      <p>
        El responsable del tratamiento es Tomás Amrein, titular de Axtar Studio, con domicilio en Santo Tomé, Santa Fe,
        Argentina. Podés contactarnos por <a href={contactUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>.
      </p>

      <h2>2. Qué datos tratamos</h2>
      <ul>
        <li>
          <strong>Los que vos nos das al escribirnos:</strong> tu nombre, tu número de teléfono y la información sobre tu
          negocio o proyecto que decidas compartir en la conversación.
        </li>
        <li>
          <strong>Datos de clientes:</strong> si contratás un servicio, los datos necesarios para la propuesta, la facturación
          y la ejecución del proyecto (por ejemplo, razón social, CUIT, domicilio y datos de contacto).
        </li>
        <li>
          <strong>Datos técnicos de navegación:</strong> nuestro proveedor de hosting registra de forma automática datos como
          la dirección IP, el tipo de navegador y la fecha y hora de acceso, con fines de seguridad y funcionamiento del sitio.
        </li>
      </ul>
      <p>
        El sitio no tiene formularios, no pide registro, no usa herramientas de analítica ni publicidad y no instala cookies
        de seguimiento. Más detalles en la <Link href="/cookies">Política de cookies</Link>.
      </p>

      <h2>3. Para qué los usamos</h2>
      <ul>
        <li>Responder tus consultas y preparar una propuesta.</li>
        <li>Ejecutar el proyecto contratado, darte soporte y facturar.</li>
        <li>Cumplir obligaciones legales, contables e impositivas.</li>
        <li>Mantener el sitio seguro y funcionando.</li>
      </ul>
      <p>
        No vendemos, alquilamos ni cedemos tus datos a terceros con fines comerciales, y no te vamos a enviar publicidad
        sin tu consentimiento.
      </p>

      <h2>4. Base del tratamiento</h2>
      <p>
        Tratamos tus datos con tu consentimiento, que prestás al escribirnos, y porque son necesarios para la relación
        precontractual o contractual que iniciás con nosotros, o para cumplir una obligación legal.
      </p>

      <h2>5. Con quién los compartimos</h2>
      <p>Para funcionar usamos algunos proveedores que pueden acceder a datos en la medida necesaria:</p>
      <ul>
        <li>
          <strong>WhatsApp (Meta Platforms):</strong> el canal por el que nos contactás. Los mensajes quedan sujetos también a
          la política de privacidad de WhatsApp.
        </li>
        <li>
          <strong>Vercel Inc.:</strong> el proveedor de hosting del sitio, que procesa los datos técnicos de navegación.
        </li>
        <li>
          <strong>Proveedores de los proyectos:</strong> si el servicio que contratás lo requiere (hosting, base de datos,
          pasarelas de pago, modelos de inteligencia artificial), te informamos cuáles se usan en la propuesta.
        </li>
      </ul>
      <p>
        Algunos de estos proveedores están fuera de Argentina, principalmente en Estados Unidos, por lo que puede haber una
        transferencia internacional de datos. Elegimos proveedores que aplican medidas de seguridad adecuadas.
      </p>

      <h2>6. Cuando trabajamos con los datos de tus clientes</h2>
      <p>
        Si desarrollamos un sistema o una automatización que maneja datos de tus clientes o empleados, vos sos el responsable
        de esos datos y Axtar Studio actúa como encargado del tratamiento: los usamos solo para prestar el servicio, siguiendo
        tus instrucciones, y no los usamos para ningún otro fin.
      </p>

      <h2>7. Cuánto tiempo los guardamos</h2>
      <p>
        Guardamos las conversaciones de consulta mientras sean útiles para responderte o retomar el contacto. Los datos de
        clientes se conservan mientras dure la relación y, después, durante los plazos que exigen las normas contables e
        impositivas. Los registros técnicos del hosting se eliminan de forma periódica según los plazos del proveedor.
      </p>

      <h2>8. Tus derechos</h2>
      <p>
        Podés pedirnos en cualquier momento acceder a tus datos, rectificarlos, actualizarlos o suprimirlos, y retirar tu
        consentimiento. Para hacerlo, escribinos por <a href={contactUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        {" "}indicando qué querés hacer. Te respondemos dentro de los plazos legales: 10 días corridos para el acceso y 5 días
        hábiles para la rectificación, actualización o supresión.
      </p>
      <p className={styles.notice}>
        El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a
        intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto conforme lo establecido en
        el artículo 14, inciso 3 de la Ley N° 25.326. La AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA, en su carácter de Órgano
        de Control de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que interpongan quienes
        resulten afectados en sus derechos por incumplimiento de las normas vigentes en materia de protección de datos
        personales.
      </p>

      <h2>9. Seguridad</h2>
      <p>
        Aplicamos medidas técnicas y organizativas razonables para proteger tus datos contra accesos no autorizados, pérdida
        o alteración. Ningún sistema es infalible, pero si ocurriera un incidente que afecte tus datos, te vamos a avisar.
      </p>

      <h2>10. Menores de edad</h2>
      <p>
        Nuestros servicios están dirigidos a negocios y personas mayores de edad. No recopilamos a sabiendas datos de menores
        de 18 años.
      </p>

      <h2>11. Cambios en esta política</h2>
      <p>
        Si cambiamos cómo tratamos tus datos, actualizamos esta página y su fecha. Si el cambio es importante, te lo vamos a
        comunicar.
      </p>
    </>
  );
}
