const test = require("node:test");
const assert = require("node:assert/strict");
const { correoPermitido } = require("./correo_panel");

test("acepta un correo del dominio exacto", () => {
  assert.equal(correoPermitido("ana@gmail.com", "gmail.com"), true);
});

test("ignora mayúsculas y espacios", () => {
  assert.equal(correoPermitido("  Ana@Gmail.COM ", "gmail.com"), true);
});

test("sin PANEL_DOMINIO no entra nadie", () => {
  assert.equal(correoPermitido("ana@gmail.com", undefined), false);
  assert.equal(correoPermitido("ana@gmail.com", ""), false);
  assert.equal(correoPermitido("ana@gmail.com", "   "), false);
});

test("rechaza otro dominio", () => {
  assert.equal(correoPermitido("ana@gmail.com", "ucacue.edu.ec"), false);
  assert.equal(correoPermitido("ana@ucacue.edu.ec", "gmail.com"), false);
});

test("rechaza dominios parecidos", () => {
  assert.equal(correoPermitido("ana@evilgmail.com", "gmail.com"), false);
  assert.equal(correoPermitido("ana@sub.gmail.com", "gmail.com"), false);
  assert.equal(correoPermitido("ana@gmail.com.evil.com", "gmail.com"), false);
});

test("rechaza correos mal formados", () => {
  for (const correo of ["", null, undefined, "gmail.com", "@gmail.com", "ana@evil.com@gmail.com"]) {
    assert.equal(correoPermitido(correo, "gmail.com"), false, String(correo));
  }
});
