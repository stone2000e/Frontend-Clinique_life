import React from "react";
import { Phone, Mail, MapPin, Clock, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaWhatsapp, FaTiktok } from "react-icons/fa";
import Logo from "../assets/life.png";


const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A1424] text-gray-300 pt-24 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">

        {/* LEFT */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img src={Logo} alt="Clinique Life" className="w-10 h-10" />
            <span className="text-xl font-semibold text-white">Clinique Life</span>
          </div>

          <p className="text-gray-400 leading-relaxed max-w-sm">
            Votre santé est notre priorité. Une équipe dévouée pour votre bien-être.
          </p>

          {/* SOCIALS */}
          <div className="flex gap-4 mt-6">
            <a href="
https://web.facebook.com/cliniclife8/?_rdc=1&_rdr#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center transition">
              <FaFacebookF size={18} />
            </a>

            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-emerald-500 flex items-center justify-center transition">
              <FaWhatsapp size={20} />
            </a>

            <a href="https://www.tiktok.com/@cliniclife7" className="w-10 h-10 rounded-full bg-white/10 hover:bg-pink-500 flex items-center justify-center transition">
              <FaTiktok size={18} />
            </a>
          </div>
        </div>

        {/* CENTER */}
        <div>
          <h3 className="text-white font-semibold mb-6">Contact</h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-blue-400" />
              +225 07 77 34 48 59
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-blue-400" />
              +225 27 22 26 94 03
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-blue-400" />
              info@clinique-life.com
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-blue-400" />
              Angré GESTOCI (300 m après Pharmacie Alliance)
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="text-white font-semibold mb-6">Horaires d'ouverture</h3>
          <div className="flex items-start gap-3">
            <Clock size={20} className="text-emerald-400 mt-1" />
            <div>
              <p className="text-emerald-400 font-semibold">Ouvert 24h/24 – 7j/7</p>
              <p className="text-gray-400 text-sm mt-1">
                Urgences disponibles en tout temps
              </p>
            </div>
          </div>
        </div>

      </div>

      

  {/* BOTTOM BAR */}
<div className="border-t border-white/10 mt-20 pt-6">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">

    <span>© 2025 Clinique Life. Tous droits réservés.</span>

    {/* ADMIN BUTTON */}
<Link
  to="/admin-login"
  className="
    group
    inline-flex items-center
    gap-3
    px-6 py-3
    rounded-2xl
    bg-white/10
    text-gray-400
    whitespace-nowrap
    hover:bg-white/20
    hover:text-white
    transition-all duration-300
    shadow-lg
    backdrop-blur-md
  "
>
  <Lock
    size={18}
    className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300"
  />
  <span className="text-sm font-semibold">Espace Administration</span>
</Link>


  </div>
</div>
    </footer>
  );
};

export default Footer;
