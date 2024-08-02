import React from 'react';
import image1 from '../assets/images/Image1.jpg';
import image2 from '../assets/images/Image2.jpg';
import image3 from '../assets/images/Image3.jpg';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: '20px 0',
    position: 'relative',
    height: '100vh', // Ensure it fits one page
    overflow: 'hidden',
  },
  header: {
    fontFamily: 'Rammetto One',
    fontSize: '80px',
    fontWeight: 400,
    lineHeight: '135.12px',
    letterSpacing: '0.0025em',
    textAlign: 'left',
    color: '#FF2121',
    padding: '20px',
    width: '100%',
    boxSizing: 'border-box', // Ensures padding does not add to the width
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1350px',
    gap: '50px',
    marginBottom: '50px', // Adding some margin to ensure space
  },
  card: {
    position: 'relative',
    width: '420px',
    height: '500px',
    backgroundColor: 'black',
    border: '1px solid #dc2626',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  textContainer: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    padding: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#fed7aa',
  },
  date: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  title: {
    fontFamily: 'Rammetto One',
    fontSize: '1.5rem',
    fontWeight: 400,
    lineHeight: '2rem',
    color: '#dc2626',
    marginTop: '10px',
    textAlign: 'left',
  },
  time: {
    fontSize: '1.125rem',
    fontWeight: 'bold',
    marginTop: '10px',
    textAlign: 'left',
  },
  arrowButton: {
    position: 'absolute',
    right: '10px',
    bottom: '40px', // Adjusted to give space from the bottom
    width: '100px',
    height: '60px',
    padding: '30px 15px',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '50px',
    color: '#ff2121',
    cursor: 'pointer',
    zIndex: 10,
  },
  allEventsButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end', // Aligns text to the right
    padding: '10px 20px',
    backgroundColor: 'black',
    color: '#ff2121',
    border: 'none',
    cursor: 'pointer',
    fontSize: '30px',
    fontFamily: 'Manrope',
    fontWeight: 600,
    lineHeight: '40.98px',
    letterSpacing: '0.0025em',
    textAlign: 'left',
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    gap: '10px', // Gap between text and arrow
  },
  arrowIcon: {
    width: '100px', // Wider arrow
    height: 'auto',
  },
};

function EventsL() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>NEVER MISS A MOMENT ON STAGE</div>
      <div style={styles.content}>
        <div style={styles.card}>
          <img src={image1} alt="Event 1" style={styles.image} />
          <div style={styles.textContainer}>
            <div style={styles.date}>19th July</div>
            <div style={styles.title}>Live @ Odeum by Prism</div>
            <div style={styles.time}>8:30 pm - 11:59 pm</div>
          </div>
          <button style={styles.arrowButton}>&#8594;</button>
        </div>
        <div style={styles.card}>
          <img src={image2} alt="Event 2" style={styles.image} />
          <div style={styles.textContainer}>
            <div style={styles.date}>20th July</div>
            <div style={styles.title}>Soul Sunday @ Hard Rock Cafe</div>
            <div style={styles.time}>8:30 pm - 11:59 pm</div>
          </div>
          <button style={styles.arrowButton}>&#8594;</button>
        </div>
        <div style={styles.card}>
          <img src={image3} alt="Event 3" style={styles.image} />
          <div style={styles.textContainer}>
            <div style={styles.date}>21st July</div>
            <div style={styles.title}>Live @ Grease Monkey</div>
            <div style={styles.time}>8:30 pm - 11:59 pm</div>
          </div>
          <button style={styles.arrowButton}>&#8594;</button>
        </div>
      </div>
      <button style={styles.allEventsButton}>
        <span style={styles.arrowIcon}>&#8594;</span> ALL EVENTS
      </button>
    </div>
  );
}

export default EventsL;
