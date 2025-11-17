import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateTransaction = () => {
    const { id } = useParams();
    const [transaction, setTransaction] = useState(null);
    const navigate = useNavigate();

    // Load Existing Data
    useEffect(() => {
        fetch(`http://localhost:3000/transactions/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log("Fetched:", data);
                setTransaction(data);
            });
    }, [id]);

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;

        const updatedData = {
            type: form.type.value,
            category: form.category.value,
            amount: Number(form.amount.value),
            description: form.description.value,
            date: form.date.value,
        };

        fetch(`http://localhost:3000/transactions/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    Swal.fire("Updated!", "Transaction Updated Successfully!", "success");
                    navigate(`/transaction/${id}`); // redirect to details page
                } else {
                    Swal.fire("No Changes", "Nothing was updated", "info");
                }
            })
            .catch(() => {
                Swal.fire("Error", "Something went wrong", "error");
            });
    };

    if (!transaction) return <p className="text-center mt-10">Loading...</p>;

    const formattedDate = transaction.date?.slice(0, 10) || "";

    return (
        <div className="max-w-xl mx-auto p-5">
            <h1 className="text-3xl font-bold text-center mb-6">Update Transaction</h1>

            <form onSubmit={handleUpdate} className="card bg-base-100 shadow-xl p-6 border space-y-4">

                <div>
                    <label className="font-bold">Type</label>
                    <select name="type" defaultValue={transaction.type} className="select select-bordered w-full">
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                </div>

                <div>
                    <label className="font-bold">Category</label>
                    <input type="text" name="category" defaultValue={transaction.category} className="input input-bordered w-full" />
                </div>

                <div>
                    <label className="font-bold">Amount</label>
                    <input type="number" name="amount" defaultValue={transaction.amount} className="input input-bordered w-full" />
                </div>

                <div>
                    <label className="font-bold">Description</label>
                    <textarea name="description" defaultValue={transaction.description} className="textarea textarea-bordered w-full"></textarea>
                </div>

                <div>
                    <label className="font-bold">Date</label>
                    <input type="date" name="date" defaultValue={formattedDate} className="input input-bordered w-full" />
                </div>

                <button className="btn btn-primary bg-[#00C9E5] w-full mt-3">Update</button>
            </form>
        </div>
    );
};

export default UpdateTransaction;
