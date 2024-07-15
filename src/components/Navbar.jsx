import React, { useState } from "react";
import { navlinks, person } from "./constant/constant";
import "./css/Navbar.css";
import { motion } from "framer-motion";
function NavBar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__Navbar">
      <div className="app__Navbar-men-logo">
        <h2>{person.short_name}</h2>
      </div>
      <div className="app__Navbar-links">
        {navlinks.map((navlink) => {
          return (
            <a href="#" key={navlink} className="app__Navbar-link">
              {navlink}
            </a>
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
                <a
                  href="#"
                  key={navlink}
                  className="app__Navbar-link"
                  onClick={() => setToggle(false)}
                >
                  {navlink}
                </a>
              );
            })}
          </motion.div>
        )}
      </div>
    </nav>
  );
}
export default NavBar;
