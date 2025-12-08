import './../styles/Header.css'
import { Link } from 'react-scroll';
import { useState, useEffect, useRef } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header() {


    const [menuOpen, setMenuOpen] = useState(false);
    const menuToggleRef = useRef(null);

    // Toggle menu on link click
    const handleLinkClick = () => {
        setMenuOpen(false);  // Close the menu when a link is clicked
    };

    // Handle Escape key to close menu
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && menuOpen) {
                setMenuOpen(false);
                // Return focus to menu toggle button
                if (menuToggleRef.current) {
                    menuToggleRef.current.focus();
                }
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [menuOpen]);

    return (
        <header role="banner">
            <nav className="Header" role="navigation" aria-label="Main navigation">

                <div className="nav-left">
                    <h2 id="name">Ekin Yurekli</h2>
                </div>

                <input
                    type="checkbox"
                    id="menu-toggle"
                    className="menu-toggle"
                    ref={menuToggleRef}
                    checked={menuOpen}  // Bind checked property to state
                    onChange={() => setMenuOpen(!menuOpen)} // Toggle menu
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                    aria-controls="page-links"
                />

                <label htmlFor="menu-toggle" className="hamburger" aria-label="Navigation menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </label>
                <div className="page-links" id="page-links">
                    <p id="nav-content">
                        <Link to="About" smooth={true} duration={500} offset={-110} onClick={handleLinkClick} aria-label="Navigate to About section">
                            About
                        </Link>
                    </p>
                    <p id="nav-content">
                        <Link to="previous-work" smooth={true} duration={500} offset={-100} onClick={handleLinkClick} aria-label="Navigate to Previous Work section">
                            Work
                        </Link>
                    </p>
                    <p id="nav-content">
                        <Link to="project-nav" smooth={true} duration={500} offset={-100} onClick={handleLinkClick} aria-label="Navigate to Projects section">
                            Projects
                        </Link>
                    </p>
                    <p id="nav-content">
                        <Link to="activities" smooth={true} duration={500} offset={-100} onClick={handleLinkClick} aria-label="Navigate to Activities section">
                            Activities
                        </Link>
                    </p>
                    <p id="nav-content">
                        <Link to="Contact" smooth={true} duration={500} offset={-100} onClick={handleLinkClick} aria-label="Navigate to Contact section">
                            Contact
                        </Link>
                    </p>
                    <div className="nav-right">
                        <ThemeToggle />
                        <a target="_blank" href="https://github.com/eyurekli" rel="noopener noreferrer" aria-label="GitHub profile">
                            <i className="devicon-github-plain" aria-hidden="true"/>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/ekiny/" rel="noopener noreferrer" aria-label="LinkedIn profile">
                            <i className="devicon-linkedin-plain" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </nav>
            {/*<hr id="hr-line"></hr>*/}
        </header>
    );
  }
  