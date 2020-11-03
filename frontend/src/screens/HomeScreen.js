import React from 'react'
import { Row, Container, Col, Button } from 'react-bootstrap'
import Carasouel from '../components/Carasouel'
import AboutHome from '../components/AboutHome'
import DepartmentCard from '../components/DepartmentCard'
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
          <h1 className='h2 font-weight-bolder'>Life at FOET</h1>
          <h2>We Impact Society to make it a better world to live</h2>
          <h3>You can be part too</h3>
          <Button variant='danger' className='my-3'>
            Learn More
          </Button>
        </div>
      </div>
      <Container>
        <Row>
          <DepartmentCard />
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className='text-center col'>
            <h1 className='section-heading'>Admissions</h1>
            <hr className='section-underline' />

            <div className='description'>
              Discover what makes Harvard the standard for liberal arts and
              sciences education. From our unparalleled academics to our
              revolutionary financial aid, we strive to offer the best resources
              to the next generation of leaders.
            </div>
            <Button variant='danger' className='my-3'>
              Learn about Admission
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomeScreen
