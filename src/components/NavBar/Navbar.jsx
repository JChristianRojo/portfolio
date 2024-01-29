import { useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
import Logo from '../../assets/MyLogo.png';
import Mail from '../../assets/mail.svg';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth"
        });
    };

    const scrollWithOffset = (offset) => {
        window.scrollTo({
            top: document.querySelector(offset).offsetTop - 80,
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
                    <img className='hamburgerMenu' src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24' fill='none' stroke='%23B99A45' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='3' y1='12' x2='21' y2='12'%3E%3C/line%3E%3Cline x1='3' y1='6' x2='21' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='18' x2='21' y2='18'%3E%3C/line%3E%3C/svg%3E" alt="Hamburger Menu Icon" onClick={toggleMenu} />
                    <img onClick={scrollToTop} src={Logo} alt="" className='logo' />
                    <div className={`navMenu ${menuOpen ? 'active' : ''}`}>
                        <Link onClick={() => { scrollWithOffset("#about"); setMenuOpen(false); }} className='navMenuListItem'>About Me</Link>
                        <Link onClick={() => { scrollWithOffset("#project"); setMenuOpen(false); }} className='navMenuListItem'>Projects</Link>
                    </div>

                    <Link onClick={scrollToBottom} className='mainButton'>
                        <img className='socialsImage' src={Mail} alt="" />
                        Contact Me
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
