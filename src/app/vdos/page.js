import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import VideoCard from '../../components/VideoCard';

const videos = [
  { id: '1', thumbnail: 'portada_mujpioneras.png', title: 'Mujeres Pioneras', description: 'Mujeres pioneras en el Ecuador.' },
  { id: '2', thumbnail: 'portada_raquel.jpg', title: 'Raquel y Champi', description: 'La historia de Raquel y Champi.' },
];

export default function VideosPage() {
  return (
    <div className="bg-gray-100 py-12 flex min-h-screen flex-col items-center p-7 mb-5">
      <div className="text-center mb-10">
        <h5 className="text-base md:text-lg text-red-500 mb-1 font-semibold">
          RIOUC
        </h5>
        <h1 className="text-4xl md:text-6xl font-semibold p-5 mb-3 bg-gradient-to-r from-black to-black bg-clip-text text-transparent border-b-2 border-red-400">
          VIDEOTECA
        </h1>
        <p className="text-base sm:text-lg text-gray-400 mt-4 mb-1 max-w-sm sm:max-w-xl mx-auto px-2 text-center">
          Explora los videos relacionados con nuestros observatorios e investigaciones.
        </p>
      </div>
      <div className="container mx-auto px-4 text-center">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </div>
  );
}
