import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Carasouel from '../components/Carasouel'
function HomeScreen(){
  return (
    <div>
      <Carasouel />
      <Row>
        <Col className='text-center'>
          <h1 className='section-heading'>About our college</h1>
          <hr className='section-underline' />
          <div className='description'>
            The Faculty of Engineering and Technology was re-established as one
            of the Faculties of the University of Lucknow in 2017. The Faculty
            has five branches of Engineering i.e. Civil, Electrical, Mechanical,
            Electronics &amp; Communication and Computer Science & Engineering.
            With an intake of 90 students in Computer Science & Engineering and
            an intake of 60 students in each of the other four branches.
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default HomeScreen
