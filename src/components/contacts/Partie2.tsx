import {
  Phone,
  Calendar,
  Send,
} from "lucide-react";

import FacebookIcon from "../../assets/Facebook.png";

export default function Partie2() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* ================= FORMULAIRE ================= */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Envoyez-nous un message
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.
          </p>

          <form className="mt-6 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Nom complet <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Jean Dupont"
                  className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2 text-sm
                             focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Adresse email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="jean@email.com"
                  className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2 text-sm
                             focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Téléphone
                </label>
                <input
                  type="tel"
                  placeholder="+225 07 00 00 00 00"
                  className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2 text-sm
                             focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Sujet <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Demande d'information"
                  className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2 text-sm
                             focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Votre message <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={5}
                placeholder="Décrivez votre demande..."
                className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm
                           focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-xl
                         bg-gradient-to-r from-blue-600 to-teal-500
                         text-white py-3 font-medium shadow-md
                         hover:opacity-90 transition"
            >
              <Send size={18} />
              Envoyer le message
            </button>

            <p className="text-xs text-gray-400 text-center">
              En envoyant ce formulaire, vous acceptez notre politique de confidentialité.
            </p>
          </form>
        </div>

        {/* ================= COLONNE DROITE ================= */}
        <div className="space-y-6">

          {/* ===== URGENCE ===== */}
          <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-teal-500 p-6 text-white shadow-lg">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Calendar size={20} />
              </div>
              <h3 className="font-semibold">
                Besoin d’un rendez-vous urgent ?
              </h3>
            </div>

            <p className="text-sm mt-2 opacity-90">
              Appelez-nous directement pour une prise en charge rapide.
            </p>

            <div className="mt-4 space-y-3">
              <a
                href="tel:+2250777344859"
                className="bg-white text-blue-600 rounded-lg flex items-center justify-center gap-2 py-2 font-medium
                           hover:bg-blue-600 hover:text-white transition"
              >
                <Phone size={16} />
                +225 07 77 34 48 59
              </a>

              <a
                href="tel:+2252722269403"
                className="bg-white text-blue-600 rounded-lg flex items-center justify-center gap-2 py-2 font-medium
                           hover:bg-blue-600 hover:text-white transition"
              >
                <Phone size={16} />
                +225 27 22 26 94 03
              </a>
            </div>
          </div>

          {/* ===== FAQ ===== */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">
              Questions fréquentes
            </h3>

            <div className="space-y-3 text-sm text-gray-600">
              <div>
                <p className="font-medium text-gray-800">Quels sont vos horaires ?</p>
                <p>Ouvert 24h/24 et 7j/7.</p>
              </div>

              <div>
                <p className="font-medium text-gray-800">Prenez-vous les urgences ?</p>
                <p>Oui, un service d’urgence est disponible.</p>
              </div>

              <div>
                <p className="font-medium text-gray-800">Où nous trouver ?</p>
                <p>Angré GESTOCI, 300 m après Pharmacie Alliance.</p>
              </div>
            </div>
          </div>

          {/* ===== CONTACTS ===== */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-4">
              Contactez-nous
            </h3>

            <div className="grid grid-cols-2 gap-4">

              {/* WHATSAPP – LOGO OFFICIEL SVG */}
              <a
                href="https://wa.me/2250777344859"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center rounded-xl py-4
                           bg-green-50 text-green-600
                           hover:bg-green-500 hover:text-white hover:shadow-md
                           transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-6 h-6 fill-current"
                >
                  <path d="M16 0C7.164 0 0 7.164 0 16c0 2.82.738 5.564 2.136 7.98L0 32l8.272-2.124A15.9 15.9 0 0 0 16 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.09c-2.508 0-4.962-.66-7.116-1.908l-.51-.3-4.914 1.26 1.308-4.788-.33-.522A13.04 13.04 0 0 1 2.91 16C2.91 8.56 8.56 2.91 16 2.91S29.09 8.56 29.09 16 23.44 29.09 16 29.09zm7.452-9.36c-.408-.204-2.418-1.194-2.796-1.332-.378-.138-.654-.204-.93.204-.276.408-1.068 1.332-1.308 1.608-.24.276-.48.312-.888.108-.408-.204-1.722-.636-3.276-2.028-1.212-1.08-2.028-2.418-2.268-2.826-.24-.408-.024-.63.18-.834.18-.18.408-.48.612-.72.204-.24.276-.408.408-.684.138-.276.072-.516-.036-.72-.108-.204-.93-2.238-1.272-3.066-.336-.804-.678-.696-.93-.708h-.792c-.276 0-.72.102-1.098.516-.378.408-1.44 1.404-1.44 3.426s1.476 3.978 1.68 4.254c.204.276 2.904 4.434 7.038 6.216.984.426 1.752.684 2.352.876.99.318 1.89.276 2.604.168.792-.12 2.418-.99 2.76-1.944.342-.954.342-1.77.24-1.944-.102-.174-.378-.276-.786-.48z"/>
                </svg>
                <span className="text-sm mt-1">WhatsApp</span>
              </a>

              {/* FACEBOOK */}
              <a
                href="https://www.facebook.com/cliniclife8/?locale=fr_FR"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center rounded-xl py-4
                           bg-blue-50 text-blue-600
                           hover:bg-blue-600 hover:text-white hover:shadow-md
                           transition-all"
              >
                <img
                  src={FacebookIcon}
                  alt="Facebook"
                  className="w-[26px] h-[26px] object-contain"
                  draggable={false}
                />
                <span className="text-sm mt-1">Facebook</span>
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
