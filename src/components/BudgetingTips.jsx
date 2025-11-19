import { Lightbulb, PiggyBank, Wallet, TrendingDown, Coins } from "lucide-react";

const tips = [
    {
        icon: <PiggyBank className="w-6 h-6 text-green-500" />,
        title: "Save First, Spend Later",
        desc: "Always set aside a portion of your income for savings before making other expenses.",
    },
    {
        icon: <Wallet className="w-6 h-6 text-blue-500" />,
        title: "Track Your Expenses",
        desc: "Keep a daily record of your spending to identify unnecessary costs.",
    },
    {
        icon: <TrendingDown className="w-6 h-6 text-red-500" />,
        title: "Cut Unnecessary Costs",
        desc: "Avoid buying things you don’t really need — small savings add up!",
    },
    {
        icon: <Coins className="w-6 h-6 text-yellow-500" />,
        title: "Plan Monthly Budgets",
        desc: "Set clear monthly limits for each category and stick to them.",
    },
    {
        icon: <Lightbulb className="w-6 h-6 text-purple-500" />,
        title: "Invest Smartly",
        desc: "Start small but invest regularly to build long-term wealth.",
    },
];

const BudgetingTips = () => {
    return (
        <section className="text-center md:text-left px-4 md:px-0 py-8">
            <div className="max-w-5xl mx-auto">
                <div>

                    {/* head */}
                    <div className="relative inline-block">
                        <span
                            className="px-5 py-3 pr-20 font-medium text-white block text-sm sm:text-base md:text-lg"
                            style={{
                                background: "#61839B",
                                clipPath: "polygon(0 0, 85% 0, 95% 100%, 0% 100%)",
                            }}
                        >
                            Budgeting Tips
                        </span>
                        <span
                            className="absolute top-0 right-0 h-full w-16 sm:w-20 flex items-center justify-center text-lg sm:text-xl text-white"
                            style={{
                                background: "#0F1D46",
                                clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)",
                            }}
                        >
                            ↓
                        </span>
                    </div>

                    <p className="text-primary text-2xl sm:text-3xl mb-5 font-semibold mt-2">
                        Learn how to take control of your money with these simple and effective budgeting strategies.
                    </p>
                </div>

                <div className=" flex flex-col lg:flex-row items-center justify-between gap-10 mt-6">
                    {/* Image Side */}
                    <div className="lg:w-1/2 w-full">
                        <img
                            src="https://i.ibb.co.com/7NCMp1L0/premium-photo-1688821129852-3b9f032176c1.jpg"
                            alt="Budgeting illustration"
                            className="w-full rounded-2xl shadow-lg"
                        />
                    </div>

                    {/* Text Side */}
                    <div className="lg:w-1/2 w-full text-left">
                        <div className="space-y-4 sm:space-y-5">
                            {tips.map((tip, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    {tip.icon}
                                    <div>
                                        <h4 className="font-semibold">{tip.title}</h4>
                                        <p className=" text-sm text-accent">{tip.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BudgetingTips;
