import { useState } from 'react';
import SalesChart from './components/SalesChart';
import RecentTransactions from './components/RecentTransactions';

const NAV = ['Overview', 'Customers', 'Analytics', 'Settings'];

const KPIS = [
  { label: 'TOTAL REVENUE', value: '$45,231', delta: '+20.1% VS LAST MONTH', tone: 'yellow' },
  { label: 'ACTIVE USERS', value: '2,350', delta: '+180 NEW', tone: '' },
  { label: 'SALES', value: '12,234', delta: '−4% VS LAST MONTH', tone: 'purple' },
  { label: 'ACTIVITY', value: '573', delta: '+201 EVENTS', tone: '' },
];

export default function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={'app' + (isDark ? ' dark' : '')}>
      <header className="topbar">
        <div className="logo-block">DASHLOUD</div>

        <nav className="nav-chips">
          {NAV.map((label, i) => (
            <a key={label} href="#" className={'chip' + (i === 0 ? ' on' : '')}>
              {label}
            </a>
          ))}
        </nav>

        <div className="top-right">
          <button
            className="theme-btn"
            onClick={() => setIsDark((v) => !v)}
            title="Toggle theme"
          >
            {isDark ? 'LIGHT' : 'DARK'}
          </button>
          <div className="live-pill mono">● LIVE · 2026</div>
        </div>
      </header>

      <div className="page-head">
        <h1>
          DATA, <em>LOUD.</em>
        </h1>
        <div className="head-meta">
          WELCOME BACK, CARLOS
          <br />
          07 — 13 NOV 2026 · 17:40 UTC
        </div>
      </div>

      <section className="kpis">
        {KPIS.map((k) => (
          <div key={k.label} className={'kpi ' + k.tone}>
            <div className="kpi-label">{k.label}</div>
            <div className="kpi-value">{k.value}</div>
            <div className="kpi-delta">{k.delta}</div>
          </div>
        ))}
      </section>

      <div className="content">
        <SalesChart isDark={isDark} />
        <RecentTransactions />
      </div>

      <footer className="footbar">
        <span>
          DASHLOUD / <b>ANALYTICS SYSTEM</b>
        </span>
        <span>DATA UPDATED 13:00 UTC</span>
      </footer>
    </div>
  );
}
