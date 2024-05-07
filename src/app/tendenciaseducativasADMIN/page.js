"use client";
import { useState } from 'react';
import { lista_noticias } from '../..//utils/modelo_noticias.js';

function AdminPage() {
    const [newNews, setNewNews] = useState({
      Image: "",
      id: 0,
      to: "",
      name: "",
      date: "",
      description: "",
    });
  
    const handleAddNews = () => {
      // Agregar la nueva noticia a la lista
      lista_noticias.push({
        Image: newNews.Image,
        id: newNews.id,
        to: newNews.to,
        name: newNews.name,
        author: newNews.author,
        date: new Date().toISOString().slice(0, 10),
        description: newNews.description,
      });
      
      // Limpiar los campos de entrada
      setNewNews({
        Image: "",
        id: 0,
        to: "",
        name: "",
        date: "",
        description: "",
        author: "",
      });
  
      // Imprimir la lista actualizada en la consola
      console.log("Lista de noticias después de agregar:");
      console.log(lista_noticias);
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setNewNews(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    return (
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4 p-5">Administración de Noticias</h1>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="Image" className="block text-sm font-medium text-gray-700">URL de la Imagen</label>
              <input 
                type="text" 
                name="Image"
                id="Image"
                value={newNews.Image} 
                onChange={handleChange} 
                className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300" 
                placeholder="Ingrese la URL de la imagen" 
              />
            </div>
            <div>
              <label htmlFor="id" className="block text-sm font-medium text-gray-700">ID de la Noticia</label>
              <input 
                type="number" 
                name="id"
                id="id"
                value={newNews.id} 
                onChange={handleChange} 
                className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300" 
                placeholder="Ingrese el ID de la noticia" 
              />
            </div>
          </div>
          {/* Otros campos de entrada para los demás atributos de la noticia */}
          <div>
            <label htmlFor="to" className="block text-sm font-medium text-gray-700">Destino de la Noticia</label>
            <input 
              type="text" 
              name="to"
              id="to"
              value={newNews.to} 
              onChange={handleChange} 
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300" 
              placeholder="Ingrese el destino de la noticia" 
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre de la Noticia</label>
            <input 
              type="text" 
              name="name"
              id="name"
              value={newNews.name} 
              onChange={handleChange} 
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300" 
              placeholder="Ingrese el nombre de la noticia" 
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descripción de la Noticia</label>
            <textarea 
              name="description"
              id="description"
              value={newNews.description} 
              onChange={handleChange} 
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300" 
              placeholder="Ingrese la descripción de la noticia" 
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Autor de la Noticia</label>
            <input 
              type="text" 
              name="author"
              id="author"
              value={newNews.author} 
              onChange={handleChange} 
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300" 
              placeholder="Ingrese el autor de la noticia" 
            />
          </div>
          <button 
            type="button" 
            onClick={handleAddNews} 
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Agregar Noticia
          </button>
        </form>
      </div>
    );
  }
  
  export default AdminPage;