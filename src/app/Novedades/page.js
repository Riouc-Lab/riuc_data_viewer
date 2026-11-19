import ListadoNovedades from "../../components/publicas/ListadoNovedades";
import { listarPublicadosPorTipo } from "../../utils/contenidos_publicos";

export const dynamic = "force-dynamic";

export default async function Infografia() {
  const novedades = await listarPublicadosPorTipo("novedad");

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white min-h-screen w-full overflow-x-hidden">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-8">
          <div className="inline-block border-b-2 border-red-400 pb-2 px-2 max-w-full">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold bg-clip-text text-transparent text-black leading-tight break-words">
              <span className="text-black">INFOGRAFÍAS</span>{" "}
              <span className="text-red-600">RIOUC</span>
            </h1>
          </div>
          <p className="text-sm sm:text-base text-gray-400 mt-3 mb-1 max-w-sm sm:max-w-xl mx-auto px-2 text-center">
            Explora las infografías más recientes desarrolladas por nuestros investigadores.
          </p>
        </div>

        <ListadoNovedades items={novedades} />
      </div>
    </div>
  );
}
