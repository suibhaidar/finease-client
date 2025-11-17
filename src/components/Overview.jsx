import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { ArrowDownCircle, ArrowUpCircle, Wallet } from "lucide-react";

const Overview = () => {
    const { user, loading, setLoading } = useContext(AuthContext);
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
        <div className="bg-gradient-to-br from-[#61839B] to-[#1C352D] py-10 px-6 md:px-16">
            <h2 className="text-3xl font-bold text-center text- mb-10">
                Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div className="bg-white shadow-md hover:shadow-lg transition rounded-2xl p-6 flex flex-col items-center border-t-4 border-blue-500">
                    <Wallet className="w-10 h-10 text-blue-500 mb-3" />
                    <h3 className="text-xl font-semibold text-gray-700">Total Balance</h3>
                    <p className="text-2xl font-bold text-gray-900 mt-2">${overview.balance}</p>
                </div>

                <div className="bg-white shadow-md hover:shadow-lg transition rounded-2xl p-6 flex flex-col items-center border-t-4 border-green-500">
                    <ArrowDownCircle className="w-10 h-10 text-green-500 mb-3" />
                    <h3 className="text-xl font-semibold text-gray-700">Total Income</h3>
                    <p className="text-2xl font-bold text-gray-900 mt-2">${overview.totalIncome}</p>
                </div>
                <div className="bg-white shadow-md hover:shadow-lg transition rounded-2xl p-6 flex flex-col items-center border-t-4 border-red-500">
                    <ArrowUpCircle className="w-10 h-10 text-red-500 mb-3" />
                    <h3 className="text-xl font-semibold text-gray-700">Total Expenses</h3>
                    <p className="text-2xl font-bold text-gray-900 mt-2">${overview.totalExpenses}</p>
                </div>

            </div>
        </div>
    );
};

export default Overview;
