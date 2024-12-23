"use client";  // Asegura que este archivo es tratado como un componente de cliente

import Image from "next/image";
import { useRouter } from "next/navigation";
import VideoCard from '../../../components/VideoCard';
import styles from '../../../styles/Home.module.css';

const videos = [
  { id: 1, src: '\vdo\raquelychampi.mp4', thumbnail: '\img\vdo1_socioeco.png', description: 'Video 1 Description' },
];

export default function Boletinn1() {
  const router = useRouter();
  

  // Función para abrir PDF
  const abrirPDF = () => {
    const pdfUrl = "/pdf/REVISTA1.pdf";
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
      <h2 className="text-base text-gray-400">Volumen 1 / N°1</h2>
      <h2 className="text-base text-gray-400 mb-3">mayo - agosto 2023</h2>
      <p className="text-lg text-gray-800 mb-5 text-justify">
        El presente boletín “La RIOUC Informa” es una publicación semestral en
        la que presentamos las principales estadísticas de datos producto de
        nuestras investigaciones, conformadas por siete observatorios que hacen
        vida en la Universidad Católica de Cuenca. Este boletín está conformado
        por cuatro secciones:
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
            La primera denominada, Bajo la lupa de los observatorios, presenta
            en qué consiste cada observatorio, quienes son los responsables, qué
            servicios ofrecen y cuáles son los proyectos actuales que llevan
            adelante.
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
            La segunda sección, denominada “hablando con expertos”, pretende
            presentar la opinión de investigadores en diferentes áreas de la
            ciencia haciendo énfasis en sus respectivas especialidades de
            investigación.
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
            Una tercera sección está enmarcada a visibilizar datos relevantes de
            investigaciones, así como mostrar las bases de datos que se manejan
            con información de calidad.
          </div>
        </div>
        <div className="md:w-1/2 md:pl-4">
          <Image
            src="/img/preview_boletin.png"
            alt="RIOUC"
            width={440}
            height={175}
            className="mx-auto rounded-lg"
          />
        </div>
      </div>

      <div className="text-lg text-gray-800 mb-10 text-justify">
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
        Por último, una cuarta sección, donde se exponen las actividades
        realizadas en la Red de Investigación y Observatorios en el último
        semestre y los eventos próximos a realizarse donde participarán miembros
        de nuestra red.
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
