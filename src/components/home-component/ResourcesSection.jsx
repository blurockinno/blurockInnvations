import src1 from "../../assets/src-1.jpeg";
import src2 from "../../assets/src-2.jpeg";
import src3 from "../../assets/src-3.jpeg";

const ResourcesSection = () => {
  return (
    <div className="bg-[#141415] h-auto py-20 plus-jakarta-sans">
      <h6 className="text-[#146EF5] text-center uppercase font-semibold">
        Resources
      </h6>
      <h1 className="text-white text-center text-3xl md:text-4xl lg:text-5xl font-bold p-4 leading-tight">
        Automate it all, and save hours
      </h1>

      <p className="text-gray-400 text-center text-sm md:text-lg px-4 md:px-0">
        We bring together everything that’s required to build software.
      </p>
      <p className="text-gray-400 text-center text-sm md:text-lg px-4 md:px-0">
        Reach more customers, save time and money, and boost sales.
      </p>
      
      <div className="px-4 md:px-20 lg:px-40 mt-10">
        <div className="flex flex-col md:flex-row rounded-lg bg-[#1D1F20]">
          <div className="p-10 md:p-20 w-full md:w-[40%] flex flex-col items-center justify-center">
            <p className="text-white text-2xl font-semibold text-center md:text-left">
              Harness the power of{" "}
              <span className="text-[#146ef5]">artificial intelligence</span> to
              gain insights from your data
            </p>
            <p className="text-gray-400 mt-5 text-center md:text-left">
              Our analytics software employs advanced algorithms to interpret
              complex data sets, empowering you to make data-driven decisions
              that fuel business growth.
            </p>
          </div>
          <div className="w-full md:w-[60%] p-5 md:p-10">
            <img src={src1} alt="src-1" className="rounded-lg" />
          </div>
        </div>
      </div>

      <div className="px-4 md:px-20 lg:px-40 mt-10">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          <div className="p-10 w-full md:w-1/2 flex flex-col items-start justify-center bg-[#1D1F20] rounded-lg">
            <p className="text-white text-2xl font-semibold">
              Cloud computing
              <span className="text-[#146ef5]"> infrastructure</span>
            </p>
            <p className="text-gray-400 mt-5">
              Lower cost, greater efficiency, faster deployment and more
              innovation. Increases service levels, reduces service outages and
              improve the customer experience.
            </p>
            <img src={src2} alt="src-2" className="mt-10 rounded-lg" />
          </div>
          <div className="p-10 w-full md:w-1/2 flex flex-col items-start justify-center bg-[#1D1F20] rounded-lg">
            <p className="text-white text-2xl font-semibold">
              Performance and
              <span className="text-[#146ef5]"> optimization</span>
            </p>
            <p className="text-gray-400 mt-5">
              Discover strategies to optimize workflows, improve response times,
              and maximize efficiency. Implement best practices to ensure your
              software operates smoothly.
            </p>
            <img src={src3} alt="src-3" className="mt-10 rounded-lg" />
          </div>
        </div>
      </div>

      <div className="bg-[#1D1F20] h-[0.7px] mx-4 md:mx-20 lg:mx-40 my-24" />
    </div>
  );
};

export default ResourcesSection;
