import disaster from "/project_disaster.png"
import Project from "./Project.jsx"
import './../styles/Projects.css'
export default function Projects()
{

    const projects = [
        {
            title: "Natural Disaster Tracker",
            img: disaster,
            desc: `
                Built a natural disaster tracker by integrating real-time data with 3D globe visualization in under 24 hours, 
                secured 2nd place at the NASA Space Apps Hackathon in Nova Scotia, and selected for global judging.
            `,
            link: "https://community-mapping-cyan.vercel.app/"
        }
    ];

    
    const disaster_desc = `
    Built a natural disaster tracker by integrating real-time data with 3D globe visualization in under 24 hours, 
    secured 2nd place at the NASA Space Apps Hackathon in Nova Scotia, and selected for global judging.
    `;

    return (
        <>
            <h1>Projects</h1>
            {projects.map((project, index) => (
                <Project
                    key={index}
                    title={project.title}
                    img={project.img}
                    desc={project.desc}
                    link={project.link}
                />
            ))}
        </>
    )
}