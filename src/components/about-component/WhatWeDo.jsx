import { useState } from "react";
import { motion } from "framer-motion";

const WhatWeDo = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Mission",
      content:
        "We aim to simplify complex processes, enhance operational efficiency, and drive growth through our innovative software and services. By providing reliable solutions, we enable our clients to navigate the ever-changing tech landscape.",
    },
    {
      title: "Vision",
      content:
        "At the heart of our vision is a future where businesses harness the power of technology to achieve remarkable feats. We envision a world where every entrepreneur, startup, and enterprise has access to advanced tools.",
    },
    {
      title: "Values",
      content:
        "We uphold the highest ethical standards, ensuring transparency, honesty, and trust in all our interactions. Innovation fuels our creativity, driving us to explore new horizons and develop groundbreaking solutions.",
    },
  ];

  return (
    <div className="py-10 md:py-24 bg-white relative mx-4 md:mx-40 px-4 md:px-20 rounded-md z-10 -top-60">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <div>
          <h2 className="text-lg md:text-md font-bold mb-2 md:mb-4 uppercase text-[#146ef5]">
            What We Do
          </h2>
          <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 text-[#141415] leading-tight">
            We focus on people and sustainability
          </h2>
          <p className="text-base md:text-lg text-gray-400">
            We are dedicated to crafting tech solutions that revolutionize the
            way businesses operate.
          </p>
        </div>
        <div>
          <div className="flex flex-col md:flex-row flex-wrap mb-4">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-full md:w-40  px-4 py-2 md:px-6 md:py-4 text-white ${
                  activeTab === index ? "bg-[#146ef5]" : "bg-[#141415]"
                } mb-2 md:mb-0  md:last:mr-0`}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-gray-400 mt-4 md:mt-10"
          >
            {tabs[activeTab].content}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
