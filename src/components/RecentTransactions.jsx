import { ArrowUpRight, ArrowDownLeft, MoreHorizontal } from "lucide-react";

const transactions = [
  { id: 1, name: "Apple Store", date: "Today, 10:42 AM", amount: "-$1,200.00", status: "Completed", type: "expense", avatar: "🍎", color: "bg-gray-800" },
  { id: 2, name: "Freelance Payment", date: "Yesterday, 4:00 PM", amount: "+$2,450.00", status: "Completed", type: "income", avatar: "💰", color: "bg-green-900/30" },
  { id: 3, name: "AWS Services", date: "Tue, 12:30 PM", amount: "-$124.50", status: "Pending", type: "expense", avatar: "☁️", color: "bg-orange-900/30" },
  { id: 4, name: "Spotify Premium", date: "Mon, 9:00 AM", amount: "-$14.99", status: "Completed", type: "expense", avatar: "🎵", color: "bg-green-900/30" },
  { id: 5, name: "Client Refund", date: "Sun, 8:15 PM", amount: "-$350.00", status: "Failed", type: "expense", avatar: "👤", color: "bg-red-900/30" },
  { id: 6, name: "Netflix", date: "Sat, 7:00 PM", amount: "-$15.00", status: "Completed", type: "expense", avatar: "🎬", color: "bg-red-900/30" },
  { id: 7, name: "Gym Membership", date: "Sat, 10:00 AM", amount: "-$45.00", status: "Completed", type: "expense", avatar: "💪", color: "bg-blue-900/30" },
];

// 1. Recibimos la prop { isDarkMode }
const RecentTransactions = ({ isDarkMode }) => {
  
  // 2. Definimos el color de texto base según el modo
  const textColor = isDarkMode ? "text-white" : "text-slate-800";
  const subTextColor = isDarkMode ? "text-gray-400" : "text-slate-500";
  const hoverColor = isDarkMode ? "hover:bg-white/5" : "hover:bg-black/5";

  return (
    <div className="flex flex-col h-full w-full">
      <div className={`flex items-center justify-between p-6 pb-4 border-b flex-shrink-0 ${isDarkMode ? 'border-white/5' : 'border-slate-200'}`}>
        {/* Usamos textColor para el título */}
        <h2 className={`text-xl font-bold ${textColor}`}>Recent Transactions</h2>
        <button className={`p-2 rounded-lg transition-colors ${hoverColor} ${subTextColor}`}>
          <MoreHorizontal size={20} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 pt-4 space-y-3">
        {transactions.map((tx) => (
          <div 
            key={tx.id} 
            className={`flex items-center justify-between p-3 rounded-xl transition-all cursor-pointer group border border-transparent ${hoverColor}`}
          >
            <div className="flex items-center gap-4">
              <div className={`h-10 w-10 rounded-full flex items-center justify-center text-lg shadow-sm ${tx.color} ${!isDarkMode && 'text-white'}`}>
                {tx.avatar}
              </div>
              <div>
                {/* Usamos textColor para el nombre */}
                <p className={`font-medium text-sm ${textColor}`}>{tx.name}</p>
                <p className={`text-xs ${subTextColor}`}>{tx.date}</p>
              </div>
            </div>
            <div className="text-right">
              {/* Lógica para el precio: Si es ingreso es verde, si es gasto usa textColor (blanco u oscuro) */}
              <p className={`font-bold text-sm ${tx.type === 'income' ? 'text-emerald-500' : textColor}`}>
                {tx.amount}
              </p>
              <span className={`text-[10px] uppercase tracking-wider font-semibold ${
                  tx.status === 'Completed' ? subTextColor : 
                  tx.status === 'Pending' ? 'text-orange-500' : 'text-red-500'
                }`}>
                  {tx.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;