import React, { useState } from "react";
import { Lock, Eye, EyeOff, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DEMO_ACCOUNTS = [
  { email: "admin@clinique-life.com", password: "admin123", role: "admin1" },
  { email: "admin2@clinique-life.com", password: "admin123", role: "admin2" },
];

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const valid = DEMO_ACCOUNTS.find(
      (a) => a.email === email && a.password === password
    );

    if (!valid) {
      setError("Email ou mot de passe incorrect");
      return;
    }

    localStorage.setItem("admin", valid.role);

    if (valid.role === "admin2") {
      navigate("/admin2");
    } else {
      navigate("/admin");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-emerald-50 px-4">

      <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden mt-20">

        <div className="bg-[linear-gradient(90deg,#155DFC_0%,#00BBA7_100%)] p-8 text-center text-white">
          <div className="mx-auto w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
            <Lock size={32} />
          </div>
          <h2 className="text-2xl font-bold">Administration</h2>
          <p className="text-white/80 text-sm">Clinique Life</p>
        </div>

        <div className="p-8 space-y-6">

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@clinique-life.com"
                className="w-full border rounded-xl pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Mot de passe</label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-3 top-3 text-gray-400"
              >
                {show ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 border border-red-200 rounded-xl px-4 py-3 text-sm">
              {error}
            </div>
          )}

          <button
            onClick={handleLogin}
            className="w-full py-3 rounded-xl text-white font-semibold bg-[linear-gradient(90deg,#155DFC_0%,#00BBA7_100%)] hover:opacity-90 transition"
          >
            Se connecter
          </button>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-gray-700 space-y-2">
            <p className="font-semibold">Comptes de démonstration :</p>
            <p>Admin 1 : admin@clinique-life.com / admin123</p>
            <p>Admin 2 : admin2@clinique-life.com / admin123</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
