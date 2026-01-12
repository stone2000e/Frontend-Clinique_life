import React from "react";
import Batiment from "../../assets/clinique.png";

// ICONES
import Securite from "../../assets/Securite.png";
import Temps from "../../assets/Temps.png";
import Recompense from "../../assets/Recompense.png";
import Coeur from "../../assets/Coeur.png";
import { Link } from "react-router-dom";

const avantages = [
  {
    title: "Expertise & Sécurité",
    text: "Professionnels aux compétences avérées et démarche qualité stricte",
    icon: Securite,
  },
  {
    title: "Disponibilité 24/7",
    text: "Service d’urgence disponible jour et nuit pour votre tranquillité",
    icon: Temps,
  },
  {
    title: "Équipements modernes",
    text: "Technologies de pointe pour des diagnostics précis et fiables",
    icon: Recompense,
  },
  {
    title: "Soins personnalisés",
    text: "Approche humaine et écoute attentive de vos besoins de santé",
    icon: Coeur,
  },
];

const Avantages: React.FC = () => {
  return (
    <section className="w-full bg-white py-24 px-6">
      
      {/* ================= TITRE ================= */}
      <div className="text-center max-w-4xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Pourquoi choisir{" "}
          <span className="text-cyan-500">CLINIQUE LIFE</span> ?
        </h2>
        <p className="mt-6 text-lg text-gray-600">
          Une prise en charge humaine, moderne et fiable <br />
          pour votre santé
        </p>
      </div>

      {/* ================= CONTENU ================= */}
      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* ===== CARTES ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:pl-16 xl:pl-24">
  {avantages.map((item, index) => (
    <div
      key={index}
      className="
        bg-cyan-50
        border border-cyan-200
        rounded-2xl
        p-8
        shadow-md
        hover:shadow-lg
        transition
      "
    >
      <img
        src={item.icon}
        alt={item.title}
        className="w-14 h-14 mb-5 object-contain"
      />

      <h3 className="text-lg font-semibold text-gray-900 mb-3">
        {item.title}
      </h3>
      <p className="text-gray-600 text-base leading-relaxed">
        {item.text}
      </p>
    </div>
  ))}
</div>
  
  

        {/* ===== IMAGE (LIBRE) ===== */}
  <div className="flex justify-center lg:justify-end">
  <img
    src={Batiment}
    alt="Clinique Life"
    className="
      w-full
      max-w-[820px]
      max-h-[720px]
      object-contain
    "
  />
</div>

      </div>

      {/* ================= BOUTON ================= */}
   <div className="flex justify-center mt-20">
 <Link
  to="/services"
  className="
    px-12 py-4
    border-2 border-[#2B7FFF]
    text-[#2B7FFF]
    text-lg
    font-semibold
    rounded-xl
    hover:bg-[#2B7FFF]
    hover:text-white
    transition-all
    duration-300
    inline-block
  "
>
  Voir tous les services
</Link>
</div>
    </section>
  );
};

export default Avantages;
