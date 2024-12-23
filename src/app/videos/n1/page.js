import VideoCard from '../../../components/VideoCard';
import styles from '../../../styles/Home.module.css';

const videos = [
  { id: 1, src: '/vdo/mujerespioneras.mp4', thumbnail: '/img/vdo1_socioec.png', title: 'Mujeres Pioneras', description: 'Mujeres Pioneras' },
  { id: 2, src: '/vdo/raquelychampi.mp4', thumbnail: '/img/vdo6_natur.png', title: 'Raquel y Champi', description: 'Raquel y Champi' },
];

export default function VideoGallery() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Galería de Videos</h1>
      <div className={styles.videoList}>
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}