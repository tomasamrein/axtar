// Contenido de proyectos, verificado contra cada repositorio (2026-09).
// Estudio Ferreyra y Estudio Verde son demos del estudio, no clientes: se muestran como tales.

export const WEBSITES = [
  {
    slug: "estudio-ferreyra",
    name: "Ferreyra & Asociados",
    kind: "Estudio contable, Córdoba",
    label: "Demo del estudio",
    image: "/proyectos/estudio-ferreyra.jpg",
    url: "https://estudio-ferreyra-seven.vercel.app",
    summary:
      "Un estudio contable que explica sin jerga: servicios claros, el equipo a la vista y la consulta por WhatsApp a un toque.",
    highlights: ["Portada con fotos que rotan", "Preparado para aparecer en Google", "Contacto directo por WhatsApp"],
  },
  {
    slug: "estudio-verde",
    name: "Estudio Verde",
    kind: "Arquitectura y paisajismo, Rosario",
    label: "Demo del estudio",
    image: "/proyectos/estudio-verde.jpg",
    url: "https://estudio-verde-jade.vercel.app",
    summary:
      "Fotografía a pantalla completa y un recorrido por proyectos que vende el espacio antes que las palabras.",
    highlights: ["Dirección de arte propia", "Galería de proyectos", "Consultas con cita previa"],
  },
  {
    slug: "navaja-style",
    name: "Navaja Style",
    kind: "Barbería, Palermo",
    label: "Demo del estudio",
    image: "/proyectos/navaja-style.jpg",
    url: "https://navaja-style.vercel.app",
    summary:
      "Una barbería con personalidad propia: precios claros, trabajos filtrables y el turno armado por WhatsApp con el servicio y el barbero que elegiste.",
    highlights: ["Reserva por WhatsApp en un toque", "Precios y trabajos a la vista", "Elegís con qué barbero atenderte"],
  },
  {
    slug: "wallss",
    name: "Walls Barber",
    kind: "Barbería",
    label: "Cliente",
    image: "/proyectos/wallss.jpg",
    url: null,
    summary:
      "Más que un sitio: los clientes reservan su turno solos, reciben un recordatorio por WhatsApp y el dueño maneja todo desde su propio panel.",
    highlights: ["Reserva de turnos 24/7", "Recordatorios por WhatsApp", "Panel con turnos y ganancias"],
  },
];

export const FEATURED_PRODUCT = {
  slug: "chatcore",
  name: "Chatcore",
  status: "En lanzamiento",
  tagline: "Tu WhatsApp atiende, vende y agenda las 24 horas.",
  url: "https://chatcore-plum.vercel.app",
  description:
    "Agentes de IA que responden en WhatsApp, Instagram y Messenger, detectan quién está listo para comprar y agendan turnos solos. Alguien de tu equipo puede tomar la conversación cuando quiera.",
  audience: ["Consultorios odontológicos", "Clínicas", "Barberías", "Talleres mecánicos", "Inmobiliarias"],
  day: "Un cliente escribe a las 23 h pidiendo turno. El agente responde, ofrece horarios, lo agenda y le manda el recordatorio.",
  features: [
    "Agente entrenado con la información de tu negocio",
    "Bandeja unificada con traspaso a una persona",
    "Cada contacto clasificado según qué tan cerca está de comprar",
    "Turnos y recordatorios automáticos",
    "Campañas por WhatsApp",
    "Métricas para ver qué tan bien atiende el agente",
  ],
  integrations: ["WhatsApp", "Instagram", "Messenger", "Google Calendar", "Gmail", "Mercado Pago"],
  screens: [
    { id: "inbox", label: "Bandeja", path: "/app/inbox", image: "/proyectos/chatcore-inbox.jpg", width: 1908, height: 907, alt: "Bandeja de Chatcore: conversación atendida por IA con turnos agendados en la ficha del cliente" },
    { id: "leads", label: "Leads", path: "/app/leads", image: "/proyectos/chatcore-leads.jpg", width: 1648, height: 527, alt: "Tabla de leads de Chatcore con canal, interés, temperatura y estado" },
    { id: "integraciones", label: "Integraciones", path: "/app/integrations", image: "/proyectos/chatcore-integraciones.jpg", width: 1647, height: 447, alt: "Integraciones de Chatcore: WhatsApp, Instagram, Google Calendar, Gmail, Mercado Pago y Messenger" },
  ],
};

// Proyectos propios completos que no salieron al mercado: se muestran con su landing, sin insinuar clientes.
export const OTHER_PRODUCTS = [
  {
    slug: "ventix",
    name: "Ventix",
    category: "Punto de venta y facturación",
    image: "/proyectos/ventix.jpg",
    url: "https://ventiapp.vercel.app",
    description:
      "Caja, stock, fiado y facturación electrónica ARCA en un solo sistema, que sigue vendiendo aunque se corte internet.",
    audience: "Kioscos, almacenes, drugstores y comercios minoristas",
  },
  {
    slug: "zonify",
    name: "Zonify",
    category: "Gestión para distribuidoras",
    image: "/proyectos/zonify.jpg",
    url: "https://zonify-seven.vercel.app",
    description:
      "Conecta preventistas, depósito y choferes en tiempo real: del pedido en la calle a la hoja de ruta, la entrega y la rendición de caja.",
    audience: "Distribuidoras mayoristas de bebidas, alimentos y limpieza",
  },
];

export const CASE_STUDY = {
  name: "Taller Gestión",
  client: "Taller mecánico",
  location: "Santa Fe",
  since: "Enero 2026",
  access: "Celular y computadora, desde el taller",
  images: {
    dashboard: { src: "/proyectos/taller-dashboard.jpg", width: 1906, height: 740, alt: "Panel de control del taller con autos entregados, caja y análisis financiero (montos ocultos)" },
    board: { src: "/proyectos/taller-tablero.jpg", width: 1270, height: 525, alt: "Tablero del taller con órdenes finalizadas y aviso por WhatsApp" },
    vehicles: { src: "/proyectos/taller-vehiculos.jpg", width: 1354, height: 520, alt: "Ficha de vehículos con fotos, kilometraje y último service" },
  },
  headline: "Un taller de Santa Fe que dejó el papel.",
  problem:
    "Órdenes, presupuestos, gastos y el historial de cada auto vivían en papeles y cálculos a mano. Armar un presupuesto llevaba tiempo y saber cuánto se ganaba en el mes, todavía más.",
  solution:
    "Un sistema a medida, pensado para usar desde el celular en el taller, que ordena el trabajo del día y automatiza lo que antes se hacía a mano.",
  features: [
    { icon: "board", title: "Tablero del taller", text: "Cada vehículo pasa de Pendiente a En progreso, Finalizado y Entregado." },
    { icon: "invoice", title: "Presupuestos y facturas en PDF", text: "Se generan con fotos del auto y se envían por WhatsApp en un toque." },
    { icon: "checklist", title: "Checklist de ingreso", text: "Luces, motor y frenos revisados, con fotos de entrada y salida." },
    { icon: "history", title: "Historial por vehículo", text: "Cada service queda registrado, con el kilometraje del próximo." },
    { icon: "calendar", title: "Agenda de turnos", text: "Un turno se convierte en orden de trabajo sin volver a cargar datos." },
    { icon: "stock", title: "Stock y proveedores", text: "Repuestos con alerta de stock mínimo." },
    { icon: "finance", title: "Gastos y balance mensual", text: "Mano de obra, repuestos y ganancia neta, calculados solos." },
    { icon: "roles", title: "Roles y auditoría", text: "Cada persona ve lo que le corresponde y todo queda registrado." },
  ],
};
