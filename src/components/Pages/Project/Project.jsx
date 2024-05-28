import React from 'react'
import Card from 'react-bootstrap/Card';
import img1 from '../../../assets/images/imgp.png'

import './Project.css'

function Project() {
  return (
    <div id='projects'>
      <h1 className='text-4xl text-center uppercase'>Projects</h1>
      
      <div className='project-section'>
       <Card  className='focus'>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Delight Juice Bar</Card.Title>
        <Card.Text >
      
        {/* <button className='btn btn-outline-success' > Project Details </button> */}
        <a href="https://talibsaifi003.github.io/DelightJuicer/">
        <button className='btn btn-outline-success' > See Live </button></a>
        <a href="https://github.com/TalibSaifi003/DelightJuicer">
        <button className='btn btn-outline-success' > Source Code </button></a>
     
        </Card.Text>
       
      </Card.Body>
    </Card>
    </div>
    </div>
  )
}

export default Project
