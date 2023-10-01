import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div className="sticky-top contaner-fluid">
            <div className="theme-color  text-center  py-3" style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: 16, fontFamily: 'Montserrat Alternates', fontWeight: '800', textTransform: 'uppercase', letterSpacing: 0.96, wordWrap: 'break-word' }}>Turning Uncertainity Into your advantage</div>
            {
                ['lg'].map((expand) => (

                    <Navbar key={expand} expand={expand} className="bg-body-tertiary  py-4 px-5" style={{ background: 'white', overflow: "hidden" }}>

                        <Container fluid>
                            <Nav className="logo-position">
                                <Image className="logo ms-5" src="/assets/images/logo.png" />
                            </Nav>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" className="my-auto m-3" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg> */}

                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Image className="logo" src="/assets/images/logo.png" />
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="mx-auto">
                                        <Nav.Link href="javascript:void(0)" >
                                            <Link to="/" className="text-decoration-none text-dark">HOME</Link>
                                        </Nav.Link>
                                    </Nav>
                                    <Nav className="mx-auto">
                                        <Nav.Link href="#features">
                                            <Link to="/about" className="text-decoration-none text-dark">ABOUT US
                                            </Link>
                                        </Nav.Link>
                                    </Nav>
                                    <Nav className="mx-auto">
                                        <Nav.Link href="javascript:void(0)" >
                                            <Link to="/our-services" className="text-decoration-none text-dark">
                                                OUR SERVICES
                                            </Link>
                                        </Nav.Link>
                                    </Nav>
                                    <Nav className="mx-auto">
                                        <Nav.Link href="javascript:void(0)" >
                                            <Link to="/our-experience" className="text-decoration-none text-dark">OUR EXPERIENCE
                                            </Link>
                                        </Nav.Link>
                                    </Nav>
                                    <Nav className="mx-auto">
                                        <Nav.Link href="javascript:void(0)" >
                                            <Link to="/resources" className="text-decoration-none text-dark">
                                                RESOURCES
                                            </Link></Nav.Link>
                                    </Nav>
                                    <Nav className="mx-auto">


                                        <Button className=" rounded-pill" style={{ background: "#c2278e", border: "#c2278e", width: '50%' }} size="sm" ><Link to="/contact-us" className="text-decoration-none text-light">CONTACT US</Link></Button>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" className="my-auto my-2 ms-3" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" className="my-auto ms-3" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" className="my-auto ms-3 border-rounded" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))
            }

        </div >

    )
};
export default Header;