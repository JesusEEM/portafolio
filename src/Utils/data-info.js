//De este archivo recuperamos la información de los proyectos realizados

// TODO: Usar la API de GitHub
// La API de Github utiliza... Octokit.js????

export const DATA_INFO = [
    {
        name: 'Gatitos App',
        link: 'https://github.com/JesusEEM/Gatitos-App',
        alt: 'Imagen de referencia sobre la pagina Gatitos App',
        description: 'Description: Proyecto creado durante el curso de Fundamentos de Rest API en Platzi',
        categori: 'mis-proyectos',
        image: './assets/gatitosapp.png',
        page: 'https://jesuseem.github.io/Gatitos-App/',
    },
    {
        name: 'LM35-ESP32',
        link: 'https://github.com/JesusEEM/LM35-ESP32',
        alt: 'Imagen de referencia del proyecto para usar un LM35',
        description: 'Aplicacion movil para solicitar a un ESP32 la temperatura de un sensor LM35.',
        categori: 'mis-proyectos',
        image: './assets/lm35-app.png',
    },
    {
        name: 'Maquina CNC',
        alt: 'Proyecto de Maquina CNC',
        description: 'Construcción de una maquina CNC para el concurso INNOVATEC 2023',
        categori: 'mis-proyectos',
        image: './assets/cnc.jpg',
    },
    {
        name: 'Simple-Tabs',
        link: 'https://github.com/JesusEEM/simple-tabs',
        alt: 'Imagen de referencia de la App',
        description: 'Una pagina simple que consiste en 4 ventanas que se pueden intercambiar para visualirzar el contenido.',
        categori: 'roadmap',
        image: './assets/tabs.png',
    },
    {
        name: 'Cookie Consent',
        link: 'https://github.com/JesusEEM/cookie-consent',
        alt: 'Imagen de referencia de la App',
        description: 'Pagina simple donde aparece un popup para aceptar cookies del navegador. La pagina hace uso de LocalStorage para guardar cuando se aceptan las cookies',
        categori: 'roadmap',
        image: './assets/galletitas.png',
    },
    {
        name: 'Restricted Texarea',
        link: 'https://github.com/JesusEEM/restricted-textarea',
        alt: 'Imagen de referencia de la App',
        description: 'Pagina creada para mostrar un Textarea restringido',
        categori: 'roadmap',
        image: './assets/textarea.png',
    },
]

//Los titulos para las secciones que quiero mostrar
//Usando la categoria del proyecto, mostramos en la sección correspondiente
export const TITULOS = [
    {
        name: 'mis proyectos',
        title: 'Mis Proyectos',
    },
    {
        name: 'proyectos roadmap',
        title: 'Proyectos Roadmap.sh',
    },
    {
        name: 'formación',
        title: 'Formación',
    },
]


