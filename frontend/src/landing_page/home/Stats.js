import React from "react";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        {/* Left column with text content */}
        <div className="col-6 p-5">
          <h1
            className="fs-2 mb-5"
            style={{
              fontSize: "2rem", // Custom font size for the main heading
              fontWeight: "bold", // Bold font for the title
            }}
          >
            Trust with confidence
          </h1>
          <h2
            className="fs-4"
            style={{
              fontSize: "1.5rem", // Adjust font size for subheadings
              marginBottom: "1rem", // Space below each subheading
              color: "#333", // Darker color for better readability
            }}
          >
            Customer-first always
          </h2>
          <p className="text-muted" style={{ fontSize: "1rem", color: "#555" }}>
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments.
          </p>
          <h2
            className="fs-4"
            style={{
              fontSize: "1.5rem",
              marginBottom: "1rem",
              color: "#333",
            }}
          >
            No spam or gimmicks
          </h2>
          <p className="text-muted" style={{ fontSize: "1rem", color: "#555" }}>
            No gimmicks, spam, "gamification", or annoying push notifications.
            High-quality apps that you use at your pace, the way you like.
          </p>
          <h2
            className="fs-4"
            style={{
              fontSize: "1.5rem",
              marginBottom: "1rem",
              color: "#333",
            }}
          >
            The Zerodha universe
          </h2>
          <p className="text-muted" style={{ fontSize: "1rem", color: "#555" }}>
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2
            className="fs-4"
            style={{
              fontSize: "1.5rem",
              marginBottom: "1rem",
              color: "#333",
            }}
          >
            Do better with money
          </h2>
          <p className="text-muted" style={{ fontSize: "1rem", color: "#555" }}>
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>

        {/* Right column with image and links */}
        <div className="col-6 p-5">
          <img
            src="media/images/ecosystem.png"
            alt="Zerodha Ecosystem"
            style={{
              width: "90%", // Image takes up 90% of the column width
              borderRadius: "8px", // Slightly rounded corners for the image
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
            }}
          />
          <div className="text-center">
            <a
              href=""
              className="mx-5"
              style={{
                textDecoration: "none", // Remove underline from the link
                color: "#007bff", // Set link color
                fontWeight: "bold", // Make the link bold
                fontSize: "1.2rem", // Set font size for consistency
              }}
            >
              Explore our products{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <p
              className="text-muted"
              style={{ margin: "1rem 0", fontSize: "1rem", color: "#555" }}
            >
              Get hands-on experience with Kite, our advanced trading platform.
            </p>
            <a
              href=""
              style={{
                textDecoration: "none", // Remove underline from the link
                color: "#007bff", // Set link color
                fontWeight: "bold", // Make the link bold
                fontSize: "1.2rem", // Set font size for consistency
              }}
            >
              Try Kite demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
