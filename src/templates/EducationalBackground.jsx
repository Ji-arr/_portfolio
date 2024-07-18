import React from "react";
import { education } from "../components/AboutComponent";
import "../assets/styles/educationalbackground.css";

function EducationalBackground() {
  return (
    <section id="education_section">
      {education.map((school, index) => {
        return (
          <div className="school_container">
            <div
              className="school_image"
              style={{ backgroundImage: ` url(${school.image}) ` }}
            ></div>
            <div className="school_details">
              <h2>{school.school}</h2>
              <h3>
                {school.short_name} {`(${school.year})`}
              </h3>
              <p>{school.course}</p>
              <p>{school.level}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default EducationalBackground;
