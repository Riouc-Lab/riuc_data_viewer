"use client";
import { lista_infografia } from "../../../utils";
import { useParams } from "next/navigation";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

export default function PantallaInfografia() {
  const { id } = useParams();
  const inforafia = lista_infografia.find((item) => item.id === Number(id));

  const openPdf = () => window.open(inforafia.pdfUrl, "_blank");

  return (
    <div className="bg-gray-50 py-8 px-4">
      <main className="max-w-screen-lg mx-auto">
        {/* NAV DE REGRESO */}
        <nav className="mb-6">
          <Link
            href="/Novedades"
            aria-label="Regresar"
            className="inline-flex items-center text-gray-700 hover:text-red-500 transition"
          >
            <IoArrowBackCircleOutline className="text-red-400 mr-2 text-lg" />
            Regresar
          </Link>
        </nav>

        {inforafia ? (
          <>
            {/* CABECERA */}
            <header className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-extrabold text-red-500 mb-1">
                {inforafia.name || ''}
              </h1>
              <p className="text-gray-500 italic mb-2">
                Autor: {inforafia.author || ''}
              </p>
              <p className="text-gray-600">{inforafia.date || ''}</p>
            </header>

            {/* CONTENIDO PRINCIPAL */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Infografía */}
              <div className="bg-white rounded-2xl shadow-lg overflow-auto">
                <Image
                  src={inforafia.Image || ''}
                  alt={inforafia.name || ''}
                  width={1200}
                  height={1800}
                  className="w-full h-auto"
                  sizes="100vw"
                />
              </div>

              {/* Descripción */}
              <div className="flex flex-col space-y-6">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Descripción
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {inforafia.description || ''}
                  </p>
                  <button
                    onClick={openPdf}
                    aria-label="Ver infografía completa"
                    className="mt-6 bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 rounded-full shadow-md transition transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-red-300"
                  >
                    Ver Infografía
                  </button>
                </div>
              </div>
            </section>
          </>
        ) : (
          <div className="min-h-[50vh] flex justify-center items-center text-red-500 font-semibold">
            No se encontró la infografía.
          </div>
        )}
      </main>
    </div>
  );
}
