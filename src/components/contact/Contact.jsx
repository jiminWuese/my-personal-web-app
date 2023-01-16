import React, { useRef } from 'react'
import './contact.scss';
import { SiGmail } from 'react-icons/si';
import { SiMessenger } from 'react-icons/si';
import { RiWhatsappFill } from 'react-icons/ri';
import emailjs from 'emailjs-com';


const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0pr4x5e', 'template_3s3m9k7', form.current, '8qEFIgFyDofRkIhYW')
    e.target.reset();
    }

  


  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <SiGmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>jiminwuse@gmail.com</h5>
            <a href="mailto:jiminwuese@gmail.com" target="_blank">Email me</a>
          </article>
          <article className='contact__option'>
            <SiMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Jimn Wuese</h5>
            <a href="https://m.me/wuesesimon" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiWhatsappFill className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+234...</h5>
            <a href="https://api.whatsapp.com/send?phone=+2348134444511" target="_blank">WhatsApp Me</a>
          </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your full name' required />
            <input type="email" name='email' placeholder='Your email'  required/>
            <textarea name="message" rows="7" placeholder='Your message'></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        
      </div>
    </section>
  )
}

export default Contact;