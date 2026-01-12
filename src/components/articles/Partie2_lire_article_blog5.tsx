import React from "react";

// IMAGES
import Doc2 from "../../assets/doc2.png";
import Doc3 from "../../assets/doc3.png";

const Partie2_lire_article_blog5: React.FC = () => {
  return (
    <section className="w-full bg-white px-4 py-20">
      <div className="max-w-6xl mx-auto">

        {/* TITRE */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-12">
          Articles similaires
        </h2>

        {/* CARTES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 justify-items-start">

          {/* ARTICLE 1 */}
          <article className="bg-[#f3fbff] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition max-w-[420px]">
            <div className="relative">
              <img
                src={Doc2}
                alt="Suivi de grossesse"
                className="w-full h-44 object-cover"
              />
              <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-2.5 py-1 rounded-full">
                Maternité
              </span>
            </div>

            <div className="p-4 space-y-2.5">
              <h3 className="text-base font-semibold text-gray-900">
                Suivi de grossesse : Nos conseils pour futures mamans
              </h3>

              <p className="text-xs text-gray-600 leading-relaxed">
                La grossesse est une période unique qui nécessite un suivi
                médical adapté.
              </p>

              <div className="text-xs text-gray-500 flex items-center gap-2">
                <span>10 Décembre 2024</span>
                <span>•</span>
                <span>7 min</span>
              </div>
            </div>
          </article>

          {/* ARTICLE 2 */}
          <article className="bg-[#f3fbff] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition max-w-[420px]">
            <div className="relative">
              <img
                src={Doc3}
                alt="Santé des enfants"
                className="w-full h-44 object-cover"
              />
              <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-2.5 py-1 rounded-full">
                Pédiatrie
              </span>
            </div>

            <div className="p-4 space-y-2.5">
              <h3 className="text-base font-semibold text-gray-900">
                La santé des enfants : Vaccination et suivi pédiatrique
              </h3>

              <p className="text-xs text-gray-600 leading-relaxed">
                Protéger la santé de vos enfants commence dès les premiers jours.
              </p>

              <div className="text-xs text-gray-500 flex items-center gap-2">
                <span>5 Décembre 2024</span>
                <span>•</span>
                <span>6 min</span>
              </div>
            </div>
          </article>

        </div>

      </div>
    </section>
  );
};

export default Partie2_lire_article_blog5;
