import React from "react";
import HistoireImg from "../../assets/histoire.png";

const Partie3_apropos: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#f5fbff] to-white py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 items-center">

        {/* IMAGE */}
        <div className="flex justify-end md:pr-8">
          <img
            src={HistoireImg}
            alt="Clinique Life"
            className="block w-[400px] h-auto"
          />
        </div>

        {/* TEXTE */}
        <div className="text-left md:pl-1">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Notre Histoire
          </h2>

          <p className="text-gray-600 mb-3 leading-relaxed text-sm">
            Fondée en 2010 à Angré, la{" "}
            <span className="font-semibold text-gray-800">
              Clinique Life <br />
            </span>{" "}
            est née d'une vision simple mais ambitieuse : créer un <br /> établissement
            de santé où l'excellence médicale rencontre <br /> la chaleur humaine, au
            cœur d'Abidjan.
          </p>

          <p className="text-gray-600 mb-3 leading-relaxed text-sm">
            Dès le début, nous avons voulu être plus qu'une simple <br /> clinique. 
            Nous voulions être un partenaire de santé pour les <br /> familles d'Angré et des environs, 
            disponibles 24h/24 pour <br /> répondre à tous leurs besoins médicaux, des consultations <br />
            de routine aux urgences.
          </p>

          <p className="text-gray-600 leading-relaxed text-sm">
            Aujourd'hui, après plus de 15 ans d'engagement, nous <br /> sommes fiers d'avoir accompagné plus
            de 25,000 patients <br /> dans leur parcours de santé. Notre équipe s'est agrandie, <br /> nos équipements
            se sont modernisés, mais notre mission <br /> reste inchangée : être proches de vous, proches 
            de la vie.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Partie3_apropos;