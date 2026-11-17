import Image from "next/image";
import Link from "next/link";
import { sanearHtml } from "../../utils/sanear_html";

export default function DetalleContenido({
  item,
  volverHref,
  subtitulo,
  textoBotonArchivo,
}) {
  const cuerpoSaneado = sanearHtml(item.cuerpo);
  const metaSecundaria = item.periodo || item.fecha_publicacion;

  return (
    <div className="bg-white p-6 mx-auto max-w-7xl">
      <div className="p-1 text-gray-500 hover:underline mb-2 flex items-center space-x-2 mt-4">
        <Link
          href={volverHref}
          className="p-1 text-gray-500 hover:underline mb-2 flex items-center space-x-2 mt-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-left-circle text-red-400"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
            />
          </svg>
          <span className="text-gray-500 hover:text-red-400 transition">
            Regresar
          </span>
        </Link>
      </div>

      <h1 className="text-4xl md:text-6xl text-red-500 font-semibold mb-4 mt-3">
        {item.titulo}
      </h1>
      {subtitulo && <h2 className="text-base text-gray-400">{subtitulo}</h2>}
      {item.autor && <p className="text-base text-gray-400">{item.autor}</p>}
      {metaSecundaria && (
        <h2 className="text-base text-gray-400 mb-4">{metaSecundaria}</h2>
      )}

      {!cuerpoSaneado && item.resumen && (
        <p className="text-lg text-gray-800 mb-6 text-justify">{item.resumen}</p>
      )}

      <div className="flex flex-col md:flex-row gap-6 mb-8 items-start">
        {cuerpoSaneado && (
          <div
            className={`${item.imagen_url ? "md:w-1/2" : "w-full"} text-lg text-gray-800 text-justify leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-6 [&_h2]:mb-3 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-4 [&_h3]:mb-2 [&_a]:text-red-600 [&_a]:underline [&_blockquote]:border-l-4 [&_blockquote]:border-red-400 [&_blockquote]:pl-4 [&_blockquote]:italic`}
            dangerouslySetInnerHTML={{ __html: cuerpoSaneado }}
          />
        )}

        {item.imagen_url && (
          <div className={`${cuerpoSaneado ? "md:w-1/2" : "w-full"} flex justify-center`}>
            <Image
              src={item.imagen_url}
              alt={item.titulo}
              width={440}
              height={320}
              unoptimized
              className="mx-auto rounded-lg object-contain"
            />
          </div>
        )}
      </div>

      {item.archivo_url && (
        <div className="mb-12 text-center">
          <a
            href={item.archivo_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition"
          >
            {textoBotonArchivo}
          </a>
        </div>
      )}
    </div>
  );
}
