import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1
          className="mt-5"
          style={{
            fontSize: "2rem", // Custom font size for the heading
            fontWeight: "bold", // Bold font for emphasis
          }}
        >
          Open a Zerodha account
        </h1>
        <p
          style={{
            fontSize: "1.2rem", // Slightly larger font for the paragraph
            color: "#555", // A lighter color for better readability
            marginBottom: "2rem", // Space below the paragraph
          }}
        >
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="btn btn-primary fs-5 mb-5"
          style={{
            width: "20%", // Fixed width for the button
            margin: "0 auto", // Center the button
            padding: "0.75rem", // Consistent padding for the button
            fontSize: "1.1rem", // Font size for the button
          }}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
