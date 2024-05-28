import React from 'react'
import img1 from '../../../assets/images/img1.jpg'
import './About.css'
import Row from "react-bootstrap/Row";

function About() {
  return (
    <div id='about-us'>
      <h1 className='about-h' >ABOUT ME</h1>
      <div className='container'>
        <div className='row main'>
        <div className='col-md-6 col-12'>
            <img src={img1} alt="" />
        </div>
        <div className='col-md-6 col-12'> 
        <div className='content text-xl'>
                <br />Web Developer with expertise of  HTML CSS BOOTSTRAP and JAVASCRIPT. currently learning React  for Web Application.
                <br /><br/>
                I am passionate programmer and a learner, born and brought up in India.
                <br />
                <br />
                Along with that, I also help people as a COACH on their journey of becoming a professional programmer. 
                <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                <br /> <br />
                <div className='social link'>
                  <a href="https://www.linkedin.com/in/talib-saifi-b4b404185/">
                  <button  type='button' className='btn btn-outline-primary rounded-xl' >Linkedin</button></a>
                  <a href="https://github.com/TalibSaifi003">
                  <button type='button' className='btn btn-outline-dark m-2 rounded-xl' >Github</button></a>
                  <a href="/">
                  <button type='button' className='btn btn-outline-success m-2 rounded-xl' >My Resume</button></a>
                  <a href="https://x.com/?lang=en">
                  <button type='button' className='btn btn-outline-secondary  m-2 rounded-xl' >Twitter</button></a>



                  <button></button>
                </div></div>
               
                </div>
      </div>
      </div>
    </div>
  )
}

export default About
