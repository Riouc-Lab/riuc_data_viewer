import Image from "next/image";

export default function Informacion() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-40">
        
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/img/objetivos.jpg"
          alt="Next.js Logo"
          width={600}
          height={30}
          priority
        />
      </div>    

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-1 lg:text-left">


      </div>
      <h1 className='font-sans text-center font-bold mb-4'> 
            Objetivos del CIITT
      </h1>

      

      <h2 className='font-sans text-center'>
      Ofrecer sus instalaciones a investigadores para que desarrollen su actividad científica; fortaleciendo la generación y transferencia del conocimiento; para solucionar los problemas de la comunidad y la sociedad.
            Se lo plantea hacer por medio de:</h2>

            <h2 className='font-sans text-center'>-La transferencia de la tecnología a otros ámbitos académicos, productivos y sociales.</h2>
            <h2 className='font-sans text-center'>-La captación de investigadores nacionales e internacionales.</h2>
            <h2 className='font-sans text-center'>-La generación de procesos de innovación social, técnica y tecnológica.</h2>
            <h2 className='font-sans text-center'>-El desarrollo científico entre la sociedad civil, empresas e instituciones públicas y privadas, nacionales y extranjeras.</h2>
            <h2 className='font-sans text-center'>-La oferta de los resultados obtenidos a la comunidad y sectores productivos.</h2>
    </main>
  );
}
