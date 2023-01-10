import React from 'react'
import './header.scss';
import CTA from './CTA';
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="header__left">
          <div className="me">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="header__right">
          <h5>Hello, I'm</h5>
          <h1>Jimin, Simon <br /> Wuese</h1>
          <h5 className="text-light">Maths Tutor and Web Developer</h5>
          <CTA />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
}

export default Header;