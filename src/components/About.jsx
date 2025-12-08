import './../styles/About.css';
import "/img/banner/banner-iumun.jpg";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() 
{
    const aboutRef = useScrollAnimation({ animationClass: 'fade-in' });
    const bioRef = useScrollAnimation({ animationClass: 'slide-up', rootMargin: '0px 0px -100px 0px' });

    return <>
        <section id="About" ref={aboutRef} aria-label="About section">
            <div id="landing-content" className="aurora-hero">
                {/* Aurora Gradient Background Layers */}
                <div className="aurora-bg"></div>
                <div className="aurora-overlay"></div>
                
                {/* Main Content Container */}
                <div className="hero-content-wrapper">
                    <p className="hero-greeting">Hello! My name is</p>
                    
                    <h1 id="name" className="hero-name">
                        Ekin Yurekli
                    </h1>
                    
                    {/* Profile Photo - Clean, No Rotation */}
                    <div className="hero-photo-wrapper">
                        <img 
                            src="/ekin.jpg" 
                            alt="Ekin Yurekli" 
                            className="hero-photo"
                            width="250"
                            height="250"
                            loading="eager"
                        />
                    </div>
                    
                    <p className="hero-tagline">
                        I am a Computer Science student at Dalhousie University with a passion for AI/ML, and data-driven development.
                    </p>
                </div>
            </div>
            <h2 className="bg-white-name">About Me</h2>
            <div className="bio" ref={bioRef}>
                <img 
                    src="/ekin.jpg" 
                    id="about-img" 
                    width="400" 
                    height="320" 
                    alt="A photo of myself, Ekin Yurekli"
                    loading="lazy"
                />
                <div className="bio-text">
                    <p>
                        I have lived in Istanbul, Turkey for 16 years, up until I decided that I want to be part of a bigger and better education system. 
                        I chose to finish my high school studies in Harrison Trimble High School, in Moncton, NB, Canada. 
                        My interest in coding started after taking a Python course in high school.
                    </p>
                    <p>
                        After graduating from HTHS, I am now on my journey of pursuing a Computer Science degree,
                        at Dalhousie University in Halifax, NS. I am currently doing an 8-month Co-Op at Trench Canada, in Toronto, as an AI/ML Intern.
                    </p>
                    <h3>In my free time</h3>
                    <p>
                        I play a lot of games. Sonic and Ace Attorney are (currently) my favourite series.
                        I used to be crazy about Model United Nations. I helped revive and run the DalMUN Society in 23/24.
                        I love doing sports to stay active. I like going to the gym, I am a active member of the Dal Run Club.
                        I occasionally join the Dal Football Club, though I like Basketball as a sport more.
                    </p>
                </div>
            </div>
        </section>
    </>
}