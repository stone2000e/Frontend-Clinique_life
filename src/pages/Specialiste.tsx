import React from "react";
import Titre from "../components/specialiste/Titre";
import Teams from "../components/specialiste/Teams";

const Specialiste: React.FC = () => {
  return (
    <div className="w-full">
      <Titre />
       <Teams />

      
      {/* Les autres parties de la page seront ajoutées ici */}
    </div>
  );
};

export default Specialiste;
