import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#f9f9f9", padding: "40px 0" }}>
      <div className="container border-top mt-5">
        <div className="row mt-4">
          <div className="col text-center">
            <img
              src="media/images/logo.svg"
              style={{ width: "150px" }}
              alt="Logo"
            />
            <p style={{ fontSize: "14px", color: "#555" }}>
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>
          <div className="col">
            <h5 style={{ fontWeight: "bold", color: "#333", fontSize: "16px" }}>
              Company
            </h5>
            <div style={linkContainerStyle}>
              <a href="" style={linkStyle}>
                About
              </a>
              <a href="" style={linkStyle}>
                Products
              </a>
              <a href="" style={linkStyle}>
                Pricing
              </a>
              <a href="" style={linkStyle}>
                Referral programme
              </a>
              <a href="" style={linkStyle}>
                Careers
              </a>
              <a href="" style={linkStyle}>
                Zerodha.tech
              </a>
              <a href="" style={linkStyle}>
                Press & media
              </a>
              <a href="" style={linkStyle}>
                Zerodha cares (CSR)
              </a>
            </div>
          </div>
          <div className="col">
            <h5 style={{ fontWeight: "bold", color: "#333", fontSize: "16px" }}>
              Support
            </h5>
            <div style={linkContainerStyle}>
              <a href="" style={linkStyle}>
                Contact
              </a>
              <a href="" style={linkStyle}>
                Support portal
              </a>
              <a href="" style={linkStyle}>
                Z-Connect blog
              </a>
              <a href="" style={linkStyle}>
                List of charges
              </a>
              <a href="" style={linkStyle}>
                Downloads & resources
              </a>
            </div>
          </div>
          <div className="col">
            <h5 style={{ fontWeight: "bold", color: "#333", fontSize: "16px" }}>
              Account
            </h5>
            <div style={linkContainerStyle}>
              <a href="" style={linkStyle}>
                Open an account
              </a>
              <a href="" style={linkStyle}>
                Fund transfer
              </a>
              <a href="" style={linkStyle}>
                60 day challenge
              </a>
            </div>
          </div>
        </div>
        <div
          className="mt-4 text-muted"
          style={{ fontSize: "12px", lineHeight: "1.5" }}
        >
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            <a href="mailto:complaints@zerodha.com"> complaints@zerodha.com</a>,
            for DP related to <a href="mailto:dp@zerodha.com">dp@zerodha.com</a>
            . Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances.
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorized transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one-time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non-allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Styling for links
const linkStyle = {
  color: "#007bff",
  textDecoration: "none",
  padding: "4px 0",
  fontSize: "14px", // Adjusted font size for links
  transition: "color 0.3s ease",
};

// Container style for link grouping
const linkContainerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "4px", // Space between links
};

export default Footer;
