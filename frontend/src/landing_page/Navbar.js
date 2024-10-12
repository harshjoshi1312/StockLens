import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        <Link className="navbar-brand" to={"/"}>
          <img
            src="media/images/logo.svg"
            style={{ width: "150px" }}
            alt="Logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul
            className="navbar-nav mb-2 mb-lg-0"
            style={{ fontSize: "1.1rem" }}
          >
            {/* Increased font size */}
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to={"signup"}
                style={{ padding: "0.75rem 1rem" }}
              >
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                to={"about"}
                style={{ padding: "0.75rem 1rem" }}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                to={"product"}
                style={{ padding: "0.75rem 1rem" }}
              >
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                to={"pricing"}
                style={{ padding: "0.75rem 1rem" }}
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                to={"support"}
                style={{ padding: "0.75rem 1rem" }}
              >
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
