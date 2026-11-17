"use client";
// Pantalla que se muestra cuando alguien entra a /panel sin poder usarlo:
// - sin sesión: botón para iniciar sesión con Google
// - con sesión pero sin autorización: aviso y botón para cerrar sesión
import { signIn, signOut } from "next-auth/react";

export default function AccesoPanel({ sinSesion }) {
  return (
    <section className="max-w-xl mx-auto px-4 py-16 text-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Panel de contenidos</h1>

      {sinSesion ? (
        <>
          <p className="text-gray-600 mb-6">
            Inicia sesión con una cuenta autorizada para publicar boletines y novedades.
          </p>
          <button
            type="button"
            onClick={() => signIn("google", { callbackUrl: "/panel" })}
            className="bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded"
          >
            Iniciar sesión con Google
          </button>
        </>
      ) : (
        <>
          <p className="text-gray-600 mb-6">
            Tu cuenta no tiene acceso al panel. Si crees que es un error, comunícate con el
            responsable de RIOUC.
          </p>
          <button
            type="button"
            onClick={() => signOut({ callbackUrl: "/panel" })}
            className="border border-gray-400 hover:bg-gray-100 text-gray-700 px-6 py-2 rounded"
          >
            Cerrar sesión
          </button>
        </>
      )}
    </section>
  );
}
