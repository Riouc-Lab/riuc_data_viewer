import Image from "next/image";

export default function Proyectos() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 mb-3">
      <div className='text-center mb-3'>
                <h5 className='text-base md:text-lg text-red-500 mb-3'>GeoVisor</h5>
                <h1 className='text-4xl md:text-6xl text-black font-semibold mb-5'>PROYECTOS</h1>
            </div>
            
            <div className='flex min-h-screen mb-1'>


                <div className='p-4 sm:w-1/2 lg:w-1/3'>
                    <div className='border-2 border-black border-opacity-10 rounded-lg overflow-hidden'>
                    <Image
                        className='dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
                        src='/img/geovisor_mapa.png'
                        alt='Next.js Logo'
                        width={500}
                        height={30}
                        priority
                      />
                        <div className="p-6 hover:bg-black hover:text-white transition duration-270 ease-in">
                            <h2 className="text-base font-medium text-indigo-300 mb-1">10 de Agosto,
                                2023</h2>
                            <h1 className="text-2xl font-semibold mb-3">Canasta Basica</h1>
                            <p className="leading-relaxed mb-3"> Geovisor de Canastas Básicas:
                            Descubre la diversidad geográfica de Ecuador a través de nuestro geovisor interactivo. Visualiza y compara datos sobre las canastas 
                            básicas en diferentes regiones del país en tiempo real. Desde zonas urbanas hasta rurales.</p>
                            <div className="flex items-center flex-wrap ">
                                <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">Saber mas
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                <span
                                    className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                    RIOUC
                                </span>
                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                    C2MAD
                                </span>
                            </div>
                        </div>
                    </div>
                  </div>

                  </div>
    </main>
    
  );
}
