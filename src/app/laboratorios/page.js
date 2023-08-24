import Image from "next/image";

export default function Laboratorios() {
  return (
    <main className="flex min-h-screen flex-col justify-between mx-auto max-w-7xl">
      <h1 className="flex text-4xl md:text-6xl font-semibold p-5 mb-12">LABORATORIOS</h1>
      <div className="mb-5 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
        <div className='ml-1 mb-16'>
        <h1 className='font-sans text-left font-bold mb-1 text-red-500 text-lg'>RIOUC</h1>
        <p className='font-sans text-left font-bold mb-1 text-black-100 text-sm'>Red de Investigacion y de Observatorios Universidad Catolica de Cuenca.</p>
        <p className='font-sans text-left mb-2 text-black-100'>Es un espacio interdisciplinario encargado de recolectar, organizar, procesar y evaluar sistemáticamente información, difundiendo a la comunidad científica, empresarial y social, los indicadores de relevancia en la región.</p>
        
        <p className='font-sans text-left font-bold mb-1 text-black'>Áreas de conocimiento: </p>
        <p className='font-sans text-left mb-1 text-black-100'>-Ciencias Económicas, Sociales y Empresariales.</p>
        <p className='font-sans text-left mb-1 text-black-100'>-Ciencias de la Salud.</p>
        <p className='font-sans text-left mb-1 text-black-100'>-Ciencias de la Educación.</p>
        <p className='font-sans text-left mb-1 text-black-100'>-Ciencias de la Ingeniería Arquitectura, Urbanismo.</p>
        <p className='font-sans text-left mb-1 text-black-100'>-Ciencias Naturales.</p>
        
        <p className='font-sans text-left font-bold mb-1 text-black'>En este espacio se trabaja en: </p>
        <p className='font-sans text-left mb-1 text-black-100'>-Construir y gestionar bases de datos que permitan sistematizar el proceso del monitoreo de la información recopilada.</p>
        <p className='font-sans text-left mb-1 text-black-100'>-Construcción indicadores que permitan una mejor toma de decisiones.</p>
        <p className='font-sans text-left mb-1 text-black-100'>-Generar redes de colaboración a lo interno y con otros observatorios o entes institucionales.</p>
        <p className='font-sans text-left mb-1 text-black-100'>-Generación de cátedras libres.</p>
        <p className='font-sans text-left mb-1 text-black-100'>-Formación de los profesionales en las diversas áreas del conocimiento.</p>
        <p className='font-sans text-left mb-2 text-black-100'>-Desarrollo de programas para apoyar decisiones estratégicas en la solución de problemáticas regionales.</p>

        </div>

        <Image
          className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert p-3 mx-auto max-w-6xl justify-center"
          src="/img/RIOUC.jpg"
          alt="Next.js Logo"
          width={705}
          height={30}
          priority
        />
        </div>
      

      <div className="flex-col text-center mb-20">
        <p className='font-sans text-left font-bold mb-2 text-red-500 mb-5 text-xl'>¿Qué es la RIOUC?</p>
        <p className='font-sans text-left mb-1 text-black-100'>La Red de Investigación y de Observatorios de la Universidad Católica de Cuenca (RIOUC), 
        se ha concebido como un espacio interdisciplinario conformado por distintos docentes-investigadores que, basados en sus inquietudes, realizan investigación 
        para con la finalidad de recolectar, organizar, procesar y evaluar sistemáticamente información, acerca de un fenómeno de estudio para difundir sus hallazgos 
        a la comunidad científica, empresarial y social.</p>  
        <p className='font-sans text-left mb-1 text-black-100'>La Red se encarga de construir indicadores sobre fenómenos de relevancia en la región, 
        con el fin de identificar y monitorear las variables notables que permitan explicar problemas; así como, proponer políticas, planes y estrategias 
        que faciliten la toma de decisiones a nivel gubernamental, empresarial y/o académico, que aporten soluciones y nuevos conocimientos que garanticen 
        en la región el desarrollo e innovación en ciencia y tecnología, fortaleciendo la producción científica a todo nivel institucional, impulsado a través
         de la Redes de Investigación.</p>
         </div>



      <div className="mb-5 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">

        <div className='ml-1 mb-10'>
        <h1 className='font-sans text-left font-bold mb-1 text-red-500 text-lg'>C2MAD</h1>
        <p className='font-sans text-left font-bold mb-1 text-black-100 text-sm'>Laboratorio de Cálculo Computacional, Modelado y Analítica de Datos.</p>
        <p className='font-sans text-left mb-3 text-black-100'>Contribuye al avance científico y tecnológico de la institución, la región y el país, produciendo, aplicando y
         difundiendo conocimiento científico y tecnológico a través del desarrollo de programas y proyectos de investigación, innovación y vinculación con la sociedad que 
         utilicen la computación científica, la simulación y la ciencia de datos.</p>
        
        <p className='font-sans text-left font-bold mb-1 text-black'>En este laboratorio se trabajan:</p>
        <p className='font-sans text-left mb-1 text-black-100'>En este laboratorio se trabaja con la computación científica para construir modelos matemáticos que resuelvan
         problemas relacionados a fenómenos sociales, naturales y antrópicos. Cuenta con capacidad de manejar y de obtener información relevante de grandes volúmenes de datos a
          través del “Data Mining” y de procesar esta información a través de técnicas de inteligencia artificial.</p>
        
        <p className='font-sans text-left font-bold mb-1 text-black'>Equipos disponibles:</p>
        <p className='font-sans text-left mb-1 text-black-100'>-Servidor DELL PowerEdge R6525.</p>
        <p className='font-sans text-left mb-1 text-black-100'>-10 estaciones de trabajo thin client clear cube.</p>
        <p className='font-sans text-left mb-1 text-black-100'>-Dell Power Vault ME5012.</p>
        <p className='font-sans text-left mb-1 text-black-100'>-Drone Matrice 300 RTK.</p>
        <p className='font-sans text-left mb-1 text-black-100'>-Cámara Multiespectral MicaSense Altum PT.</p>
        
        </div>

        <Image
          className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert p-3 mx-auto max-w-6xl justify-center"
          src="/img/C2MAD.jpg"
          alt="Next.js Logo"
          width={705}
          height={30}
          priority
        />
        </div>

        <div className="flex-col text-center mb-3">
        <p className='font-sans text-left font-bold mb-10 text-red-500 mb-5 text-xl'>Proyectos</p>
        <p className='font-sans text-left mb-1 text-black-100'>-Delizamientos: Caracterización de sus variables morfológicas y ambientales. Aprobado en la Convocatoria 
        Institucional de Proyectos CIITT 2019-2020.</p>
        <p className='font-sans text-left mb-1 text-black-100'>-Modelo de Gestión Académica en la Universidad desde la perspectiva de las 4A bajo el enfoque de Redes Complejas 
        y Sistemas Difusos. Proyecto en colaboración con la Red de investigación y Observatorios de la Universidad Católica de Cuenca (RIOUC).</p>
        <p className='font-sans text-left mb-1 text-black-100'>-Desarrollo y aplicaciones de recursos computacionales en Sociofísica. Proyecto aprobado en el Concurso Ecuatoriano 
        de Proyectos CEPRA XVI, de la Corporación Ecuatoriana para el Desarrollo de la Investigación y la Academia CEDIA.</p>
        <p className='font-sans text-left mb-1 text-black-100'>-Efectos de los factores bióticos y abóticos en las redes de polinización en los altos Andes del macizo del Cajas. 
        Proyecto aprobado en la Convocatoria Institucional de Proyectos CIITT 2019-2020.</p>
        <p className='font-sans text-left mb-1 text-black-100'>-El plan de ordenamiento urbano 2014 en la ciudad de cuenca: impacto en la morfología de las áreas periféricas de
         expansión urbana. Aprobado en la Convocatoria Institucional de Proyectos CIITT 2019-2020.</p>
        <p className='font-sans text-left mb-1 text-black-100'>-Estados quiméricos en dinámica neuronal. Proyecto en colaboración con la Universidad de Yachay Tech. Aprobado por
         la Vicecancillería de Investigación e Innovación de la Yachay Tech.</p>
        <p className='font-sans text-left mb-20 text-black-100'>-Estudio de la estructura Espacio–Temporal de redes complejas: La polinización y la dispersión de semillas 
        fundamentales servicios ecosistémicos. Aprobado en la Convocatoria Institucional de Proyectos de Investigación de Fortalecimiento de los Objetivos de Desarrollo 
        Sostenible.</p>
         </div>

         <section className="bg-black py-8">
          <div className="container mx-auto p-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-black rounded-lg shadow p-4">
                <h3 className="text-lg text-white font-semibold mb-2">LA UNIVERSIDAD</h3>
                  <a
                    href="https://www.ucacue.edu.ec/la-universidad/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-red-600"
                  > La Cato
                  </a>
                  <hr className="my-2 border-white" />
                  <p>
                  <a 
                  href="https://www.ucacue.edu.ec/la-universidad/autoridades/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-red-600"
                  > Autoridades
                  </a> 
                  <hr className="my-2 border-white" />
                  </p>
                  <p>
                    <a
                    href="https://www.ucacue.edu.ec/la-universidad/politica-de-calidad/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-red-600"
                  > Politica de Calidad
                  </a>
                  <hr className="my-2 border-white" />
                  </p>
                  <p>
                  <a
                    href="https://www.ucacue.edu.ec/ejes/administrativo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-red-600"
                  > Areas administrativas
                  </a>
                  <hr className="my-2 border-white" />
                  </p>
                  <p>
                  <a
                    href="https://www.ucacue.edu.ec/la-universidad/campus-universitario/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-red-600"
                  > Campus
                  </a>
                  <hr className="my-2 border-white" />
                  </p>
                  <p>
                  <a
                    href="https://internacional.ucacue.edu.ec/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-red-600"
                  > Relaciones Internacionales
                  </a>
                  <hr className="my-2 border-white" />
                  </p>
                  <p>
                  <a
                    href="https://www.ucacue.edu.ec/transparencia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-red-600"
                  > Transparencia
                  </a>
                  <hr className="my-2 border-white" />
                  </p>
                  <p>
                  <a
                    href="https://documentacion.ucacue.edu.ec/collections/show/2044"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-red-600"
                  > Protocolos
                  </a>
                  <hr className="my-2 border-white" />
                  </p>
                  
              </div>
              <div className="bg-black rounded-lg shadow p-4">
                <h3 className="text-lg font-semibold mb-2 text-white">INVESTIGACIÓN</h3>
                <a
                    href="https://investigacion.ucacue.edu.ec/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-red-600"
                  > Intestigación
                  </a>
                  <hr className="my-2 border-white" />
                  <p>
                  <a 
                  href="https://investigacion.ucacue.edu.ec/centros-de-investigacion/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-red-600"
                  > Centros de investigación
                  </a> 
                  <hr className="my-2 border-white" />
                  </p>
                  <p>
                    <a
                    href="https://investigacion.ucacue.edu.ec/laboratorios-de-investigacion/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-red-600"
                  > Laboratorios
                  </a>
                  <hr className="my-2 border-white" />
                  </p>
                  <p>
                  <a
                    href="https://innovacion.ucacue.edu.ec/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-red-600"
                  > Innovación
                  </a>
                  <hr className="my-2 border-white" />
                  </p>
                  <p>
                  <a
                    href="https://investigacion.ucacue.edu.ec/publicaciones/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-red-600"
                  > Revistas científicas
                  </a>
                  <hr className="my-2 border-white" />
                  </p>
              </div>
              <div className="bg-black rounded-lg shadow p-4">
                <h3 className="text-lg font-semibold mb-2 text-white">CONTACTOS</h3>
                <p className="text-gray-700 text-white">
                    Matriz Cuenca:
                    Av. de las Américas y Humboldt
                    Teléfono:
                    +593 (07) 4134-750
                    email:
                    <a
                    href="mailto:info@ucacue.edu.ec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-red-600"
                  > info@ucacue.edu.ec
                  </a>
                  <hr className="my-2 border-white" />
                </p>
              </div>
            </div>
          </div>
        </section>
    </main>
  );
}
