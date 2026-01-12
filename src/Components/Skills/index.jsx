import { skillsData } from '../data/data';
import React, { useState } from "react";

function Skills() {
  // 1. El estado va AQUÍ, dentro de la función
  const [showAll, setShowAll] = useState(false);

  // 2. Aquí puedes filtrar tus datos si lo necesitas
  // Por ejemplo, mostrar solo las primeras 2 categorías si showAll es false
  const displayedSkills = showAll ? skillsData : skillsData.slice(0, 2);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 w-full mb-10">
        {displayedSkills.map((category) => (
          <div key={category.category} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">{category.category}</h2>
            <div className="grid grid-cols-3 gap-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-white mt-2">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Botón para alternar el estado */}
      <button 
        onClick={() => setShowAll(!showAll)}
        className="bg-secondary text-white px-6 py-2 rounded-lg hover:bg-opacity-80 transition-all"
      >
        {showAll ? "Ver menos" : "Ver todas las tecnologías"}
      </button>
    </div>
  );
}

export default Skills;