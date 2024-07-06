import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import { useDispatch } from "react-redux";

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
      const { user } = response.data;
      console.log(user);
      dispatch(signInSuccess(user));
      navigate("/profile");
    } catch (error) {
      dispatch(signInFailure(error));
      console.error(
        "Error during sign in:",
        error.response?.data?.message || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row justify-center items-center w-full h-[100vh]">
          <form
            className="bg-white border w-[350px] rounded-md px-8 shadow-md"
            onSubmit={handleSubmit}
          >
            <p className="text-3xl font-bold flex justify-center xl:text-2xl xl:pt-6 xl:mb-6 xl:mt-0">
              Continue with Blurock
            </p>
            <div className="flex flex-col gap-2 my-4">
              <label className="font-semibold text-sm" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                className="border mt-1 p-2 rounded-md"
                placeholder="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-sm" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                className="border mt-1 p-2 rounded-md"
                placeholder="Password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-row justify-center xl:mt-6">
              <button
                type="submit"
                disabled={loading}
                className={`flex items-center bg-blue-500 hover:bg-blue-700 px-8 py-2 text-lg rounded-md text-white mt-20 xl:w-auto xl:mt-4 xl:mb-6 ${
                  loading ? "cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Please wait" : "Submit"}
              </button>
            </div>

            <div className="flex justify-end">
              <span className="cursor-pointer text-[12px]">
                Forgot your password?
              </span>
            </div>

            <div className="flex flex-row justify-center xl:mt-2 xl:mb-6 p-2 text-sm">
              <Link to="/sign-up">
                New User?{" "}
                <span className="cursor-pointer text-blue-800">
                  Create Account
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
