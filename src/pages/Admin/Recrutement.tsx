import React, { useState } from "react";
import { Eye, Download, Check, X, Briefcase } from "lucide-react";

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
  },
];

/* ================= COMPONENT ================= */
const Recrutement: React.FC = () => {
  const [candidatures, setCandidatures] =
    useState<Candidature[]>(initialCandidatures);
  const [filter, setFilter] = useState<Status | "Toutes">("Toutes");
  const [openFilter, setOpenFilter] = useState(false);
  const [selectedCandidature, setSelectedCandidature] = useState<Candidature | null>(null);

  // Filtrer les candidatures selon le dropdown
  const filteredCandidatures = candidatures.filter(
    (c) => filter === "Toutes" || c.statut === filter
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

        {/* ===== Filter ===== */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="relative w-64">
            <button
              type="button"
              onClick={() => setOpenFilter(!openFilter)}
              className="w-full text-left border border-gray-300 rounded-xl px-4 py-2.5 flex justify-between items-center text-sm bg-white hover:bg-gray-50 transition"
            >
              <span className="font-medium text-gray-700">
                {filter === "Toutes" ? "Toutes les candidatures" : filter}
              </span>
              <svg
                className={`w-4 h-4 transition-transform text-gray-500 ${
                  openFilter ? "rotate-180" : ""
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

            {openFilter && (
              <div className="absolute z-50 mt-2 w-full bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
                <div className="max-h-64 overflow-y-auto">
                  {["Toutes", "En attente", "Examinée", "Acceptée", "Refusée"].map(
                    (status) => (
                      <button
                        key={status}
                        type="button"
                        onClick={() => {
                          setFilter(status as Status | "Toutes");
                          setOpenFilter(false);
                        }}
                        className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition text-gray-700 font-medium"
                      >
                        {status === "Toutes"
                          ? "Toutes les candidatures"
                          : status}
                      </button>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ===== List ===== */}
        <div className="space-y-4">
          {filteredCandidatures.length === 0 && (
            <div className="bg-white rounded-2xl p-8 text-center">
              <p className="text-gray-400 text-sm">Aucune candidature trouvée.</p>
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

      {/* ===== MODAL ===== */}
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