import React from "react";
import { Mail, ArrowRight } from "lucide-react";

const Actualites: React.FC = () => {
  return (
    <section className="w-full bg-[#D2DEEA] py-20 lg:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT */}
        <div className="p-8 sm:p-12 lg:p-20">
          <div className="w-12 h-12 sm:w-14 sm:h-14 mb-6 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white shadow-md">
            <Mail size={22} />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Restez informé de nos <span className="text-blue-500">actualités</span>
          </h2>

          <p className="mt-4 sm:mt-6 text-gray-600 text-sm sm:text-base leading-relaxed">
            Abonnez-vous à notre newsletter pour recevoir nos conseils santé,
            nos actualités et nos offres exclusives directement dans votre boîte mail.
          </p>

          <div className="flex flex-wrap gap-4 sm:gap-6 mt-6 sm:mt-10 text-xs sm:text-sm">
            <span className="flex items-center gap-2 text-gray-500">
              <span className="w-2 h-2 bg-emerald-500 rounded-full" /> Conseils santé
            </span>
            <span className="flex items-center gap-2 text-gray-500">
              <span className="w-2 h-2 bg-blue-500 rounded-full" /> Actualités
            </span>
            <span className="flex items-center gap-2 text-gray-500">
              <span className="w-2 h-2 bg-cyan-500 rounded-full" /> Offres exclusives
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] p-8 sm:p-12 lg:p-20 text-white flex flex-col justify-center">
          <form className="space-y-4 sm:space-y-6">

            <div>
              <label className="text-xs sm:text-sm block mb-1 sm:mb-2">Nom complet</label>
              <input
                type="text"
                placeholder="Entrez votre nom"
                className="w-full px-4 sm:px-5 py-3 rounded-xl bg-white/10 placeholder-white/60 outline-none border border-white/20 focus:ring-2 focus:ring-white"
              />
            </div>

            <div>
              <label className="text-xs sm:text-sm block mb-1 sm:mb-2">Adresse email</label>
              <input
                type="email"
                placeholder="votre@email.com"
                className="w-full px-4 sm:px-5 py-3 rounded-xl bg-white/10 placeholder-white/60 outline-none border border-white/20 focus:ring-2 focus:ring-white"
              />
            </div>

            <label className="flex items-start gap-3 text-xs sm:text-sm opacity-90 cursor-pointer">
              <input type="checkbox" className="mt-1 accent-white" />
              J'accepte de recevoir les newsletters et communications de Clinique Life
            </label>

            <button
              type="submit"
              className="w-full mt-4 bg-white text-blue-600 font-semibold py-3 sm:py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.03] transition"
            >
              S'abonner maintenant <ArrowRight size={18} />
            </button>

            <p className="text-[10px] sm:text-xs text-center opacity-70 mt-2 sm:mt-4">
              Vos données sont protégées et ne seront jamais partagées.
            </p>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Actualites;
