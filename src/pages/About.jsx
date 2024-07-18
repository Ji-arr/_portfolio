import React, { useState, useEffect } from "react";
import MainLayout from "../components/MainLayout";
import "../assets/styles/Aboutme.css";
import Dropdown from "../components/Dropdown";
import panda from "../assets/images/panda.jpg";
import Slider from "../components/Slider";
import {
  contentMap,
  workExperience,
  education,
} from "../components/AboutComponent";
import WorkExperienceCard from "../templates/WorkExperienceCard";

function About() {
  const item_list = [
    "Work Experience",
    "Education",
    "Curriculum Vitae",
    "Certificates",
  ];
  const contents = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  const [isAnimating, setIsAnimating] = useState(false);

  const [selectedItem, setSelectedItem] = useState("");
  const [content, setContent] = useState(
    <h1>
      <i>Meet Panda your virtual assistant here...</i>
    </h1>
  );

  const handleClick = (item) => () => {
    setIsAnimating(!isAnimating);
    setSelectedItem(item);
  };

  useEffect(() => {
    const newContent = contentMap[selectedItem] || (
      <h1>
        <i>Meet Panda your virtual assistant here...</i>
      </h1>
    );
    setContent(newContent);
  }, [selectedItem]);

  return (
    <MainLayout>
      <section id="aboutme_section">
        <div id="ask_panda">
          <img src={panda} alt="panda" />
          <h1>BOT PANDA</h1>
          <p>Virtual Assistant</p>
          {/* <Dropdown title="Select an item" items={items} /> */}
          <button onClick={handleClick(selectedItem)} id="talk">
            T A L K
          </button>
          <div id="list_container" className={isAnimating ? "animate" : ""}>
            <h2>You want to know about</h2>
            <ul>
              {item_list.map((item, index) => (
                <li key={index} onClick={handleClick(item)}>
                  {item}
                </li>
              ))}
            </ul>
            <button onClick={handleClick("")}>X</button>
          </div>
        </div>
        <div id="ans_panda">
          {content}

          {/* <div className="work_experience">
            {workExperience.map((work, index) => {
              return (
                <div
                  className="work_details"
                  style={{
                    height: `calc(${100 / workExperience.length}%`,
                  }}
                >
                  <img src={work.image} alt="work" />
                  <div>
                    {" "}
                    <h2>{work.company}</h2>
                    <h3>{work.position}</h3>
                    <h4>{work.duration}</h4>
                    <p>{work.description}</p>
                  </div>
                </div>
              );
            })}
          </div> */}
        </div>
      </section>
    </MainLayout>
  );
}

export default About;
