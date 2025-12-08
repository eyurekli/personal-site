import './../styles/Contact.css'
import sonic from "/sonic_thumbsup.png";

export default function Footer()
{
    return (
        <footer id="Footer" role="contentinfo">

            <p>{`
                I respond to emails by at most 2-3 days. Feel free to reach out!
            `}</p>

            <nav className="icons">
                <a target="_blank" href="https://github.com/eyurekli" rel="noopener noreferrer" aria-label="GitHub profile">
                    <i className="devicon-github-plain" aria-hidden="true"/>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/ekiny/" rel="noopener noreferrer" aria-label="LinkedIn profile">
                    <i className="devicon-linkedin-plain" aria-hidden="true"></i>
                </a>
            </nav>
            <img 
                src={sonic} 
                id="sonic-image" 
                alt="Sonic the Hedgehog thumbs up" 
                loading="lazy"
                width="250"
                height="250"
            />
        </footer>
    )
}