"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { lista_noticias } from "../../utils/modelo_noticias";

export default function TendenciasEducativas() {
  const router = useRouter();
  const handleImageClick = (imageUrl) => {
    // Abrir una ventana emergente con la imagen en un tamaño más grande
    window.open(imageUrl, "_blank", "width=800,height=600");
  };

  // Limitar el numero de caracteres a mostrar en item.description
  const truncateDescription = (description, limit) => {
    if (!description || typeof description !== "string") {
      return "";
    }
    if (description.length <= limit) {
      return description;
    }
    return description.slice(0, limit) + "...";
  };

  console.log("Lista de noticias:", lista_noticias); // Nuevo log
  return (
    <div className="bg-gray-100">
      <div
        className="w-full h-96 bg-cover bg-center relative flex items-start justify-start pb-24"
        style={{ backgroundColor: '#222222' }}
      >
        {/* Recuadro gris en la parte superior izquierda */}
        <div className="absolute top-6 left-6 z-20">
          <div className="mt-10 rounded-xl shadow-2xl max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              <span className="text-red-600">T</span>
              <span className="text-white">endencias </span>
              <span className="text-red-600">E</span>
              <span className="text-white">ducativas</span>
            </h1>
            <p className="text-lg mt-5 text-gray-400 italic leading-relaxed">
              Explora las últimas noticias de la UCACUE y mantente al tanto de todo lo relacionado con nuestra Universidad.
            </p>
          </div>
        </div>
        {/* Superposición oscura */}
        <div className="bg-black bg-opacity-30 w-full h-full absolute top-0 left-0" />
        {/* Cuadro gris al final con íconos centrados */}
        <div className="absolute bottom-0 left-0 w-full bg-gray-300 py-4 px-2 z-10">
          <div className="max-w-4xl mx-auto flex flex-wrap justify-center items-center gap-6 sm:gap-10">

            <div className="text-gray-800 text-xl font-semibold">
              <a
                href="https://www.facebook.com/universidadcatolicacuenca"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="blue"
                  class="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </a>
            </div>
            <div className="text-gray-800 text-xl font-semibold">
              <a
                href="https://api.whatsapp.com/send/?phone=%2B593963095663&text=Hola+me+puede+ayudar+con+m%C3%A1s+informaci%C3%B3n.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 mr-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="#03e025ff"
                  class="bi bi-whatsapp"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
              </a>
            </div>
            <div className="text-gray-800 text-xl font-semibold">
              <a
                href="https://www.tiktok.com/@ucatocuenca?lang=es"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-3.5"
              >
                <svg xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="32"
                  height="32"
                  viewBox="0 0 50 50">
                  <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
                </svg>
              </a>
            </div>
            <div className="text-gray-800 text-xl font-semibold">
              <a
                href="https://twitter.com/UCatolicaCuenca"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-3"
              >
                <svg xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="32"
                  height="32"
                  viewBox="0 0 51 51">
                  <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
                </svg>
              </a>
            </div>
            <div className="text-gray-800 text-xl font-semibold">
              <a
                href="https://www.instagram.com/ucatolicacuenca/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="37"
                  height="37"
                  viewBox="0 0 50 50"
                >
                  <radialGradient
                    id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                    cx="19.38"
                    cy="42.035"
                    r="44.899"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#fd5"></stop>
                    <stop offset=".328" stop-color="#ff543f"></stop>
                    <stop offset=".348" stop-color="#fc5245"></stop>
                    <stop offset=".504" stop-color="#e64771"></stop>
                    <stop offset=".643" stop-color="#d53e91"></stop>
                    <stop offset=".761" stop-color="#cc39a4"></stop>
                    <stop offset=".841" stop-color="#c837ab"></stop>
                  </radialGradient>
                  <path
                    fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                    d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                  ></path>
                  <radialGradient
                    id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                    cx="11.786"
                    cy="5.54"
                    r="29.813"
                    gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#4168c9"></stop>
                    <stop
                      offset=".999"
                      stop-color="#4168c9"
                      stop-opacity="0"
                    ></stop>
                  </radialGradient>
                  <path
                    fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                    d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                  ></path>
                  <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
                  <path
                    fill="#fff"
                    d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="text-gray-800 text-xl font-semibold">
              <a
                href="https://www.youtube.com/@UCatolicaCuenca1"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-3 my-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="37"
                  height="37"
                  viewBox="0 0 48 48">
                  <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 bg-white px-4 py-5">
        <div className="flex justify-between items-center space-x-4">
          <div className="flex items-center mx-3 mt-1">
            <a href="https://www.ucacue.edu.ec/"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                src="/img/UC_TRS.png"
                alt="Logo UCACUE"
                width={65}
                height={20}
                priority
                className="mx-auto mb-1 ml-1"
              />
            </a>
          </div>
          <div className="flex items-center">
            <a href="https://www.ucacue.edu.ec/contactos/"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                className="mr-5"
                src="/img/contactos_ucacue.png"
                alt="Contactos ucacue"
                width={115}
                height={40}
                priority
              />
            </a>
            <a href="https://www.instagram.com/explore/tags/ent%C3%A9ratecato"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="ml-3 mr-1"
                src="/img/enterate_cato.png"
                alt="Next.js Logo"
                width={80}
                height={40}
                priority
              />
            </a>
          </div>
        </div>

        <div className="w-full border-t border-dashed border-gray-300 my-4"></div>
        <div className="grid lg:grid-cols-1 gap-2">
          {/* Iterar sobre la lista de noticias */}
          {lista_noticias.slice().reverse().map((item) => {
            console.log("Item:", item); // Loguear cada elemento
            console.log("ID:", item.id); // Loguear el ID de cada elemento
            return (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col lg:flex-row mb-5"
              >
                <div className="lg:w-1/3 flex justify-center lg:justify-start">
                  <Image
                    className="mb-2 rounded-lg cursor-pointer"
                    src={item.Image}
                    alt="Next.js Logo"
                    width={450}
                    height={250}
                    priority
                    style={{ maxHeight: "300px", maxWidth: "100%" }}
                    onClick={() => {
                      handleImageClick(item.Image);
                    }}
                  />
                </div>
                <div className="lg:w-2/3 flex flex-col p-3">
                  <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                  <h2 className="text-base font-medium text-indigo-400 mb-2">
                    {item.date} - {item.author}
                  </h2>
                  <p className="mt-2 text-gray-700">
                    {truncateDescription(item.description, 570)}
                  </p>

                  {/* Debera tomarser el id de la lista_noticias de modelo_noticias */}
                  <Link href={`/tendenciaseducativas/${item.id}`}>
                    <button className="mt-4 bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                      Saber más
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
