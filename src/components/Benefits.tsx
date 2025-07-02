import React from 'react';
import { TrendingUp, Clock, Shield, Headphones, BarChart, Users } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Aumenta tus Ventas",
      description: "Acepta todos los medios de pago y no pierdas ninguna venta. Incrementa tu facturación hasta un 40%."
    },
    {
      icon: Clock,
      title: "Instalación Inmediata",
      description: "Configura tu terminal en menos de 10 minutos. Empieza a vender el mismo día de la entrega."
    },
    {
      icon: Shield,
      title: "Máxima Seguridad",
      description: "Tecnología de encriptación avanzada. Cumple con todos los estándares internacionales de seguridad."
    },
    {
      icon: Headphones,
      title: "Soporte 24/7",
      description: "Atención personalizada todos los días del año. Resolvemos cualquier duda al instante."
    },
    {
      icon: BarChart,
      title: "Reportes Detallados",
      description: "Visualiza el crecimiento de tu negocio con reportes en tiempo real y análisis de ventas."
    },
    {
      icon: Users,
      title: "Capacitación Incluida",
      description: "Entrenamiento completo para tu equipo. Videos tutoriales y material de apoyo gratuito."
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
            ¿Por qué elegir nuestras terminales?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Miles de comercios confían en nosotros. Descubre las ventajas que 
            harán crecer tu negocio de manera exponencial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-gray-100 hover:border-[#009EE3] hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4">
                <benefit.icon className="h-12 w-12 text-[#009EE3] group-hover:scale-110 transition-transform duration-200" />
              </div>
              <h3 className="text-xl font-semibold text-[#333333] mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#009EE3] to-[#0066CC] rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Listo para impulsar tu negocio?
          </h3>
          <p className="text-lg mb-8 text-blue-100">
            Únete a más de 10,000 comercios que ya transformaron su forma de vender
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#009EE3] px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 transform hover:scale-105">
              Solicitar Demostración
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#009EE3] transition-all duration-200">
              Hablar con un Experto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;