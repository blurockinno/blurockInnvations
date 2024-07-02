/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";

const PaymentHistory = ({ currentUser }) => {
  const [allSubcribedPlans, setAllSubscribedPlans] = useState([]);

  useEffect(() => {
    // handle for get plans
    const getAllPlans = async () => {
      try {
        const response = await axios.get(
          `/api/v1/subscription/${currentUser.companyId}`
        );

        const { plans } = response.data;
        const paidHistory = plans.map((item) => item.paymentHistory).flat();
        setAllSubscribedPlans(paidHistory);
      } catch (error) {
        console.log(error);
      }
    };
    getAllPlans();
  }, [currentUser.companyId]);
  console.log(allSubcribedPlans);

  const handleOnFormateDate = (date) => {
    const formateDate = new Date(date);
    return formateDate.toLocalString();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Payment History</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm">
                Invoice Id
              </th>
              <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm">
                Date
              </th>
              <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {allSubcribedPlans.map((payment, index) => (
              <tr key={index} className="text-center">
                <td className="w-1/4 py-3 px-4">{payment.invoiceId}</td>
                <td className="w-1/4 py-3 px-4">
                  {payment.date}
                </td>
                <td className="w-1/4 py-3 px-4">{payment.amount / 100}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
