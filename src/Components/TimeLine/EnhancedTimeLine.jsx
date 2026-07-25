import { experienceData } from '../data/experienceData';
import { FaBriefcase, FaCheckCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

const ExperienceCard = ({ company, position, roles, period, description, technologies, achievements }) => (
  <div className="relative py-8 pl-8 sm:pl-32 group">
    {/* Timeline line */}
    <div className="absolute left-2 sm:left-[6.5rem] h-full w-px bg-gradient-to-b from-cyan-500 via-slate-350 dark:via-slate-800 to-transparent -translate-x-1/2 group-last:hidden" />
    
    {/* Timeline dot */}
    <div className="absolute left-2 sm:left-[6.5rem] w-4 h-4 bg-white dark:bg-slate-950 rounded-full border-2 border-cyan-500 -translate-x-1/2 translate-y-1.5 group-hover:scale-125 group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_#00d8ff] transition-all duration-300 z-10" />
    
    {/* Content Card */}
    <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,216,255,0.1)] shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
        <div>
          <h3 className="text-slate-900 dark:text-slate-100 font-extrabold text-xl mb-1 flex items-center gap-2 group-hover:text-cyan-600 dark:group-hover:text-white transition-colors duration-300">
            <FaBriefcase className="text-cyan-600 dark:text-cyan-400 text-base" />
            {position}
          </h3>
          <p className="text-cyan-600 dark:text-cyan-400 font-bold text-sm tracking-wide uppercase">{company}</p>
        </div>
        <span className="text-slate-500 dark:text-slate-400 font-semibold text-xs tracking-wider uppercase bg-slate-100 dark:bg-slate-950/50 px-3 py-1 rounded-full border border-slate-200 dark:border-white/5 align-self-start sm:align-self-center">
          {period}
        </span>
      </div>

      {/* Roles desempeñados */}
      {roles && roles.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-1.5">
            {roles.map((role, index) => (
              <span 
                key={index}
                className="bg-cyan-100/50 dark:bg-cyan-950/20 text-cyan-800 dark:text-cyan-300 px-2.5 py-0.5 rounded-full text-xs font-semibold border border-cyan-200 dark:border-cyan-800/30"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Description */}
      <p className="text-slate-650 dark:text-slate-400 text-sm leading-relaxed mb-4">{description}</p>

      {/* Technologies */}
      {technologies && technologies.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-1.5">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="bg-slate-100 dark:bg-slate-950/60 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5 px-2 py-0.5 rounded text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Achievements */}
      {achievements && achievements.length > 0 && (
        <div className="border-t border-slate-150 dark:border-white/5 pt-4 mt-4">
          <p className="text-slate-900 dark:text-slate-300 font-bold text-xs uppercase tracking-wider mb-2.5">Logros destacados:</p>
          <ul className="space-y-2">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-2.5 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                <FaCheckCircle className="text-cyan-500 dark:text-cyan-400 flex-shrink-0 mt-0.5 text-xs" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
);

ExperienceCard.propTypes = {
  company: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  period: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  achievements: PropTypes.arrayOf(PropTypes.string).isRequired
};

const EnhancedTimeLine = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="w-full max-w-4xl mx-auto py-6">
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
