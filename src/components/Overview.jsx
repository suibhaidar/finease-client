import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Overview = () => {
  const { user,loading, setLoading } = useContext(AuthContext);
  const [overview, setOverview] = useState({});
  

  useEffect(() => {
    
    const fetchTransactions = async () => {
      try {
        const res = await fetch(`http://localhost:3000/transactions?email=${user.email}`);
        const transactions = await res.json();

        let totalIncome = 0;
        let totalExpenses = 0;

        transactions.forEach(tx => {
          const amount = Number(tx.amount) || 0;
          if (tx.type === "income") totalIncome += amount;
          else if (tx.type === "expense") totalExpenses += amount;
        });

        const balance = totalIncome - totalExpenses;

        setOverview({ balance, totalIncome, totalExpenses });
      } catch (err) {
        console.error("Failed to fetch overview:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [user?.email]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="overview flex gap-4">
      <div className="card bg-white shadow p-4 rounded">
        <h3>Total Balance</h3>
        <p className="text-xl font-bold">{overview.balance}</p>
      </div>
      <div className="card bg-green-100 shadow p-4 rounded">
        <h3>Total Income</h3>
        <p className="text-xl font-bold text-green-700">{overview.totalIncome}</p>
      </div>
      <div className="card bg-red-100 shadow p-4 rounded">
        <h3>Total Expenses</h3>
        <p className="text-xl font-bold text-red-700">{overview.totalExpenses}</p>
      </div>
    </div>
  );
};

export default Overview;
