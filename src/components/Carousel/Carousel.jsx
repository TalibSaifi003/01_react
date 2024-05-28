import React from 'react'
import slide1 from '../../assets/images/slide1.avif'
import slide2 from '../../assets/images/slide2.jpg'
import slide3 from '../../assets/images/slide3.webp'


import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

import './Carousel.css'


function CustomCarousel() {
  return (
    <div id="home" >
    <Carousel controls={false} indicators={true}  pause={false} >
        <Carousel.Item>
            <img className="d-block w-100 custom-img " src={slide1} alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100 custom-img "
                src={slide2}
                alt="Third slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100 custom-img "
                src={slide3}
                alt="Third slide"
            />
        </Carousel.Item>
    </Carousel>
</div>
  )
}

export default CustomCarousel
