import React from 'react'
import { Col, Card, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import cse from '../assets/logo/cse.png'
import ce from '../assets/logo/ce.png'
import me from '../assets/logo/me.png'
import ece from '../assets/logo/ece.png'
import ash from '../assets/logo/ash.png'
import ee from '../assets/logo/ee.png'
const DepartmentCard = () => {
  return (
    <Col className='text-center col'>
      <h1 className='section-heading'>Departments We have</h1>
      <hr className='section-underline' />

      <div className='description'>
        We offer course in following 5 departments, our students combine
        analytical rigor with curiosity, playful imagination, and an appetite
        for solving the hardest problems in service to society.
      </div>

      <Row className='pt-5 cardList'>
        <Col xs={12} sm={4} md={4} lg={4}>
          <LinkContainer to='/cse'>
            <Card className='departmentCard' style={{ width: '15rem' }}>
              <Card.Img variant='top' src={cse} />
              <Card.Body>
                <Card.Title>Computer Science and Engineering</Card.Title>
              </Card.Body>
            </Card>
          </LinkContainer>
          <LinkContainer to='/cse'>
            <Card className='departmentCard' style={{ width: '15rem' }}>
              <Card.Img variant='top' src={ce} />
              <Card.Body>
                <Card.Title>Civil Engineering</Card.Title>
              </Card.Body>
            </Card>
          </LinkContainer>
        </Col>
        <Col xs={12} sm={4} md={4} lg={4}>
          <LinkContainer to='/cse'>
            <Card className='departmentCard' style={{ width: '15rem' }}>
              <Card.Img variant='top' src={ece} />
              <Card.Body>
                <Card.Title>Electronics &amp; Comm. Engineering</Card.Title>
              </Card.Body>
            </Card>
          </LinkContainer>
          <LinkContainer to='/cse'>
            <Card className='departmentCard' style={{ width: '15rem' }}>
              <Card.Img variant='top' src={ee} />
              <Card.Body>
                <Card.Title>Electrical Engineering</Card.Title>
              </Card.Body>
            </Card>
          </LinkContainer>
        </Col>
        <Col xs={12} sm={4} md={4} lg={4} className='last-col'>
          <LinkContainer to='/cse'>
            <Card className='departmentCard' style={{ width: '15rem' }}>
              <Card.Img variant='top' src={me} />
              <Card.Body>
                <Card.Title>Mechanical Engineering</Card.Title>
              </Card.Body>
            </Card>
          </LinkContainer>
          <LinkContainer to='/cse'>
            <Card
              className='departmentCard last-card'
              style={{ width: '15rem' }}>
              <Card.Img variant='top' src={ash} />
              <Card.Body>
                <Card.Title>Applied Science &amp; Humanities</Card.Title>
              </Card.Body>
            </Card>
          </LinkContainer>
        </Col>
      </Row>
    </Col>
  )
}

export default DepartmentCard
