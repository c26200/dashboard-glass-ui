import { Home, BarChart2, Users, Settings, LogOut } from "lucide-react";
import { motion } from "framer-motion";

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: "Overview", active: true },
    { icon: Users, label: "Customers", active: false },
    { icon: BarChart2, label: "Analytics", active: false },
    { icon: Settings, label: "Settings", active: false },
  ];

  return (
    <motion.aside 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      // Fíjate: h-screen (altura completa), fixed (fijo a la izquierda)
      className="fixed left-0 top-0 z-50 h-screen w-64 border-r border-white/10 bg-dark-bg/80 backdrop-blur-xl p-6"
    >
      {/* Logo */}
      <div className="mb-10 flex items-center gap-3 px-2">
        <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold">D</div>
        <span className="text-xl font-bold tracking-tight">DashGlass</span>
      </div>

      {/* Menú */}
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 group
              ${item.active 
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20" 
                : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
          >
            <item.icon size={20} />
            <span className="font-medium">{item.label}</span>
          </a>
        ))}
      </nav>

      {/* Botón de Salir abajo */}
      <div className="absolute bottom-8 left-6 right-6">
        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-400 hover:bg-red-500/10 transition-colors">
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </motion.aside>
  );
};

export default Sidebar;