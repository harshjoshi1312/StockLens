
import React from "react";

function Hero() {
  const styles = {
    heroTitle: {
      fontSize: "2rem", // Custom font size for h1
      fontWeight: "bold",
      marginTop: "3rem",
    },
    heroDescription: {
      fontSize: "1.2rem", // Custom font size for the description
      color: "#555",
    },
    heroButton: {
      width: "20%", // Set button width
      margin: "0 auto", // Center the button
      padding: "10px",
    },
    heroContainer: {
      padding: "3rem", // Adjust padding for the container
      marginBottom: "3rem",
    },
  };

  return (
    <div style={styles.heroContainer}>
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h1 style={styles.heroTitle}>Invest in everything</h1>
        <p style={styles.heroDescription}>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <button className="btn btn-primary fs-5 mb-5" style={styles.heroButton}>
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
