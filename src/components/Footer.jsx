import React from "react";
import { FaGithub} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import '../css/footer.css'
import logo from '../assets/img/logo.png'

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <img src={logo} alt="logo N.A." />
      <h4>Copyright &copy; {year} | All Rights Reserved.</h4>
      <div className="footerLinks">
        <a href="https://github.com/nicolasalmeda" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/nicolas-almeda/" target="_blank">
        <FaLinkedin />
        </a>

        <a href="mailTo:nicoalmeda96@gmail.com" target="_blank">
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;