import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineHome} from 'react-icons/ai'
import {BsPerson, BsCodeSlash} from 'react-icons/bs'
import logo from '../assets/img/logoblanco.png'
import '../css/nav.css'

const Nav = () => {

  const [navBarBlur, setNavBarBlur] = useState(false)

  const handleScroll = () => {
    if (window.scrollY >= 20) {
      setNavBarBlur(true)
    } else {
      setNavBarBlur(false)
    }
  }

  let showMenu = () => {
    let bar = document.getElementsByClassName('bar');
    let ham = document.getElementsByClassName('NavbarLinks');
    bar[0].classList.toggle('barOne');
    bar[1].classList.toggle('barTwo');
    bar[2].classList.toggle('barThree');

    ham[0].classList.toggle('showNavbar');    
  }

  let hideMenu = () => {
    let bar = document.getElementsByClassName('bar');
    let ham = document.getElementsByClassName('NavbarLinks');
    bar[0].classList.remove('barOne');
    bar[1].classList.remove('barTwo');
    bar[2].classList.remove('barThree');

    ham[0].classList.remove('showNavbar');
  }

  window.addEventListener('scroll', handleScroll)
  return (
    <nav className={navBarBlur ? "Navbar blur" : "Navbar"}>
    <h1
      title="Reload"
      onClick={() => window.location.reload(true)}
      className="Logo"
    >
      <img className='logoImg' src={logo}/>
    </h1>

    <div className="Hamburger" onClick={showMenu}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>

    <ul className="NavbarLinks">
      <li onClick={hideMenu}>
        <Link to="/">
          <AiOutlineHome /> Home
        </Link>
      </li>
      <li onClick={hideMenu}>
        <Link to="/About">
          <BsPerson /> About
        </Link>
      </li>
      <li onClick={hideMenu}>
        <Link to="/Project">
          <BsCodeSlash /> Projects
        </Link>
      </li>
    </ul>
  </nav>
  )
}

export default Nav