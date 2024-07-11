import { useState } from "react";
import QnaAccordion from "../components/home-component/QnaAccordion";
import { ArrowDown } from "lucide-react";

const Help = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  const items = [
    {
      question: "1. Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free 30-minute onboarding call to get you up and running.",
    },
    {
      question: "2. Can I change my plan later?",
      answer:
        "Of course you can! Our pricing scales with your company. Chat to our friendly team to find a solution that works for you as you grow.",
    },
    {
      question: "3. What is your cancellation policy?",
      answer:
        "We understand that things change. You can cancel your plan at any time and we'll refund you the difference already paid.",
    },
    {
      question: "4. Can other info be added to an invoice?",
      answer:
        "At the moment, the only way to add additional information to invoices is to add the information to the workspace's name manually.",
    },
    {
      question: "5. How does bill works?",
      answer:
        "Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.",
    },
  ];
  const updates = [
    {
      question: "1. How long do I have access to theme updates and support?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free 30-minute onboarding call to get you up and running.",
    },
    {
      question: "2. What kind of support do you offer",
      answer:
        "Of course you can! Our pricing scales with your company. Chat to our friendly team to find a solution that works for you as you grow.",
    },
    {
      question:
        "3. How do I get support if I encounter a problem with my theme?",
      answer:
        "We understand that things change. You can cancel your plan at any time and we'll refund you the difference already paid.",
    },
    {
      question: "4. How often do you release theme updates?",
      answer:
        "At the moment, the only way to add additional information to invoices is to add the information to the workspace's name manually.",
    },
    {
      question: "5. What happens if my support and updates expire?",
      answer:
        "Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.",
    },
  ];
  return (
    <div className="bg-[#141415] h-auto plus-jakarta-sans">
      <div className="p-36">
        <h1 className="text-6xl font-bold text-white">
          Got questions? This way.
        </h1>
        <p className="text-xl text-gray-200 py-4">
          FAQs, quick fixes, and official info on every feature.
          <br />
          Can&apos;t find your question here, try our support forums.
        </p>
      </div>

      {/* general question  */}
      <div className="py-20 bg-white px-40">
        <h1 className="text-4xl">General questions:</h1>
        <p className="text-lg text-gray-400 mt-5">
          Discover the basics of WordPress themes, including their importance
          for creating a unique web presence, compatibility with the latest
          WordPress version, usage of demo content, and assistance for theme
          installation.
        </p>
        <div className=" mx-auto plus-jakarta-sans py-10">
          {items.map((item, index) => (
            <div key={index} className="text-[#141415]  rounded-lg mb-4">
              <button
                className="w-full flex text-left py-3 px-6   focus:outline-none focus:bg-gray-200 focus:text-[#146ef5] rounded-lg"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-medium hover:text-[#146ef5] cursor-pointer ">
                  {item.question}
                </span>

                <ArrowDown
                  className={`w-5 h-5 ml-auto transform ${
                    activeIndex === index ? "rotate-270" : "-rotate-90"
                  }`}
                />
              </button>
              {activeIndex === index && (
                <div className="p-6">
                  <p className="text-gray-400">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
     
      {/* support and updates  */}
      <div className="py-5 bg-white px-40">
        <h1 className="text-4xl">Support & updates:</h1>
        <p className="text-lg text-gray-400 mt-5">
          Explore the support and updates that come with your theme purchase,
          including the duration of access, the type of support offered, how to
          seek assistance for theme-related issues.
        </p>
        <div className=" mx-auto plus-jakarta-sans py-10">
          {updates.map((item, index) => (
            <div key={index} className="text-[#141415]  rounded-lg mb-4">
              <button
                className="w-full flex text-left py-3 px-6   focus:outline-none focus:bg-gray-200 focus:text-[#146ef5] rounded-lg"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-medium hover:text-[#146ef5] cursor-pointer ">
                  {item.question}
                </span>

                <ArrowDown
                  className={`w-5 h-5 ml-auto transform ${
                    activeIndex === index ? "rotate-270" : "-rotate-90"
                  }`}
                />
              </button>
              {activeIndex === index && (
                <div className="p-6">
                  <p className="text-gray-400">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Help;
