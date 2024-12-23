
import styles from '../../../styles/VideoPlayer.module.css';
import VideoCard from '../../../components/VideoCard';

export default function VideoPage({ params }) {
  const { id } = params; // Extraer el parámetro dinámico 'id'


const videos = [
    { id: '1', video: 'mujerespioneras.mp4', title: 'Amazing Video 1', description: 'Mujeres Pioneras' },
    { id: '2', video: 'raquelychampi.mp4', title: 'Amazing Video 1', description: 'Raquel y Champi' },
    { id: '3', video: 'raquelychampi.mp4', title: 'Amazing Video 1', description: 'Raquel y Champi' },
  ];
  
  const video = videos.find((v) => v.id === id); // Buscar el video correspondiente

  if (!video) {
    return <h1>404 - Video Not Found</h1>; // Mostrar un mensaje si no se encuentra el video
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>{video.title}</h1>
      <h2>{video.description}</h2>
      <video
        controls
        src={`/vdo/${video.video}`}
        style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}
      />
    </div>
  );
}
  