import React from "react";
import { Link } from "react-router-dom";

// IMAGE HERO
import ArticleImg from "../../assets/doc1.png";

// ICONES META
import PersonIcon from "../../assets/person2.png";
import CalendrierIcon from "../../assets/calendrier2.png";
import HorlogeIcon from "../../assets/horloge.png";

const Partie2_lire_article_blog: React.FC = () => {
  return (
    <section className="w-full bg-white">

      {/* =======================
          RETOUR AU BLOG (TOUT À GAUCHE)
      ======================= */}
      <div className="pt-6 pl-4">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:underline"
        >
          ← Retour au blog
        </Link>
      </div>

      {/* =======================
          HERO
      ======================= */}
      <div className="relative w-full h-[420px] md:h-[520px] mt-4">

        {/* IMAGE */}
        <img
          src={ArticleImg}
          alt="L'importance des bilans de santé réguliers"
          className="w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/45" />

        {/* TEXTE SUR L'IMAGE */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-6 pb-10 text-white">

            {/* BADGE PRÉVENTION */}
            <span className="inline-block mb-4 rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold">
              Prévention
            </span>

            {/* TITRE */}
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-6 max-w-4xl">
              L&apos;importance des bilans de santé réguliers
            </h1>

            {/* META */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/90">
              <div className="flex items-center gap-2">
                <img src={PersonIcon} alt="Auteur" className="w-4 h-4" />
                <span>Dr. Konan Marie</span>
              </div>

              <div className="flex items-center gap-2">
                <img src={CalendrierIcon} alt="Date" className="w-4 h-4" />
                <span>15 Décembre 2024</span>
              </div>

              <div className="flex items-center gap-2">
                <img src={HorlogeIcon} alt="Temps de lecture" className="w-4 h-4" />
                <span>5 min de lecture</span>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Partie2_lire_article_blog;
