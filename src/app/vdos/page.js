import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import VideoCard from '../../components/VideoCard';

const videos = [
  { id: '1', thumbnail: 'portada_mujpioneras.png', title: 'Mujeres Pioneras video', description: 'Mujeres pioneras en el Ecuador ' },
  { id: '2', thumbnail: 'portada_raquel.jpg', title: 'Raquel y Champi video', description: 'La hisotria de Raquel y Champi' },
];

export default function VideosPage() {
  return (
    <div className={styles.titlemaster}>
      <h1>VIDEOS RIOUC</h1>
      <div className={styles.grid}>
        {videos.map((video) => (
          <Link key={video.id} href={`/vdos/${video.id}`}>
            <div className={styles.card}>
              <img
                src={`/img/${video.thumbnail}`}
                alt={`Thumbnail for ${video.title}`}
                className={styles.thumbnail}
              />
              <div className={styles.textContainer}>
                <h2 className={styles.title}>{video.title}</h2>
                <p className={styles.description}>{video.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}