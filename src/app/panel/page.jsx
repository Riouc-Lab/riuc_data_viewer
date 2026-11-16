// /panel — lista de boletines y novedades para quien está autorizado.
// Es una página de servidor: el acceso se revisa aquí, antes de leer la base.
import Link from "next/link";
import AccesoPanel from "../../components/panel/AccesoPanel";
import BarraPanel from "../../components/panel/BarraPanel";
import ListaContenidos from "../../components/panel/ListaContenidos";
import { exigirAccesoPanel } from "../../utils/acceso_panel";
import { listarContenidosPanel } from "../../utils/contenidos_panel";

// Siempre se consulta la base al entrar
export const dynamic = "force-dynamic";

export default async function PaginaPanel() {
  const acceso = await exigirAccesoPanel();
  if (!acceso.ok) {
    return <AccesoPanel sinSesion={acceso.status === 401} />;
  }

  const contenidos = await listarContenidosPanel();

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <BarraPanel correo={acceso.correo} />
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Boletines y novedades</h1>
        <Link
          href="/panel/nuevo"
          className="bg-red-700 hover:bg-red-800 text-white px-5 py-2 rounded"
        >
          Nuevo contenido
        </Link>
      </div>
      <ListaContenidos contenidos={contenidos} />
    </section>
  );
}
