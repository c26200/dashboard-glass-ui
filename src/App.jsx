import { useState } from "react";
import GlassCard from "./components/GlassCard";
import Sidebar from "./components/Sidebar";
import SalesChart from "./components/SalesChart";
import RecentTransactions from "./components/RecentTransactions";
import { Users, DollarSign, ShoppingBag, Activity, Sun, Moon } from "lucide-react";

function App() {
  // Estado para el Modo Oscuro (Por defecto true)
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Colores dinámicos según el tema
  const themeStyles = {
    bg: isDarkMode 
      ? "radial-gradient(circle at top left, #1e293b, #0f172a)" // Oscuro original
      : "radial-gradient(circle at top left, #e0f2fe, #f0f9ff)", // Claro (Azul cielo muy suave)
    text: isDarkMode ? "text-white" : "text-slate-800",
    subText: isDarkMode ? "text-gray-400" : "text-slate-500",
  };

  return (
    // Aplicamos el fondo dinámico aquí
    <div 
      className={`min-h-screen transition-all duration-500 ${themeStyles.text}`}
      style={{ background: themeStyles.bg }}
    >
      <Sidebar />

      <main className="ml-64 p-8">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className={themeStyles.subText}>Welcome back, Carlos</p>
          </div>
          
          <div className="flex items-center gap-4">
            {/* BOTÓN TOGGLE DE TEMA */}
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:scale-110 transition-transform shadow-lg"
            >
              {isDarkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-blue-600" />}
            </button>
            
            <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 border-2 border-white/20" />
          </div>
        </header>

        {/* Pasamos el modo oscuro a las tarjetas si queremos que cambien de estilo */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard icon={DollarSign} label="Total Revenue" value="$45,231" sub="+20.1%" color="blue" isDark={isDarkMode} />
          <StatsCard icon={Users} label="Active Users" value="+2350" sub="+180 new" color="purple" isDark={isDarkMode} />
          <StatsCard icon={ShoppingBag} label="Sales" value="+12,234" sub="-4%" color="orange" isDark={isDarkMode} />
          <StatsCard icon={Activity} label="Activity" value="+573" sub="+201" color="pink" isDark={isDarkMode} />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <GlassCard className={`lg:col-span-2 min-h-[450px] ${!isDarkMode && 'bg-white/40 border-slate-200'}`}>
            <SalesChart />
          </GlassCard>

          <GlassCard className={`h-full min-h-[450px] ${!isDarkMode && 'bg-white/40 border-slate-200'}`}>
            <RecentTransactions isDarkMode={isDarkMode} />
          </GlassCard>
        </div>
      </main>
    </div>
  );
}

// Pequeño componente auxiliar para no repetir código en las tarjetas de arriba
function StatsCard({ icon: Icon, label, value, sub, color, isDark }) {
  // Mapa de colores para los iconos
  const colors = {
    blue: "text-blue-400 bg-blue-500/10",
    purple: "text-purple-400 bg-purple-500/10",
    orange: "text-orange-400 bg-orange-500/10",
    pink: "text-pink-400 bg-pink-500/10",
  };

  return (
    <GlassCard className={!isDark ? 'bg-white/40 border-slate-200 shadow-sm' : ''}>
      <div className="flex items-center justify-between mb-4">
        <h3 className={isDark ? "text-gray-300" : "text-slate-500"}>{label}</h3>
        <div className={`p-2 rounded-lg ${colors[color]}`}>
          <Icon size={20} />
        </div>
      </div>
      <h2 className={`text-3xl font-bold ${isDark ? "text-white" : "text-slate-800"}`}>{value}</h2>
      <p className="text-emerald-400 text-xs mt-2 font-medium">{sub} from last month</p>
    </GlassCard>
  );
}

export default App;