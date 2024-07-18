import React from "react";
import { certificates } from "../components/AboutComponent";
import "../assets/styles/Certificate.css";

function Certificate(cert) {
  return (
    <div id="certificate_section">
      <img src={cert.image} alt="" />
      <div className="cert_details">
        <h2>{cert.title}</h2>
        <p>{cert.description}</p>
      </div>
    </div>
  );
}

export default Certificate;
