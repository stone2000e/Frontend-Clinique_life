import React from "react";

// IMAGE
import Doc4 from "../../assets/doc4.png";

const Partie2_lire_article_blog2: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#f5fbff] to-white px-4 py-20">

      {/* =======================
          BLOC TEXTE (HAUT)
      ======================= */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="bg-white rounded-2xl shadow-xl px-8 py-10">
          <p className="text-gray-700 text-base leading-relaxed">
            La prévention est la meilleure stratégie pour préserver votre santé
            sur le long terme. Un bilan de santé régulier permet de détecter
            précocement d&apos;éventuelles anomalies et d&apos;adopter rapidement
            les mesures appropriées. À la Clinique Life, nous recommandons à tous
            nos patients de réaliser un bilan annuel adapté à leur âge et à leurs
            antécédents médicaux.
          </p>
        </div>
      </div>

      {/* =======================
          SECTION IMAGE + TEXTE
      ======================= */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

          {/* IMAGE */}
          <div className="h-full">
            <img
              src={Doc4}
              alt="Consultation médicale"
              className="w-full h-full object-cover"
            />
          </div>

          {/* TEXTE */}
          <div className="p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
              Pourquoi réaliser un bilan de santé ?
            </h2>

            <div className="space-y-5 text-gray-600 text-base leading-relaxed">
              <p>
                Un bilan de santé complet est essentiel pour plusieurs raisons.
                Il permet tout d&apos;abord de détecter des maladies silencieuses
                qui ne présentent pas encore de symptômes visibles. De nombreuses
                pathologies comme le diabète, l&apos;hypertension ou certains
                cancers peuvent évoluer pendant des années sans signes apparents.
              </p>

              <p>
                De plus, un bilan régulier permet d&apos;évaluer vos facteurs de
                risque personnels et d&apos;adapter votre mode de vie en
                conséquence. C&apos;est également l&apos;occasion de faire le
                point avec votre médecin sur vos habitudes alimentaires, votre
                activité physique et votre gestion du stress.
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Partie2_lire_article_blog2;
