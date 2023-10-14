import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-serif">
      <main className="container mx-auto py-10 flex flex-col items-center">
        <div className="w-full max-w-screen-lg rounded-lg shadow-lg overflow-hidden mt-5">
          <video
            autoPlay
            loop
            muted
            controls={false}
            className="w-full"
          >
            <source src="/video/riouc.mp4" type="video/mp4" />
            Tu navegador no admite la reproducción de video.
          </video>
        </div>

        <h1 className="text-3xl font-extrabold text-center mt-10">
          La Red de Investigación y Observatorios de la Universidad Católica de Cuenca (RIOUC)
        </h1>
        <p className="text-xl text-center mt-3 text-gray-400">
          Busca investigar y difundir información relevante para respaldar la toma de decisiones en la región con el fin de promover el desarrollo y la innovación en ciencia y tecnología.
        </p>
        <p className="text-lg text-red-500 mt-5">
          ¡Explora el futuro de la innovación con nosotros!
        </p>
      </main>
    </div>
  );
}
