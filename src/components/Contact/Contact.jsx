import React from 'react'
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './Contact.css'
function Contact() {
  return (
    <div id="contact" className='bg-gray-500'>
    
      <h1 className="pt-3 text-center font-details-b pb-3 text-4xl">CONTACT ME</h1>
        <Row>
          <Col className="d-flex justify-content-center flex-wrap contact-details">
            <div className="m-2">
              <a href="mailto:saifitalib25@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title="talib.saifi_@hotmail.com">
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>
            <div className="m-2">
            <a href="https://www.linkedin.com/in/talib-saifi-b4b404185/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Visit my LinkenIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
            
            <div className="m-2">
            <a href="https://github.com/TalibSaifi003" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="" target="_blank" rel="noopener noreferrer">
                <Button id="medium-btn" variant="outline-info" title="Lets write together!">
                <i className="fab fa-youtube"></i> Medium
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-info" title="Tweets are welcomed!">
                  <i className="fab fa-twitter"></i> Twitter
                </Button>
              </a>
            </div>
          </Col>
        </Row>
        </div>
  )
}

export default Contact
