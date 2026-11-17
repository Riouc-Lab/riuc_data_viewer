"use client";
// Barra superior del panel: enlace a la lista, correo de la sesión y cerrar sesión
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function BarraPanel({ correo }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-4 mb-6">
      <Link href="/panel" className="text-lg font-semibold text-red-700 hover:underline">
        Panel de contenidos
      </Link>
      <div className="flex items-center gap-4 text-sm text-gray-600">
        <span>{correo}</span>
        <button
          type="button"
          onClick={() => signOut({ callbackUrl: "/" })}
          className="border border-gray-300 hover:bg-gray-100 px-3 py-1 rounded"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}
