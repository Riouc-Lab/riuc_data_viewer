"use client";  // Asegura que este archivo es tratado como un componente de cliente

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Boletinn3() {
  const router = useRouter();
  
  // Función para abrir PDF
  const abrirPDF = () => {
    const pdfUrl = "/pdf/migracion2023.pdf";
    window.open(pdfUrl, "_blank"); // window es un objeto global del navegador, asegurate de que el entorno sea del cliente
  };

  // Función para navegar a una ruta específica
  const Proyect = (to) => {
    router.push(to);
  };

  return (
    <div className="bg-white p-6 mx-auto max-w-7xl">
      <div className="p-1 text-gray-500 hover:underline mb-2 flex items-center space-x-2 mt-4">
        <button
          className="p-1 text-gray-500 hover:underline mb-2 mb-2 flex items-center space-x-2 mt-4"
          onClick={() => Proyect("/Novedades")}
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
        </button>
      </div>
      <h1 className="text-6xl text-red-500 font-semibold mb-5 mt-3">Observatorio Innovación Educativa</h1>
      <h2 className="text-base text-gray-400">Version 1.0.0</h2>
      <h2 className="text-base text-gray-400 mb-3">Diciembre 2024</h2>
      <p className="text-lg text-gray-800 mb-5 text-justify">
        
      </p>
      <div className="flex flex-col md:flex-row mb-5">
        <div className="md:w-1/8 md:pr-4">
        </div>
        <div className="md:w-1/8 md:pl-4">
          <Image
            src="/img/migracion2023.png"
            alt="RIOUC"
            width={440}
            height={175}
            className="mx-auto rounded-lg"
          />
        </div>
      </div>
      <div className="mb-12 text-center">
        <button
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          onClick={abrirPDF}
        >
          Ver Infrografía de Cerca
        </button>
      </div>
    </div>
  );
}
