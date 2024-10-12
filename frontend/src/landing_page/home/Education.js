import React from "react";

function Education() {
  return (
    <div
      className="container mt-5"
      style={{
        marginTop: "3rem", // Add margin at the top for spacing
      }}
    >
      <div className="row">
        {/* Left side image */}
        <div className="col-6">
          <img
            src="media/images/education.svg"
            alt="Education"
            style={{
              width: "70%", // Image takes up 70% of the column width
              marginBottom: "2rem", // Add spacing below the image
            }}
          />
        </div>

        {/* Right side content */}
        <div className="col-6">
          <h1
            className="mb-3 fs-2"
            style={{
              fontSize: "2rem", // Set custom font size for the title
              fontWeight: "bold", // Bold font for the title
              marginBottom: "1.5rem", // Space below the title
            }}
          >
            Free and open market education
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#555" }}>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a
            href=""
            style={{
              textDecoration: "none", // Remove underline from the link
              color: "#007bff", // Set link color
              fontWeight: "bold", // Make the link bold
            }}
          >
            Varsity{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>

          <p
            className="mt-5"
            style={{
              marginTop: "3rem", // Space above the second paragraph
              fontSize: "1.1rem", // Set the font size for the paragraph
              color: "#555", // Light color for the text
            }}
          >
            TradingQ&A, the most active trading and investment community in
            India for all your market-related queries.
          </p>
          <a
            href=""
            style={{
              textDecoration: "none", // Remove underline from the link
              color: "#007bff", // Set link color
              fontWeight: "bold", // Make the link bold
            }}
          >
            TradingQ&A{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
