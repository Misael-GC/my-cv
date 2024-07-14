import { useState } from "react";
import { dataPortfolioFilter } from "../data/data"
import './index.css'



const Card = ({ title, image, urlGithub, urlDemo, descripcion, date }) => {
    return (
        <div className="relative border border-gray-300 rounded-lg text-center bg-[#2D2F3B] text-white overflow-hidden">
            <div className="relative">
                <a href={urlDemo} target="_blank" rel="noopener noreferrer">
                    <img src ={image} alt={title} className="w-full h-48 object-cover object-top" />
                </a>
                <div className="absolute bottom-0 left-0 w-full bg-opacity-40 bg-black text-white p-4">
                    <h2 className="text-lg font-bold">
                        {title}
                        <span className="bg-secondary bg-opacity-70 text-white rounded px-2 py-1 ml-2">{date}</span>
                    </h2>
                </div>
            </div>
            <p className="my-2 h-20 text-clip">{descripcion}</p>
            <div className="my-4">
            <a
                    className="bg-secondary bg-opacity-40 text-white border-none px-4 py-2 rounded mr-2 inline-block"
                    href={urlGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
                <a
                    className="bg-secondary bg-opacity-40 text-white border-none px-4 py-2 rounded inline-block"
                    href={urlDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    URL
                </a>
            </div>
        </div>
    );
};

const PortfolioCard = () => {
    const [filter, setFilter] = useState('todos');

    const getFilteredProjects = () => {
        switch (filter) {
            case 'básico':
                return dataPortfolioFilter.básico;
            case 'intermedio':
                return dataPortfolioFilter.intermedio;
            case 'avanzado':
                return dataPortfolioFilter.avanzado;
            default:
                return [
                    ...dataPortfolioFilter.básico,
                    ...dataPortfolioFilter.intermedio,
                    ...dataPortfolioFilter.avanzado
                ];
        }
    };

    const filteredProjects = getFilteredProjects();

    return (
        <div>
            <div className="mb-4 text-center custom-button-container">
                <button
                    className={`bg-gray-700 text-white border-none px-4 py-2 rounded mr-2 ${filter === 'todos' && 'bg-secondary'}`}
                    onClick={() => setFilter('todos')}
                >
                    Todos
                </button>
                <button
                    className={`bg-gray-700 text-white border-none px-4 py-2 rounded mr-2 ${filter === 'básico' && 'bg-secondary'}`}
                    onClick={() => setFilter('básico')}
                >
                    Básicos
                </button>
                <button
                    className={`bg-gray-700 text-white border-none px-4 py-2 rounded mr-2 ${filter === 'intermedio' && 'bg-secondary'}`}
                    onClick={() => setFilter('intermedio')}
                >
                    Intermedios
                </button>
                <button
                    className={`bg-gray-700 text-white border-none px-4 py-2 rounded ${filter === 'avanzado' && 'bg-secondary'}`}
                    onClick={() => setFilter('avanzado')}
                >
                    Avanzados
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto md:px-40">
                {filteredProjects.map(project => (
                    <Card key={project.id} title={project.title} image={project.image}  urlGithub={project.urlGithub} urlDemo={project.urlDemo} descripcion={project.descripcion} date={project.date}/>
                ))}
            </div>
        </div>
    );
};

export default PortfolioCard;
