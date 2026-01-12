import React from "react";
import { Calendar, MessageSquare, Briefcase } from "lucide-react";

const VueEnsemble: React.FC = () => {
  return (
    <div className=" space-y-6 bg-[#F5FBFC] min-h-screen">

      {/* ===== Header ===== */}
      <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-teal-400 p-6 text-white">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          Bienvenue, Administrateur 1 👋
        </h1>
        <p className="text-sm opacity-90 mt-1">
          Voici un aperçu de votre tableau de bord
        </p>
      </div>

     {/* ===== Statistiques ===== */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">

  {/* Rendez-vous */}
  <div className="bg-white rounded-xl p-5 shadow-sm">
    <div className="flex justify-between items-start">
      <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
        <Calendar size={20} />
      </div>
      <span className="text-green-600 text-sm font-medium">+12%</span>
    </div>
    <p className="mt-4 text-sm text-gray-500">Rendez-vous</p>
    <p className="text-3xl font-bold">45</p>
    <p className="text-xs text-gray-400 mt-1">🕒 12 en attente</p>
  </div>

  {/* Messages */}
  <div className="bg-white rounded-xl p-5 shadow-sm">
    <div className="flex justify-between items-start">
      <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">
        <MessageSquare size={20} />
      </div>
      <span className="text-green-600 text-sm font-medium">+8%</span>
    </div>
    <p className="mt-4 text-sm text-gray-500">Messages</p>
    <p className="text-3xl font-bold">23</p>
    <p className="text-xs text-gray-400 mt-1">✉️ 8 non lus</p>
  </div>

  {/* Candidatures */}
  <div className="bg-white rounded-xl p-5 shadow-sm">
    <div className="flex justify-between items-start">
      <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center">
        <Briefcase size={20} />
      </div>
      <span className="text-green-600 text-sm font-medium">+3%</span>
    </div>
    <p className="mt-4 text-sm text-gray-500">Candidatures</p>
    <p className="text-3xl font-bold">18</p>
    <p className="text-xs text-gray-400 mt-1">👤 7 à traiter</p>
  </div>

</div>


      {/* ===== Contenu principal ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Derniers rendez-vous */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-4 border-b font-semibold flex items-center gap-2">
            <Calendar size={18} className="text-blue-600" />
            Derniers rendez-vous
          </div>

          <div className="divide-y">
            {[
              {
                nom: "Kouassi Marie",
                service: "Gynécologie",
                date: "2024-12-20",
                statut: "En attente",
                couleur: "bg-yellow-100 text-yellow-700",
              },
              {
                nom: "Diabaté Jean",
                service: "Pédiatrie",
                date: "2024-12-21",
                statut: "Confirmé",
                couleur: "bg-green-100 text-green-700",
              },
              {
                nom: "Koné Fatou",
                service: "Cardiologie",
                date: "2024-12-22",
                statut: "En attente",
                couleur: "bg-yellow-100 text-yellow-700",
              },
            ].map((rdv, index) => (
              <div key={index} className="p-4 flex justify-between items-center">
                <div>
                  <p className="font-medium">{rdv.nom}</p>
                  <p className="text-sm text-gray-500">{rdv.service}</p>
                  <p className="text-xs text-gray-400">{rdv.date}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${rdv.couleur}`}
                >
                  {rdv.statut}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Derniers messages */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-4 border-b font-semibold flex items-center gap-2">
            <MessageSquare size={18} className="text-purple-600" />
            Derniers messages
          </div>

          <div className="divide-y">
            {[
              {
                nom: "Touré Amadou",
                message: "Demande d'information",
                temps: "Il y a 2h",
                nonLu: true,
              },
              {
                nom: "Bamba Sarah",
                message: "Question sur les tarifs",
                temps: "Il y a 5h",
                nonLu: true,
              },
              {
                nom: "Yao Patrick",
                message: "Remerciements",
                temps: "Hier",
                nonLu: false,
              },
            ].map((msg, index) => (
              <div key={index} className="p-4 flex justify-between items-center">
                <div>
                  <p className="font-medium flex items-center gap-2">
                    {msg.nom}
                    {msg.nonLu && (
                      <span className="w-2 h-2 bg-blue-600 rounded-full" />
                    )}
                  </p>
                  <p className="text-sm text-gray-500">{msg.message}</p>
                  <p className="text-xs text-gray-400">{msg.temps}</p>
                </div>
                {!msg.nonLu && (
                  <span className="w-2 h-2 bg-red-500 rounded-full" />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ===== Actions rapides ===== */}
<div className="bg-white rounded-xl p-5 shadow-sm">
  <h3 className="font-semibold mb-4">Actions rapides</h3>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

    {/* Nouveau RDV */}
    <button className="flex items-center justify-center gap-2 p-4 rounded-xl bg-blue-50 text-blue-600 font-medium">
      <Calendar size={18} />
      Nouveau RDV
    </button>

    {/* Messages */}
    <button className="flex items-center justify-center gap-2 p-4 rounded-xl bg-purple-50 text-purple-600 font-medium">
      <MessageSquare size={18} />
      Messages
    </button>

    {/* Carte fantôme */}
    <div />

    {/* Carte fantôme */}
    <div />

  </div>
</div>


    </div>
  );
};

export default VueEnsemble;
