import ews from "../assets/images/ews.png";
import sf from "../assets/images/sf.png";
import baumann from "../assets/images/baumann.jpg";
import tcsnhs from "../assets/images/tcsnhs.jpg";
import cvsu from "../assets/images/cvsu-sc.jpg";
import Slider from "./Slider";
import WorkExperienceCard from "../templates/WorkExperienceCard";
import EducationalBackground from "../templates/EducationalBackground";
import CV from "../templates/CV";
import GoCrayons from "../assets/images/GoCrayons.jpg";
import Certificate from "../templates/Certificates";
export const workExperience = [
  {
    image: ews,
    company: "Endsofttech Web Solutions",
    position: "Web Developer",
    duration: "300 hours",
    description:
      "Addressed and resolved backend/frontend issues, collaborating with the production team to develop new features and functionalities.",
  },
  {
    image: sf,
    company: "Straight Forward",
    position: "Full Stack Developer",
    duration: "486 hours",
    description:
      "Overseing the development of the company's website, ensuring that the website is fully functional and user-friendly.",
  },
  {
    image: baumann,
    company: "Baumann FitBox",
    position: "Web Developer",
    duration: "Duration 3",
    description:
      "Developing company's website, ensuring that the website is fully functional and user-friendly.",
  },
];

export const education = [
  {
    image: cvsu,
    level: "College",
    school: "Cavite State University - Silang Campus",
    short_name: "CvSU-SC",
    course: "Bachelor of Science in Information Technology",
    year: "2020 - 2024",
  },
  {
    image: tcsnhs,
    level: "Senior High School",
    school: "Tagaytay City Science National High School - Integrated School",
    short_name: "TCSNHS-IS",
    course: "",
    year: "2014 - 2020",
  },
];

export const certificates = [
  {
    image: GoCrayons,
    title: "GoCrayons",
    description: "Certificate of Participation",
  },
  {
    image: GoCrayons,
    title: "GoCrayons",
    description: "Certificate of Participation",
  },
  {
    image: GoCrayons,
    title: "GoCrayons",
    description: "Certificate of Participation",
  },
  {
    image: GoCrayons,
    title: "GoCrayons",
    description: "Certificate of Participation",
  },
];

export const contentMap = {
  "Work Experience": (
    <Slider
      content={workExperience}
      initialItemsToShow={3}
      template={WorkExperienceCard}
    />
  ),
  Education: <EducationalBackground />,
  "Curriculum Vitae": <CV />,
  Certificates: (
    <Slider
      content={certificates}
      initialItemsToShow={1}
      template={Certificate}
    />
  ),
};
