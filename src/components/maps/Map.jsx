import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('./DynamicMap'), {
  ssr: false
});

// Set default sizing to control aspect ratio which will scale responsively
// but also help avoid layout shift

const Map = (props) => {
  const { width , height  } = props;
  const ratio = width && height && !isNaN(Number(width)) && !isNaN(Number(height)) ? Number(width) / Number(height) : undefined;
  return (
    <div style={ratio ? { aspectRatio: ratio } : undefined}>
      <DynamicMap {...props} />
    </div>
  )
}

export default Map;