'use client'
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Informacion() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    // Función para reiniciar el video después de 4 segundos
    const restartVideo = () => {
      if (video.currentTime >= 7) {
        video.currentTime = 0;
      }
    };

    // Configurar un intervalo para verificar el tiempo actual del video
    const interval = setInterval(restartVideo, 100); // Verificar cada 100 milisegundos

    // Detener el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="bg-white flex flex-col p-6 mx-auto max-w-6xl">
      <h1 className="text-3xl font-bold text-center mb-6">¿Qué es la RIOUC?</h1>
      <div className="justify-center mb-3">
        <Image
          className="mb-3 mx-auto justify-center"
          src="/img/riouc_centro.png"
          alt="RIOUC"
          width={300}
          height={150}
        />
      </div>  
      
      <p className="text-black mb-5 text-justify">
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

      <p className="text-black mb-5 text-justify">
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

      <p className="text-black mb-5 text-justify">
        El proyecto que se diseña con una visión sistémica de investigación la
        cual consiste en brindar solución a problemas de la comunidad y cubrir
        la demanda que genera la comunidad, empresa e instituciones públicas,
        desde la formación en investigación formativa hasta el desarrollo de
        proyectos de investigación. Para ello, primero se planificó un plan de
        formación, para los integrantes de los distintos Observatorios con la
        finalidad de orientar la visión de lo que significa un Observatorio. En
        el plan de formación participo el Dr. Jaime Tinto, Gorka Moreno Phd,
        Coordinador de Observatorios de Migraciones de la Universidad del País
        Vasco-España, Mauricio Alarcón, director ejecutivo de Fundación
        Ciudadanía y Desarrollo-Ecuador, Norka Viloria, PhD Experta Metodóloga,
        Universidad de Los Andes-Venezuela, la Dra. Mayda Hocevar, Observatorio
        de Derechos Humanos Universidad de Los Andes, Venezuela.
      </p>

      <p className="text-black mb-5 text-justify">
        En este sentido, se determinó que una de las maneras de articular es a
        través de la observación, donde el investigador detecta un fenómeno de
        estudio, y desarrolla el proceso investigativo. En este contexto, la
        Universidad identificó la necesidad de crear espacios para el
        levantamiento, validación, manejo, análisis y divulgación de
        información, la cual permitirá identificar fenómenos de estudio en
        diferentes áreas de conocimiento, con la finalidad de reconocerlos,
        estudiarlos, analizarlos y plasmarlos en indicadores que muestren de
        manera específica, observable y medible los cambios y progresos que
        éstas muestran.
      </p>

      <p className="text-black mb-5 text-justify">
        Igualmente, una forma de articular todos estos elementos es a través de
        Redes de Investigación que generen proyectos de investigación que den
        sostenibilidad a la extracción de esta información, su tratamiento y
        análisis, para luego canalizarlos en los diferentes Observatorios para
        que sean socializados y puestos al servicio de la sociedad en general,
        con la finalidad de que soporten futuras investigaciones, que permitan a
        los diferentes actores gubernamentales y sociales tomar decisiones
        basadas en información fidedigna para explicar los diferentes fenómenos
        actuales. Por lo tanto, el desarrollo científico, tecnológico y de
        innovación son pilares del desarrollo sostenible, que hoy en día son
        fundamentales.
      </p>

      <p className="text-black mb-5 text-justify">
        Es por ello que la Red de Investigación y de Observatorios (RIOUC), se
        ha concebido como un espacio interdisciplinario encargado de recolectar,
        organizar, procesar y evaluar sistemáticamente información, difundiendo
        a la comunidad científica, empresarial y social, los indicadores sobre
        fenómenos de relevancia en la región, con el fin de identificar y
        monitorear las variables notables que permitan explicar problemas; para
        así, proponer políticas, planes y estrategias que faciliten la toma de
        decisiones a nivel gubernamental, empresarial y/o académico, de tal
        manera que aporten soluciones y nuevos conocimientos que garanticen en
        la región el desarrollo e innovación en ciencia y tecnología,
        fortaleciendo la producción científica en toda la comunidad académica,
        impulsada a través de la Redes de Investigación.
      </p>

      <h2 className="text-2xl font-semibold text-red-500 mb-3">
        ¿Qué hace un observatorio?
      </h2>

      <p className="text-black mb-5 text-justify">
        El primer paso del proceso investigativo es precisamente la observación,
        detectar un fenómeno que genera inquietud en el investigador, que se
        desea estudiarlo y en donde el investigador se plantea preguntas de tal
        manera que inicia el proceso de indagación acerca del tema.
      </p>

      <p className="text-black mb-5 text-justify">
      Como característica se puede decir que es
      fundamental realizar seguimiento a la información recolectada y explicar el fenómeno
      de estudio a través del análisis de datos son
      elementos que acompañan al Observatorio.
      Hoy en día existen herramientas que facilitan
      esa recolección de información, almacenarla
      y procesarla, para de esta manera poder realizar un monitoreo del comportamiento de las
      variables en observación.
      </p>

      <p className="text-black mb-5 text-justify">
      Dentro de las funciones de un observatorio,
      es precisamente la de presentar la información de manera clara, coherente y accesible,
      de tal manera que el usuario de la información
      pueda leerla y entenderla fácilmente, de tal
      forma que no sea confundida con la información publicada en las revistas científicas.
      </p>

      <h2 className="text-2xl font-semibold text-red-500 mb-3">
      ¿Qué hacemos en la RIOUC?
      </h2>
      <div className="flex justify-center">
        <video
          autoPlay
          loop
          muted
          controls={false}
          style={{
            width: "100%",
            maxHeight: "700px", // Limitar la altura del video
          }}
          className="rounded-lg"
          ref={videoRef} // Asociar la referencia al elemento de video
        >
          <source src="/video/riouc.mp4" type="video/mp4" />
          Tu navegador no admite la reproducción de video.
        </video>
      </div>

          <p className="text-black mb-1 text-justify">
          Partiendo de que diversas instituciones y
          estudiosos del tema (Angulo, 2009; Husillos,
          2006;Urdapilleta, 2006) conciben al observatorio como un centro interdisciplinario,
          humanista, científico y cultural de pensamiento, dedicado al estudio, reflexión, gestión y
          divulgación de la información y convertirla en
          conocimiento útil sobre el conjunto de fenómenos observados de interés particular que,
          contribuye con mayor racionalidad al debate
          y explicación de dichos fenómenos, surge el
          apoyo a construir la visión de RIOUC.
          De ahí que la misión del observatorio trasciende no solo al propósito de recopilar
          información, ya que incorpora la intención
          de interpretar fenómenos actuales, analizar
          4
          Revista Boletín
          la información generada, definir y evaluar
          indicadores para estudiar el comportamiento de las variables que los constituyen y así
          caracterizar dichos fenómenos, a fin de tomar
          decisiones y orientar las políticas de intervención. En efecto, la relación entre observación
          sistemática, análisis y acción es, indudablemente, una característica esencial de los
          observatorios, conocida como “información
          para la acción” (Superintendencia Nacional
          de Salud, 2007, s/p); entendida como expresión de la misión que le compete según el
          área de estudio: a) recopilar, tratar y difundir
          sistemáticamente la información, b) conocer
          mejor la temática en cuestión, y c) promover
          la reflexión y el intercambio del conocimiento
          en red y definir acciones que intervienen en la
          toma de decisiones (Husillos, 2006).
        </p>

        <p className="text-black mb-1 text-justify">
        En consecuencia, tomando en consideración la misión que cumplen las Redes de
        Investigación y los Observatorios como una
        herramienta de conocimiento, se propone en
        la Universidad Católica de Cuenca, la creación
        de la Red de Investigación y de Observatorios,
        como un espacio interdisciplinario encargado de recolectar, organizar, procesar y evaluar
        sistemáticamente información, difundiendo a la
        comunidad científica, empresarial y social, los
        indicadores sobre fenómenos de relevancia en
        la región, con el fin de identificar y monitorear
        las variables notables que permitan explicar
        problemas; así como, proponer políticas, planes
        y estrategias que faciliten la toma de decisiones a nivel gubernamental, empresarial y/o
        académico, que aporten soluciones y nuevos
        conocimientos que garanticen en la región el
        desarrollo e innovación en ciencia y tecnología,
        fortaleciendo la producción científica a todo
        nivel institucional, impulsado a través de la
        Redes de Investigación.
        </p>

        <p className="text-black mb-1 text-justify">
        Para el Gobierno Vasco (2008), la misión de un
        observatorio es vigilar y detectar lo que ocurre
        en su ámbito de actuación, y su valor agregado se sustenta en: 1) buscar la información, 2)
        discernir su relevancia, 3) organizarla de modo
        coherente y 4) presentarla de forma clara.
        </p>



        <p className="text-black mb-1 text-justify"> 
        De igual manera, el uso de las TIC, para la presentación de los datos e información generada por
        los observatorios, en un portal web es una manera de realizar seguimiento y evaluación de los
        temas que se observan. (Phelan, 2007).
        </p>

      

      <ul className="list-disc ml-6">
        <li className="text-green-500 mb-2">Contenido informativo.</li>
        <li className="text-green-500 mb-2">Datos relevantes.</li>
        <li className="text-green-500">Información útil.</li>
      </ul>
    </div>
  );
}
