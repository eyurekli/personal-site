import './../styles/Header.css'

export default function Header({ changeComp }) {

    function logSomething() {
        console.log("Cem Yılmaz")
    }


    return (
        <nav className="Header">
            <div className="nav-left">
                <p id="name">Ekin Yurekli</p>
            </div>
            <input type="checkbox" id="menu-toggle" className="menu-toggle" />
            <label htmlFor="menu-toggle" className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </label>
            <div className="page-links">
                <p id="nav-content">
                    <a onClick={() => changeComp("About")}>About</a>
                </p>
                <p id="nav-content">
                    <a onClick={() => changeComp("Projects")}>Projects</a>
                </p>
                <p id="nav-content">
                    <a onClick={() => changeComp("Contact")}>Contact</a>
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
    );
  }
  