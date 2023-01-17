import React from 'react';
import './footer.scss';
import { BsTwitter } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
//rafce

const Footer = () => {

    let year = new Date().getFullYear()
  return (
    <footer>
        <a href="#" className='footer__logo'>Jimin</a>

        <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
            <a href="https://facebook.com"><BsFacebook /></a>
            <a href="https://instagram.com"><FaInstagramSquare /></a>
            <a href="https://twitter.com"><BsTwitter /></a>
        </div>

        <div className="footer__copyright">
            <small>coded with ❤ by Jimin Wuese <br /> &copy; {year} </small>
        </div>
    </footer>
  )
}

export default Footer