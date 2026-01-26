import AccueilCartes from "../components/accueils/AccueilCartes";
import AccueilCartesMobile from "../components/accueils/AccueilCartesMobile";
import Actualites from "../components/accueils/Actualites";
import Avantages from "../components/accueils/Avantages";
import Banniere from "../components/accueils/Banniere";
import Parcours from "../components/accueils/Parcour";
import Equipements from "../components/accueils/Equipements";

const Accueil: React.FC = () => {
  return (
    <div className="bg-[#D2DEEA] w-full">

      {/* HERO DESKTOP */}
      <section className="hidden md:block relative w-full h-screen md:h-[105vh] lg:h-[100vh]">
        <AccueilCartes />
      </section>

      {/* HERO MOBILE */}
      <section className="block md:hidden relative w-full">
        <AccueilCartesMobile />
      </section>

      {/* AVANTAGES */}
      <Avantages />

      {/* PARCOURS */}
      <Parcours />

      {/* ÉQUIPEMENTS */}
      <Equipements />

      {/* ACTUALITES */}
      <Actualites />

      {/* BANNIERE */}
      <Banniere />

    </div>
  );
};

export default Accueil;