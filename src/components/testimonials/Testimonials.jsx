import React from 'react';
import './testimonials.scss';
import tes1 from '../../assets/tes1.png';
import tes2 from '../../assets/tes2.png'

// import Swiper core and required modules
import { Pagination, Navigation, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'; 

const data = [
  {
    id: 1,
    name: "Jimin Simon",
    review: 'You are an excellent tutor and a very creative developer, I am impressed by your work. Keep it up.',
    avatar: tes1
  },
  {
    id: 1,
    name: "Jimin Wuese",
    review: 'Keep up the good work Jimin, you are amazing.',
    avatar: tes2
  },
  {
    id: 1,
    name: "Wuese Simon",
    review: 'You are my best choice as far as coding is concerned.',
    avatar: tes1
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }} 
       className='container testimonial__container'>
        {data.map(({id, name, review, avatar}) =>{
          return(
            <SwiperSlide key={id} className='testimonial'>
          <div className="client__avatar">
            <img src={avatar} alt="" />
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
              {review}
            </small>
        </SwiperSlide>
          )
        })} 
      </Swiper>
    </section>
  )
}

export default Testimonials;