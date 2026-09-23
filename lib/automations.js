// Catálogo de automatizaciones que ofrece Axtar. Son capacidades, no casos de clientes:
// cada "ejemplo" es un uso posible y así se presenta en la página.

export const AUTOMATION_GROUPS = [
  { id: "vender", label: "Vender y atender" },
  { id: "administrar", label: "Administrar" },
  { id: "decidir", label: "Controlar y decidir" },
];

export const AUTOMATIONS = [
  {
    id: "agentes",
    group: "vender",
    title: "Agentes de IA en WhatsApp y redes",
    summary: "Responden consultas, pasan precios y stock, toman pedidos y agendan, las 24 horas. Si la charla se complica, avisan a una persona.",
    example: "Una inmobiliaria responde a la noche las consultas por cada propiedad y agenda visitas sin que nadie esté conectado.",
    flow: [
      { icon: "whatsapp", label: "Llega un mensaje" },
      { icon: "brain", label: "La IA entiende qué necesita" },
      { icon: "calendar", label: "Responde o agenda" },
      { icon: "user", label: "Deriva a tu equipo si hace falta" },
    ],
  },
  {
    id: "turnos",
    group: "vender",
    title: "Turnos y recordatorios automáticos",
    summary: "Reservas online conectadas a tu agenda, recordatorio antes del turno y reprogramación en un toque. Menos ausencias, cero llamadas.",
    example: "Un consultorio manda el recordatorio 24 horas antes y libera el horario si el paciente no confirma.",
    flow: [
      { icon: "click", label: "El cliente reserva" },
      { icon: "calendar", label: "Se agenda en Google Calendar" },
      { icon: "whatsapp", label: "Recordatorio por WhatsApp" },
      { icon: "check", label: "Confirma o reprograma" },
    ],
  },
  {
    id: "cobranzas",
    group: "vender",
    title: "Cobranzas sin perseguir a nadie",
    summary: "Links de pago de Mercado Pago, avisos de vencimiento y recordatorios escalonados solo a quien no pagó. Cada pago se marca solo.",
    example: "Un gimnasio envía el link de la cuota el día 1 y el día 5 le recuerda solo a quien todavía debe.",
    flow: [
      { icon: "clock", label: "Vence la cuota" },
      { icon: "mercadopago", label: "Link de pago" },
      { icon: "bell", label: "Recordatorio si no paga" },
      { icon: "check", label: "Pago acreditado y registrado" },
    ],
  },
  {
    id: "postventa",
    group: "vender",
    title: "Seguimiento y reseñas en Google",
    summary: "Seguimiento de presupuestos que quedaron sin respuesta y, después de cada venta, un mensaje que pide la reseña en Google.",
    example: "Un taller manda un agradecimiento al entregar el auto y el link para dejar la reseña. Si hay una queja, te avisa a vos primero.",
    flow: [
      { icon: "check", label: "Trabajo entregado" },
      { icon: "whatsapp", label: "Mensaje de agradecimiento" },
      { icon: "star", label: "Pedido de reseña" },
      { icon: "bell", label: "Alerta si hay una queja" },
    ],
  },
  {
    id: "arca",
    group: "administrar",
    title: "Facturación electrónica ARCA automática",
    summary: "Cada venta cobrada genera su factura en ARCA y le llega al cliente por mail o WhatsApp. Sin cargar comprobante por comprobante.",
    example: "Un comercio que cobra con Mercado Pago deja de facturar a mano al final del día: las facturas salen solas.",
    flow: [
      { icon: "mercadopago", label: "Pago aprobado" },
      { icon: "invoice", label: "Factura en ARCA" },
      { icon: "mail", label: "PDF al cliente" },
      { icon: "sheet", label: "Queda en tu planilla" },
    ],
  },
  {
    id: "comprobantes",
    group: "administrar",
    title: "Carga de comprobantes con IA",
    summary: "Sacás una foto a la factura del proveedor o reenviás el PDF, y la IA lee los datos y los carga en tu sistema o planilla.",
    example: "Un taller fotografía la factura de repuestos y el gasto queda cargado con proveedor, fecha e importe.",
    flow: [
      { icon: "camera", label: "Foto o PDF" },
      { icon: "brain", label: "La IA extrae los datos" },
      { icon: "check", label: "Validación" },
      { icon: "sheet", label: "Cargado en el sistema" },
    ],
  },
  {
    id: "flujos",
    group: "administrar",
    title: "Flujos que conectan tus herramientas",
    summary: "Formularios, planillas, mail, WhatsApp y tu sistema hablando entre sí con flujos automáticos (n8n). Se acabó el copiar y pegar.",
    example: "Cada consulta de la web entra a la planilla de ventas, se asigna a un vendedor y el cliente recibe respuesta al instante.",
    flow: [
      { icon: "form", label: "Consulta en la web" },
      { icon: "sheet", label: "Se registra en la planilla" },
      { icon: "user", label: "Se asigna un vendedor" },
      { icon: "mail", label: "Respuesta automática" },
    ],
  },
  {
    id: "stock",
    group: "administrar",
    title: "Stock sincronizado en todos tus canales",
    summary: "Vendés en el local, en tu tienda y en Mercado Libre, y el stock se actualiza en todos lados a la vez. Te avisa cuándo reponer.",
    example: "Una tienda de indumentaria deja de vender talles que ya no tiene en ningún canal.",
    flow: [
      { icon: "cart", label: "Venta en cualquier canal" },
      { icon: "box", label: "Descuenta el stock" },
      { icon: "refresh", label: "Actualiza todos los canales" },
      { icon: "bell", label: "Aviso de reposición" },
    ],
  },
  {
    id: "reportes",
    group: "decidir",
    title: "Reportes que llegan solos",
    summary: "Cada noche o cada semana, un resumen de ventas, caja, gastos y stock bajo por WhatsApp o mail. Los números sin abrir una planilla.",
    example: "El dueño de una distribuidora recibe a las 21 h cómo cerró el día y qué productos hay que pedir.",
    flow: [
      { icon: "clock", label: "Cierre del día" },
      { icon: "chart", label: "Calcula ventas y caja" },
      { icon: "bell", label: "Detecta stock bajo" },
      { icon: "whatsapp", label: "Resumen a tu WhatsApp" },
    ],
  },
  {
    id: "ia-propia",
    group: "decidir",
    title: "IA entrenada con tu negocio",
    summary: "Un asistente que conoce tus precios, procesos y manuales. Tu equipo le pregunta y responde con la información de tu empresa, no de internet.",
    example: "Un estudio contable consulta sus procedimientos internos y la normativa vigente en segundos, con la fuente citada.",
    flow: [
      { icon: "docs", label: "Tus documentos" },
      { icon: "brain", label: "Base de conocimiento" },
      { icon: "chat", label: "Tu equipo pregunta" },
      { icon: "check", label: "Respuesta con la fuente" },
    ],
  },
];
