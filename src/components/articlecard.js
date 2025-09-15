// components/ArticleCard.jsx
"use client";
import { useState } from "react";

export default function ArticleCard({
  item,
  expandible = false,
  mostrarImagen = false,
}) {
  const [isExpanded, setIsExpanded] = useState(false); // Estado local para controlar si el resumen está expandido o no

  const formatearFecha = (
    iso // Función para formatear la fecha al formato local
  ) =>
    new Date(iso).toLocaleDateString("es-EC", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  const toggleExpand = (e) => {
    // Alterna el estado de expansión del resumen, previniendo que el click propague y abra el pdf
    e.stopPropagation();
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="group" onClick={() => window.open(item.pdf, "_blank")}>
      <div
        className={`relative bg-white border border-gray-200 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col ${isExpanded ? "min-h-fit" : "h-80"
          }`}
      >
        {/* Banda superior roja degradada */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-700" />

        {/* Contenido principal de la tarjeta */}
        <div className="p-6 flex flex-col h-full">
          {/* Fecha con ícono */}
          <div className="flex items-center text-blue-400 text-sm font-medium mb-2 flex-shrink-0">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            {formatearFecha(item.fecha)}
          </div>

          {/* Título del Articulo */}
          <h2
            onClick={(e) => {
              e.stopPropagation();
              window.open(item.pdf, "_blank");
            }}
            className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors duration-200 leading-tight flex-shrink-0 titulo-articulo"
          >
            {item.titulo}
          </h2>

          {/* Autor con ícono */}
          <div className="text-gray-800 text-sm font-medium mb-4 flex-shrink-0">
            <svg
              className="inline-block w-4 h-4 mr-1 text-black"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 2a4 4 0 00-4 4c0 1.657 1.343 3 3 3s3-1.343 3-3a4 4 0 00-4-4zm-6 14a6 6 0 1112 0H4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm text-gray-700">Autor/es:</span>{" "}
            {item.autor.length > 12 ? `${item.autor.slice(0, 50)}...` : item.autor}
          </div>


          {/* Área de contenido con altura flexible */}
          <div className="flex-grow">
            {/* Abstract corto o expandido */}
            {!isExpanded ? (
              <p
                className={`text-gray-600 text-sm leading-relaxed mb-4 ${item.titulo.length > 33 ? "line-clamp-3" : "line-clamp-4"
                  }`}
              >
                {item.abstract && item.abstract.split(" ").length > 25
                  ? `${item.abstract.split(" ").slice(0, 25).join(" ")}...`
                  : item.abstract}
              </p>
            ) : (
              <div className="text-gray-700 text-sm">
                <strong className="text-gray-800">Resumen:</strong>
                <p className="text-gray-600 mt-1 leading-relaxed">
                  {item.abstract && item.abstract.split(" ").length > 60
                    ? `${item.abstract.split(" ").slice(0, 60).join(" ")}...`
                    : item.abstract}
                </p>
              </div>
            )}
          </div>

          {/* Footer - siempre visible */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100 flex-shrink-0 mt-auto">
            {expandible && (
              <button
                onClick={toggleExpand}
                className="flex items-center text-blue-400 font-medium text-sm group-hover:text-blue-600 transition-colors duration-200"
              >
                {isExpanded ? "Volver" : "Saber más"}
                <svg
                  className={`w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""
                    }`}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </button>
            )}
            <span className="text-gray-400 text-xs font-medium">
              {item.observatorio || "RIOUC"}
            </span>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </div>
  );
}

