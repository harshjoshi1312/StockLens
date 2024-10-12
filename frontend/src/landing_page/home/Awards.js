import React from "react";

function Awards() {
  const styles = {
    container: {
      marginTop: "3rem",
    },
    image: {
      width: "100%", // Make the image responsive to the container
      marginBottom: "2rem",
    },
    title: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "1.5rem",
    },
    description: {
      fontSize: "1.1rem",
      color: "#555", // Light color for the text
      marginBottom: "2rem",
    },
    list: {
      listStyleType: "none", // Remove bullets from lists
      padding: "0",
    },
    listItem: {
      fontSize: "1rem",
      marginBottom: "1rem",
    },
    pressLogos: {
      width: "90%",
      marginTop: "2rem",
    },
  };

  return (
    <div className="container" style={styles.container}>
      <div className="row">
        <div className="col-6 p-5">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest Broker"
            style={styles.image}
          />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1 style={styles.title}>Largest stock broker in India</h1>
          <p style={styles.description}>
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  <p>Futures and Options</p>
                </li>
                <li style={styles.listItem}>
                  <p>Commodity derivatives</p>
                </li>
                <li style={styles.listItem}>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  <p>Stocks & IPOs</p>
                </li>
                <li style={styles.listItem}>
                  <p>Direct mutual funds</p>
                </li>
                <li style={styles.listItem}>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img
            src="media/images/pressLogos.png"
            alt="Press Logos"
            style={styles.pressLogos}
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
