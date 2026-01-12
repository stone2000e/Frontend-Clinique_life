import React from "react";

type TeamMember = {
  name: string;
  role: string;
  specialty: string;
};

const team: TeamMember[] = [
  {
    name: "Dr. Kouassi Emmanuel",
    role: "Directeur Médical",
    specialty: "20 ans d'expérience en médecine générale",
  },
  {
    name: "Dr. Aminata Traoré",
    role: "Pédiatre",
    specialty: "Spécialiste en santé infantile et néonatale",
  },
  {
    name: "Mme. Adjoua Koffi",
    role: "Infirmière en Chef",
    specialty: "15 ans d'expérience en soins d'urgence",
  },
  {
    name: "Dr. Yao Franck",
    role: "Cardiologue",
    specialty: "Expert en maladies cardiovasculaires",
  },
  {
    name: "Dr. Bamba Mariam",
    role: "Gynécologue",
    specialty: "Spécialiste en santé de la femme",
  },
  {
    name: "M. Koné Ibrahim",
    role: "Technicien Laboratoire",
    specialty: "Analyses médicales et biologie",
  },
];

const Partie4_apropos: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-3xl font-semibold text-gray-900 mb-2">
          Notre Équipe
        </h2>
        <p className="text-gray-500 mb-14">
          Des professionnels qualifiés et dévoués à votre service
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 justify-items-center">
          {team.map((member, index) => (
            <div
              key={index}
              className="w-full max-w-[320px] bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col"
            >
              {/* HAUT */}
              <div className="flex items-center justify-center bg-gradient-to-br from-blue-100 to-cyan-100 py-10">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="white"
                    className="w-9 h-9"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0"
                    />
                  </svg>
                </div>
              </div>

              {/* BAS TEXTE — MARGE BLANCHE RÉDUITE */}
              <div className="px-5 pt-4 pb-3 text-left bg-white">
                <h3 className="font-semibold text-gray-900 text-base mb-1">
                  {member.name}
                </h3>
                <p className="text-sky-600 text-sm font-medium mb-1">
                  {member.role}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {member.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Partie4_apropos;