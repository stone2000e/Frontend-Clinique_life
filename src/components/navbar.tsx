import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Home, Info, Briefcase, BookOpen, Mail, Calendar, Heart } from "lucide-react";
import logo from "/src/assets/life.png";

const links = [
  { label: "Accueil", path: "/", icon: Home },
  { label: "À propos", path: "/a-propos", icon: Info },
  { label: "Services", path: "/services", icon: Briefcase },
  { label: "Blog", path: "/blog", icon: BookOpen },
  { label: "Contact", path: "/contact", icon: Mail },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NAVBAR VERRE */}
      <nav className="
        fixed top-2 sm:top-3 md:top-4 
        left-1/2 -translate-x-1/2 
        z-50 
        w-[96%] sm:w-[95%] md:w-[95%] lg:w-[92%] 
        max-w-[1400px] 
        h-[60px] sm:h-[65px] md:h-[72px]
        rounded-full 
        border-2 border-white 
        overflow-hidden 
        shadow-lg
      ">
        
        {/* Blur */}
        <div className="absolute inset-0 bg-white/15 backdrop-blur-lg pointer-events-none" />

        {/* Contenu */}
        <div className="relative z-10 flex items-center justify-between h-full px-4 sm:px-5 md:px-6 lg:px-10">
          
          {/* MOBILE & TABLET (< lg) */}
          <div className="flex lg:hidden items-center justify-between w-full">
            {/* Menu Burger */}
            <button
              onClick={() => setIsOpen(true)}
              className="text-2xl sm:text-3xl text-[#134774] hover:text-[#1E80EF] transition"
            >
              ☰
            </button>

            {/* Logo centré */}
            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 object-contain" />
              <span className="font-bold text-[#134774] text-base sm:text-lg md:text-[22px]">
                Clinique Life
              </span>
            </div>

            {/* Espace vide pour équilibrer */}
            <div className="w-8 sm:w-10"></div>
          </div>

          {/* DESKTOP (≥ lg) */}
          <div className="hidden lg:flex items-center justify-between w-full">
            
            {/* Logo */}
            <div className="flex items-center gap-2 lg:gap-3 flex-[1.2]">
              <img src={logo} alt="Logo" className="w-12 lg:w-14 h-12 lg:h-14 object-contain" />
              <span className="font-bold text-black text-lg lg:text-[22px]">
                Clinique Life
              </span>
            </div>

            {/* LINKS */}
            <ul className="flex gap-4 lg:gap-6 xl:gap-10 justify-center items-center flex-[3]">
              {links.map(({ label, path }) => (
                <li key={label}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `px-3 lg:px-4 xl:px-5 py-1.5 rounded-full font-poppins text-sm lg:text-base xl:text-[18px] transition-colors duration-300
                      ${
                        isActive
                          ? "font-semibold text-white bg-gradient-to-b from-[#05D2CE] to-[#007E7B]"
                          : "font-medium text-[#134774] hover:bg-white/20"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* BOUTON RDV Desktop */}
            <div className="flex justify-end flex-[1]">
              <NavLink
                to="/rdv"
                className={({ isActive }) =>
                  `px-5 lg:px-6 xl:px-7 py-2.5 lg:py-3 rounded-full font-medium text-white text-sm lg:text-base transition-transform duration-200 hover:scale-105
                   ${isActive 
                     ? "bg-[linear-gradient(90deg,#155DFC_0%,#00BBA7_100%)]"
                     : "bg-[#1E80EF]"}`
                }
              >
                Rendez-vous
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-[60]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu latéral */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 230, damping: 25 }}
              className="
                fixed top-0 left-0 
                h-full 
                w-[280px] sm:w-[300px] md:w-[320px]
                bg-white
                backdrop-blur-xl
                z-[70] 
                rounded-tr-3xl rounded-br-3xl 
                pt-6 sm:pt-8
                px-6 sm:px-8 
                shadow-2xl
                overflow-y-auto
              "
            >
              {/* Décorations */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>

              {/* Bouton fermer */}
              <button
                onClick={() => setIsOpen(false)}
                className="
                  absolute 
                  top-4 sm:top-6 
                  right-4 sm:right-6 
                  w-10 h-10
                  flex items-center justify-center
                  bg-red-500/10
                  hover:bg-red-500/20
                  rounded-full
                  text-2xl
                  text-red-500
                  transition
                "
              >
                ✕
              </button>

              {/* Logo dans le menu avec décoration */}
              <div className="relative flex items-center gap-3 mb-8 sm:mb-10 mt-8 bg-blue-50/50 backdrop-blur-sm rounded-2xl p-4 shadow-md">
                <img src={logo} alt="Logo" className="w-12 sm:w-14 h-12 sm:h-14 object-contain" />
                <div>
                  <span className="block font-bold text-[#134774] text-base sm:text-lg">
                    Clinique Life
                  </span>
                  <span className="block text-xs text-gray-500">Votre santé, notre priorité</span>
                </div>
              </div>

              {/* Navigation avec icônes */}
              <nav className="relative flex flex-col gap-3 sm:gap-4 text-base sm:text-lg">
                {links.map(({ label, path, icon: Icon }) => (
                  <NavLink
                    key={label}
                    to={path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `relative px-4 py-3 rounded-xl font-poppins font-medium transition-all flex items-center gap-3 group
                      ${isActive 
                        ? "bg-gradient-to-r from-[#05D2CE] to-[#007E7B] text-white shadow-lg scale-105" 
                        : "text-[#134774] hover:bg-white/60 hover:shadow-md hover:scale-102"}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${isActive ? 'bg-white/20' : 'bg-blue-100 group-hover:bg-blue-200'}`}>
                          <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-[#134774]'}`} />
                        </div>
                        <span>{label}</span>
                        {isActive && (
                          <div className="absolute right-2 w-2 h-2 rounded-full bg-white animate-pulse"></div>
                        )}
                      </>
                    )}
                  </NavLink>
                ))}

                {/* Séparateur décoratif */}
                <div className="flex items-center gap-2 my-4">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                  <Heart className="w-4 h-4 text-red-400" fill="currentColor" />
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                </div>

                {/* Bouton RDV dans menu - STYLE SPECIAL */}
                <NavLink
                  to="/rdv"
                  onClick={() => setIsOpen(false)}
                  className="
                    relative
                    bg-gradient-to-r from-[#155DFC] to-[#00BBA7]
                    text-white 
                    px-6 py-4
                    rounded-2xl
                    font-bold
                    text-center
                    shadow-xl
                    hover:shadow-2xl
                    hover:scale-105
                    transition-all
                    flex items-center justify-center gap-3
                    overflow-hidden
                    group
                  "
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <Calendar className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Prendre Rendez-vous</span>
                </NavLink>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;