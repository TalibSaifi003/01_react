import React from 'react'
import Card from 'react-bootstrap/Card';
import './Blog.css'
function Blogsec({Title,Text,btnText,linkText,imagePath}) {
  return (
    <div className='blog-section'>
       <Card style={{ width: '18rem' }} className='focus'>
      <Card.Img variant="top" src={imagePath} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>
          {Text}
        </Card.Text>
        <a href={linkText}>
        <button className='btn btn-outline-success' >{btnText}</button></a>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Blogsec
