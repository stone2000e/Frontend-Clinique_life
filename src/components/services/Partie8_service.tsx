import React from "react";

/* ICÔNES */
import PersonIcon from "../../assets/person.png";
import ExclamationIcon from "../../assets/exclamation.png";
import VieIcon from "../../assets/vie.png";

type RuleItem = {
  title: string;
  description: string;
};

const rulesVie: RuleItem[] = [
  {
    title: "Boissons alcoolisées et produits illicites",
    description:
      "L'introduction de boissons alcoolisées et de produits illicites est interdite dans la Clinique.",
  },
  {
    title: "Nuisances sonores",
    description:
      "Le silence constitue l'un des éléments du confort et du rétablissement des patients. Il vous est demandé, ainsi qu'à vos visiteurs, de le respecter. Il est recommandé d'écouter de la musique à l'aide d'un casque et de veiller au volume sonore du téléviseur de votre chambre.",
  },
  {
    title: "Tabac",
    description:
      "Il est strictement interdit de fumer dans la Clinique.",
  },
  {
    title: "Téléphone portable",
    description:
      "En raison des risques de perturbations pouvant intervenir sur certains équipements médicaux, l'utilisation de téléphones portables à l'intérieur de la Clinique peut être restreinte. Si c'était le cas il vous sera demandé de mettre votre téléphone en mode arrêt.",
  },
  {
    title: "Visites",
    description:
      "La visite des proches est un moment réconfortant. Toutefois, pour des raisons d'hygiène et pour votre rétablissement, merci de limiter le nombre de visiteurs présents en même temps dans votre chambre. Par ailleurs, les enfants peuvent être porteurs de maladies spécifiques dont les répercussions sont parfois plus graves lorsqu'elles touchent des adultes et notamment des personnes affaiblies. C'est pourquoi d'une façon générale, il est déconseillé aux jeunes de moins de 15 ans de rendre visite aux patients.",
  },
  {
    title: "Comportement général",
    description:
      "Respecter et permettre le repos des autres patients, n'apporter aucune gêne au fonctionnement du service, avoir une tenue vestimentaire correcte lors de vos déplacements dans l'enceinte de la Clinique, maintenir en bon état les locaux et les objets mis à votre disposition, ne pas introduire d'animal dans l'enceinte de l'établissement.",
  },
];

const Partie8_service: React.FC = () => {
  return (
    <section className="w-full py-8 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* TITRE */}
        <div className="flex items-center gap-3 mb-3">
          <img src={PersonIcon} alt="Devoirs du patient" className="w-7 h-7" />
          <h2 className="text-xl font-semibold text-gray-900">
            Les devoirs du patient
          </h2>
        </div>

        {/* DESCRIPTION */}
        <p className="text-sm text-gray-500 mb-8 max-w-3xl">
          Durant votre séjour, vous serez amené à partager des espaces soumis à
          quelques règles élémentaires de vie, d'hygiène et de sécurité.
        </p>

        {/* BLOC 1 */}
        <div className="rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-10">
          <div className="px-6 py-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold">
            1. Respect des règles de vie
          </div>

          <div className="p-6 space-y-6 bg-white">
            {rulesVie.map((rule, index) => (
              <div key={index} className="flex items-start gap-4">
                <img
                  src={ExclamationIcon}
                  alt="Important"
                  className="w-5 h-5 mt-1"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">
                    {rule.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {rule.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BLOC 2 */}
        <div className="rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold">
            2. Respect des règles d'hygiène
          </div>

          <div className="p-6 bg-white">
            <div className="flex items-start gap-3">
              
              {/* ICÔNE AU DÉBUT DU TEXTE */}
              <img
                src={VieIcon}
                alt="Hygiène"
                className="w-7 h-7 mt-1"
              />

              <p className="text-sm text-gray-600 leading-relaxed">
                La lutte contre les infections nosocomiales : une infection est
                dite nosocomiale si elle est acquise en milieu hospitalier. Le
                seul moyen de lutte est la prévention. Celle-ci passe par des
                règles d'hygiène simples. La transmission des germes par les
                mains représente le mode principal de contamination en milieu
                hospitalier. Le lavage des mains du personnel soignant, des
                patients et des visiteurs est donc un des moyens efficaces de
                prévention. Vous trouverez un distributeur de solution
                hydroalcoolique dans chaque chambre, n'hésitez pas à
                l'utiliser pendant votre séjour ainsi que vos visiteurs.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Partie8_service;