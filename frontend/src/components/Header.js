import React from 'react'
import logo from '../assets/logo/lu_logo_nobg.png'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand='lg'>
        <Container>
          {/*brand name & logo*/}
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img
                alt='lu_logo'
                src={logo}
                height='60'
                className='d-inline-block align-top'
              />
              <div>
                Faculty of <br /> Engineering and Technology
              </div>
            </Navbar.Brand>
          </LinkContainer>
          {/* Navbar toggle area starts */}
          <Navbar.Toggle aria-controls='basic-navbar-nav'>
            <i className='fa fa-bars fa-lg' aria-hidden='true' />
          </Navbar.Toggle>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-xl-5 mt-0 mb-xl-5 mb-lg-5 mr-0 top-list'>
              <LinkContainer to='/about'>
                <Nav.Link>Faculty</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/campus-life'>
                <Nav.Link>Training &amp; Placement </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/admission'>
                <Nav.Link>Contact Us</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav className='ml-auto mt-xl-5 mt-lg-4 mb-0 mr-0 bottom-list'>
              <LinkContainer to='/about'>
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              {/* NavbarDropdown for Departments */}
              <NavDropdown title='Department' id='basic-nav-dropdown'>
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
              {/* Container for admission */}
              <LinkContainer to='/campus-life'>
                <Nav.Link>Campus Life</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/admission'>
                <Nav.Link>Admission</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
