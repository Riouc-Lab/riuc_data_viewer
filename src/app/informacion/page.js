import Image from "next/image";

export default function Informacion() {
  return (
    <div className="bg-white flex flex-col p-6 mx-auto max-w-6xl">
      <h1 className="text-3xl font-bold text-center mb-6">
          Información de la Página
        </h1>
      <p className="text-black mb-3">
        Bienvenido a esta página. Aquí encontrarás información importante sobre
        nuestro sitio.
      </p>
      <div className="mb-3 justify-center">
      <Image
            className="mb-3 mx-auto max-w-6xl rounded-lg shadow p-3 mx-auto max-w-6xl justify-center rounded-lg shadow-lg"
            src="/img/objetivos.jpg"
            alt="Objetivos del CIITT"
            width={600}
            height={400}
            priority
          />
      </div>
      
      <h2 className="text-2xl font-semibold text-red-500 mb-3">
          Objetivos del CIITT
        </h2>

      <p className="text-gray-700">
      Ofrecer sus instalaciones a investigadores para que desarrollen su
        actividad científica; fortaleciendo la generación y transferencia del
        conocimiento; para solucionar los problemas de la comunidad y la
        sociedad.
      </p>

      <p className="text-gray-700 mb-1">
        Se lo plantea hacer por medio de:
      </p>
      <li className="text-gray-700 mb-1">
        La transferencia de la tecnología a otros ámbitos académicos,
        productivos y sociales.
      </li>
      <li className="text-gray-700 mb-1">
        La captación de investigadores nacionales e internacionales.
      </li>
      <li className="text-gray-700 mb-1">
        La generación de procesos de innovación social, técnica y tecnológica.
      </li>
      <li className="ftext-gray-700 mb-1">
        El desarrollo científico entre la sociedad civil, empresas e
        instituciones públicas y privadas, nacionales y extranjeras.
      </li>
      <li className="text-gray-700 mb-5">
        La oferta de los resultados obtenidos a la comunidad y sectores
        productivos.
      </li>

        <ul className="list-disc ml-6">
          <li className="text-green-500 mb-2">
            Contenido informativo.
          </li>
          <li className="text-green-500 mb-2">
            Datos relevantes.
          </li>
          <li className="text-green-500">
            Información útil.
          </li>
        </ul>
    </div>
  );
}
