function normalizarCorreo(correo) {
  return typeof correo === "string" ? correo.trim().toLowerCase() : "";
}

function correoPermitido(correo, dominio) {
  const dominioLimpio = typeof dominio === "string" ? dominio.trim().toLowerCase() : "";
  if (!dominioLimpio) return false;

  const partes = normalizarCorreo(correo).split("@");
  if (partes.length !== 2 || !partes[0]) return false;

  return partes[1] === dominioLimpio;
}

module.exports = { normalizarCorreo, correoPermitido };
