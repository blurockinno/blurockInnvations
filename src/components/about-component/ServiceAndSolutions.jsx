import {  CupSodaIcon, Database, Mouse, Watch } from "lucide-react";
import team from "../../assets/team-work.jpg";

const ServiceAndSolutions = () => {
  return (
    <div className="px-40 py-20  plus-jakarta-sans bg-[#fff] relative -top-60">
      <div className="flex  rounded-lg">
        <div className="p-20 w-[50%] flex flex-col items-start justify-center ">
          <h6 className="text-[#146EF5] text-center uppercase font-semibold">
            service and solution
          </h6>
          <h1 className="text-[#141415]  text-5xl font-bold  leading-tight mt-2">
            Helping you grow in every stage
          </h1>

          <p className="text-gray-400  text-lg mt-5">
            Elevate your brand to new heights ensuring your message reaches its
            full potential and captivates your audience.
          </p>

          <div className="flex gap-5 w-full mt-10">
            <div className="w-1/2">
              <Watch className="text-[#146ef5]" />
              <h1 className="text-[#141415] hover:text-[#146ef5] mt-5 text-xl font-semibold">
                Solid planning
              </h1>
              <p className="text-sm text-[#141415] mt-2">
                Receive premium assistance from our global network.
              </p>
            </div>
            <div className="w-1/2">
              <CupSodaIcon className="text-[#146ef5]" />
              <h1 className="text-[#141415] hover:text-[#146ef5] mt-5 text-xl font-semibold">
                Collabration tools
              </h1>
              <p className="text-sm text-[#141415] mt-2">
                Keep your strategic goals and planning in one place.
              </p>
            </div>
          </div>
          <div className="flex gap-5 w-full mt-10">
            <div className="w-1/2">
              <Database className="text-[#146ef5]" />
              <h1 className="text-[#141415] hover:text-[#146ef5] mt-5 text-xl font-semibold">
                Data protection
              </h1>
              <p className="text-sm text-[#141415] mt-2">
                Define each stage of work to see what’s important.
              </p>
            </div>
            <div className="w-1/2">
              <Mouse className="text-[#146ef5]" />
              <h1 className="text-[#141415] hover:text-[#146ef5] mt-5 text-xl font-semibold">
                Software support
              </h1>
              <p className="text-sm text-[#141415] mt-2">
                From the small stuff to the big picture, we organize work.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[50%] p-10  rounded-lg">
          <img
            src={team}
            alt="solution"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceAndSolutions;
