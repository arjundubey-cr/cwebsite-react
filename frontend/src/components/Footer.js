import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import logo from '../assets/logo/lu_logo_nobg.png'
const Footer = () => {
  return (
    <div>
      <hr />
      <footer>
        <Container fluid>
          <Col>
            <img src={logo} alt='Logo' className='footer-logo' />
            <address>
              Faculty Of Engineering & Technology, University of Lucknow, <br />{' '}
              New Campus Rd, Sultanpur Village, <br />
              Jankipuram, Lucknow, <br />
              Uttar Pradesh 226021
            </address>
          </Col>
        </Container>
      </footer>
    </div>
  )
}

export default Footer
