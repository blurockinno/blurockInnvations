const SubscriptionPlanPurchaseHistory = () => {
  const plans = [
    {
      id: 1,
      name: "Basic Plan",
      date: "2023-06-01",
      price: "$10.00",
      status: "Active",
    },
    {
      id: 2,
      name: "Premium Plan",
      date: "2023-06-15",
      price: "$20.00",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Pro Plan",
      date: "2023-07-01",
      price: "$30.00",
      status: "Active",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Subscription Plans</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4 uppercase font-semibold text-sm">
                Name
              </th>
              <th className="py-3 px-4 uppercase font-semibold text-sm">
                Purchase Date
              </th>
              <th className="py-3 px-4 uppercase font-semibold text-sm">
                Price
              </th>
              <th className="py-3 px-4 uppercase font-semibold text-sm">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {plans.map((plan) => (
              <tr key={plan.id} className="hover:bg-gray-100">
                <td className="py-3 px-4 border-b border-gray-200">
                  {plan.name}
                </td>
                <td className="py-3 px-4 border-b border-gray-200">
                  {plan.date}
                </td>
                <td className="py-3 px-4 border-b border-gray-200">
                  {plan.price}
                </td>
                <td className="py-3 px-4 border-b border-gray-200">
                  {plan.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubscriptionPlanPurchaseHistory;
