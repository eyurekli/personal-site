import './../styles/Contact.css'
import sonic from "/sonic_thumbsup.png";

export default function Footer()
{
    return (
        <nav id="Contact">

            <p>{`
                I respond to emails by at most 2-3 days. Feel free to reach out!
            `}</p>

            <nav className="icons">
                <a href="https://github.com/eyurekli">
                            <i className="devicon-github-plain"/>
                        </a>
                <a href="https://www.linkedin.com/in/ekiny/">
                            <i className="devicon-linkedin-plain"></i>
                </a>
            </nav>
            <img src={sonic} id="sonic-image"></img>
        </nav>
    )
}