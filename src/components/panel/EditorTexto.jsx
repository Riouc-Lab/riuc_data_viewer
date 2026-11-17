"use client";
// Editor de texto sencillo para el cuerpo de boletines y novedades.
// Usa un div editable (contentEditable) con botones de formato básicos.
// Todo el HTML pasa por limpiarHtml, que solo deja etiquetas de texto seguras.
// Ojo: las páginas públicas también deben sanear el HTML antes de mostrarlo,
// porque alguien podría llamar a la API sin usar este editor.
import { useEffect, useRef } from "react";

// Etiquetas que se conservan. Las demás se quitan pero se deja su texto.
const ETIQUETAS_PERMITIDAS = [
  "P", "BR", "DIV", "STRONG", "B", "EM", "I", "U",
  "UL", "OL", "LI", "H2", "H3", "BLOCKQUOTE", "A",
];

// Etiquetas que se borran con todo su contenido
const ETIQUETAS_PELIGROSAS = ["SCRIPT", "STYLE", "IFRAME", "OBJECT", "EMBED", "TEMPLATE"];

// Solo enlaces http, https, mailto o del propio sitio (/algo)
function enlaceSeguro(url) {
  const limpio = (url || "").trim();
  return /^(https?:\/\/|mailto:)/i.test(limpio) || (limpio.startsWith("/") && !limpio.startsWith("//"));
}

function limpiarNodo(nodo) {
  for (const hijo of Array.from(nodo.childNodes)) {
    if (hijo.nodeType === Node.TEXT_NODE) continue;
    if (hijo.nodeType !== Node.ELEMENT_NODE) {
      hijo.remove(); // comentarios y otros nodos
      continue;
    }
    if (ETIQUETAS_PELIGROSAS.includes(hijo.tagName)) {
      hijo.remove();
      continue;
    }

    limpiarNodo(hijo);

    if (!ETIQUETAS_PERMITIDAS.includes(hijo.tagName)) {
      hijo.replaceWith(...Array.from(hijo.childNodes));
      continue;
    }

    // Se quitan todos los atributos (onclick, style...), salvo el href seguro de los enlaces
    for (const atributo of Array.from(hijo.attributes)) {
      const esHrefSeguro = hijo.tagName === "A" && atributo.name === "href" && enlaceSeguro(atributo.value);
      if (!esHrefSeguro) hijo.removeAttribute(atributo.name);
    }
    if (hijo.tagName === "A") hijo.setAttribute("rel", "noopener noreferrer");
  }
}

// Devuelve el HTML solo con etiquetas y enlaces permitidos.
// DOMParser no ejecuta scripts, así que es seguro para revisar el HTML.
export function limpiarHtml(html) {
  const documento = new DOMParser().parseFromString(`<body>${html || ""}</body>`, "text/html");
  limpiarNodo(documento.body);
  return documento.body.innerHTML;
}

const BOTONES = [
  { texto: "B", titulo: "Negrita", comando: "bold", clase: "font-bold" },
  { texto: "I", titulo: "Cursiva", comando: "italic", clase: "italic" },
  { texto: "U", titulo: "Subrayado", comando: "underline", clase: "underline" },
  { texto: "Título", titulo: "Subtítulo", comando: "formatBlock", valor: "H2" },
  { texto: "Párrafo", titulo: "Texto normal", comando: "formatBlock", valor: "P" },
  { texto: "• Lista", titulo: "Lista con viñetas", comando: "insertUnorderedList" },
  { texto: "1. Lista", titulo: "Lista numerada", comando: "insertOrderedList" },
];

export default function EditorTexto({ valorInicial, onChange }) {
  const editorRef = useRef(null);

  // Se carga el contenido guardado una sola vez, ya limpio
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = limpiarHtml(valorInicial);
    }
  }, [valorInicial]);

  function avisarCambio() {
    onChange(limpiarHtml(editorRef.current.innerHTML));
  }

  function aplicar(comando, valor) {
    editorRef.current.focus();
    // execCommand es antiguo pero sigue funcionando en los navegadores y es suficiente aquí
    document.execCommand(comando, false, valor);
    avisarCambio();
  }

  function agregarEnlace() {
    const url = window.prompt("Dirección del enlace (por ejemplo https://www.ucacue.edu.ec):");
    if (!url) return;
    if (!enlaceSeguro(url)) {
      window.alert("El enlace debe empezar con https://, http://, mailto: o /");
      return;
    }
    aplicar("createLink", url.trim());
  }

  // Al pegar, se pega solo el texto (sin formato ni código de otras páginas)
  function pegarTexto(evento) {
    evento.preventDefault();
    const texto = evento.clipboardData.getData("text/plain");
    document.execCommand("insertText", false, texto);
    avisarCambio();
  }

  return (
    <div className="border border-gray-300 rounded">
      <div className="flex flex-wrap gap-1 border-b border-gray-300 bg-gray-50 p-2">
        {BOTONES.map((boton) => (
          <button
            key={boton.titulo}
            type="button"
            title={boton.titulo}
            // onMouseDown con preventDefault para no perder el texto seleccionado
            onMouseDown={(evento) => evento.preventDefault()}
            onClick={() => aplicar(boton.comando, boton.valor)}
            className={`px-2 py-1 text-sm border border-gray-300 rounded bg-white hover:bg-gray-100 ${boton.clase || ""}`}
          >
            {boton.texto}
          </button>
        ))}
        <button
          type="button"
          title="Agregar enlace"
          onMouseDown={(evento) => evento.preventDefault()}
          onClick={agregarEnlace}
          className="px-2 py-1 text-sm border border-gray-300 rounded bg-white hover:bg-gray-100"
        >
          Enlace
        </button>
      </div>
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        onInput={avisarCambio}
        onPaste={pegarTexto}
        className="min-h-[300px] p-4 focus:outline-none [&_h2]:text-xl [&_h2]:font-bold [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_a]:text-red-700 [&_a]:underline"
      />
    </div>
  );
}
