// Convierte cada artboard .dc.html en un HTML autónomo que un navegador
// headless pueda fotografiar. El formato de Claude Design envuelve el diseño
// en <x-dc> y mete los estilos en <helmet>; acá se desarma esa envoltura.
import fs from "node:fs";

const files = process.argv.slice(2);

for (const file of files) {
  const src = fs.readFileSync(file, "utf8");

  const helmet = src.match(/<helmet>([\s\S]*?)<\/helmet>/)?.[1] ?? "";
  const body = src
    .match(/<x-dc>([\s\S]*?)<\/x-dc>/)?.[1]
    ?.replace(/<helmet>[\s\S]*?<\/helmet>/, "")
    ?.trim();

  if (!body) {
    console.error(`${file}: no se encontró el bloque <x-dc>`);
    process.exit(1);
  }

  const out = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
${helmet}
<style>html,body{margin:0;padding:0;background:#fff;}</style>
</head>
<body>
${body}
</body>
</html>`;

  const target = file.replace(/\.dc\.html$/, ".flat.html");
  fs.writeFileSync(target, out);
  console.log(`${target} (${Math.round(out.length / 1024)} KB)`);
}
