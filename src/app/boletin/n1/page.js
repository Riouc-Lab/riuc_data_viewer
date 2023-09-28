"use client";

export default function boletinn1() {
  const abrirPDF = () => {
    // Reemplaza 'nombre-del-archivo.pdf' con el nombre real de tu archivo PDF
    const pdfUrl = "/pdf/REVISTA.pdf";
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className="bg-white p-6 mx-auto max-w-7xl font-serif ">
      <div className="bg-white p-6 mx-auto max-w-7xl font-serif">
        <h1 className="text-6xl text-red-500 font-extrabold mb-5 mt-8">
          BOLETIN
        </h1>
        <h2 className="text-base font-medium text-gray-400 mb-1">
          enero - abril 2023
        </h2>
      </div>
      <p className="text-lg text-gray-800 mb-5 text-justify">
        El presente boletín “La RIOUC Informa” es una publicación semestral en
        la que presentamos las principales estadísticas de datos producto de
        nuestras investigaciones, conformadas por siete observatorios que hacen
        vida en la Universidad Católica de Cuenca. Este boletín está conformado
        por cuatro secciones:
      </p>
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
        La primera denominada, Bajo la lupa de los observatorios, presenta en
        qué consiste cada observatorio, quienes son los responsables, qué
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
        presentar la opinión de investigadores en diferentes áreas de la ciencia
        haciendo énfasis en sus respectivas especialidades de investigación.
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
        investigaciones, así como mostrar las bases de datos que se manejan con
        información de calidad.
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
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          onClick={abrirPDF}
        >
          Abrir Boletin
        </button>
      </div>
    </div>
  );
}
