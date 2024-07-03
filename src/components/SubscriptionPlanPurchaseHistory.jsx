import axios from "axios";
import { useEffect, useState } from "react";

const SubscriptionPlanPurchaseHistory = ({ currentUser }) => {
  const [allSubcribedPlans, setAllSubscribedPlans] = useState([]);

  useEffect(() => {
    // handle for get plans
    const getAllPlans = async () => {
      try {
        const response = await axios.get(
          `/api/v1/subscription/${currentUser.companyId}`
        );

        const { plans } = response.data;
        setAllSubscribedPlans(plans);
      } catch (error) {
        console.log(error);
      }
    };
    getAllPlans();
  }, [currentUser.companyId]);

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full bg-white">
          <thead className="border text-black">
            <tr>
              <th className="py-3 px-4 uppercase font-semibold text-sm">
                Name
              </th>
              <th className="py-3 px-4 uppercase font-semibold text-sm">
                Purchase Date
              </th>
              <th className="py-3 px-4 uppercase font-semibold text-sm">
                Amount
              </th>
              <th className="py-3 px-4 uppercase font-semibold text-sm">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {allSubcribedPlans.map((plan) => (
              <tr
                key={plan.id}
                className="hover:bg-gray-100 text-center capitalize"
              >
                <td className="py-3 px-4 border-gray-200">
                  {plan.softwareName}
                </td>
                <td className="py-3 px-4 border-gray-200">{plan.startDate}</td>
                <td className="py-3 px-4 border-gray-200">5000</td>
                <td className="py-3 px-4  border-gray-200">{plan.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubscriptionPlanPurchaseHistory;
