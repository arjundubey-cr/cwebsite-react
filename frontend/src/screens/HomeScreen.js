import React, { useState, useEffect } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import Carasouel from '../components/Carasouel'
const HomeScreen = () => {
  return (
    <div>
      <Carasouel />
      <Container>
        <Row>
          <Col className='text-center'>
            <h1 class='section-heading'>About our college</h1>
            <hr class='section-underline' />
            <div className='description'>
              The Faculty of Engineering and Technology was re-established as
              one of the Faculties of the University of Lucknow in 2017. The
              Faculty has five branches of Engineering i.e. Civil, Electrical,
              Mechanical, Electronics &amp; Communication and Computer Science &
              Engineering. With an intake of 90 students in Computer Science &
              Engineering and an intake of 60 students in each of the other four
              branches.
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomeScreen
