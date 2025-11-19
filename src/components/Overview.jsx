import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { ArrowDownCircle, ArrowUpCircle, Wallet } from "lucide-react";
import Loading from "../pages/Loading";

const Overview = () => {
    const { user, loading, setLoading } = useContext(AuthContext);
    const [overview, setOverview] = useState({balance:0,totalIncome:0,totalExpenses:0});


    useEffect(() => {

        const fetchTransactions = async () => {
            try {
                const res = await fetch(`https://finease-server-ten.vercel.app/transactions?email=${user.email}`);
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

    if (loading) return <Loading></Loading>

    return (
        <div className="bg-gradient-to-br from-[#61839B] to-[#0F1D46] py-10 px-6 md:px-16">
            <div className="max-w-5xl mx-auto flex flex-col justify-center">
                <div className="relative inline-block mb-3">
                    <span
                        className="px-5 py-4 pr-24 font-semibold bg-base-100 text-primary block"

                    >
                        Overview
                    </span>
                    <span
                        className="absolute top-0 right-0 h-full w-24 flex items-center justify-center text-xl text-white"
                        style={{
                            background: "#0F1D46",
                            clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)",
                        }}
                    >
                        
                    </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                    <div className="bg-base-100 shadow-md hover:shadow-lg transition rounded-2xl p-6 flex flex-col items-center border-t-4 border-blue-500">
                        <Wallet className="w-10 h-10 text-blue-500 mb-3" />
                        <h3 className="text-xl font-semibold ">Total Balance</h3>
                        <p className="text-2xl font-bold mt-2">${overview.balance}</p>
                    </div>

                    <div className="bg-base-100 shadow-md hover:shadow-lg transition rounded-2xl p-6 flex flex-col items-center border-t-4 border-green-500">
                        <ArrowDownCircle className="w-10 h-10 text-green-500 mb-3" />
                        <h3 className="text-xl font-semibold">Total Income</h3>
                        <p className="text-2xl font-bold mt-2">${overview.totalIncome}</p>
                    </div>
                    <div className="bg-base-100 shadow-md hover:shadow-lg transition rounded-2xl p-6 flex flex-col items-center border-t-4 border-red-500">
                        <ArrowUpCircle className="w-10 h-10 text-red-500 mb-3" />
                        <h3 className="text-xl font-semibold ">Total Expenses</h3>
                        <p className="text-2xl font-bold mt-2">${overview.totalExpenses}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Overview;
