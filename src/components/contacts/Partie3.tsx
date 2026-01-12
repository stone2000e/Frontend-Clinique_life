import { MapPin } from "lucide-react";

export default function Partie3() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* TITRE */}
        <h2 className="text-3xl font-bold text-gray-900">
          Venez nous voir
        </h2>

        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Nous sommes facilement accessibles en transport en commun et disposons
          d’un parking.
        </p>

        {/* CARTE */}
        <div className="mt-10 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl shadow-lg px-6 py-12 flex flex-col items-center">
          {/* ICON */}
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center shadow-md">
            <MapPin className="text-white" size={26} />
          </div>

          {/* TEXTE */}
          <h3 className="mt-4 font-semibold text-gray-900">
            Clinique Life
          </h3>

          <p className="text-sm text-gray-600 mt-1">
            Angré GESTOCI
          </p>
          <p className="text-sm text-gray-500">
            300 m après Pharmacie Alliance
          </p>

          {/* BOUTON */}
          <a
            href="https://www.google.com/maps/place/CLINIQUE+M%C3%89DICALE+LIFE/@5.4114731,-3.9716629,17z/data=!3m1!4b1!4m6!3m5!1s0xfc193799b22a97b:0x5a22fb6fb3abb026!8m2!3d5.4114731!4d-3.969088!16s%2Fg%2F11t6qw58ym?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-2 text-white text-sm font-medium shadow hover:bg-blue-700 transition"
          >
            Obtenir l’itinéraire
          </a>
        </div>
      </div>
    </section>
  );
}
