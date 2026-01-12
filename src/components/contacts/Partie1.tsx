import Tel from "../../assets/Tel.png";
import Email from "../../assets/Email.png";
import Localisation from "../../assets/Localisation.png";
import Horaire from "../../assets/Horaire.png";

export default function Partie1() {
  return (
    <section className="bg-[#EAF7F5] py-22">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#0F172A]">
          Entrons en contact
        </h2>

        <p className="text-center text-gray-500 mt-4 max-w-2xl mx-auto">
          Notre équipe médicale est à votre écoute. Contactez-nous pour toute
          question ou pour prendre rendez-vous rapidement.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          
          {/* TELEPHONE */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <img
              src={Tel}
              alt="Téléphone"
              className="w-[50px] h-[50px] mx-auto object-contain"
              draggable={false}
            />
            <h3 className="font-semibold text-lg mt-4">Téléphone</h3>
            <p className="text-gray-600 mt-2 text-sm">
              +225 07 77 34 48 59
              <br />
              +225 27 22 26 94 03
            </p>
          </div>

          {/* EMAIL */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <img
              src={Email}
              alt="Email"
              className="w-[50px] h-[50px] mx-auto object-contain"
              draggable={false}
            />
            <h3 className="font-semibold text-lg mt-4">Email</h3>
            <p className="text-gray-600 mt-2 text-sm">
              info@clinique-life.com
              <br />
              Réponse sous 24h
            </p>
          </div>

          {/* ADRESSE */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <img
              src={Localisation}
              alt="Localisation"
              className="w-[50px] h-[50px] mx-auto object-contain"
              draggable={false}
            />
            <h3 className="font-semibold text-lg mt-4">Adresse</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Angré GESTOCI
              <br />
              300 m après Pharmacie Alliance
            </p>
          </div>

          {/* HORAIRES */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <img
              src={Horaire}
              alt="Horaires"
              className="w-[50px] h-[50px] mx-auto object-contain"
              draggable={false}
            />
            <h3 className="font-semibold text-lg mt-4">Horaires</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Ouvert 24h/24 - 7j/7
              <br />
              Service d’urgence disponible
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
