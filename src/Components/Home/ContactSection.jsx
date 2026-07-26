import { useState } from "react";
import Section from "../shared/Section";
import { FaWhatsapp, FaEnvelope, FaUser } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Limpiar error al escribir
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio.";
    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El correo no es válido.";
    }
    if (!formData.message.trim()) newErrors.message = "El mensaje es obligatorio.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Compilar el mensaje de WhatsApp
    const messageText = `Hola Misael, me contacto contigo desde tu portafolio web:\n\n👤 *Nombre:* ${formData.name}\n✉️ *Correo:* ${formData.email}\n💬 *Mensaje:* ${formData.message}`;
    
    // Abrir WhatsApp en una nueva pestaña
    const whatsappUrl = `https://wa.me/522213061486?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Section id="contact" className="min-h-fit py-24 flex items-center justify-center bg-slate-50 dark:bg-slate-950/20">
      <div className="container mx-auto px-4 w-full max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-slate-900 dark:text-slate-200 font-extrabold text-3xl md:text-4xl mb-4 tracking-tight">
            📨 Hablemos
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-sky-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-slate-650 dark:text-slate-400 text-base md:text-lg max-w-xl mx-auto font-light">
            ¿Tienes un proyecto en mente o alguna propuesta? Completa el formulario para enviarme un mensaje directo a WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 bg-white dark:bg-slate-900/40 backdrop-blur-md border border-slate-200 dark:border-white/5 rounded-2xl p-6 md:p-10 shadow-xl shadow-slate-100 dark:shadow-none">
          {/* Info Side */}
          <div className="md:col-span-2 flex flex-col justify-between gap-8 text-slate-700 dark:text-slate-300">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4">Información de Contacto</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                Puedes rellenar el formulario a la derecha o contactarme directamente a través de mi correo o número de WhatsApp.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3.5">
                  <div className="text-cyan-600 dark:text-cyan-400 p-3 bg-cyan-100 dark:bg-cyan-950/30 rounded-lg">
                    <FaEnvelope className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 dark:text-slate-500 font-bold uppercase">Email</p>
                    <a href="mailto:misaelgomez00000@gmail.com" className="text-sm hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium">
                      misaelgomez00000@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="text-cyan-600 dark:text-cyan-400 p-3 bg-cyan-100 dark:bg-cyan-950/30 rounded-lg">
                    <FaWhatsapp className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 dark:text-slate-500 font-bold uppercase">WhatsApp</p>
                    <a href="https://wa.me/522213061486" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium">
                      +52 (221) 306 1486
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-400 dark:text-slate-500 border-t border-slate-150 dark:border-white/5 pt-4">
              Puebla, México. Disponible para trabajo remoto.
            </div>
          </div>

          {/* Form Side */}
          <form onSubmit={handleSubmit} className="md:col-span-3 space-y-5">
            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Nombre Completo
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                  <FaUser className="w-3.5 h-3.5" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ej. Juan Pérez"
                  className={`w-full pl-9 pr-4 py-3 bg-slate-50 dark:bg-slate-950/50 border ${
                    errors.name ? "border-red-500" : "border-slate-200 dark:border-white/10"
                  } rounded-xl text-sm focus:outline-none focus:border-cyan-500 text-slate-900 dark:text-white transition-colors duration-300`}
                />
              </div>
              {errors.name && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Correo Electrónico
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                  <FaEnvelope className="w-3.5 h-3.5" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@correo.com"
                  className={`w-full pl-9 pr-4 py-3 bg-slate-50 dark:bg-slate-950/50 border ${
                    errors.email ? "border-red-500" : "border-slate-200 dark:border-white/10"
                  } rounded-xl text-sm focus:outline-none focus:border-cyan-500 text-slate-900 dark:text-white transition-colors duration-300`}
                />
              </div>
              {errors.email && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hola Misael, me gustaría hablar contigo sobre..."
                rows="4"
                className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-950/50 border ${
                  errors.message ? "border-red-500" : "border-slate-200 dark:border-white/10"
                } rounded-xl text-sm focus:outline-none focus:border-cyan-500 text-slate-900 dark:text-white transition-colors duration-300 resize-none`}
              />
              {errors.message && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-cyan-600/10 hover:shadow-cyan-600/20 transition-all duration-300 flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
            >
              <FaWhatsapp className="text-lg" /> Enviar a WhatsApp
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
