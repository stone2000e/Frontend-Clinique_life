import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Banniere: React.FC = () => {
  return (
    <section className="w-full relative overflow-hidden">
      <div className="bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] py-32 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">

          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
            Prêt à prendre soin de votre santé ?
          </h1>

          <p className="mt-6 text-lg lg:text-xl opacity-90 max-w-2xl">
            Prenez rendez-vous dès aujourd'hui et bénéficiez de soins de qualité
          </p>

          <Link
  to="/contact"
  className="mt-12 bg-white text-blue-600 font-semibold px-10 py-4 rounded-2xl shadow-xl hover:scale-105 transition flex items-center gap-3"
>
  Contactez-nous
  <ArrowRight size={20} />
</Link>

        </div>
      </div>
    </section>
  );
};

export default Banniere;
