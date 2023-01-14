import React from "react";
import "./experience.scss";
import { BsShieldFillCheck } from "react-icons/bs";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="skill__set">
          <h3>Web Developer</h3>
          <div className="experience__content">
            <article className="experience__detail">
              <BsPatchCheckFill className='experience__icon-detail'/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className='experience__icon-detail'/>
              <div>
                <h4>CSS/SASS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className='experience__icon-detail'/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className='experience__icon-detail'/>
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsShieldFillCheck className='experience__icon-detail'/>
              <div>
                <h4>UI/UX</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            {/* <article className='experience'>
              <BsShieldFillCheck />
              <h4>Redux</h4>
              <small className='text-light'>Basic</small>
            </article>
            <article className='experience'>
              <BsShieldFillCheck />
              <h4>MongoDB</h4>
              <small className='text-light'>Basic</small>
            </article> 
            <article className='experience'>
              <BsShieldFillCheck />
              <h4>MySQL</h4>
              <small className='text-light'>Basic</small>
            </article>
            <article className='experience'>
              <BsShieldFillCheck />
              <h4>Node JS</h4>
              <small className='text-light'>Basic</small>
            </article> */}
          </div>
        </div>
        <div className="skill__set">
          <h3>Mathematics Tutor</h3>
          <div className="experience__content">
            <article className="experience__detail">
              <BsPatchCheckFill className='experience__icon-detail'/>
              <div>
                <h4>Numeration</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className='experience__icon-detail'/>
              <div>
                <h4>Algebra</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className='experience__icon-detail'/>
              <div>
                <h4>Trigonometry</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className='experience__icon-detail'/>
              <div>
                <h4>Geometry</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className='experience__icon-detail'/>
              <div>
                <h4>Statistics</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
