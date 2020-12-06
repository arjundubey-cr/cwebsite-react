import React from 'react'
import { ReactComponent as Insta } from '../assets/logo/instagram.svg'
import { ReactComponent as Facebook } from '../assets/logo/facebook.svg'
import { ReactComponent as Twitter } from '../assets/logo/twitter.svg'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image } from 'react-bootstrap'
import logo from '../assets/logo/lu_no_bg.png'
const Footer = () => {
  return (
    <div>
      <footer>
        <Container className='pt-3 footer-container'>
          <Row xl={12} md={12} sm={12} className='justify-content-center'>
            <Image src={logo} className='footer-logo' />
          </Row>
          <Row className='pt-2 justify-content-between align-content-between align-content-sm-center'>
            <Col xl={4} lg={4} md={4} sm={4}>
              <div className='footer-section-heading'>FOR STUDENTS</div>
              <ul className='footer-section-details'>
                <li>
                  <Link to='/admission' className='footer-link'>
                    Admission
                  </Link>
                </li>
                <li>
                  <Link to='/admission' className='footer-link'>
                    Fee Structure
                  </Link>
                </li>
                <li>
                  <a
                    href='https://udrc.lkouniv.ac.in/Content/DepartmentContent/SY_9ab4ee8a-319b-46d7-afbb-86dfe636b0ed_58.pdf'
                    className='footer-link'>
                    Ordinance, Rules and Regulations
                  </a>
                </li>
              </ul>
            </Col>
            <Col
              xl={4}
              lg={4}
              md={4}
              sm={4}
              className='footer-stacked-columns text-left text-sm-center text-md-center'>
              <Col>
                <div className='footer-section-heading'>QUICK LINKS</div>
                <ul className='footer-section-details'>
                  <li>
                    <a href='https://www.lkouniv.ac.in' className='footer-link'>
                      University of Lucknow
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://udrc.lkouniv.ac.in/student?cd=MQAzADYAOQA2AA%3D%3D'
                      className='footer-link'>
                      UDRC Student Login
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://slate.lkouniv.ac.in/'
                      className='footer-link'>
                      SLATE
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://scholarship.up.gov.in/'
                      className='footer-link'>
                      Scholarship
                    </a>
                  </li>
                </ul>
              </Col>
            </Col>
            <Col xl={4} lg={4} md={4} sm={4} className='text-center'>
              <a
                href='https://g.page/LU_FOET?share'
                className='text-white text-decoration-none'>
                <address>
                  Faculty Of Engineering & Technology <br />
                  University of Lucknow ,New Campus Rd <br />
                  Sultanpur Village, <br />
                  Jankipuram, Lucknow, <br />
                  Uttar Pradesh 226021
                </address>
              </a>
              <div className='connect'>
                <a href='https://www.instagram.com/luo_fficial/'>
                  <Insta />
                </a>
                <a href='https://www.facebook.com/FetLucknowUniversity'>
                  <Facebook />
                </a>
                <Twitter />
              </div>
            </Col>
          </Row>
        </Container>
        <div className='text-center py-1 mt-5 footer-credits '>
          Developed by Arjun Dubey and Shubhendra Bahadur Srivastava
        </div>
      </footer>
    </div>
  )
}

export default Footer
