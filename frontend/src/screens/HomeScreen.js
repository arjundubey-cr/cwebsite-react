import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Col, Row, Container, Card } from 'react-bootstrap'
import Carasouel from '../components/Carasouel'
import AboutHome from '../components/AboutHome'
// importing all the branch logos
import cse from '../assets/logo/cse.png'
import ce from '../assets/logo/ce.png'
import me from '../assets/logo/me.png'
import ece from '../assets/logo/ece.png'
import ash from '../assets/logo/ash.png'
import ee from '../assets/logo/ee.png'
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
            <Row>
              <Col className='justify-content-space-between'>
                <LinkContainer to='/cse'>
                  <Card className='departmentCard' style={{ width: '18rem' }}>
                    <Card.Img variant='top' src={cse} />
                    <Card.Body>
                      <Card.Title>Computer Science and Engineering</Card.Title>
                    </Card.Body>
                  </Card>
                </LinkContainer>
                <LinkContainer to='/cse'>
                  <Card className='departmentCard' style={{ width: '18rem' }}>
                    <Card.Img variant='top' src={ce} />
                    <Card.Body>
                      <Card.Title>Civil Engineering</Card.Title>
                    </Card.Body>
                  </Card>
                </LinkContainer>

                <LinkContainer to='/cse'>
                  <Card className='departmentCard' style={{ width: '18rem' }}>
                    <Card.Img variant='top' src={me} />
                    <Card.Body>
                      <Card.Title>Mechanical Engineering</Card.Title>
                    </Card.Body>
                  </Card>
                </LinkContainer>
              </Col>
              <Col>
                <LinkContainer to='/cse'>
                  <Card className='departmentCard' style={{ width: '18rem' }}>
                    <Card.Img variant='top' src={ece} />
                    <Card.Body>
                      <Card.Title>
                        Electronics &amp; Communication Engineering
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </LinkContainer>

                <LinkContainer to='/cse'>
                  <Card className='departmentCard' style={{ width: '18rem' }}>
                    <Card.Img variant='top' src={ee} />
                    <Card.Body>
                      <Card.Title>Electrical Engineering</Card.Title>
                    </Card.Body>
                  </Card>
                </LinkContainer>

                <LinkContainer to='/'>
                  <Card className='departmentCard' style={{ width: '18rem' }}>
                    <Card.Img variant='top' src={ash} />
                    <Card.Body>
                      <Card.Title>Applied Science and Humanities</Card.Title>
                    </Card.Body>
                  </Card>
                </LinkContainer>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomeScreen
