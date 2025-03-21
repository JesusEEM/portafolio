import { useState } from 'react'
import { CardProjects } from './Components/CardProjects'
import { Title } from './Components/Title'
import { DATA_INFO, TITULOS } from './Utils/data-info'


function App() {
  const [count, setCount] = useState(0)
  const data = DATA_INFO
  const titulos = TITULOS

  return (
    <>
      <main>
        <h1>Hola Mundo</h1>
        <h2>Esta es mi pagina Web</h2>
        <p>
          Mi nombre es Jesús Escalante.
          Soy Ingeniero Electrónico egresado del Tecnológico de Mérida.
          Recido en Mérida, Yucatán, Mexico.
          Actualmente trabajo como administrativo en un laboratorio de materiales
          de construcción, me encargo de realizar reportes de material de concreto,
          asfalto y terracerías.
          Aquí podrás encontrar mis proyectos personales en los que he estado trabajando.
        </p>
        <p>Visita mis proyectos aqui: <a href='https://github.com/JesusEEM' target='_blank'>GitHub</a></p>
      </main>

      <Title
        key={titulos[0].name}
        title={titulos[0].title}
      />

      <section className='secction-proyectos'>
        {
          data.filter(element => element.categori === 'mis-proyectos').map(element => {
            return(
              <CardProjects 
              key={element.name}
              name={element.name}
              link={element.link}
              alt={element.alt}
              description={element.description}
              image={element.image}
              page={element.page}
              />
            )
          })
        }
      </section>
  

      <Title
        key={titulos[1].name}
        title={titulos[1].title}
      />

      <section className='secction-proyectos'>
        {
          data.filter(element => element.categori === 'roadmap').map(element => {
            return(
              <CardProjects 
              key={element.name}
              name={element.name}
              link={element.link}
              alt={element.alt}
              description={element.description}
              image={element.image}
              />
            )
          })
        }
      </section>

      <Title
        key={titulos[2].name}
        title={titulos[2].title}
      />

      <section className='secction-formacion'>
        <article className='article-formacion'>
          <p>
          Durante la pandemia, en 2020, comence a estudiar programación web de forma
          autodidacta, durante los tiempos que estudiaba en linea mi ingenieria, tambien
          estudiaba programación en Platzi, tomando los cursos de:
          </p>

          <ul>
            <li>Curso de React.JS - Nov. 2024</li>
            <li>Curso de Programación Basica - Sep. 2024</li>
            <li>Curso de Frontend Developer - Dic. 2021</li>
            <li>Curso Práctico de JavaScript - Ago. 2021</li>
            <li>Curso Definitivo de HTML y CSS - Ene. 2021</li>
            <li>Curso de Programación Básica - Jul. 2020</li>
          </ul>

          <p>
            Despues de regresar a las clases presenciales, me concentre en terminar
            la Universidad realizando proyectos escolares, dejando un lado la 
            programación web.

            Los proyectos que realice fueron los siguientes:
          </p>

          <ul>
            <li>Maquina CNC de 3 ejes para el concurso INNOVATEC 2023</li>
            <li>Servidor de archivos para consulta usando una Raspberry Pi 3</li>
            <li>Recicladora de embaces PET para filamento de impresion 3D</li>
            <li>Servicio Social en el area de mantenimiento del Centro de Computo del Tecnologico de Mérida</li>
          </ul>

        </article>
      </section>

      <footer>
        <p>Recuerda visitar mis paginas personales:</p>
        <span><a href='https://github.com/JesusEEM' target='_blank'>GitHub</a></span>
        <span><a href='https://www.linkedin.com/in/jesús-escalante-55a890221/' target='_blank'>Linkedin</a></span>
      </footer>

    </>
  )
}

export default App


