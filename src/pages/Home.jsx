import dashboard from "../assets/dashborad.png";
import path from "../assets/path.svg";

import { motion } from "framer-motion";

import WhatWeProvideSection from "../components/home-component/WhatWeProvideSection";

import CompanyListSection from "../components/home-component/CompanyListSection";
import ProductSection from "../components/home-component/ProductSection";
import CustomerSupport from "../components/home-component/CustomerSupport";
import SolutionSection from "../components/home-component/SolutionSection";
import ResourcesSection from "../components/home-component/ResourcesSection";
import HelpCenterSection from "../components/home-component/HelpCenterSection";
import SubscribeSection from "../components/home-component/SubscribeSection";

const Home = () => {



  return (
    <>
      <div
        className="w-full h-auto bg-[#141415] plus-jakarta-sans"
        style={{
          backgroundImage: `url(${path})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center end",
          backgroundSize: "cover",
        }}
      >
        {/* carousel  */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className=" w-full h-full flex items-center justify-center mb-20">
            <div className="pl-20 bg-opacity-50 rounded-lg w-1/2 mt-24">
              <motion.p
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-7xl mb-4 font-semibold text-white "
              >
                Full-suite software development for{" "}
                <span className="text-[#146EF5]">businesses</span>
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                className="mb-6 text-lg font-light text-white"
              >
                Sure, you may be able to get by with whatever software your
                business is currently using, but will you grow?
              </motion.p>
            </div>
            <div className="w-1/2 px-44">
              <p className="text-gray-400 mb-10 text-justify">
                Dive into the next-generation future of business technology. We
                craft tailored software solutions and strategic frameworks,
                driving businesses to unprecedented heights of success.
              </p>
              <motion.button
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 3 }}
                className="relative px-8 py-4 rounded-md  hover:text-white bg-white isolation-auto z-10 border
                hover:border-white-600
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-blue-600 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
              >
                Get Started
              </motion.button>
            </div>
          </div>
          <div className=" h-auto w-full flex items-center justify-center ">
            <div className="w-[20%]"></div>
            <img
              src={dashboard}
              alt="dashboard"
              className="rounded-lg w-[80%]"
            />
            <div className="w-[20%]"></div>
          </div>
        </motion.section>
        {/* carousel end */}

        {/* what we provide  */}
        <WhatWeProvideSection />
        {/* what we provide end  */}
        {/* companies list  */}
        <CompanyListSection />
        {/* companies list end  */}
      </div>

      <CustomerSupport />

      <ProductSection />

      <SolutionSection />

      <ResourcesSection />

      <HelpCenterSection />

      <SubscribeSection />

      {/* <MakecallAndGetquate /> */}

      {/* get in touch section  */}
      {/* <GetInTouchSection /> */}
      {/* get in touch section end */}

  

      {/* tour  */}
      {/* <ServiceTourSection /> */}
      {/* tour end */}

      {/* subscribe section  */}

      {/* subscribe section  */}

      {/* support sectio  */}
      {/* <SupportSection /> */}
      {/* support sectio end */}
    </>
  );
};

export default Home;
