// /panel/nuevo — formulario para crear un boletín o una novedad
import AccesoPanel from "../../../components/panel/AccesoPanel";
import BarraPanel from "../../../components/panel/BarraPanel";
import FormularioContenido from "../../../components/panel/FormularioContenido";
import { exigirAccesoPanel } from "../../../utils/acceso_panel";
import { siguienteNumero } from "../../../utils/contenidos_panel";

export const dynamic = "force-dynamic";

export default async function PaginaNuevoContenido() {
  const acceso = await exigirAccesoPanel();
  if (!acceso.ok) {
    return <AccesoPanel sinSesion={acceso.status === 401} />;
  }

  // Números sugeridos para cada tipo: el siguiente libre
  const numerosSugeridos = {
    boletin: await siguienteNumero("boletin"),
    novedad: await siguienteNumero("novedad"),
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <BarraPanel correo={acceso.correo} />
      <FormularioContenido contenido={null} numerosSugeridos={numerosSugeridos} />
    </section>
  );
}
