import React from 'react';

const VideoTrailer = ({ videoSrc }) => {
  return (
    <video controls width="64000" height="360">
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoTrailer;
