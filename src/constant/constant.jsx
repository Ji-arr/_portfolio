class Person {
  constructor(name, shortname, age, description, college_degree, profession) {
    this.name = name;
    this.short_name = shortname;
    this.age = age;
    this.description = description;
    this.college_degree = college_degree;
    this.profession = profession;
  }
}

class FloatingCircle {
  constructor(img, alt, x_destination, y_destination, duration) {
    this.img = img;
    this.alt = alt;
    this.x = 0;
    this.y = 0;
    this.x_destination = x_destination;
    this.y_destination = y_destination;
    this.duration = duration;
  }
}

// Jay-ar`s Personal Information

export const person = new Person(
  "Jay-Ar Portagana",
  "Jiar",
  22,
  "I am a computer science graduate and passionate about programming and web development.",
  "BS Computer Science",
  "Web Developer | Freelancer "
);

// Nav Links
export const navlinks = [
  { text: "Home", link: "/" },
  { text: "About", link: "/aboutme" },
  { text: "Projects", link: "/projects" },
  { text: "Contact", link: "/contact" },
];

// Social media Links
export const links = {
  linkedin: "https://www.linkedin.com/in/jay-ar-ramirez-3a6b5b1b9/",
  github: "https://github.com/Ji-arr",
  facebook: "https://www.facebook.com/portagana.jayar",
  email: "portaganajayar@gmail.com",
};

// Floating Circles
import plotly from "../assets/images/plotly.png";
import npm from "../assets/images/npm.png";
import sass from "../assets/images/sass.png";
import html5 from "../assets/images/html5.png";
import css3 from "../assets/images/css.png";
import react from "../assets/images/react.png";

export const floatingCircles = [
  new FloatingCircle(react, "react", "-300%", "-250%", 1),
  new FloatingCircle(plotly, "plotly", "-370%", "-50%", 1.5),
  new FloatingCircle(npm, "npm", "-300%", "150%", 2),
  new FloatingCircle(sass, "sass", "200%", "-250%", 2),
  new FloatingCircle(html5, "html5", "275%", "-50%", 1.5),
  new FloatingCircle(css3, "css3", "200%", "150%", 1),
];
