import { useState } from "react";
import { MessageSquare, Search, Eye, Trash2, Check, Mail, Phone, Clock } from "lucide-react";

type MessageStatus = "Non lu" | "Lu" | "Répondu";

interface Message {
  id: number;
  name: string;
  email: string;
  phone: string;
  date: string;
  subject: string;
  content: string;
  status: MessageStatus;
}

const initialMessages: Message[] = [
  { id: 1, name: "Amadou Touré", email: "amadou.toure@email.com", phone: "+225 07 77 34 48 59", date: "2024-12-17 14:30", subject: "Demande d'information sur les tarifs", content: "Bonjour, je souhaiterais connaître les tarifs de vos consultations en gynécologie. Merci", status: "Répondu" },
  { id: 2, name: "Sarah Bamba", email: "sarah.bamba@email.com", phone: "+225 05 12 34 56 78", date: "2024-12-16 10:15", subject: "Question sur les horaires", content: "Bonjour, êtes-vous ouverts le dimanche ? J'aimerais prendre rendez-vous pour un examen.", status: "Lu" },
  { id: 3, name: "Patrick Yao", email: "patrick.yao@email.com", phone: "+225 07 88 99 00 11", date: "2024-12-15 16:45", subject: "Remerciements", content: "Je tiens à remercier toute l'équipe de la clinique pour la qualité de la prise en charge. Excellent service !", status: "Répondu" },
  { id: 4, name: "Fatima Diallo", email: "fatima.diallo@email.com", phone: "+225 01 23 45 67 89", date: "2024-12-17 09:20", subject: "Renseignement sur la maternité", content: "Bonjour, proposez-vous des cours de préparation à l'accouchement ? Quels sont les tarifs ?", status: "Non lu" },
];

const statusStyles: Record<MessageStatus, string> = {
  "Non lu": "bg-blue-100 text-blue-700",
  Lu: "bg-gray-100 text-gray-700",
  Répondu: "bg-green-100 text-green-700",
};

