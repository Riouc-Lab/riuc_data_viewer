"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function boletinn2() {
  const router = useRouter();
  const abrirPDF = () => {
    // Reemplaza 'nombre-del-archivo.pdf' con el nombre real de tu archivo PDF
    const pdfUrl = "/pdf/REVISTA2.pdf";
    window.open(pdfUrl, "_blank");
  };

  function proyect(to) {
    router.push(to);
  }

  return (
    <div className="bg-white p-6 mx-auto max-w-7xl">
      <div className="bg-white p-6 mx-auto max-w-7xl">
        <button
          className="p-1 text-gray-500 hover:underline mb-2 mb-2 flex items-center space-x-2 mt-4"
          onClick={() => proyect("/boletin")}
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
        <h1 className="text-6xl text-red-500 font-semibold mb-5 mt-3">
          BOLETIN
        </h1>
        <h2 className="text-base text-gray-400">Volumen 1 / N°2</h2>
        <h2 className="text-base text-gray-400 mb-1">
          septiembre - diciembre 2023
        </h2>
      </div>
      <p className="text-lg text-gray-800 mb-5 text-justify">
        En la presente publicación, se presenta información acerca del
        Observatorio Natural en la sección En la Lupa de los Observatorio.
        Destaca la actividad que realiza nuestra Prof. Jazmín Salazar, docente
        investigadora quien conjuntamente con su equipo de investigación,
        desarrolla investigación en el habitat de distintas zonas de humedales
        en el país.
      </p>
      <div className="flex">
        <div className="flex-1">
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
            El Observatorio de Innovación educativa, nos presenta un tema
            fundamental para el desarrollo de la Educación en el país, “Realidad
            Virtual: Democratizando el conocimiento a través de la empatía”. La
            Innovación Tecnológica Educativa, es una realidad y el uso de las
            distintas herramientas que se están desarrollando permite abordar el
            dinamismo real que actualmente existe en la sociedad.
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
            El Observatorio de Comportamiento Urbano, presenta sus inquietudes
            en los PDOTS, y la importancia de la Naturaleza en los espacios
            públicos, en las ponencias presentadas en 13er Encuentro de Espacios
            Urbanos, Territorios en los Nuevos Espacios Urbanos, celebrado en
            Chile, (2023) en donde se busca impulsar los espacios Sociales. (La
            Socialización de los espacios)
          </div>
        </div>
        <div className="flex-1">
          <Image
            className="mx-auto rounded-lg"
            src="/img/preview_boletin2.png"
            alt="RIOUC"
            width={480}
            height={175}
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
        Al mismo tiempo, el Observatorio de Fenómenos Socio Económicos presentan
        datos informativos en el tema de Femicidios. Tema de seguimiento y
        actuación de RIOUC. Revelan cifras abrumadoras, que generan
        definitivamente atención y actuación por parte de RIOUC conjuntamente
        con otras universidades y entes públicos.
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
        En el segmento Hablemos de Observatorios, conversamos con el
        Observatorio de la UNAE, en una interesante entrevista donde destaca la
        importancia de los Observatorios y el aporte que se realiza.
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
        En el apartado de Los expertos hablan, entrevistamos al Ing. Santiago
        Moscoso Bernal, quien cuenta con amplia experiencia en temas de
        acreditación y aseguramiento de la calidad en Educación Superior. En la
        entrevista expresa su experiencia y visión acerca de la importancia de
        la calidad y en la cultura que se debe implementar dentro de la IES, más
        allá de una evaluación es un seguimiento continuo de la mejora continua
        dentro de las universidades.
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
