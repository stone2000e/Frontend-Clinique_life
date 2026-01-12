import Partie1Service from "../components/services/Partie1_service";
import Partie2_service from "../components/services/Partie2_service";
import Partie3_service from "../components/services/Partie3_service";
import Partie4_service from "../components/services/Partie4_service";
import Partie5_service from "../components/services/Partie5_service";
import Partie6_service from "../components/services/Partie6_service";
import Partie7_service from "../components/services/Partie7_service";
import Partie8_service from "../components/services/Partie8_service";
import Partie9_service from "../components/services/Partie9_service";

const Service = () => {
  return (
    <main
      className="
        min-h-screen
        bg-white
        pt-[100px]
        overflow-x-hidden
      "
    >
   
      <Partie1Service />

   
      <Partie2_service />

      <Partie3_service />

      <Partie4_service />
  
      <Partie5_service />

      <Partie6_service />
    
      <Partie7_service />
   
      <Partie8_service />
      
      <Partie9_service />
    </main>
  );
};

export default Service;