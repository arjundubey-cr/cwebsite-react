import React from 'react'
import { ReactComponent as Insta } from '../assets/logo/instagram.svg'
import { ReactComponent as Facebook } from '../assets/logo/facebook.svg'
import { ReactComponent as Twitter } from '../assets/logo/twitter.svg'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import logo from '../assets/logo/lu_logo_nobg.png'
const Footer = () => {
  return (
    <div>
      <footer>
        <Container className='pt-3'>
          <Row className='space-around'>
            <Col xl={3} lg={3} md={6}>
              <img src={logo} alt='Logo' className='footer-logo' />
              <address>
                Faculty Of Engineering & Technology <br />
                University of Lucknow ,New Campus Rd <br />
                Sultanpur Village, <br />
                Jankipuram, Lucknow, <br />
                Uttar Pradesh 226021
              </address>
              <div className='connect'>
                <Insta />
                <Facebook />
                <Twitter />
              </div>
            </Col>
            <Col xl={3} lg={3} md={6}>
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
            <Col xl={3} lg={3} md={6}>
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
            <Col xl={3} lg={3} md={6}>
              <div className='footer-section-heading'>RESOURCES</div>
              <ul className='footer-section-details'>
                <Link to='/admission' className='footer-link'>
                  <li>Syllabus</li>
                </Link>
                <Link to='/admission' className='footer-link'>
                  <li>E-content</li>
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
