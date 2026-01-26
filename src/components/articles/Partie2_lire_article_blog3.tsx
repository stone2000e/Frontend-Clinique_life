import React from "react";

// IMAGE
import Doc5 from "../../assets/doc5.png";

const Partie2_lire_article_blog3: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#f5fbff] to-white px-4 pb-20">

      {/* =======================
          SECTION : TEXTE + IMAGE
      ======================= */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

          {/* TEXTE */}
          <div className="p-6 md:p-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
              Quels examens selon votre âge ?
            </h2>

            <div className="space-y-5 text-gray-600 text-base leading-relaxed">
              <p>
                Pour les adultes de 20 à 40 ans, nous recommandons une prise de
                sang complète comprenant le bilan lipidique, la glycémie et les
                fonctions rénale et hépatique. Un contrôle de la tension
                artérielle est également important.
              </p>

              <p>
                À partir de 40 ans, il convient d&apos;ajouter des examens plus
                spécifiques : dépistage du diabète de type 2, contrôle
                cardiovasculaire approfondi et pour les femmes, mammographie et
                frottis cervico-utérin. Les hommes devraient également envisager
                un dépistage du cancer de la prostate.
              </p>

              <p>
                Après 50 ans, la fréquence et l&apos;étendue des examens
                augmentent. Le dépistage du cancer colorectal devient essentiel,
                ainsi qu&apos;une surveillance accrue des fonctions cardiaques
                et rénales.
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div className="h-full">
            <img
              src={Doc5}
              alt="Examens médicaux"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>

    </section>
  );
};

export default Partie2_lire_article_blog3;
