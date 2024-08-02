import React from "react";
import RamImage from "../assets/images/Ram.jpg"; // Adjust the path according to your folder structure

function About() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", // Center the container horizontally
        alignItems: "center", // Center the container vertically
        minHeight: "100vh", // Ensure the wrapper takes at least the full height of the viewport
        backgroundColor: "black",
        padding: "0", // Remove padding to fit exact size
      }}
    >
      <div
        className="container"
        style={{
          position: "relative",
          width: "1240px",
          height: "880px",
          top: "72px",
          left: "100px",
          gap: "0px",
          opacity: "1", // Make the container invisible while keeping its layout intact
          display: "flex",
          flexDirection: "row", // Place items side by side
          alignItems: "flex-start", // Align items to the top
          backgroundColor: "black",
         
        }}
      >
        {/* Image container */}
        <div
          style={{
            flex: "0 0 auto", // Prevents the image from stretching
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start", // Align image to the top
            width: "482px",  // Width of the image
            height: "820px", // Height of the image
          }}
        >
          <img
            loading="lazy"
            src={RamImage} // Use the imported image
            style={{
              width: "100%",  // Adjust to fit the container
              height: "100%", // Adjust to fit the container
              objectFit: "cover", // Ensure the image covers the container area
            }}
            alt="Ram Miriyala background"
          />
        </div>

        {/* Name container with vertical letters */}
        <div
          style={{
            flex: "0 0 auto", // Prevents the name container from stretching
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "820px", // Match the height of the image
            width: "100px", // Set a fixed width for the name container
            padding: "0 2rem", // Adjust padding as needed
            border: "none", // Ensure no border
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column", // Stack letters vertically
              alignItems: "center",
              fontSize: "3rem",
              letterSpacing: "normal",
              textAlign: "center",
              color: "red",
              mixBlendMode: "difference",
              lineHeight: "80px",
              fontFamily: "'Rammetto One', sans-serif", // Ensure font is applied
              fontWeight: "400", // Set font weight to 400
            }}
          >
            {/* Individual letters */}
            {["R", "A", "M", ".", "M", "I", "R", "Y", "A", "L", "A"].map((letter, index) => (
              <div key={index} style={{ margin: "0.1rem" }}>
                {letter}
              </div>
            ))}
          </div>
        </div>

        {/* About section */}
        <div
          style={{
            flex: "1", // Allow the about section to expand and fill available space
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start", // Align about section to the top
            alignItems: "center",
            height: "820px", // Match the height of the image
            border: "3px solid red",
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            maxWidth: "482px",  // Match the width of the image
            boxSizing: "border-box", // Ensure padding and border are included in the width and height
          }}
        >
          <p
            style={{
              fontSize: "1.875rem",
              letterSpacing: "normal",
              color: "#F1D5AE",
              lineHeight: "2.5rem",
              fontWeight: "normal",
              textAlign: "center",
              width: "442px", // Set the width of the paragraph
              height: "533px", // Set the height of the paragraph
              margin: "0", // Ensure no default margins
            }}
          >
            Ram Miriyala is an Indian playback singer, record producer, music composer, film scorer, promo producer, and songwriter in Telugu cinema. While working as the promo producer at Radio Mirchi in 2018, Ram, along with his colleagues, decided to form the music band Chowraasta. The primary idea of the band is to sing and produce Telugu folk songs in the reggae genre.
          </p>
          <button
            style={{
              padding: "1.25rem",
              marginTop: "2.5rem",
              fontWeight: "bold",
              color: "red",
              border: "3px solid red",
              backdropFilter: "blur(10px)",
              borderStyle: "solid",
              borderWidth: "3px",
              cursor: "pointer",
              backgroundColor: "black",
            }}
          >
            Know more
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
