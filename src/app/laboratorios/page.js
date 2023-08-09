import Image from "next/image";

export default function Laboratorios() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-40">

      <h1 className='font-sans text-center font-bold mb-10 text-xl'>LABORATORIOS</h1>
      <div className="mb-2 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/img/RIOUC.jpg"
          alt="Next.js Logo"
          width={750}
          height={30}
          priority
        />
        <div className='ml-1'>
        <h1 className='font-sans text-left font-bold mb-1 text-red-500 text-lg'>RIOUC</h1>
        <p className='font-sans text-left font-bold mb-3 text-black-100'>Red de Investigacion y de Observatorios Universidad Catolica de Cuenca.</p>
        <p className='font-sans text-left mb-4 text-black-100'>Es un espacio interdisciplinario encargado de recolectar, organizar, procesar y evaluar sistemáticamente información, difundiendo a la comunidad científica, empresarial y social, los indicadores de relevancia en la región.</p>
        
        <p className='font-sans text-left font-bold mb-1 text-black-100'>EN ESTE ESPACIO SE TRABAJA EN: </p>
        <p className='font-sans text-left mb-3 text-black-100'>-Construir y gestionar bases de datos que permitan sistematizar el proceso del monitoreo de la información recopilada.</p>
        <p className='font-sans text-left mb-3 text-black-100'>-Construcción indicadores que permitan una mejor toma de decisiones.</p>
        <p className='font-sans text-left mb-3 text-black-100'>-Generar redes de colaboración a lo interno y con otros observatorios o entes institucionales.</p>
        <p className='font-sans text-left mb-3 text-black-100'>-Generación de cátedras libres.</p>
        <p className='font-sans text-left mb-3 text-black-100'>-Formación de los profesionales en las diversas áreas del conocimiento.</p>
        <p className='font-sans text-left mb-3 text-black-100'>-Desarrollo de programas para apoyar decisiones estratégicas en la solución de problemáticas regionales.</p>
        
        <p className='font-sans text-left font-bold mb-1 text-black-100'>ÁREAS DEL CONOCIMIENTO: </p>
        <p className='font-sans text-left mb-3 text-black-100'>-Ciencias Económicas, Sociales y Empresariales.</p>
        <p className='font-sans text-left mb-3 text-black-100'>-Ciencias de la Salud.</p>
        <p className='font-sans text-left mb-3 text-black-100'>-Ciencias de la Educación.</p>
        <p className='font-sans text-left mb-3 text-black-100'>-Ciencias de la Ingeniería Arquitectura, Urbanismo.</p>
        <p className='font-sans text-left mb-3 text-black-100'>-Ciencias Naturales.</p>
        
        </div>
        </div>
      
      
     
    </main>
  );
}
