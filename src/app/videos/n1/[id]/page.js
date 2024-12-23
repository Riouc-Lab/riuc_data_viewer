import VideoPlayer from '../../../components/VideoPlayer';
import styles from '../../../styles/VideoPlayer.module.css';

const videos = [
  { id: 1, video: '/vdo/mujerespioneras.mp4', description: 'mujeres pioneras' },
  { id: 1, video: '/vdo/raquelychampi.mp4', description: 'raquel y champi' },
];

export default function VideoPage({ params }) {
  const video = videos.find((v) => v.id === parseInt(params.id));

  if (!video) {
    return <p>Video not found</p>;
  }

  return (
    <div className={styles.container}>
      <a href="/video" className={styles.backButton}>Back to Gallery</a>
      <VideoPlayer video={video} />
    </div>
  );
}
