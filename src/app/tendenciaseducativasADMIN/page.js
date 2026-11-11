"use client";
import { useState, useEffect } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { lista_noticias } from '../../utils/modelo_noticias.js';

function AdminPage() {
  const { data: session, status } = useSession();
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
      const timer = setTimeout(() => {
        setNewNews(prevState => ({
          ...prevState,
          id: getNextId()
        }));
      }, 0);
      return () => clearTimeout(timer);
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewNews(prevState => ({
        ...prevState,
        Image: reader.result
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
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

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600 text-lg font-medium">Verificando sesión...</p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Acceso Restringido</h1>
          <p className="text-gray-600 mb-6">
            Debes iniciar sesión con una cuenta autorizada para acceder al panel de administración de noticias.
          </p>
          <button
            onClick={() => signIn()}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded transition-colors"
          >
            Iniciar sesión
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-8 px-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 pb-4 border-b">
        <h1 className="text-2xl font-bold">Administración de Noticias</h1>
        <div className="flex items-center gap-4 mt-2 sm:mt-0">
          <span className="text-sm text-gray-600">
            Sesión: <strong>{session.user?.name || session.user?.email || "Administrador"}</strong>
          </span>
          <button
            onClick={() => signOut()}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium py-1.5 px-3 rounded transition-colors"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="Image" className="block text-sm font-medium text-gray-700">Cargar Imagen</label>
            <input
              type="file"
              name="Image"
              id="Image"
              onChange={handleImageChange}
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Cargar imagen"
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
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Fecha de la Noticia</label>
          <input
            type="date"
            name="date"
            id="date"
            value={newNews.date}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Ingrese la fecha de la noticia"
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
