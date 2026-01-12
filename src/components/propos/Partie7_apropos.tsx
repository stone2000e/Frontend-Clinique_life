import React from "react";

/* ICÔNES */
import DroitIcon from "../../assets/droi.png";
import Droit1 from "../../assets/droit1.png";
import DocIcon from "../../assets/doc.png";
import CheckIcon from "../../assets/check_forme.png";
import BebeIcon from "../../assets/bebe2.png";

type RightItem = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

const rights: RightItem[] = [
  {
    id: 1,
    title: "Garantir le secret",
    description:
      "La Clinique LIFE est tenue de garantir le secret de l’ensemble des informations de caractère médical et social vous concernant. Cette obligation de secret professionnel s’applique à tous les professionnels, salariés et bénévoles, intervenant dans l’établissement. Si vous le souhaitez, vous pouvez demander à ce que votre présence ne soit pas communiquée.",
    icon: Droit1,
  },
  {
    id: 2,
    title: "Information sur votre état de santé",
    description:
      "Vous avez le droit d’être informé sur votre état de santé. Cette information porte sur les différentes investigations, traitements ou actions qui vous sont proposés, leur utilité, leur urgence éventuelle, leurs conséquences, les risques fréquents ou graves normalement prévisibles qu’ils comportent, ainsi que sur les autres solutions possibles et sur les conséquences prévisibles en cas de refus. Seule l’urgence ou l’impossibilité d’informer peut dispenser le professionnel de santé de cette obligation.",
    icon: DocIcon,
  },
  {
    id: 3,
    title: "Consentement aux soins",
    description:
      "Aucun acte médical ni aucun traitement ne peuvent être pratiqués sans votre consentement libre et éclairé et ce consentement peut être retiré à tout moment. En revanche si vos décisions mettent votre vie en danger, il est du devoir du médecin de tout faire pour vous convaincre d’accepter les soins qui s’imposent.",
    icon: CheckIcon,
  },
  {
    id: 4,
    title: "Cas des enfants mineurs",
    description:
      "Les décisions concernant votre santé relèvent, pour les mineurs, des titulaires de l’autorité parentale. Néanmoins vous avez le droit dans la mesure du possible, de recevoir vous-même une information et de participer à la prise de décision.",
    icon: BebeIcon,
  },
];

const Partie7_apropos: React.FC = () => {
  return (
    <section className="w-full py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* BADGE */}
        <div className="flex justify-center mb-6">
          <span className="px-5 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-teal-400">
            Informations importantes
          </span>
        </div>

        {/* TITRE */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-4">
          Droits et devoirs du patient
        </h2>

        {/* DESCRIPTION */}
        <p className="text-center text-gray-500 max-w-3xl mx-auto mb-16 text-sm leading-relaxed">
          La CLINIQUE LIFE veille à respecter votre dignité et ne fait aucune
          discrimination dans l’accès à la prévention et aux soins. Les équipes
          vous assurent un droit au respect de votre vie privée et au secret
          professionnel.
        </p>

        {/* SOUS-TITRE */}
        <div className="flex items-center gap-4 mb-10">
          <img src={DroitIcon} alt="Droits du patient" className="w-9 h-9" />
          <h3 className="text-lg font-semibold text-gray-900">
            Les droits du patient
          </h3>
        </div>

        {/* CARTES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rights.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-br from-[#f5fbff] to-white border border-blue-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition"
            >
              {/* IMAGE + TITRE ALIGNÉS */}
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 object-contain"
                />

                <h4 className="font-semibold text-gray-900 text-base">
                  {item.id}. {item.title}
                </h4>
              </div>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Partie7_apropos;
