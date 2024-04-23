"use client";
import React, { useState } from 'react';

const NewsPage = () => {
    const [news, setNews] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const description = event.target.elements.description.value;

        if (!selectedImage) {
            alert("Por favor selecciona una imagen.");
            return;
        }

        if (!description) {
            alert("Por favor ingresa la descripción de la imagen.");
            return;
        }

        addNews(URL.createObjectURL(selectedImage), description);
        setSelectedImage(null);

        event.target.reset();
    };

    const addNews = (image, description) => {
        const newNews = [...news, { image, description, comments: [], shares: 0 }];
        setNews(newNews);
    };

    const renderNews = () => {
        return news.map((item, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6 mb-4">
                <img src={item.image} alt="News" className="w-full rounded" />
                <p className="text-white text-lg mt-4">{item.description}</p>
                <div className="flex justify-between mt-4">
                    <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mr-2" onClick={() => handleComment(index)}>Comentar</button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={() => handleShare(index)}>Compartir</button>
                </div>
                {item.comments.length > 0 && (
                    <div className="mt-4">
                        <h3 className="text-lg text-white font-bold">Comentarios:</h3>
                        <ul>
                            {item.comments.map((comment, commentIndex) => (
                                <li key={commentIndex} className="text-black bg-white p-4 rounded mt-1">{comment}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        ));
    };

    const handleComment = (index) => {
        const comment = prompt("Escribe tu comentario:");
        if (comment !== null) {
            const newComments = [...news[index].comments, comment];
            const updatedNews = [...news];
            updatedNews[index].comments = newComments;
            setNews(updatedNews);
        }
    };

    const handleShare = (index) => {
        const updatedNews = [...news];
        updatedNews[index].shares += 1;
        setNews(updatedNews);
    };

    return (
        <div className="bg-gray-100 p-2">
            <div className="max-w-7xl mx-auto bg-white px-4 py-8">
                <h1 className="text-4xl font-bold mb-8">Blog de Noticias</h1>
                <form onSubmit={handleSubmit} className="mb-8">
                    <input type="file" name="image" accept="image/*" className="mb-2 mr-3" onChange={handleImageUpload} />
                    <input type="text" name="description" placeholder="Descripción" className="bg-gray-800 text-white rounded px-4 py-2 mb-2 mr-3" />
                    <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Agregar Noticia</button>
                </form>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {renderNews()}
                </div>
            </div>
        </div>
    );
};

export default NewsPage;
