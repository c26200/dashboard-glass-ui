import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', value: 4000 },
  { name: 'Tue', value: 3000 },
  { name: 'Wed', value: 5000 },
  { name: 'Thu', value: 2780 },
  { name: 'Fri', value: 1890 },
  { name: 'Sat', value: 6390 },
  { name: 'Sun', value: 3490 },
];

// Este es el cuadrito que sale cuando pasas el mouse (Toolip Personalizado)
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-xl border border-white/10 bg-dark-card/90 p-4 backdrop-blur-md shadow-xl">
        <p className="mb-2 text-sm font-medium text-gray-400">{label}</p>
        <p className="text-xl font-bold text-blue-400">
          ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

const SalesChart = () => {
  return (
    <div className="h-[400px] w-full p-4">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Revenue Analytics</h2>
        <select className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-400 focus:outline-none">
          <option>This Week</option>
          <option>Last Week</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            {/* Gradiente Azul para el relleno */}
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>
          
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
          
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#9ca3af', fontSize: 12 }} 
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#9ca3af', fontSize: 12 }} 
            tickFormatter={(value) => `$${value}`}
          />
          
          <Tooltip content={<CustomTooltip />} />
          
          <Area 
            type="monotone" 
            dataKey="value" 
            stroke="#3b82f6" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorValue)" 
            // AGREGA ESTAS DOS LÍNEAS PARA LA ANIMACIÓN LENTA:
            animationDuration={2000} 
            animationEasing="ease-in-out"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;