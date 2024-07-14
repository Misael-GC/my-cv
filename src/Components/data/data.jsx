import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaGit, FaGithub, FaTerminal, FaNpm, FaBootstrap, FaFileExcel, FaLinux } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiDjango, SiMicrosoftsqlserver } from 'react-icons/si';
import { FaGolang } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";

export const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 size={25} color='#e34f26' /> },
      { name: "CSS", icon: <FaCss3Alt size={25} color='#44b7e9'/> },
      { name: "JavaScript", icon: <FaJsSquare size={25} color='#F9F907'/> },
      { name: "ReactJS", icon: <FaReact size={25} color='#58c4dc'/> },
      { name: "TailwindCSS", icon: <SiTailwindcss size={25} color='rgb(14 207 207)' /> },
      { name: "Bootstrap", icon: <FaBootstrap size={25} color='#7610f6'/> }
      // { name: "SASS", icon: <FaSass size={25} /> },
      // { name: "Figma", icon: <FaFigma size={25} /> }
    ]
  },
  {
    category: "Backend",
    skills: [
      // { name: "PHP", icon: <FaPhp size={25} /> },
      { name: "Python", icon: <FaPython size={25} color='#f6d144'/> },
      // { name: "Laravel", icon: <FaLaravel size={25} /> },
      // { name: "ExpressJS", icon: <SiExpress size={25} /> },
      { name: "MySQL", icon: <SiMysql size={35} color='#1a839b'/> },
      { name: "SQL Server", icon: <SiMicrosoftsqlserver size={35} color='#c1231f'/> },
      // { name: "MongoDB", icon: <SiMongodb size={25} /> },
      // { name: "Nginx", icon: <SiNginx size={25} /> },
       { name: "Django", icon: <SiDjango size={25} color='#0c4b33'/> }
    ]
  },
  { 
    category: "Aprendiendo",
    skills: [
      { name: "NodeJS", icon: <FaNodeJs size={25} color='#58a846'/> },
      { name: "Golang", icon: <FaGolang size={30} color='#00ffff'/> },
      { name: "Postgresql ", icon: <BiLogoPostgresql  size={35}  color='#2e5e8b'/> }
      // { name: "Docker", icon: <FaDocker size={25} /> },
    ]
  },
  {
    category: "Herramientas",
    skills: [
      { name: "Git", icon: <FaGit size={25} color='#e84d31' /> },
      { name: "GitHub", icon: <FaGithub size={25} /> },
      { name: "Terminal", icon: <FaTerminal size={25} /> },
      { name: "npm", icon: <FaNpm size={25} color='#cb0000'/> },
      { name: "Linux", icon: <FaLinux size={30} /> },
      { name: "Excel/Macros", icon: <FaFileExcel  size={25} color='#1d6a3f' /> },
      // { name: "WordPress", icon: <FaWordpress size={25} /> }
    ]
  }
];

export const dataAboutPage = [
    {
        id: 0,
        title: "Auxiliar Técnico",
        subtitle: "Optima Capacitación",
        description: "Mantenimiento preventivo y correctivo, instalación de S.O, drivers, desbloqueo de usuarios, respaldos de información",
        date_inicio: "Jun 2023 ",
    },
    {
        id: 1,
        title: "Practicante en desarrollo de software",
        subtitle: "Xube Soluciones Tecnológicas",
        description: "Reportes utilizando consultas SQL, documentación de procesos, análisis de código para hacer pequeñas modificaciones a software de la empresa, comprensión de algoritmos para el desarrollo del sistema, diccionario de datos y respaldos de información",
        date_inicio: "Nov 2023 ",
    },
    {
        id: 2,
        title: "Data Engineer Trainee",
        subtitle: "Beetmann",
        description: "Consultas SQL, modificación de vistas en SQL, creación de Procesos Almacenados, actualización de diccionario de datos y  diseño de diagramas UML Entidad relación",
        date_inicio: "Abr 2024",
    },
    {
        id: 3,
        title: "Desarrollo Frontend",
        subtitle: "Aprendizaje autodidacta",
        description: "Maquetación web, HTML, CSS, Bootstrap, Tailwind, npm, JS, React, Hooks, páginas interactivas, despliegue de páginas, consumo de APIs",
        date_inicio: "Mar 2022",
    },
]

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

