import React from 'react'
import user from '../assets/img/user.png'
import Type from './Type.jsx'
import { Link } from 'react-router-dom'
import Tilt from 'react-parallax-tilt'
import { CgPhone } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";
import '../css/home.css'

const Home = () => {
  return (
    <div className="homepage">
    <div className="container HomePage d-flex justify-content-evenly align-items-center p-5 Shadow">
      <div className="HomeText">
        <h1>Hello there!</h1>
        <h1>
          I'M <b>Nicolás Lagoria</b>
        </h1>
        <Type />
        <Link to="/About">
          <button>
            About Me
            <BsPerson />
          </button>
        </Link>

        <Link to="/Contact">
          <button>
            Contact <CgPhone />
          </button>
        </Link>
      </div>
      <Tilt>
        <img className="Avatar" src={user} alt="" />
      </Tilt>
    </div>
  </div>
  )
}

export default Home