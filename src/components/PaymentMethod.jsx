const PaymentMethod = () => {
  const payments = [
    {
      id: 1,
      updateAt: "2023-06-01",
      upi: "biruly@oksbi",
    },
    {
      id: 2,
      updateAt: "2023-06-01",
      upi: "biruly@oksbi",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Payment Method</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm">
                UPI ID
              </th>
              <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm">
                Update at
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {payments.map((payment) => (
              <tr key={payment.id} className="text-center">
                <td className="w-1/4 py-3 px-4">{payment.upi}</td>
                <td className="w-1/4 py-3 px-4">{payment.updateAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentMethod;
