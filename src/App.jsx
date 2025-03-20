import { useState } from 'react'
import {CardProjects} from './Components/CardProjects'
import { Title } from './Components/Title'

const DATA_INFO = [
  {
    name: 'Gatitos App',
    link: 'https://github.com/JesusEEM/Gatitos-App',
    alt: 'Imagen de referencia sobre la pagina Gatitos App',
    description: 'Description: Proyecto creado durante el curso de Fundamentos de Rest API en Platzi',
  },
  {
    name: 'LM35-ESP32',
    link: 'https://github.com/JesusEEM/LM35-ESP32',
    alt: 'Imagen de referencia del proyecto para usar un LM35',
    description: 'Aplicacion movil para solicitar a un ESP32 la temperatura de un sensor LM35.',
  },
]

const TITULOS = {
  Proyectos: {
    name: 'mis proyectos',
    title: 'Mis Proyectos',
  },

  Roadmap: {
    name: 'proyectos roadmap',
    title: 'Proyectos Roadmap.sh',
  },
}

function App() {
  const [count, setCount] = useState(0)
  const data = DATA_INFO
  console.log(data)
  const {Proyectos, Roadmap} = TITULOS

  return (
    <>
      <main>
        <h1>Hola Mundo</h1>
        <p>Esta es mi pagina Web</p>
        <p>Visita mis proyectos aqui <a href='https://github.com/JesusEEM'>GitHub</a></p>
      </main>

      <Title
        key={Proyectos.name}
        title={Proyectos.title}
      />

      <section className='mis-proyectos'>
        {
          data.map(element => {
            return(
              <CardProjects 
              key={element.name}
              name={element.name}
              link={element.link}
              alt={element.alt}
              description={element.description}
              />
            )
          })
        }
      </section>
  

      <Title
        key={Roadmap.name}
        title={Roadmap.title}
      />
    </>
  )
}

export default App
