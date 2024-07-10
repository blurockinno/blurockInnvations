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
    <div className="  py-24  plus-jakarta-sans bg-white relative mx-40 px-20 rounded-md z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-md font-bold mb-4 uppercase text-[#146ef5]">
            What We Do
          </h2>
          <h2 className="text-5xl font-bold mb-4  text-[#141415] leading-tight">
            We focus on people and sustainability
          </h2>
          <p className="text-lg text-gray-400">
            We are dedicated to crafting tech solutions that revolutionize the
            way businesses operate.
          </p>
        </div>
        <div>
          <div className="flex  mb-4 bg-red-400">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-full px-4 py-4 text-white  ${
                  activeTab === index ? "bg-[#146ef5] " : "bg-[#141415]"
                }`}
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
            className="text-gray-400 mt-10"
          >
            {tabs[activeTab].content}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
