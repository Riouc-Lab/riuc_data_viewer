"use client";
import { useState, useEffect } from 'react';
import { lista_noticias } from '../../utils/modelo_noticias.js';

function AdminPage() {
  const [newNews, setNewNews] = useState({
    Image: "",
    id: 0,
    to: "",
    name: "",
    date: "",
    description: "",
    author: "",
  });

  const [editing, setEditing] = useState(false);

  // Función para calcular el siguiente ID disponible
  const getNextId = () => {
    if (lista_noticias.length === 0) {
      return 1;
    }
    const maxId = Math.max(...lista_noticias.map(noticia => noticia.id));
    return maxId + 1;
  };

  useEffect(() => {
    if (!editing) {
      setNewNews(prevState => ({
        ...prevState,
        id: getNextId()
      }));
    }
  }, [editing]);

  const handleAddNews = () => {
    if (editing) {
      // Actualizar noticia existente
      const index = lista_noticias.findIndex(noticia => noticia.id === newNews.id);
      lista_noticias[index] = { ...newNews, date: new Date().toISOString().slice(0, 10) };
      setEditing(false);
    } else {
      // Agregar nueva noticia
      lista_noticias.push({
        ...newNews,
        date: new Date().toISOString().slice(0, 10),
      });
    }

    // Limpiar los campos de entrada
    setNewNews({
      Image: "",
      id: getNextId(),
      to: "",
      name: "",
      date: "",
      description: "",
      author: "",
    });

    // Imprimir la lista actualizada en la consola
    console.log("Lista de noticias después de agregar/editar:");
    console.log(lista_noticias);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewNews(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleEdit = (noticia) => {
    setNewNews(noticia);
    setEditing(true);
  };

  const handleDelete = (id) => {
    const updatedList = lista_noticias.filter(noticia => noticia.id !== id);
    lista_noticias.splice(0, lista_noticias.length, ...updatedList); // Actualiza la lista global
    console.log("Lista de noticias después de eliminar:");
    console.log(lista_noticias);
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
              disabled
              className="mt-1 p-2 w-full border rounded bg-gray-100 focus:outline-none focus:ring focus:border-blue-300" 
              placeholder="ID de la noticia" 
            />
          </div>
        </div>
        {/* Otros campos de entrada para los demás atributos de la noticia */}
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
          <label htmlFor="author" className="block text-sm font-medium text-gray-700">Autor de la Noticia</label>
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
          {editing ? "Editar Noticia" : "Agregar Noticia"}
        </button>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Noticias Existentes</h2>
        <ul>
          {lista_noticias.map((noticia) => (
            <li key={noticia.id} className="mb-4 p-4 border rounded">
              <div>
                <strong>{noticia.name}</strong>
                <p>{noticia.description}</p>
                <p>{noticia.author}</p>
                <p>{noticia.date}</p>
                <button 
                  onClick={() => handleEdit(noticia)} 
                  className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600 mr-2"
                >
                  Editar
                </button>
                <button 
                  onClick={() => handleDelete(noticia.id)} 
                  className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminPage;
