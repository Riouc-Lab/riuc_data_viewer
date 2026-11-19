import test from "node:test";
import assert from "node:assert/strict";
import { sanearHtml } from "./sanear_html.js";

test("conserva etiquetas seguras del editor", () => {
  const entrada = '<p>Texto <strong>negrita</strong> y <em>cursiva</em></p><ul><li>Uno</li></ul>';
  assert.equal(sanearHtml(entrada), entrada);
});

test("elimina scripts, iframes y manejadores de eventos", () => {
  const entrada = '<p onclick="alert(1)">Hola</p><script>alert(2)</script><iframe src="https://x.test"></iframe>';
  assert.equal(sanearHtml(entrada), "<p>Hola</p>");
});

test("bloquea enlaces javascript: y permite https o rutas internas", () => {
  assert.equal(sanearHtml('<a href="javascript:alert(1)" onclick="x()">Mal</a>'), "<a>Mal</a>");
  assert.equal(
    sanearHtml('<a href="https://www.ucacue.edu.ec" style="color:red">UCACUE</a>'),
    '<a href="https://www.ucacue.edu.ec" target="_blank" rel="noopener noreferrer">UCACUE</a>'
  );
  assert.equal(
    sanearHtml('<a href="/subidas/doc.pdf">PDF</a>'),
    '<a href="/subidas/doc.pdf" target="_blank" rel="noopener noreferrer">PDF</a>'
  );
});

test("elimina etiquetas no permitidas conservando su texto", () => {
  assert.equal(sanearHtml('<span style="font-size:99px">Texto</span><img src=x onerror=alert(1)>'), "Texto");
});
