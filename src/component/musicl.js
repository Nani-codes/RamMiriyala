import React, { useState } from 'react';
import image1 from '../assets/images/Janganmanamusic.png';
import image2 from '../assets/images/AlaiBalai.png';
import image3 from '../assets/images/KalluThaga.png';

const MusicL = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setExpandedIndex(index);
  };

  const handleMouseLeave = () => {
    setExpandedIndex(null);
  };

  const images = [
    { src: image1, name: 'Janganmanamusic' },
    { src: image2, name: 'AlaiBalai' },
    { src: image3, name: 'KalluThaga' },
  ];

  return (
    <div style={{ width: '100%' }}>
      {images.map((image, index) => (
        <div
          key={index}
          id={`image-${index}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          style={{
            width: '100%',
            height: expandedIndex === index ? '719px' : '153px',
            overflow: 'hidden',
            transition: 'height 0.3s ease-in-out',
            position: 'relative',
            cursor: 'pointer',
            marginBottom: expandedIndex === index ? '0' : '0',
          }}
        >
          <img
            loading="lazy"
            src={image.src}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: 'transform 0.3s ease-in-out',
            }}
            alt={image.name}
          />
          <div
            style={{
              position: 'absolute',
              top: expandedIndex === index ? '10px' : '50%',
              left: '10px',
              transform: expandedIndex === index ? 'none' : 'translateY(-50%)',
              color: '#ff2121',
              padding: '5px',
              fontFamily: 'Rammetto One',
              fontSize: '50px',
              fontWeight: 400,
              lineHeight: '84.45px',
              letterSpacing: '0.0025em',
              textAlign: 'left',
              transition: 'all 0.3s ease-in-out',
              width: 'calc(100% - 20px)',
              display: 'flex',
              alignItems: expandedIndex === index ? 'flex-start' : 'center',
            }}
          >
            {image.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MusicL;
