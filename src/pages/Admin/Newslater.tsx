import { useState } from "react";
import { Mail, Plus, Users, Send, Trash2, Eye, Target } from "lucide-react";

interface Abonne {
  email: string;
  date: string;
  statut: "Actif" | "Désabonné";
}

interface Campagne {
  id: number;
  titre: string;
  sujet: string;
  description: string;
  destinataires: number;
  ouvertures: number;
  clics: number;
  dateEnvoi: string;
  statut: "Envoyée" | "Brouillon" | "Planifiée";
}

export default function Newsletter() {
  const [activeTab, setActiveTab] = useState<"abonnes" | "campagnes">("abonnes");
  const [abonnes, setAbonnes] = useState<Abonne[]>([
    { email: "marie.kouassi@email.com", date: "2024-12-10", statut: "Actif" },
    { email: "jean.diabate@email.com", date: "2024-12-12", statut: "Actif" },
    { email: "fatou.kone@email.com", date: "2024-12-15", statut: "Actif" },
    { email: "amadou.toure@email.com", date: "2024-12-16", statut: "Désabonné" },
  ]);

  const [campagnes] = useState<Campagne[]>([
    {
      id: 1,
      titre: "Newsletter Décembre 2024",
      sujet: "Vos conseils santé pour l'hiver",
      description: "Découvrez nos conseils pour rester en forme pendant l'hiver...",
      destinataires: 1200,
      ouvertures: 504,
      clics: 120,
      dateEnvoi: "2024-12-01",
      statut: "Envoyée",
    },
    {
      id: 2,
      titre: "Nouveaux services maternité",
      sujet: "Découvrez nos nouveaux services pour futures mamans",
      description: "Nous sommes heureux de vous présenter nos nouveaux services...",
      destinataires: 850,
      ouvertures: 340,
      clics: 85,
      dateEnvoi: "2024-12-15",
      statut: "Envoyée",
    },
  ]);

  const deleteAbonne = (email: string) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer cet abonné ?")) {
      setAbonnes(prev => prev.filter(a => a.email !== email));
    }
  };

  const abonnesActifs = abonnes.filter(a => a.statut === "Actif").length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-3xl font-bold flex items-center gap-3 text-gray-900">
            <Mail className="text-teal-600" size={36} />
            Gestion Newsletter
          </h1>
          <button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl shadow-lg font-semibold transition">
            <Plus size={20} />
            Nouvelle campagne
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="rounded-2xl p-6 shadow-md border-l-4 border-teal-500 bg-gradient-to-br from-white to-teal-50">
            <p className="text-gray-600 text-sm font-medium mb-2">Abonnés totaux</p>
            <p className="text-3xl font-bold text-gray-900">{abonnes.length}</p>
          </div>
          <div className="rounded-2xl p-6 shadow-md border-l-4 border-green-500 bg-gradient-to-br from-white to-green-50">
            <p className="text-gray-600 text-sm font-medium mb-2">Abonnés actifs</p>
            <p className="text-3xl font-bold text-gray-900">{abonnesActifs}</p>
          </div>
          <div className="rounded-2xl p-6 shadow-md border-l-4 border-blue-500 bg-gradient-to-br from-white to-blue-50">
            <p className="text-gray-600 text-sm font-medium mb-2">Taux d'ouverture</p>
            <p className="text-3xl font-bold text-gray-900">42%</p>
          </div>
          <div className="rounded-2xl p-6 shadow-md border-l-4 border-purple-500 bg-gradient-to-br from-white to-purple-50">
            <p className="text-gray-600 text-sm font-medium mb-2">Taux de clic</p>
            <p className="text-3xl font-bold text-gray-900">10%</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab("abonnes")}
              className={`flex items-center gap-2 px-8 py-5 font-semibold transition text-base ${
                activeTab === "abonnes"
                  ? "border-b-4 border-teal-600 text-teal-600 bg-teal-50"
                  : "border-transparent text-gray-500 hover:text-teal-600 hover:bg-gray-50"
              }`}
            >
              <Users size={20} />
              Abonnés ({abonnes.length})
            </button>
            <button
              onClick={() => setActiveTab("campagnes")}
              className={`flex items-center gap-2 px-8 py-5 font-semibold transition text-base ${
                activeTab === "campagnes"
                  ? "border-b-4 border-teal-600 text-teal-600 bg-teal-50"
                  : "border-transparent text-gray-500 hover:text-teal-600 hover:bg-gray-50"
              }`}
            >
              <Send size={20} />
              Campagnes ({campagnes.length})
            </button>
          </div>

          <div className="p-8">
            {activeTab === "abonnes" && (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-gray-600 font-semibold border-b-2 border-gray-200">
                      <th className="py-4 px-2">Email</th>
                      <th className="py-4 px-2">Date d'inscription</th>
                      <th className="py-4 px-2">Statut</th>
                      <th className="py-4 px-2 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {abonnes.map((a, i) => (
                      <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition">
                        <td className="py-5 px-2">
                          <div className="flex items-center gap-3">
                            <Mail size={18} className="text-gray-400" />
                            <span className="font-medium text-gray-800">{a.email}</span>
                          </div>
                        </td>
                        <td className="py-5 px-2 text-gray-600">{a.date}</td>
                        <td className="py-5 px-2">
                          <span className={`px-4 py-1.5 rounded-full text-xs font-semibold ${
                            a.statut === "Actif" ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-700"
                          }`}>
                            {a.statut}
                          </span>
                        </td>
                        <td className="py-5 px-2 text-right">
                          <button 
                            onClick={() => deleteAbonne(a.email)}
                            className="p-2.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition inline-flex items-center justify-center"
                          >
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "campagnes" && (
              <div className="space-y-4">
                {campagnes.map((campagne) => {
                  const tauxOuverture = Math.round((campagne.ouvertures / campagne.destinataires) * 100);
                  const tauxClic = Math.round((campagne.clics / campagne.destinataires) * 100);
                  
                  return (
                    <div key={campagne.id} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border border-teal-100">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{campagne.titre}</h3>
                          <div className="flex items-center gap-2 text-gray-700 mb-3">
                            <Target size={16} className="text-teal-600" />
                            <span className="font-medium">{campagne.sujet}</span>
                          </div>
                          <p className="text-gray-600 text-sm">{campagne.description}</p>
                        </div>
                        <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                          {campagne.statut}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-4">
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Destinataires</p>
                          <p className="text-2xl font-bold text-gray-900">{campagne.destinataires}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Ouvertures</p>
                          <p className="text-2xl font-bold text-gray-900">{campagne.ouvertures}</p>
                          <p className="text-sm font-semibold text-teal-600">{tauxOuverture}%</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Clics</p>
                          <p className="text-2xl font-bold text-gray-900">{campagne.clics}</p>
                          <p className="text-sm font-semibold text-teal-600">{tauxClic}%</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Envoyé le</p>
                          <p className="text-lg font-bold text-gray-900">{campagne.dateEnvoi}</p>
                        </div>
                      </div>

                      <button className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold text-sm transition">
                        <Eye size={16} />
                        Voir les détails
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}