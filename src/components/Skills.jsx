import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaFigma,
  FaBootstrap,
  FaHtml5,
  FaCss3,
  FaSass,
} from "react-icons/fa";
import { DiJavascript1, DiPhotoshop, DiMsqlServer } from "react-icons/di";
import { SiTailwindcss, SiAntdesign, SiRedux, SiSequelize,SiPostgresql,SiMongodb } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import '../css/skills.css'

const Skills = ({ skill }) => {
  const icon = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3 />,
    Javascript: <DiJavascript1 />,
    Bootstrap: <FaBootstrap />,
    Tailwind: <SiTailwindcss />,
    AntDesign: <SiAntdesign />,
    Sass: <FaSass />,
    "C++": <CgCPlusPlus />,
    "C#": <TbBrandCSharp />,
    React: <FaReact />,
    Redux: <SiRedux />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Npm: <FaNpm />,
    Sequelize: <SiSequelize />,
    Figma: <FaFigma />,
    PhotoShop: <DiPhotoshop />,
    Postgresql: <SiPostgresql />,
    MsqlServer: <DiMsqlServer />,
    Mongodb: <SiMongodb />,
  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill]}
    </div>
  );
};

export default Skills;