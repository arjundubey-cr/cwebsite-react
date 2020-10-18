import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Col, Button } from 'react-bootstrap'
const AboutHome = () => {
  return (
    <Col className='text-center'>
      <h1 className='section-heading'>About our college</h1>
      <hr className='section-underline' />
      <div className='description'>
        The Faculty of Engineering and Technology was re-established as one of
        the Faculties of the University of Lucknow in 2017. The Faculty has five
        branches of Engineering i.e. Civil, Electrical, Mechanical, Electronics
        &amp; Communication and Computer Science & Engineering. The Institute is
        committed to generating, disseminating, and preserving knowledge, and to
        working with others to bring this knowledge to bear on the world’s great
        challenges.
      </div>
      <LinkContainer to='/about'>
        <Button className='mt-3' variant='danger' size='lg'>
          View About Us
        </Button>
      </LinkContainer>
    </Col>
  )
}

export default AboutHome
