"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Proyectos from "@riuc/app/proyectos/page";
import { lista_proyectos } from "@riuc/utils/modelo_proyectos";

export default function SideBar({ navLinks }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [showProjects, setShowProjects] = useState(false); 

  function setRouteAndHide(to) {
    //console.log(to);
    router.push(to);
    setOpen(false);
  }

  return (
    <>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed left-0 top-0 flex w-full justify-left p-10 border-b border-gray-350 bg-gradient-to-b bg-black pb-3 pt-3">
          &nbsp;
          <div className="font-mono font-bold">
            <a
              className="cursor-pointer flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => router.push("/")}
            >
              {" "}
              <Image
                src="/img/ciitt-logo.png"
                alt="CIITT Logo"
                className="dark:invert"
                width={250}
                height={30}
                priority
              />
            </a>
          </div>
        </div>
      </div>
      <button
        className="ml-4 fixed right-3 p-5 border-b border-gray-50"
        onClick={() => setOpen(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      <div
        className={`${
          !open && "hidden"
        } bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`}
        onClick={() => setOpen(false)}
      ></div>

      <div
        className={`${
          open ? "w-80" : "w-0"
        } bg-black min-h-screen fixed top-0 left-0 transition-all duration-300`}
      >
        <div className={`${!open && "hidden"} pt-3`}>
          {navLinks.map((link) => {
            const isActive = pathname === link.to;

            return (
              // eslint-disable-next-line react/jsx-key
              <div className="">
                <button
                  key={link.id}
                  className={
                    isActive
                      ? "ml-4 text-center text-text-red-700 text-xl text-red-700 py-3 mb-2"
                      : "ml-4 text-center text-white text-xl rounded-full hover:bg-red-700 py-3 mb-2"
                  }
                  type="button"
                  onClick={() => setRouteAndHide(link.to)}
                >
                  {link.name}
                </button>
                  
                  {/* Boton desplegable \*/}
                  
                {link.expanded ? (
                  <button className="mb-5 p-1"
                  onClick={() => setShowProjects(!showProjects)}
                  ><svg
                    className="place-self-center h-6 text-white hover:text-red-700 transition-all duration-300 ease-in-out transform hover:scale-110"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="white"
                  >
                    <path d="M8 10.293l-4.146-4.147a.5.5 0 10-.708.708l4.5 4.5a.5.5 0 00.708 0l4.5-4.5a.5.5 0 10-.708-.708L8 10.293z" />
                  </svg>
                  </button>
                ) : (
                  <></>
                )}
                {showProjects && link.expanded && (
                  <div className="pl-8">
                    {lista_proyectos.map((proyecto) => (
                      <a
                        key={proyecto.id}
                        href={proyecto.to}
                        className="text-white hover:text-red-600 block"
                      >
                        {proyecto.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        <div className="absolute bottom-0 w-full">
          <h1 className="font-sans text-center text-white">
            ciitt@ucacue.edu.ec
          </h1>
        </div>
        </div>
        
      </div>
    </>
  );
}