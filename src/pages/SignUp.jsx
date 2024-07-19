import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import path from "/assets/path.svg";
import { signUpFailure, signUpStart, signUpSucess } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const SignUp = () => {
  const dispatch =  useDispatch()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    phoneNumber: "",
    employeeRange: "",
    termsAccepted: false,
  });

  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    try {

      //sign up start 
      dispatch(signUpStart())
      
      const response = await axios.post(
        "http://localhost:4000/api/v1/auth/sign-up",
        {
          companyName: formData.companyName,
          fullName: formData.fullName,
          mobileNumber: formData.phoneNumber,
          email: formData.email,
          industrySize: formData.employeeRange,
          isAgreed: formData.termsAccepted,
        }
      );

      const { success, message} = response.data;

      
      
      console.log("Sign Up Successful:", message, success);
      if (success) {
        
        toast.success(message);
        navigate("/success");
      }
    } catch (error) {
      dispatch(signUpFailure())
      console.error(
        "Error during sign up:",
        error.response?.data?.message || error.message
      );
      console.log();
      toast.error(error.response?.data?.message);
      setError(true);
    }
  };

  return (
    <>
      <Toaster />
      <div
        className="w-full h-auto bg-[#141415] plus-jakarta-sans flex flex-col md:flex-row justify-between  "
        style={{
          backgroundImage: `url(${path})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center start",
          backgroundSize: "cover",
        }}
      >
        <div className="plus-jakarta-sans md:w-1/2 w-full  flex flex-col justify-center items-center p-4 md:p-10 gap-4  md:mt-0 mb-10 md:mb-0">
          <span className="text-lg md:text-xl font-semibold text-white">
            Blurock Innovations
          </span>
          <span className="w-full text-center font-semibold text-4xl md:text-6xl  text-white">
            Get started with your free trial
          </span>
        </div>

        <div className="flex w-full md:w-1/2 justify-center items-center p-5 md:py-5 md:p-0 ">
          <div className="flex flex-col p-4 md:p-8 rounded-md w-full md:w-1/2 shadow-lg  bg-[#1D1F20]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label
                  className="font-semibold text-sm text-gray-400"
                  htmlFor="companyName"
                >
                  Company Name
                </label>
                <input
                  id="companyName"
                  name="companyName"
                  className=" mt-1 p-2 rounded-md bg-gray-500"
                  placeholder="Enter Company Name"
                  type="text"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col">
                <label
                  className="font-semibold text-sm text-gray-400"
                  htmlFor="fullName"
                >
                  Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  className=" mt-1 p-2 rounded-md bg-gray-500"
                  placeholder="Full Name"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col">
                <label
                  className="font-semibold text-sm text-gray-400"
                  htmlFor="phoneNumber"
                >
                  Phone Number
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  className=" mt-1 p-2 rounded-md bg-gray-500"
                  placeholder="Phone Number"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col relative">
                <label
                  className="font-semibold text-sm text-gray-400"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    required
                    className=" mt-1 p-2 rounded-md w-full bg-gray-500"
                    placeholder="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex flex-col relative">
                <label
                  className="font-semibold text-sm text-gray-400"
                  htmlFor="employeeRange"
                >
                  Employee Range
                </label>
                <div className="relative">
                  <input
                    id="employeeRange"
                    name="employeeRange"
                    required
                    className=" mt-1 p-2 rounded-md w-full bg-gray-500"
                    placeholder="Employee Range"
                    type="text"
                    value={formData.employeeRange}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex flex-col relative mt-3">
                <label className="text-sm text-gray-400" htmlFor="terms">
                  <input
                    id="terms"
                    name="termsAccepted"
                    type="checkbox"
                    className="mr-2 "
                    checked={formData.termsAccepted}
                    onChange={handleChange}
                  />
                  I agree to the terms and conditions
                </label>
              </div>

              <div className="flex flex-col justify-center mt-4">
                <button
                  type="submit"
                  disabled={error}
                  className={`text-sm py-2 px-3 text-white rounded-md ${
                    error
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-700"
                  } text-center`}
                >
                  {error ? "Please wait..." : "Create Account"}
                </button>
                <div className="text-center mt-5">
                  <span className="text-sm  text-gray-400">
                    Already have an account.{" "}
                    <Link to={"/sign-in"}>
                      <span>Sign In</span>
                    </Link>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
