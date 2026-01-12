import React from "react";

/* ICONES */
import BebeIcon from "../../assets/bebe.png";
import CheckIcon from "../../assets/check.png";

type ServiceItem = {
  title: string;
  description: string;
};

const services: ServiceItem[] = [
  { title: "La Gynécologie", description: "Consultations et suivi gynécologique complet" },
  { title: "Le Frottis cervico-utérin", description: "Dépistage et prévention du cancer du col" },
  { title: "L'endométriose", description: "Diagnostic et prise en charge spécialisée" },
  { title: "Le cancer du sein", description: "Dépistage, diagnostic et accompagnement" },
  { title: "Obstétrique", description: "Suivi de grossesse et accouchement" },
  { title: "Vous avez le projet de faire un bébé ?", description: "Consultation pré-conceptionnelle" },
  { title: "Si le bébé tarde à venir", description: "Aide à la procréation" },
  { title: "Êtes-vous à terme ?", description: "Surveillance de fin de grossesse" },
  { title: "L'accouchement", description: "Accompagnement personnalisé" },
  { title: "Césarienne", description: "Intervention chirurgicale sécurisée" },
  { title: "Rééducation du périnée", description: "Rééducation post-partum" },
  { title: "Médecine de la Reproduction", description: "Assistance médicale à la procréation" },
  { title: "Pédiatrie", description: "Soins pour enfants et adolescents" },
  { title: "Service de Néonatologie", description: "Soins spécialisés pour nouveau-nés" },
];

const Partie2_service: React.FC = () => {
  return (
    <section className="w-full py-12 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* HEADER */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-6 flex items-center gap-4 text-white">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/20">
            <img
              src={BebeIcon}
              alt="Bébé"
              className="w-7 h-7 object-contain"
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold tracking-wide">
              FEMME – MÈRE – ENFANT
            </h2>
            <p className="text-sm text-white/90">
              14 services disponibles
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-pink-50 rounded-xl p-5 hover:shadow-md transition"
              >
                <div className="flex items-start gap-3">
                  <img
                    src={CheckIcon}
                    alt="Check"
                    className="w-5 h-5 mt-1 object-contain"
                  />

                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Partie2_service;