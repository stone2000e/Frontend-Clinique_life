import React from "react";

// Images des valeurs
import ProximiteImg from "../../assets/Promixite.png";
import HumaniteImg from "../../assets/Huminite.png";
import ExcellenceImg from "../../assets/Excellence.png";

const Partie2_apropos: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* TITRE */}
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Notre Mission
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-500 max-w-3xl mx-auto mb-12 leading-relaxed">
          <span className="font-semibold text-gray-700">Clinique Life</span> – Un
          nom qui reflète notre engagement : être proches de vous, présents dans
          tous les moments importants de votre vie. Nous croyons qu'une bonne
          santé commence par une relation de confiance et de proximité avec nos
          patients.
        </p>

        {/* CARTES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* PROXIMITÉ */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-6 text-left transition hover:shadow-lg">
            <img
              src={ProximiteImg}
              alt="Proximité"
              className="w-14 h-14 mb-4 object-contain"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Proximité
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Nous sommes proches de vous et disponibles à tout moment pour vous
              accompagner avec attention et bienveillance.
            </p>
          </div>

          {/* HUMANITÉ */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-6 text-left transition hover:shadow-lg">
            <img
              src={HumaniteImg}
              alt="Humanité"
              className="w-14 h-14 mb-4 object-contain"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Humanité
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Chaque patient est unique. Nous plaçons l'écoute, le respect et
              l'empathie au cœur de notre approche médicale.
            </p>
          </div>

          {/* EXCELLENCE */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-6 text-left transition hover:shadow-lg">
            <img
              src={ExcellenceImg}
              alt="Excellence"
              className="w-14 h-14 mb-4 object-contain"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Excellence
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Nous garantissons des soins de qualité grâce à des équipements
              modernes et à une équipe médicale hautement qualifiée.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Partie2_apropos;