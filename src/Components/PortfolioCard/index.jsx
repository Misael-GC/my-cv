import { useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { dataPortfolioFilter } from "../data/data";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import './index.css';

const Card = ({ title, image, urlGithub, urlDemo, descripcion, date, onOpenDetail }) => {
    return (
        <div className="group relative bg-slate-900/40 dark:bg-slate-900/40 bg-white border border-slate-200 dark:border-white/5 rounded-xl text-left text-slate-800 dark:text-white overflow-hidden transition-all duration-300 hover:border-cyan-500/30 dark:hover:border-cyan-500/30 hover:shadow-[0_0_25px_rgba(0,216,255,0.15)] flex flex-col h-full shadow-sm">
            <div className="relative overflow-hidden aspect-video cursor-pointer" onClick={onOpenDetail}>
                <div className="block w-full h-full overflow-hidden">
                    <img 
                      src={image} 
                      alt={title} 
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" 
                    />
                </div>
                <div className="absolute top-3 right-3">
                    <span className="bg-slate-950/80 backdrop-blur-md text-cyan-400 border border-white/5 text-xs font-semibold rounded-full px-3 py-1 uppercase tracking-wider">{date}</span>
                </div>
                {/* Overlay on hover showing "Ver Detalles" */}
                <div className="absolute inset-0 bg-cyan-950/40 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-slate-950/85 text-white font-semibold text-xs py-2 px-4 rounded-full tracking-wider uppercase border border-white/10">Ver Detalles</span>
                </div>
            </div>
            
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-white mb-2 tracking-tight transition-colors duration-300 cursor-pointer" onClick={onOpenDetail}>
                    {title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">{descripcion}</p>
                
                <div className="flex gap-3 mt-auto">
                    <a
                        className="flex-1 text-center bg-slate-100 dark:bg-slate-950/50 hover:bg-slate-200 dark:hover:bg-slate-950 border border-slate-200 dark:border-white/10 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium text-xs py-2 px-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-1.5"
                        href={urlGithub}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub /> GitHub
                    </a>
                    <a
                        className="flex-1 text-center bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-500 text-white font-semibold text-xs py-2 px-3 rounded-lg shadow-lg shadow-cyan-600/10 hover:shadow-cyan-600/20 transition-all duration-300 flex items-center justify-center gap-1.5"
                        href={urlDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaExternalLinkAlt className="text-[10px]" /> Demo Live
                    </a>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    urlGithub: PropTypes.string.isRequired,
    urlDemo: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    onOpenDetail: PropTypes.func.isRequired
};

const PortfolioCard = () => {
    const [filter, setFilter] = useState('todos');
    const [selectedProject, setSelectedProject] = useState(null);

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
        <div className="w-full">
            <div className="mb-12 flex flex-wrap justify-center gap-3 custom-button-container">
                {['todos', 'básico', 'intermedio', 'avanzado'].map((cat) => (
                    <button
                        key={cat}
                        className={`text-xs font-semibold tracking-wider uppercase px-5 py-2.5 rounded-full transition-all duration-300 ${
                            filter === cat
                                ? 'bg-cyan-500 dark:bg-cyan-600 text-white shadow-lg shadow-cyan-500/25 dark:shadow-cyan-600/25'
                                : 'bg-slate-200 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-300 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-slate-800'
                        }`}
                        onClick={() => setFilter(cat)}
                    >
                        {cat === 'todos' ? 'Todos' : cat === 'básico' ? 'Básicos' : cat === 'intermedio' ? 'Intermedios' : 'Avanzados'}
                    </button>
                ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
                {filteredProjects.map(project => (
                    <Card 
                      key={project.id} 
                      {...project} 
                      onOpenDetail={() => setSelectedProject(project)}
                    />
                ))}
            </div>

            {/* Modal Detail overlay */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div 
                      className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setSelectedProject(null)}
                    >
                        <motion.div 
                          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl relative text-slate-800 dark:text-white"
                          initial={{ scale: 0.9, y: 20, opacity: 0 }}
                          animate={{ scale: 1, y: 0, opacity: 1 }}
                          exit={{ scale: 0.9, y: 20, opacity: 0 }}
                          transition={{ type: "spring", damping: 25, stiffness: 300 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close button */}
                            <button 
                              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-950/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/5 transition-colors duration-300 z-10"
                              onClick={() => setSelectedProject(null)}
                              aria-label="Cerrar modal"
                            >
                                <FaTimes className="w-4 h-4" />
                            </button>

                            <div className="relative aspect-video w-full">
                                <img 
                                  src={selectedProject.image} 
                                  alt={selectedProject.title} 
                                  className="w-full h-full object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                                <div className="absolute bottom-6 left-6">
                                    <span className="bg-cyan-500 text-white text-[10px] font-bold tracking-widest uppercase rounded px-2.5 py-1 mb-2 inline-block">
                                        {selectedProject.date}
                                    </span>
                                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                                        {selectedProject.title}
                                    </h2>
                                </div>
                            </div>

                            <div className="p-6 sm:p-8">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-450 dark:text-slate-500 mb-2">
                                    Descripción del Proyecto
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-6">
                                    {selectedProject.descripcion}
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 border-t border-slate-200 dark:border-white/5 pt-6">
                                    <a
                                        href={selectedProject.urlGithub}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-950 hover:bg-slate-200 dark:hover:bg-slate-950/60 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white font-semibold text-sm py-3 px-4 rounded-xl border border-slate-200 dark:border-white/10 transition-all duration-300"
                                    >
                                        <FaGithub /> Código en GitHub
                                    </a>
                                    <a
                                        href={selectedProject.urlDemo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-500 text-white font-semibold text-sm py-3 px-4 rounded-xl shadow-lg shadow-cyan-500/10 dark:shadow-cyan-600/10 hover:shadow-cyan-500/20 dark:hover:shadow-cyan-600/20 transition-all duration-300"
                                    >
                                        <FaExternalLinkAlt className="text-xs" /> Ver Demo en Vivo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PortfolioCard;
