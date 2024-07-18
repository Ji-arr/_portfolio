import React from "react";
import sf_bg from "../assets/images/sf_bg.png";
import MainLayout from "../components/MainLayout";
import "../assets/styles/Project.css";
import Projects from "../templates/Projects";
function Project() {
  return (
    <MainLayout>
      <section id="project_section">
        <Projects />
      </section>
    </MainLayout>
  );
}

export default Project;
