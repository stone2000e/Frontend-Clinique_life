import React from "react";
import { ArrowRight } from "lucide-react";

// IMAGES ARTICLES
import GrossesseImg from "../../assets/doc2.png";
import PediatrieImg from "../../assets/doc3.png";

// ICONES
import PersonIcon from "../../assets/person2.png";
import CalendrierIcon from "../../assets/calendrier2.png";
import HorlogeIcon from "../../assets/horloge.png";
import TagIcon from "../../assets/icon_bilan.png";

const Partie3_blog: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-[#f5fbff] py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* =======================
            CARTE PRINCIPALE
        ======================= */}
        <div className="lg:col-span-2 bg-white shadow-xl overflow-hidden">

          {/* IMAGE */}
          <div className="relative">
            <img
              src={GrossesseImg}
              alt="Suivi de grossesse"
              className="w-full h-[360px] object-cover rounded-t-2xl"
            />

            {/* BADGES */}
            <span className="absolute top-4 left-4 rounded-full bg-white px-4 py-1 text-xs font-semibold text-blue-600 shadow">
              Maternité
            </span>

            <span className="absolute top-4 right-4 rounded-full bg-yellow-400 px-4 py-1 text-xs font-semibold text-white shadow">
              ⭐ À la une
            </span>
          </div>

          {/* CONTENU */}
          <div className="p-6 md:p-8">

            {/* META */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-gray-500 mb-4">
              <div className="flex items-center gap-2">
                <img src={PersonIcon} className="w-5 h-5" />
                <span>Dr. Aya Diabaté</span>
              </div>

              <div className="flex items-center gap-2">
                <img src={CalendrierIcon} className="w-5 h-5" />
                <span>10 Décembre 2024</span>
              </div>

              <div className="flex items-center gap-2">
                <img src={HorlogeIcon} className="w-5 h-5" />
                <span>7 min de lecture</span>
              </div>
            </div>

            {/* TITRE */}
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
              Suivi de grossesse : Nos conseils pour futures mamans
            </h3>

            {/* TEXTE */}
            <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
              La grossesse est une période unique qui nécessite un suivi médical
              adapté. Notre équipe d’obstétriciens vous accompagne à chaque
              étape avec des consultations personnalisées, des échographies de
              qualité et des conseils nutrition.
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-3 mb-6">
              {["Grossesse", "Maternité", "Conseils"].map((tag) => (
                <div
                  key={tag}
                  className="flex items-center gap-2 bg-blue-50 px-3 py-2 text-xs font-medium text-blue-600"
                >
                  <img src={TagIcon} className="w-4 h-4" />
                  <span>{tag}</span>
                </div>
              ))}
            </div>

            {/* LIEN */}
            <button className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline">
              Lire l’article complet
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* =======================
            CARTE SECONDAIRE
        ======================= */}
        <div className="bg-white shadow-xl overflow-hidden">

          {/* IMAGE */}
          <div className="relative">
            <img
              src={PediatrieImg}
              alt="Pédiatrie"
              className="w-full h-[220px] object-cover rounded-t-2xl"
            />

            <span className="absolute top-4 left-4 rounded-full bg-white px-4 py-1 text-xs font-semibold text-blue-600 shadow">
              Pédiatrie
            </span>
          </div>

          {/* CONTENU */}
          <div className="p-6">

            {/* META */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-3">
              <div className="flex items-center gap-2">
                <img src={PersonIcon} className="w-4 h-4" />
                <span>Dr. Kouassi Jean</span>
              </div>

              <div className="flex items-center gap-2">
                <img src={CalendrierIcon} className="w-4 h-4" />
                <span>5 Décembre 2024</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
              <img src={HorlogeIcon} className="w-4 h-4" />
              <span>6 min de lecture</span>
            </div>

            {/* TITRE */}
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              La santé des enfants : Vaccination et suivi pédiatrique
            </h4>

            {/* TEXTE */}
            <p className="text-gray-600 text-sm mb-5 leading-relaxed">
              Protéger la santé de vos enfants commence dès les premiers jours.
              Notre service de pédiatrie offre un programme de vaccination
              complet et un suivi personnalisé pour assurer la croissance
              harmonieuse de votre enfant.
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 mb-4">
              {["Enfants", "Vaccination", "Pédiatrie"].map((tag) => (
                <div
                  key={tag}
                  className="flex items-center gap-2 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600"
                >
                  <img src={TagIcon} className="w-4 h-4" />
                  <span>{tag}</span>
                </div>
              ))}
            </div>

            {/* LIEN */}
            <button className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline">
              Lire l’article complet
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Partie3_blog;
