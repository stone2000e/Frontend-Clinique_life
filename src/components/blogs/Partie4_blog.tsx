import React from "react";

const Partie4_blog: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-r from-blue-600 via-sky-500 to-teal-400 pt-16 pb-6 px-4">
      <div className="max-w-4xl mx-auto text-center text-white">

        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Restez informé de nos actualités
        </h2>

        <p className="text-sm md:text-base text-white/90 mb-8">
          Inscrivez-vous à notre newsletter pour recevoir nos derniers articles
          et conseils santé
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="Votre adresse email"
            className="w-full sm:w-[320px] rounded-lg bg-white/15 px-4 py-3 text-sm text-white placeholder-white/70 outline-none ring-1 ring-white/30 focus:ring-2 focus:ring-white"
          />

          <button
            type="submit"
            className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow hover:bg-gray-100 transition"
          >
            S’abonner
          </button>
        </form>
      </div>
    </section>
  );
};

export default Partie4_blog;
