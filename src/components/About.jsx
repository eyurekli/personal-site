export default function About() 
{
    return <>
        <div>
            <p>Hello there! My name is...</p>
            <h1>Ekin Yurekli</h1>
            <p id="landing-content">
                I am a 2nd year Computer Science student at 
                <a href="https://www.dal.ca/" id="index-a"> Dalhousie University</a> with 
                 a passion for web development.
            </p>
            <h1>About Me</h1>
            <div className="bio">
                <img src="/ekin.jpg" id="about-img" height="400" alt="A photo of myself, Ekin Yurekli"/>
                <p>
                    I have lived in Istanbul, Turkey for 16 years, up until I decided that I want to be part of a bigger and better education system. 
                    I have chosen to finish my high school studies in Harrison Trimble High School, in Moncton, NB, Canada.
                </p>
                <p>
                    After graduating from HTHS,  I am now on my journey of pursuing a Computer Science degree,
                    at Dalhousie University in Halifax, NS. Lets get connected!
                </p>
            </div>
        </div>
    </>
}