export const dataPortfolioFilter = {
  básico: [
      {
          id: 1,
          title: "Inflación México",
          image: "https://static.platzi.com/media/porfilio/1st-project_92041b56-4f01-41b7-9664-73c76ab9a56c.png",
          urlGithub: "https://github.com/Misael-GC/Inflacion-mx.github.io",
          urlDemo: "https://misael-gc.github.io/Inflacion-mx.github.io/",
          descripcion: "Métodos de arrays, funciones, condicionales, algoritmos, conexión de HTML con JavaScript",
          date:" Jun 2022"
      },
      {
          id: 2,
          title: "Clon Batatabit",
          image: "https://static.platzi.com/media/porfilio/batatabit_9e3c4de3-7d3e-40b1-8fbe-be7bfc24fb84.png",
          urlGithub: "https://github.com/Misael-GC/Batatabit-mobile-first.github.io",
          urlDemo: "https://misael-gc.github.io/Batatabit-mobile-first.github.io/",
          descripcion: "Reutilizar estilos de CSS, auditoría con lighthouse, aplicar media queries para a adaptar vistas de dispositivos móviles",
          date:"May 2022"
      },
      {
          id: 3,
          title: "Gogo Travel",
          image: "https://static.platzi.com/media/porfilio/tailwind_29b961e4-7e3d-48f0-b0dc-3151501e74f7.png",
          urlGithub: "https://github.com/Misael-GC/tailwind",
          urlDemo: "https://misael-gc.github.io/tailwind/",
          descripcion: "Landing page construido con HTML, JavaScript y Tailwind ",
          date:"Ago 2022"
      },
      {
        id: 4,
        title: "Presentación",
        image: "https://static.platzi.com/media/porfilio/post_0c73e483-038b-4dfe-bc76-8bfbebe5f84e.png",
        urlGithub: "https://github.com/Misael-GC/webppack-intro?tab=readme-ov-file",
        urlDemo: "https://animated-crepe-564650.netlify.app/",
        descripcion: "Manipulación del DOM, configuraciones con webpack, scripts en json, uso de paquetes npm, despliegue de página",
        date:"Sep 2022"
      },
       {
           id: 5,
           title: "Pokedex",
           image: "https://static.platzi.com/media/porfilio/pokedex_311851f8-6ed1-4935-b725-3cc3aa7706af.png",
           urlGithub: "https://github.com/Misael-GC/pokedex",
           urlDemo: "https://comforting-gaufre-7f630b.netlify.app/",
           descripcion: "Llamado a una API de Pokemon, Bootstrap y manipulación del DOM",
           date:"Ago 2022"
       }
  ],
  intermedio: [
      {
          id: 6,
          title: "ToDos V1",
          image: "https://static.platzi.com/media/porfilio/todos_1c792138-7ccf-4f2d-a2ac-2d9fb75cb0c4.png",
          urlGithub: "https://github.com/Misael-GC/introduccion-react",
          urlDemo: "https://misael-gc.github.io/introduccion-react/",
          descripcion: "Creación de componentes, manejo del estado con React Hooks y eventos para la interacción con los usuarios",
          date:"Jul 2022"
      },
      {
          id: 7,
          title: "ToDos V2",
          image: "https://pbs.twimg.com/media/GSepem2WIAARZAG?format=png&name=small",
          urlGithub: "https://github.com/Misael-GC/curso-react-intro",
          urlDemo: "https://misael-gc.github.io/curso-react-intro/",
          descripcion: "Creación de componentes, comunicar componentes, eventos en react, estados, local storage, custom hooks, loading skeletons, useContext, portals",
          date:"Oct 2023"
      },
      // {
      //     id: 8,
      //     title: "",
      //     image: "#",
      //     urlGithub: "#",
      //     urlDemo: "#",
      //     descripcion: "#",
      //     date:"#"
      // },
  ],
  avanzado: [
      {
          id: 9,
          title: "Frontend Page",
          image: "https://static.platzi.com/media/porfilio/page_1f96b10e-a6ce-4bbe-8267-73ebf4523f1d.png",
          urlGithub: "https://github.com/Misael-GC/next-js",
          urlDemo: "https://next-js-git-pwa-misael-gc.vercel.app/",
          descripcion: "Conexión del Frontend y Backend, trabajar con Next.js, configuraciones y estructura de la página ",
          date:"Nov 2022"
      },
      {
          id: 10,
          title: "En construcción",
          image: "https://programacion.net/files/article/article_03289_.jpg",
          urlGithub: "#",
          urlDemo: "#",
          descripcion: "........",
          date:"#"
      },

  ]
};
