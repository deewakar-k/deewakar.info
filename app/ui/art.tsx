import React from 'react';

const Art: React.FC = () => {
  return (
    <video
      src="https://images.beta.cosmos.so/22aea3af-5dc8-4e78-a079-112b0418e583.mp4"
      autoPlay
      loop
      muted
      playsInline
      style={{
        width: '300px',
        height: '284px',
        display: 'block',
      }}
    />
  );
};

export default Art;
