import React from "react";
import resume from "../assets/recent_cv_portagana.pdf";

function CV() {
  return (
    <section
      id="cv_section"
      style={{ overflow: "hidden", width: "100%", height: "100%" }}
    >
      <div
        style={{
          overflow: "hidden",
          width: "100%",
          height: "100%",
        }}
      >
        <iframe
          src={resume}
          style={{
            width: "100%",
            height: "100%",
            border: "0",
            overflow: "hidden",
          }}
        >
          This browser does not support PDFs. Please download the PDF to view
          it:
          <a href={resume}>Download PDF</a>.
        </iframe>
      </div>
    </section>
  );
}

export default CV;
