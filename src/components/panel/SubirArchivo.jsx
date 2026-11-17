"use client";
// Botón para subir un archivo (PDF o imagen) a /api/panel/archivos.
// El archivo se manda tal cual en el cuerpo de la petición para que el
// servidor lo guarde por partes. El servidor vuelve a revisar el tipo real
// y el tamaño: lo que se revisa aquí es solo para avisar antes al usuario.
import { useState } from "react";
import { TIPOS_PERMITIDOS, textoTamano } from "../../utils/archivos_panel";

export default function SubirArchivo({ etiqueta, extensiones, url, onCambio }) {
  const tipos = TIPOS_PERMITIDOS.filter((tipo) => extensiones.includes(tipo.extension));
  const [subiendo, setSubiendo] = useState(false);
  const [error, setError] = useState("");

  async function elegirArchivo(evento) {
    const archivo = evento.target.files?.[0];
    evento.target.value = ""; // para poder elegir el mismo archivo otra vez
    if (!archivo) return;
    setError("");

    const tipo = tipos.find((t) => t.mime === archivo.type);
    if (!tipo) {
      setError(`Solo se aceptan: ${tipos.map((t) => t.extension.toUpperCase()).join(", ")}.`);
      return;
    }
    if (archivo.size > tipo.limite) {
      setError(`El archivo pesa más de ${textoTamano(tipo.limite)}.`);
      return;
    }

    setSubiendo(true);
    try {
      const respuesta = await fetch("/api/panel/archivos", {
        method: "POST",
        headers: { "Content-Type": archivo.type },
        body: archivo,
      });
      const datos = await respuesta.json().catch(() => ({}));
      if (!respuesta.ok) {
        throw new Error(datos.error || "No se pudo subir el archivo.");
      }
      onCambio(datos.url);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubiendo(false);
    }
  }

  return (
    <div>
      <p className="block text-sm font-medium text-gray-700 mb-1">{etiqueta}</p>
      <div className="flex flex-wrap items-center gap-3">
        <label className={`border border-gray-300 rounded px-3 py-1 text-sm ${subiendo ? "opacity-50" : "cursor-pointer hover:bg-gray-100"}`}>
          {subiendo ? "Subiendo..." : url ? "Cambiar archivo" : "Elegir archivo"}
          <input
            type="file"
            accept={tipos.map((t) => t.mime).join(",")}
            onChange={elegirArchivo}
            disabled={subiendo}
            className="hidden"
          />
        </label>
        {url && (
          <>
            <a href={url} target="_blank" rel="noopener noreferrer" className="text-sm text-red-700 hover:underline">
              Ver archivo
            </a>
            <button
              type="button"
              onClick={() => onCambio("")}
              className="text-sm text-gray-500 hover:underline"
            >
              Quitar
            </button>
          </>
        )}
      </div>
      <p className="text-xs text-gray-500 mt-1">
        {tipos.map((t) => `${t.extension.toUpperCase()} hasta ${textoTamano(t.limite)}`).join(" · ")}
      </p>
      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
}
