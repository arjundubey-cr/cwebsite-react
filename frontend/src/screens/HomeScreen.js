import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import Carasouel from '../components/Carasouel'
import AboutHome from '../components/AboutHome'
const HomeScreen = () => {
  return (
    <div>
      <Carasouel />
      <Container>
        <Row>
          <AboutHome />
        </Row>
        <Row>
          <Col className='text-center'>
            <h1 class='section-heading'>Department We have</h1>
            <hr class='section-underline' />
            <Row>
              <div className='description'>
                We offer course in following 5 departments, our students combine
                analytical rigor with curiosity, playful imagination, and an
                appetite for solving the hardest problems in service to society.
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomeScreen
