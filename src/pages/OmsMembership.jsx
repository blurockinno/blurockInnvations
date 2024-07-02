import { useSelector } from "react-redux";
import OmsMemebershipCard from "../components/OmsMemebershipCard";
import axios from "axios";
import { useEffect, useState } from "react";

const OmsMembership = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [isPaymentDone, setIspayamentDone] = useState(false);

  //useeffect for update the payement details
  useEffect(() => {
    const updatePaymentDetails = async () => {
      try {
        const response = await axios.put(
          `/api/v1/subscription/${currentUser.companyId}`
        );
        console.log(response);
      } catch (error) {
        console.error("Failed to update payment details:", error);
      } finally {
        setIspayamentDone(false);
      }
    };

    if (isPaymentDone) {
      updatePaymentDetails();
    }
  }, [isPaymentDone, currentUser.companyId]);

  // handle on payment initiate
  const handleOnSubscribe = async (rupee) => {
    try {
      const response = await axios.post(
        "/api/v1/subscription/createOrder",
        {
          amount: rupee,
          currency: "INR",
          receipt: "receipt#1",
          userId: currentUser._id,
          companyId: currentUser.companyId,
          plan: "Basic",
          startDate: Date.now(),
          status: "Active",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { order } = response.data;
      console.log(response.data);

      const options = {
        key: "rzp_test_ZmLv5TQfQoKPD0", // Enter the Key ID generated from the Dashboard
        amount: rupee, // Amount is in currency subunits. Default currency is INR. Hence, 500 refers to 500 paise
        currency: "INR",
        name: "Blurock Innovations",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: order.id, // Use the order ID obtained from the response
        handler: async function (response) {
          const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
            response;
          try {
            const validateResponse = await axios.post(
              "/api/v1/subscription/validate-payment",
              { razorpay_payment_id, razorpay_order_id, razorpay_signature },
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );

            const { message } = validateResponse.data;
            console.log(message);
            setIspayamentDone(true);
          } catch (validateError) {
            console.error("Failed to validate payment:", validateError);
          }
        },
        prefill: {
          name: "B.Biruly",
          email: "biruly2000@example.com",
          contact: "+91-6200932331",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new window.Razorpay(options);

      rzp1.on("payment.failed", function (response) {
        alert(`Code: ${response.error.code}`);
        alert(`Description: ${response.error.description}`);
        alert(`Source: ${response.error.source}`);
        alert(`Step: ${response.error.step}`);
        alert(`Reason: ${response.error.reason}`);
        alert(`Order ID: ${response.error.metadata.order_id}`);
        alert(`Payment ID: ${response.error.metadata.payment_id}`);
      });

      rzp1.open();
    } catch (error) {
      console.error("Failed to create order:", error);
    }
  };
  return (
    <div className="mt-20">
      <OmsMemebershipCard handleOnPaymentSend={handleOnSubscribe} />
    </div>
  );
};

export default OmsMembership;
