"use client";  // Asegura que este archivo es tratado como un componente de cliente

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Boletinn3() {
  const router = useRouter();
  
  // Función para abrir PDF
  const abrirPDF = () => {
    const pdfUrl = "/pdf/REVISTA3.pdf";
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
          onClick={() => Proyect("/boletin")}
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
      <h1 className="text-6xl text-red-500 font-semibold mb-5 mt-3">BOLETIN</h1>
      <h2 className="text-base text-gray-400">Volumen 1 / N°3</h2>
      <h2 className="text-base text-gray-400 mb-1">septiembre - diciembre 2024</h2>
      <p className="text-lg text-gray-800 mb-5 text-justify">
      En el presente boletín ”RIOUC Informa”, tendremos en la Lupa de los Observatorios, el Observatorio de Fenómenos Socioeconómicos abordando el tema: La dinámica en la vulnerabilidad de los derechos de los trabaja-dores migrantes, conformados por migrantes extranjeros, migrantes internos, familiares de migrantes y los migrantes retornados, informa-ción reflejada en un proyecto de investigación, en conjunto con la UA de Ciencias Económicas y Empresariales, el Lab. de Cálculo Computacional y la Fundación Childfund. 
      </p>
      <div className="flex flex-col md:flex-row mb-5">
        <div className="md:w-1/2 md:pr-4">
          <div className="text-lg text-gray-800 mb-5 text-justify">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 inline text-red-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            También, la Prof. Johana Reyes habla sobre: Matilde Hidalgo, la impulsora referente del voto de la mujer en Ecuador.
          </div>
          <div className="text-lg text-gray-800 mb-5 text-justify">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 inline text-red-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            En Hablando con Expertos, se entrevistó a la Soc. Andrea Sánchez, quien es experta en el tema de Movilidad Humana.
          </div>
          <div className="text-lg text-gray-800 mb-5 text-justify">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 inline text-red-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            En hablemos de Observatorios, tenemos la entrevista al Observa-torio de DDHH de la Universidad de Los Andes de Venezuela, con la Dra. Mayda Hocevar.
          </div>
          <div className="text-lg text-gray-800 mb-5 text-justify">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 inline text-red-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Abordaremos el tema, acerca del voluntariado en el mundo, a través de la Prof. Aura Guerrero. 
          </div>
        </div>
        <div className="md:w-1/2 md:pl-4">
          <Image
            src="/img/preview_boletin2.png"
            alt="RIOUC"
            width={480}
            height={175}
            className="mx-auto rounded-lg"
          />
        </div>
      </div>
      
      <div className="text-lg text-gray-800 mb-5 text-justify">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 inline text-red-500 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        El Prof. Juan Solís, nos deleita con un escrito en donde se resalta a las mujeres que marcan historia, en la provincia del Cañar
      </div>

      <div className="text-lg text-gray-800 mb-5 text-justify">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 inline text-red-500 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        Destacamos la participación de nuestra Jazmín Salazar, en un concurso de cuentos organizado por OEI, que tenía como objetivo, promover la ciencia desde el punto de vista del científico durante su proceso de investigación. 
      </div>
      <div className="mb-12 text-center">
        <button
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          onClick={abrirPDF}
        >
          Abrir Boletin
        </button>
      </div>
    </div>
  );
}
