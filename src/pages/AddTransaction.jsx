import { useContext } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";

const AddTransaction = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const categories = [
        "Salary", "Bonus", "Investment", "Freelance", "Gift", "Interest",
        "Rent", "Groceries", "Utilities", "Transport", "Entertainment", "Health", "Education", "Others",
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const transaction = {
            type: form.type.value,
            category: form.category.value,
            amount: form.amount.value,
            description: form.description.value,
            date: form.date.value,
            email: user.email,
            name: user.displayName,
        };
        console.log(user.email)
        try {
            const res = await fetch("http://localhost:3000/transactions", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(transaction),
            });
            const data = await res.json();
            //console.log(data);
            toast.success("Transaction successfully added!");
            navigate("/my-transactions");
        } catch (err) {
            //console.log(err);
            toast.error("Transaction add fail!");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen p-4">
            <div className="w-full max-w-md bg-base-100 shadow-xl rounded-xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold mb-6 text-center text-primary">
                    Add Transaction
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                   

                    <div className="flex gap-1">
                        <select name="type" className="select select-bordered w-full" defaultValue="income">
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </select>

                       
                        <select
                            name="category"
                            className="select select-bordered w-full"
                            required
                            defaultValue=""
                        >
                            <option value="">Select Category</option>
                            {categories.map((cat, idx) => (
                                <option key={idx} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>

                    <input
                        type="number"
                        name="amount"
                        placeholder="Amount"
                        className="input input-bordered w-full"
                        required
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Description (Optional)"
                        className="input input-bordered w-full"
                    />
                    <input
                        type="date"
                        name="date"
                        className="input input-bordered w-full"
                        required
                    />


                    <input
                        type="email"
                        value={user.email}
                        readOnly
                        className="input input-bordered w-full bg-base-100"
                    />
                    <input
                        type="text"
                        value={user.displayName}
                        readOnly
                        className="input input-bordered w-full bg-base-100"
                    />

                    <button
                        type="submit"
                        className="btn bg-gradient-to-r from-[#0F1D46] to-[#01b2ca] w-full text-white font-semibold"
                    >
                        Add Transaction
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddTransaction;
