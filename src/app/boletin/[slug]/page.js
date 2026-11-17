import { notFound } from "next/navigation";
import DetalleContenido from "../../../components/publicas/DetalleContenido";
import { obtenerPublicado } from "../../../utils/contenidos_publicos";

export const dynamic = "force-dynamic";

export default async function BoletinDetallePage({ params }) {
  const { slug } = await params;
  const coincidencia = /^n(\d+)$/i.exec(slug || "");
  if (!coincidencia) notFound();

  const numero = Number(coincidencia[1]);
  if (!Number.isInteger(numero) || numero <= 0) notFound();

  const boletin = await obtenerPublicado("boletin", numero);
  if (!boletin) notFound();

  return (
    <DetalleContenido
      item={boletin}
      volverHref="/boletin"
      subtitulo={`Boletín N°${boletin.numero}`}
      textoBotonArchivo="Abrir Boletín"
    />
  );
}
