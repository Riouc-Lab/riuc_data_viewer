import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-40">
      <div className="">
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
