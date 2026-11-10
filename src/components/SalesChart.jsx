import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', value: 4000 },
  { name: 'Tue', value: 3000 },
  { name: 'Wed', value: 5000 },
  { name: 'Thu', value: 2780 },
  { name: 'Fri', value: 1890 },
  { name: 'Sat', value: 6390 },
  { name: 'Sun', value: 3490 },
];

const SquareDot = ({ cx, cy, ink }) => (
  <rect x={cx - 6} y={cy - 6} width={12} height={12} fill="#5200FF" stroke={ink} strokeWidth={3} />
);

const BrutalTooltip = ({ active, payload, label, isDark }) => {
  if (!active || !payload || !payload.length) return null;
  const border = isDark ? '#F5F3FF' : '#08080D';

  return (
    <div
      style={{
        background: isDark ? '#111116' : '#FFFFFF',
        color: isDark ? '#F5F3FF' : '#08080D',
        border: `3px solid ${border}`,
        boxShadow: `5px 5px 0 ${border}`,
        padding: '8px 12px',
        fontFamily: "'JetBrains Mono', monospace",
      }}
    >
      <div style={{ fontSize: 12, letterSpacing: '.06em' }}>{label}</div>
      <div style={{ fontSize: 18, fontWeight: 500 }}>
        ${payload[0].value.toLocaleString()}
      </div>
    </div>
  );
};

export default function SalesChart({ isDark }) {
  const ink = isDark ? '#F5F3FF' : '#08080D';
  const grid = isDark ? '#2A2A33' : '#D9D9D9';
  const muted = isDark ? '#B9B6C8' : '#4A4A4A';

  return (
    <section className="panel">
      <div className="panel-head">
        <h2>REVENUE ANALYTICS</h2>
        <span>MON — SUN</span>
      </div>

      <div className="chart-box">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 14, right: 12, left: 0, bottom: 0 }}>
            <CartesianGrid stroke={grid} vertical={false} />
            <XAxis
              dataKey="name"
              axisLine={{ stroke: ink }}
              tickLine={false}
              tick={{ fill: muted, fontSize: 12, fontFamily: "'JetBrains Mono', monospace" }}
              dy={8}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              width={54}
              tick={{ fill: muted, fontSize: 12, fontFamily: "'JetBrains Mono', monospace" }}
              tickFormatter={(v) => `$${(v / 1000).toFixed(1)}k`}
            />
            <Tooltip
              content={<BrutalTooltip isDark={isDark} />}
              cursor={{ stroke: ink, strokeWidth: 2 }}
            />
            <Line
              type="linear"
              dataKey="value"
              stroke={ink}
              strokeWidth={4}
              dot={(p) => <SquareDot key={p.index} {...p} ink={ink} />}
              activeDot={{ r: 7, fill: '#5200FF', stroke: ink, strokeWidth: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
