import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyTransactions = () => {
    const { user } = useContext(AuthContext);
    const [transactions, setTransactions] = useState([]);

    // Fetch User Specific Transactions
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/transactions?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                    setTransactions(data);
                });
        }
    }, [user?.email]);

    // Delete Handler
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This transaction will be deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, Delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/transactions/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your transaction was removed.", "success");
                            setTransactions(transactions.filter((t) => t._id !== id));
                        }
                    });
            }
        });
    };

    return (
        <div className="max-w-6xl mx-auto p-5">

            <h1 className="text-3xl font-bold mb-6 text-center">
                My Transactions ({transactions.length})
            </h1>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {transactions.map((item) => (
                    <div key={item._id} className="card bg-base-100 shadow-xl border">
                        <div className="card-body">
                            <div className="flex justify-between gap-10 items-center">
                                <h2 className="card-title capitalize">
                                    {item.type} Transaction
                                </h2>
                                <p className="bg-amber-200 rounded-2xl py-1.5 px-2.5"><span></span> {item.date}</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p><span className="font-bold">Category:</span> {item.category}</p>
                                <p><span className="font-bold">Amount:</span> ${item.amount}</p>
                            </div>
                            <div className="card-actions justify-between mt-4">


                                <Link to={`/transaction/${item._id}`}>
                                    <button className="btn btn-sm bg-green-800 text-white">
                                        View Details
                                    </button>
                                </Link>


                                <Link to={`/transaction/update/${item._id}`}>
                                    <button className="btn btn-sm bg-gradient-to-r from-[#1C352D] to-[#6AA97B] text-white">
                                        Update
                                    </button>
                                </Link>


                                <button
                                    onClick={() => handleDelete(item._id)}
                                    className="btn btn-sm bg-red-800 text-white"
                                >
                                    Delete
                                </button>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default MyTransactions;
