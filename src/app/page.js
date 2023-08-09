import Image from 'next/image'



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-40">
      

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/img/ciitt-centro.png"
          alt="Next.js Logo"
          width={450}
          height={30}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-1 lg:text-left">
        
      <h1 className='font-sans-25 text-center'> El CIITT busca crear condiciones para que los resultados de la investigación sean transferidos a la sociedad para generar innovación; promoviendo la vinculación y la capacitación.
      </h1>

      

      </div>
    </main>
  )
}
