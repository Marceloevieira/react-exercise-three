import { Button, Container, Form, FormControl, Nav, Navbar, Offcanvas } from "react-bootstrap";
import logo from "../assets/image/logo.svg";

export const Header = () => (

    <header
        className={'pb-4'}
    >
        <Navbar bg="light" expand={false}>
            <Container fluid>
                <Navbar.Brand href="#">
                    <img src={logo} alt={'logo'} className="App-logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
        <h1>Aplicação SPA - Movies</h1>
        <h2>Bem-vindo(a) a nossa aplicação de filmes</h2>
    </header>

);