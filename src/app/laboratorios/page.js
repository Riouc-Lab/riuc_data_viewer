import Image from "next/image";

export default function Laboratorios() {
  return (
    <main className="container mx-auto p-4 text-justify font-serif">
      <h1 className="text-5xl md:text-5xl font-extrabold p-5 mb-7 text-black border-b-2 border-red-400 mt-8">
        LABORATORIOS
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-5">
        {/* Laboratorio 1 */}
        <div className="bg-white rounded-lg p-6">
          <div className="flex">
            <Image
              src="/img/riouc_centro.png"
              alt="Icono"
              width={600}
              height={600} // Ajusta la altura según tus necesidades
              className="w-7 h-7 mr-2"
            />
            <h2 className="text-xl font-semibold mb-1 text-red-500">RIOUC</h2>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Red de Investigación y de Observatorios Universidad Católica de
            Cuenca.
          </p>
          <p className="text-gray-700 mb-4">
            Es un espacio interdisciplinario encargado de recolectar, organizar,
            procesar y evaluar sistemáticamente información, difundiendo a la
            comunidad científica, empresarial y social, los indicadores de
            relevancia en la región.
          </p>
          <p className="text-gray-700 mb-4 font-semibold">
            Áreas de conocimiento:
          </p>
          <div className="ml-6 text-gray-700 mb-4">
            <div className="flex items-center mb-1">
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
              Ciencias Económicas, Sociales y Empresariales.
            </div>

            <div className="flex items-center mb-1">
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
              Ciencias de la Salud.
            </div>
            <div className="flex items-center mb-1">
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
              Ciencias de la Educación.
            </div>

            <div className="flex items-center mb-1">
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
              Ciencias de la Ingeniería Arquitectura, Urbanismo.
            </div>

            <div className="flex items-center mb-1">
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
              Ciencias Naturales.
            </div>
          </div>

          <div className="mb-8">
            <p className="text-gray-700 font-semibold text-lg mb-4">
              En este espacio se trabaja en:
            </p>
            <ul className="list-disc ml-6 text-gray-700 mb-4 space-y-2">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-500 mr-2"
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
                Generación de cátedras libres.
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-500 mr-2"
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
                Formación de los profesionales en las diversas áreas del
                conocimiento.
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-500 mr-2"
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
                Construcción de indicadores que permitan una mejor toma de
                decisiones.
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-500 mr-2"
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
                Generar redes de colaboración a lo interno y con otros
                observatorios o entes institucionales.
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-500 mr-2"
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
                Desarrollo de programas para apoyar decisiones estratégicas en
                la solución de problemáticas regionales.
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-500 mr-2"
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
                Construir y gestionar bases de datos que permitan sistematizar
                el proceso del monitoreo de la información recopilada.
              </li>
            </ul>
          </div>
        </div>

        {/* Imagen para Laboratorio 1 */}
        <div className="h-64 lg:h-auto">
          <Image
            src="/img/RIOUC.jpg"
            alt="RIOUC Logo"
            layout="responsive" //IMPORTANTE PARA MAP
            width={705}
            height={470} // Ajusta la altura según tus necesidades
            objectFit="cover"
            className="rounded-lg mt-16"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Laboratorio 2 */}
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2 text-red-500">C2MAD</h2>
          <p className="text-sm text-gray-600 mb-4">
            Laboratorio de Cálculo Computacional, Modelado y Analítica de Datos.
          </p>
          <p className="text-gray-700 mb-4">
            Contribuye al avance científico y tecnológico de la institución, la
            región y el país, produciendo, aplicando y difundiendo conocimiento
            científico y tecnológico a través del desarrollo de programas y
            proyectos de investigación, innovación y vinculación con la sociedad
            que utilicen la computación científica, la simulación y la ciencia
            de datos.
          </p>
          <p className="text-gray-700 font-semibold mb-4">
            En este laboratorio se trabajan:
          </p>
          <ul className="list-disc ml-6 text-gray-700 mb-4 space-y-2">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-500 mr-2"
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
                Construcción de modelos matemáticos para resolver problemas
              relacionados a fenómenos sociales, naturales y antrópicos.
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-500 mr-2"
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
                Manejo y procesamiento de grandes volúmenes de datos a través del
              “Data Mining” y técnicas de inteligencia artificial.
              </li>
              </ul>
         
          <p className="text-gray-700 font-semibold mb-4">
            Equipos disponibles:
          </p>
          <div className="ml-6 text-gray-700 mb-4">
            <div className="flex items-center mb-1">
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
              Servidor DELL PowerEdge R6525.
            </div>

            <div className="flex items-center mb-1">
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
              10 estaciones de trabajo thin client clear cube.
            </div>
            <div className="flex items-center mb-1">
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
              Dell Power Vault ME5012.
            </div>

            <div className="flex items-center mb-1">
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
              Drone Matrice 300 RTK.
            </div>

            <div className="flex items-center mb-1">
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
              Cámara Multiespectral MicaSense Altum PT.
            </div>
          </div>
        </div>

        {/* Imagen para Laboratorio 2 */}
        <div className="h-64 lg:h-auto">
          <Image
            src="/img/C2MAD.jpg"
            alt="RIOUC Logo"
            layout="responsive" //IMPORTANTE PARA MAP
            width={705}
            height={470} // Ajusta la altura según tus necesidades
            objectFit="cover"
            className="rounded-lg mt-14"
          />
        </div>
      </div>

      {/* ... (otros laboratorios) */}

      <div className="bg-white rounded-lg p-6 mb-5">
        <h2 className="text-xl font-semibold mb-4 text-red-500">Proyectos</h2>
        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>
            Delizamientos: Caracterización de sus variables morfológicas y
            ambientales. Aprobado en la Convocatoria Institucional de Proyectos
            CIITT 2019-2020.
          </li>
          <li>
            Modelo de Gestión Académica en la Universidad desde la perspectiva
            de las 4A bajo el enfoque de Redes Complejas y Sistemas Difusos.
            Proyecto en colaboración con la Red de investigación y Observatorios
            de la Universidad Católica de Cuenca (RIOUC).
          </li>
          <li>
            Desarrollo y aplicaciones de recursos computacionales en
            Sociofísica. Proyecto aprobado en el Concurso Ecuatoriano de
            Proyectos CEPRA XVI, de la Corporación Ecuatoriana para el
            Desarrollo de la Investigación y la Academia CEDIA.
          </li>
          <li>
            Efectos de los factores bióticos y abióticos en las redes de
            polinización en los altos Andes del macizo del Cajas. Proyecto
            aprobado en la Convocatoria Institucional de Proyectos CIITT
            2019-2020.
          </li>
          <li>
            El plan de ordenamiento urbano 2014 en la ciudad de cuenca: impacto
            en la morfología de las áreas periféricas de expansión urbana.
            Aprobado en la Convocatoria Institucional de Proyectos CIITT
            2019-2020.
          </li>
          <li>
            Estados quiméricos en dinámica neuronal. Proyecto en colaboración
            con la Universidad de Yachay Tech. Aprobado por la Vicecancillería
            de Investigación e Innovación de la Yachay Tech.
          </li>
          <li>
            Estudio de la estructura Espacio–Temporal de redes complejas: La
            polinización y la dispersión de semillas fundamentales servicios
            ecosistémicos. Aprobado en la Convocatoria Institucional de
            Proyectos de Investigación de Fortalecimiento de los Objetivos de
            Desarrollo Sostenible.
          </li>
        </ul>
      </div>
    </main>
  );
}
