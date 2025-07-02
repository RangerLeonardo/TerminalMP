import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
            Contáctanos Hoy
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para ayudarte a encontrar la terminal perfecta para tu negocio. 
            Solicita una cotización personalizada sin compromiso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#333333] mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#009EE3] p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#333333]">Teléfono</p>
                    <p className="text-gray-600">+52 55 1234 5678</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-[#009EE3] p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#333333]">Email</p>
                    <p className="text-gray-600">ventas@mpterminals.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-[#009EE3] p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#333333]">Dirección</p>
                    <p className="text-gray-600">Ciudad de México, CDMX</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-[#333333] mb-4">
                Horarios de Atención
              </h3>
              <div className="space-y-2 text-gray-600">
                <p><span className="font-medium">Lunes a Viernes:</span> 9:00 AM - 7:00 PM</p>
                <p><span className="font-medium">Sábados:</span> 9:00 AM - 2:00 PM</p>
                <p><span className="font-medium">Domingos:</span> Cerrado</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-[#333333] mb-6">
              Solicita tu Cotización
            </h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-[#333333] mb-2">
                  ¡Mensaje Enviado!
                </h4>
                <p className="text-gray-600">
                  Nos pondremos en contacto contigo dentro de las próximas 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#333333] mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009EE3] focus:border-transparent transition-all duration-200"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#333333] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009EE3] focus:border-transparent transition-all duration-200"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#333333] mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009EE3] focus:border-transparent transition-all duration-200"
                      placeholder="+52 55 1234 5678"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#333333] mb-2">
                      Tipo de Negocio
                    </label>
                    <input
                      type="text"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009EE3] focus:border-transparent transition-all duration-200"
                      placeholder="Restaurante, retail, etc."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#333333] mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009EE3] focus:border-transparent transition-all duration-200"
                    placeholder="Cuéntanos sobre tu negocio y qué terminal necesitas..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#009EE3] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#0066CC] transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
                >
                  <Send className="h-5 w-5" />
                  <span>Enviar Solicitud</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;