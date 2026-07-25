import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

// src/Components/shared/Section.jsx
const Section = ({ id, title, subtitle, children, className = '' }) => (
  <motion.section 
    id={id}
    className={`min-h-screen flex items-center justify-center ${className}`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <div className="container mx-auto px-4">
      {title && (
        <h2 className="text-slate-950 dark:text-slate-200 font-extrabold text-3xl md:text-4xl mb-4 tracking-tight">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg mb-8 font-light max-w-xl">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  </motion.section>
);

Section.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};

export default Section;

