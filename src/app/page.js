import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto py-5">
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
            className="rounded-lg shadow-lg"
          >
            <source src="/video/riouc.mp4" type="video/mp4" />
            Tu navegador no admite la reproducción de video.
          </video>
        </div>

        <h1 className="text-2xl font-extrabold text-center mt-8">
        La Red de Investigación y Observatorios de la Universidad Católica de Cuenca (RIOUC) busca investigar y difundir información relevante 
        para respaldar la toma de decisiones en la región con el fin de promover el desarrollo y la innovación en ciencia y tecnología.
        </h1>
        <p className="text-lg text-center mt-3 text-red-500">
          ¡Explora el futuro de la innovación con nosotros!
        </p>
        
      </main>
    </div>
  );
}
