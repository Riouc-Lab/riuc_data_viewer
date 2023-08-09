"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function SideBar({ navLinks }) {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const pathname= usePathname()

  function setRouteAndHide(to){
    //console.log(to);
    router.push(to)
    setOpen(false)
   }
  
  return (
    <>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed left-0 top-0 flex w-full justify-left p-10 border-b border-gray-350 bg-gradient-to-b from-zinc-200 pb-6 pt-3 bg-black">
          &nbsp;
          <div className="font-mono font-bold">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => router.push("/")}
            >
              {" "}
              <Image
                src="/img/ciitt-logo.png"
                alt="CIITT Logo"
                className="dark:invert"
                width={300}
                height={30}
                priority
              />
            </a>
          </div>
        </div>
      </div>
      <button
        className="ml-4 fixed right-10 p-1 border-b border-gray-50"
        onClick={() => setOpen(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
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
              <button  className={isActive ? 'ml-4 grid text-center text-white text-xl text-red-700 py-3 mb-2' : 'ml-4 grid text-center text-white text-xl hover:bg-red-700 py-3 mb-2'} type="button" onClick={() => setRouteAndHide(link.to)
              }>
               {link.name} 
              </button>
            );
          })}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          <h1 className="font-sans text-center text-white">
            ciitt@ucacue.edu.ec
          </h1>
        </div>
      </div>
    </>
  );
}
