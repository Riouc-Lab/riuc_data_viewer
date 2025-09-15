import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import VideoCard from '../../components/VideoCard';
<<<<<<< HEAD

const videos = [
  { id: '1', thumbnail: 'portada_mujpioneras.png', title: 'Mujeres Pioneras', description: 'Mujeres pioneras en el Ecuador.' },
  //{ id: '2', thumbnail: 'portada_raquel.jpg', title: 'Raquel y Champi', description: 'La historia de Raquel y Champi.' },
=======
import Pagination from "../../components/pagination";

const videos = [
  { id: '1', thumbnail: 'portada_mujpioneras.png', title: 'Mujeres Pioneras', description: 'Mujeres pioneras en el Ecuador.' },
  // { id: '2', thumbnail: 'portada_raquel.jpg', title: 'Raquel y Champi', description: 'La historia de Raquel y Champi.' },
>>>>>>> afd0485 (Subida inicial: todas las secciones, boletines y PDF comprimido)
];

export default function VideosPage() {
  return (
<<<<<<< HEAD
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-extrabold text-red-600 mb-4 uppercase">Videos RIOUC</h1>
        <p className="text-lg text-gray-700 mb-12">Explora los videos relacionados con nuestros observatorios e investigaciones.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
=======
    <main className="relative min-h-screen bg-gray-100 px-4 py-10">
      <div className="text-center mt-8 mb-6">
        <h5 className="text-base md:text-lg text-red-500 mb-1 font-semibold">
          RIOUC
        </h5>
        <h1 className="text-4xl md:text-6xl font-semibold p-5 bg-gradient-to-r from-black to-black bg-clip-text text-transparent border-b-2 border-red-400 inline-block">
          VIDEOTECA
        </h1>
        <p className="text-xs sm:text-sm text-gray-400 mt-4 max-w-sm sm:max-w-xl mx-auto px-2 text-center">
          Explora los videos relacionados con nuestros observatorios e investigaciones.
        </p>
      </div>
      <div className="sm:bg-white sm:p-8 sm:rounded-xl sm:shadow-xl max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6">
>>>>>>> afd0485 (Subida inicial: todas las secciones, boletines y PDF comprimido)
          {videos.map((video) => (
            <Link key={video.id} href={`/vdos/${video.id}`} className="block">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105">
                <img
                  src={`/img/${video.thumbnail}`}
                  alt={`Thumbnail for ${video.title}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold text-black">{video.title}</h2>
                  <p className="text-gray-600 mt-2">{video.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
<<<<<<< HEAD
    </div>
=======
    </main >
>>>>>>> afd0485 (Subida inicial: todas las secciones, boletines y PDF comprimido)
  );
}
