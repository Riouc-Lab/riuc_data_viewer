import Footer from "@riuc/components/footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-1">

        <div className="flex items-center justify-center">
          <video
            autoPlay
            loop
            muted
            controls={false}
            style={{ pointerEvents: 'none', width: '1700px', height: '885px' }}
            className="object-cover rounded-lg shadow-lg"
              >
            <source src="/video/riouc.mp4" type="video/mp4" />
            Tu navegador no admite la reproducción de video.
          </video>
        </div>

      <div className="p-16 mb-5">
        <Image
          className=""
          src="/img/riouc_centro.png"
          alt="Next.js Logo"
          width={330}
          height={30}
          priority
        />
        
      </div>
      <h1 className="font-sans-25 text-center">
          {" "}
          El CIITT busca crear condiciones para que los resultados de la
          investigación sean transferidos a la sociedad para generar innovación;
          promoviendo la vinculación y la capacitación.
        </h1>
      <div className="relative flex place-items-center">
      </div>
    </main>
  );
}
