export default function Header() {
    return (
        <div className="Header">
            <div className="nav-left">
                <p id="name">Ekin Yurekli</p>
                <div className="page-links">
                    <p id="nav-content">
                        <a href="#about-head">About</a>
                    </p>
                    <p id="nav-content">
                        <a href="#project-head">Projects</a>
                    </p>
                    <p id="nav-content">
                        <a href="#contact-head">Contact</a>
                    </p>
                    <div className="nav-right">
                        <a href="https://github.com/eyurekli">
                            <i className="devicon-github-plain"/>
                        </a>
                        <a href="https://www.linkedin.com/in/ekiny/">
                            <i className="devicon-linkedin-plain colored"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  