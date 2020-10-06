import React from 'react'
import { Navbar, Nav, Container, NavDropdown, Button, FormControl, Form } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="light" variant='light' collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/cart"><i className="fas fa-shopping-cart" /> Cart</Nav.Link>
                            <Nav.Link href="/login"><i className="fas fa-user" />Sign In</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
