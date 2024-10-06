import React from 'react';

const Art: React.FC = () => {
  return (
    <video
      src="https://images.beta.cosmos.so/e4e33390-60c6-4643-9910-44585fec60da.mp4"
      autoPlay
      loop
      muted
      playsInline
      style={{
        width: '380px',
        height: '284px',
        display: 'block',
        margin: 0
      }}
    />
  );
};

export default Art;
