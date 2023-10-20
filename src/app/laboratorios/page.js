import Image from "next/image";

export default function Laboratorios() {
  return (
    <main className="container mx-auto p-4 text-justify">
      <h1 className="text-5xl md:text-2xl font-semibold p-2 mb-7 text-black border-b-2 border-red-400 mt-8">
        LABORATORIO
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
            <p className="ttext-gray-700 mb-4 font-semibold">
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

      <div className="bg-white rounded-lg p-6 mb-5">
        <h2 className="text-xl font-semibold mb-4 text-red-500">
          Fenómeno a Observar (la problemática)
        </h2>
        <p className="text-gray-700 mb-4">
          Dentro de la investigación que se realiza en la RIOUC, se parte de la
          situación o fenómeno que atrae la atención a los investigadores para
          ser observado y estudiado. Generalmente, se presenta desde lo general
          a lo particular, y justifica las inquietudes de investigación. Este
          apartado debe desarrollar la problemática de la forma más clara
          posible, considerando el contexto en que se presenta el fenómeno, el
          sustento teórico y los elementos de la metodología cruciales. Es
          importante, precisar las inquietudes de investigación, los objetivos,
          intencionalidades y la justificación del problema.
        </p>
        <p className="text-gray-700 mb-4">
          De las inquietudes de investigación: Las inquietudes son las preguntas
          que generan la investigación. No deben redactarse de forma que la
          respuesta sea sí o no. En una investigación para la Red de
          Observatorios se recomienda no más de cuatro preguntas investigativas.
        </p>
        <p className="text-gray-700 mb-4">
          De los objetivos/intencionalidades: La denominación de objetivo o
          intencionalidad depende del enfoque investigativo. En el tradicional,
          se denominan objetivos porque parte de la posibilidad de que los
          fenómenos sociales se pueden “objetivizar”, es decir describir desde
          una posición externa, a través de indicadores. En el alternativo se
          habla de intencionalidades, porque parte del supuesto de que el sujeto
          investigador es parte de la investigación, por lo tanto, lo estudia
          desde una posición interna y plantea propósito de la investigación.
        </p>
        <p className="text-gray-700 mb-4">
          Ahora bien, los objetivos/ intencionalidades son las acciones
          investigativas. Se presentan redactados en verbos infinitivos, se
          relacionan con las preguntas de investigación y, no deben colocarse
          más de un verbo por objetivo.
        </p>
      </div>

      <div className="bg-white rounded-lg p-6 mb-5">
        <h2 className="text-xl font-semibold mb-4 text-red-500">
          Portafolio de productos ofertados:
        </h2>
        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>
            Construcción de bases de datos para el seguimiento de variables
            relevantes objeto de estudio.
          </li>
          <li>
            Recopilación, análisis e interpretación de información relevante
            para el conocimiento de un mercado.
          </li>
          <li>
            Seguimiento a producto/servicio en un sector de actividad
            determinado.
          </li>
          <li>
            Diseño sistemático de recogida de información, que garantice la
            comparabilidad de los indicadores obtenidos en distintas épocas.
          </li>
          <li>
            Minería de datos para predecir resultados mediante el hallazgo de
            patrones y correlaciones en grandes conjuntos de datos.
          </li>
          <li>
            Seguimiento del comportamiento del consumidor para determinar la
            aceptación de un producto o servicio.
          </li>
          <li>
            Seguimiento del mercado y sistematización de las variables más
            relevantes.
          </li>
          <li>
            Data mining para el tratamiento de grandes bases de datos que
            permitan captar patrones de manera automática.
          </li>
          <li>
            Modelos de fijación de precios dinámica, basada en la demanda y la
            oferta de un producto/servicio que utilicen aprendizaje automático.
          </li>
          <li>
            Modelos de seguimiento de comportamiento del consumidor, para
            deteccion de ofertas de productos.
          </li>
          <li>Seguimiento al Indice de Precios al Consumidor.</li>
          <li>Estudios de marcas y posicionamiento de productos.</li>
          <li>
            Algoritmos que utilizan la realidad aumentada para prueba nuevos
            productos.
          </li>
          <li>
            Estudios de selección de personal utilizando técnicas Fuzzy-logic.
          </li>
        </ul>
      </div>
    </main>
  );
}
