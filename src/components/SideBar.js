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
  const ref = React.useRef(null);

  function showMenu1(flag,to) {
    let icon1 = document.getElementById("icon1");
    let menu1 = document.getElementById("menu1");

    if (flag) {
      icon1.classList.toggle("rotate-180");
      menu1.classList.toggle("hidden");
    }else{
      router.push(to);
      setOpen(false);
    }
  }
  function goto(to){
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
              <>
                <div className="flex items-center justify-between">
                  <div class="flex flex-col justify-start items-center   px-6 border-b border-gray-600 w-full  ">
                    <button
                    key={link.id}
                      onClick={() => showMenu1(link.expanded,link.to)}
                      class={isActive?"focus:outline-none focus:text-red-600 text-left text-red-500 flex justify-between items-center w-full py-5 space-x-14  ":"focus:outline-none focus:text-red-600 text-left text-white flex justify-between items-center w-full py-5 space-x-14  "}
                    >
                      <p class="text-sm leading-5  uppercase">{link.name}</p>
                      {link.expanded ? (
                        <svg
                          ref={ref}
                          id="icon1"
                          class="transform"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 15L12 9L6 15"
                            stroke="currentColor"
                            stroke-width="1.5"
                          />
                        </svg>
                      ) : (
                        <></>
                      )}
                    </button>
                    {link.expanded ? (
                      <div
                        ref={ref}
                        id="menu1"
                        class="flex justify-start  flex-col w-full md:w-auto items-start pb-1 "
                      >
                        {lista_proyectos.map((proyecto) => (
                          <button key={proyecto.id} onClick={()=>goto(proyecto.to)} class="flex justify-start items-center space-x-6 hover:text-white focus:bg-red-800 focus:text-white hover:bg-red-800 text-gray-400 rounded px-3 py-2  w-full md:w-52">
                            <p class="text-base leading-6  ">{proyecto.name}</p>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </>
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