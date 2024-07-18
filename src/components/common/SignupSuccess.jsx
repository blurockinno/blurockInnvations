import { CircleCheck } from "lucide-react";
import { Link } from "react-router-dom";

const SignupSuccess = () => {
  return (
    <>
      <div className="bg-[#141415] plus-jakarta-sans h-screen">
        <div className="py-10">
          <p className=" text-center text-gray-400">
            Please verify your account.
          </p>
          <p className=" text-center text-gray-400">
            Verification link sent in your registered email address.
          </p>
          <p className=" text-center text-gray-400">
            Sign in crenditial sent in your registered email address.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <div className="bg-[#1D1F20] p-8 rounded-lg shadow-md w-full max-w-md">
            <h1 className="text-2xl font-bold text-center text-green-400">
            Success
            </h1>
            <p className="mt-4 text-center text-gray-400">
              Thank you for signing up. Your account has been successfully
              created.
            </p>
            <div className="mt-6 flex justify-center">
              <CircleCheck className="text-green-500" size={64} />
            </div>
            <div className="mt-6 flex justify-center">
              <Link to={"/sign-in"}>
                <span className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300">
                  Go to Login
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupSuccess;
