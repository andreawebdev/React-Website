import React from "react";
import "../App.css";
import "./MiddleFolder.css";

function MiddleFolder() {
  return (
    <div className="hero-container">
      <video src="/videos/naturefree.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
    </div>
  );
}

export default MiddleFolder;
