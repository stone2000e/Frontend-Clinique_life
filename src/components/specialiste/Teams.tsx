import React, { useState } from "react";
import { Activity, Heart, Users, Eye, Clock, Phone, Mail, X } from "lucide-react";

type Specialist = {
  id: number;
  name: string;
  title: string;
  specialty: string;
  experience: string;
  image: string;
  iconBg: string;
  icon: React.ReactNode;
  bio: string;
  qualifications: string[];
  languages: string[];
  schedule: string;
  phone: string;
  email: string;
};

const specialists: Specialist[] = [
  {
    id: 1,
    name: "Dr. Kouassi Emmanuel",
    title: "Directeur Médical",
    specialty: "Médecine Générale",
    experience: "20 ans d'expérience",
    image: "/images/doctors/kouassi.jpg",
    iconBg: "bg-blue-500",
    icon: <Activity className="w-6 h-6 text-white" />,
    bio: "Le Dr. Kouassi Emmanuel dirige la Clinique Life depuis sa création. Avec plus de 20 ans d'expérience en médecine générale et interne, il s'est spécialisé dans la prise en charge globale des patients. Sa vision holistique de la santé et son engagement envers l'excellence ont fait de notre clinique une référence en Côte d'Ivoire.",
    qualifications: [
      "Doctorat en Médecine - Université d'Abidjan",
      "Spécialisation en Médecine Interne",
      "Diplôme de Management Hospitalier",
    ],
    languages: ["Français", "Anglais", "Baoulé"],
    schedule: "Lundi - Vendredi: 8h - 17h",
    phone: "+225 07 77 34 48 59",
    email: "dr.kouassi@clinique-life.com",
  },
  {
    id: 2,
    name: "Dr. Aminata Traoré",
    title: "Pédiatre",
    specialty: "Pédiatrie et Néonatologie",
    experience: "15 ans d'expérience",
    image: "/images/doctors/aminata.jpg",
    iconBg: "bg-pink-500",
    icon: <Heart className="w-6 h-6 text-white" />,
    bio: "Spécialiste reconnue en pédiatrie et néonatologie, le Dr. Aminata Traoré accompagne les familles avec bienveillance depuis plus de 15 ans. Son approche douce et son expertise font d'elle une référence pour les soins infantiles.",
    qualifications: [
      "Doctorat en Médecine - Université de Cocody",
      "Spécialisation en Pédiatrie",
      "Formation en Néonatologie - France",
    ],
    languages: ["Français", "Bambara"],
    schedule: "Lundi - Samedi: 9h - 16h",
    phone: "+225 05 12 34 56 78",
    email: "dr.traore@clinique-life.com",
  },
  {
    id: 3,
    name: "Dr. Yao Franck",
    title: "Cardiologue",
    specialty: "Cardiologie",
    experience: "18 ans d'expérience",
    image: "/images/doctors/yao.jpg",
    iconBg: "bg-red-500",
    icon: <Activity className="w-6 h-6 text-white" />,
    bio: "Expert en maladies cardiovasculaires, le Dr. Yao Franck apporte son expertise dans le diagnostic et le traitement des pathologies cardiaques. Sa rigueur et son professionnalisme assurent une prise en charge optimale.",
    qualifications: [
      "Doctorat en Médecine - Université d'Abidjan",
      "Spécialisation en Cardiologie",
      "Formation en Échographie Cardiaque",
    ],
    languages: ["Français", "Anglais"],
    schedule: "Lundi - Vendredi: 8h - 15h",
    phone: "+225 07 23 45 67 89",
    email: "dr.yao@clinique-life.com",
  },
  {
    id: 4,
    name: "Dr. Bamba Mariam",
    title: "Gynécologue",
    specialty: "Gynécologie et Obstétrique",
    experience: "12 ans d'expérience",
    image: "/images/doctors/bamba.jpg",
    iconBg: "bg-purple-500",
    icon: <Heart className="w-6 h-6 text-white" />,
    bio: "Spécialisée en gynécologie et obstétrique, le Dr. Bamba Mariam accompagne les femmes à chaque étape de leur vie. Son empathie et son professionnalisme créent un environnement de confiance.",
    qualifications: [
      "Doctorat en Médecine - Université de Bouaké",
      "Spécialisation en Gynécologie-Obstétrique",
      "Formation en Échographie Obstétricale",
    ],
    languages: ["Français", "Dioula"],
    schedule: "Lundi - Samedi: 9h - 17h",
    phone: "+225 01 98 76 54 32",
    email: "dr.bamba@clinique-life.com",
  },
  {
    id: 5,
    name: "Dr. N'Guessan André",
    title: "Neurologue",
    specialty: "Neurologie",
    experience: "16 ans d'expérience",
    image: "/images/doctors/nguessan.jpg",
    iconBg: "bg-indigo-500",
    icon: <Clock className="w-6 h-6 text-white" />,
    bio: "Le Dr. N'Guessan André est un neurologue expérimenté spécialisé dans les troubles neurologiques. Son approche méthodique et son expertise permettent des diagnostics précis.",
    qualifications: [
      "Doctorat en Médecine - Université d'Abidjan",
      "Spécialisation en Neurologie",
      "Formation en Neurophysiologie",
    ],
    languages: ["Français", "Anglais", "Agni"],
    schedule: "Mardi - Samedi: 10h - 18h",
    phone: "+225 07 65 43 21 09",
    email: "dr.nguessan@clinique-life.com",
  },
  {
    id: 6,
    name: "Dr. Koné Sarah",
    title: "Ophtalmologue",
    specialty: "Ophtalmologie",
    experience: "10 ans d'expérience",
    image: "/images/doctors/kone.jpg",
    iconBg: "bg-teal-500",
    icon: <Eye className="w-6 h-6 text-white" />,
    bio: "Spécialiste en ophtalmologie, le Dr. Koné Sarah offre des soins oculaires de qualité avec les technologies les plus modernes. Sa précision et son attention aux détails garantissent les meilleurs résultats.",
    qualifications: [
      "Doctorat en Médecine - Université de Cocody",
      "Spécialisation en Ophtalmologie",
      "Formation en Chirurgie Réfractive",
    ],
    languages: ["Français", "Anglais"],
    schedule: "Lundi - Vendredi: 8h - 16h",
    phone: "+225 05 87 65 43 21",
    email: "dr.kone@clinique-life.com",
  },
];

