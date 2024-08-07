import React, { useState } from "react";
import { navlinks, person } from "../constant/constant";
import "../assets/styles/Navbar.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function NavBar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__Navbar">
      <div className="app__Navbar-men-logo">
        <h2>{person.short_name}</h2>
      </div>
      <div className="app__Navbar-links">
        {navlinks.map((navlink, index) => {
          return (
            <Link to={navlink.link} key={index} className="app__Navbar-link">
              {navlink.text}
            </Link>
          );
        })}
      </div>
      <div>
        <button>Contact Me</button>
      </div>
      <div className="app__Navbar-menu">
        <div className="toggler-button" onClick={() => setToggle(true)}>
          <span></span>
          <span></span>
        </div>
        {toggle && (
          <motion.div
            whileInView={{ x: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="app__Navbar-menu-links-mobile"
          >
            <button onClick={() => setToggle(false)}>X</button>
            {navlinks.map((navlink) => {
              return (
                <Link
                  to={navlink.link}
                  key={navlink.link}
                  className="app__Navbar-link"
                  onClick={() => setToggle(false)}
                >
                  {navlink.text}
                </Link>
              );
            })}
          </motion.div>
        )}
      </div>
    </nav>
  );
}
export default NavBar;
