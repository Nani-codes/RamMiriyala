import React from "react";

// Define the images for each event
const images = {
  1: "path/to/image1.jpg", // Replace with actual image paths
  2: "path/to/image2.jpg",
  3: "path/to/image3.jpg",
  4: "path/to/image4.jpg",
  5: "path/to/image5.jpg",
};

function generateEventContent(id) {
  // Define the event details based on the ID
  const events = {
    1: { date: '19th', month: 'July', title: 'Live @ Grease Monkey', time: '8:30 pm - 11:59 pm' },
    2: { date: '20th', month: 'July', title: 'Soul Sunday @ Hard Rock Cafe', time: '8:30 pm - 11:59 pm' },
    3: { date: '27th', month: 'July', title: '@ Odeum by Prism', time: '8:30 pm - 11:59 pm' },
    4: { date: '28th', month: 'July', title: 'Sing with Me @ Heart Cup Cafe', time: '8:30 pm - 11:59 pm' },
    5: { date: '09th', month: 'Aug', title: 'Live @ Grease Monkey', time: '8:30 pm - 11:59 pm' },
  };

  return { ...events[id], image: images[id] };
}

function Event() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'black',
  };

  const eventStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginTop: '20px',
    width: '100%',
    borderBottom: '1px solid #FF2121',
    opacity: '0.5',
  };

  const contentItemStyle = {
    display: 'flex',
    gap: '5px',
    width: '100%',
    borderBottom: '1px solid #FF2121',
    padding: '4px',
  };

  const contentImgStyle = {
    maxWidth: '100%',
    aspectRatio: '1',
    width: '110px',
  };

  const contentDetailsStyle = {
    display: 'flex',
    flex: '1',
    gap: '5px',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const contentInfoStyle = {
    display: 'flex',
    gap: '5px',
  };

  const dateStyle = {
    textAlign: 'center',
    color: '#FF2121',
  };

  const monthStyle = {
    color: '#F1D5AE',
  };

  const eventDetailsStyle = {
    color: '#F1D5AE',
  };

  const bookNowStyle = {
    padding: '2px 4px',
    border: '2px solid #FF2121',
    color: '#FF2121',
    background: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(2px)',
  };

  const eventImgStyle = {
    width: '8px',
  };

  return (
    <div style={containerStyle}>
      {Array.from({ length: 5 }, (_, index) => {
        const id = index + 1;
        const event = generateEventContent(id);

        return (
          <div key={id} style={eventStyle}>
            <div style={contentItemStyle}>
              <img loading="lazy" src={event.image} alt={`Event ${id}`} style={contentImgStyle} />
              <div style={contentDetailsStyle}>
                <div style={contentInfoStyle}>
                  <div style={dateStyle}>
                    <div style={{ fontSize: '2rem' }}>{event.date}</div>
                    <div style={monthStyle}>{event.month}</div>
                  </div>
                  <div style={eventDetailsStyle}>
                    <div style={{ fontSize: '2rem', fontWeight: '600' }}>{event.title}</div>
                    <div style={{ fontSize: '1.125rem' }}>{event.time}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '5px', fontSize: '1rem', fontWeight: '500', color: '#FF2121' }}>
                  <div style={bookNowStyle}>Book now</div>
                  <img loading="lazy" src="path/to/icon.jpg" alt={`Icon ${id}`} style={eventImgStyle} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Event;
