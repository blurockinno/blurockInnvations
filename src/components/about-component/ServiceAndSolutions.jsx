import { CupSodaIcon, Database, Mouse, Watch } from "lucide-react";
import team from "../../assets/team-work.jpg";

const ServiceAndSolutions = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 py-10 md:py-20 plus-jakarta-sans bg-[#fff] relative -top-60">
      <div className="flex flex-col md:flex-row rounded-lg">
        <div className="p-4 md:p-10 lg:p-20 w-full md:w-1/2 flex flex-col items-center md:items-start justify-center">
          <h6 className="text-[#146EF5] text-center md:text-left uppercase font-semibold">
            Service and Solutions
          </h6>
          <h1 className="text-[#141415] text-3xl md:text-5xl font-bold leading-tight mt-2 text-center md:text-left">
            Helping you grow in every stage
          </h1>
          <p className="text-gray-400 text-base md:text-lg mt-5 text-center md:text-left">
            Elevate your brand to new heights ensuring your message reaches its
            full potential and captivates your audience.
          </p>

          <div className="flex flex-col md:flex-row gap-5 mt-10 w-full">
            <div className="w-full md:w-1/2">
              <Watch className="text-[#146ef5] mx-auto md:mx-0" size={64} />
              <h1 className="text-[#141415] hover:text-[#146ef5] mt-5 text-lg md:text-xl font-semibold text-center md:text-left">
                Solid Planning
              </h1>
              <p className="text-sm text-[#141415] mt-2 text-center md:text-left">
                Receive premium assistance from our global network.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <CupSodaIcon
                className="text-[#146ef5] mx-auto md:mx-0"
                size={64}
              />
              <h1 className="text-[#141415] hover:text-[#146ef5] mt-5 text-lg md:text-xl font-semibold text-center md:text-left">
                Collaboration Tools
              </h1>
              <p className="text-sm text-[#141415] mt-2 text-center md:text-left">
                Keep your strategic goals and planning in one place.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 mt-10 w-full">
            <div className="w-full md:w-1/2">
              <Database className="text-[#146ef5] mx-auto md:mx-0" size={64} />
              <h1 className="text-[#141415] hover:text-[#146ef5] mt-5 text-lg md:text-xl font-semibold text-center md:text-left">
                Data Protection
              </h1>
              <p className="text-sm text-[#141415] mt-2 text-center md:text-left">
                Define each stage of work to see what’s important.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <Mouse className="text-[#146ef5] mx-auto md:mx-0" size={64} />
              <h1 className="text-[#141415] hover:text-[#146ef5] mt-5 text-lg md:text-xl font-semibold text-center md:text-left">
                Software Support
              </h1>
              <p className="text-sm text-[#141415] mt-2 text-center md:text-left">
                From the small stuff to the big picture, we organize work.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4 md:p-10 lg:p-20 rounded-lg">
          <img
            src={team}
            alt="solution"
            className="w-full h-auto md:h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceAndSolutions;
