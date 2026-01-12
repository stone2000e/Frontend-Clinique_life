import React from "react";
import { Share2 } from "lucide-react";

// Icônes réseaux
import FacebookIcon from "../../assets/fb.png";
import TwitterIcon from "../../assets/twitter.png";
import LinkedinIcon from "../../assets/linkedin.png";

// Icônes personnalisées
import AmpouleIcon from "../../assets/ampoule.png";
import BilanIcon from "../../assets/icon_bilan.png";

const Partie2_lire_article_blog4: React.FC = () => {
  return (
    <section className="w-full px-4 py-16 md:py-24 bg-gradient-to-b from-[#f5fbff] to-white">
      <div className="max-w-5xl mx-auto space-y-10 md:space-y-12">

        {/* =======================
            BLOC TEXTE PRINCIPAL
        ======================= */}
        <div className="bg-white rounded-2xl shadow-xl px-6 py-8 md:px-10 md:py-10">

          {/* TITRE */}
          <h2
            className="
              text-base sm:text-lg md:text-2xl
              font-semibold text-gray-900
              mb-5 md:mb-6
              leading-snug md:leading-normal
              break-words
            "
          >
            Comment se déroule un bilan à la Clinique Life ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 text-gray-700 text-[14.5px] sm:text-sm leading-relaxed">
            <p>
              À la Clinique Life, nous avons conçu un parcours de bilan de santé
              complet et personnalisé. Vous commencez par un entretien approfondi
              avec l’un de nos médecins qui évalue vos antécédents médicaux et
              familiaux.
            </p>

            <p>
              Ensuite, vous réalisez les examens nécessaires dans nos laboratoires
              équipés de technologies de pointe. Tous les résultats sont
              centralisés et analysés par votre médecin référent qui vous reçoit
              pour un compte-rendu détaillé et des recommandations personnalisées.
            </p>
          </div>
        </div>

        {/* =======================
            BLOC CONCLUSION
        ======================= */}
        <div className="bg-gradient-to-r from-[#1e6cff] to-[#00a6d6] rounded-2xl px-6 py-8 md:px-10 md:py-10 text-white shadow-xl">
          <div className="flex items-start gap-4">
            <img
              src={AmpouleIcon}
              alt="Conseil"
              className="w-7 h-7 flex-shrink-0"
            />

            <div>
              <h3 className="text-base md:text-lg font-semibold mb-3">
                En conclusion
              </h3>
              <p className="text-sm md:text-[15px] leading-relaxed text-white/90">
                Prendre soin de sa santé est un investissement sur le long terme.
                N’attendez pas l’apparition de symptômes pour consulter. Un bilan
                régulier vous permet de rester acteur de votre santé et de
                bénéficier d’une prise en charge précoce en cas de besoin.
              </p>
            </div>
          </div>
        </div>

        {/* =======================
            MOTS-CLÉS + PARTAGE
        ======================= */}
        <div className="bg-white rounded-2xl shadow-lg px-6 py-7 md:px-10 md:py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* MOTS-CLÉS */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <img src={BilanIcon} alt="" className="w-4 h-4" />
              Mots-clés
            </h4>

            <div className="flex flex-wrap gap-2 md:gap-3">
              {["Santé", "Prévention", "Bilan"].map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs bg-blue-50 text-blue-600 font-medium"
                >
                  <img src={BilanIcon} alt="" className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* PARTAGE */}
          <div className="w-full md:w-auto">
            <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              Partager cet article
            </h4>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white text-xs font-medium hover:bg-blue-700 transition">
                <img src={FacebookIcon} alt="" className="w-4 h-4" />
                Facebook
              </button>

              <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-sky-500 text-white text-xs font-medium hover:bg-sky-600 transition">
                <img src={TwitterIcon} alt="" className="w-4 h-4" />
                Twitter
              </button>

              <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-blue-700 text-white text-xs font-medium hover:bg-blue-800 transition">
                <img src={LinkedinIcon} alt="" className="w-4 h-4" />
                LinkedIn
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Partie2_lire_article_blog4;
