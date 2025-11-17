import React from 'react';
import { Target, BarChart3, ShieldCheck, TrendingUp, Clock, Wallet } from "lucide-react";

const points = [
  {
    icon: <Target className="w-6 h-6 text-blue-500" />,
    title: "Set Clear Goals",
    desc: "Financial planning helps you define and achieve your short and long-term goals effectively.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-green-500" />,
    title: "Track Your Progress",
    desc: "Keep an eye on your income, expenses, and savings to stay financially balanced.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-purple-500" />,
    title: "Ensure Financial Security",
    desc: "Be ready for emergencies and protect yourself from financial uncertainty.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-yellow-500" />,
    title: "Grow Your Wealth",
    desc: "Smart investments today can lead to a financially independent tomorrow.",
  },
  {
    icon: <Clock className="w-6 h-6 text-red-500" />,
    title: "Save Time & Effort",
    desc: "A proper plan keeps your money organized and your stress low.",
  },
  {
    icon: <Wallet className="w-6 h-6 text-indigo-500" />,
    title: "Control Your Budget",
    desc: "A well-planned budget helps you limit overspending and maximize savings.",
  },
];

const FinancialPlanning = () => {
    return (
        <section className="bg-gray-50 py-16 px-6 md:px-20 text-center md:text-left">
            <div className="max-w-4xl mx-auto">

                <div className="relative inline-block">
                    <span
                        className="px-5 py-4 pr-24 font-medium text-white block"
                        style={{
                            background: "#61839B",
                            clipPath: "polygon(0 0, 85% 0, 95% 100%, 0% 100%)",
                        }}
                    >
                        Why Financial Planning Matters
                    </span>
                    <span
                        className="absolute top-0 right-0 h-full w-24 flex items-center justify-center text-xl text-white"
                        style={{
                            background: "#1C352D",
                            clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)",
                        }}
                    >
                        ↓
                    </span>
                </div>
                <p className="text-[#1C352D] text-3xl mb-5 font-semibold">
                    Financial planning isn’t just about money — it’s about building a stress-free life.
                    These key points highlight why financial planning is so essential.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    {points.map((point, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-4 bg-white p-5 rounded-xl shadow hover:shadow-md transition duration-300"
                        >
                            {point.icon}
                            <div>
                                <h4 className="font-semibold text-gray-800">{point.title}</h4>
                                <p className="text-gray-600 text-sm">{point.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FinancialPlanning;