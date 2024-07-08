import React, { useRef } from 'react';
import "./video.css"

const VideoPlayer = ({src}) => {
  const videoRef = useRef(null);

  /* const playVideo = () => {
    videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current.pause();
  };

  const muteVideo = () => {
    videoRef.current.muted = true;
  };

  const unmuteVideo = () => {
    videoRef.current.muted = false;
  }; */

  return (
    <div className='video__container'>
      <video ref={videoRef} controls id='video'>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
