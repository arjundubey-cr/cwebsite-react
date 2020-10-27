import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../assets/images/faculty-back1.jpg'
import img2 from '../assets/images/faculty-front1.jpg'
import img3 from '../assets/images/faculty-img3.jpg'
const Carasouel = () => {
  const [index, setIndex] = useState(0)
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  // const prevIcon = <span aria-hidden='true' className='fa d-xl fa-arrow-left' />
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className='d-block carousel-img w-100'
          src={img1}
          alt='First slide'
        />
        <Carousel.Caption>
          <h3>Grooming the future of the world with education</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block carousel-img w-100'
          src={img2}
          alt='Second slide'
        />
        <Carousel.Caption>
          <h3>Join to reinvent yourself</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block carousel-img w-100'
          src={img3}
          alt='Third slide'
        />
        <Carousel.Caption>
          <h3>Your Growth is our aim</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Carasouel
