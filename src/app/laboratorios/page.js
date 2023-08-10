import Image from "next/image";

export default function Laboratorios() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-15 mb-5">
      <h1 className="mb-5 text-4xl md:text-6xl text-gray-700 font-semibold ">LABORATORIOS</h1>
      <div className="mb-5 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
        <Image
          className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/img/RIOUC.jpg"
          alt="Next.js Logo"
          width={750}
          height={30}
          priority
        />
        <div className='ml-1 mb-10'>
        <h1 className='font-sans text-left font-bold mb-1 text-red-500 text-lg'>RIOUC</h1>
        <p className='font-sans text-left font-bold mb-3 text-black-100 text-sm'>Red de Investigacion y de Observatorios Universidad Catolica de Cuenca.</p>
        <p className='font-sans text-left mb-3 text-black-100'>Es un espacio interdisciplinario encargado de recolectar, organizar, procesar y evaluar sistemáticamente información, difundiendo a la comunidad científica, empresarial y social, los indicadores de relevancia en la región.</p>
        
        <p className='font-sans text-left font-bold mb-3 text-black-100'>EN ESTE ESPACIO SE TRABAJA EN: </p>
        <p className='font-sans text-left mb-1 text-black-100'>-Construir y gestionar bases de datos que permitan sistematizar el proceso del monitoreo de la información recopilada.</p>
        <p className='font-sans text-left mb-1 text-black-100'>-Construcción indicadores que permitan una mejor toma de decisiones.</p>
        <p className='font-sans text-left mb-1 text-black-100'>-Generar redes de colaboración a lo interno y con otros observatorios o entes institucionales.</p>
        <p className='font-sans text-left mb-1 text-black-100'>-Generación de cátedras libres.</p>
        <p className='font-sans text-left mb-1 text-black-100'>-Formación de los profesionales en las diversas áreas del conocimiento.</p>
        <p className='font-sans text-left mb-1 text-black-100'>-Desarrollo de programas para apoyar decisiones estratégicas en la solución de problemáticas regionales.</p>
        
        <p className='font-sans text-left font-bold mb-3 text-black-100'>ÁREAS DEL CONOCIMIENTO: </p>
        <p className='font-sans text-left mb-1 text-black-100'>-Ciencias Económicas, Sociales y Empresariales.</p>
        <p className='font-sans text-left mb-1 text-black-100'>-Ciencias de la Salud.</p>
        <p className='font-sans text-left mb-1 text-black-100'>-Ciencias de la Educación.</p>
        <p className='font-sans text-left mb-1 text-black-100'>-Ciencias de la Ingeniería Arquitectura, Urbanismo.</p>
        <p className='font-sans text-left mb-1 text-black-100'>-Ciencias Naturales.</p>
        
        </div>
        </div>
      

      <div className="flex-col text-center mb-12">
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
        <Image
          className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/img/C2MAD.jpg"
          alt="Next.js Logo"
          width={750}
          height={30}
          priority
        />

        <div className='ml-1 mb-10'>
        <h1 className='font-sans text-left font-bold mb-1 text-red-500 text-lg'>C2MAD</h1>
        <p className='font-sans text-left font-bold mb-3 text-black-100 text-sm'>Laboratorio de Cálculo Computacional, Modelado y Analítica de Datos.</p>
        <p className='font-sans text-left mb-3 text-black-100'>Contribuye al avance científico y tecnológico de la institución, la región y el país, produciendo, aplicando y
         difundiendo conocimiento científico y tecnológico a través del desarrollo de programas y proyectos de investigación, innovación y vinculación con la sociedad que 
         utilicen la computación científica, la simulación y la ciencia de datos.</p>
        
        <p className='font-sans text-left font-bold mb-3 text-black-100'>EN ESTE LABORATORIO SE TRABAJAN:</p>
        <p className='font-sans text-left mb-1 text-black-100'>En este laboratorio se trabaja con la computación científica para construir modelos matemáticos que resuelvan
         problemas relacionados a fenómenos sociales, naturales y antrópicos.</p>
        <p className='font-sans text-left mb-1 text-black-100'>Cuenta con capacidad de manejar y de obtener información relevante de grandes volúmenes de datos a través del 
        “Data Mining” y de procesar esta información a través de técnicas de inteligencia artificial.</p>
        
        <p className='font-sans text-left font-bold mb-3 text-black-100'>EQUIPOS DISPONIBLES:</p>
        <p className='font-sans text-left mb-1 text-black-100'>-Servidor DELL PowerEdge R6525.</p>
        <p className='font-sans text-left mb-1 text-black-100'>-10 estaciones de trabajo thin client clear cube.</p>
        <p className='font-sans text-left mb-1 text-black-100'>-Dell Power Vault ME5012.</p>
        <p className='font-sans text-left mb-1 text-black-100'>-Drone Matrice 300 RTK.</p>
        <p className='font-sans text-left mb-1 text-black-100'>-Cámara Multiespectral MicaSense Altum PT.</p>
        
        </div>
        </div>
      

        <div className="flex-col text-center mb-3">
        <p className='font-sans text-left font-bold mb-2 text-red-500 mb-5 text-xl'>Proyectos</p>
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
        <p className='font-sans text-left mb-1 text-black-100'>-Estudio de la estructura Espacio–Temporal de redes complejas: La polinización y la dispersión de semillas 
        fundamentales servicios ecosistémicos. Aprobado en la Convocatoria Institucional de Proyectos de Investigación de Fortalecimiento de los Objetivos de Desarrollo 
        Sostenible.</p>
         </div>
    </main>
  );
}
