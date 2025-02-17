import './../styles/Header.css'
import { Link } from 'react-scroll';
import { useState } from 'react';

export default function Header() {


    const [menuOpen, setMenuOpen] = useState(false);

    // Toggle menu on link click
    const handleLinkClick = () => {
        setMenuOpen(false);  // Close the menu when a link is clicked
    };

    return (
        <header>
            <nav className="Header">

                <div className="nav-left">
                    <h2 id="name">Ekin Yurekli</h2>
                </div>

                <input
                    type="checkbox"
                    id="menu-toggle"
                    className="menu-toggle"
                    checked={menuOpen}  // Bind checked property to state
                    onChange={() => setMenuOpen(!menuOpen)} // Toggle menu
                />

                <label htmlFor="menu-toggle" className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </label>
                <div className="page-links">
                    <p id="nav-content">
                        <Link to="About" smooth={true} duration={500} offset={-110} onClick={handleLinkClick}>
                            About
                        </Link>
                    </p>
                    <p id="nav-content">
                        <Link to="project-nav" smooth={true} duration={500} offset={-100} onClick={handleLinkClick}>
                            Projects
                        </Link>
                    </p>
                    <p id="nav-content">
                        <Link to="Contact" smooth={true} duration={500} offset={-100} onClick={handleLinkClick}>
                            Contact
                        </Link>
                    </p>
                    <div className="nav-right">
                        <a href="https://github.com/eyurekli">
                            <i className="devicon-github-plain"/>
                        </a>
                        <a href="https://www.linkedin.com/in/ekiny/">
                            <i className="devicon-linkedin-plain"></i>
                        </a>
                    </div>
                </div>
            </nav>
            {/*<hr id="hr-line"></hr>*/}
        </header>
    );
  }
  