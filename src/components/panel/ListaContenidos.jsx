// Tabla con todos los contenidos del panel (boletines y novedades).
// Es un componente de servidor: no necesita "use client" porque no tiene estado.
import Link from "next/link";

const NOMBRE_TIPO = { boletin: "Boletín", novedad: "Novedad" };

function formatearFecha(fecha) {
  if (!fecha) return "—";
  return new Date(fecha).toLocaleDateString("es-EC", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function EtiquetaEstado({ estado }) {
  const publicado = estado === "publicado";
  return (
    <span
      className={`text-xs font-semibold px-2 py-1 rounded ${
        publicado ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
      }`}
    >
      {publicado ? "Publicado" : "Borrador"}
    </span>
  );
}

export default function ListaContenidos({ contenidos }) {
  if (contenidos.length === 0) {
    return <p className="text-gray-600 py-8">Todavía no hay contenidos. Crea el primero.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-gray-300 text-gray-700">
          <tr>
            <th className="py-2 pr-4">Tipo</th>
            <th className="py-2 pr-4">N.º</th>
            <th className="py-2 pr-4">Título</th>
            <th className="py-2 pr-4">Estado</th>
            <th className="py-2 pr-4">Publicado</th>
            <th className="py-2 pr-4">Última edición</th>
            <th className="py-2"></th>
          </tr>
        </thead>
        <tbody>
          {contenidos.map((contenido) => (
            <tr key={contenido.id} className="border-b border-gray-100">
              <td className="py-2 pr-4">{NOMBRE_TIPO[contenido.tipo]}</td>
              <td className="py-2 pr-4">{contenido.numero}</td>
              <td className="py-2 pr-4">{contenido.titulo}</td>
              <td className="py-2 pr-4">
                <EtiquetaEstado estado={contenido.estado} />
              </td>
              <td className="py-2 pr-4">
                {/* fecha_publicacion llega como texto AAAA-MM-DD */}
                {contenido.fecha_publicacion
                  ? contenido.fecha_publicacion.split("-").reverse().join("/")
                  : "—"}
              </td>
              <td className="py-2 pr-4">{formatearFecha(contenido.actualizado_en)}</td>
              <td className="py-2 text-right">
                <Link href={`/panel/${contenido.id}`} className="text-red-700 hover:underline">
                  Editar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
