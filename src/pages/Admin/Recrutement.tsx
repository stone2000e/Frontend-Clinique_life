import React, { useState } from "react";
import { Eye, Download, Check, X, Briefcase, FileText } from "lucide-react";

/* ================= TYPES ================= */
type Status = "En attente" | "Examinée" | "Acceptée" | "Refusée";

interface Candidature {
  id: number;
  nom: string;
  poste: string;
  email: string;
  telephone: string;
  message: string;
  date: string;
  statut: Status;
  lettreMotivation: string;
}

/* ================= DATA MOCK ================= */
const initialCandidatures: Candidature[] = [
  {
    id: 1,
    nom: "Dr. Kouadio Angèle",
    poste: "Médecin Gynécologue",
    email: "angelekouadio@email.com",
    telephone: "+225 07 11 22 33 44",
    message:
      "Je suis diplômée depuis 8 ans avec une expérience significative en obstétrique.",
    date: "2024-12-15",
    statut: "En attente",
    lettreMotivation: `Madame, Monsieur,

Diplômée de la Faculté de Médecine d'Abidjan en 2016, je me permets de vous adresser ma candidature pour le poste de Médecin Gynécologue au sein de votre prestigieux établissement.

Au cours de mes 8 années d'exercice au CHU de Cocody, j'ai développé une expertise solide en gynécologie-obstétrique, avec une spécialisation particulière dans la prise en charge des grossesses à risque. J'ai eu l'opportunité de suivre plus de 500 accouchements et de réaliser de nombreuses interventions chirurgicales gynécologiques.

Votre clinique jouit d'une excellente réputation pour son approche centrée sur la patiente et ses équipements de pointe. Ces valeurs résonnent profondément avec ma vision de la médecine moderne : allier excellence technique et humanité dans les soins.

Ma pratique médicale s'appuie sur une écoute attentive, une communication claire avec les patientes et une collaboration étroite avec l'équipe pluridisciplinaire. Je suis également formée aux techniques d'échographie obstétricale et de colposcopie.

Dynamique, rigoureuse et passionnée par mon métier, je serais honorée de contribuer à la mission de votre établissement et d'apporter mon expertise au service de vos patientes.

Je reste à votre disposition pour un entretien.

Cordialement,
Dr. Kouadio Angèle`,
  },
  {
    id: 2,
    nom: "Bamba Issouf",
    poste: "Infirmier",
    email: "issouf.bamba@email.com",
    telephone: "+225 05 55 66 77 88",
    message:
      "5 ans d'expérience en soins intensifs. Disponible immédiatement.",
    date: "2024-12-12",
    statut: "Examinée",
    lettreMotivation: `Madame, Monsieur,

Titulaire du Diplôme d'État d'Infirmier depuis 2019, je souhaite rejoindre votre équipe en tant qu'infirmier au sein de votre établissement.

Mon expérience de 5 ans au service de réanimation de l'Hôpital Général d'Abobo m'a permis de développer une expertise pointue dans la prise en charge des patients en état critique. J'ai acquis une maîtrise parfaite des gestes techniques d'urgence, de la surveillance des paramètres vitaux et de l'administration des traitements complexes.

Ce qui m'attire particulièrement dans votre clinique, c'est votre engagement envers l'excellence des soins et votre investissement dans la formation continue de vos équipes. Je suis convaincu que votre environnement professionnel stimulant me permettrait de continuer à progresser tout en contribuant activement à la qualité des soins.

Rigoureux, réactif et doté d'un excellent esprit d'équipe, je suis prêt à m'investir pleinement dans les missions qui me seront confiées.

Je suis disponible immédiatement et me tiens à votre disposition.

Cordialement,
Bamba Issouf`,
  },
  {
    id: 3,
    nom: "Koné Fatou",
    poste: "Sage-femme",
    email: "kone.fatou@email.com",
    telephone: "+225 01 23 45 67 89",
    message:
      "Passionnée par la santé maternelle avec 4 ans d'expérience.",
    date: "2024-12-10",
    statut: "Acceptée",
    lettreMotivation: `Madame, Monsieur,

Sage-femme diplômée d'État depuis 2020, je vous adresse ma candidature pour intégrer votre équipe de maternité.

Ma passion pour la santé maternelle et infantile s'est affirmée au cours de mes 4 années d'exercice au Centre de Santé Urbain d'Adjamé, où j'ai accompagné plus de 300 femmes dans leur parcours de grossesse et d'accouchement. Cette expérience m'a permis de développer une approche holistique de la maternité, prenant en compte les dimensions médicales, psychologiques et sociales.

Votre clinique se distingue par son approche bienveillante de la naissance et son respect du projet de naissance de chaque femme. Ces valeurs correspondent parfaitement à ma philosophie de soins : accompagner les femmes avec empathie, respect et professionnalisme.

Je suis formée à l'allaitement maternel, à la préparation à la naissance et à la rééducation périnéale. Ma maîtrise du français, de l'anglais et du baoulé me permet d'établir une communication de qualité avec des patientes d'horizons divers.

Bienveillante, à l'écoute et dotée d'une grande capacité d'adaptation, je serais ravie de mettre mes compétences au service de votre établissement.

Dans l'attente de vous rencontrer, je vous prie d'agréer mes salutations distinguées.

Koné Fatou`,
  },
];