export default function Messages() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<MessageStatus | "Tous">("Tous");
  const [openFilter, setOpenFilter] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  const filteredMessages = messages.filter((msg) => {
    const matchSearch = msg.name.toLowerCase().includes(search.toLowerCase()) || msg.email.toLowerCase().includes(search.toLowerCase()) || msg.subject.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filter === "Tous" || msg.status === filter;
    return matchSearch && matchStatus;
  });

  const updateStatus = (id: number, status: MessageStatus) => {
    setMessages(prev => prev.map(msg => msg.id === id ? { ...msg, status } : msg));
    if (selectedMessage && selectedMessage.id === id) {
      setSelectedMessage(prev => prev ? { ...prev, status } : null);
    }
  };

  const deleteMessage = (id: number) => {
    setMessages(prev => prev.filter(msg => msg.id !== id));
    if (selectedMessage && selectedMessage.id === id) {
      setSelectedMessage(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center gap-3 text-3xl font-bold text-gray-900">
          <MessageSquare className="text-purple-600" size={32} />
          Messages de Contact
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Total", value: messages.length, color: "border-purple-500" },
            { label: "Non lus", value: messages.filter(m => m.status === "Non lu").length, color: "border-blue-500" },
            { label: "Lus", value: messages.filter(m => m.status === "Lu").length, color: "border-gray-500" },
            { label: "Répondus", value: messages.filter(m => m.status === "Répondu").length, color: "border-green-500" },
          ].map(stat => (
            <div key={stat.label} className={`bg-white rounded-2xl p-6 shadow-sm border-l-4 ${stat.color}`}>
              <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-4 flex flex-col md:flex-row gap-4 shadow-sm">
          <div className="flex items-center gap-2 flex-1 border border-gray-300 rounded-xl px-4 py-2">
            <Search size={18} className="text-gray-400" />
            <input placeholder="Rechercher par nom, email ou sujet..." className="w-full outline-none text-sm" value={search} onChange={e => setSearch(e.target.value)} />
          </div>

          <div className="relative">
            <button onClick={() => setOpenFilter(!openFilter)} className="w-full md:w-56 text-left border border-gray-300 rounded-xl px-4 py-2.5 flex justify-between items-center text-sm bg-white hover:bg-gray-50 transition">
              <span className="font-medium text-gray-700">{filter === "Tous" ? "Tous les messages" : filter}</span>
              <svg className={`w-4 h-4 transition-transform text-gray-500 ${openFilter ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openFilter && (
              <div className="absolute z-50 mt-2 w-full md:w-56 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
                {["Tous", "Non lu", "Lu", "Répondu"].map(status => (
                  <button key={status} onClick={() => { setFilter(status as MessageStatus | "Tous"); setOpenFilter(false); }} className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition text-gray-700 font-medium">
                    {status === "Tous" ? "Tous les messages" : status}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-2xl divide-y shadow-sm">
          {filteredMessages.length === 0 && <div className="p-8 text-center"><p className="text-gray-400 text-sm">Aucun message trouvé.</p></div>}

          {filteredMessages.map(msg => (
            <div key={msg.id} className="p-6 flex flex-col md:flex-row md:justify-between gap-4 hover:bg-gray-50 transition">
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-3">
                  <p className="font-bold text-lg text-gray-900">{msg.name}</p>
                  <span className={`px-3 py-1 rounded-lg text-xs font-semibold ${statusStyles[msg.status]}`}>{msg.status}</span>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-2"><Mail size={16} className="text-gray-400" /> {msg.email}</span>
                  <span className="flex items-center gap-2"><Phone size={16} className="text-gray-400" /> {msg.phone}</span>
                  <span className="flex items-center gap-2"><Clock size={16} className="text-gray-400" /> {msg.date}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-900">
                  <MessageSquare size={16} className="text-purple-600" />
                  <p className="font-semibold">{msg.subject}</p>
                </div>

                <p className="text-sm text-gray-600">{msg.content}</p>
              </div>

              <div className="flex md:flex-col gap-2 justify-start md:justify-center">
                <button onClick={() => { setSelectedMessage(msg); if (msg.status === "Non lu") updateStatus(msg.id, "Lu"); }} className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 flex items-center justify-center transition">
                  <Eye size={18} />
                </button>

                <button onClick={() => updateStatus(msg.id, "Répondu")} className="w-10 h-10 rounded-full bg-green-100 text-green-600 hover:bg-green-200 flex items-center justify-center transition">
                  <Check size={18} />
                </button>

                <button onClick={() => deleteMessage(msg.id)} className="w-10 h-10 rounded-full bg-red-100 text-red-600 hover:bg-red-200 flex items-center justify-center transition">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Détails du message</h2>
                <button onClick={() => setSelectedMessage(null)} className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition">
                  <Mail size={24} className="text-gray-600" />
                </button>
              </div>

              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-1">Nom</p>
                <p className="text-xl font-bold text-gray-900">{selectedMessage.name}</p>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <p className="font-bold text-gray-900">{selectedMessage.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Téléphone</p>
                  <p className="font-bold text-gray-900">{selectedMessage.phone}</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-1">Sujet</p>
                <p className="text-xl font-bold text-gray-900">{selectedMessage.subject}</p>
              </div>

              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-2">Message</p>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-700">{selectedMessage.content}</div>
              </div>

              <div className="mb-8">
                <p className="text-sm text-gray-500 mb-2">Statut</p>
                <span className={`inline-block px-4 py-2 rounded-lg text-sm font-semibold ${statusStyles[selectedMessage.status]}`}>{selectedMessage.status}</span>
              </div>

              <p className="text-sm text-gray-500 mb-8">Message reçu le {selectedMessage.date}</p>

              <div className="grid grid-cols-2 gap-4">
                <button onClick={() => { updateStatus(selectedMessage.id, "Lu"); setSelectedMessage(null); }} className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-4 rounded-xl transition">
                  Marquer comme lu
                </button>
                <button onClick={() => { updateStatus(selectedMessage.id, "Répondu"); setSelectedMessage(null); }} className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition">
                  Marquer comme répondu
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}