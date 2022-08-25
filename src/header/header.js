import Navbar  from "react-bootstrap/Navbar"
import Nav from 'react-bootstrap/Nav'
import { Link, Router } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import { useSelector } from "react-redux"
import { useContext } from "react"
import {LanguageContext} from './../context/context'
import className from './header.module.css'
const Header = () =>{
    
    let Counter = useSelector((state) => state.Counter.counter)
    const {language, setLanguage} = useContext(LanguageContext)

    return(
        <div>

        <Navbar fixed="top" collapseOnSelect expand="lg" variant="dark" className={className.navbar}>
        <Container>
            <Navbar.Brand href="#home">
                    <Link to="/movies" className={`mx-3 ${className.nav}`}>
                        Movies
                    </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav">Click for More</Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link>
                    <Link to="/search"  className={`mx-3 ${className.nav}`}>
                                Search
                    </Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/favorites"  className={`mx-3 ${className.nav}`}>
                                favorites {Counter}
                    </Link>
                </Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link>
                    <Link to="/register"  className={`mx-3 ${className.nav}`}>
                            Register
                    </Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/login"  className={`mx-3 ${className.nav}`}>
                            Login
                    </Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/todo"  className={`mx-3 ${className.nav}`}>
                            Todo
                    </Link>
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </div>
    )
}
export default Header