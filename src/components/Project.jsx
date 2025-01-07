export default function Project({title, img, desc, link})
{
    return (
        <div className="project">
            <img src={img}></img>
            <h3>{title}</h3>
            <p>{desc}</p>
            <button>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    View
                </a></button>
        </div>
    )
}