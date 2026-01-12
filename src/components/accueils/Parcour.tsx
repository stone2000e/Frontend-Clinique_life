import { CalendarDays, ClipboardList, Stethoscope, FileText } from "lucide-react";

// Liste des logos qui ont besoin d'être plus grands
const largeLogos = ["AWOUNDJO.png", "GGA.png", "CIMEF.png", "CNPS.png", "SYNACASS.png","SEVEN.png", "MUSATRAP.png", "MUSATRAP.png", "Transvie.png",
  "Utrep.png",  "Ankara.png",
  "Ascoma.png",
  "Atlantique.png",];

const partnerLogos = [
  "Allianz.png",
  "Amsa.png",
  "Ankara.png",
  "Ascoma.png",
  "Atlantique.png",
  "AWOUNDJO.png",
  "BIAM.png",
  "CIMEF.png",
  "CNPS.png",
  "ERMA.png",
  "GAMCA.png",
  "GESTOCI.png",
  "GGA.png",
  "GOLDEN.png",
  "Henner.png",
  "IIPS.png",
  "INTER.png",
  "Jayme.png",
  "KESCARS.png",
  "MADGI.png",
  "MAECI.png",
  "MCI.png",
  "Medexa.png",
  "MGS.png",
  "MUGAS.png",
  "MUNASSUR.png",
  "MUPEMENET.png",
  "MUSATRAP.png",
  "NAOURA.png",
  "Novelia.png",
  "NSIA.png",
  "OLEA.png",
  "SCA.png",
  "Serenity.png",
  "SEVEN.png",
  "Sipro.png",
  "SUNU.png",
  "SYNACASS.png",
  "Transvie.png",
  "Utrep.png",
  "Vitalis.png",
  "VITASANTE.png",
  "Willis.png",
];

const steps = [
  {
    id: "01",
    title: "Prise de rendez-vous",
    text: "Réservez votre créneau en ligne ou par téléphone avec confirmation immédiate",
    icon: CalendarDays,
  },
  {
    id: "02",
    title: "Accueil à la clinique",
    text: "Présentez-vous 10 min avant pour la mise à jour de votre dossier",
    icon: ClipboardList,
  },
  {
    id: "03",
    title: "La Consultation",
    text: "Examen médical complet avec diagnostic personnalisé sur place",
    icon: Stethoscope,
  },
  {
    id: "04",
    title: "Suivi & Documents",
    text: "Ordonnances et documents médicaux avec planification du suivi",
    icon: FileText,
  },
];

export default function Parcours() {
  return (
    <div className="w-full bg-white">
      {/* Section Partenaires avec scroll automatique */}
      <div className="w-full bg-white py-8 overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
          Nos partenaires
        </h2>
        <div className="relative">
          <div className="flex animate-scroll-continuous">
            {/* Première série complète de logos */}
            {partnerLogos.map((logo, i) => (
              <div key={`first-${i}`} className="flex-shrink-0 mx-8">
                <img 
                  src={`/src/assets/assurances/${logo}`}
                  alt=""
                  className={largeLogos.includes(logo) ? "h-28 w-40 object-contain" : "h-20 w-32 object-contain"}
                  onError={(e) => {
                    console.log(`Erreur: ${logo}`);
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            ))}
            {/* Deuxième série complète pour effet infini */}
            {partnerLogos.map((logo, i) => (
              <div key={`second-${i}`} className="flex-shrink-0 mx-8">
                <img 
                  src={`/src/assets/assurances/${logo}`}
                  alt=""
                  className={largeLogos.includes(logo) ? "h-28 w-40 object-contain" : "h-20 w-32 object-contain"}
                  onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section Parcours de soins */}
      <section className="w-full py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block mb-6 px-6 py-2 border-2 border-cyan-400 text-cyan-500 rounded-full text-sm font-medium">
            Parcours de soins
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Votre consultation en toute simplicité
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-500">
            Nous avons simplifié chaque étape pour que vous puissiez vous concentrer
            sur ce qui compte le plus : votre santé.
          </p>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative flex justify-center">
                  {/* Ligne de connexion */}
                  {index !== steps.length - 1 && (
                    <div className="hidden lg:block absolute top-[62px] right-[-60px] w-[100px] h-[4px] bg-gradient-to-r from-cyan-400 to-transparent" />
                  )}

                  {/* Carte */}
                  <div className="bg-white rounded-2xl shadow-lg px-6 py-8 text-center w-[260px] hover:shadow-xl transition-shadow duration-300">
                    <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-white">
                      <Icon size={26} />
                    </div>

                    <div className="text-5xl font-extrabold text-gray-100 mb-2">
                      {step.id}
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes scroll-continuous {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-continuous {
          animation: scroll-continuous 60s linear infinite;
          display: flex;
          width: max-content;
        }

        .animate-scroll-continuous:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}