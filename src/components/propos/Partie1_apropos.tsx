import React from "react";

// ✅ IMPORTS OBLIGATOIRES DES ASSETS
import consultationVideo from "../../assets/consultation.mp4";
import prevBtn from "../../assets/Button_prev.png";
import nextBtn from "../../assets/Button_next.png";
import autoScan from "../../assets/barre_auto_scan.png";

const Partie1_apropos: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center px-4 py-10 md:py-0 bg-gradient-to-b from-[#f4f8fb] to-[#e9f0f6]">

      {/* TITRE */}
      <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 text-center">
        Bienvenue à la Clinique Life
      </h1>

      <p className="text-gray-500 mb-8 text-center max-w-md sm:max-w-xl text-sm sm:text-base">
        Proches de vous, proches de la vie. Découvrez notre engagement pour votre santé.
      </p>

      {/* CARTE SYSTEM */}
      <div className="w-full max-w-5xl bg-[#eef3f8] rounded-2xl shadow-xl border border-gray-200">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 sm:px-6 py-3 border-b border-gray-300">
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              <span className="w-3 h-3 bg-red-400 rounded-full" />
              <span className="w-3 h-3 bg-yellow-400 rounded-full" />
              <span className="w-3 h-3 bg-green-400 rounded-full" />
            </div>

            <span className="text-[10px] sm:text-xs font-semibold text-cyan-600 tracking-widest">
              CLINIQUE LIFE SYSTEM
            </span>
          </div>

          <div className="flex items-center gap-4 text-[10px] sm:text-xs text-gray-500">
            <span>01/01/2026</span>
            <div className="flex gap-1">
              <span className="w-1.5 h-3 sm:h-4 bg-cyan-500 rounded" />
              <span className="w-1.5 h-3 sm:h-4 bg-cyan-400 rounded" />
              <span className="w-1.5 h-3 sm:h-4 bg-cyan-300 rounded" />
              <span className="w-1.5 h-3 sm:h-4 bg-cyan-200 rounded" />
            </div>
          </div>
        </div>

        {/* VIDEO */}
        <div className="p-4 sm:p-6">
          <div className="rounded-xl overflow-hidden border border-gray-300 bg-black">
            <video
              src={consultationVideo}
              className="w-full h-[220px] sm:h-[320px] md:h-[420px] object-cover"
              controls
              loop
              playsInline
              preload="metadata"
            />
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-4 sm:px-6 py-4">
          <div className="flex gap-4 justify-center sm:justify-start">
            <button type="button">
              <img src={prevBtn} alt="Previous" className="h-9 sm:h-10 w-auto" />
            </button>

            <button type="button">
              <img src={nextBtn} alt="Next" className="h-9 sm:h-10 w-auto" />
            </button>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-end">
            <img src={autoScan} alt="Auto scan" className="h-2 w-32 sm:w-40" />
            <span className="text-[10px] sm:text-xs font-medium text-cyan-600 tracking-wide">
              AUTO-SCAN
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Partie1_apropos;