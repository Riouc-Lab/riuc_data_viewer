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

        <h1 className="text-3xl font-extrabold text-center mt-9">
          El CIITT busca crear condiciones para que los resultados de la
          investigación sean transferidos a la sociedad para generar innovación;
          promoviendo la vinculación y la capacitación.
        </h1>
        <p className="text-lg text-center mt-6 text-red-500 mb-10">
          ¡Explora el futuro de la innovación con nosotros!
        </p>
        
      </main>
    </div>
  );
}
