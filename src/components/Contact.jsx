import './../styles/Contact.css'
import sonic from "/sonic_thumbsup.png";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact()
{
    const contactRef = useScrollAnimation({ animationClass: 'fade-in' });
    
    return (
        <section id="Contact" ref={contactRef} aria-label="Contact section">
            <h2 id="name">Get in Touch With Me</h2>

            <p>
                I respond to emails by at most 2-3 days. Feel free to send an email for all inquries!
            </p>

            <p><strong>Email:</strong> <a href="mailto:ekin.y@dal.ca" aria-label="Send email to ekin.y@dal.ca">ekin.y@dal.ca</a></p>
            <nav className="icons">
                <a target="_blank" href="https://github.com/eyurekli" rel="noopener noreferrer" aria-label="GitHub profile">
                    <i className="devicon-github-plain" aria-hidden="true"/>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/ekiny/" rel="noopener noreferrer" aria-label="LinkedIn profile">
                    <i className="devicon-linkedin-plain" aria-hidden="true"></i>
                </a>
            </nav>
            {/* <img src={sonic} id="sonic-image"></img> */ }

        </section>
    )
}