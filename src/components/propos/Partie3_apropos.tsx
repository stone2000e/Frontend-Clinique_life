import React, { useState } from "react";
import HistoireImg from "../../assets/histoire.png";
import DirecteurImg from "../../assets/directeur.png";

const Partie3_apropos: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"directeur" | "histoire">("directeur");

  return (
    <section className="w-full bg-gradient-to-b  py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* ONGLETS */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full p-1 shadow-sm">
            <button
              onClick={() => setActiveTab("directeur")}
              className={`px-8 py-3 rounded-full font-medium transition-all text-base ${
                activeTab === "directeur"
                  ? "bg-gradient-to-r from-[#0066FF] to-[#00C9B7] text-white"
                  : "bg-transparent text-gray-700"
              }`}
            >
              Mot du Directeur
            </button>
            <button
              onClick={() => setActiveTab("histoire")}
              className={`px-8 py-3 rounded-full font-medium transition-all text-base ${
                activeTab === "histoire"
                  ? "bg-gradient-to-r from-[#0066FF] to-[#00C9B7] text-white"
                  : "bg-transparent text-gray-700"
              }`}
            >
              Notre Histoire
            </button>
          </div>
        </div>

        {/* CONTENU MOT DU DIRECTEUR */}
        {activeTab === "directeur" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* IMAGE DIRECTEUR */}
            <div className="flex justify-center md:justify-end">
              <img
                src={DirecteurImg}
                alt="Dr. Gabriel DONGUI"
                className="w-full max-w-[500px] h-auto rounded-lg shadow-xl"
              />
            </div>

            {/* MESSAGE */}
            <div className="text-left space-y-4">
              <div className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm mb-2">
                Message du Directeur
              </div>

              <h2 className="text-3xl font-bold text-gray-900">
                Dr. Gabriel DONGUI
              </h2>
              
              <p className="text-blue-600 font-medium text-lg">
                Directeur Général
              </p>

              <div className="space-y-4 text-gray-600 leading-relaxed text-[15px] mt-6">
                <p>
                  Située dans un quartier résidentiel calme et paisible,{" "}
                  <span className="font-semibold text-gray-800">CLINIQUE LIFE</span>{" "}
                  est un établissement sanitaire à taille humaine, qui offre toutes 
                  les commodités et services d'une clinique moderne.
                </p>

                <p>
                  Avec une capacité d'une trentaine de lits et places, repartis dans 
                  des chambres spacieuses et bien aérées, l'activité de soins s'organise 
                  autour de spécialités médico-chirurgicales. Vous y trouverez un accueil 
                  chaleureux et personnalisé, respectant la confidentialité depuis votre 
                  admission jusqu'aux services de soins, soit le respect des droits du patient.
                </p>

                <p>
                  La <span className="font-semibold text-gray-800">CLINIQUE LIFE</span>{" "}
                  allie savamment hôtellerie de bon standing et soins de qualité. Elle est 
                  dotée d'un plateau technique adéquat avec un bloc opératoire associant 
                  différents professionnels de santé aux compétences avérées, gage d'une 
                  prise en charge optimale des patients.
                </p>

                <p>
                  La <span className="font-semibold text-gray-800">CLINIQUE LIFE</span>{" "}
                  s'engage également dans une démarche qualité et sécurité des soins, dont 
                  l'objectif est d'assurer la qualité de la prise en charge du patient tout 
                  au long de son parcours. Cette démarche vise à accroître la pertinence des 
                  soins, actes et examens médicaux, dans le cadre du parcours de soins, et 
                  d'assurer une bonne écoute du patient.
                </p>

                <p>
                  Ce site Web est pour nous l'interface qui permettra d'être à votre écoute 
                  et de communiquer avec vous, tout en vous faisant participer à la vie de 
                  la <span className="font-semibold text-gray-800">CLINIQUE LIFE</span>.
                </p>

                <p className="text-gray-800 font-semibold text-lg mt-6">
                  Bienvenue à Life !
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="font-semibold text-gray-900 text-lg">Dr. Gabriel DONGUI</p>
                <p className="text-gray-600">Directeur Général</p>
              </div>
            </div>
          </div>
        )}

        {/* CONTENU NOTRE HISTOIRE */}
        {activeTab === "histoire" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* IMAGE */}
            <div className="flex justify-center md:justify-end">
              <img
                src={HistoireImg}
                alt="Clinique Life"
                className="w-full max-w-[400px] h-auto"
              />
            </div>

            {/* TEXTE */}
            <div className="text-left">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                Notre Histoire
              </h2>

              <p className="text-gray-600 mb-4 leading-relaxed">
                Fondée en 2010 à Angré, la{" "}
                <span className="font-semibold text-gray-800">Clinique Life</span>{" "}
                est née d'une vision simple mais ambitieuse : créer un établissement
                de santé où l'excellence médicale rencontre la chaleur humaine, au
                cœur d'Abidjan.
              </p>

              <p className="text-gray-600 mb-4 leading-relaxed">
                Dès le début, nous avons voulu être plus qu'une simple clinique. 
                Nous voulions être un partenaire de santé pour les familles d'Angré 
                et des environs, disponibles 24h/24 pour répondre à tous leurs besoins 
                médicaux, des consultations de routine aux urgences.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Aujourd'hui, après plus de 15 ans d'engagement, nous sommes fiers 
                d'avoir accompagné plus de 25,000 patients dans leur parcours de santé. 
                Notre équipe s'est agrandie, nos équipements se sont modernisés, mais 
                notre mission reste inchangée : être proches de vous, proches de la vie.
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Partie3_apropos;