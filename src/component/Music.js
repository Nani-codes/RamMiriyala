import React, { useState, useRef } from 'react';
import images from './ImageImport';
import NavItem from './NavItem';

const musicData = [
  {
    id: 1,
    title: 'Mattini kapadudham',
    subtitle: 'Let’s join hands to save soil.',
    credits: 'Written & composed by Ram Miryala\nChild Voice: Veda Vagdevi\nChorus: Ramya Sri, Sri Lalitha, Sony Komanduri, Lakshmi Meghana, Sindhuja Tanuku, Akash Ravuru.',
    icons: [
      'https://cdn.builder.io/api/v1/image/assets/TEMP/0ce5e2cb99c6b2455e580402600ac06da75759819a540bbf1184db6ed32bb4ce?',
      'https://cdn.builder.io/api/v1/image/assets/TEMP/193d1e0027930b51a6e33c2b9febc3de0d635b8fc66ac9a6c6606364d3f1d25d?'
    ],
    imageKey: 'mattini',
  },
  {
    id: 2,
    title: 'Alai balai',
    subtitle: 'Let’s do Alai Balai, live together in harmony and break all the barriers.',
    icons: [
      'https://cdn.builder.io/api/v1/image/assets/TEMP/062e8d8f84f1ba5eae4d4452013280a3beb24da86a9e358b6f297a0855ee7570?',
      'https://cdn.builder.io/api/v1/image/assets/TEMP/5f39cd988837850853295c7a172cf7ec840520a6f86569dbb43d583bea9d8ce9?'
    ],
    imageKey: 'alai',
  },
  {
    id: 3,
    title: 'Janaganamana',
    subtitle: 'Sing our national anthem in full spirit with our hearts and souls, with all the hope working towards empowered India.',
    icons: [
      'https://cdn.builder.io/api/v1/image/assets/TEMP/062e8d8f84f1ba5eae4d4452013280a3beb24da86a9e358b6f297a0855ee7570?',
      'https://cdn.builder.io/api/v1/image/assets/TEMP/22997f07725bc3f820454c507d6623d4005bb7dc209c58b61548f297eacb4d30?'
    ],
    imageKey: 'janaganamana',
  },
  {
    id: 4,
    title: 'Kallu thaaga',
    subtitle: 'Casting : Bala Raju, Ram Miriyala, David Stephen, Notchfiltr',
    icons: [
      'https://cdn.builder.io/api/v1/image/assets/TEMP/0ce5e2cb99c6b2455e580402600ac06da75759819a540bbf1184db6ed32bb4ce?',
      'https://cdn.builder.io/api/v1/image/assets/TEMP/193d1e0027930b51a6e33c2b9febc3de0d635b8fc66ac9a6c6606364d3f1d25d?'
    ],
    imageKey: 'kallu',
  },
];

const MusicComponent = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const sectionRefs = useRef([]);

  const handleMouseEnter = (index) => {
    setHoveredId(index);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  const sectionStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1098px',
    height: '150px',
    gap: '20px',
    borderBottom: '1px solid #F6A5A3',
    backgroundColor: '#000000',
    opacity: 1,
    transition: 'height 0.3s, opacity 0.3s',
    padding: '10px',
    overflow: 'hidden',
    position: 'relative',
  };

  const expandedSectionStyle = {
    ...sectionStyle,
    height: '280px',
  };

  return (
    <div style={{ backgroundColor: '#000000', padding: '20px', paddingTop: '198px' }}>
      <NavItem />
      <div style={{ marginTop: '20px' }}>
        {musicData.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={hoveredId === index ? expandedSectionStyle : sectionStyle}
          >
            <img
              loading="lazy"
              src={images[item.imageKey]} // Ensure image is imported correctly
              style={{
                width: '150px',
                height: '150px',
                objectFit: 'cover',
              }}
              alt={item.title}
            />
            <div style={{ flex: 1 }}>
              <div className="text-3xl tracking-normal" style={{ color: '#FF2121' }}>
                {item.title}
              </div>
              <div className="text-xl tracking-normal leading-7" style={{ color: '#F1D5AE', marginTop: '8px' }}>
                {item.subtitle}
              </div>
              <div className="flex gap-4" style={{ marginTop: '16px' }}>
                {item.icons.map((iconSrc, iconIndex) => (
                  <img
                    key={iconIndex}
                    loading="lazy"
                    src={iconSrc}
                    style={{
                      width: '24px',
                      height: '24px',
                      objectFit: 'contain',
                    }}
                    alt={`icon-${iconIndex}`}
                  />
                ))}
              </div>
              {hoveredId === index && item.credits && (
                <div className="mt-4 text-base tracking-normal leading-7" style={{ color: '#F1D5AE' }}>
                  {item.credits.split('\n').map((line, lineIndex) => (
                    <React.Fragment key={lineIndex}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicComponent;