const Teams: React.FC = () => {
  const [selectedSpecialist, setSelectedSpecialist] = useState<Specialist | null>(null);

  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* GRILLE DES SPÉCIALISTES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialists.map((specialist) => (
            <div
              key={specialist.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
            >
              {/* IMAGE AVEC ICÔNE */}
              <div className="relative h-64 bg-gradient-to-b from-gray-200 to-gray-300">
                <img
                  src={specialist.image}
                  alt={specialist.name}
                  className="w-full h-full object-cover"
                />
                {/* ICÔNE SPÉCIALITÉ */}
                <div
                  className={`absolute top-4 right-4 w-12 h-12 ${specialist.iconBg} rounded-xl flex items-center justify-center shadow-lg`}
                >
                  {specialist.icon}
                </div>
                {/* OVERLAY GRADIENT */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
                {/* NOM ET TITRE */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">{specialist.name}</h3>
                  <p className="text-sm text-teal-300">{specialist.title}</p>
                </div>
              </div>

              {/* CONTENU */}
              <div className="p-6">
                {/* SPÉCIALITÉ */}
                <div className="flex items-center gap-2 text-gray-700 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-blue-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                    />
                  </svg>
                  <span className="text-sm font-medium">{specialist.specialty}</span>
                </div>

                {/* EXPÉRIENCE */}
                <div className="flex items-center gap-2 text-gray-700 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-teal-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                    />
                  </svg>
                  <span className="text-sm">{specialist.experience}</span>
                </div>

                {/* BOUTON VOIR LE PROFIL */}
                <button
                  onClick={() => setSelectedSpecialist(specialist)}
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium py-3 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  Voir le profil
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.964 0a9 9 0 10-11.964 0m11.964 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODALE DE PROFIL */}
      {selectedSpecialist && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* HEADER GRADIENT */}
            <div className="relative h-48 bg-gradient-to-r from-blue-600 via-blue-500 to-teal-400 rounded-t-3xl">
              {/* BOUTON FERMER */}
              <button
                onClick={() => setSelectedSpecialist(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

            
            </div>

            {/* CONTENU */}
            <div className="p-8 pt-20">
              {/* NOM ET TITRE */}
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {selectedSpecialist.name}
              </h2>
              <p className="text-blue-600 font-semibold text-lg mb-1">
                {selectedSpecialist.title}
              </p>
              <p className="text-gray-600 mb-6">{selectedSpecialist.specialty}</p>

              {/* BIOGRAPHIE */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900 text-lg">Biographie</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{selectedSpecialist.bio}</p>
              </div>

              {/* QUALIFICATIONS ET LANGUES */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* QUALIFICATIONS */}
                <div className="bg-blue-50 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-blue-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                      />
                    </svg>
                    <h4 className="font-semibold text-gray-900">Qualifications</h4>
                  </div>
                  <ul className="space-y-2">
                    {selectedSpecialist.qualifications.map((qual, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{qual}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* LANGUES ET HORAIRES */}
                <div>
                  {/* LANGUES */}
                  <div className="bg-teal-50 rounded-xl p-5 mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="w-5 h-5 text-teal-600" />
                      <h4 className="font-semibold text-gray-900">Langues parlées</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedSpecialist.languages.map((lang, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* HORAIRES */}
                  <div className="bg-gray-50 rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-gray-600" />
                      <h4 className="font-semibold text-gray-900">Horaires de consultation</h4>
                    </div>
                    <p className="text-sm text-gray-700">{selectedSpecialist.schedule}</p>
                  </div>
                </div>
              </div>

              {/* CONTACT ET RENDEZ-VOUS */}
              <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-xl mb-4">Contact et rendez-vous</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* TÉLÉPHONE */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-white/80">Téléphone</p>
                      <p className="font-semibold">{selectedSpecialist.phone}</p>
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-white/80">Email</p>
                      <p className="font-semibold text-sm">{selectedSpecialist.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Teams;