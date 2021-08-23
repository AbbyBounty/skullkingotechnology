import { Fragment } from 'react'
import { Navbar, NavDropdown, Container, Nav, Image } from 'react-bootstrap'
// import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import logo from './logo.png'
const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]


function classNameNames(...classNamees) {
    return classNamees.filter(Boolean).join(' ')
}

export default function Header() {
    return (

        <Navbar bg="" expand="lg" sticky="top" collapseOnSelect="false" className="bg-indigo-800">


            <Container>
                <Navbar.Brand href="#home"><Image src={logo} roundedCircle /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/" class="underline">Home</Nav.Link>
                        <Nav.Link href="about">About us </Nav.Link>
                        <Nav.Link href="blog">Blog </Nav.Link>
                        <Nav.Link href="services">Services </Nav.Link>
                        <Nav.Link href="product">Products </Nav.Link>
                        <Nav.Link href="tel:8665562570">Call 8665562570 </Nav.Link>
                        <Nav.Link href="mailto:shibgatwork@gmail.com?subject = Feedback&body = Message data-hover=">shibgatwork@gmail.com </Nav.Link>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}