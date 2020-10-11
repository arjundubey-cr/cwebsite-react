import React from 'react'
import logo from '../logo/lu_logo_nobg.png'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg='light' variant='light' collapseOnSelect expand='lg'>
        <Container>
          {/* Branding */}
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
