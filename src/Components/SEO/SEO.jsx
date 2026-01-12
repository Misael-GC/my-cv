import { Helmet } from 'react-helmet-async';

/**
 * Componente SEO para mejorar el posicionamiento en buscadores
 * Incluye meta tags para Open Graph, Twitter Cards y JSON-LD
 * 
 * @param {Object} props - Propiedades del componente
 * @param {string} props.title - Título de la página
 * @param {string} props.description - Descripción de la página
 * @param {string} props.image - URL de la imagen Open Graph
 * @param {string} props.url - URL canónica de la página
 * @param {string} props.type - Tipo de contenido (website, article, profile)
 * @param {string} props.author - Nombre del autor
 * @param {string} props.keywords - Palabras clave separadas por comas
 */
const SEO = ({ 
  title = 'Misael Gómez Cuautle - Full Stack Developer',
  description = 'Desarrollador Full Stack especializado en React, Laravel, PHP, Docker y tecnologías web modernas. Portafolio de proyectos y experiencia profesional.',
  image = '/og-image.jpg',
  url = 'https://misael-gomez.dev',
  type = 'website',
  author = 'Misael Gómez Cuautle',
  keywords = 'desarrollador web, full stack, react, laravel, php, javascript, docker, mysql'
}) => {
  const fullTitle = title === 'Misael Gómez Cuautle - Full Stack Developer' 
    ? title 
    : `${title} | Misael Gómez Cuautle`;

  const fullImageUrl = image.startsWith('http') ? image : `${url}${image}`;
  const fullUrl = url.endsWith('/') ? url.slice(0, -1) : url;

  return (
    <Helmet>
      {/* Meta Tags Básicos */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="es" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="es_MX" />
      <meta property="og:site_name" content="Misael Gómez Cuautle" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:creator" content="@MisaelG51069440" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Structured Data - JSON-LD para Person */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Misael Gómez Cuautle",
          "jobTitle": "Full Stack Developer",
          "description": description,
          "url": fullUrl,
          "image": fullImageUrl,
          "sameAs": [
            "https://www.linkedin.com/in/misael-g%C3%B3mez-cuautle-5976491b9/",
            "https://github.com/Misael-GC",
            "https://x.com/MisaelG51069440"
          ],
          "knowsAbout": [
            "React",
            "Laravel",
            "PHP",
            "JavaScript",
            "Docker",
            "MySQL",
            "Full Stack Development"
          ],
          "alumniOf": {
            "@type": "Organization",
            "name": "Tu Universidad/Institución"
          }
        })}
      </script>
      
      {/* Structured Data - JSON-LD para WebSite */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Portafolio de Misael Gómez Cuautle",
          "url": fullUrl,
          "description": description,
          "author": {
            "@type": "Person",
            "name": author
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
