import React from "react";

const Partie1_service: React.FC = () => {
  return (
    <section className="w-full py-24 px-4 bg-gradient-to-r from-blue-600 via-blue-500 to-teal-400">
      <div className="max-w-5xl mx-auto text-center text-white">

        {/* BADGE */}
        <div className="inline-block mb-6 px-5 py-2 rounded-full bg-white/20 backdrop-blur-md text-sm font-medium">
          ✚ Nos Services Médicaux
        </div>

        {/* TITRE */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Une gamme complète de{" "}
          <span className="text-teal-200">services de santé</span>
        </h1>

        {/* DESCRIPTION */}
        <p className="max-w-3xl mx-auto text-sm md:text-base text-white/90 mb-10">
          De la consultation générale aux interventions chirurgicales,
          découvrez tous nos services médicaux de qualité disponibles
          24h/24 et 7j/7.
        </p>

        {/* AVANTAGES */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 flex items-center justify-center rounded-full bg-white text-blue-600 font-bold">
              ✓
            </span>
            Équipements modernes
          </div>

          <div className="flex items-center gap-2">
            <span className="w-5 h-5 flex items-center justify-center rounded-full bg-white text-blue-600 font-bold">
              ✓
            </span>
            Personnel qualifié
          </div>

          <div className="flex items-center gap-2">
            <span className="w-5 h-5 flex items-center justify-center rounded-full bg-white text-blue-600 font-bold">
              ✓
            </span>
            Service 24/7
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partie1_service;