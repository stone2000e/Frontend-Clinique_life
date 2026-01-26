import React, { useState } from "react";
import { MessageSquare,  Send, User as  Copy, Info } from "lucide-react";

const SMS: React.FC = () => {
  // États pour les onglets
  const [activeTab, setActiveTab] = useState<"messages" | "fournisseur" | "acheter">("messages");

  // États pour les messages
  const [confirmationActive, setConfirmationActive] = useState(true);
  const [rappelActive, setRappelActive] = useState(true);
  const [delaiRappel, setDelaiRappel] = useState("24");

  // États pour les templates
  const [confirmationTemplate, setConfirmationTemplate] = useState(
    `Bonjour {nom},

Votre rendez-vous à la Clinique Life est confirmé :

📅 Date : {date}
🕐 Heure : {heure}
👨‍⚕️ Médecin : {medecin}
🏥 Service : {service}

Merci de vous présenter 10 minutes avant l'heure du rendez-vous.

Pour toute modification, contactez-nous au +225 07 77 34 48 59.

Clinique Life - Angré GESTOCI`
  );

  const [rappelTemplate, setRappelTemplate] = useState(
    `Rappel de rendez-vous 📅

Bonjour {nom},

Nous vous rappelons votre rendez-vous demain à {heure} avec {medecin}.

Clinique Life`
  );

  const [testPhone, setTestPhone] = useState("");

  // Calculer la longueur et le nombre de SMS
  const confirmationLength = confirmationTemplate.length;
  const confirmationSMSCount = Math.ceil(confirmationLength / 160);
  const rappelLength = rappelTemplate.length;
  const rappelSMSCount = Math.ceil(rappelLength / 160);

  
  // Fonction pour insérer une variable dans le template
  const insertVariable = (variable: string, isConfirmation: boolean) => {
    if (isConfirmation) {
      setConfirmationTemplate(confirmationTemplate + variable);
    } else {
      setRappelTemplate(rappelTemplate + variable);
    }
  };

 

  const handleSendTest = () => {
    if (!testPhone) {
      alert("Veuillez entrer un numéro de téléphone");
      return;
    }
    // Logique d'envoi de test
    alert(`SMS de test envoyé à ${testPhone}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <MessageSquare className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Paramètres SMS</h1>
          </div>
          <p className="text-gray-600">Gérez vos notifications SMS et vos forfaits de messages</p>
        </div>

        {/* SOLDE SMS */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl p-8 mb-8 text-white shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="w-8 h-8" />
            <h2 className="text-2xl font-bold">Solde SMS Disponible</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <p className="text-blue-100 mb-1">Messages disponibles</p>
              <p className="text-4xl font-bold">1,247</p>
            </div>
            <div>
              <p className="text-blue-100 mb-1">Messages utilisés</p>
              <p className="text-4xl font-bold">753</p>
            </div>
            <div>
              <p className="text-blue-100 mb-1">Total du forfait</p>
              <p className="text-4xl font-bold">2,000</p>
            </div>
            <div>
              <p className="text-blue-100 mb-1">Expire le</p>
              <p className="text-2xl font-bold">31/03/2026</p>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm text-blue-100 mb-2">Utilisation du forfait</p>
            <div className="w-full bg-blue-500/30 rounded-full h-3 overflow-hidden">
              <div className="bg-white h-full rounded-full" style={{ width: "37.6%" }} />
            </div>
            <p className="text-right text-sm mt-1">37.6%</p>
          </div>
        </div>

        {/* ONGLETS */}
        <div className="bg-white rounded-2xl shadow-sm mb-6 p-2 flex gap-2">
          <button
            onClick={() => setActiveTab("messages")}
            className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition ${
              activeTab === "messages"
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <MessageSquare className="w-5 h-5" />
            Messages
          </button>
          <button
            onClick={() => setActiveTab("fournisseur")}
            className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition ${
              activeTab === "fournisseur"
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Fournisseur
          </button>
          <button
            onClick={() => setActiveTab("acheter")}
            className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition ${
              activeTab === "acheter"
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Acheter des SMS
          </button>
        </div>

        {/* CONTENU DES ONGLETS */}
        {activeTab === "messages" && (
          <div className="space-y-8">
            {/* MESSAGE DE CONFIRMATION */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Message de Confirmation</h3>
              <p className="text-gray-600 mb-6">Message envoyé automatiquement lors de la confirmation d'un rendez-vous</p>

              {/* TOGGLE */}
              <div className="flex items-center justify-between mb-6 pb-6 border-b">
                <div>
                  <p className="font-semibold text-gray-900">Activer les SMS de confirmation</p>
                  <p className="text-sm text-gray-500">Envoi automatique après validation du rendez-vous</p>
                </div>
                <button
                  onClick={() => setConfirmationActive(!confirmationActive)}
                  className={`relative w-14 h-8 rounded-full transition ${
                    confirmationActive ? "bg-blue-600" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                      confirmationActive ? "translate-x-6" : ""
                    }`}
                  />
                </button>
              </div>

              {/* TEMPLATE */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Modèle de message de confirmation
                </label>
                <textarea
                  value={confirmationTemplate}
                  onChange={(e) => setConfirmationTemplate(e.target.value)}
                  rows={12}
                  className="w-full p-4 border border-gray-300 rounded-xl font-mono text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />

                {/* VARIABLES */}
                <div className="mt-4 flex flex-wrap gap-3">
                  {[
                    { icon: "👤", label: "{nom}", var: "{nom}" },
                    { icon: "📅", label: "{date}", var: "{date}" },
                    { icon: "🕐", label: "{heure}", var: "{heure}" },
                    { icon: "👨‍⚕️", label: "{medecin}", var: "{medecin}" },
                    { icon: "🏥", label: "{service}", var: "{service}" },
                  ].map((item, i) => (
                    <button
                      key={i}
                      onClick={() => insertVariable(item.var, true)}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition"
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                      <Copy className="w-4 h-4 text-gray-500" />
                    </button>
                  ))}
                </div>

                <p className="text-xs text-gray-500 mt-3 flex items-center gap-1">
                  <Info className="w-4 h-4" />
                  Cliquez sur les badges pour copier les variables. Elles seront remplacées automatiquement.
                </p>

                {/* LONGUEUR */}
                <div className="mt-4 flex items-center gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">Longueur actuelle :</span>
                  </div>
                  <span className="font-bold text-gray-900">{confirmationLength} caractères</span>
                  <span className="text-orange-600">
                    (Sera envoyé en {confirmationSMSCount} SMS)
                  </span>
                </div>
              </div>
            </div>

            {/* MESSAGE DE RAPPEL */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Message de Rappel</h3>
              <p className="text-gray-600 mb-6">Message envoyé automatiquement avant le rendez-vous</p>

              {/* TOGGLE */}
              <div className="flex items-center justify-between mb-6 pb-6 border-b">
                <div>
                  <p className="font-semibold text-gray-900">Activer les SMS de rappel</p>
                  <p className="text-sm text-gray-500">Rappel automatique avant le rendez-vous</p>
                </div>
                <button
                  onClick={() => setRappelActive(!rappelActive)}
                  className={`relative w-14 h-8 rounded-full transition ${
                    rappelActive ? "bg-blue-600" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                      rappelActive ? "translate-x-6" : ""
                    }`}
                  />
                </button>
              </div>

              {/* DÉLAI */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Envoyer le rappel
                </label>
                <select
                  value={delaiRappel}
                  onChange={(e) => setDelaiRappel(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="1">1 heure avant</option>
                  <option value="2">2 heures avant</option>
                  <option value="6">6 heures avant</option>
                  <option value="12">12 heures avant</option>
                  <option value="24">24 heures avant</option>
                  <option value="48">48 heures avant</option>
                </select>
              </div>

              {/* TEMPLATE */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Modèle de message de rappel
                </label>
                <textarea
                  value={rappelTemplate}
                  onChange={(e) => setRappelTemplate(e.target.value)}
                  rows={6}
                  className="w-full p-4 border border-gray-300 rounded-xl font-mono text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />

                {/* VARIABLES */}
                <div className="mt-4 flex flex-wrap gap-3">
                  {[
                    { icon: "👤", label: "{nom}", var: "{nom}" },
                    { icon: "🕐", label: "{heure}", var: "{heure}" },
                    { icon: "👨‍⚕️", label: "{medecin}", var: "{medecin}" },
                  ].map((item, i) => (
                    <button
                      key={i}
                      onClick={() => insertVariable(item.var, false)}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition"
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                      <Copy className="w-4 h-4 text-gray-500" />
                    </button>
                  ))}
                </div>

                {/* LONGUEUR */}
                <div className="mt-4 flex items-center gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">Longueur actuelle :</span>
                  </div>
                  <span className="font-bold text-gray-900">{rappelLength} caractères</span>
                  <span className="text-orange-600">
                    (Sera envoyé en {rappelSMSCount} SMS)
                  </span>
                </div>
              </div>
            </div>

            {/* TEST SMS */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <div className="flex items-center gap-3 mb-4">
                <Send className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">Tester l'envoi SMS</h3>
              </div>
              <p className="text-gray-600 mb-6">Envoyez un SMS de test pour vérifier votre configuration</p>

              <div className="flex gap-4">
                <input
                  type="tel"
                  value={testPhone}
                  onChange={(e) => setTestPhone(e.target.value)}
                  placeholder="+225 XX XX XX XX XX"
                  className="flex-1 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <button
                  onClick={handleSendTest}
                  className="flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition"
                >
                  <Send className="w-5 h-5" />
                  Envoyer un test
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "fournisseur" && (
          <div className="space-y-8">
            {/* TITRE */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Choisir votre fournisseur SMS</h3>
              <p className="text-gray-600 mb-8">Sélectionnez et configurez votre service d'envoi de SMS</p>

              {/* GRID DES FOURNISSEURS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* TWILIO */}
                <div className="border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-300 transition cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-1">Twilio</h4>
                      <p className="text-sm text-gray-600 mb-3">Leader mondial de la messagerie SMS</p>
                      <p className="text-lg font-bold text-blue-600">0.0075 $ / SMS</p>
                    </div>
                  </div>
                </div>

                {/* VONAGE */}
                <div className="border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-300 transition cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-1">Vonage (Nexmo)</h4>
                      <p className="text-sm text-gray-600 mb-3">Solution SMS fiable et scalable</p>
                      <p className="text-lg font-bold text-blue-600">0.0080 $ / SMS</p>
                    </div>
                  </div>
                </div>

                {/* ORANGE CI */}
                <div className="border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-300 transition cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">O</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-1">Orange CI SMS API</h4>
                      <p className="text-sm text-gray-600 mb-3">Opérateur local - Meilleure couverture en Côte d'Ivoire</p>
                      <p className="text-lg font-bold text-blue-600">10 FCFA / SMS</p>
                    </div>
                  </div>
                </div>

                {/* MTN CI */}
                <div className="border-2 border-blue-600 bg-blue-50 rounded-2xl p-6 cursor-pointer relative">
                  <div className="absolute -top-3 right-4 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                    Actif
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">M</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-1">MTN CI SMS API</h4>
                      <p className="text-sm text-gray-600 mb-3">Opérateur local - Large couverture nationale</p>
                      <p className="text-lg font-bold text-blue-600">12 FCFA / SMS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CONFIGURATION API */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <div className="flex items-center gap-2 mb-6">
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-900">Configuration API - MTN CI SMS API</h3>
              </div>

              <div className="space-y-6">
                {/* NOM EXPÉDITEUR */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Nom de l'expéditeur (Sender ID)
                  </label>
                  <input
                    type="text"
                    value="CLINIQUE LIFE"
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    Maximum 11 caractères alphanumériques (peut nécessiter une validation du fournisseur)
                  </p>
                </div>

                {/* CLÉ API */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Clé API (API Key)
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Entrez votre clé API..."
                      className="w-full p-4 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* SECRET API */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Secret API (API Secret)
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Entrez votre secret API..."
                      className="w-full p-4 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* AVERTISSEMENT */}
                <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm text-gray-700">
                    Vos identifiants API sont stockés de manière sécurisée et chiffrée. Ne partagez jamais vos clés API.
                  </p>
                </div>

                {/* BOUTONS */}
                <div className="flex gap-4 pt-4">
                  <button className="flex-1 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition">
                    Tester la connexion
                  </button>
                  <button className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition">
                    Enregistrer la configuration
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "acheter" && (
  <div className="space-y-8">
    {/* ACHETER DES CRÉDITS */}
    <div className="bg-white rounded-2xl shadow-sm p-8">
      <div className="flex items-center gap-3 mb-2">
        <svg className="w-7 h-7 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
        <h3 className="text-xl font-bold text-gray-900">Acheter des crédits SMS</h3>
      </div>
      <p className="text-gray-600 mb-8">Rechargez votre solde SMS pour continuer à envoyer des notifications</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* PACK STARTER */}
        <div className="border-2 border-gray-200 rounded-2xl p-8 hover:border-gray-300 transition bg-white">
          <div className="text-center">
            <p className="text-sm font-semibold text-gray-600 mb-3">Pack Starter</p>
            <p className="text-5xl font-bold text-blue-600 mb-1">500</p>
            <p className="text-gray-500 text-sm mb-6">SMS</p>
            <p className="text-3xl font-bold text-gray-900 mb-2">5.000 FCFA</p>
            <p className="text-sm text-gray-500 mb-6">10 FCFA / SMS</p>
            <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 text-white font-semibold rounded-xl transition flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Acheter
            </button>
          </div>
        </div>

        {/* PACK BUSINESS - POPULAIRE */}
        <div className="relative border-2 border-blue-600 bg-blue-50 rounded-2xl p-8">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
            Populaire
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-gray-600 mb-3">Pack Business</p>
            <p className="text-5xl font-bold text-blue-600 mb-1">2.000</p>
            <p className="text-gray-500 text-sm mb-6">SMS</p>
            <p className="text-3xl font-bold text-gray-900 mb-2">18.000 FCFA</p>
            <div className="flex items-center justify-center gap-2 mb-6">
              <p className="text-sm font-semibold text-green-600">9 FCFA / SMS</p>
              <span className="px-2 py-0.5 bg-white text-gray-700 text-xs font-semibold rounded">-10%</span>
            </div>
            <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 text-white font-semibold rounded-xl transition flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Acheter
            </button>
          </div>
        </div>

        {/* PACK PREMIUM */}
        <div className="border-2 border-gray-200 rounded-2xl p-8 hover:border-gray-300 transition bg-white">
          <div className="text-center">
            <p className="text-sm font-semibold text-gray-600 mb-3">Pack Premium</p>
            <p className="text-5xl font-bold text-blue-600 mb-1">5.000</p>
            <p className="text-gray-500 text-sm mb-6">SMS</p>
            <p className="text-3xl font-bold text-gray-900 mb-2">40.000 FCFA</p>
            <div className="flex items-center justify-center gap-2 mb-6">
              <p className="text-sm font-semibold text-green-600">8 FCFA / SMS</p>
              <span className="px-2 py-0.5 bg-white text-gray-700 text-xs font-semibold rounded">-20%</span>
            </div>
            <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 text-white font-semibold rounded-xl transition flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Acheter
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* MOYENS DE PAIEMENT */}
    <div className="bg-white rounded-2xl shadow-sm p-8">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Moyens de paiement acceptés</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* CARTE BANCAIRE */}
        <div className="flex flex-col items-center p-6 border border-gray-200 rounded-xl hover:border-blue-300 transition cursor-pointer bg-white">
          <svg className="w-12 h-12 text-blue-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
          <p className="text-sm font-medium text-gray-900">Carte bancaire</p>
        </div>

        {/* ORANGE MONEY */}
        <div className="flex flex-col items-center p-6 border border-gray-200 rounded-xl hover:border-blue-300 transition cursor-pointer bg-white">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-3">
            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
            </svg>
          </div>
          <p className="text-sm font-medium text-gray-900">Orange Money</p>
        </div>

        {/* MTN MOBILE MONEY */}
        <div className="flex flex-col items-center p-6 border border-gray-200 rounded-xl hover:border-blue-300 transition cursor-pointer bg-white">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mb-3">
            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
          </div>
          <p className="text-sm font-medium text-gray-900">MTN Mobile Money</p>
        </div>

        {/* VIREMENT BANCAIRE */}
        <div className="flex flex-col items-center p-6 border border-gray-200 rounded-xl hover:border-blue-300 transition cursor-pointer bg-white">
          <svg className="w-12 h-12 text-blue-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
          </svg>
          <p className="text-sm font-medium text-gray-900">Virement bancaire</p>
        </div>
      </div>
    </div>

    {/* HISTORIQUE DES ACHATS */}
    <div className="bg-white rounded-2xl shadow-sm p-8">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Historique des achats</h3>
      
      <div className="space-y-3">
        {/* ACHAT 1 */}
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
          <div>
            <p className="font-semibold text-gray-900">Pack Business - 2.000 SMS</p>
            <p className="text-sm text-gray-500">15 janvier 2026</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-gray-900">18.000 FCFA</p>
            <p className="text-xs text-green-600 font-semibold">Payé</p>
          </div>
        </div>

        {/* ACHAT 2 */}
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
          <div>
            <p className="font-semibold text-gray-900">Pack Starter - 500 SMS</p>
            <p className="text-sm text-gray-500">28 décembre 2025</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-gray-900">5.000 FCFA</p>
            <p className="text-xs text-green-600 font-semibold">Payé</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)}



      </div>
    </div>
  );
};

export default SMS;
