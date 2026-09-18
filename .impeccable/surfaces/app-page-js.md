---
version: 1
slug: "app-page-js"
primary_target: "app/page.js"
related_targets: []
---

## Direction contract

THESIS: La landing demuestra el ritmo y la ambición técnica de Axtar en el primer scroll, igual que go-marz.com: tipografía enorme y cinética, tarjetas de servicio con profundidad real, sensación de "esto se mueve porque quien lo construye domina el motion web" — nunca un brochure estático con reveals decorativos sueltos como el actual.

OWN-WORLD: Sobre los tokens existentes de Axtar (ink-950 casi negro, cobre como acento, Space Grotesk display + Manrope body, esquinas cortadas en vez de bordes redondeados, sombras duras sin blur) pero el cobre pasa de uso mínimo a ocupar 30–60% de la superficie en bloques completos (franjas de sección, badges grandes, subrayados de headline), inspirado en cómo Marz usa su color de marca a pleno. Las tarjetas de servicio y proceso flotan con profundidad (sombra dura desplazada + leve parallax/tilt en scroll/mouse), nunca glassmorphism ni gradientes ni blur.

STORY: El visitante (dueño de comercio, emprendedor o empresa chica/mediana) entiende en el primer viewport que Axtar construye tecnología real y a medida, no una promesa genérica; ve el proceso de 5 pasos y los 5 servicios con precios claros y llega al CTA de WhatsApp convencido de que hay una sola persona seria y directa del otro lado.

FIRST VIEWPORT: Headline gigante multilínea (sin eyebrow/kicker arriba) con la palabra rotativa (RotatingWord) animada con mayor amplitud/velocidad tipo Marz, subhead corto, dos CTAs (WhatsApp directo + ver servicios). Alrededor, 2–3 tarjetas de servicio flotan con profundidad real y reaccionan sutilmente al scroll/mouse, ancladas con sombra dura cobre — nunca dentro de una hero-shell genérica. Fondo del Hero blanco cálido (ink-000).

SIGNATURE INTERACTION (confirmada con el usuario): entre el Hero y el resto de la página hay un panel "pinned" (sticky, alto ~2x viewport) cuyo velo negro va de opacidad 0 a 1 scrubbeado exactamente por el scroll (fórmula `-rect.top / (altura - viewport)`, sin easing artificial, 1:1 con el dedo/rueda) — al llegar a la mitad de esa sección la pantalla ya se transformó en negro, con el isotipo de Axtar apareciendo en cobre en el centro del velo como remate. A partir de ahí (Services en adelante) el fondo de la página pasa a ser ink-950 de forma permanente hasta el footer — no vuelve a blanco — reforzando el "mucho más cobre sobre negro" del OWN-WORLD. Sin scroll-jacking real (no se bloquea el scroll nativo), solo interpolación de opacidad ligada a la posición.

FORM: Salida estándar (canon) — SaaS kinético estilo Marz, elegida por el usuario tras un roll completo de 4 direcciones (asignada: terminal de developer; mi pick: plano técnico/cianotipo; alternativa: recibo de comercio). No proviene de una posición del listado grounded — reemplaza el roll por elección explícita del usuario. Seed key: fd6d6580 (scope direction, mode persuade). Única referencia de calidad/motion a igualar: go-marz.com (confirmado con el usuario, sin sumar otras referencias).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
