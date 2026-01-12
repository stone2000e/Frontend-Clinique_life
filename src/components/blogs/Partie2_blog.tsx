import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// IMAGE PRINCIPALE
import Doc1 from "../../assets/doc1.png";

// META ICONES
import PersonIcon from "../../assets/person2.png";
import CalendrierIcon from "../../assets/calendrier2.png";
import HorlogeIcon from "../../assets/horloge.png";

// TAG ICON
import TagIcon from "../../assets/icon_bilan.png";

const Partie2_blog: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#f5fbff] to-white py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* =======================
            HEADER
        ======================= */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 mb-4 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 px-5 py-2 text-sm font-medium text-white">
            📰 Notre Blog
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
            Actualités & Conseils Santé
          </h2>

          <p className="max-w-2xl mx-auto text-gray-500 text-sm md:text-base">
            Découvrez nos derniers articles, conseils médicaux et actualités de
            la Clinique Life
          </p>
        </div>

        {/* =======================
            CARD ARTICLE
        ======================= */}
        <div className="bg-white shadow-xl w-full md:w-[60%] rounded-b-xl overflow-hidden">

          {/* IMAGE */}
          <div className="relative overflow-hidden rounded-t-xl">
            <img
              src={Doc1}
              alt="Consultation médicale"
              className="w-full h-[320px] object-cover"
            />

            {/* BADGES */}
            <span className="absolute top-4 left-4 rounded-full bg-white px-4 py-1 text-xs font-semibold text-blue-600 shadow">
              Prévention
            </span>

            <span className="absolute top-4 right-4 rounded-full bg-yellow-400 px-4 py-1 text-xs font-semibold text-white shadow">
              ⭐ À la une
            </span>
          </div>

          {/* CONTENT */}
          <div className="p-6 md:p-8">

            {/* META */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-gray-500 mb-4">
              <div className="flex items-center gap-2">
                <img src={PersonIcon} alt="Auteur" className="w-5 h-5" />
                <span>Dr. Konan Marie</span>
              </div>

              <div className="flex items-center gap-2">
                <img src={CalendrierIcon} alt="Date" className="w-5 h-5" />
                <span>15 Décembre 2024</span>
              </div>

              <div className="flex items-center gap-2">
                <img src={HorlogeIcon} alt="Temps de lecture" className="w-5 h-5" />
                <span>5 min de lecture</span>
              </div>
            </div>

            {/* TITLE */}
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
              L&apos;importance des bilans de santé réguliers
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
              Un bilan de santé complet permet de détecter précocement les
              maladies et d’adopter une approche préventive. Découvrez pourquoi
              il est essentiel de consulter régulièrement et quels examens
              privilégier selon votre âge.
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-3 mb-6">
              {["Santé", "Prévention", "Bilan"].map((tag) => (
                <div
                  key={tag}
                  className="flex items-center gap-2 bg-blue-50 px-3 py-2 text-xs font-medium text-blue-600"
                >
                  <img src={TagIcon} alt="Tag" className="w-4 h-4" />
                  <span>{tag}</span>
                </div>
              ))}
            </div>

            {/* LIEN LECTURE */}
            <Link
              to="/blog/lire"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
            >
              Lire l’article complet
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partie2_blog;
