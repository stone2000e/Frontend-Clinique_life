import Partie1 from "../components/contacts/Partie1";
import Partie2 from "../components/contacts/Partie2";
import Partie3 from "../components/contacts/Partie3";

export default function Contact() {
  return (
    <main
      className="
        min-h-screen
        bg-white
        pt-[100px]
        overflow-x-hidden
      "
    >
      <Partie1 />
      <Partie2 />
      <Partie3 />
    </main>
  );
}