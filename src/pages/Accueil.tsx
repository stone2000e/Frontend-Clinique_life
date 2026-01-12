import AccueilCartes from "../components/accueils/AccueilCartes";
import AccueilCartesMobile from "../components/accueils/AccueilCartesMobile";
import Actualites from "../components/accueils/Actualites";
import Avantages from "../components/accueils/Avantages";
import Banniere from "../components/accueils/Banniere";
import Parcours from "../components/accueils/Parcour";

const Accueil: React.FC = () => {
  return (
    <div className="bg-[#D2DEEA] w-full">

      {/* HERO */}
      <section
        className="
          relative
          min-h-[100vh]
          md:h-[105vh]
          lg:h-[100vh]
        "
      >
        {/* DESKTOP */}
        <div className="hidden md:block h-full">
          <AccueilCartes />
        </div>

        {/* MOBILE */}
        <div className="block md:hidden">
          <AccueilCartesMobile />
        </div>
      </section>

      {/* AVANTAGES */}
      <Avantages />

      {/* PARCOURS */}
      <Parcours />

       {/* ACTUALITES */}
      <Actualites />

             {/* BANNIERE */}
      <Banniere />


    </div>
  );
};

export default Accueil;
