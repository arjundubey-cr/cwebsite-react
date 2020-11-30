import React from 'react'
import logo from '../assets/logo/lu_no_bg.webp'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import hamburgerMenu from '../assets/logo/menu-icon.svg'
const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand='lg'>
        <Container fluid>
          {/*brand name & logo*/}
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img
                alt='lu_logo'
                src={logo}
                height='80px'
                className='d-inline-block align-top'
              />
              <div>
                Faculty of <br /> Engineering and Technology
              </div>
            </Navbar.Brand>
          </LinkContainer>
          {/* Navbar toggle area starts */}
          <Navbar.Toggle aria-controls='basic-navbar-nav'>
            <img
              src={hamburgerMenu}
              alt='Menu Icon'
              height='24px'
              width='24px'
            />
          </Navbar.Toggle>
          <Navbar.Collapse id='basic-navbar-nav myDiv'>
            <Nav className='header-navbar'>
              <div className='d-lg-flex ml-xl-5 mt-0 mb-xl-5 mb-lg-5 mr-0 top-list'>
                <LinkContainer to='/tpc'>
                  <Nav.Link>Training &amp; Placement </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/contact-us'>
                  <Nav.Link>Contact Us</Nav.Link>
                </LinkContainer>
              </div>
              <hr className=' d-lg-none navbar-rule' />
              <div className='d-lg-flex ml-lg-auto mt-xl-5 mt-lg-4 mb-lg-0 mr-lg-0 bottom-list'>
                <LinkContainer to='/about'>
                  <Nav.Link>About</Nav.Link>
                </LinkContainer>
                {/* NavbarDropdown for Departments */}
                <NavDropdown title='Departments' id='basic-nav-dropdown'>
                  <LinkContainer to='/cse'>
                    <NavDropdown.Item>
                      Computer Science and Engineering
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/ece'>
                    <NavDropdown.Item>
                      Electronics and Communication Engineering
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/ce'>
                    <NavDropdown.Item>Civil Engineering</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/me'>
                    <NavDropdown.Item>Mechanical Engineering</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/ee'>
                    <NavDropdown.Item>Electrical Engineering</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/ash'>
                    <NavDropdown.Item>
                      Applied Science and Humanities
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
                {/* Container for LIFE@FOET*/}
                <LinkContainer to='/studentlife'>
                  <Nav.Link>Life at FoET</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/admission'>
                  <Nav.Link>Admission</Nav.Link>
                </LinkContainer>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
