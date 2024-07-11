import { useState } from "react";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className="bg-[#141415] py-20 px-4 md:px-20 lg:px-40 h-screen flex items-center justify-center plus-jakarta-sans">
      <div className="w-full mx-auto text-center bg-[#146ef5] rounded-lg px-6 py-12 md:py-20 lg:py-28 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-white">
          Ready to transform <br /> your business?
        </h2>
        <p className="text-white text-lg md:text-xl mb-8">
          Leave your email below to start a new project journey <br /> with us.
          Let’s shape the future of your business together.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center sm:flex-row sm:items-stretch justify-center"
        >
          <input
            type="email"
            className="px-4 py-3 mb-3 sm:mb-0  w-full sm:w-auto rounded-md focus:outline-none"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-[#141415] hover:bg-[#1D1F20] hover:text-white text-[#146ef5] px-4 py-3 rounded-md mt-3 sm:mt-0  transition duration-300 ease-in-out"
          >
            Stay in the loop
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeSection;
