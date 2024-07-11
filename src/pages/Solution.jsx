import {
  ArrowRight,
  Bell,
  CheckCircle,
  ChevronRight,
  Coffee,
  Lightbulb,
  Mouse,
  PlusCircle,
  Watch,
} from "lucide-react";
import path from "../assets/path.svg";
import dashboard from "../assets/dashborad.png";
import { motion } from "framer-motion";
import SolutionCard from "../components/home-component/SolutionCard";

const Solution = () => {
  const cards = [
    {
      icon: <Watch />,
      title: "Scalability optimization",
      description:
        "Our scalability solutions analyze your current infrastructure, identifying bottlenecks and optimizing processes.",
    },
    {
      icon: <Bell />,
      title: "Process automation",
      description:
        "Streamline your workflows and reduce manual tasks. Enhance efficiency, and focus on strategic initiatives.",
    },
    {
      icon: <Lightbulb />,
      title: "Solid planning",
      description:
        "Get free access to our global partner network and marketplace to receive premium assistance.",
    },
    {
      icon: <Coffee />,
      title: "Training and development",
      description:
        "Enhance employee skills, foster a culture of learning, and boost overall organizational performance.",
    },
    {
      icon: <Mouse />,
      title: "Supply chain optimization",
      description:
        "Leverage data analytics and predictive algorithms to optimize inventory and supplier relationships.",
    },
    {
      icon: <PlusCircle />,
      title: "Data integration",
      description:
        "Our data integration solutions unify data sets, enabling real-time insights and strategic decision-making.",
    },
  ];

  return (
    <div
      className="h-auto mx-auto bg-[#141415] plus-jakarta-sans z-40"
      style={{
        backgroundImage: `url(${path})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "end",
        backgroundSize: "cover",
      }}
    >
      <section className="text-center mb-20">
        <div className="h-auto items-center">
          <div className="flex justify-between items-center gap-4">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "10%" }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="h-20 w-[10%] flex flex-col mt-10"
            >
              <div className="h-7 bg-gradient-to-l from-blue-100 rounded-tr-full rounded-br-full"></div>
            </motion.div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "10%" }}
              transition={{
                duration: 5,
                delay: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="h-20 w-[10%] flex flex-col mt-10"
            >
              <div className="h-7 bg-gradient-to-r from-blue-100 rounded-tl-full rounded-bl-full"></div>
            </motion.div>
          </div>
          <h1 className="text-md font-bold mb-4 uppercase text-[#146ef5]">
            what we do
          </h1>
          <h1 className="text-6xl font-bold mb-4  text-white">
            Our services and solutions
          </h1>
          <p className="text-md text-gray-100 flex justify-center items-center text-lg">
            Discover how our tech solutions can transform your business. <br />
            Explore our features and take your business to new heights.
          </p>
          <p className="text-md text-gray-100 flex justify-center items-center mt-2">
            Home <ChevronRight className="text-sm" /> Service
          </p>
        </div>
      </section>

      {/* Background */}
      <section className="h-auto bg-white mt-56">
        {/* Dashboard */}
        <div className="px-10 py-10  plus-jakarta-sans bg-[#FAFAFC] mx-40 rounded-lg relative -top-40">
          <div className="flex  rounded-lg">
            <div className=" w-[40%] flex flex-col items-start justify-center ">
              <h6 className="text-[#146EF5] text-center uppercase font-semibold">
                INTUITIVE DASHBOARD
              </h6>
              <h1 className="text-[#141415]  text-5xl font-bold  leading-tight mt-2">
                All-in software development
              </h1>

              <p className="text-gray-400  text-lg mt-5">
                Visualize data, track sales, and analyze customer behavior.
              </p>

              <button className="text-lg text-white hover:text-[#146ef5] bg-[#146ef5] hover:bg-[#141415] px-6 py-3 rounded-md mt-5">
                Contact Sale
              </button>

              <div className="flex gap-10 mt-10">
                <span className="text-[#141415] text-lg flex gap-4">
                  <CheckCircle className="text-[#146ef5]" />
                  Flexible solution
                </span>
                <span className="text-[#141415] text-lg flex gap-4">
                  <CheckCircle className="text-[#146ef5]" />
                  Setup in seconds
                </span>
              </div>
            </div>
            <div className="w-[60%] p-10  rounded-lg">
              <img
                src={dashboard}
                alt="solution"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
        {/* Order Management System */}
        <div className="px-10 py-10  plus-jakarta-sans bg-[#fff] mx-40 rounded-lg relative -top-20">
          <div className="flex  rounded-lg">
            <div className=" w-[50%] flex flex-col items-start justify-center ">
              <h6 className="text-[#146EF5] text-center uppercase font-semibold">
                Product
              </h6>
              <h1 className="text-[#141415]  text-5xl font-bold  leading-tight mt-2">
                Order Management System
              </h1>

              <div className="flex w-full justify-between bg-[#fafafc] mt-8 rounded-sm ">
                <div className="flex flex-col w-3/4 items-start justify-between px-4 py-2">
                  <p className="text-[#141415] text-lg font-semibold ">
                    Powerful order management
                  </p>
                  <p className="text-gray-400  text-md mt-1">
                    Stay organized, collaborate seamlessly.
                  </p>
                </div>
                <div className="w-1/4 flex items-center justify-end px-7 py-2">
                  <ArrowRight />
                </div>
              </div>
              <div className="flex w-full justify-between bg-[#fafafc] mt-2 rounded-sm ">
                <div className="flex flex-col w-3/4 items-start justify-between px-4 py-2">
                  <p className="text-[#141415] text-lg font-semibold ">
                    Intuitive project overview
                  </p>
                  <p className="text-gray-400  text-md mt-1">
                    Streamline communication, track progress.
                  </p>
                </div>
                <div className="w-1/4 flex items-center justify-end px-7 py-2">
                  <ArrowRight />
                </div>
              </div>
              <div className="flex w-full justify-between bg-[#fafafc] mt-2 rounded-sm ">
                <div className="flex flex-col w-3/4 items-start justify-between px-4 py-2">
                  <p className="text-[#141415] text-lg font-semibold ">
                    Analyze and track traffic
                  </p>
                  <p className="text-gray-400  text-md mt-1">
                    Unlock insights and optimize strategies.
                  </p>
                </div>
                <div className="w-1/4 flex items-center justify-end px-7 py-2">
                  <ArrowRight />
                </div>
              </div>
              <button className="text-lg text-white hover:text-[#146ef5] bg-[#146ef5] hover:bg-[#141415] px-6 py-3 rounded-md mt-5">
                Subscribe now
              </button>
            </div>
            <div className="w-[50%] p-10  rounded-lg">
              <img
                src={dashboard}
                alt="solution"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <div className="bg-[#FAFAFC]  h-auto py-20 plus-jakarta-sans">
        <h6 className="text-[#146EF5] text-center uppercase font-semibold">
          SOLUTIONS
        </h6>
        <h1 className="text-[#141415] text-center text-5xl font-bold p-4 leading-tight">
          Every feature you need,
          <br />
          all in a single system
        </h1>

        <p className="text-gray-400 text-center text-lg ">
          Explore a spectrum of solutions meticulously designed to <br />
          empower your business growth.
        </p>

        <div className="container mx-auto px-36 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <SolutionCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
