import React from "react";
import Globe from "../../assets/Globe.png";
import Sante from "../../assets/Sante.png";
import Facebook from "../../assets/Facebook.png";
import Calendrier from "../../assets/Calendrier.png";
import Wave from "../../assets/Wave.png";
import Cli from "../../assets/cli.png";
import { Link } from 'react-router-dom';


const AccueilCartes: React.FC = () => {
  return (
    /* 🔒 WRAPPER ANTI OVERFLOW */
    <div className="relative w-full min-h-screen overflow-hidden">

      {/* ================= TITRE ================= */}
      <div className="absolute top-[clamp(3rem,9vw,9.5rem)] left-0 right-0 z-10 pointer-events-none">
        <h1
          className="
            font-corpline
            pl-[clamp(2rem,6vw,10rem)]
            text-[clamp(3.6rem,9.6vw,10.6rem)]
            text-white
            tracking-[0.16em]
            select-none
            leading-none
            max-w-full
            overflow-hidden
          "
        >
          CLINIQUE&nbsp;LIFE
        </h1>

        {/* reflet */}
        <div
          className="
            absolute left-0 bottom-5 w-full
            h-[clamp(2rem,4vw,3rem)]
            bg-gradient-to-b
            from-[rgba(210,222,234,0)]
            via-[rgba(210,222,234,0.85)]
            to-[rgba(210,222,234,1)]
            blur-[10px]
            pointer-events-none
          "
        />
      </div>


      {/* ================= IMAGE CENTRALE ================= */}
     <div
  className="
    absolute z-20 
    left-1/2 
    top-[clamp(10rem,18vh,14rem)]
    -translate-x-1/2
    w-[clamp(220px,45vw,407px)]
    2xl:w-[clamp(220px,45vw,457px)]
    h-auto
    max-h-[clamp(300px,50vh,620px)]
    pointer-events-none
  "
>
        <div className="relative w-full h-full">
          <img src={Cli} className="w-full h-auto object-contain" />
          <div 
            className="absolute inset-0 backdrop-blur-2xl pointer-events-none"
            style={{
              maskImage: 'linear-gradient(to top, black 0%, black 15%, transparent 40%)',
              WebkitMaskImage: 'linear-gradient(to top, black 0%, black 15%, transparent 40%)'
            }}
          />
        </div>
      </div>

      {/* ================= CARTE INFO ================= */}
      <div
  className="
    absolute
    top-[clamp(18rem,25vh,20rem)]
    2xl:top-[clamp(23rem,25vh,20rem)]
    left-[clamp(0.8rem,2vw,2rem)]
    w-[clamp(180px,14vw,260px)]
    h-[clamp(220px,16vw,296px)]
    bg-[#F5FAFD]
    rounded-tr-[clamp(90px,10vw,140px)]
    p-[clamp(1rem,1.6vw,2rem)]
    shadow-md z-30
    flex flex-col justify-end
  "
>
        <img src={Globe} className="w-40 h-40 mb-2" />
        <p className="text-[clamp(0.9rem,1.1vw,1.25rem)] leading-relaxed">
          <span className="text-blue-600 font-semibold">La Clinique Life</span>{" "}
          incarne une <b>fiabilité</b> médicale d'envergure <b>mondiale</b>.
        </p>
      </div>

      {/* ================= SATISFACTION ================= */}
     <div
  className="
    absolute right-0
    bottom-[clamp(15rem,30vh,17rem)]
    2xl:bottom-[clamp(17rem,30vh,17rem)]
    w-[clamp(260px,20vw,382px)]
    h-auto
    min-h-[clamp(100px,8vw,180px)]
    bg-white
    rounded-l-[clamp(120px,12vw,180px)]
    p-[clamp(1rem,1.6vw,2.5rem)]
    shadow-md z-30
    flex items-center justify-end
  "
>
        <img
          src={Sante}
          className="w-[clamp(55px,5.5vw,133px)] h-[clamp(55px,5.5vw,133px)] mr-[clamp(0.6rem,1vw,1.5rem)] object-contain flex-shrink-0"
        />
        <div className="flex flex-col items-end">
          <h2 className="text-[clamp(0.8rem,1.2vw,1.4rem)] font-bold text-emerald-500 mb-1 whitespace-nowrap">
            SATISFACTION
          </h2>
          <div className="flex gap-[clamp(0.2rem,0.3vw,0.5rem)]">
            {"★★★★★".split("").map((_, i) => (
              <span
                key={i}
                className="text-yellow-400 text-[clamp(0.8rem,1.3vw,1.5rem)]"
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ================= WAVE ================= */}
      <img
        src={Wave}
        className="
          absolute right-0 bottom-[clamp(40px,5vw,60px)]
          w-[clamp(220px,22vw,382px)]
          h-auto
          max-h-[clamp(130px,12vw,260px)]
          object-contain z-20 pointer-events-none
        "
      />

      {/* ================= PRIORITÉ ================= */}
      <div
        className="
          absolute bottom-0 right-0
          w-[clamp(220px,28vw,480px)]
          h-[clamp(40px,5vw,60px)]
          pl-[clamp(3rem,10vw,9rem)]
          bg-white shadow-md z-30
          flex items-center justify-center text-center
        "
        style={{ clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0% 100%)" }}
      >
        <div className="leading-tight">
          <p className="text-[clamp(0.7rem,1vw,1.25rem)] whitespace-nowrap">
            <span className="text-[#2B4E7E] font-bold">Votre santé</span>, notre engagement
          </p>
          <p className="text-[#2B4E7E] font-bold text-[clamp(0.7rem,1vw,1.25rem)] whitespace-nowrap">
            7 jours / 7
          </p>
        </div>
      </div>

      {/* ================= SUIVEZ-NOUS ================= */}
      <a
        href="https://www.facebook.com/cliniclife8/?locale=fr_FR"
        target="_blank"
        rel="noopener noreferrer"
        className="
          absolute bottom-0 left-0
          w-[clamp(220px,28vw,480px)]
          h-[clamp(40px,5vw,60px)]
          pr-[clamp(3rem,10vw,9rem)]
          bg-white shadow-md z-30
          flex items-center justify-center gap-[clamp(0.8rem,2vw,1.5rem)]
          hover:bg-gray-50 transition-colors cursor-pointer
        "
        style={{ clipPath: "polygon(0 0, 92% 0, 100% 100%, 0% 100%)" }}
      >
        <img 
          src={Facebook} 
          className="w-[clamp(28px,3vw,40px)] h-[clamp(28px,3vw,40px)]" 
          alt="Facebook"
        />
        <span className="text-[clamp(0.8rem,1.2vw,1.125rem)] font-semibold tracking-widest">
          Suivez-nous
        </span>
      </a>

     {/* ================= BOUTON ================= */}
      <Link
        to="/rdv"
        className="
          absolute bottom-[clamp(1.2rem,2vw,2rem)]
          left-1/2 -translate-x-1/2
          w-[clamp(200px,22vw,300px)]
          h-[clamp(42px,5vw,50px)]
          bg-white rounded-full shadow-lg z-40
          flex items-center justify-center gap-4
          hover:scale-105 transition
        "
      >
        <img src={Calendrier} className="w-[clamp(20px,3vw,28px)] h-[clamp(20px,3vw,28px)]" alt="calendrier" />
        <span className="text-[clamp(0.7rem,1vw,0.95rem)] font-bold tracking-widest text-black">
          Prendre Rendez-vous
        </span>
      </Link>

    </div>
  );
};

export default AccueilCartes;