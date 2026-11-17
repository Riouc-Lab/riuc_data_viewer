"use client";
// Formulario para crear o editar un boletín o una novedad.
// - "Guardar" crea el contenido (como borrador) o guarda los cambios.
// - "Publicar" guarda y luego lo publica.
// - "Pasar a borrador" lo quita de la web sin borrarlo.
import { useState } from "react";
import Link from "next/link";
import EditorTexto from "./EditorTexto";
import SubirArchivo from "./SubirArchivo";

const CAMPOS_VACIOS = {
  tipo: "boletin",
  numero: "",
  titulo: "",
  resumen: "",
  cuerpo: "",
  imagen_url: "",
  archivo_url: "",
  autor: "",
  periodo: "",
};

// Arma el estado inicial del formulario a partir del contenido guardado
function camposIniciales(contenido, numerosSugeridos) {
  if (!contenido) {
    return { ...CAMPOS_VACIOS, numero: numerosSugeridos?.boletin ?? 1 };
  }
  const campos = {};
  for (const clave of Object.keys(CAMPOS_VACIOS)) {
    campos[clave] = contenido[clave] ?? "";
  }
  return campos;
}

// Llama a la API y devuelve el contenido, o lanza el mensaje de error del servidor
async function enviar(url, metodo, cuerpo) {
  const respuesta = await fetch(url, {
    method: metodo,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cuerpo),
  });
  const datos = await respuesta.json().catch(() => ({}));
  if (!respuesta.ok) {
    throw new Error(datos.error || "Ocurrió un error. Intenta de nuevo.");
  }
  return datos.contenido;
}

const claseCampo =
  "w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-200";
const claseEtiqueta = "block text-sm font-medium text-gray-700 mb-1";

