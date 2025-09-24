import Link from "next/link"; // Importar Link de Next.js
import Image from "next/image"; // Importar Image de Next.js

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-semibold">
      <main className="container mx-auto py-10 flex flex-col items-center px-4">
        <div className="w-full max-w-screen-lg rounded-lg shadow-lg overflow-hidden mt-5">
          <iframe
            title="Video"
            width="590"
            height="575"
            src="https://www.youtube.com/embed/EkX00rNBbFw?autoplay=1&mute=1&loop=1&playlist=EkX00rNBbFw"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full"
            playsInline
            quality="high"
          ></iframe>
        </div>

        <h1 className="text-3xl font-extrabold text-center mt-10">
          La Red de Investigación y Observatorios de la Universidad Católica de
          Cuenca (RIOUC)
        </h1>
        <p className="text-xl text-center mt-3 text-gray-400">
          Busca investigar y difundir información relevante para respaldar la
          toma de decisiones en la región con el fin de promover el desarrollo y
          la innovación en ciencia y tecnología.
        </p>
        <p className="text-lg text-red-500 mt-5">
          ¡Explora el futuro de la innovación con nosotros!
        </p>

        {/* Sección de Botones */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <Link href="/boletin" passHref>
            <div className="w-40 h-40 sm:w-48 sm:h-48 bg-gradient-to-r from-gray-500 rounded-xl flex flex-col items-center justify-center shadow-2xl cursor-pointer hover:shadow-xl transition-shadow duration-300">
              <Image src="/img/revista.png" alt="Boletines" width={80} height={80} />
              <span className="text-white font-bold mt-2">Boletines</span>
            </div>
          </Link>

          {/* Nuevo botón Artículos Científicos */}
          <Link href="/articulos" passHref>
            <div className="w-40 h-40 sm:w-48 sm:h-48 bg-gradient-to-r from-gray-500 rounded-xl flex flex-col items-center justify-center shadow-2xl cursor-pointer hover:shadow-xl transition-shadow duration-300">
              <Image src="/img/articulo.png" alt="Artículos" width={80} height={80} />
              <span className="text-white font-bold mt-2 text-center">Artículos Científicos</span>
            </div>
          </Link>

          <Link href="/Novedades" passHref>
            <div className="w-40 h-40 sm:w-48 sm:h-48 bg-gradient-to-r from-gray-500 rounded-xl flex flex-col items-center justify-center shadow-2xl cursor-pointer hover:shadow-xl transition-shadow duration-300">
              <Image src="/img/infografia.png" alt="Infografias" width={70} height={70} />
              <span className="text-white font-bold mt-2">Infografías</span>
            </div>
          </Link>

          <Link href="/proyectos" passHref>
            <div className="w-40 h-40 sm:w-48 sm:h-48 bg-gradient-to-r from-gray-500 rounded-xl flex flex-col items-center justify-center shadow-2xl cursor-pointer hover:shadow-xl transition-shadow duration-300">
              <Image src="/img/mapa.png" alt="Proyectos" width={80} height={80} />
              <span className="text-white font-bold mt-2">Geovisores</span>
            </div>
          </Link>

          <Link href="/vdos" passHref>
            <div className="w-40 h-40 sm:w-48 sm:h-48 bg-gradient-to-r from-gray-500 rounded-xl flex flex-col items-center justify-center shadow-2xl cursor-pointer hover:shadow-xl transition-shadow duration-300">
              <Image src="/img/videos.png" alt="Videos" width={70} height={70} />
              <span className="text-white font-bold mt-2">Videos</span>
            </div>
          </Link>

          <Link href="/tendenciaseducativas" passHref>
            <div className="w-40 h-40 sm:w-48 sm:h-48 bg-gradient-to-r from-gray-500 rounded-xl flex flex-col items-center justify-center shadow-2xl cursor-pointer hover:shadow-xl transition-shadow duration-300">
              <Image src="/img/blog.png" alt="Tendencias Educativas" width={70} height={70} />
              <span className="text-white font-bold mt-2 text-center">Tendencias Educativas</span>
            </div>
          </Link>
        </div>

        {/* Enlace externo */}
        <a
          href="https://www.bce.fin.ec/informacioneconomica/ultimas-publicaciones"
          className="flex items-center space-x-2 mt-12 mb-5 transition-transform transform hover:scale-105"
        >
          <h2 className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300 cursor-pointer">
            Explora las Estadísticas Nacionales Económicas Actualizadas
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            className="bg-blue-600 text-white rounded-full p-1"
          >
            <path d="..."></path>
          </svg>
        </a>
      </main>
    </div>
  );
}
