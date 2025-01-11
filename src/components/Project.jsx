export default function Project({title, img, desc, link, demo_link})
{
    return (
        <div className="project">
            <img src={img}></img>
            <h3>{title}</h3>
            <p>{desc}</p>

            <nav className="button-links">

                <button id="repo-button">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        View
                    </a>
                </button>

                {demo_link && (
                    <button id="demo-button">
                        <a href={demo_link} target="_blank" rel="noopener noreferrer">
                            Demo
                        </a>
                    </button>
                )}
                
            </nav>
        </div>
    )
}