import React, { useState } from "react";
import {
  CalendarDays,
  MessageSquare,
  Users,
  FileText,
  LayoutDashboard,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/life.png";

import VueEnsemble from "./VueEnsemble";
import Rdv from "./Rdv";
import Messages from "./Messages";
import Recrutement from "./Recrutement";
import GestionContenu from "./GestionContenu";

/* ---------- MENU ITEM ---------- */
const MenuItem = ({ icon, label, active, onClick, sidebarOpen }: any) => (
  <div
    onClick={onClick}
    className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all
      ${
        active
          ? "bg-gradient-to-r from-blue-500 to-emerald-400 text-white shadow-md"
          : "text-gray-500 hover:bg-gray-100"
      }
    `}
  >
    {icon}
    {sidebarOpen && <span className="font-medium">{label}</span>}
  </div>
);

const Admin: React.FC = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("Vue d'ensemble");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const logout = () => {
    localStorage.removeItem("admin");
    navigate("/admin-login");
  };

  const renderPage = () => {
    switch (activePage) {
      case "Vue d'ensemble":
        return <VueEnsemble />;
      case "Rendez-vous":
        return <Rdv />;
      case "Messages":
        return <Messages />;
      case "Recrutement":
        return <Recrutement />;
      case "Gestion contenu":
        return <GestionContenu />;
      default:
        return <VueEnsemble />;
    }
  };

  const menuItems = [
    { icon: <LayoutDashboard size={18} />, label: "Vue d'ensemble" },
    { icon: <CalendarDays size={18} />, label: "Rendez-vous" },
    { icon: <MessageSquare size={18} />, label: "Messages" },
    { icon: <Users size={18} />, label: "Recrutement" },
    { icon: <FileText size={18} />, label: "Gestion contenu" },
  ];

  return (
    <div className="min-h-screen flex bg-[#F5FAFF]">

      {/* ---------- SIDEBAR ---------- */}
      <aside
        className={`bg-white border-r flex flex-col justify-between py-6 transition-all duration-300
          ${sidebarOpen ? "w-64 px-5" : "w-20 px-3"}
        `}
      >
        {/* LOGO */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <img src={logo} className="w-10 h-10 rounded-xl object-contain" />
            {sidebarOpen && (
              <div className="ml-3">
                <h2 className="font-bold text-gray-800">Clinique Life</h2>
                <p className="text-sm text-gray-400">Admin Niveau 1</p>
              </div>
            )}
          </div>

          {/* MENU */}
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <MenuItem
                key={item.label}
                {...item}
                active={activePage === item.label}
                onClick={() => setActivePage(item.label)}
                sidebarOpen={sidebarOpen}
              />
            ))}
          </nav>
        </div>

        {/* LOGOUT */}
        <button
          onClick={logout}
          className="flex items-center gap-3 text-red-600 px-4 py-3 rounded-xl hover:bg-red-50 transition"
        >
          <LogOut size={18} />
          {sidebarOpen && <span className="font-medium">Déconnexion</span>}
        </button>
      </aside>

      {/* ---------- CONTENT ---------- */}
      <div className="flex-1 flex flex-col">

        {/* TOP BAR */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-6">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-medium">Administrateur 1</p>
              <p className="text-xs text-gray-400">Gestion complète</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-emerald-400 text-white rounded-full flex items-center justify-center">
              <Users size={18} />
            </div>
          </div>
        </header>

        {/* PAGE */}
        <main className="flex-1 p-8 overflow-y-auto">
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

export default Admin;
