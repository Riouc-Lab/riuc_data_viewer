import styles from '../../../styles/VideoPlayer.module.css';
import VideoCard from '../../../components/VideoCard';

export default function VideoPage({ params }) {
  const { id } = params;

  const videos = [
    {
      id: '1',
      youtube: 'https://www.youtube.com/embed/WgQ1BRO1OMo?start=15&autoplay=1',
      title: 'Mujeres Pioneras',
      description: 'En el Ecuador'
    },
    {
      id: '2',
      youtube: 'https://www.youtube.com/embed/PM6ia_GPPq8',
      title: 'Raquel y Champi',
      description: 'Cuento científico'
    },
  ];

  const video = videos.find((v) => v.id === id);

  if (!video) {
    return <h1 style={{ textAlign: 'center', padding: '2rem' }}>404 - Video Not Found</h1>;
  }

  return (
    <div
      style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '2rem 1rem',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          {video.title}
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#555' }}>{video.description}</p>
      </div>

      <div
        style={{
          position: 'relative',
          width: '100%',
          paddingBottom: '56.25%', // 16:9 ratio
          height: 0,
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 4px 25px rgba(0, 0, 0, 0.2)',
        }}
      >
        {video.youtube ? (
          <iframe
            src={video.youtube}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
            }}
          />
        ) : (
          <video
            controls
            autoPlay
            src={`/vdo/${video.video}`}
            className={styles.videoPlayer}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
              borderRadius: '12px',
            }}
          />
        )}
      </div>
    </div>
  );
}
