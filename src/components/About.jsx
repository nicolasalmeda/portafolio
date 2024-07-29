import React from "react";
import Skills from "./Skills.jsx";
import { FaFileDownload } from "react-icons/fa";
import cv from "../assets/cv/Lagoria_Nicolas_CV.pdf";
import "../css/about.css";
const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Nicolas Lagoria</b> and I am from Argentina,
            I'm a <b>University Programmer</b> with a fullstack profile graduated from the <b>National Technological University FRT.</b>. <br />
            <br />
            I am very excited to take my first steps and gain experience in the IT world.
            Although I may have difficulties at the beginning I stand out for my vocation and insistence to learn and improve what I do.
            Enthusiastic about web development both front-end and back-end although I'm more inclined to front-end.  
            You can check out some of my work in the projects
            section.
            <br />
          </p>
          <a href={cv} download className="resume-btn">
            <button>
              Download Resume <FaFileDownload></FaFileDownload>
            </button>
          </a>
        </div>

        <div></div>
      </div>

      <h1 className="SkillsHeading"> Skillset</h1>
      <hr />
      <div className="skills">
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Bootstrap" />
        <Skills skill="Tailwind" />
        <Skills skill="AntDesign" />
        <Skills skill="Sass" />
        <Skills skill="Javascript" />
        <Skills skill="React" />
        <Skills skill="Redux" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="C++" />
        <Skills skill="C#" />
        <Skills skill="Figma" />
        <Skills skill="PhotoShop" />
        <Skills skill="Npm" />
        <Skills skill="Sequelize" />
        <Skills skill="Postgresql" />
        <Skills skill="MsqlServer" />
        <Skills skill="Mongodb" />
      </div>
    </>
  );
};

export default About;