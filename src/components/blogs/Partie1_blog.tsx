import React from "react";
import { ArrowRight } from "lucide-react";

const Partie1_blog: React.FC = () => {
  return (
    <section className="relative w-full h-[520px] md:h-[600px] overflow-hidden">
      
      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-sky-500 to-teal-400" />

      {/* CONTENU */}
      <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col justify-center px-6 md:px-10 text-white">
        
        {/* BADGE */}
        <span className="w-fit mb-6 rounded-full bg-white/20 px-4 py-1 text-sm font-medium backdrop-blur">
          Actualités
        </span>

        {/* TITRE */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4">
          Bienvenue à la Clinique <br />
          Life
        </h1>

        {/* SOUS-TITRE */}
        <p className="text-lg md:text-xl font-medium mb-3">
          Votre santé, notre priorité
        </p>

        {/* DESCRIPTION */}
        <p className="max-w-xl text-sm md:text-base text-white/90 mb-8">
          Découvrez nos dernières actualités et conseils santé pour vous
          accompagner au quotidien.
        </p>

        {/* BOUTON */}
        <button className="w-fit inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-lg transition hover:bg-gray-100">
          Découvrir nos articles
          <ArrowRight size={18} />
        </button>
      </div>

      {/* INDICATEURS SLIDER */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        <span className="w-2.5 h-2.5 rounded-full bg-white" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/50" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/50" />
      </div>
    </section>
  );
};

export default Partie1_blog;
