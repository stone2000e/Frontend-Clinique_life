import React, { useState } from "react";
import { Lock, Eye, EyeOff, Check, X } from "lucide-react";

const ChangePassword: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validatePassword = (password: string) => {
    const minLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    
    return {
      minLength,
      hasUpperCase,
      hasLowerCase,
      hasNumber,
      isValid: minLength && hasUpperCase && hasLowerCase && hasNumber
    };
  };

  const validation = validatePassword(newPassword);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!currentPassword || !newPassword || !confirmPassword) {
      setError("Veuillez remplir tous les champs");
      return;
    }

    if (!validation.isValid) {
      setError("Le nouveau mot de passe ne respecte pas les critères de sécurité");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      return;
    }

    // TODO: Faire l'appel API pour changer le mot de passe
    // Pour l'instant, simulation
    setSuccess("Mot de passe modifié avec succès !");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    
    setTimeout(() => setSuccess(""), 5000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Lock className="text-blue-500" />
          Changer le mot de passe
        </h1>
        <p className="text-gray-500 mt-1">Modifiez votre mot de passe de connexion</p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
          <X className="text-red-500 mt-0.5" size={20} />
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {success && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3">
          <Check className="text-green-500 mt-0.5" size={20} />
          <p className="text-green-700">{success}</p>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-sm border p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Mot de passe actuel */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mot de passe actuel
            </label>
            <div className="relative">
              <input
                type={showCurrent ? "text" : "password"}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
                placeholder="Entrez votre mot de passe actuel"
              />
              <button
                type="button"
                onClick={() => setShowCurrent(!showCurrent)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showCurrent ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Nouveau mot de passe */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nouveau mot de passe
            </label>
            <div className="relative">
              <input
                type={showNew ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
                placeholder="Entrez votre nouveau mot de passe"
              />
              <button
                type="button"
                onClick={() => setShowNew(!showNew)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showNew ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Critères de validation */}
            {newPassword && (
              <div className="mt-3 space-y-2">
                <div className={`flex items-center gap-2 text-sm ${validation.minLength ? 'text-green-600' : 'text-gray-500'}`}>
                  {validation.minLength ? <Check size={16} /> : <X size={16} />}
                  Au moins 8 caractères
                </div>
                <div className={`flex items-center gap-2 text-sm ${validation.hasUpperCase ? 'text-green-600' : 'text-gray-500'}`}>
                  {validation.hasUpperCase ? <Check size={16} /> : <X size={16} />}
                  Au moins une majuscule
                </div>
                <div className={`flex items-center gap-2 text-sm ${validation.hasLowerCase ? 'text-green-600' : 'text-gray-500'}`}>
                  {validation.hasLowerCase ? <Check size={16} /> : <X size={16} />}
                  Au moins une minuscule
                </div>
                <div className={`flex items-center gap-2 text-sm ${validation.hasNumber ? 'text-green-600' : 'text-gray-500'}`}>
                  {validation.hasNumber ? <Check size={16} /> : <X size={16} />}
                  Au moins un chiffre
                </div>
              </div>
            )}
          </div>

          {/* Confirmer le mot de passe */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirmer le nouveau mot de passe
            </label>
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
                placeholder="Confirmez votre nouveau mot de passe"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {confirmPassword && newPassword !== confirmPassword && (
              <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                <X size={14} />
                Les mots de passe ne correspondent pas
              </p>
            )}
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-emerald-400 text-white rounded-xl font-medium hover:shadow-lg transition-all"
            >
              Modifier le mot de passe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;