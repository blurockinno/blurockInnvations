const ProductSection = () => {
  return (
    <div className="bg-white plus-jakarta-sans py-20">
      <div className="flex flex-col items-center justify-center">
        <h6 className="text-[#146EF5] text-center uppercase">product</h6>
        <h1 className="text-[#141415] text-center text-5xl font-bold p-4">
          Full-cycle software development
        </h1>
        <p className="text-gray-400 text-center text-lg space-y-10">
          Empower your creativity and craft stunning sites effortlessly while{" "}
          <br />
          enjoying real-time customer support at every step.
        </p>
      </div>

      <div className="flex items-center justify-center mt-20 ">
        <div className="w-9/12 flex gap-20">
          <div className="bg-[#FAFAFC] h-[400px] w-1/2 rounded-md p-12">
            <h3 className="text-2xl font-bold pb-4">
              <span className="text-[#146ef5]">Custom software</span> solutions
            </h3>
            <p className="text-gray-400">
              Tailored software solutions designed exclusively for your business
              needs. From efficient workflow management to customer engagement
              tools to drive productivity.
            </p>
          </div>
          <div className="bg-[#FAFAFC] h-[400px] w-1/2 rounded-md p-12">
            <h3 className="text-2xl font-bold pb-4">
              AI-driven <span className="text-[#146ef5]">marketing tools</span>{" "}
            </h3>
            <p className="text-gray-400">
              Uncover new opportunities, engage your audience effectively, and
              achieve remarkable results. Empower your brand with intelligent
              marketing strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
