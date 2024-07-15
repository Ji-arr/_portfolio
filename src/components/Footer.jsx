import React from "react";
import "./css/Footer.css";
import {
  contact_infos,
  about_me,
  services,
  social_links,
} from "./constant/footer";
function Footer() {
  return (
    <footer id="portfolio_footer">
      <div className="lets_get_started"></div>
      <div className="flex">
        <div id="contact_info">
          <h1>CONTACT INFO</h1>
          {contact_infos.map((contact_info, index) => {
            return (
              <div key={index} className="list">
                {contact_info.icon}
                <p>{contact_info.text}</p>
              </div>
            );
          })}
        </div>
        <div id="about_me">
          <h1>ABOUT ME</h1>
          {about_me.map((me, index) => {
            return (
              <div key={index} className="list">
                <p>{me.text}</p>
              </div>
            );
          })}
        </div>
        <div id="services">
          <h1>SERVICES</h1>
          {services.map((service, index) => {
            return (
              <div key={index} className="list">
                <p>{service.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="footer_end">
        <p> 2020 jiar All righs reserved</p>
        <div className="social_links">
          {social_links.map((social_link, index) => {
            return (
              <a href={social_link.link} key={index}>
                <div>{social_link.icon}</div>
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
