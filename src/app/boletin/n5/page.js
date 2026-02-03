"use client";  // Asegura que este archivo es tratado como un componente de cliente

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Boletinn4() {
  const router = useRouter();

  // Función para abrir PDF
  const abrirPDF = () => {
    const pdfUrl = "/pdf/REVISTA5.pdf";
    window.open(pdfUrl, "_blank");
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
      <h2 className="text-base text-gray-400">Volumen 2 / N°2</h2>
      <h2 className="text-base text-gray-400 mb-1">mayo - agosto 2025</h2>
      <p className="text-lg text-gray-800 mb-5 text-justify">
        La Universidad Católica de Cuenca, a través de su Vicerrectorado de Investigación, reafirma su misión fundamental no solo de producir conocimiento riguroso, sino de democratizarlo, estableciendo la divulgación científica como un puente ineludible entre la academia y la sociedad.
      </p>
      <div className="flex flex-col md:flex-row mb-5">
        <div className="md:w-1/2 md:pr-4 mt-2">
          <Image
            src="/img/mariaemilia.png"
            alt="RIOUC"
            width={405}
            height={165}
            className="mx-auto rounded-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-4 mt-3">
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
            En esta edición especial del boletín “RIOUC Informa”, dedicada a la Semana de la Ciencia 2025, abrimos las puertas de la universidad para conectar el rigor académico con las inquietudes de la sociedad. A través de estas páginas, les invitamos a explorar la fascinante convergencia entre el arte y la microbiología en el proyecto 'Invisible Pegaso', a reflexionar sobre los desafíos éticos de la Inteligencia Artificial junto a la UNESCO y a ser testigos del esfuerzo por democratizar el conocimiento llevando la ciencia a las aulas de colegio. Este número celebra no solo la excelencia de nuestros investigadores, sino también nuestra misión de transformar el futuro a través de la divulgación y la innovación responsable.
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
            Gracias a la visión de la recién creada Unidad de Divulgación Científica y al talento de nuestros galardonados —desde autores en la revista Science hasta innovadores en tecnología médica—, esta publicación se consolida como un espacio donde dialogan la biotecnología, la ética digital y la conciencia ambiental.
          </div>
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
        Invitamos a todas las personas lectoras a sumergirse en este cruce de caminos entre la razón y la creatividad, participando activamente en una conversación necesaria sobre cómo la ciencia, cuando es compartida y humana, tiene el poder de redefinir nuestro entorno.
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