export default function FormularioContenido({ contenido, numerosSugeridos }) {
  const [id, setId] = useState(contenido?.id ?? null);
  const [estado, setEstado] = useState(contenido?.estado ?? "borrador");
  const [fechaPublicacion, setFechaPublicacion] = useState(contenido?.fecha_publicacion ?? null);
  const [campos, setCampos] = useState(() => camposIniciales(contenido, numerosSugeridos));
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  const [trabajando, setTrabajando] = useState(false);

  const esBoletin = campos.tipo === "boletin";

  function cambiarCampo(nombre, valor) {
    setCampos((anteriores) => ({ ...anteriores, [nombre]: valor }));
  }

  // Al crear uno nuevo, cambiar el tipo también sugiere su siguiente número
  function cambiarTipo(tipo) {
    setCampos((anteriores) => ({
      ...anteriores,
      tipo,
      numero: id ? anteriores.numero : numerosSugeridos?.[tipo] ?? anteriores.numero,
    }));
  }

  function actualizarDesde(guardado) {
    setEstado(guardado.estado);
    setFechaPublicacion(guardado.fecha_publicacion);
    if (!id) {
      setId(guardado.id);
      // Cambia la dirección a /panel/[id] sin recargar, para que se pueda volver a editar
      window.history.replaceState(null, "", `/panel/${guardado.id}`);
    }
  }

  async function guardar() {
    if (!campos.titulo.trim()) {
      throw new Error("El título es obligatorio.");
    }
    const guardado = id
      ? await enviar(`/api/panel/contenidos/${id}`, "PUT", campos)
      : await enviar("/api/panel/contenidos", "POST", campos);
    actualizarDesde(guardado);
    return guardado;
  }

  async function cambiarEstado(nuevoEstado) {
    // Primero se guardan los cambios, después se cambia el estado
    const guardado = await guardar();
    const actualizado = await enviar(`/api/panel/contenidos/${guardado.id}/estado`, "PUT", {
      estado: nuevoEstado,
    });
    actualizarDesde(actualizado);
  }

  // Ejecuta una acción mostrando "trabajando", el mensaje de éxito o el error
  async function ejecutar(accion, textoExito) {
    setTrabajando(true);
    setMensaje("");
    setError("");
    try {
      await accion();
      setMensaje(textoExito);
    } catch (err) {
      setError(err.message);
    } finally {
      setTrabajando(false);
    }
  }

  function publicar() {
    if (!window.confirm("¿Publicar este contenido? Aparecerá en la web.")) return;
    ejecutar(() => cambiarEstado("publicado"), "Contenido publicado.");
  }

  function pasarABorrador() {
    if (!window.confirm("¿Pasar a borrador? Dejará de aparecer en la web.")) return;
    ejecutar(() => cambiarEstado("borrador"), "El contenido ahora es un borrador.");
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-800">
          {id ? "Editar contenido" : "Nuevo contenido"}
        </h1>
        <div className="text-sm text-gray-600">
          Estado:{" "}
          <strong className={estado === "publicado" ? "text-green-700" : "text-yellow-700"}>
            {estado === "publicado" ? "Publicado" : "Borrador"}
          </strong>
          {fechaPublicacion && ` · publicado el ${fechaPublicacion.split("-").reverse().join("/")}`}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="tipo" className={claseEtiqueta}>Tipo</label>
          <select
            id="tipo"
            value={campos.tipo}
            onChange={(e) => cambiarTipo(e.target.value)}
            className={claseCampo}
          >
            <option value="boletin">Boletín</option>
            <option value="novedad">Novedad</option>
          </select>
        </div>
        <div>
          <label htmlFor="numero" className={claseEtiqueta}>Número</label>
          <input
            id="numero"
            type="number"
            min="1"
            value={campos.numero}
            onChange={(e) => cambiarCampo("numero", e.target.value)}
            className={claseCampo}
          />
          <p className="text-xs text-gray-500 mt-1">
            Dirección pública: {esBoletin ? `/boletin/n${campos.numero}` : `/Novedades/${campos.numero}`}
          </p>
        </div>
        <div>
          {esBoletin ? (
            <>
              <label htmlFor="periodo" className={claseEtiqueta}>Periodo</label>
              <input
                id="periodo"
                type="text"
                placeholder="mayo - agosto 2026"
                value={campos.periodo}
                onChange={(e) => cambiarCampo("periodo", e.target.value)}
                className={claseCampo}
              />
            </>
          ) : (
            <>
              <label htmlFor="autor" className={claseEtiqueta}>Autor</label>
              <input
                id="autor"
                type="text"
                value={campos.autor}
                onChange={(e) => cambiarCampo("autor", e.target.value)}
                className={claseCampo}
              />
            </>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="titulo" className={claseEtiqueta}>Título *</label>
        <input
          id="titulo"
          type="text"
          maxLength={200}
          value={campos.titulo}
          onChange={(e) => cambiarCampo("titulo", e.target.value)}
          className={claseCampo}
        />
      </div>

      <div>
        <label htmlFor="resumen" className={claseEtiqueta}>Resumen</label>
        <textarea
          id="resumen"
          rows={3}
          maxLength={500}
          value={campos.resumen}
          onChange={(e) => cambiarCampo("resumen", e.target.value)}
          className={claseCampo}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SubirArchivo
          etiqueta="Imagen de portada"
          extensiones={["jpg", "png", "webp"]}
          url={campos.imagen_url}
          onCambio={(url) => cambiarCampo("imagen_url", url)}
        />
        <SubirArchivo
          etiqueta={esBoletin ? "PDF del boletín" : "PDF (opcional)"}
          extensiones={["pdf"]}
          url={campos.archivo_url}
          onCambio={(url) => cambiarCampo("archivo_url", url)}
        />
      </div>

      <div>
        <p className={claseEtiqueta}>Contenido</p>
        {/* valorInicial no cambia mientras se escribe: el editor guarda su propio texto */}
        <EditorTexto
          valorInicial={contenido?.cuerpo ?? ""}
          onChange={(html) => cambiarCampo("cuerpo", html)}
        />
      </div>

      {mensaje && <p className="text-green-700 bg-green-50 border border-green-200 rounded px-4 py-2">{mensaje}</p>}
      {error && <p className="text-red-700 bg-red-50 border border-red-200 rounded px-4 py-2">{error}</p>}

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          disabled={trabajando}
          onClick={() => ejecutar(guardar, id ? "Cambios guardados." : "Borrador creado.")}
          className="bg-gray-800 hover:bg-gray-900 text-white px-5 py-2 rounded disabled:opacity-50"
        >
          {id ? "Guardar cambios" : "Guardar borrador"}
        </button>
        {estado === "borrador" ? (
          <button
            type="button"
            disabled={trabajando}
            onClick={publicar}
            className="bg-red-700 hover:bg-red-800 text-white px-5 py-2 rounded disabled:opacity-50"
          >
            Publicar
          </button>
        ) : (
          <button
            type="button"
            disabled={trabajando}
            onClick={pasarABorrador}
            className="border border-gray-400 hover:bg-gray-100 text-gray-700 px-5 py-2 rounded disabled:opacity-50"
          >
            Pasar a borrador
          </button>
        )}
        <Link href="/panel" className="px-5 py-2 text-gray-600 hover:underline">
          Volver a la lista
        </Link>
      </div>
    </div>
  );
}
