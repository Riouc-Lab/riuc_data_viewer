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
        <div className="flex flex-wrap justify-center space-x-0 space-y-6 sm:space-y-0 sm:space-x-6 mt-10">
          <Link href="/boletin" passHref>
            <div className="w-48 h-48 sm:w-60 sm:h-60 bg-gradient-to-r from-gray-500 rounded-xl flex flex-col items-center justify-center shadow-2xl cursor-pointer hover:shadow-xl transition-shadow duration-300">
              <Image
                className="mx-auto"
                src="/img/revista.png"
                alt="Boletines"
                width={100}
                height={100}
              />
              <span className="text-white font-bold mt-2">Boletines</span>
            </div>
          </Link>
          <Link href="/proyectos" passHref>
            <div className="w-48 h-48 sm:w-60 sm:h-60 bg-gradient-to-r from-gray-500 rounded-xl flex flex-col items-center justify-center shadow-2xl cursor-pointer hover:shadow-xl transition-shadow duration-300">
              <Image
                className="mx-auto"
                src="/img/mapa.png"
                alt="Proyectos"
                width={100}
                height={100}
              />
              <span className="text-white font-bold mt-2">Proyectos</span>
            </div>
          </Link>
          <Link href="/tendenciaseducativas" passHref>
            <div className="w-48 h-48 sm:w-60 sm:h-60 bg-gradient-to-r from-gray-500 rounded-xl flex flex-col items-center justify-center shadow-2xl cursor-pointer hover:shadow-xl transition-shadow duration-300">
              <Image
                className="mx-auto"
                src="/img/blog.png"
                alt="Tendencias Educativas"
                width={100}
                height={100}
              />
              <span className="text-white font-bold mt-2">
                Tendencias Educativas
              </span>
            </div>
          </Link>
        </div>
        <a
          href="https://www.bce.fin.ec/informacioneconomica/ultimas-publicaciones"
          class="flex items-center space-x-2 mt-12 mb-5 transition-transform transform hover:scale-105"
        >
          <h2 class="text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300 cursor-pointer">
            Explora las Estadísticas Nacionales Económicas Actualizadas
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            class="bg-blue-600 text-white rounded-full p-1"
          >
            <path d="M 7 2.015625 L 20.160156 14.34375 L 14.785156 14.828125 L 13.808594 14.917969 L 14.214844 15.8125 L 17.476563 22.957031 L 15.070313 24.015625 L 11.957031 16.792969 L 11.566406 15.882813 L 10.84375 16.5625 L 7.027344 20.144531 L 7 2.015625 M 7 0.015625 C 6.730469 0.015625 6.460938 0.0664063 6.203125 0.179688 C 5.472656 0.496094 5 1.21875 5 2.015625 L 5.027344 20.144531 C 5.027344 20.941406 5.503906 21.660156 6.230469 21.976563 C 6.488281 22.085938 6.757813 22.140625 7.023438 22.140625 C 7.523438 22.140625 8.015625 21.953125 8.394531 21.601563 L 10.855469 19.289063 L 13.234375 24.804688 C 13.445313 25.296875 13.84375 25.679688 14.339844 25.875 C 14.574219 25.96875 14.820313 26.015625 15.070313 26.015625 C 15.34375 26.015625 15.617188 25.957031 15.875 25.84375 L 18.28125 24.785156 C 18.769531 24.570313 19.15625 24.167969 19.34375 23.667969 C 19.535156 23.167969 19.519531 22.613281 19.296875 22.125 L 16.796875 16.65625 L 20.339844 16.332031 C 21.125 16.261719 21.796875 15.738281 22.050781 14.992188 C 22.308594 14.246094 22.101563 13.421875 21.527344 12.882813 L 8.367188 0.554688 C 7.988281 0.199219 7.496094 0.015625 7 0.015625 Z"></path>
          </svg>
        </a>
      </main>
    </div>
  );
}
