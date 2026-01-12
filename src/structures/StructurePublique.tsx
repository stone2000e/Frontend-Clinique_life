import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function StructurePublique() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
