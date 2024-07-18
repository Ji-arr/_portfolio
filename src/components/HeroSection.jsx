import { person, floatingCircles } from "../constant/constant";
import { motion } from "framer-motion";
import jiar2 from "../assets/images/jiar2.jpg";
import React from "react";
import "../assets/styles/Hero.css";

function HeroSection() {
  const float_left = floatingCircles.slice(0, 3);
  const float_right = floatingCircles.slice(3, 6);
  return (
    <section className="hero-section">
      <div className="hero__glass-container">
        <span className="hero__glass-frame"></span>
        <div className="hero_left-glass">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
            whileInView={{ opacity: [0, 1] }}
            className="hero-section__image"
          >
            <img id="jiar_img" src={jiar2} alt="Jay-ar" />

            {float_left.map((circle, index) => {
              return (
                <motion.div
                  key={index}
                  animate={{ x: circle.x_destination, y: circle.y_destination }}
                  transition={{ duration: circle.duration, ease: "easeIn" }}
                  whileInView={{
                    x: [0, circle.x_destination],
                    y: [0, circle.y_destination],
                  }}
                  className="hero_floating_obj"
                >
                  <img src={circle.img} alt={circle.alt} />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        <span className="hero__glass-frame"></span>
        <div className="hero_right-glass">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
            whileInView={{ opacity: [0, 1] }}
            className="hero-section__person-details"
          >
            <h1>{person.name}</h1>
            <h4>{person.profession}</h4>

            {float_right.map((circle, index) => {
              return (
                <motion.div
                  key={index}
                  animate={{ x: circle.x_destination, y: circle.y_destination }}
                  transition={{ duration: circle.duration, ease: "easeIn" }}
                  whileInView={{
                    x: [0, circle.x_destination],
                    y: [0, circle.y_destination],
                  }}
                  className="hero_floating_obj"
                >
                  <img src={circle.img} alt={circle.alt} />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        <span className="hero__glass-frame"></span>
      </div>
    </section>
  );
}

export default HeroSection;
