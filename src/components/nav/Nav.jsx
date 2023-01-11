import React from 'react';
import './nav.scss';
import {AiFillHome} from 'react-icons/ai';
import {FaUserAlt} from 'react-icons/fa';
import {MdWork} from 'react-icons/md';
import {MdDesignServices} from 'react-icons/md'
import {SiGooglemessages} from 'react-icons/si'
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
       <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserAlt /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdWork /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdDesignServices /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><SiGooglemessages /></a>
    </nav>
  )
}

export default Nav;