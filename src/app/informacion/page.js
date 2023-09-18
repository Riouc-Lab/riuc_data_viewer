"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Informacion() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const restartVideo = () => {
      if (video.currentTime >= 7) {
        video.currentTime = 0;
      }
    };

    const interval = setInterval(restartVideo, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white p-6 mx-auto max-w-7xl font-serif">
      <h1 className="text-4xl uppercase font-semibold text-red-500 mb-8 text-center">¿Qué es la RIOUC?</h1>
      <div className="mb-10 text-center">
        <Image
          className="mx-auto"
          src="/img/riouc_centro.png"
          alt="RIOUC"
          width={360}
          height={180}
        />
      </div>

      <p className="text-lg text-gray-800 mb-6 text-justify">
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

      <p className="text-lg text-gray-800 mb-10 text-justify">
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

      <p className="text-lg text-blue-400 mb-6 text-justify pl-4 border-l-4 border-blue-500">
        Cuando se menciona la palabra Observatorio, se evoca aquellas complejas
        instalaciones ubicadas en las montañas, dotadas de potentes telescopios
        para escudriñar el universo, Prieto (2003).
      </p>

      <p className="text-lg text-gray-800 mb-6 text-justify">
        El primer paso del proceso investigativo es precisamente la observación,
        detectar un fenómeno que genera inquietud en el investigador, que se
        desea estudiarlo y en donde el investigador se plantea preguntas de tal
        manera que inicia el proceso de indagación acerca del tema.
      </p>

      <p className="text-lg text-gray-800 mb-6 text-justify">
        Como característica se puede decir que es fundamental realizar
        seguimiento a la información recolectada y explicar el fenómeno de
        estudio a través del análisis de datos son elementos que acompañan al
        Observatorio.
      </p>

      <p className="text-lg text-gray-800 mb-6 text-justify">
        Hoy en día existen herramientas que facilitan esa recolección de
        información, almacenarla y procesarla, para de esta manera poder
        realizar un monitoreo del comportamiento de las variables en
        observación.
      </p>

      <p className="text-lg text-gray-800 mb-10 text-justify">
        Dentro de las funciones de un observatorio, es precisamente la de
        presentar la información de manera clara, coherente y accesible, de tal
        manera que el usuario de la información pueda leerla y entenderla
        fácilmente, de tal forma que no sea confundida con la información
        publicada en las revistas científicas.
      </p>

      {/* Otras secciones de información aquí... */}

      <h2 className="text-2xl font-semibold text-red-500 mb-2">
        ¿Qué hacemos en la RIOUC?
      </h2>
      <div className="flex justify-center mb-2">
        <video
          autoPlay
          loop
          muted
          controls={false}
          style={{ maxWidth: "100%" }}
          className="rounded-lg"
          ref={videoRef}
        >
          <source src="/video/riouc.mp4" type="video/mp4" />
          Tu navegador no admite la reproducción de video.
        </video>
      </div>

      <p className="text-lg text-gray-800 mb-6 text-justify">
        Partiendo de que diversas instituciones y estudiosos del tema (Angulo,
        2009; Husillos, 2006;Urdapilleta, 2006) conciben al observatorio como un
        centro interdisciplinario, humanista, científico y cultural de
        pensamiento, dedicado al estudio, reflexión, gestión y divulgación de la
        información y convertirla en conocimiento útil sobre el conjunto de
        fenómenos observados de interés particular que, contribuye con mayor
        racionalidad al debate y explicación de dichos fenómenos, surge el apoyo
        a construir la visión de RIOUC.
      </p>

      <p className="text-lg text-gray-800 mb-6 text-justify">
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

      <p className="text-lg text-gray-800 mb-6 text-justify">
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

      <p className="text-lg text-gray-800 mb-10 text-justify">
        Para el Gobierno Vasco (2008), la misión de un observatorio es vigilar y
        detectar lo que ocurre en su ámbito de actuación, y su valor agregado se
        sustenta en: 1) buscar la información, 2) discernir su relevancia, 3)
        organizarla de modo coherente y 4) presentarla de forma clara. De igual
        manera, el uso de las TIC, para la presentación de los datos e
        información generada por los observatorios, en un portal web es una
        manera de realizar seguimiento y evaluación de los temas que se
        observan. (Phelan, 2007).
      </p>

      <h2 className="text-2xl font-semibold text-red-500 mb-6">
        ¿Cómo lo hacemos?
      </h2>

      <p className="text-lg text-gray-800 mb-6 text-justify">
        Las redes académicas se posicionan cada vez más en la educación
        superior, articulando instituciones de diferente naturaleza, tanto del
        orden nacional como internacional para la producción del conocimiento.
        Estas redes contribuyen en la detección de las necesidades y en la
        construcción de programas que desarrollan la gestión del conocimiento.
        Cada día se reconocen más cambios en la llamada sociedad del
        conocimiento. Aparecen, por ejemplo, poderosos sistemas de información
        en tiempo real, educación totalmente en línea o comunicaciones móviles
        para asistir necesidades familiares, laborales, de salud, educativas. En
        educación superior las comunidades temáticas, las asociaciones,
        consorcios y alianzas interinstitucionales asumen retos académicos que
        van desde la conformación de comunidades universitarias de expertos en
        torno al fortalecimiento de un programa académico de pregrado o
        posgrado, hasta la reunión y los acuerdos de investigación e innovación
        entre instituciones de diversos sectores. Este es el caso del trabajo
        colaborativo entre entidades académicas, empresas/ industria y sociedad,
        para lograr soluciones ambientales, de salud, tecnológicas,
        comunicacionales, en fin, acciones que conlleven al desarrollo
        territorial.
      </p>

      <p className="text-lg text-gray-800 mb-6 text-justify">
        Es precisamente este trabajo colaborativo, que impulsa y desarrolla el
        trabajo en equipo, promueva estas nuevas formas de organización y
        trabajo académico que obedecen, entre otras razones, al desarrollo de
        las nuevas tecnologías de la información y de la comunicación, las que
        han dado paso a la desmaterialización del trabajo y al lenguaje de la
        informática, abriendo la posibilidad para que organizaciones o
        individuos conectados interactúen en red a través de medios
        electrónicos. Sin embargo, en tanto redes sociales, estas organizaciones
        han existido de forma permanentemente en la historia humana. Es por ello
        la importancia de la interdisciplinariedad y transdisciplinariedad que
        aportan en el desarrollo de la investigación que tributan de manera
        positiva en sus diferentes aristas en la investigación.
      </p>

      <div className="mb-10 text-center">
        <Image
          className="mx-auto rounded-lg"
          src="/img/info_1.png"
          alt="RIOUC"
          width={650}
          height={475}
        />
      </div>

      <h2 className="text-2xl font-semibold text-red-500 mb-6">
        ¿Quiénes somos?
      </h2>

      <p className="text-lg text-blue-400 mb-6 text-justify pl-4 border-l-4 border-blue-500">
        Somos una red compuesta por 7 observatorios que asumen distintos temas a
        observar. Como ya se ha mencionado anteriormente, somos un equipo
        multidisciplinario.
      </p>

      <div className="flex justify-center mb-6">
        <div className="w-5/6 p-2">
          <Image
            className="mx-auto"
            src="/img/phd.png"
            alt="Imagen 1"
            width={310}
            height={160}
          />
          <h1 className="text-center font-semibold p-3 mb-2 bg-gradient-to-r from-black to-black bg-clip-text text-transparent border-b-2 border-red-400 w-2/4 mx-auto">
            Jaime Tinto Arandes Ph.D
          </h1>
        </div>
        <div className="w-5/6 p-2">
          <Image
            className="mx-auto"
            src="/img/ing.png"
            alt="Imagen 2"
            width={310}
            height={160}
          />
          <h1 className="text-center font-semibold p-3 mb-2 bg-gradient-to-r from-black to-black bg-clip-text text-transparent border-b-2 border-red-400 w-2/4 mx-auto">
            Ing. Marcos Lenín Villarreal
          </h1>
        </div>
      </div>

      <p className="text-lg text-gray-800 mb-6 text-justify"></p>

      <p className="text-lg text-gray-800 mb-6 text-justify">
        El Coordinador de la RIOUC es Jaime Tinto Arandes Ph.D; quien es
        Economista Universidad de Los Andes-Venezuela, Especialista en Técnicas
        de Muestreo CIENES-Chile, Postgrado en Ciencias Empresariales
        Universitat de Barcelona-España, Doctor en Ciencias Económicas y
        Empresariales Universitat de Barcelona España.
      </p>

      <p className="text-lg text-gray-800 mb-6 text-justify">
        Tiene una amplia trayectoria en el ámbito universitario, en docencia,
        investigación y gestión, destacándose en todos esos ámbitos.
      </p>

      <p className="text-lg text-gray-800 mb-6 text-justify">
        Forma parte del equipo el Ing. Marcos Lenín Villarreal Esquivel,
        responsable del diseño y estructuración de las bases de datos e
        información recolectada dentro de la RIOUC.
      </p>

      <p className="text-lg text-gray-800 mb-10 text-justify">
        La RIOUC cuenta con el apoyo permanente del Laboratorio de Calculo
        Computacional y Analítica de Datos ubicado en el CIITT, coordinado por
        Orlando Álvarez Llamoza PhD, quienes contribuyen en el análisis y
        almacenamiento de la información.
      </p>

      <h2 className="text-2xl font-semibold text-red-500 mb-6">
        Observatorio Fenómenos Socioeconómicos
      </h2>

      <p className="text-lg text-blue-400 mb-6 text-justify pl-4 border-l-4 border-blue-500">
        El observatorio de fenómenos socioeconómicos tiene interés en comprender
        el comportamiento de los individuos con su entorno en sus distintas
        dimensiones en ámbito social y económico.
      </p>

      <div className="mb-10 text-center">
        <Image
          className="mx-auto rounded-lg"
          src="/img/lic.png"
          alt="RIOUC"
          width={450}
          height={225}
        />
        <h1 className="text-center font-semibold p-3 mb-2 bg-gradient-to-r from-black to-black bg-clip-text text-transparent border-b-2 border-red-400 w-2/4 mx-auto">
          Lic. María Emilia Molina de Tinto
        </h1>
      </div>

      <p className="text-lg text-gray-800 mb-6 text-justify">
        Este Observatorio busca recopilar, monitorear información acerca de
        temas como: el empleo, consumo, migraciones, emprendimientos, con la
        finalidad de entender el comportamiento de las variables que inciden en
        dichos fenómenos, y de esta manera poder explicarlos.
      </p>

      <p className="text-lg text-gray-800 mb-6 text-justify">
        La responsable del Observatorio es María Emilia Molina de Tinto, Lic. en
        Administración de Empresas–Universidad de Los Andes, Venezuela.
        Especialista en Gestión de Proyectos Barcelona Activa- España y
        Logística Integral Universitat Politécnica de Catalunya-España, MSc en
        Ciencia Contable Universidad de Los Andes-Venezuela, MSc. en Gestión del
        Bienestar Organizacional- Universidad Nebrija-España. Actualmente es
        Doctorando en Ciencia Contable
      </p>

      <p className="text-lg text-gray-800 mb-6 text-justify">
        Su inquietud en el ámbito de la observación se basa en el comportamiento
        del empleo y consumo.
      </p>

      <h2 className="text-2xl font-semibold text-black mb-6">
        Proyecto de investigación
      </h2>

      <p className="text-lg text-gray-800 mb-6 text-justify">
        El impacto del teletrabajo, estructuración de base de datos
        empresariales para el comportamiento mipyme, estructuración de bases
        informativas para el área de Derecho y Bienestar Social.
      </p>

      <p className="text-lg text-gray-800 mb-6 text-justify">
        También participa en colaboración en los proyectos: Modelos de gestión
        universitaria, Modelo Dinámico cognitivo teórico entre las variables que
        inciden en la difusión del rumor, Aplicaciones interdisciplinarias de
        sistemas complejos en la gestión integrada de cuencas hidrográficas en
        los altos Andes del Macizo del Cajas.
      </p>

      <p className="text-lg text-gray-800 mb-6 text-justify">
        Proyectos en colaboración con instituciones: Ministerio del Ambiente,
        Agua, Energía y Tecnología (MAAET), Proyecto” Mi Barrio Verde”.
        Universidad Politécnica Salesiana: Estructuración de plataforma
        tecnológica para las necesidades MiPymes.
      </p>
    </div>
  );
}
