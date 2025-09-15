// src/components/InfographicCard.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

export default function InfographicCard({
  backHref = "/Novedades", // ruta genérica de regreso
  title,
  author,
  date,
  imgSrc,
  imgAlt,
  pdfUrl,
  description,
}) {
  const openPdf = () => window.open(pdfUrl, "_blank");

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4">
      <main className="max-w-screen-lg mx-auto">
        {/* NAV DE REGRESO */}
        <nav className="mb-6">
          <Link
            href={backHref}
            aria-label="Regresar"
            className="inline-flex items-center text-gray-700 hover:text-red-500 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="mr-1 text-red-400"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0
                   0 1 8zm15 0A8 8 0 1 1 0 8a8 8
                   0 0 1 16 0zm-4.5-.5a.5.5 0 0
                   1 0 1H5.707l2.147 2.146a.5.5
                   0 0 1-.708.708l-3-3a.5.5
                   0 0 1 0-.708l3-3a.5.5 0 1
                   1 .708.708L5.707 7.5H11.5z"
              />
            </svg>
            Regresar
          </Link>
        </nav>

        {/* CABECERA */}
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-red-500 mb-1">
            {title}
          </h1>
          {author && (
            <p className="text-gray-500 italic mb-2">Autor: {author}</p>
          )}
          <p className="text-gray-600">
            {date}
          </p>
        </header>

        {/* CONTENIDO PRINCIPAL */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Infografía */}
          <div className="bg-white rounded-2xl shadow-lg overflow-auto">
            <Image
              src={imgSrc}
              alt={imgAlt}
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
              <p className="text-gray-700 leading-relaxed">{description}</p>
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
      </main>
    </div>
  );
}

InfographicCard.propTypes = {
  backHref: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  version: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  pdfUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
