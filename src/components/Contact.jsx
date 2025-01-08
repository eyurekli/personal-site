import './../styles/Contact.css'


export default function Contact()
{
    return (
        <nav className="contact">
            <h1>Get in Touch With Me</h1>

            <p>{`
                I am currently searching for Co-Op/Internship Opportunities for Summer 2025.
                I respond to emails by at most 2-3 days. Feel free to send an email for all inquries!
            `}</p>

            <p><strong>Email:</strong> <a href="mailto:ekin.y@dal.ca">ekin.y@dal.ca</a></p>
            <nav className="icons">
                <a href="https://github.com/eyurekli">
                            <i className="devicon-github-plain"/>
                        </a>
                <a href="https://www.linkedin.com/in/ekiny/">
                            <i className="devicon-linkedin-plain"></i>
                </a>
            </nav>
        </nav>
    )
}