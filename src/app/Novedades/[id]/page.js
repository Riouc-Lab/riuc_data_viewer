import { notFound } from "next/navigation";
import DetalleContenido from "../../../components/publicas/DetalleContenido";
import { obtenerPublicado } from "../../../utils/contenidos_publicos";

export const dynamic = "force-dynamic";

export default async function NovedadDetallePage({ params }) {
  const { id } = await params;
  if (!/^\d+$/.test(id || "")) notFound();

  const numero = Number(id);
  if (!Number.isInteger(numero) || numero <= 0) notFound();

  const novedad = await obtenerPublicado("novedad", numero);
  if (!novedad) notFound();

  return (
    <DetalleContenido
      item={novedad}
      volverHref="/Novedades"
      subtitulo="Version 1.0.0"
      textoBotonArchivo="Ver Infografía de Cerca"
    />
  );
}
