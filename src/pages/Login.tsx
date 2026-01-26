import React, { useState } from "react";
import { Lock, Eye, EyeOff, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DEMO_ACCOUNTS = [
  { email: "admin@clinique-life.com", password: "admin123", role: "admin1" },
  { email: "admin2@clinique-life.com", password: "admin123", role: "admin2" },
];

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  // Ajouté le 18/01/2026 à 12h00 - States pour la modal de réinitialisation
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetSuccess, setResetSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    const valid = DEMO_ACCOUNTS.find(
      (a) => a.email === email && a.password === password
    );

    if (!valid) {
      setError("Email ou mot de passe incorrect");
      return;
    }

    localStorage.setItem("admin", valid.role);

    if (valid.role === "admin2") {
      navigate("/admin2");
    } else {
      navigate("/admin");
    }
  };

  // Ajouté le 18/01/2026 à 12h00 - Fonction de réinitialisation du mot de passe
  const handleResetPassword = () => {
    const account = DEMO_ACCOUNTS.find((a) => a.email === resetEmail);
    
    if (!account) {
      setError("Aucun compte trouvé avec cet email");
      return;
    }
    
    setResetSuccess(true);
    setError("");
    setTimeout(() => {
      setShowResetModal(false);
      setResetSuccess(false);
      setResetEmail("");
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-emerald-50 px-4">

      <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden mt-20">

        <div className="bg-[linear-gradient(90deg,#155DFC_0%,#00BBA7_100%)] p-8 text-center text-white">
          <div className="mx-auto w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
            <Lock size={32} />
          </div>
          <h2 className="text-2xl font-bold">Administration</h2>
          <p className="text-white/80 text-sm">Clinique Life</p>
        </div>

        <div className="p-8 space-y-6">

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@clinique-life.com"
                className="w-full border rounded-xl pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Mot de passe</label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-3 top-3 text-gray-400"
              >
                {show ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 border border-red-200 rounded-xl px-4 py-3 text-sm">
              {error}
            </div>
          )}

          {/* Ajouté le 18/01/2026 à 12h00 - Lien mot de passe oublié */}
          <div className="text-right">
            <button
              type="button"
              onClick={() => {
                setShowResetModal(true);
                setError("");
              }}
              className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition"
            >
              Mot de passe oublié ?
            </button>
          </div>

          <button
            onClick={handleLogin}
            className="w-full py-3 rounded-xl text-white font-semibold bg-[linear-gradient(90deg,#155DFC_0%,#00BBA7_100%)] hover:opacity-90 transition"
          >
            Se connecter
          </button>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-gray-700 space-y-2">
            <p className="font-semibold">Comptes de démonstration :</p>
            <p>Admin 1 : admin@clinique-life.com / admin123</p>
            <p>Admin 2 : admin2@clinique-life.com / admin123</p>
          </div>
        </div>
      </div>

      {/* Ajouté le 18/01/2026 à 12h00 - Modal de réinitialisation du mot de passe */}
      {showResetModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center px-4 z-50">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-emerald-500 p-6 text-white">
              <h3 className="text-xl font-bold">Réinitialisation du mot de passe</h3>
              <p className="text-white/80 text-sm mt-1">
                Entrez votre email pour recevoir un lien de réinitialisation
              </p>
            </div>

            <div className="p-6 space-y-4">
              {!resetSuccess ? (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 text-gray-400" size={18} />
                      <input
                        type="email"
                        value={resetEmail}
                        onChange={(e) => setResetEmail(e.target.value)}
                        placeholder="votre-email@clinique-life.com"
                        className="w-full border rounded-xl pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        setShowResetModal(false);
                        setResetEmail("");
                        setError("");
                      }}
                      className="flex-1 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition"
                    >
                      Annuler
                    </button>
                    <button
                      onClick={handleResetPassword}
                      className="flex-1 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-emerald-500 hover:opacity-90 transition"
                    >
                      Envoyer
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-4">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Email envoyé !</h4>
                  <p className="text-gray-600 text-sm">
                    Un lien de réinitialisation a été envoyé à <strong>{resetEmail}</strong>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;