/* ================= COMPONENT ================= */
const Recrutement: React.FC = () => {
  const [candidatures, setCandidatures] =
    useState<Candidature[]>(initialCandidatures);
  const [filterStatus, setFilterStatus] = useState<Status | "Toutes">("Toutes");
  const [filterPoste, setFilterPoste] = useState<string>("Tous les postes");
  const [openFilterStatus, setOpenFilterStatus] = useState(false);
  const [openFilterPoste, setOpenFilterPoste] = useState(false);
  const [selectedCandidature, setSelectedCandidature] = useState<Candidature | null>(null);
  const [showLettreMotivation, setShowLettreMotivation] = useState<Candidature | null>(null);

  // Extraire la liste unique des postes
  const postesUniques = ["Tous les postes", ...Array.from(new Set(candidatures.map(c => c.poste)))];

  // Filtrer les candidatures selon le statut ET le poste
  const filteredCandidatures = candidatures.filter(
    (c) => {
      const statusMatch = filterStatus === "Toutes" || c.statut === filterStatus;
      const posteMatch = filterPoste === "Tous les postes" || c.poste === filterPoste;
      return statusMatch && posteMatch;
    }
  );

  /* ===== Stats ===== */
  const stats = {
    total: candidatures.length,
    attente: candidatures.filter((c) => c.statut === "En attente").length,
    examinee: candidatures.filter((c) => c.statut === "Examinée").length,
    acceptee: candidatures.filter((c) => c.statut === "Acceptée").length,
  };

  const updateStatus = (id: number, statut: Status) => {
    setCandidatures((prev) =>
      prev.map((c) => (c.id === id ? { ...c, statut } : c))
    );
    if (selectedCandidature && selectedCandidature.id === id) {
      setSelectedCandidature({ ...selectedCandidature, statut });
    }
  };

  const badgeStyle = (statut: Status) => {
    switch (statut) {
      case "En attente":
        return "bg-yellow-100 text-yellow-700";
      case "Examinée":
        return "bg-blue-100 text-blue-700";
      case "Acceptée":
        return "bg-green-100 text-green-700";
      case "Refusée":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* ===== Header ===== */}
        <h1 className="text-3xl font-bold flex items-center gap-3 text-gray-900">
          <Briefcase className="text-orange-600" size={32} />
          Gestion du Recrutement
        </h1>

        {/* ===== Stats ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard label="Candidatures" value={stats.total} color="orange" />
          <StatCard label="En attente" value={stats.attente} color="yellow" />
          <StatCard label="Examinées" value={stats.examinee} color="blue" />
          <StatCard label="Acceptées" value={stats.acceptee} color="green" />
        </div>

        {/* ===== Filters ===== */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex flex-wrap gap-4">
            {/* Filtre Statut */}
            <div className="relative w-64">
              <label className="block text-xs font-medium text-gray-600 mb-1">Filtrer par statut</label>
              <button
                type="button"
                onClick={() => setOpenFilterStatus(!openFilterStatus)}
                className="w-full text-left border border-gray-300 rounded-xl px-4 py-2.5 flex justify-between items-center text-sm bg-white hover:bg-gray-50 transition"
              >
                <span className="font-medium text-gray-700">
                  {filterStatus === "Toutes" ? "Tous les statuts" : filterStatus}
                </span>
                <svg
                  className={`w-4 h-4 transition-transform text-gray-500 ${
                    openFilterStatus ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openFilterStatus && (
                <div className="absolute z-50 mt-2 w-full bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
                  <div className="max-h-64 overflow-y-auto">
                    {["Toutes", "En attente", "Examinée", "Acceptée", "Refusée"].map(
                      (status) => (
                        <button
                          key={status}
                          type="button"
                          onClick={() => {
                            setFilterStatus(status as Status | "Toutes");
                            setOpenFilterStatus(false);
                          }}
                          className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition text-gray-700 font-medium"
                        >
                          {status === "Toutes" ? "Tous les statuts" : status}
                        </button>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Filtre Poste */}
            <div className="relative w-64">
              <label className="block text-xs font-medium text-gray-600 mb-1">Filtrer par poste</label>
              <button
                type="button"
                onClick={() => setOpenFilterPoste(!openFilterPoste)}
                className="w-full text-left border border-gray-300 rounded-xl px-4 py-2.5 flex justify-between items-center text-sm bg-white hover:bg-gray-50 transition"
              >
                <span className="font-medium text-gray-700">
                  {filterPoste}
                </span>
                <svg
                  className={`w-4 h-4 transition-transform text-gray-500 ${
                    openFilterPoste ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openFilterPoste && (
                <div className="absolute z-50 mt-2 w-full bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
                  <div className="max-h-64 overflow-y-auto">
                    {postesUniques.map((poste) => (
                      <button
                        key={poste}
                        type="button"
                        onClick={() => {
                          setFilterPoste(poste);
                          setOpenFilterPoste(false);
                        }}
                        className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition text-gray-700 font-medium"
                      >
                        {poste}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bouton Reset */}
            {(filterStatus !== "Toutes" || filterPoste !== "Tous les postes") && (
              <button
                onClick={() => {
                  setFilterStatus("Toutes");
                  setFilterPoste("Tous les postes");
                }}
                className="self-end px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition"
              >
                Réinitialiser les filtres
              </button>
            )}
          </div>

          {/* Indicateur de résultats */}
          <div className="mt-3 text-sm text-gray-600">
            <span className="font-semibold">{filteredCandidatures.length}</span> candidature(s) trouvée(s)
          </div>
        </div>

        {/* ===== List ===== */}
        <div className="space-y-4">
          {filteredCandidatures.length === 0 && (
            <div className="bg-white rounded-2xl p-8 text-center">
              <p className="text-gray-400 text-sm">Aucune candidature trouvée avec ces filtres.</p>
            </div>
          )}

          {filteredCandidatures.map((c) => (
            <div
              key={c.id}
              className="bg-white rounded-2xl p-6 shadow-sm relative"
            >
              {/* Actions à droite */}
              <div className="absolute top-6 right-6 flex flex-col gap-2">
                <button
                  onClick={() => setSelectedCandidature(c)}
                  className="w-10 h-10 rounded-full bg-orange-100 hover:bg-orange-200 flex items-center justify-center transition"
                  title="Voir"
                >
                  <Eye size={18} className="text-orange-600" />
                </button>
                <button
                  onClick={() => setShowLettreMotivation(c)}
                  className="w-10 h-10 rounded-full bg-purple-100 hover:bg-purple-200 flex items-center justify-center transition"
                  title="Lettre de motivation"
                >
                  <FileText size={18} className="text-purple-600" />
                </button>
                <button
                  className="w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-200 flex items-center justify-center transition"
                  title="Télécharger"
                >
                  <Download size={18} className="text-blue-600" />
                </button>
                <button
                  onClick={() => updateStatus(c.id, "Acceptée")}
                  className="w-10 h-10 rounded-full bg-green-100 hover:bg-green-200 flex items-center justify-center transition"
                  title="Accepter"
                >
                  <Check size={18} className="text-green-600" />
                </button>
                <button
                  onClick={() => updateStatus(c.id, "Refusée")}
                  className="w-10 h-10 rounded-full bg-red-100 hover:bg-red-200 flex items-center justify-center transition"
                  title="Refuser"
                >
                  <X size={18} className="text-red-600" />
                </button>
              </div>

              {/* Contenu principal */}
              <div className="pr-20">
                {/* En-tête avec nom et statut */}
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{c.nom}</h3>
                  <span
                    className={`px-3 py-1 rounded-md text-xs font-medium ${badgeStyle(
                      c.statut
                    )}`}
                  >
                    {c.statut}
                  </span>
                </div>

                {/* Poste */}
                <div className="flex items-center gap-2 mb-6">
                  <Briefcase size={16} className="text-orange-600" />
                  <p className="text-orange-600 font-semibold">{c.poste}</p>
                </div>

                {/* Email et Téléphone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-6">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Email</p>
                    <p className="font-semibold text-gray-900">{c.email}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Téléphone</p>
                    <p className="font-semibold text-gray-900">{c.telephone}</p>
                  </div>
                </div>

                {/* Message */}
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2">Message du candidat</p>
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-700">
                    {c.message}
                  </div>
                </div>

                {/* Date */}
                <p className="text-xs text-gray-400">
                  Candidature déposée le {c.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== MODAL DÉTAILS ===== */}
      {selectedCandidature && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  Détails de la candidature
                </h2>
                <button
                  onClick={() => setSelectedCandidature(null)}
                  className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition"
                >
                  <X size={24} className="text-gray-600" />
                </button>
              </div>

              {/* Nom complet */}
              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-1">Nom complet</p>
                <p className="text-xl font-bold text-gray-900">
                  {selectedCandidature.nom}
                </p>
              </div>

              {/* Poste souhaité */}
              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-1">Poste souhaité</p>
                <p className="text-xl font-bold text-gray-900">
                  {selectedCandidature.poste}
                </p>
              </div>

              {/* Email et Téléphone */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <p className="font-bold text-gray-900">
                    {selectedCandidature.email}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Téléphone</p>
                  <p className="font-bold text-gray-900">
                    {selectedCandidature.telephone}
                  </p>
                </div>
              </div>

              {/* Message */}
              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-2">Message</p>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-700">
                  {selectedCandidature.message}
                </div>
              </div>

              {/* CV */}
              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-2">CV</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl flex items-center gap-2 transition">
                  <Download size={18} />
                  Télécharger le CV
                </button>
              </div>

              {/* Statut */}
              <div className="mb-8">
                <p className="text-sm text-gray-500 mb-2">Statut</p>
                <span
                  className={`inline-block px-4 py-2 rounded-lg text-sm font-semibold ${badgeStyle(
                    selectedCandidature.statut
                  )}`}
                >
                  {selectedCandidature.statut}
                </span>
              </div>

              {/* Date */}
              <p className="text-sm text-gray-500 mb-8">
                Candidature déposée le {selectedCandidature.date}
              </p>

              {/* Actions */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => {
                    updateStatus(selectedCandidature.id, "Acceptée");
                  }}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition text-lg"
                >
                  Accepter
                </button>
                <button
                  onClick={() => {
                    updateStatus(selectedCandidature.id, "Refusée");
                  }}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition text-lg"
                >
                  Refuser
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

     {/* ===== MODAL LETTRE DE MOTIVATION ===== */}
      {showLettreMotivation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <FileText size={24} className="text-purple-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Lettre de motivation
                    </h2>
                    <p className="text-sm text-gray-600">{showLettreMotivation.nom}</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowLettreMotivation(null)}
                  className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition"
                >
                  <X size={24} className="text-gray-600" />
                </button>
              </div>

              {/* Poste */}
              <div className="mb-6 bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="text-sm text-purple-600 font-medium mb-1">Poste sollicité</p>
                <p className="text-lg font-bold text-purple-900">
                  {showLettreMotivation.poste}
                </p>
              </div>

              {/* Contenu de la lettre */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <div className="prose prose-sm max-w-none">
                  <pre className="whitespace-pre-wrap font-sans text-gray-700 leading-relaxed">
{showLettreMotivation.lettreMotivation}
                  </pre>
                </div>
              </div>

              {/* Bouton Fermer */}
              <div className="mt-8">
                <button
                  onClick={() => setShowLettreMotivation(null)}
                  className="w-full px-6 py-3 border border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recrutement;

/* ================= UI ================= */
function StatCard({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: "orange" | "yellow" | "blue" | "green";
}) {
  const colors: any = {
    orange: "border-orange-500",
    yellow: "border-yellow-500",
    blue: "border-blue-500",
    green: "border-green-500",
  };

  return (
    <div
      className={`bg-white rounded-2xl p-6 shadow-sm border-l-4 ${colors[color]}`}
    >
      <p className="text-sm text-gray-600 mb-1">{label}</p>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
    </div>
  );
}