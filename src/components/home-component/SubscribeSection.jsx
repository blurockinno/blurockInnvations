import { useState } from "react";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {};
  return (
    <section className="bg-[#141415] py-20 px-40 h-screen flex items-center justify-center plus-jakarta-sans">
      <div className="w-full mx-auto text-center bg-[#146ef5] rounded-lg md:px-60 md:py-32">
        <h2 className="text-5xl font-semibold mb-4 text-white">
          Ready to transform <br/> your business?
        </h2>
        <p className="text-white mb-8">
          Leave your email below to start a new project journey <br/> with us. Let’s
          shape the future of your business together.
        </p>
        <form onSubmit={handleSubmit} className="flex justify-center">
          <input
            type="email"
            className="px-4 py-2 w-64 sm:w-80 rounded-l-md focus:outline-none"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-[#141415] hover:bg-[#1D1F20] hover:text-white text-[#146ef5] px-4 py-2 rounded-r-md transition duration-300 ease-in-out"
          >
            Stay in the loop
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeSection;
