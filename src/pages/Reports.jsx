import { useEffect, useState, use } from "react";
import {
    PieChart, Pie, Tooltip, Cell,
    BarChart, Bar, CartesianGrid, XAxis, YAxis, ResponsiveContainer
} from "recharts";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "./Loading";


const colors = [
    "#4F46E5", "#10B981", "#F59E0B",
    "#EC4899", "#6366F1", "#EF4444",
    "#14B8A6", "#A855F7"
];

const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const Reports = () => {
    const { user, loading, setLoading } = use(AuthContext);
    const [categoryData, setCategoryData] = useState([]);
    const [monthlyData, setMonthlyData] = useState([]);


    useEffect(() => {

        const fetchTransactions = async () => {
            try {
                const res = await fetch(`http://localhost:3000/transactions?email=${user.email}`);
                const data = await res.json();

                const categoryTotals = {};
                data.forEach(tx => {
                    if (!categoryTotals[tx.category]) categoryTotals[tx.category] = 0;
                    categoryTotals[tx.category] += Number(tx.amount);
                });

                setCategoryData(Object.keys(categoryTotals).map(cat => ({
                    name: cat,
                    value: categoryTotals[cat]
                })));


                const monthlyTotals = Array(12).fill(0);
                data.forEach(tx => {
                    const m = new Date(tx.date).getMonth();
                    monthlyTotals[m] += Number(tx.amount);
                });

                setMonthlyData(monthlyTotals.map((total, i) => ({
                    name: monthNames[i],
                    total
                })));

            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchTransactions();
    }, [setLoading, user.email]);

    if (loading) return <Loading></Loading>

    return (
        <>

            <div className=" flex flex-col gap-5 py-6 px-3 bg-base-200 shadow-xl rounded-xl max-w-6xl mx-auto border">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
                    Financial Reports
                </h2>
                <div className="flex justify-center w-full border shadow-xl rounded-xl">
                    <div className="w-full py-4 px-6">
                        <h3 className="text-xl font-semibold mb-4 text-center text-gray-700">
                            Category Breakdown
                        </h3>

                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={categoryData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="45%"
                                    cy="50%"
                                    outerRadius={110}
                                    label={({ name, value }) => `${name}: ${value}`}
                                >
                                    {categoryData.map((entry, index) => (
                                        <Cell key={index} fill={colors[index % colors.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                </div>
                <div className="flex justify-center w-full border shadow-xl rounded-xl" >
                    <div className="w-full">
                        <h3 className="text-xl font-semibold mb-4 text-center text-gray-700">
                            Monthly Summary
                        </h3>

                        <ResponsiveContainer width="100%" height={320}>
                            <BarChart data={monthlyData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="total">
                                    {monthlyData.map((entry, index) => (
                                        <Cell key={index} fill={colors[index % colors.length]} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Reports;
