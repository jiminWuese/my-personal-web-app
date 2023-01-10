import React from 'react'
import './header.scss';
import CTA from './CTA';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Jimin, Simon Wuese</h1>
        <h5 className='text-light'>Maths Tutor and Web Developer</h5>
        <CTA />
      </div>
    </header>
  )
}

export default Header;