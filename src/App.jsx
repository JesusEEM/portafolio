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
    </>
  )
}

export default App


