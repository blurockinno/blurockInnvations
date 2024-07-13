

const ProductSection = () => {
 

  return (
    <div className="bg-white plus-jakarta-sans py-20">
      <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <h6 className="text-[#146EF5] text-center uppercase font-semibold">
          Product
        </h6>
        <h1 className="text-[#141415] text-center text-3xl md:text-4xl lg:text-5xl font-bold p-4">
          Full-cycle software development
        </h1>
        <p className="text-gray-400 text-center text-sm md:text-lg leading-snug space-y-2 md:space-y-0">
          Empower your creativity and craft stunning sites effortlessly while
          
        </p>
        <p className="text-gray-400 text-center text-sm md:text-lg leading-snug space-y-2 md:space-y-0">
          enjoying real-time customer support at every step.
        </p>
      </div>

      <div className="flex items-center justify-center mt-10 md:mt-20">
        <div className="w-full md:w-11/12 lg:w-9/12 flex flex-col md:flex-row gap-8 md:gap-20 px-4 sm:px-6 lg:px-0">
          <div className="bg-[#FAFAFC] h-auto md:h-auto w-full md:w-1/2 rounded-md p-6 md:p-12">
            <h3 className="text-xl md:text-2xl font-bold pb-4">
              <span className="text-[#146ef5]">Custom software</span> solutions
            </h3>
            <p className="text-gray-400 mb-6 md:mb-10">
              Tailored software solutions designed exclusively for your business
              needs. From efficient workflow management to customer engagement
              tools to drive productivity.
            </p>
            {/* {omsSubscribed.length > 0 ? (
              <Link to={"/profile"}>
                <button className="relative px-6 py-2 hover:text-white bg-white isolation-auto z-10 border hover:border-white-600 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full before:bg-blue-600 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">
                  Open Now
                </button>
              </Link>
            ) : (
              <Link to={"/oms-plan"}>
                <button className="relative px-6 py-2 hover:text-white bg-white isolation-auto z-10 border hover:border-white-600 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full before:bg-blue-600 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">
                  See plan
                </button>
              </Link>
            )} */}
          </div>
          <div className="bg-[#FAFAFC] h-auto md:h-auto w-full md:w-1/2 rounded-md p-6 md:p-12">
            <h3 className="text-xl md:text-2xl font-bold pb-4">
              AI-driven <span className="text-[#146ef5]">marketing tools</span>
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
