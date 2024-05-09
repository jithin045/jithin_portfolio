import React, { useRef } from 'react'
import { Row, Col } from 'react-bootstrap';
import ParticlesComponent from '../Particles/ParticleComponent'
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ca9x2od', 'template_lmxju9q', form.current, {
        publicKey: 'oHLPfI9NtkLRTNZh_',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (

    <>
    <section>
      <ParticlesComponent/>
      <div className="container w-50 p-1">
        <Row>
            <h2 className='text-center text-white mt-5 '>Contact Me</h2>
          
          <Col>
           <form ref={form} onSubmit={sendEmail} className='form-control card bg-dark'>
          <input className='mb-3' type="text" placeholder='Name' name='user_name' required />
              <input className='mb-3' type="email" placeholder='Email Address' name='user_email' required />
              <input className='mb-3' type="text" placeholder='Subject' name='subject' required />
              <textarea className='mb-3' name="message" cols="20" rows="10" id=""></textarea>
              <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
            
          </Col>
        </Row>
      </div>
    </section>
    </>
  )
}

export default Contact
