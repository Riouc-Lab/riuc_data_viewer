"use client";  // Asegura que este archivo es tratado como un componente de cliente

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Boletinn7() {
  const router = useRouter();
  
  // Función para abrir PDF
  const abrirPDF = () => {
    const pdfUrl = "/pdf/b-v3n1.pdf";
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
      <h1 className="text-6xl text-red-500 font-semibold mb-5 mt-3">BOLETÍN</h1>
      <h2 className="text-base text-gray-400">Volumen 3 / N° 1</h2>
      <h2 className="text-base text-gray-400 mb-3">enero - abril 2025</h2>
      <p className="text-lg text-gray-800 mb-5 text-justify">
        La Red de Investigación y Observatorios de la Universidad Católica de Cuenca (RIOUC) reafirma su compromiso indeclinable con la generación y divulgación de conocimiento científico al servicio de la sociedad. La investigación no es un ejercicio confinado a las aulas, sino un diálogo permanente entre la academia y las realidades que exige comprender, medir y transformar.      </p>
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
En esta nueva edición del boletín "RIOUC Informa" (Vol. 3, No. 1, enero - abril 2026), damos la bienvenida a tres nuevos observatorios que amplían el alcance de nuestra red: el Observatorio de Equidad y Género, que profundiza en el monitoreo de las brechas de género en la educación superior y la violencia simbólica en los espacios universitarios; el Observatorio de la Actividad Física, que vigila el comportamiento del movimiento en niños, niñas y adolescentes del territorio ecuatoriano; y el Observatorio Contable, que desde el proyecto NAF UCACUE fortalece la cultura tributaria y acompaña a miles de contribuyentes en distintas sedes del país.          </div>
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
En la sección Hablando con expertos conversamos con el Decano de la Facultad de Ciencias Económicas y Empresariales y con una docente investigadora de la UNACH sobre los desafíos y el futuro de la carrera de Economía, mientras que en Hablemos de Observatorios conocemos de cerca la experiencia de la Red de Observatorios de la Universidad Técnica Particular de Loja (UTPL). Los datos hablan nos acerca, mediante infografías, al comportamiento del cacao ecuatoriano y a la inflación registrada en el primer trimestre de 2026, y Los investigadores divulgan comparte análisis sobre finanzas personales, empresariales y la reconfiguración productiva del país.          </div>
          
        </div>
        <div className="md:w-1/2 md:pl-4 flex items-center justify-center">
          <Image
            src="/img/b-v3n1-detalle.png"
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
Cerramos este número con Los observadores difunden, un recorrido por la participación de nuestro equipo en espacios académicos internacionales como el Workshop de la ESPOCH, el Simposio Internacional de Economía y Género en Bogotá y la Conferencia IUFRO en la Patagonia chilena. Invitamos a todas las personas lectoras a sumarse a esta red de conocimiento, con una mirada crítica y comprometida con la construcción de una academia que investiga, dialoga y transforma su territorio.      </div>

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
