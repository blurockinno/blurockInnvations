const PaymentHistory = () => {
  const payments = [
    { id: 1, date: "2023-06-01", amount: "$100.00", method: "Credit Card" },
    { id: 2, date: "2023-06-15", amount: "$50.00", method: "PayPal" },
    { id: 3, date: "2023-07-01", amount: "$200.00", method: "Bank Transfer" },
  ];
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Payment History</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm">
                Date
              </th>
              <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm">
                Amount
              </th>
              <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm">
                Method
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {payments.map((payment) => (
              <tr key={payment.id}>
                <td className="w-1/4 py-3 px-4">{payment.date}</td>
                <td className="w-1/4 py-3 px-4">{payment.amount}</td>
                <td className="w-1/4 py-3 px-4">{payment.method}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
