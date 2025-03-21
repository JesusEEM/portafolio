

export const CardProjects = ({name, link, alt, description, image}) => {
    const clases = link ? 'card-proyectos' : 'card-proyectos info'

    return(
        <>
            <div className={clases}>
                <p><a href={link} target='_blank'>{name}</a></p>
                <img src={image} alt={alt} />
                <p>{description}</p>
                <div className='card-links'>
                    <span><a href={link} target='_blank'>ver codigo</a></span>
                    <span><a href={link} target='_blank'>ver pagina</a></span>
                    <span><a href={link} target='_blank'>más info</a></span>
                </div>
            </div>
        </>
    )
}


