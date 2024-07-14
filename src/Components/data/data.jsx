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
      }
  ],
  intermedio: [
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
      }
  ],
  avanzado: [
      {
          id: 6,
          title: "Web Dinámica",
          image: "/image-6.jpg",
          urlGithub: "#!",
          urlDemo: "#!",
      },
      {
          id: 7,
          title: "Dark Web",
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
  ]
};
