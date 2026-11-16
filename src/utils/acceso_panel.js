import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import db from "./database";
import { correoPermitido, normalizarCorreo } from "./correo_panel";


export async function usuarioAutorizado(correo) {
  if (!correoPermitido(correo, process.env.PANEL_DOMINIO)) return false;

  const fila = await db.oneOrNone(
    "SELECT 1 FROM usuarios_autorizados WHERE correo = $1 AND activo",
    [normalizarCorreo(correo)]
  );
  return fila !== null;
}

export async function exigirAccesoPanel() {
  const session = await getServerSession(authOptions);
  const correo = session?.user?.email;
  if (!correo) return { ok: false, status: 401 };

  if (!(await usuarioAutorizado(correo))) return { ok: false, status: 403 };

  return { ok: true, correo: normalizarCorreo(correo) };
}