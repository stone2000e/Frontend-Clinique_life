import React from "react";

/* ICONES */
import CiseauxIcon from "../../assets/ciseaux.png";
import CheckVert from "../../assets/check_vert.png";

type Service = {
  title: string;
  description: string;
};

const services: Service[] = [
  {
    title: "Service d'Urologie",
    description: "Chirurgie des voies urinaires et appareil génital",
  },
  {
    title: "Service d'Orthopédie et de Traumatologie",
    description: "Chirurgie osseuse et articulaire",
  },
  {
    title: "Service de Chirurgie Digestive et Viscérale",
    description: "Chirurgie de l'appareil digestif",
  },
];

const Partie4_service: React.FC = () => {
  return (
    <section className="w-full py-10 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* HEADER */}
        <div className="bg-gradient-to-r from-emerald-400 to-green-500 px-8 py-6 flex items-center gap-4 text-white">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/20">
            <img
              src={CiseauxIcon}
              alt="Chirurgie"
              className="w-7 h-7 object-contain"
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold tracking-wide">
              CHIRURGIE
            </h2>
            <p className="text-sm text-white/90">
              3 services disponibles
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-emerald-50 rounded-xl p-6 hover:shadow-md transition"
              >
                <div className="flex items-start gap-3">
                  {/* CHECK */}
                  <img
                    src={CheckVert}
                    alt="Check"
                    className="w-5 h-5 mt-1"
                  />

                  {/* TEXTE */}
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

export default Partie4_service;