// El recorte hereda el borde del encuadre original: donde el perro tocaba el
// límite de la foto queda un corte recto que delata el rectángulo del PNG.
// Acá se desvanece el alfa en esos bordes para que se funda con el fondo.
import sharp from "sharp";

const [, , input, output] = process.argv;

const img = sharp(input).ensureAlpha();
const { width, height } = await img.metadata();
const raw = await img.raw().toBuffer();

const FADE_BOTTOM = Math.round(height * 0.2);
const FADE_LEFT = Math.round(width * 0.1);
const FADE_RIGHT = Math.round(width * 0.05);

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const i = (y * width + x) * 4;
    if (raw[i + 3] === 0) continue;

    let factor = 1;

    const fromBottom = height - 1 - y;
    if (fromBottom < FADE_BOTTOM) factor *= fromBottom / FADE_BOTTOM;
    if (x < FADE_LEFT) factor *= x / FADE_LEFT;

    const fromRight = width - 1 - x;
    if (fromRight < FADE_RIGHT) factor *= fromRight / FADE_RIGHT;

    if (factor < 1) raw[i + 3] = Math.round(raw[i + 3] * factor);
  }
}

await sharp(raw, { raw: { width, height, channels: 4 } })
  .png({ compressionLevel: 9 })
  .toFile(output);

console.log(`${output} — desvanecido ${FADE_BOTTOM}px abajo, ${FADE_LEFT}px a la izquierda`);
