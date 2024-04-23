"use client";
import Image from "next/image";
import React, { useState } from "react";
import { lista_noticias } from "../../utils/modelo_noticias";

export default function TendenciasEducativas() {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);

  const handleComment = () => {
    const comment = prompt("Escribe tu comentario:");
    if (comment !== null) {
      setComments([
        ...comments,
        { text: comment, likes: 0, dislikes: 0, replies: [] },
      ]);
    }
  };

  const handleLike = (index) => {
    const updatedComments = [...comments];
    updatedComments[index].likes += 1;
    setComments(updatedComments);
  };

  const handleDislike = (index) => {
    const updatedComments = [...comments];
    updatedComments[index].dislikes += 1;
    setComments(updatedComments);
  };

  const handleReply = (index) => {
    const reply = prompt("Escribe tu respuesta:");
    if (reply !== null) {
      const updatedComments = [...comments];
      updatedComments[index].replies = updatedComments[index].replies || [];
      updatedComments[index].replies.push(reply);
      setComments(updatedComments);
    }
  };

  return (
    <div className="bg-gray-100 p-2">
      <div className="max-w-7xl mx-auto px-4 bg-white px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-5">
          Tendencias Educativas
        </h1>
        <p className="text-lg text-center mb-8 text-red-600">
          Explora las últimas noticias de la UCACUE y mantente al tanto de las
          tendencias educativas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {/* Iterar sobre la lista de noticias */}
          {lista_noticias.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <Image
                className="mb-2 rounded-lg"
                src={item.Image}
                alt="Next.js Logo"
                width={600}
                height={30}
                priority
              />
              <h2 className="text-xl font-bold mb-2">{item.name}</h2>
              <h2 className="text-base font-medium text-indigo-300 mb-2">
                {item.date}
              </h2>
              <p className="text-gray-600">{item.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mr-2"
                  onClick={handleComment}
                >
                Comentar
              </button>
            </div>
            <div className="mt-4">
              <h3 className="text-black font-bold mb-2">Comentarios:</h3>
              <ul>
                {comments.map((comment, index) => (
                  <li key={index} className="flex items-start mb-4">
                    <div className="flex flex-col">
                      <div className="flex items-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M0 3a1 1 0 011-1h18a1 1 0 110 2H1a1 1 0 01-1-1zm0 6a1 1 0 011-1h18a1 1 0 110 2H1a1 1 0 01-1-1zm0 6a1 1 0 011-1h10a1 1 0 110 2H1a1 1 0 01-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className="text-gray-600">{comment.text}</p>
                      </div>
                      <div className="ml-auto">
                        <button
                          className="text-gray-500 hover:text-gray-700 mr-2"
                          onClick={() => handleLike(index)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-hand-thumbs-up"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                          </svg>
                          ({comment.likes})
                        </button>
                        <button
                          className="text-gray-500 hover:text-gray-700 mr-2"
                          onClick={() => handleDislike(index)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-hand-thumbs-down"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856s-.036.586-.113.856c-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a10 10 0 0 1-.443-.05 9.36 9.36 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a9 9 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581s-.027-.414-.075-.581c-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.2 2.2 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.9.9 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1" />
                          </svg>
                          ({comment.dislikes})
                        </button>
                        <button
                          className="text-gray-500 hover:text-gray-700"
                          onClick={() => handleReply(index)}
                        >
                          Responder
                        </button>
                      </div>
                      {comment.replies && comment.replies.length > 0 && (
                        <ul className="ml-8">
                          {comment.replies.map((reply, replyIndex) => (
                            <li key={replyIndex} className="text-gray-600 mb-2">
                              <span className="font-semibold">Respuesta:</span>{" "}
                              {reply}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
            ))}
        </div>
      </div>
    </div>
  );
}
