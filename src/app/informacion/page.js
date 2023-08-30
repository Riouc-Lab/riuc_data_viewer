import Image from "next/image";

export default function Informacion() {
  return (
    <div className="bg-white flex flex-col p-6 mx-auto max-w-6xl">
      <h1 className="text-3xl font-bold mb-4">Información de la Página</h1>
      <p className="text-black mb-3">
        Bienvenido a esta página. Aquí encontrarás información importante sobre
        nuestro sitio.
      </p>
      <div className="mb-3 justify-center">
      <Image
          className="mb-3 mx-auto max-w-6xl rounded-lg shadow p-3 mx-auto max-w-6xl justify-center" 
          src="/img/objetivos.jpg"
          alt="Next.js Logo"
          width={600}
          height={30}
          priority
        />
      </div>
      
      <h1 className="text-left font-size mb-3 text-red-500 text-lg mb-3">
        Objetivos del CIITT
      </h1>

      <p className="text-gray-700">
      Ofrecer sus instalaciones a investigadores para que desarrollen su
        actividad científica; fortaleciendo la generación y transferencia del
        conocimiento; para solucionar los problemas de la comunidad y la
        sociedad.
      </p>

      <p className="text-gray-700 mb-1">
        Se lo plantea hacer por medio de:
      </p>
      <h2 className="text-gray-700 mb-1">
        -La transferencia de la tecnología a otros ámbitos académicos,
        productivos y sociales.
      </h2>
      <h2 className="text-gray-700 mb-1">
        -La captación de investigadores nacionales e internacionales.
      </h2>
      <h2 className="text-gray-700 mb-1">
        -La generación de procesos de innovación social, técnica y tecnológica.
      </h2>
      <h2 className="ftext-gray-700 mb-1">
        -El desarrollo científico entre la sociedad civil, empresas e
        instituciones públicas y privadas, nacionales y extranjeras.
      </h2>
      <h2 className="text-gray-700 mb-1">
        -La oferta de los resultados obtenidos a la comunidad y sectores
        productivos.
      </h2>


      <ul className="mt-4">
        <li className="flex items-center">
          <svg
            className="w-5 h-5 text-green-500 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M9 19a1 1 0 01-.707-.293l-6-6a1 1 0 011.414-1.414L9 16.586l9.293-9.293a1 1 0 111.414 1.414l-10 10A1 1 0 019 19z"
              clipRule="evenodd"
            />
          </svg>
          Contenido informativo.
        </li>
        <li className="flex items-center mt-2">
          <svg
            className="w-5 h-5 text-green-500 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M2 3a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm5.293 9.293a1 1 0 011.414 0L10 13.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          Datos relevantes.
        </li>
        <li className="flex items-center mt-2">
          <svg
            className="w-5 h-5 text-green-500 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9a1 1 0 112 0v4a1 1 0 11-2 0V9zm0-4a1 1 0 112 0 1 1 0 01-2 0z"
              clipRule="evenodd"
            />
          </svg>
          Información útil.
        </li>
      </ul>
    </div>
  );
}
