import React from 'react'
import logo from '../logo/lu_logo_nobg.png'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg='light' variant='light' collapseOnSelect expand='lg'>
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
            <Nav className='ml-auto'>
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
              <LinkContainer to='/admission'>
                <Nav.Link>Admission</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/contact'>
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/faculty'>
                <Nav.Link>Faculty</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/tpc'>
                <Nav.Link>Training and Placement</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/student'>
                <Nav.Link>Student Corner</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
