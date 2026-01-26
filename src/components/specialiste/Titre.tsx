import React from "react";
import { Award, GraduationCap, Users } from "lucide-react";

const Titre: React.FC = () => {
  return (
    <section className="w-full py-24 px-4 bg-gradient-to-r from-blue-600 via-blue-500 to-teal-400">
      <div className="max-w-5xl mx-auto text-center text-white">

        {/* BADGE */}
        <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-white/20 backdrop-blur-md text-sm font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0"
            />
          </svg>
          Nos Spécialistes
        </div>

        {/* TITRE */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Une équipe médicale{" "}
          <span className="text-teal-200">d'excellence</span>
        </h1>

        {/* DESCRIPTION */}
        <p className="max-w-3xl mx-auto text-sm md:text-base text-white/90 mb-10">
          Nos médecins spécialistes sont hautement qualifiés et dévoués à votre santé. 
          Découvrez leurs parcours et expertises.
        </p>

        {/* AVANTAGES */}
        <div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5" />
            Experts certifiés
          </div>

          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5" />
            Formation continue
          </div>

          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Approche humaine
          </div>
        </div>
      </div>
    </section>
  );
};

export default Titre;
