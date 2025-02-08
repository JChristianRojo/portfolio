import { useState } from 'react';
import { Link } from 'react-scroll';
import './navbar.css';
import Logo from '../../assets/MyLogo.png';
import Mail from '../../assets/mail.svg';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth"
        });
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="container">
                <div className="row">
                    {/* Hamburger Menu */}
                    <img className='hamburgerMenu' 
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24' fill='none' stroke='%23B99A45' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='3' y1='12' x2='21' y2='12'%3E%3C/line%3E%3Cline x1='3' y1='6' x2='21' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='18' x2='21' y2='18'%3E%3C/line%3E%3C/svg%3E" 
                        alt="Hamburger Menu Icon" 
                        onClick={toggleMenu} 
                    />
                    
                    {/* Logo should use normal <a> or <Link> from react-router-dom */}
                    <a href="/">
                        <img src={Logo} alt="Logo" className='logo' />
                    </a>

                    {/* Navbar Links */}
                    <div className={`navMenu ${menuOpen ? 'active' : ''}`}>
                        <Link 
                            to="about" 
                            smooth={true} 
                            duration={500} 
                            offset={-80} 
                            onClick={() => setMenuOpen(false)} 
                            className='navMenuListItem'
                        >
                            About Me
                        </Link>
                        <Link 
                            to="project" 
                            smooth={true} 
                            duration={500} 
                            offset={-80} 
                            onClick={() => setMenuOpen(false)} 
                            className='navMenuListItem'
                        >
                            Projects
                        </Link>
                    </div>

                    {/* Contact Me (Scrolls to Bottom) */}
                    <button onClick={scrollToBottom} className='mainButton'>
                        <img className='socialsImage' src={Mail} alt="Mail Icon" />
                        Contact Me
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
