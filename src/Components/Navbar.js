import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../Assets/logo.png";
import { Button } from "react-bootstrap";
import { useUser } from "../context/UserContext";

function Navbar() {
  const { logout, user } = useUser();
  const location = useLocation();

  // Function to check if current path matches the link
  const isActive = (path) => location.pathname === path;

  // Collapse the navbar after clicking a link (on small screens)
  const handleNavLinkClick = () => {
    const nav = document.getElementById("navbarResponsive");
    if (nav && nav.classList.contains("show")) {
      const bsCollapse = new window.bootstrap.Collapse(nav, {
        toggle: true,
      });
      bsCollapse.hide();
    }
  };

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top py-3" id="mainNav">
      <div className="container px-4 px-lg-5">
        <Link to="/equilearn/home" className="navbar-brand mb-0 h1">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top me-3"
            alt="Logo"
          />
          Equilearn
        </Link>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto my-2 my-lg-0">
            <li className="nav-item">
              <Link
                to="/equilearn/home"
                className={`nav-link ${isActive("/equilearn/home") ? "active fw-bold text-warning" : ""}`}
                onClick={handleNavLinkClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/equilearn/learn-sign"
                className={`nav-link ${isActive("/equilearn/learn-sign") ? "active fw-bold text-warning" : ""}`}
                onClick={handleNavLinkClick}
              >
                Learn Sign
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/equilearn/convert"
                className={`nav-link ${isActive("/equilearn/convert") ? "active fw-bold text-warning" : ""}`}
                onClick={handleNavLinkClick}
              >
                Convert
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/equilearn/pose-model"
                className={`nav-link ${isActive("/equilearn/pose-model") ? "active fw-bold text-warning" : ""}`}
                onClick={handleNavLinkClick}
              >
                Pose Model
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/equilearn/level/1"
                className={`nav-link ${location.pathname.startsWith("/equilearn/level") ? "active fw-bold text-warning" : ""}`}
                onClick={handleNavLinkClick}
              >
                Quiz
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/equilearn/all-videos"
                className={`nav-link ${isActive("/equilearn/all-videos") ? "active fw-bold text-warning" : ""}`}
                onClick={handleNavLinkClick}
              >
                Videos
              </Link>
            </li>
            <li className="nav-item">
              {user ? (
                <Button onClick={logout} className="btn btn-outline-light ms-2">
                  Logout
                </Button>
              ) : (
                <Link to="/login" className={`nav-link ${isActive("/login") ? "active fw-bold text-warning" : ""}`} onClick={handleNavLinkClick}>
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
