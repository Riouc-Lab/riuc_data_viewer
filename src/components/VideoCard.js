import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function VideoCard({ video }) {
  return (
    <Link href={`/vdos/${video.id}`}>
      <div className={styles.card}>
        <img
          src={`/img/${video.thumbnail}`}
          alt={`Thumbnail for ${video.description}`}
          className={styles.thumbnail}
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{video.title}</h2>
          <p className={styles.description}>{video.description}</p>
        </div>
      </div>
    </Link>
  );
}