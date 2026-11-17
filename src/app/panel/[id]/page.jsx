// /panel/[id] — formulario para editar, publicar o pasar a borrador un contenido
import { notFound } from "next/navigation";
import AccesoPanel from "../../../components/panel/AccesoPanel";
import BarraPanel from "../../../components/panel/BarraPanel";
import FormularioContenido from "../../../components/panel/FormularioContenido";
import { exigirAccesoPanel } from "../../../utils/acceso_panel";
import { obtenerContenidoPorId } from "../../../utils/contenidos_panel";

export const dynamic = "force-dynamic";

export default async function PaginaEditarContenido({ params }) {
  const acceso = await exigirAccesoPanel();
  if (!acceso.ok) {
    return <AccesoPanel sinSesion={acceso.status === 401} />;
  }

  // Desde Next 15, params es una promesa
  const { id: textoId } = await params;
  const id = Number(textoId);
  if (!Number.isInteger(id) || id <= 0) notFound();

  const contenido = await obtenerContenidoPorId(id);
  if (!contenido) notFound();

  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <BarraPanel correo={acceso.correo} />
      <FormularioContenido contenido={contenido} />
    </section>
  );
}
