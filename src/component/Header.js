import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Rammetto+One:wght@400&display=swap');
        `}
      </style>
      <header
        style={{
          position: 'sticky',
          top: '0',
          left: '0',
          width: '100%',
          height: '80px',
          backgroundColor: '#000000',
          border: '1px solid #000000',
          display: 'flex',
          alignItems: 'center',
          padding: '0 20px',
          boxSizing: 'border-box',
          zIndex: '3',
          justifyContent: 'center',
        }}
      >
        <h1
          style={{
            color: '#ff2121',
            fontSize: '34px',
            fontWeight: '400',
            letterSpacing: '0.25px',
            fontFamily: '"Rammetto One", sans-serif',
            margin: '0',
            textAlign: 'center',
            position: 'relative',
            zIndex: '1',
          }}
        >
          RAM MIRYALA
        </h1>
        <Link to="/Joincommunity">
          <button
            style={{
              padding: '10px 20px',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              backgroundColor: '#000000',
              border: '2px solid #ff2121',
              color: '#ff2121',
              whiteSpace: 'nowrap',
              position: 'absolute',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: '2',
            }}
          >
            Join Community
          </button>
        </Link>
      </header>
    </div>
  );
};

export default Header;
