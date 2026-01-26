import { Mail, TrendingUp } from "lucide-react";

export default function VueEnsemble2() {
  return (
    <div className="space-y-8">
      {/* Bandeau de bienvenue */}
      <div className="rounded-2xl p-8 bg-gradient-to-r from-blue-600 to-teal-400 text-white shadow">
        <h1 className="text-3xl font-bold">
          Bienvenue, Administrateur 2 👋
        </h1>
        <p className="mt-2 text-white/90">
          Voici un aperçu de votre tableau de bord
        </p>
      </div>

      {/* Cartes statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Carte abonnés */}
        <StatCard
          icon={<Mail size={22} />}
          iconBg="bg-teal-100"
          title="Abonnés Newsletter"
          value="1247"
          extra="+15%"
          footer="Taux d'ouverture: 42%"
        />

        {/* Carte campagnes */}
        <StatCard
          icon={<TrendingUp size={22} />}
          iconBg="bg-pink-100"
          title="Campagnes"
          value="15"
          extra="+5"
          footer="Ce mois-ci"
        />
      </div>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function StatCard({
  icon,
  iconBg,
  title,
  value,
  extra,
  footer,
}: {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  value: string;
  extra?: string;
  footer?: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow transition">
      <div className="flex items-start justify-between">
        <div className={`p-3 rounded-xl ${iconBg}`}>{icon}</div>
        {extra && (
          <span className="text-green-600 font-semibold text-sm">
            {extra}
          </span>
        )}
      </div>

      <div className="mt-4">
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-3xl font-bold mt-1">{value}</p>
      </div>

      {footer && (
        <p className="mt-3 text-sm text-gray-500 flex items-center gap-1">
          {footer}
        </p>
      )}
    </div>
  );
}
