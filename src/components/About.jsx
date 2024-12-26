import './../styles/About.css'

export default function About() 
{

    return <>
        <div>
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
                        I have chosen to finish my high school studies in Harrison Trimble High School, in Moncton, NB, Canada.
                    </p>
                    <p>
                        After graduating from HTHS, I am now on my journey of pursuing a Computer Science degree,
                        at Dalhousie University in Halifax, NS. Currently completed the Fall term of 2nd year.
                    </p>
                    <h3>In my free time</h3>
                    <p>
                        I play a lot of games. Sonic and Ace Attorney are my favourite series.
                        I used to be crazy about Model United Nations. I helped revive and run the DalMUN Society in 23/24.
                        I love doing sports to stay active. I like going to the gym, I'm a active member of the Dal Run Club.
                        I occasionally join the Dal Football Club, though I like Basketball as a sport more.
                        I'm a big fan of Fenerbahçe from my hometown Istanbul.
                    </p>
                </div>
            </div>
        </div>
    </>
}