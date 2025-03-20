

export const CardProjects = ({name, link, alt, description}) => {
    return(
        <>
            <div className='card-proyectos'>
                <p><a href={link} target='_blank'>{name}</a></p>
                <img src="/" alt={alt} />
                <p>{description}</p>
                <div className='card-links'>
                    <span><a href={link} target='_blank'>ver codigo</a></span>
                    <span><a href={link} target='_blank'>ver pagina</a></span>
                </div>
            </div>
        </>
    )
}


