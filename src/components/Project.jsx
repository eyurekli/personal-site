import Button from "./Button.jsx";

export default function Project({title, img, desc, link, demo_link})
{
    return (
        <article className="project" aria-label={`Project: ${title}`}>
            <img 
                src={img} 
                alt={`${title} project screenshot`} 
                loading="lazy"
                width="600"
                height="400"
            />
            <h3 id="name">{title}</h3>
            <p>{desc}</p>

            <nav className="button-links">

                <Button
                    variant="primary"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    ariaLabel={`View source code for ${title}`}
                >
                        Source
                </Button>

                {demo_link && (
                    <Button
                        variant="primary"
                        href={demo_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        ariaLabel={`View demo for ${title}`}
                    >
                            Demo
                    </Button>
                )}
                
            </nav>
        </article>
    )
}