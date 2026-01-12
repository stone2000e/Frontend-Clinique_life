import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Rdv from "./pages/Rdv";
import Login from "./pages/Login";
import Admin from "./pages/Admin/Admin";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./pages/contact";
import Service from "./pages/service";
import Apropos from "./pages/a_propos";
import Blog from "./pages/Blog";
import LireArticle from "./pages/LireArticle";


import StructurePublique from "./structures/StructurePublique";
import StructureAdmin from "./structures/StructureAdmin";
import Admin2 from "./pages/Admin/Admin2";

export default function App() {
  return (
    <Router>
      <ScrollToTop />

      <Routes>

        {/* SITE PUBLIC */}
        <Route element={<StructurePublique />}>
          <Route path="/" element={<Accueil />} />
          <Route path="/rdv" element={<Rdv />} />
          <Route path="/admin-login" element={<Login />} />
          <Route path="/a-propos" element={<Apropos />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/lire" element={<LireArticle />} />
        </Route>

        {/* ADMIN */}
        <Route element={<StructureAdmin />}>
          <Route path="/admin" element={<Admin />} />
           <Route path="/admin2" element={<Admin2/>}/>
        </Route>

      </Routes>
    </Router>
  );
}
