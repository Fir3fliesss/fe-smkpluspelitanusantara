import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const hls = new Hls();
    hls.loadSource('https://header-content.pages.dev/header-content.m3u8');
    hls.attachMedia(video);

    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      video.play();
    });

    hls.on(Hls.Events.ERROR, (_event, data) => {
      console.error('HLS Error:', data);
      if (data.fatal) {
        switch (data.type) {
          case Hls.ErrorTypes.NETWORK_ERROR:
            console.error('Network error. Trying to recover...');
            hls.startLoad();
            break;
          case Hls.ErrorTypes.MEDIA_ERROR:
            console.error('Media error. Trying to recover...');
            hls.recoverMediaError();
            break;
          default:
            console.error('Fatal error. Cannot recover.');
            hls.destroy();
            break;
        }
      }
    });

    return () => {
      hls.destroy();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      controls
      muted
      style={{ width: '100%', maxWidth: '800px' }}
    />
  );
};

export default VideoPlayer;
