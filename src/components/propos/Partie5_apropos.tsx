import React from "react";
import {
  Users,
  Stethoscope,
  Award,
  Activity,
} from "lucide-react";

const stats = [
  {
    icon: <Users size={28} />,
    value: "25,000+",
    label: "Patients traités",
  },
  {
    icon: <Stethoscope size={28} />,
    value: "50,000+",
    label: "Consultations",
  },
  {
    icon: <Award size={28} />,
    value: "15+",
    label: "Années d'expérience",
  },
  {
    icon: <Activity size={28} />,
    value: "98%",
    label: "Taux de satisfaction",
  },
];

const Partie5_apropos: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-r from-blue-600 via-sky-500 to-emerald-500 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">

        {/* TITRE */}
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3">
          Nos Réalisations
        </h2>

        <p className="text-white/80 text-sm md:text-base mb-14">
          Des chiffres qui témoignent de notre engagement et de votre confiance
        </p>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center text-white shadow-lg"
            >
              {/* ICONE */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/20 mb-4">
                {item.icon}
              </div>

              {/* VALEUR */}
              <span className="text-2xl font-bold mb-1">
                {item.value}
              </span>

              {/* LABEL */}
              <span className="text-sm text-white/80">
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Partie5_apropos;