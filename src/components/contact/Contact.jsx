import './contact.css'
import React, { useContext, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import phone from '../../img/phone.png'
import mail from '../../img/mail.png'
import address from '../../img/adress.png'
import link from '../../img/linkedin.JPG'
import { ThemeContext } from '../../context';
const Contact = () => {

  const formRef = useRef()
  const [done , setDone]= useState(false)
  const theme= useContext(ThemeContext);
  const darkMode=theme.state.darkMode;

  const handleSubmit=(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_iopyqoo', 'template_3tj2nut', formRef.current, 'rNXublfCNK-1GPaGW')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <div className='c'>
      <div className='c-bgleft'></div>
      <div className='c-bgright'></div>
      <div className='c-wrapper'>
        <div className='c-left'>
          <div className='c-title'>
            <h1>Contact Details</h1>
          </div>
          <div className='c-img'>
            <div className='c-img-item'>
              <img src={phone} alt="" className='c-imgp' />+91 7044361364
            </div>
            <div className='c-img-item'>
              <img src={mail} alt="" className='c-imgp' /> somtirthacse@gmail.com / somtirtham.1997@gmail.com
            </div>
            <div className='c-img-item'>
              <img src={address} alt="" className='c-imgp' />
              Mathkol Vivekananda Road Kolkata-700065.
            </div>
            <div className='c-img-item'>
              <img src={link} alt="" className='c-imgp' />
              <a className='linkedin' href="https://www.linkedin.com/in/somtirtha-mukhopadhyay/">
                LinkedIn Account</a>
            </div>
          </div>
        </div>
        <div className='c-rightr'>
          <div className='c-desc'>
            <p>
              <b>Open to Work!</b> Get in touch. Searching for better opportunities.
              Part-time freelancer would love to help in your Machine Learning Project.
              ML enthusiast part-timer in Kaggle.
            </p>
          </div>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && '#333', color: darkMode && '#59b256' }}  type="text" placeholder='enter your name' name='user_name'/>
            <input style={{backgroundColor: darkMode && '#333'}} type="text" placeholder='subject' name='user_subject'/>
            <input style={{backgroundColor: darkMode && '#333'}} type="text" placeholder='enter your email' name='user_email'/> 
            <textarea style={{backgroundColor: darkMode && '#333'}} rows='5' placeholder='Your Message' name='message'/>
            <button>Submit</button>
            <div style={{color: darkMode && '#59b256'}}>{done && "Thankyou..Your Message is in my mailbox. Will get back to you ASAP.."}</div>
          </form>
        </div>
      </div>

    </div >
  )
}

export default Contact