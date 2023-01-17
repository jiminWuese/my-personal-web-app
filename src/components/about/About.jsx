import React from 'react'
import './about.scss';
import me2 from '../../assets/me2.png';
import { BsAwardFill } from 'react-icons/bs'
import { ImUsers } from 'react-icons/im';
import { GrProjects } from 'react-icons/gr';
import { ImMenu } from 'react-icons/im';

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>

      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me2} alt="Me Working" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card ">
              <BsAwardFill className="about__icon" />
              <h5>Experience</h5>
              <small>hours of coding ++</small>
            </article>

            <article className="about__card ">
              <ImUsers className="about__icon" />
              <h5>Cliants</h5>
              <small>1+ Worldwide</small>
            </article>

            <article className="about__card ">
              <ImMenu className="about__icon" />
              <h5>Projects</h5>
              <small>1+ Completed</small>
            </article>
          </div>

          <p>
            I have a strong background mathemtics and web development,
             and I am excited to use my skills to help
            students succeed and develop applications that are user-friendly and
            visually appealing.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;