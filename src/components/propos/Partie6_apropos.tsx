import React, { useState } from "react";

const Partie6_apropos: React.FC = () => {
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      setError("Format invalide. Veuillez uploader un fichier PDF, DOC ou DOCX.");
      setCvFile(null);
      return;
    }

    setError("");
    setCvFile(file);
  };

  return (
    <section className="w-full py-24 px-4 bg-gradient-to-b from-[#f5fbff] to-white">
      <div className="max-w-3xl mx-auto text-center">

        {/* TITRE */}
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">
          Rejoignez Notre Équipe
        </h2>
        <p className="text-gray-500 mb-10 text-sm">
          Vous êtes un professionnel de santé passionné ? Envoyez-nous votre candidature.
        </p>

        {/* FORMULAIRE */}
        <form className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-left">

          {/* GRID INPUTS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Nom complet <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Votre nom complet"
                className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Adresse email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="votre.email@exemple.com"
                className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Téléphone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="+225 XX XX XX XX XX"
                className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Poste souhaité <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          {/* UPLOAD CV */}
          <div className="mb-5">
            <label className="text-sm font-medium text-gray-700">
              CV (PDF, DOC, DOCX) <span className="text-red-500">*</span>
            </label>

            <label className="mt-2 flex flex-col items-center justify-center w-full rounded-lg border border-dashed border-gray-300 px-4 py-5 cursor-pointer hover:bg-gray-50 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-500 mb-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16.5v-9m0 0L8.25 11.25M12 7.5l3.75 3.75M6 16.5a4.5 4.5 0 01-.75-8.94A5.25 5.25 0 0115.75 6a4.5 4.5 0 01.75 8.94"
                />
              </svg>

              {/* TEXTE DYNAMIQUE */}
              <span className="text-sm text-gray-600">
                {cvFile ? cvFile.name : "Cliquez pour uploader votre CV"}
              </span>

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>

            {/* ERREUR */}
            {error && (
              <p className="text-red-500 text-xs mt-2">
                {error}
              </p>
            )}
          </div>

          {/* MOTIVATION */}
          <div className="mb-6">
            <label className="text-sm font-medium text-gray-700">
              Lettre de motivation <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={5}
              placeholder="Expliquez-nous pourquoi vous souhaitez rejoindre la Clinique Life..."
              className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            />
          </div>

          {/* BOUTON */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium text-sm shadow-md hover:opacity-95 transition"
          >
            Envoyer ma candidature
          </button>

          <p className="text-xs text-gray-400 text-center mt-4">
            Nous étudions toutes les candidatures avec attention et revenons vers vous sous 2 semaines.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Partie6_apropos;