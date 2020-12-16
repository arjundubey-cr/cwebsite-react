import React from 'react'
import { Row, Container, Col, Button } from 'react-bootstrap'
import Carasouel from '../components/Carasouel'
import Notifcation from '../components/notification'
import AboutHome from '../components/AboutHome'
import DepartmentCard from '../components/DepartmentCard'
import { LinkContainer } from 'react-router-bootstrap'
const HomeScreen = () => {
  return (
    <div>
    <Notifcation/>
      <Carasouel />
      <Container>
        <Row>
          <AboutHome />
        </Row>
      </Container>
      <div className='insti-life my-3'>
        <div className='content'>
          <h1 className='h2 font-weight-bolder'>Life at FoET</h1>
          <h2>We impact society to make it a better world to live</h2>
          <h3>You can be part too</h3>
          <LinkContainer to='/studentlife'>
            <Button
              variant='danger'
              className='my-3 py-2 px-3 font-weight-bold'>
              Check Out Student Life
            </Button>
          </LinkContainer>
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
              Harness your curiosity. We strive to offer the best resources to
              the next generation of engineers which makes us the standard for
              Engineering and Technology education.
            </div>
            <LinkContainer to='/admission'>
              <Button
                variant='danger'
                className='my-3 py-2 px-3 font-weight-bold'>
                Learn about Admission
              </Button>
            </LinkContainer>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomeScreen
