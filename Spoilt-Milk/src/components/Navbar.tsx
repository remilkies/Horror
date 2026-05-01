
import React, { useState } from "react";
import { Link } from "react-router-dom"; //React Router's <Form> is extremely strict—it demands to be used inside a specific, newer type of routing architecture (a "Data Router") T-T
import { Container, Form } from "react-bootstrap";
import "../style.css";

import SpoiltLogo from "../assets/logos/logoLight.png"
import menuIcon from "../assets/buttons/menuIcon.png";
import SplashBackground from "../assets/images/splash.png"

export default function Navbar() {
    //STATE TO REPLEACE JQUERY STUFF >:D
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>

            <header id="home">
                <nav className="navbar">
                    <Container fluid>
                        <div className="d-flex fixed-top flex-row justify-content-center align-content-center">
                            <div className="navbar-float">

                                <div className="p-2">
                                    <Link className="navbar-brand" to="/">
                                        <img src={SpoiltLogo} width="100" height="50" alt="Spoilt Milk Logo" />
                                    </Link>
                                </div>

                                <div className="p-2">
                                    <Form id="searchBar" role="search" onSubmit={(e) => e.preventDefault()}>
                                        <input type="search" placeholder="Search for a nightmare..." aria-label="Search" />
                                    </Form>
                                </div>

                                <div className="p-2">
                                    <button id="navbar-toggler" type="button" onClick={toggleMenu}>
                                        <span className="mavbar-toggler-icon">
                                            <img src={menuIcon} alt="menu icon" />
                                        </span>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </Container>
                </nav>
            </header>

            {/* SUPER AWSOME DRIPPY DROPDOWN MENU */}
            {/* if menu is open then trender this whole thing */}

            {/* {isMenuOpen && ( we did all the rendering in css :P*/}
                {/* // INSTEAD OF TELEPORTING LIKE HOW REACT DOES WHEN IT FINALLY LOADS STUFF, WE CHANGE IT DYNAMICALLY >:D */}
                <div id="splashBackground" >
                    <div id="dropdown-menu" className={`drip-wrapper ${isMenuOpen ? "drip-open" : "drip-closed"}`}>
                        <div id="dropdown-container">

                            <button id="navbar-close" type="button" onClick={toggleMenu}>
                                X
                            </button>

                            <Container fluid id="dropdown-nav" style={{ display: 'block' }}>
                                <div className="d-flex flex-row justify-content-around">

                                    {/* column 1 */}
                                    <div className="d-flex flex-column">
                                        <div className="p-2">
                                            <Link to="/" onClick={toggleMenu}>Home</Link>
                                        </div>

                                        <div className="p-2">
                                            <Link to="/genre/horror" onClick={toggleMenu}>Horror</Link>
                                        </div>
                                    </div>

                                        <div className="d-flex flex-column">

                                            <div className="p-2">
                                                <Link to="/genre/slasher" onClick={toggleMenu}>Editor's Choice</Link>
                                            </div>

                                            <div className="p-2">
                                                <Link to="/category/body-horror" onClick={toggleMenu}>Body Horror</Link>
                                            </div>

                                            <div className="p-2">
                                                <Link to="/category/gore" onClick={toggleMenu}>Flood of Blood</Link>
                                            </div>
                                        </div>

                                        {/* col 3 */}
                                        <div className="d-flex flex-column">
                                            <div className="p-2">
                                                <Link to="/reviews" onClick={toggleMenu}>Reviews</Link>
                                            </div>

                                            <div className="p-2">
                                                <Link to="/about" onClick={toggleMenu}>Meet The Dev</Link>
                                            </div>
                                            <hr />
                                            <a href="#">Instagram</a>
                                            <a href="https://github.com/remilkies">GitHub</a>
                                        </div>

                                    </div>
                            </Container>
                        </div>
                    </div>
                    <img src={SplashBackground} alt="drippy nav"/>
                </div>

            

        </>
    );
}