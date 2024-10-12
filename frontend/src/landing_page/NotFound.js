import React from "react";

function NotFound() {
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
         404 Not Found
        </h1>
        <p
          style={{
            fontSize: "1.2rem", // Slightly larger font for the paragraph
            color: "#555", // A lighter color for better readability
            marginBottom: "2rem", // Space below the paragraph
          }}
        >
        Sorry , The page you are looking for does not exist.
        </p>
       
      </div>
    </div>
  );
}

export default NotFound;
