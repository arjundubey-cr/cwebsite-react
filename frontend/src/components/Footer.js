import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import logo from '../assets/logo/lu_logo_nobg.png'
const Footer = () => {
  return (
    <div>
      <footer>
        <Container className='pt-3' fluid>
          <Row className='space-around'>
            <Col>
              <img src={logo} alt='Logo' className='footer-logo' />
              <address>
                Faculty Of Engineering & Technology <br />
                University of Lucknow ,New Campus Rd <br />
                Sultanpur Village, <br />
                Jankipuram, Lucknow, <br />
                Uttar Pradesh 226021
              </address>
              <div className='connect'></div>
            </Col>
            <Col>
              <div className='footer-section-heading'>ADMISSION</div>
              <ul className='footer-section-details'>
                <Link to='/admission' className='footer-link'>
                  <li>Admission Procedure </li>
                </Link>
                <Link to='/admission' className='footer-link'>
                  <li>Eligibility </li>
                </Link>
                <Link to='/admission' className='footer-link'>
                  <li>Fee Structure</li>
                </Link>
                <Link to='/admission' className='footer-link'>
                  <li>Scholarship</li>
                </Link>
              </ul>
            </Col>
            <Col>
              <div className='footer-section-heading'>QUICK LINKS</div>
              <ul className='footer-section-details'>
                <Link to='/admission' className='footer-link'>
                  <li>University of Lucknow</li>
                </Link>
                <Link to='/admission' className='footer-link'>
                  <li>UDRC Student Login</li>
                </Link>
                <Link to='/admission' className='footer-link'>
                  <li></li>
                </Link>
                <Link to='/admission' className='footer-link'>
                  <li>Scholarship</li>
                </Link>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}

export default Footer
