import { useState } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import { useDispatch } from "react-redux";

import path from "/assets/path.svg";
import toast, { Toaster } from "react-hot-toast";

const SignIn = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      dispatch(signInStart());
      const response = await axios.post("/api/v1/auth/sign-in", {
        email: formData.email,
        password: formData.password,
      });
      console.log("Sign In Successful:", response.data);
      const { user, message } = response.data;
      toast.success(message)
      dispatch(signInSuccess(user));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error));
      console.error(
        "Error during sign in:",
        error.response?.data?.message || error.message
      );
      toast.error( error.response?.data?.message)
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster />
      <div
        className="w-full h-auto bg-[#141415] plus-jakarta-sans"
        style={{
          backgroundImage: `url(${path})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center start",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col items-center justify-center w-full h-screen px-5">
          <form
            className="bg-[#1D1F20] w-full max-w-sm  rounded-md px-8 py-10 md:py-5 shadow-md"
            onSubmit={handleSubmit}
          >
            <p className="text-2xl font-bold text-center xl:text-2xl xl:pt-4 xl:mb-6 xl:mt-0 text-white">
              Continue with Blurock
            </p>
            <div className="flex flex-col gap-2 my-4">
              <label
                className="font-semibold text-sm text-gray-400"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                className="mt-1 p-2 rounded-md bg-gray-500 text-black"
                placeholder="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                className="font-semibold text-sm text-gray-400"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                className="mt-1 p-2 rounded-md bg-gray-500 text-black"
                placeholder="Password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex justify-end mt-5">
              <span className="cursor-pointer text-[12px] text-gray-400">
                Forgot your password?
              </span>
            </div>
            <div className="flex flex-col items-center">
              <button
                type="submit"
                disabled={loading}
                className={`  flex items-center justify-center bg-[#146ef5] hover:bg-blue-700 px-8 py-2 text-lg rounded-md text-white mt-8 w-full ${
                  loading ? "cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Please wait" : "Submit"}
              </button>
              {/* <div className="flex justify-center mt-5  text-sm text-gray-400">
                <Link to="/sign-up" className="cursor-pointer text-[#146ef5]">
                  New User? Create account
                </Link>
              </div> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
