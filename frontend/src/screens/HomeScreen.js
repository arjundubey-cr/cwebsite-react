import React from 'react'
import { Row, Container, Col, Card, Button, Image } from 'react-bootstrap'
import Carasouel from '../components/Carasouel'
import AboutHome from '../components/AboutHome'
import DepartmentCard from '../components/DepartmentCard'
import imgshowcase from '../assets/images/img-showcase.jpg'
const HomeScreen = () => {
  return (
    <div>
      <Carasouel />
      <Container>
        <Row>
          <AboutHome />
        </Row>
      </Container>
      <div className='insti-life my-3'>
        <div className='content'>
          <h1>Life at FOET</h1>
          <h2>We Impact Society to make it a better world to live</h2>
          <h3>You can be part too</h3>
          <Button>Learn More</Button>
        </div>
      </div>
      <Container>
        <Row>
          <DepartmentCard />
        </Row>
      </Container>
    </div>
  )
}

export default HomeScreen
