import React from 'react';
import { Stethoscope, Users, Activity, Heart, Baby, Clock } from 'lucide-react';

// Import des images
import MedecinImg from '../../assets/General.jpg';
import ProfessionelImg from '../../assets/Professionel.jpg';
import AnalyseImg from '../../assets/Analyse.jpg';
import SoinsImg from '../../assets/Soins.jpg';
import EnfantImg from '../../assets/enfant.jpg';
import AccueilImg from '../../assets/Accueil.jpg';

const Equipements: React.FC = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Médecine générale",
      color: "#6B9BD1", // Bleu
      image: MedecinImg
    },
    {
      icon: Users,
      title: "+15 Professionnels",
      color: "#4CAF50", // Vert
      image: ProfessionelImg
    },
    {
      icon: Activity,
      title: "Analyses médicales",
      color: "#9C27B0", // Violet
      image: AnalyseImg
    },
    {
      icon: Heart,
      title: "Soins infirmiers",
      color: "#E91E63", // Rose
      image: SoinsImg
    },
    {
      icon: Baby,
      title: "Santé infantile",
      color: "#673AB7", // Violet foncé
      image: EnfantImg
    },
    {
      icon: Clock,
      title: "Service 24/7",
      color: "#00BCD4", // Bleu clair/cyan
      image: AccueilImg
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[#9C27B0] bg-white mb-6">
            <Activity className="w-6 h-6 text-[#9C27B0]" />
            <span className="text-[#9C27B0] font-medium">Notre clinique en images</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Notre équipe dédiée à votre santé
          </h2>
          
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Découvrez notre équipe de professionnels dévoués à votre bien-être
          </p>
        </div>

        {/* Grille de cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Image avec overlay */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Overlay au hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ 
                    background: `linear-gradient(180deg, ${service.color}00 0%, ${service.color}99 100%)`
                  }}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Consultations personnalisées</h3>
                    <p className="text-sm">Des médecins à votre écoute pour un diagnostic précis</p>
                  </div>
                </div>
              </div>
              
              {/* Contenu */}
              <div className="p-4 bg-white">
                <div className="flex items-center gap-3">
                  <service.icon className="w-6 h-6" style={{ color: service.color }} />
                  <h3 className="text-lg font-bold" style={{ color: service.color }}>
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipements;