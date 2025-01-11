import './../styles/About.css'

export default function About() 
{

    return <>
        <div id="About">
            <div id="landing-content">
                <p>Hello there! My name is...</p>
                <h1 id="name">Ekin Yurekli</h1>
                I am a 2nd year Computer Science student at 
                <a href="https://www.dal.ca/" id="index-a"> Dalhousie University</a> with 
                 a passion for web development.
            </div>
            <h1>About Me</h1>
            <div className="bio">
                <img src="/ekin.jpg" id="about-img" height="400" alt="A photo of myself, Ekin Yurekli"/>
                <div className="bio-text">
                    <p>
                        I have lived in Istanbul, Turkey for 16 years, up until I decided that I want to be part of a bigger and better education system. 
                        I chose to finish my high school studies in Harrison Trimble High School, in Moncton, NB, Canada. 
                        My interest in coding started after taking a Python course in high school.
                    </p>
                    <p>
                        After graduating from HTHS, I am now on my journey of pursuing a Computer Science degree,
                        at Dalhousie University in Halifax, NS. Currently completed the Fall term of 2nd year, looking for a Co-Op/Internship for Summer 2025.
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
        </div>
    </>
}