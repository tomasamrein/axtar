"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./NavajaStyleLanding.module.css";

const SERVICIOS = [
  { num: "/01", nombre: "Corte clásico", detalle: "Tijera y máquina, lavado y peinado final.", min: "40 min", precio: "$9.000" },
  { num: "/02", nombre: "Fade / degradé", detalle: "Degradé a máquina con perfilado a navaja.", min: "45 min", precio: "$11.000" },
  { num: "/03", nombre: "Corte + barba", detalle: "El combo completo con toalla caliente.", min: "70 min", precio: "$14.000" },
  { num: "/04", nombre: "Afeitado a navaja", detalle: "Espuma tibia, navaja y bálsamo post.", min: "35 min", precio: "$8.000" },
  { num: "/05", nombre: "Perfilado de barba", detalle: "Diseño de contorno y aceite nutritivo.", min: "25 min", precio: "$6.500" },
  { num: "/06", nombre: "Corte niño", detalle: "Hasta 12 años, con paciencia incluida.", min: "30 min", precio: "$7.500" },
];

const G = "?fm=jpg&q=85&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0";
const GALERIA = [
  { src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a" + G, alt: "Perfilado con navaja", col: "span 5", ratio: "4 / 3", tag: "Navaja / 001" },
  { src: "https://images.unsplash.com/photo-1647140655214-e4a2d914971f" + G, alt: "Corte a tijera", col: "span 4", ratio: "4 / 3", tag: "Tijera / 002" },
  { src: "https://images.unsplash.com/photo-1657105052497-f996284ffff8" + G, alt: "Corte con tijera de entresacar", col: "span 3", ratio: "3 / 4", tag: "Textura / 003" },
  { src: "https://images.unsplash.com/photo-1635273051839-003bf06a8751" + G, alt: "Detalle de degradé", col: "span 3", ratio: "3 / 4", tag: "Fade / 004" },
  { src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486" + G, alt: "Secado y peinado", col: "span 4", ratio: "4 / 3", tag: "Peinado / 005" },
  { src: "https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5" + G, alt: "Barbero trabajando", col: "span 5", ratio: "16 / 10", tag: "Oficio / 006" },
  { src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70" + G, alt: "Sillón de barbería", col: "span 7", ratio: "16 / 9", tag: "Local / 007" },
  { src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033" + G, alt: "Herramientas de barbería", col: "span 5", ratio: "16 / 9", tag: "Herramientas / 008" },
];

const HORARIOS = [
  { dia: "Lunes a viernes", hora: "09:00 — 20:00", accent: false },
  { dia: "Sábado", hora: "09:00 — 17:00", accent: false },
  { dia: "Domingo", hora: "Cerrado", accent: true },
];

const HORAS_TURNO = ["09:00", "10:00", "11:00", "12:00", "15:00", "16:00", "17:00", "18:00", "19:00"];

const MOTION_MULT = 1.35;

function runCount(el) {
  const target = parseFloat(el.dataset.count);
  const hasDecimal = String(el.dataset.count).includes(".");
  const duration = 1500 * MOTION_MULT;
  const start = performance.now();
  const tick = (t) => {
    const p = Math.min((t - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    const v = target * eased;
    el.textContent = hasDecimal ? v.toFixed(1) : Math.round(v).toLocaleString("es-AR");
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

export function NavajaStyleLanding({ fontClassName }) {
  const rootRef = useRef(null);
  const heroImgRef = useRef(null);
  const heroNumRef = useRef(null);

  const [form, setForm] = useState({
    nombre: "",
    tel: "",
    servicio: "Fade / degradé",
    fecha: "",
    hora: "10:00",
    nota: "",
  });
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const delay = Number(el.dataset.rvDelay || 0);
          el.style.transitionDelay = `${delay}ms`;
          el.style.opacity = "1";
          el.style.transform = "none";
          el.style.clipPath = "inset(0 0 0% 0)";
          io.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    let group = null;
    let i = 0;
    root.querySelectorAll("[data-rv]").forEach((el) => {
      const parent = el.parentElement;
      if (parent !== group) {
        group = parent;
        i = 0;
      }
      const delay = Math.min(i * 55 * MOTION_MULT, 380);
      i += 1;
      el.dataset.rvDelay = String(delay);
      el.style.opacity = "0";
      el.style.transform = `translateY(${30 * MOTION_MULT}px)`;
      el.style.clipPath = "inset(0 0 12% 0)";
      el.style.transition =
        `opacity ${(0.7 * MOTION_MULT).toFixed(2)}s cubic-bezier(.16,1,.3,1), ` +
        `transform ${(0.85 * MOTION_MULT).toFixed(2)}s cubic-bezier(.16,1,.3,1), ` +
        `clip-path ${(0.85 * MOTION_MULT).toFixed(2)}s cubic-bezier(.16,1,.3,1)`;
      el.style.willChange = "opacity, transform";
      io.observe(el);
    });

    const onScroll = () => {
      const y = window.scrollY;
      if (y > window.innerHeight * 1.25) return;
      if (heroImgRef.current) {
        heroImgRef.current.style.transform = `translateY(${(-y * 0.11 * MOTION_MULT).toFixed(1)}px) scale(1.02)`;
      }
      if (heroNumRef.current) {
        heroNumRef.current.style.transform = `translateY(${(y * 0.2 * MOTION_MULT).toFixed(1)}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const countObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          runCount(entry.target);
          countObs.unobserve(entry.target);
        });
      },
      { threshold: 0.4 }
    );
    root.querySelectorAll("[data-count]").forEach((el) => countObs.observe(el));

    return () => {
      io.disconnect();
      countObs.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function setField(key) {
    return (e) => setForm((f) => ({ ...f, [key]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEnviado(true);
  }

  function handleReset() {
    setEnviado(false);
    setForm((f) => ({ ...f, nombre: "", tel: "", nota: "" }));
  }

  const fechaTexto = form.fecha
    ? new Date(`${form.fecha}T00:00:00`).toLocaleDateString("es-AR", {
        weekday: "long",
        day: "numeric",
        month: "long",
      })
    : "el día elegido";

  const resumen =
    `${form.nombre ? form.nombre.split(" ")[0] : "Listo"}, te esperamos ${fechaTexto} a las ${form.hora} ` +
    `para ${form.servicio.toLowerCase()}. Te escribimos al ${form.tel || "WhatsApp"} para confirmar.`;

  return (
    <div ref={rootRef} className={`${styles.page} ${fontClassName}`}>
      <div className={styles.grain} />

      <nav className={styles.nav}>
        <a href="#top" className={styles.logo}>
          <span className={styles.logoDot} />
          <span className={styles.logoText}>Navaja Style</span>
        </a>
        <div className={styles.navLinks}>
          <span className={styles.navLinksMid} style={{ display: "contents" }}>
            <a href="#servicios" className={styles.navLink}>Servicios</a>
            <a href="#trabajos" className={styles.navLink}>Trabajos</a>
            <a href="#donde" className={styles.navLink}>Dónde estamos</a>
          </span>
          <a href="#reserva" className={styles.btnPrimarySmall}>
            Reservar turno <span>↗</span>
          </a>
        </div>
      </nav>

      <header id="top" className={styles.header}>
        <div className={styles.heroLeft}>
          <div className={styles.kickerRow}>
            <span className={styles.kickerBadge}>01</span>
            <span className={styles.kickerText}>Barbería · Santo Tomé, Santa Fe</span>
          </div>

          <h1 className={styles.h1}>
            <span className={styles.h1Line}>
              <span className={styles.h1LineInner}>Tu mejor</span>
            </span>
            <span className={styles.h1Line}>
              <span className={`${styles.h1LineInner} ${styles.accent}`}>
                Versión<span style={{ color: "var(--ink)" }}>.</span>
              </span>
            </span>
          </h1>

          <p className={styles.lead}>
            Cortes, fades y afeitado a navaja con turno reservado. Sin espera, sin apuro y con el
            detalle exacto que pediste.
          </p>

          <div className={styles.ctaRow}>
            <a href="#reserva" className={styles.btnPrimary}>
              Reservar mi turno <span>→</span>
            </a>
            <a href="#servicios" className={styles.btnGhost}>
              Ver precios
            </a>
          </div>

          <div className={styles.statsRow}>
            <div>
              <div className={styles.statNum} data-count="8">0</div>
              <div className={styles.statLabel}>Años de oficio</div>
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 2 }}>
                <span className={styles.statNum}>+</span>
                <span className={styles.statNum} data-count="12400">0</span>
              </div>
              <div className={styles.statLabel}>Cortes hechos</div>
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                <span className={`${styles.statNum} ${styles.accent}`} data-count="4.9">0</span>
                <span className={`${styles.statNum} ${styles.accent}`} style={{ fontSize: 18 }}>★</span>
              </div>
              <div className={styles.statLabel}>En Google Maps</div>
            </div>
          </div>
        </div>

        <div className={styles.heroRight}>
          <img
            ref={heroImgRef}
            src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?fm=jpg&q=85&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0"
            alt="Barbero perfilando un corte con navaja"
            className={styles.heroImg}
          />
          <div className={styles.heroDuotone1} />
          <div className={styles.heroDuotone2} />
          <div className={styles.heroScrim} />

          <div className={styles.heroCoords}>
            <div>31°39&apos;49&quot;S&nbsp;&nbsp;60°45&apos;35&quot;W</div>
            <div>Lun — Sáb / 09:00 — 20:00</div>
          </div>

          <div ref={heroNumRef} className={styles.heroNum}>09</div>
        </div>

        <div className={styles.scrollHint}>
          <span className={styles.scrollArrow}>↓</span>
          <span className={styles.scrollLine} />
          <span className={styles.scrollLabel}>Scroll para ver</span>
        </div>

        <div className={styles.sideLabel}>Navaja Style — 2026</div>
      </header>

      <div className={styles.marquee}>
        <div className={styles.marqueeTrack}>
          {[0, 1].map((rep) => (
            <span className={styles.marqueeItem} key={rep}>
              Fade&nbsp;·&nbsp;Navaja&nbsp;·&nbsp;Barba&nbsp;·&nbsp;Turno reservado&nbsp;·&nbsp;Sin
              espera&nbsp;·&nbsp;Fade&nbsp;·&nbsp;Navaja&nbsp;·&nbsp;Barba&nbsp;·&nbsp;Turno
              reservado&nbsp;·&nbsp;Sin espera&nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      <section id="servicios" className={styles.section}>
        <div className={styles.sectionHead}>
          <div data-rv="1">
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              <span className={styles.eyebrowText}>02 / Servicios y precios</span>
            </div>
            <h2 className={styles.h2}>
              Lo que hacemos
              <br />
              <span className={styles.accent}>y cuánto sale.</span>
            </h2>
          </div>
          <p data-rv="1" className={styles.sectionNote}>
            Precios cerrados, sin sorpresas al pagar. Incluye lavado, toalla caliente y perfilado
            final en todos los servicios de corte.
          </p>
        </div>

        <div className={styles.servicesList}>
          {SERVICIOS.map((s) => (
            <div data-rv="1" className={styles.serviceRow} key={s.num}>
              <span className={styles.serviceNum}>{s.num}</span>
              <span className={styles.serviceName}>{s.nombre}</span>
              <span className={styles.serviceDetail}>{s.detalle}</span>
              <span className={styles.servicePrice}>
                <span className={styles.servicePriceMin}>{s.min}</span>
                <span className={styles.servicePriceAmount}>{s.precio}</span>
              </span>
            </div>
          ))}
        </div>

        <div data-rv="1" className={styles.servicesFoot}>
          <span>Efectivo · transferencia · débito</span>
          <span className={styles.servicesFootLine} />
          <a href="#reserva">Reservar ahora ↗</a>
        </div>
      </section>

      <section id="trabajos" className={styles.sectionAlt}>
        <div className={styles.sectionAltInner}>
          <div className={styles.sectionHead}>
            <div data-rv="1">
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                <span className={styles.eyebrowText}>03 / Galería</span>
              </div>
              <h2 className={styles.h2}>
                Trabajos
                <br />
                <span className={styles.accent}>de la silla.</span>
              </h2>
            </div>
            <span data-rv="1" className={styles.tagLabel}>Archivo 2025 — 2026 / 08 piezas</span>
          </div>

          <div className={styles.gallery}>
            {GALERIA.map((g) => (
              <figure
                data-rv="1"
                className={styles.galleryItem}
                style={{ "--col": g.col, "--ratio": g.ratio }}
                key={g.tag}
              >
                <img src={g.src} alt={g.alt} className={styles.galleryImg} />
                <figcaption className={styles.galleryTag}>{g.tag}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="donde" className={styles.section}>
        <div className={styles.eyebrow} data-rv="1">
          <span className={styles.eyebrowDot} />
          <span className={styles.eyebrowText}>04 / Horarios y ubicación</span>
        </div>
        <h2 data-rv="1" className={styles.h2} style={{ marginBottom: "clamp(34px,5vh,58px)" }}>
          Estamos <span className={styles.accent}>acá.</span>
        </h2>

        <div className={styles.whereGrid}>
          <div data-rv="1" className={styles.infoStack}>
            <div className={styles.infoCard}>
              <div className={styles.infoLabel}>Dirección</div>
              <div className={styles.address}>
                Av. 7 de Marzo 1240
                <br />
                Santo Tomé, Santa Fe
              </div>
              <a href="#reserva" style={{ display: "inline-flex", alignItems: "center", gap: 10, marginTop: 20, fontFamily: "var(--f-mono)", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase" }}>
                Cómo llegar ↗
              </a>
            </div>
            <div className={styles.infoCardTight}>
              <div className={styles.infoLabel}>Horarios</div>
              {HORARIOS.map((h) => (
                <div className={styles.hoursRow} key={h.dia}>
                  <span>{h.dia}</span>
                  <span className={styles.hoursTime} style={{ color: h.accent ? "var(--accent)" : "var(--ink)" }}>
                    {h.hora}
                  </span>
                </div>
              ))}
              <div className={styles.contactRow}>
                <a href="tel:+543424567890">+54 342 456-7890</a>
                <a href="#reserva">@navajastyle</a>
              </div>
            </div>
          </div>

          <div data-rv="1" className={styles.mapPanel}>
            <div className={styles.mapTiles}>
              {[
                "14/5425/9718", "14/5426/9718", "14/5427/9718",
                "14/5425/9719", "14/5426/9719", "14/5427/9719",
                "14/5425/9720", "14/5426/9720", "14/5427/9720",
              ].map((coord) => (
                <img key={coord} src={`https://tile.openstreetmap.org/${coord}.png`} alt="" />
              ))}
            </div>
            <div className={styles.mapScrim} />
            <div className={styles.mapPin}>
              <span className={styles.mapPinDot} />
              <span className={styles.mapPinPing} />
            </div>
            <div className={styles.mapCaption}>Santo Tomé · Santa Fe · Argentina</div>
            <div className={styles.mapCredit}>© OpenStreetMap</div>
          </div>
        </div>
      </section>

      <section id="reserva" className={styles.reserveSection}>
        <div className={styles.reserveBgImg}>
          <img
            src="https://images.unsplash.com/photo-1678356164573-9a534fe43958?fm=jpg&q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0"
            alt=""
          />
        </div>
        <div className={styles.reserveGlow} />

        <div className={styles.reserveGrid}>
          <div data-rv="1">
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              <span className={styles.eyebrowText}>05 / Reserva</span>
            </div>
            <h2 className={styles.reserveTitle}>
              Pedí tu
              <br />
              <span className={styles.accent}>turno.</span>
            </h2>
            <p className={styles.reserveLead}>
              Elegís día, hora y servicio. Te confirmamos por WhatsApp en menos de una hora. Si no
              podés venir, avisá con 2 horas de anticipación.
            </p>
            <div className={styles.reserveStats}>
              <div>
                <div className={styles.reserveStatNum}>15&apos;</div>
                <div className={styles.reserveStatLabel}>Confirmación</div>
              </div>
              <div>
                <div className={styles.reserveStatNum}>0</div>
                <div className={styles.reserveStatLabel}>Minutos de espera</div>
              </div>
            </div>
          </div>

          <div data-rv="1" className={styles.formPanel}>
            {enviado ? (
              <div className={styles.successBox}>
                <span className={styles.successCheck}>✓</span>
                <h3 className={styles.successTitle}>Turno pedido.</h3>
                <p className={styles.successText}>{resumen}</p>
                <button type="button" onClick={handleReset} className={styles.resetBtn}>
                  Pedir otro turno
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formRow2}>
                  <label className={styles.field}>
                    <span className={styles.fieldLabel}>Nombre y apellido</span>
                    <input
                      value={form.nombre}
                      onChange={setField("nombre")}
                      required
                      placeholder="Juan Pérez"
                      className={styles.input}
                    />
                  </label>
                  <label className={styles.field}>
                    <span className={styles.fieldLabel}>WhatsApp</span>
                    <input
                      value={form.tel}
                      onChange={setField("tel")}
                      required
                      placeholder="342 456-7890"
                      className={styles.input}
                    />
                  </label>
                </div>

                <div className={styles.field}>
                  <span className={styles.fieldLabel}>Servicio</span>
                  <div className={styles.chipRow}>
                    {SERVICIOS.map((s) => (
                      <button
                        type="button"
                        key={s.num}
                        onClick={() => setForm((f) => ({ ...f, servicio: s.nombre }))}
                        className={`${styles.chip} ${form.servicio === s.nombre ? styles.chipActive : ""}`}
                      >
                        {s.nombre}
                      </button>
                    ))}
                  </div>
                </div>

                <div className={styles.formRow2}>
                  <label className={styles.field}>
                    <span className={styles.fieldLabel}>Día</span>
                    <input
                      type="date"
                      value={form.fecha}
                      onChange={setField("fecha")}
                      required
                      className={styles.input}
                    />
                  </label>
                  <label className={styles.field}>
                    <span className={styles.fieldLabel}>Hora</span>
                    <select value={form.hora} onChange={setField("hora")} className={styles.select}>
                      {HORAS_TURNO.map((h) => (
                        <option value={h} key={h}>{h}</option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className={styles.field}>
                  <span className={styles.fieldLabel}>Algo que debamos saber (opcional)</span>
                  <textarea
                    value={form.nota}
                    onChange={setField("nota")}
                    rows={3}
                    placeholder="Fade bajo, prolijo arriba, sin máquina en la barba."
                    className={styles.textarea}
                  />
                </label>

                <button type="submit" className={styles.submitBtn}>
                  Confirmar turno <span>→</span>
                </button>
                <span className={styles.formFoot}>Sin señas ni pagos online. Se abona en el local.</span>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerWordmark}>Navaja Style</div>
          <div className={styles.footerBottom}>
            <span>© 2026 Navaja Style — Santo Tomé, Santa Fe</span>
            <div className={styles.footerLinks}>
              <a href="#reserva">Instagram</a>
              <a href="#reserva">WhatsApp</a>
              <a href="#donde">Google Maps</a>
            </div>
            <span className={styles.footerCredit}>
              Sitio por <span className={styles.accent}>Axtar Studio</span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
