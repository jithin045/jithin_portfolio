import React, {useState,useEffect} from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== isVisible) {
                setIsVisible(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isVisible]);

    return (
        <Navbar collapseOnSelect expand="md" variant="dark" className={isVisible ? 'fixed-top' : 'fixed-top navbar-hidden'}>
            <Container>
                <Navbar.Brand href="#home">
                    <Link to={'/'} className='text-decoration-none'>
                        <i className="fa-solid fa-code fa-flip me-1 fa-lg" style={{ color: "#FFD43B" }} />
                        Ji.
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} className='me-5' id='navlink' to="/" href="#home"><i className="fa-solid fa-house me-1"></i> Home</Nav.Link>
                        <Nav.Link as={Link} className='me-5' id='navlink' to="/about" href="#about"><i className="fa-solid fa-user me-1"></i> About</Nav.Link>
                        <Nav.Link as={Link} className='me-5' id='navlink' to="/projects" href="#projects"><i className="fa-solid fa-laptop-code me-1"></i> Projects</Nav.Link>
                        <Nav.Link as={Link} className='me-5' id='navlink' to="/contact" href="#contact"><i className="fa-solid fa-phone me-1"></i> Contact</Nav.Link>
                        <Nav.Link className='me-5' id='navlink'  href="src/assets/jithin_t_resume.pdf" download={"jithin_t_resume.pdf"}><i className="fa-solid fa-download me-1"></i>Download CV</Nav.Link>

                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
