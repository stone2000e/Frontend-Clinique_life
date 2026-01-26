import { useState } from "react";
import { Mail, Plus, Users, Send, Trash2, Eye, Target, X } from "lucide-react";

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
  const [showModal, setShowModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedCampagne, setSelectedCampagne] = useState<Campagne | null>(null);
  const [newCampagne, setNewCampagne] = useState({
    titre: "",
    sujet: "",
    contenu: "",
  });

  const [abonnes, setAbonnes] = useState<Abonne[]>([
    { email: "marie.kouassi@email.com", date: "2024-12-10", statut: "Actif" },
    { email: "jean.diabate@email.com", date: "2024-12-12", statut: "Actif" },
    { email: "fatou.kone@email.com", date: "2024-12-15", statut: "Actif" },
    { email: "amadou.toure@email.com", date: "2024-12-16", statut: "Désabonné" },
  ]);

  const [campagnes, setCampagnes] = useState<Campagne[]>([
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

  const handleEnvoyerCampagne = () => {
    if (!newCampagne.titre || !newCampagne.sujet || !newCampagne.contenu) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    const nouvelleCampagne: Campagne = {
      id: campagnes.length + 1,
      titre: newCampagne.titre,
      sujet: newCampagne.sujet,
      description: newCampagne.contenu.substring(0, 50) + "...",
      destinataires: abonnesActifs,
      ouvertures: 0,
      clics: 0,
      dateEnvoi: new Date().toISOString().split('T')[0],
      statut: "Envoyée",
    };

    setCampagnes(prev => [...prev, nouvelleCampagne]);
    setShowModal(false);
    setNewCampagne({ titre: "", sujet: "", contenu: "" });
    setActiveTab("campagnes");
  };

  const handleVoirDetails = (campagne: Campagne) => {
    setSelectedCampagne(campagne);
    setShowDetailsModal(true);
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
          <button 
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl shadow-lg font-semibold transition"
          >
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

                      <button 
                        onClick={() => handleVoirDetails(campagne)}
                        className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold text-sm transition"
                      >
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

      {/* Modal Nouvelle Campagne */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Nouvelle campagne</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition"
                >
                  <X size={24} className="text-gray-500" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Titre de la campagne
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Newsletter Janvier 2025"
                    value={newCampagne.titre}
                    onChange={(e) => setNewCampagne({ ...newCampagne, titre: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Sujet de l'email
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Vos conseils santé pour le nouvel an"
                    value={newCampagne.sujet}
                    onChange={(e) => setNewCampagne({ ...newCampagne, sujet: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Contenu
                  </label>
                  <textarea
                    placeholder="Rédigez le contenu de votre email..."
                    value={newCampagne.contenu}
                    onChange={(e) => setNewCampagne({ ...newCampagne, contenu: e.target.value })}
                    rows={8}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => {
                      setShowModal(false);
                      setNewCampagne({ titre: "", sujet: "", contenu: "" });
                    }}
                    className="flex-1 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition"
                  >
                    Annuler
                  </button>
                  <button
                    onClick={handleEnvoyerCampagne}
                    className="flex-1 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl transition"
                  >
                    Envoyer la campagne
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Détails de la Campagne */}
      {showDetailsModal && selectedCampagne && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Détails de la campagne</h2>
                <button
                  onClick={() => {
                    setShowDetailsModal(false);
                    setSelectedCampagne(null);
                  }}
                  className="p-2 hover:bg-gray-100 rounded-lg transition"
                >
                  <X size={24} className="text-gray-500" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-6 pb-6">
              <div className="space-y-6">
                {/* En-tête de la campagne */}
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-4 border border-teal-100">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedCampagne.titre}</h3>
                      <div className="flex items-center gap-2 text-gray-700 mb-2">
                        <Target size={16} className="text-teal-600" />
                        <span className="font-medium">{selectedCampagne.sujet}</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      selectedCampagne.statut === "Envoyée" 
                        ? "bg-green-100 text-green-700" 
                        : selectedCampagne.statut === "Brouillon"
                        ? "bg-gray-200 text-gray-700"
                        : "bg-blue-100 text-blue-700"
                    }`}>
                      {selectedCampagne.statut}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-3">{selectedCampagne.description}</p>
                  
                  <div className="text-sm text-gray-500">
                    <span className="font-semibold">Date d'envoi:</span> {selectedCampagne.dateEnvoi}
                  </div>
                </div>

                {/* Statistiques détaillées */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Statistiques</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gradient-to-br from-white to-teal-50 rounded-xl p-4 border border-teal-100">
                      <p className="text-xs text-gray-600 mb-1">Destinataires</p>
                      <p className="text-2xl font-bold text-gray-900">{selectedCampagne.destinataires}</p>
                    </div>
                    <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-4 border border-blue-100">
                      <p className="text-xs text-gray-600 mb-1">Ouvertures</p>
                      <p className="text-2xl font-bold text-gray-900">{selectedCampagne.ouvertures}</p>
                      <p className="text-sm font-semibold text-blue-600">
                        {Math.round((selectedCampagne.ouvertures / selectedCampagne.destinataires) * 100)}%
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-white to-purple-50 rounded-xl p-4 border border-purple-100">
                      <p className="text-xs text-gray-600 mb-1">Clics</p>
                      <p className="text-2xl font-bold text-gray-900">{selectedCampagne.clics}</p>
                      <p className="text-sm font-semibold text-purple-600">
                        {Math.round((selectedCampagne.clics / selectedCampagne.destinataires) * 100)}%
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-white to-green-50 rounded-xl p-4 border border-green-100">
                      <p className="text-xs text-gray-600 mb-1">Taux de clic</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {selectedCampagne.ouvertures > 0 
                          ? Math.round((selectedCampagne.clics / selectedCampagne.ouvertures) * 100)
                          : 0}%
                      </p>
                      <p className="text-xs text-gray-500">parmi les ouvreurs</p>
                    </div>
                  </div>
                </div>

                {/* Performances */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Performances</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Taux d'ouverture</span>
                        <span className="text-sm font-bold text-teal-600">
                          {Math.round((selectedCampagne.ouvertures / selectedCampagne.destinataires) * 100)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-gradient-to-r from-teal-500 to-teal-600 h-2.5 rounded-full transition-all duration-500"
                          style={{ width: `${Math.round((selectedCampagne.ouvertures / selectedCampagne.destinataires) * 100)}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Taux de clic</span>
                        <span className="text-sm font-bold text-purple-600">
                          {Math.round((selectedCampagne.clics / selectedCampagne.destinataires) * 100)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-purple-600 h-2.5 rounded-full transition-all duration-500"
                          style={{ width: `${Math.round((selectedCampagne.clics / selectedCampagne.destinataires) * 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bouton de fermeture fixe en bas */}
            <div className="p-4 border-t border-gray-200 bg-gray-50 rounded-b-3xl">
              <button
                onClick={() => {
                  setShowDetailsModal(false);
                  setSelectedCampagne(null);
                }}
                className="w-full px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl transition"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}