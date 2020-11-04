import React from 'react'
import { ReactComponent as Insta } from '../assets/logo/instagram.svg'
import { ReactComponent as Facebook } from '../assets/logo/facebook.svg'
import { ReactComponent as Twitter } from '../assets/logo/twitter.svg'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image } from 'react-bootstrap'
import logo from '../assets/logo/lu_logo_nobg.png'
const Footer = () => {
  return (
    <div>
      <footer>
        <Container className='pt-3 footer-container'>
          <Row xl={12} md={12} sm={12} className='justify-content-center'>
            <Image src={logo} className='footer-logo' />
          </Row>
          <Row className='pt-2 justify-content-between align-content-between align-content-sm-center'>
            <Col xl={4} lg={4} md={4} sm={4} className='footer-stacked-columns'>
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
            </Col>
            <Col
              xl={4}
              lg={4}
              md={4}
              sm={4}
              className=' text-left text-md-center'>
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
            <Col xl={4} lg={4} md={4} sm={4} className='text-center'>
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
          </Row>
        </Container>
      </footer>
    </div>
  )
}

export default Footer
