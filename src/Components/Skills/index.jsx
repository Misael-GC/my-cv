import { skillsData } from '../data/data';
import { useState } from "react";

function Skills() {
  const [showAll, setShowAll] = useState(false);

  const displayedSkills = showAll ? skillsData : skillsData.slice(0, 2);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 w-full mb-10">
        {displayedSkills.map((category) => (
          <div key={category.category} className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 p-6 rounded-xl transition-all duration-300 hover:border-cyan-500/20 hover:shadow-[0_0_20px_rgba(0,216,255,0.05)] shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-200 mb-6 tracking-wide border-b border-slate-100 dark:border-white/5 pb-2">
              {category.category}
            </h3>
            <div className="grid grid-cols-3 gap-6">
              {category.skills.map((skill) => (
                <div 
                  key={skill.name} 
                  className="group flex flex-col items-center p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-all duration-300"
                >
                  <div className="text-3xl mb-2.5 transition-transform duration-300 group-hover:scale-110">
                    {skill.icon}
                  </div>
                  <span className="text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 text-xs font-semibold tracking-wider transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button 
        onClick={() => setShowAll(!showAll)}
        className="bg-white dark:bg-slate-950/60 hover:bg-slate-50 dark:hover:bg-slate-900/80 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-semibold px-6 py-3 rounded-full border border-cyan-500/30 dark:border-cyan-500/30 shadow-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,216,255,0.2)] text-sm tracking-wide uppercase"
      >
        {showAll ? "Ver menos" : "Ver todas las tecnologías"}
      </button>
    </div>
  );
}

export default Skills;