"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { lista_noticias, lista_novedades } from "../../utils/modelo_novedades";

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
      <div className="max-w-7xl mx-auto px-4 bg-white px-4 py-5">
        <div className="flex justify-between items-center space-x-4">
          <div className="flex items-center">
            <a href="https://www.instagram.com/explore/tags/ent%C3%A9ratecato"
            target="_blank"
            rel="noopener noreferrer"
            >
              <Image
                className="ml-3 mr-5"
                src="/img/enterate_cato.png"
                alt="Next.js Logo"
                width={80}
                height={40}
                priority
              />
            </a>
            <a href="https://www.ucacue.edu.ec/contactos/"
            target="_blank"
            rel="noopener noreferrer">
              <Image
                className="ml-3"
                src="/img/contactos_ucacue.png"
                alt="Contactos ucacue"
                width={110}
                height={40}
                priority
              />
            </a>
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg p-2 my-4">
            <a
              href="https://api.whatsapp.com/send/?phone=%2B593963095663&text=Hola+me+puede+ayudar+con+m%C3%A1s+informaci%C3%B3n.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 mr-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="green"
                class="bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/universidadcatolicacuenca"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="blue"
                class="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@ucatocuenca?lang=es"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-3.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                fill="currentColor"
                class="bi bi-tiktok"
                viewBox="0 0 16 16"
              >
                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/UCatolicaCuenca"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                fill="currentColor"
                class="bi bi-twitter-x"
                viewBox="0 0 16 16"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
            </a>
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
                width="32"
                height="32"
                viewBox="0 -3 50 50"
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
            <a
              href="https://www.youtube.com/@UCatolicaCuenca1"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-3 my-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="red"
                class="bi bi-youtube"
                viewBox="0 -1 16 16"
              >
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="bg-gray-800 text-center py-4 mb-4 rounded-lg shadow-md">
          <Image
            src="/img/FINAL_LOGO_BLANCO_ts.png"
            alt="Next.js Logo"
            width={120}
            height={30}
            priority
            className="mx-auto mb-0"
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-200 leading-tight">
            ¡<span className="text-red-600">I</span>
            <span className="text-gray-200">nfografías </span>
          </h1>
          <div className="h-1 w-24 bg-gray-500 mx-auto mt-6 mb-4"></div>
          <p className="text-lg text-gray-300 mb-5">
            Explora las últimas noticias de la RIOUC y mantente al tanto de
            todo lo relacionado con nuestras Investigaciones.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-2">
          {/* Iterar sobre la lista de noticias */}
          {lista_noticias.map((item) => {
            console.log("Item:", item); // Loguear cada elemento
            console.log("ID:", item.id); // Loguear el ID de cada elemento
            return (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col lg:flex-row mb-4"
              >
                <div className="lg:w-1/1 flex justify-center lg:justify-start">
                  <Image
                    className="mb-1 rounded-lg cursor-pointer"
                    src={item.Image}
                    alt="Next.js Logo"
                    width={250}
                    height={250}
                    priority
                    style={{ maxHeight: "600px", maxWidth: "100%" }}
                    onClick={() => {
                      handleImageClick(item.Image);
                    }}
                  />
                </div>
                <div className="lg:w-2/6 flex flex-col p-4">
                  <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                  <h2 className="text-base font-medium text-indigo-400 mb-2">
                    {item.date} - {item.author}
                  </h2>
                  <p className="mt-40 text-gray-700">
                    {truncateDescription(item.description, 570)}
                  </p>

                  {/* Debera tomarser el id de la lista_noticias de modelo_novedades */}
                  <Link href={`/Novedades/${item.id}`}>
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
                      Explorar Infografías
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
