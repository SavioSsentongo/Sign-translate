import React from "react";
import { Link } from "react-router-dom";

const groupMembers = [
  {
    name: "Bwesigye Treasure",
    email: "treasurebwesigye@gmail.com",
    contact: "+256781364238",
  },
  {
    name: "Lukwiya Mathew",
    email: "lmateo@gmail.com",
    contact: "+256764314028",
  },
  {
    name: "Savio Kisegerwa",
    email: "dsentongosavio@gmail.com",
    contact: "+256708817688",
  },
  {
    name: "Mukooli Innocent",
    email: "mukoolinnocent@gmail.com",
    contact: "+256708817952",
  },
];

function Footer() {
  return (
    <footer className="page-footer font-small unique-color-dark mt-5">
      <div
        className="container-fluid text-white pt-3"
        style={{ backgroundColor: "rgba(33,37,41,1)" }}
      >
        <div className="container text-md-left mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold">Equilearn</h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p className="footer-text">
                A comprehensive toolkit containing various features related to
                Sign Language.
              </p>
            </div>

            {/* Updated Services section */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold">Services</h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              
              <p>
                <Link to="/equilearn/learn-sign" className="footer-link">
                  Learn Sign
                </Link>
              </p>
              <p>
                <Link to="/equilearn/level/1" className="footer-link">
                  Confirm your knowledge#Quiz
                </Link>
              </p>
              <p>
                <Link to="/equilearn/convert" className="footer-link">
                  Conversions
                </Link>
              </p>
              <p>
                <Link to="/equilearn/pose-model" className="footer-link">
                  Real time sign Translator
                </Link>
              </p>
              <p>
                <Link to="/equilearn/all-videos" className="footer-link">
                  Create your own Videos
                </Link>
              </p>
            </div>

            {/* Group members section */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase font-weight-bold">Group Members</h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              {groupMembers.map((member, index) => (
                <div key={index} className="footer-text mb-2">
                  <strong>{member.name}</strong>
                  <br />
                  <span>Email: {member.email}</span>
                  <br />
                  <span>Contact: {member.contact}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
