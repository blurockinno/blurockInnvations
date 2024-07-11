import src1 from "../../assets/src-1.jpeg";
import src2 from "../../assets/src-2.jpeg";
import src3 from "../../assets/src-3.jpeg";
const ResourcesSection = () => {
  return (
    <div className="bg-[#141415]  h-auto py-20 plus-jakarta-sans">
      <h6 className="text-[#146EF5] text-center uppercase font-semibold">
        resources
      </h6>
      <h1 className="text-white text-center text-5xl font-bold p-4 leading-tight">
        Automate it all, and save hours
      </h1>

      <p className="text-gray-400 text-center text-lg ">
        We bring together everything that’s required to build software.
      </p>
      <p className="text-gray-400 text-center text-lg ">
        Reach more customers, save time and money, and boost sales.
      </p>
      <div className="px-40 mt-10">
        <div className="flex  rounded-lg">
          <div className="p-20 w-[40%] flex flex-col items-center justify-center bg-[#1D1F20]">
            <p className="text-white text-2xl font-semibold">
              Harness the power of{" "}
              <span className="text-[#146ef5]">artificial intelligence</span> to
              gain insights from your data
            </p>
            <p className="text-gray-400 mt-5">
              Our analytics software employs advanced algorithms to interpret
              complex data sets, empowering you to make data-driven decisions
              that fuel business growth.
            </p>
          </div>
          <div className="w-[60%] p-10 bg-[#1D1F20]">
            <img src={src1} alt="src-1" />
          </div>
        </div>
      </div>

      <div className="px-40 mt-10">
        <div className="flex  gap-10">
          <div className="p-10 w-1/2 flex flex-col items-start justify-center bg-[#1D1F20] rounded-lg">
            <p className="text-white text-2xl font-semibold">
              Cloud computing
              <span className="text-[#146ef5]"> infrastructure</span>
            </p>
            <p className="text-gray-400 mt-5">
              Lower cost, greater efficiency, faster deployment and more
              innovation. Increases service levels, reduces service outages and
              improve the customer experience.
            </p>
            <img src={src2} alt="src-1" className="mt-10 rounded-lg " />
          </div>
          <div className="p-10 w-1/2 flex flex-col items-start justify-center bg-[#1D1F20] rounded-lg">
            <p className="text-white text-2xl font-semibold">
              Performance and
              <span className="text-[#146ef5]"> optimization</span>
            </p>
            <p className="text-gray-400 mt-5">
              Discover strategies to optimize workflows, improve response times,
              and maximize efficiency. Implement best practices to ensure your
              software operates smoothl.
            </p>
            <img src={src3} alt="src-1" className="mt-10 rounded-lg" />
          </div>
        </div>
      </div>

      <div className="bg-[#1D1F20] h-[0.7px] mx-40 my-24" />
    </div>
  );
};

export default ResourcesSection;
