import React from 'react';
import './services.scss'; 
import { GiCheckMark } from 'react-icons/gi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Defining design system and conducting user research</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Designing user interfaces</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Collaborating with cross-functional teams</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Keeping up-to-date with industry trends</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Iterating and testing of design</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Front-End Developer</h3>
          </div>

          <ul className='service__list'>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Creating and implementing visual elements</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Building and maintaining user interactions</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Optimizing performance</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Ensuring cross-browser compatibility</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Iterating and testing of code</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Back-End Developer</h3>
          </div>

          <ul className='service__list'>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Database design and management</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Security</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Server-side logic and business rules</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>API development</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Scalability and performance</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Mathematics Tutor</h3>
          </div>

          <ul className='service__list'>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Planning and delivering instruction</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Assessing student learning</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Curriculum development</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Building and developing teaching and learning aids</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Professinoal Development</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services;