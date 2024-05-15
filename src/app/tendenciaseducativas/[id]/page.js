"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import Image from "next/image";
import { lista_noticias } from "../../../utils/modelo_noticias"; // Importar la lista de noticias

export default function Noticia() {
  // Obtener el ID de la noticia de la URL
  const { id } = useParams();
  const [noticia, setNoticia] = useState(null);
  const router = useRouter();
  console.log("id", id);

  useEffect(() => {
    // Buscar la noticia correspondiente al ID en la lista de noticias
    if (id) {
      const noticiaEncontrada = lista_noticias.find(
        (item) => item.id === parseInt(id)
      );
      setNoticia(noticiaEncontrada);
    }
  }, [id]);

  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [showAllComments, setShowAllComments] = useState(false);

  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  const handleCommentSubmit = (comment) => {
    setComments((prevComments) => [comment, ...prevComments]);
  };

  const handleShowAllComments = () => {
    setShowAllComments(true);
  };

  function proyect(to) {
    router.push(to);
  }

  const visibleComments = showAllComments ? comments : comments.slice(0, 1);
  const remainingCommentsCount = comments.length - visibleComments.length;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Boton regresar */}
      <div className="max-w-3xl mx-auto">
        <button
          className="p-1 text-gray-500 hover:underline mb-2 mb-2 flex items-center space-x-2 mt-4"
          onClick={() => proyect("/tendenciaseducativas")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-left-circle text-red-400"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
            />
          </svg>
          <span className="text-gray-500 hover:text-red-400 transition">
            Regresar
          </span>
        </button>
        {/* Título de la noticia */}
        <h1 className="text-4xl font-bold mb-4">
          {noticia ? noticia.name : "Cargando..."}
        </h1>

        {/* Botón de like */}
        <div className="flex">
          <button
            onClick={handleLike}
            className="flex items-center bg-red-500 text-white rounded-full px-4 py-1 mb-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              className="bi bi-heart-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
              />
            </svg>
          </button>
          {/* Contador de likes */}
          <div className="ml-1 text-gray-600">
            +{likes} {likes === 1 ? "persona" : "personas"}
            {likes === 1 ? "" : " "}
          </div>
        </div>

        {/* Contenido de la noticia */}
        <div className="border-t border-gray-300 pt-4 mb-2"></div>
        <div className="mb-3 flex justify-center">
          {/* Mostrar la imagen de la noticia si está disponible */}
          {noticia && noticia.Image && (
            <Image
              src={noticia.Image} // URL de la imagen
              alt={noticia.name} // Texto alternativo de la imagen
              layout="responsive" // Hacer la imagen adaptable al tamaño del contenedor
              width={550} // Ancho deseado de la imagen
              height={300} // Alto deseado de la imagen
              className="rounded-lg"
            />
          )}
        </div>
        {/* Contenedor flex para alinear los elementos */}
        <div className="flex justify-between items-center mb-8">
          {/* Mostrar autor y fecha */}
          <div className="text-sm text-gray-600">
            {noticia ? (
              <>
                <span>Autor: {noticia.author}</span>
                <br />
                <span>Fecha: {noticia.date}</span>
              </>
            ) : null}
          </div>

          {/* Botón para compartir en Facebook */}
          <span className="ml-10 text-gray-600">Compartir: </span>
          <button
            onClick={() => {
              // URL de la noticia
              const url = window.location.href;
              // URL de compartir en Facebook
              const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                url
              )}`;
              // Abrir ventana emergente
              window.open(facebookShareUrl, "_blank", "width=600,height=400");
            }}
            className="flex items-center px-4 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="26"
              height="26"
              viewBox="0 0 32 32"
              className="fill-current text-indigo-500 ml-5"
            >
              {" "}
              <path d="M 7 5 C 5.90625 5 5 5.90625 5 7 L 5 25 C 5 26.09375 5.90625 27 7 27 L 25 27 C 26.09375 27 27 26.09375 27 25 L 27 7 C 27 5.90625 26.09375 5 25 5 Z M 7 7 L 25 7 L 25 25 L 19.8125 25 L 19.8125 18.25 L 22.40625 18.25 L 22.78125 15.25 L 19.8125 15.25 L 19.8125 13.3125 C 19.8125 12.4375 20.027344 11.84375 21.28125 11.84375 L 22.90625 11.84375 L 22.90625 9.125 C 22.628906 9.089844 21.667969 9.03125 20.5625 9.03125 C 18.257813 9.03125 16.6875 10.417969 16.6875 13 L 16.6875 15.25 L 14.0625 15.25 L 14.0625 18.25 L 16.6875 18.25 L 16.6875 25 L 7 25 Z"></path>{" "}
            </svg>
          </button>
        </div>

        <div className="text-lg leading-relaxed mb-6">
          {noticia ? noticia.description : "Cargando..."}
        </div>

        <div className="text-lg leading-relaxed mb-6">
          {noticia ? noticia.description : "Cargando..."}
        </div>

        {/* Sección de comentarios */}
        <div className="border-t border-gray-300 pt-4">
          <h2 className="text-xl font-bold mb-2">Comentarios</h2>
          {/* Formulario de comentario */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const commentInput = e.target.elements.comment;
              handleCommentSubmit(commentInput.value);
              commentInput.value = "";
            }}
          >
            <textarea
              name="comment"
              placeholder="Escribe tu comentario..."
              className="w-full p-2 mb-2 border border-gray-300 rounded"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-1 rounded"
            >
              Enviar
            </button>
          </form>
          {/* Mostrar comentarios */}
          {visibleComments.map((comment, index) => (
            <div key={index} className="mb-2">
              <p className="mb-1">{comment}</p>
            </div>
          ))}
          {/* Botón Mostrar más */}
          {!showAllComments && remainingCommentsCount > 0 && (
            <button
              onClick={handleShowAllComments}
              className="text-blue-500 mt-2 cursor-pointer"
            >
              Mostrar más ({remainingCommentsCount})
            </button>
          )}
        </div>

        {/* Detalles de la noticia */}
        <div className="border-t border-gray-300 pt-2 mt-2">
          <p className="text-gray-600">
            <strong>Autor:</strong> {noticia ? noticia.author : "Cargando..."}
          </p>
          <p className="text-gray-600">
            <strong>Fecha:</strong> {noticia ? noticia.date : "Cargando..."}
          </p>
        </div>
      </div>
    </div>
  );
}
