import React from "react";
import "../assets/styles/WorkExperience.css";

function WorkExperienceCard(item) {
  return (
    <div className="work_experience">
      <div
        className="background"
        style={{ backgroundImage: `url(${item.image})` }}
      >
        <p>{item.description}</p>
      </div>
      <img src={item.image} alt="" />
      <h1>{item.company}</h1>
      <p>
        {item.position} ({item.duration})
      </p>
    </div>
  );
}

export default WorkExperienceCard;
