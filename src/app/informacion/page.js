import Image from "next/image";

export default function Informacion() {
  return (
    <div className="bg-white container mx-auto p-4">
      <h1 className="md:text-2xl font-semibold p-2 text-black border-b-2 border-red-400 mt-8 ">
        INFORMACIÓN
      </h1>
      <h1 className="text-5xl text-red-500 font-semibold mb-6 mt-12">RIOUC</h1>

      <p className="text-lg text-gray-800 mb-6">
        La idea de crear la Red de Investigación y Observatorios de la
        Universidad Católica de Cuenca nace por iniciativa del Sr. Rector Dr.
        Enrique Pozo Cabrera PhD a raíz de la consolidación del quehacer
        educativo y el acervo cognitivo de cada una de las Unidades Académicas
        que conforman la comunidad universitaria desde la creación misma de la
        Universidad. Este trabajo invisible y arduo que tuvo la Universidad
        Católica de Cuenca desde su fundación el 7 de septiembre de 1970 hasta
        la actualidad ha permitido formar en sus aulas, estudiantes con visión
        de innovación, con conciencia social y empoderamiento por los problemas
        de su entorno.
      </p>
      <div className="mb-8 text-center">
        <Image
          className="mx-auto"
          src="/img/FINAL_LOGO.jpg"
          alt="RIOUC"
          width={480}
          height={170}
        />
      </div>
      <p className="text-lg text-gray-800 mb-10">
        En la visión del Sr. Rector, estaba la necesidad de creación de un
        Observatorio de Fenómenos Socioeconómicos, inquietud manifestada en
        conversación con el Coordinador del Centro de Investigación de Ciencias
        Sociales y Empresariales Econ. Jaime Tinto PhD. Más tarde juntos prevén
        la necesidad de conformar una Red de Observatorios que involucre a todos
        los posibles Observatorios como un aporte a la investigación desde la
        inquietud de los docentes investigadores que participan en el proyecto.
        Fue entonces, que a través del Vicerrectorado de
        Investigación/Innovación, Vinculación y Posgrados se conforma un equipo
        multidisciplinario con la orientación del Dr. Tinto, la MSc. María
        Emilia Molina y el Sr. Vicerrector de Investigación para generar el
        proyecto de RIOUC. Se incorpora al equipo a la Ing. Aura Guerrero
        Luzuriaga MSc. para avanzar en el proyecto.
      </p>

      {/* Otras secciones de información aquí... */}

      <h2 className="text-2xl font-semibold text-red-500 mb-6">
        ¿Qué hace un observatorio?
      </h2>

      <p className="text-lg text-gray-500 text-opacity-80 font-bold mb-10 text-justify pl-4 border-l-4 border-gray-500">
        Cuando se menciona la palabra Observatorio, se evoca aquellas complejas
        instalaciones ubicadas en las montañas, dotadas de potentes telescopios
        para escudriñar el universo, Prieto (2003).
      </p>

      <p className="text-lg text-gray-800 mb-6">
        El primer paso del proceso investigativo es precisamente la observación,
        detectar un fenómeno que genera inquietud en el investigador, que se
        desea estudiarlo y en donde el investigador se plantea preguntas de tal
        manera que inicia el proceso de indagación acerca del tema.
      </p>

      <p className="text-lg text-gray-800 mb-6">
        Como característica se puede decir que es fundamental realizar
        seguimiento a la información recolectada y explicar el fenómeno de
        estudio a través del análisis de datos son elementos que acompañan al
        Observatorio.
      </p>

      <p className="text-lg text-gray-800 mb-6">
        Hoy en día existen herramientas que facilitan esa recolección de
        información, almacenarla y procesarla, para de esta manera poder
        realizar un monitoreo del comportamiento de las variables en
        observación.
      </p>

      <p className="text-lg text-gray-800 mb-10">
        Dentro de las funciones de un observatorio, es precisamente la de
        presentar la información de manera clara, coherente y accesible, de tal
        manera que el usuario de la información pueda leerla y entenderla
        fácilmente, de tal forma que no sea confundida con la información
        publicada en las revistas científicas.
      </p>

      {/* Otras secciones de información aquí... */}

      <h2 className="text-2xl font-semibold text-red-500 mb-6">
        ¿Qué hacemos en la RIOUC?
      </h2>
      <p className="text-lg text-gray-800 mb-6">
        Partiendo de que diversas instituciones y estudiosos del tema (Angulo,
        2009; Husillos, 2006;Urdapilleta, 2006) conciben al observatorio como un
        centro interdisciplinario, humanista, científico y cultural de
        pensamiento, dedicado al estudio, reflexión, gestión y divulgación de la
        información y convertirla en conocimiento útil sobre el conjunto de
        fenómenos observados de interés particular que, contribuye con mayor
        racionalidad al debate y explicación de dichos fenómenos, surge el apoyo
        a construir la visión de RIOUC.
      </p>

      <p className="text-lg text-gray-800 mb-6">
        De ahí que la misión del observatorio trasciende no solo al propósito de
        recopilar información, ya que incorpora la intención de interpretar
        fenómenos actuales, analizar 4 Revista Boletín la información generada,
        definir y evaluar indicadores para estudiar el comportamiento de las
        variables que los constituyen y así caracterizar dichos fenómenos, a fin
        de tomar decisiones y orientar las políticas de intervención. En efecto,
        la relación entre observación sistemática, análisis y acción es,
        indudablemente, una característica esencial de los observatorios,
        conocida como “información para la acción” (Superintendencia Nacional de
        Salud, 2007, s/p); entendida como expresión de la misión que le compete
        según el área de estudio: a) recopilar, tratar y difundir
        sistemáticamente la información, b) conocer mejor la temática en
        cuestión, y c) promover la reflexión y el intercambio del conocimiento
        en red y definir acciones que intervienen en la toma de decisiones
        (Husillos, 2006).
      </p>

      <p className="text-lg text-gray-800 mb-6">
        En consecuencia, tomando en consideración la misión que cumplen las
        Redes de Investigación y los Observatorios como una herramienta de
        conocimiento, se propone en la Universidad Católica de Cuenca, la
        creación de la Red de Investigación y de Observatorios, como un espacio
        interdisciplinario encargado de recolectar, organizar, procesar y
        evaluar sistemáticamente información, difundiendo a la comunidad
        científica, empresarial y social, los indicadores sobre fenómenos de
        relevancia en la región, con el fin de identificar y monitorear las
        variables notables que permitan explicar problemas; así como, proponer
        políticas, planes y estrategias que faciliten la toma de decisiones a
        nivel gubernamental, empresarial y/o académico, que aporten soluciones y
        nuevos conocimientos que garanticen en la región el desarrollo e
        innovación en ciencia y tecnología, fortaleciendo la producción
        científica a todo nivel institucional, impulsado a través de la Redes de
        Investigación.
      </p>

      <p className="text-lg text-gray-800 mb-10">
        Para el Gobierno Vasco (2008), la misión de un observatorio es vigilar y
        detectar lo que ocurre en su ámbito de actuación, y su valor agregado se
        sustenta en: 1) buscar la información, 2) discernir su relevancia, 3)
        organizarla de modo coherente y 4) presentarla de forma clara. De igual
        manera, el uso de las TIC, para la presentación de los datos e
        información generada por los observatorios, en un portal web es una
        manera de realizar seguimiento y evaluación de los temas que se
        observan. (Phelan, 2007).
      </p>

      <div className="bg-white mx-auto max-w-8xl font-serif flex flex-wrap">
        <h2 className="text-2xl font-semibold text-red-500 mb-6 w-full">
          ¿Cómo lo hacemos?
        </h2>

        <div className="w-full md:w-2/4 mb-6 text-lg text-gray-800 pr-5">
          Las redes académicas se posicionan cada vez más en la educación
          superior, articulando instituciones de diferente naturaleza, tanto del
          orden nacional como internacional para la producción del conocimiento.
          Estas redes contribuyen en la detección de las necesidades y en la
          construcción de programas que desarrollan la gestión del conocimiento.
          Cada día se reconocen más cambios en la llamada sociedad del
          conocimiento. Aparecen, por ejemplo, poderosos sistemas de información
          en tiempo real, educación totalmente en línea o comunicaciones móviles
          para asistir necesidades familiares, laborales, de salud, educativas.
          En educación superior las comunidades temáticas, las asociaciones,
          consorcios y alianzas interinstitucionales asumen retos académicos que
          van desde la conformación de comunidades universitarias de expertos en
          torno al fortalecimiento de un programa académico de pregrado o
          posgrado, hasta la reunión y los acuerdos de investigación e
          innovación entre instituciones de diversos sectores.
        </div>

        <div className="w-full md:w-2/4 mt-1 p-2 text-center">
          <Image
            className="mx-auto rounded-lg"
            src="/img/info_1.png"
            alt="RIOUC"
            width={480}
            height={280}
          />
        </div>
        <p className="text-lg text-gray-800 mb-16">
          Este es el caso del trabajo colaborativo entre entidades académicas,
          empresas/ industria y sociedad, para lograr soluciones ambientales, de
          salud, tecnológicas, comunicacionales, en fin, acciones que conlleven
          al desarrollo territorial. Es precisamente este trabajo colaborativo,
          que impulsa y desarrolla el trabajo en equipo, promueva estas nuevas
          formas de organización y trabajo académico que obedecen, entre otras
          razones, al desarrollo de las nuevas tecnologías de la información y
          de la comunicación, las que han dado paso a la desmaterialización del
          trabajo y al lenguaje de la informática, abriendo la posibilidad para
          que organizaciones o individuos conectados interactúen en red a través
          de medios electrónicos. Sin embargo, en tanto redes sociales, estas
          organizaciones han existido de forma permanentemente en la historia
          humana. Es por ello la importancia de la interdisciplinariedad y
          transdisciplinariedad que aportan en el desarrollo de la investigación
          que tributan de manera positiva en sus diferentes aristas en la
          investigación.
        </p>
      </div>
    </div>
  );
}
