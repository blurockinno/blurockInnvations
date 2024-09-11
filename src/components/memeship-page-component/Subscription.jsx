import { useNavigate } from "react-router-dom";
import OmsMemebershipCard from "../OmsMemebershipCard";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

const Subscription = () => {
  const navigate = useNavigate();
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
        navigate("/profile");
      } catch (error) {
        console.error("Failed to update payment details:", error);
      } finally {
        setIspayamentDone(false);
      }
    };

    if (isPaymentDone) {
      updatePaymentDetails();
    }
  }, [isPaymentDone, currentUser?.companyId, navigate]);
  // handle on payment initiate
  const handleOnSubscribe = async (rupee, softwareName) => {
    //if user not exist
    // navigate to signup module
    if (!currentUser) {
      navigate("/sign-up");
    }

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
          softwareName: softwareName,
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
    <>
      <div className="text-center">
        <h1 className=" font-bold md:text-5xl text-white">
          Subscription <h1 className="text-[#146EF5]">Plans</h1>
        </h1>
        <OmsMemebershipCard handleOnPaymentSend={handleOnSubscribe} />
        {/* <section className="flex justify-center">
          <div className="w-full h-auto space-x-9 bg-white rounded-2xl flex justify-evenly items-center py-4 mb-2">
            <div className="h-[500px] w-[400px] bg-[#141415] rounded-xl shadow-2xl flex flex-col justify-between items-center py-10">
              <div className="text-start w-full pl-6">
                <h1 className="text-3xl font-bold text-white">Basic</h1>
                <h1 className="flex text-[44px] font-bold text-white pt-1">
                  ₹1000<p className="font-thin">/mo</p>
                </h1>
              </div>
              <div className="w-[280px] h-auto bg-white rounded-2xl flex items-center justify-center">
                <ul className="py-5">
                  <li className="flex items-center mb-2">
                    <svg
                      className="w-6 h-6 text-green-500 "
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-gray-700">Unlimited projects</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-6 h-6 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-gray-700">24/7 support</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-6 h-6 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-gray-700">Custom integrations</span>
                  </li>
                </ul>
              </div>


              <button className="w-[280px] h-[48px]  bg-[#146EF5] hover:bg-[#1159c5] rounded-2xl text-white font-bold text-[20px]">Buy Now</button>

            </div>

            <div className="h-[500px] w-[400px] bg-[#141415] rounded-xl shadow-2xl flex flex-col justify-between items-center py-10">
              <div className="text-start w-full pl-6">
                <h1 className="text-3xl font-bold text-white">Professional</h1>
                <h1 className="flex text-[44px] font-bold text-white pt-1">
                  ₹2000<p className="font-thin">/mo</p>
                </h1>
              </div>
              <div className="w-[280px] h-[230px] bg-white rounded-2xl flex items-center justify-center"></div>


              <button className=" flex text-center items-center justify-center w-[280px] h-[48px]  bg-[#146EF5] rounded-2xl text-white font-bold text-[20px] hover:bg-[#1159c5]">Buy Now</button>

            </div>

            <div className="h-[500px] w-[400px] bg-[#141415] rounded-xl shadow-2xl flex flex-col justify-between items-center py-10">
              <div className="text-start w-full pl-6">
                <h1 className="text-3xl font-bold text-white">Enterprise</h1>
                <h1 className="flex text-[44px] font-bold text-white pt-1">
                  ₹3000<p className="font-thin">/mo</p>
                </h1>
              </div>
              <div className="w-[280px] h-[230px] bg-white rounded-2xl flex items-center justify-center"></div>

              <button className="w-[280px] h-[48px]  bg-[#146EF5] hover:bg-[#1159c5] rounded-2xl text-white font-bold text-[20px]">Buy Now</button>

            </div>
          </div>
        </section> */}
      </div>
    </>
  );
};

export default Subscription;
