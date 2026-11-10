const transactions = [
  { id: 1, name: 'Apple Store', date: 'Today, 10:42 AM', amount: '-$1,200.00', status: 'Completed', type: 'expense' },
  { id: 2, name: 'Freelance Payment', date: 'Yesterday, 4:00 PM', amount: '+$2,450.00', status: 'Completed', type: 'income' },
  { id: 3, name: 'AWS Services', date: 'Tue, 12:30 PM', amount: '-$124.50', status: 'Pending', type: 'expense' },
  { id: 4, name: 'Spotify Premium', date: 'Mon, 9:00 AM', amount: '-$14.99', status: 'Completed', type: 'expense' },
  { id: 5, name: 'Client Refund', date: 'Sun, 8:15 PM', amount: '-$350.00', status: 'Failed', type: 'expense' },
  { id: 6, name: 'Netflix', date: 'Sat, 7:00 PM', amount: '-$15.00', status: 'Completed', type: 'expense' },
  { id: 7, name: 'Gym Membership', date: 'Sat, 10:00 AM', amount: '-$45.00', status: 'Completed', type: 'expense' },
];

const STATUS = {
  Completed: ['OK', 'ok'],
  Pending: ['WAIT', 'wait'],
  Failed: ['FAIL', 'fail'],
};

export default function RecentTransactions() {
  return (
    <section className="panel">
      <div className="panel-head">
        <h2>RECENT TRANSACTIONS</h2>
        <span>{String(transactions.length).padStart(2, '0')}</span>
      </div>

      <div className="tx-list">
        {transactions.map((tx) => {
          const [label, cls] = STATUS[tx.status] || ['OK', 'ok'];

          return (
            <div className="tx-row" key={tx.id}>
              <span className="tx-name">
                {tx.name}
                <small>{tx.date}</small>
              </span>
              <span className={`tx-status ${cls}`}>{label}</span>
              <span className={`tx-amt ${tx.type === 'income' ? 'pos' : ''}`}>
                {tx.amount}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
