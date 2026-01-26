import React from "react";

import Partie1_apropos from "../components/propos/Partie1_apropos";
import Partie2_apropos from "../components/propos/Partie2_apropos";
import Partie3_apropos from "../components/propos/Partie3_apropos";
import Partie4_apropos from "../components/propos/Partie4_apropos";
import Partie5_apropos from "../components/propos/Partie5_apropos";
import Partie6_apropos from "../components/propos/Partie6_apropos";

const APropos: React.FC = () => {
  return (
    <main className="min-h-screen bg-white pt-[100px]">
      <Partie1_apropos />
      <Partie2_apropos />
      <Partie3_apropos />
      <Partie4_apropos />
      <Partie5_apropos />
      <Partie6_apropos />
     
    </main>
  );
};

export default APropos;