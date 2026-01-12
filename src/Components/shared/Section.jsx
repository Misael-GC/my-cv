// src/Components/shared/Section.jsx
const Section = ({ id, title, subtitle, children, className = '' }) => (
  <section 
    id={id}
    className={`min-h-screen flex items-center justify-center ${className}`}
  >
    <div className="container mx-auto px-4">
      {title && (
        <h2 className="text-slate-300 font-bold text-3xl mb-4">{title}</h2>
      )}
      {subtitle && (
        <p className="text-slate-300 text-lg mb-8">{subtitle}</p>
      )}
      {children}
    </div>
  </section>
);

export default Section;

