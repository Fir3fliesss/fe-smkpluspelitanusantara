import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const hls = new Hls();

    hls.attachMedia(video);

    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      video.play();
    });

    return () => {
      hls.destroy();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      controls
      muted
      style={{ width: '100%', maxWidth: '800px' }}
    />
  );
};

export default VideoPlayer;
