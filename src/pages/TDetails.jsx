import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const TDetails = () => {
  const { id } = useParams();
  const [transaction, setTransaction] = useState(null);
  const [categoryTotal, setCategoryTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        // 1️⃣ Fetch single transaction
        const res = await fetch(`http://localhost:3000/transactions/${id}`);
        const data = await res.json();
        setTransaction(data);

        // 2️⃣ Fetch all transactions for this email
        const allRes = await fetch(
          `http://localhost:3000/transactions?email=${data.email}`
        );
        const allTransactions = await allRes.json();

        // 3️⃣ Calculate total for this category
        const totalAmount = allTransactions
          .filter(tx => tx.category === data.category)
          .reduce((acc, tx) => acc + Number(tx.amount), 0);

        setCategoryTotal(totalAmount);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchTransaction();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!transaction)
    return <p className="text-center mt-10">Transaction not found.</p>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4">Transaction Details</h2>

      <div className="mb-2">
        <span className="font-semibold">Type: </span>
        {transaction.type}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Description: </span>
        {transaction.description}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Amount: </span>
        ${Number(transaction.amount)}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Date: </span>
        {new Date(transaction.date).toLocaleDateString()}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Category: </span>
        {transaction.category}
      </div>

      <div className="mt-4 p-4 bg-gray-100 rounded">
        <span className="font-semibold">
          Total Amount for "{transaction.category}" Category:{" "}
        </span>
        ${categoryTotal}
      </div>
    </div>
  );
};

export default TDetails;
