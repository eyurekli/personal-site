import disaster from "/project_disaster.png";
import dio_cairo from "/dios_world_cairo.png";
import roary from "/roary-bot.png"
import tictactoe from "/tictactoe.png"
import conquest from "/img/projects/conquest.png";

import Project from "./Project.jsx";
import './../styles/Projects.css';

export default function Projects()
{
    const projects0 = [
        {
            title: "ConQuest",
            img: conquest,
            desc: `
                Built a Speech-To-Speech GenAI Chat Bot for social anxiety and mental health support in under 24 hours.
                Secured 1st place at the ShiftKey GenAI Mental Well-being Hackathon.
            `,
            link: "https://github.com/eyurekli/shiftkey-mental-2025",
            demo: "https://youtu.be/1pBWY5ndZpI?feature=shared"
        },
        {
            title: "Natural Disaster Tracker",
            img: disaster,
            desc: `
                Built a natural disaster tracker by integrating real-time data with 3D globe visualization in under 24 hours. 
                Secured 2nd place at the NASA Space Apps Hackathon in Nova Scotia, selected for global judging.
            `,
            link: "https://community-mapping-cyan.vercel.app/",
            demo: "https://youtu.be/ZYmKTlz7f9s"
        }
    ];

    const projects1 = [
        {
            title: "Roary Bot",
            img: roary,
            desc: `
                A Discord bot designed for the Dalhousie University Faculty of Computer Science Incoming Students Server,
                to answer questions from 200+ students efficiently via text-analysis. 
            `,
            link: "https://github.com/eyurekli/roary-bot",
        },
        {
            title: "React Tic-Tac-Toe",
            img: tictactoe,
            desc: `
                A Tic-Tac-Toe game built with React. Two players can change their names, the player moves are also logged
                into a list.
            `,
            link: "https://github.com/eyurekli/tic-tac-toe-project",
            demo: "https://tic-tac-toe-project-delta-flame.vercel.app/"
        }
    ];

    const projects2 = [
        {
            title: "DIO's World",
            img: dio_cairo,
            desc: `
                A 2D fighting game inspired by Capcom's 1998 game, JoJo's Bizarre Adventure: Heritage for the Future.
                Built in Python with pygame. Player controls DIO to choose from 3 objectives to complete.
            `,
            link: "https://github.com/eyurekli/DIOsWorld",
            demo: "https://youtu.be/PY2PL7b7VRo"
        }
    ];

    return (
        <nav id="project-nav">
            <h1 className="bg-white-name">Projects</h1>
            <div className="projects">
                {projects0.map((project, index) => (
                    <Project
                        key={index}
                        title={project.title}
                        img={project.img}
                        desc={project.desc}
                        link={project.link}
                        demo_link={project.demo}
                    />
                ))}
            </div>

            <div className="projects">
                {projects1.map((project, index) => (
                    <Project
                        key={index}
                        title={project.title}
                        img={project.img}
                        desc={project.desc}
                        link={project.link}
                        demo_link={project.demo}
                    />
                ))}
            </div>
            <div className="projects">
                {projects2.map((project, index) => (
                    <Project
                        key={index}
                        title={project.title}
                        img={project.img}
                        desc={project.desc}
                        link={project.link}
                        demo_link={project.demo}
                    />
                ))}
            </div>
        </nav>
    )
}