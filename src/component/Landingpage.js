import React from 'react';
import NavItem from './NavItem';
import backgroundImage from '../assets/images/background.jpg';
import Header from './Header';
import MusicL from './musicl'; // Import the MusicL component
import About from './about';
import EventsL from './EventsL';


const LandingPage = () => {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', overflowY: 'auto', overflowX: 'hidden' }}>
      <Header />
      <NavItem />
      <img
        loading="lazy"
        src={backgroundImage}
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
        alt="Background"
      />
      <div
        className="upcoming-event"
        style={{
          position: 'absolute',
          top: '794px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1000px',
          maxWidth: '100%',
          padding: '20px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          textAlign: 'center',
          zIndex: 1,
        }}
      >
        <div
          style={{
            fontSize: '2rem',
            marginBottom: '20px',
          }}
        >
          Upcoming event
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '3rem',
          }}
        >
          <div>
            23 <span>days</span>
          </div>
          <div>:</div>
          <div>
            3 <span>hours</span>
          </div>
          <div>:</div>
          <div>
            15 <span>mins</span>
          </div>
        </div>
      </div>
      <div style={{ position: 'relative', marginTop: '100vh', zIndex: 2 }}>
        <MusicL /> {/* Add MusicL component here */}
        <About />
        <EventsL />
       
      </div>
    </div>
  );
};

export default LandingPage;
