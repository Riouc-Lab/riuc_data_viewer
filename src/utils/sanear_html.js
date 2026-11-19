// Sanea HTML proveniente del editor o de la base de datos antes de mostrarlo en páginas públicas.
// Funciona en el servidor (Node.js) sin dependencias externas.

const ETIQUETAS_PERMITIDAS = new Set([
  "p", "br", "div", "strong", "b", "em", "i", "u",
  "ul", "ol", "li", "h2", "h3", "blockquote", "a",
]);

const ETIQUETAS_PELIGROSAS = new Set([
  "script", "style", "iframe", "object", "embed", "template", "svg", "math", "noscript",
]);

function escaparAtributo(valor) {
  return valor
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function enlaceSeguro(url) {
  const limpio = (url || "").replace(/[\u0000-\u001F\u007F]/g, "").trim();
  return /^(https?:\/\/|mailto:)/i.test(limpio) || (limpio.startsWith("/") && !limpio.startsWith("//"));
}

function extraerHref(atributos) {
  const coincidencia = atributos.match(/\bhref\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/i);
  if (!coincidencia) return null;
  return coincidencia[1] ?? coincidencia[2] ?? coincidencia[3] ?? null;
}

export function sanearHtml(html) {
  if (!html) return "";

  let limpio = String(html).replace(/<!--[\s\S]*?-->/g, "");

  // Elimina etiquetas peligrosas junto con su contenido
  for (const tag of ETIQUETAS_PELIGROSAS) {
    const patron = new RegExp(`<${tag}\\b[^>]*>[\\s\\S]*?<\\/${tag}>`, "gi");
    limpio = limpio.replace(patron, "");
    const patronAbierto = new RegExp(`<${tag}\\b[^>]*\\/?>`, "gi");
    limpio = limpio.replace(patronAbierto, "");
  }

  // Conserva solo etiquetas permitidas y elimina atributos no seguros
  return limpio.replace(/<(\/?)([a-zA-Z0-9-]+)([^>]*)>/g, (_, cierre, nombre, attrs) => {
    const tag = nombre.toLowerCase();
    if (!ETIQUETAS_PERMITIDAS.has(tag)) return "";
    if (cierre) return `</${tag}>`;
    if (tag === "br") return "<br />";

    if (tag === "a") {
      const href = extraerHref(attrs);
      if (href && enlaceSeguro(href)) {
        return `<a href="${escaparAtributo(href.trim())}" target="_blank" rel="noopener noreferrer">`;
      }
      return "<a>";
    }

    return `<${tag}>`;
  });
}
