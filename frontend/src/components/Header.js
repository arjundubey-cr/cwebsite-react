import React from 'react'
import logo from '../logo/lu_logo_nobg.png'
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg='light' variant='light' collapseOnSelect expand='lg'>
        <Container>
          <Navbar.Brand href='/'>
            <img
              alt='lu_logo'
              src={logo}
              height='60'
              className='d-inline-block align-top'
            />
            <div>
              Faculty Of <br /> Engineering and Technology
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'>
            <i className='fa fa-bars fa-lg' aria-hidden='true' />
          </Navbar.Toggle>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='/cart'>
                <i className='fas fa-shopping-cart' /> Cart
              </Nav.Link>
              <Nav.Link href='/login'>
                <i className='fas fa-user' />
                Sign In
              </Nav.Link>
              {/* 
              Department-Down
              Branch-dropdown 
              */}
              <NavDropdown title='Department' id='basic-nav-dropdown'>
                <NavDropdown.Item href='/cse'>
                  Computer Science and Engineering
                </NavDropdown.Item>
                <NavDropdown.Item href='/ec'>
                  Electronics and Communication Engineering
                </NavDropdown.Item>
                <NavDropdown.Item href='/ce'>
                  Civil Engineering
                </NavDropdown.Item>
                <NavDropdown.Item href='/me'>
                  Mechanical Engineering
                </NavDropdown.Item>
                <NavDropdown.Item href='/ee'>
                  Electrical Engineering
                </NavDropdown.Item>
                <NavDropdown.Item href='/ash'>
                  Applied Science & Humanities
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href='/admission'>Admission</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
