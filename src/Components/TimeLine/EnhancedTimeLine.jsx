import { experienceData } from '../data/experienceData';
import { FaBriefcase, FaCheckCircle } from 'react-icons/fa';

const ExperienceCard = ({ company, position, roles, period, description, technologies, achievements }) => (
  <div className="relative py-6 pl-8 sm:pl-32 group">
    {/* Timeline line */}
    <div className="absolute left-2 sm:left-0 h-full w-0.5 bg-slate-700 sm:ml-[6.5rem] group-last:hidden" />
    
    {/* Timeline dot */}
    <div className="absolute left-2 sm:left-0 w-4 h-4 bg-secondary rounded-full border-4 border-slate-900 sm:ml-[6.3rem] -translate-x-1/2 translate-y-1.5 group-hover:scale-125 transition-transform" />
    
    {/* Content */}
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-secondary transition-all hover:shadow-lg hover:shadow-secondary/20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
        <div>
          <h3 className="text-slate-200 font-bold text-2xl mb-1 flex items-center gap-2">
            <FaBriefcase className="text-secondary" />
            {position}
          </h3>
          <p className="text-secondary font-semibold text-lg">{company}</p>
        </div>
        <span className="text-slate-400 font-medium mt-2 sm:mt-0 text-sm sm:text-base">
          {period}
        </span>
      </div>

      {/* Roles desempeñados - NUEVO */}
      {roles && roles.length > 0 && (
        <div className="mb-4">
          <p className="text-slate-300 font-semibold text-sm mb-2">Roles:</p>
          <div className="flex flex-wrap gap-2">
            {roles.map((role, index) => (
              <span 
                key={index}
                className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-xs font-medium border border-secondary/30"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Description */}
      <p className="text-slate-300 mb-4">{description}</p>

      {/* Technologies - NUEVO */}
      {technologies && technologies.length > 0 && (
        <div className="mb-4">
          <p className="text-slate-300 font-semibold text-sm mb-2">Tecnologías:</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Achievements - NUEVO */}
      {achievements && achievements.length > 0 && (
        <div>
          <p className="text-slate-300 font-semibold text-sm mb-2">Logros destacados:</p>
          <ul className="space-y-2">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-2 text-slate-400 text-sm">
                <FaCheckCircle className="text-secondary flex-shrink-0 mt-0.5" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
);

const EnhancedTimeLine = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="w-full max-w-4xl mx-auto py-10">
        <div className="-my-6">
          {experienceData.map((exp) => (
            <ExperienceCard key={exp.id} {...exp} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedTimeLine;
