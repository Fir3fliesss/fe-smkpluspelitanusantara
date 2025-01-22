import React, { useRef } from 'react';

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        preload="auto"
        onPause={handlePause}
        className='w-full h-full'
      >
        <source src="https://api.smkpluspnb.sch.id/storage/assets/header-content.mp4" type="video/mp4" />
        Browser Anda tidak mendukung tag video.
      </video>
    </div>
  );
};

export default VideoPlayer;
