import React, { useState } from "react";
import { Eye, EyeOff, Lock, Check, AlertCircle, Mail } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";

const ReinitialiserMotDePasse: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token"); // Le token vient de l'email

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Validation du mot de passe
  const validatePassword = (password: string) => {
    const minLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return {
      minLength,
      hasUpperCase,
      hasLowerCase,
      hasNumber,
      hasSpecialChar,
      isValid: minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar,
    };
  };

  const passwordValidation = validatePassword(newPassword);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!newPassword || !confirmPassword) {
      setError("Veuillez remplir tous les champs");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      return;
    }

    if (!passwordValidation.isValid) {
      setError("Le mot de passe ne respecte pas les critères de sécurité");
      return;
    }

    setLoading(true);

    try {
      // Appel API pour réinitialiser le mot de passe
      const response = await fetch("/api/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, newPassword }),
      });

      if (!response.ok) {
        throw new Error("Le lien de réinitialisation est invalide ou expiré");
      }

      setSuccess(true);

      // Rediriger vers la page de connexion après 3 secondes
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (err: any) {
      setError(err.message || "Une erreur s'est produite");
    } finally {
      setLoading(false);
    }
  };

  const ValidationItem: React.FC<{ valid: boolean; text: string }> = ({ valid, text }) => (
    <div className="flex items-center gap-2">
      {valid ? (
        <Check className="w-4 h-4 text-green-600" />
      ) : (
        <AlertCircle className="w-4 h-4 text-gray-400" />
      )}
      <span className={`text-sm ${valid ? "text-green-600" : "text-gray-500"}`}>{text}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden">
        {/* HEADER */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-8 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Nouveau mot de passe
          </h1>
          <p className="text-white/90 text-sm">
            Créez un mot de passe sécurisé pour votre compte
          </p>
        </div>

        {/* FORMULAIRE */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* INFO EMAIL */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
            <Mail className="w-5 h-5 text-blue-600 mt-0.5" />
            <div className="text-sm text-blue-800">
              <p className="font-medium mb-1">Email de réinitialisation reçu</p>
              <p className="text-blue-600">Veuillez créer votre nouveau mot de passe ci-dessous</p>
            </div>
          </div>

          {/* NOUVEAU MOT DE PASSE */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nouveau mot de passe
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Entrez votre nouveau mot de passe"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {/* CRITÈRES DE VALIDATION */}
            {newPassword && (
              <div className="mt-4 space-y-2 bg-gray-50 rounded-xl p-4">
                <p className="text-xs font-semibold text-gray-700 mb-2">Critères de sécurité :</p>
                <ValidationItem 
                  valid={passwordValidation.minLength} 
                  text="Au moins 8 caractères" 
                />
                <ValidationItem 
                  valid={passwordValidation.hasUpperCase} 
                  text="Une lettre majuscule (A-Z)" 
                />
                <ValidationItem 
                  valid={passwordValidation.hasLowerCase} 
                  text="Une lettre minuscule (a-z)" 
                />
                <ValidationItem 
                  valid={passwordValidation.hasNumber} 
                  text="Un chiffre (0-9)" 
                />
                <ValidationItem 
                  valid={passwordValidation.hasSpecialChar} 
                  text="Un caractère spécial (!@#$%...)" 
                />
              </div>
            )}
          </div>

          {/* CONFIRMER MOT DE PASSE */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirmer le mot de passe
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Confirmez votre mot de passe"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {confirmPassword && newPassword !== confirmPassword && (
              <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                Les mots de passe ne correspondent pas
              </p>
            )}
            {confirmPassword && newPassword === confirmPassword && passwordValidation.isValid && (
              <p className="mt-2 text-sm text-green-600 flex items-center gap-1">
                <Check className="w-4 h-4" />
                Les mots de passe correspondent
              </p>
            )}
          </div>

          {/* MESSAGE D'ERREUR */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          {/* MESSAGE DE SUCCÈS */}
          {success && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-green-800">
                <p className="font-semibold mb-1">Mot de passe modifié avec succès !</p>
                <p>Vous allez être redirigé vers la page de connexion...</p>
              </div>
            </div>
          )}

          {/* BOUTON */}
          <button
            type="submit"
            disabled={!passwordValidation.isValid || newPassword !== confirmPassword || loading}
            className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Réinitialisation...
              </>
            ) : (
              <>
                <Lock className="w-5 h-5" />
                Réinitialiser le mot de passe
              </>
            )}
          </button>

          {/* LIEN RETOUR */}
          <div className="text-center">
            <a
              href="/login"
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Retour à la connexion
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReinitialiserMotDePasse;