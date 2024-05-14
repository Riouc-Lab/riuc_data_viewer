"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { lista_noticias } from "../../../utils/modelo_noticias"; // Importar la lista de noticias

export default function Noticia() {
  // Obtener el ID de la noticia de la URL
  const { id } = useParams();
  const [noticia, setNoticia] = useState(null);

  console.log("id", id);
  
  useEffect(() => {
    // Buscar la noticia correspondiente al ID en la lista de noticias
    if (id) {
      const noticiaEncontrada = lista_noticias.find((item) => item.id === parseInt(id));
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

  const visibleComments = showAllComments ? comments : comments.slice(0, 1);
  const remainingCommentsCount = comments.length - visibleComments.length;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Título de la noticia */}
        <h1 className="text-3xl font-bold mb-4">{noticia ? noticia.name : "Cargando..."}</h1>

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
        <div className="border-t border-gray-300 pt-4">
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
