import React from "react";

function Pricing() {
  return (
    <div className="container">
      <div className="row">
        {/* Left column for pricing information */}
        <div className="col-4">
          <h1
            className="mb-3 fs-2"
            style={{
              fontSize: "2rem", // Custom font size for the title
              fontWeight: "bold", // Bold font for emphasis
            }}
          >
            Unbeatable pricing
          </h1>
          <p
            style={{
              fontSize: "1.1rem", // Set font size for the description
              color: "#555", // A slightly lighter color for the paragraph
            }}
          >
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a
            href=""
            style={{
              textDecoration: "none", // Remove underline from the link
              color: "#007bff", // Set link color
              fontWeight: "bold", // Make the link bold
              fontSize: "1.2rem", // Consistent font size for the link
            }}
          >
            See Pricing{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        {/* Empty column for spacing */}
        <div className="col-2"></div>

        {/* Right column for pricing details */}
        <div className="col-6 mb-5">
          <div className="row text-center">
            <div
              className="col p-3 border"
              style={{
                border: "1px solid #ddd", // Light border for the columns
                borderRadius: "8px", // Rounded corners for a softer look
                margin: "1rem", // Add space around each pricing block
                backgroundColor: "#f9f9f9", // Light background for contrast
              }}
            >
              <h1 className="mb-3">₹0</h1>
              <p
                style={{
                  fontSize: "1rem", // Set font size for the description
                  color: "#555", // A slightly lighter color for the paragraph
                }}
              >
                Free equity delivery and
                <br />
                direct mutual funds
              </p>
            </div>
            <div
              className="col p-3 border"
              style={{
                border: "1px solid #ddd", // Light border for the columns
                borderRadius: "8px", // Rounded corners for a softer look
                margin: "1rem", // Add space around each pricing block
                backgroundColor: "#f9f9f9", // Light background for contrast
              }}
            >
              <h1 className="mb-3">₹20</h1>
              <p
                style={{
                  fontSize: "1rem", // Set font size for the description
                  color: "#555", // A slightly lighter color for the paragraph
                }}
              >
                Intraday and F&O
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
