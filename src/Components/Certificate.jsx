import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
import html2canvas from "html2canvas";
import logo from "../Assets/logo.png";
import "./Certificate.css";

const Certificate = () => {
  const { user } = useUser();
  const certificateRef = useRef(null);

  const downloadCertificate = async () => {
    const input = certificateRef.current;
    const canvas = await html2canvas(input, { scale: 2 }); // High-res screenshot
    const imgData = canvas.toDataURL("image/png");

    // Create a link element for downloading the image
    const link = document.createElement("a");
    link.href = imgData;
    link.download = "Equilearn_Certificate.png"; // Name of the image file
    link.click(); // Trigger download
  };

  return (
    <div className="certificate-container">
      <div className="certificate-content" ref={certificateRef}>
        <img src={logo} alt="Equilearn Logo" className="logo" />
        <h1>🎉 Certificate of Completion 🎓</h1>
        <p className="congrats-text">
          Congratulations <strong>{user?.name || "Learner"}</strong>!<br />
          You have successfully completed all the levels of the ASL Quiz on Equilearn.
        </p>

        <div className="team-section">
          <h3>Presented By:</h3>
          <ul>
            <li><strong>Bwesigye Treasure</strong> – CEO</li>
            <li><strong>Lukwiya Mathew</strong> – DIRECTOR</li>
            <li><strong>Sentongo Savio</strong> – MANAGER</li>
            <li><strong>Mukooli Innocent</strong> – SHAREHOLDER</li>
          </ul>
          <p className="company-name">Equilearn</p>
        </div>

        <Link to="/equilearn/home">
          <button className="back-button">Back to Home</button>
        </Link>

        <button onClick={downloadCertificate} className="download-button">
          Download Certificate (Image)
        </button>
      </div>
    </div>
  );
};

export default Certificate;
