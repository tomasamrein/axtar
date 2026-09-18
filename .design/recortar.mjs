// Quita el fondo blanco de estudio de una foto y guarda un PNG con transparencia.
// Usa flood fill desde los bordes: así el blanco que está DENTRO del sujeto
// (pelo claro, reflejos en los ojos) se conserva en vez de volverse agujero.
import sharp from "sharp";

const [, , input, output, thresholdArg, satArg] = process.argv;
const THRESHOLD = Number(thresholdArg ?? 232);
// Cuánta diferencia entre canales se tolera antes de considerar que el pixel
// tiene color propio y por lo tanto pertenece al sujeto, no al fondo.
const SAT_TOLERANCE = Number(satArg ?? 18);

const img = sharp(input).ensureAlpha();
const { width, height } = await img.metadata();
const raw = await img.raw().toBuffer();

const isBackgroundish = (i) => {
  const r = raw[i], g = raw[i + 1], b = raw[i + 2];
  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  return min >= THRESHOLD && max - min <= SAT_TOLERANCE;
};

const bg = new Uint8Array(width * height);
const queue = [];

const push = (x, y) => {
  if (x < 0 || y < 0 || x >= width || y >= height) return;
  const p = y * width + x;
  if (bg[p]) return;
  if (!isBackgroundish(p * 4)) return;
  bg[p] = 1;
  queue.push(p);
};

for (let x = 0; x < width; x++) { push(x, 0); push(x, height - 1); }
for (let y = 0; y < height; y++) { push(0, y); push(width - 1, y); }

while (queue.length) {
  const p = queue.pop();
  const x = p % width;
  const y = (p - x) / width;
  push(x + 1, y); push(x - 1, y); push(x, y + 1); push(x, y - 1);
}

// Suaviza el borde: un pixel de fondo pegado al sujeto queda semitransparente
// en vez de cortar en escalera.
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const p = y * width + x;
    const i = p * 4;
    if (!bg[p]) continue;
    let touchesSubject = false;
    for (let dy = -1; dy <= 1 && !touchesSubject; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        const nx = x + dx, ny = y + dy;
        if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
        if (!bg[ny * width + nx]) { touchesSubject = true; break; }
      }
    }
    raw[i + 3] = touchesSubject ? 110 : 0;
  }
}

// Recorta al contenido real para que el PNG no arrastre margen vacío.
let minX = width, minY = height, maxX = 0, maxY = 0;
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    if (bg[y * width + x]) continue;
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
  }
}

const kept = bg.reduce((acc, v) => acc + (v ? 0 : 1), 0);
const pct = Math.round((kept / (width * height)) * 100);

await sharp(raw, { raw: { width, height, channels: 4 } })
  .extract({ left: minX, top: minY, width: maxX - minX + 1, height: maxY - minY + 1 })
  .png({ compressionLevel: 9, quality: 82 })
  .toFile(output);

console.log(`${output} — sujeto ${pct}% de la imagen, recorte ${maxX - minX + 1}x${maxY - minY + 1}`);
