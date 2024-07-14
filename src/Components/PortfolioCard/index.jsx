import { useState } from "react";
import { dataPortfolioFilter } from "../data/data"



const Card = ({ title, image }) => {
    return (
        <div className="border border-gray-300 rounded-lg p-6 text-center bg-[#2D2F3B] text-white">
            <img src={image} alt={title} className="w-full rounded-lg " />
            <h2 className="text-[#7bff00] mt-4">
                {title} 
                <span className="bg-pink-500 text-white rounded px-2 py-1 ml-2">NEW</span>
            </h2>
            <p className="mt-2">If a dog chews shoes whose shoes does he choose?</p>
            <div className="mt-4">
                <button className="bg-pink-500 text-white border-none px-4 py-2 rounded mr-2">Fashion</button>
                <button className="bg-pink-500 text-white border-none px-4 py-2 rounded">Products</button>
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
            <div className="mb-4 text-center">
                <button
                    className={`bg-pink-500 text-white border-none px-4 py-2 rounded mr-2 ${filter === 'todos' && 'bg-pink-700'}`}
                    onClick={() => setFilter('todos')}
                >
                    Todos
                </button>
                <button
                    className={`bg-pink-500 text-white border-none px-4 py-2 rounded mr-2 ${filter === 'básico' && 'bg-pink-700'}`}
                    onClick={() => setFilter('básico')}
                >
                    Básicos
                </button>
                <button
                    className={`bg-pink-500 text-white border-none px-4 py-2 rounded mr-2 ${filter === 'intermedio' && 'bg-pink-700'}`}
                    onClick={() => setFilter('intermedio')}
                >
                    Intermedios
                </button>
                <button
                    className={`bg-pink-500 text-white border-none px-4 py-2 rounded ${filter === 'avanzado' && 'bg-pink-700'}`}
                    onClick={() => setFilter('avanzado')}
                >
                    Avanzados
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto px-40">
                {filteredProjects.map(project => (
                    <Card key={project.id} title={project.title} image={project.image} />
                ))}
            </div>
        </div>
    );
};

export default PortfolioCard;
