import React, { useEffect, useRef } from 'react';
import dashjs from 'dashjs';

const VideoPlayerDash: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const url = '/assets/videos-dash/header-content.mpd';

      const player = dashjs.MediaPlayer().create();
      player.initialize(videoRef.current, url, true);

      return () => {
        player.reset();
      };
    }
  }, []);

  return (
    <div>
      <video
        ref={videoRef}
        autoPlay
        muted
        controls={false}
        loop={true}
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default VideoPlayerDash;
