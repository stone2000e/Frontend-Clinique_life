import { useState } from "react";
import { Mail, X, CheckCircle, AlertCircle } from "lucide-react";

export default function Desabonnement() {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [isUnsubscribed, setIsUnsubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const reasons = [
    "Je reçois trop d'emails",
    "Le contenu ne m'intéresse plus",
    "Je ne me souviens pas m'être abonné(e)",
    "Les emails ne sont pas pertinents pour moi",
    "Autre raison"
  ];

  const handleUnsubscribe = () => {
    if (!email) {
      alert("Veuillez entrer votre adresse email");
      return;
    }

    setLoading(true);
    
    // Simulation d'une requête API
    setTimeout(() => {
      setLoading(false);
      setIsUnsubscribed(true);
    }, 1500);
  };

  if (isUnsubscribed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-green-600" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Désabonnement confirmé
          </h1>
          
          <p className="text-gray-600 mb-6">
            Vous avez été désabonné(e) de notre newsletter avec succès. Vous ne recevrez plus d'emails de notre part.
          </p>
          
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-6">
            <p className="text-sm text-teal-800">
              <strong>Email désabonné:</strong> {email}
            </p>
          </div>

          <p className="text-sm text-gray-500 mb-6">
            Nous sommes désolés de vous voir partir. Si vous changez d'avis, vous pourrez vous réabonner à tout moment depuis notre site web.
          </p>

          <button
            onClick={() => window.location.href = "/"}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-xl transition"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl w-full">
        
        {/* En-tête */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail size={32} className="text-red-600" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Êtes-vous sûr(e) de vouloir vous désabonner ?
          </h1>
          
          <p className="text-gray-600">
            Nous sommes désolés de vous voir partir. Vous ne recevrez plus nos newsletters et nos conseils santé.
          </p>
        </div>

        {/* Alerte informative */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 flex items-start gap-3">
          <AlertCircle size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-amber-800">
            <p className="font-semibold mb-1">Avant de partir...</p>
            <p>En vous désabonnant, vous ne recevrez plus nos conseils santé exclusifs, nos promotions et nos actualités médicales.</p>
          </div>
        </div>

        {/* Formulaire */}
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Votre adresse email
            </label>
            <input
              type="email"
              placeholder="exemple@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-3">
              Pourquoi souhaitez-vous vous désabonner ? (optionnel)
            </label>
            <div className="space-y-2">
              {reasons.map((r, index) => (
                <label
                  key={index}
                  className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer transition"
                >
                  <input
                    type="radio"
                    name="reason"
                    value={r}
                    checked={reason === r}
                    onChange={(e) => setReason(e.target.value)}
                    className="w-4 h-4 text-teal-600 focus:ring-teal-500"
                  />
                  <span className="text-gray-700">{r}</span>
                </label>
              ))}
            </div>
          </div>

          {reason === "Autre raison" && (
            <div>
              <textarea
                placeholder="Dites-nous en plus..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
              />
            </div>
          )}

          {/* Boutons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => window.history.back()}
              className="flex-1 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition"
            >
              Annuler
            </button>
            <button
              onClick={handleUnsubscribe}
              disabled={loading}
              className="flex-1 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Traitement...</span>
                </>
              ) : (
                <>
                  <X size={20} />
                  <span>Confirmer le désabonnement</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            Si vous rencontrez des difficultés, contactez-nous à{" "}
            <a href="mailto:contact@cliniquelife.ci" className="text-teal-600 hover:underline font-medium">
              contact@cliniquelife.ci
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}