export default function VideoPlayer({ src, description }) {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>{description}</h1>
      <video
        controls
        src={src}
        style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}
      />
    </div>
  );
}
