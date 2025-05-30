import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import VideoCard from '../../components/VideoCard';

const videos = [
  { id: '1', thumbnail: 'portada_mujpioneras.png', title: 'Mujeres Pioneras', description: 'Mujeres pioneras en el Ecuador.' },
  { id: '2', thumbnail: 'portada_raquel.jpg', title: 'Raquel y Champi', description: 'La historia de Raquel y Champi.' },
];

export default function VideosPage() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-extrabold text-red-600 mb-4 uppercase">Videos RIOUC</h1>
        <p className="text-lg text-gray-700 mb-12">Explora los videos relacionados con nuestros observatorios e investigaciones.</p>
        
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
