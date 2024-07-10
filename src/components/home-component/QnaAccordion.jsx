import { ArrowBigDown, ArrowDown } from "lucide-react";
import { useState } from "react";

const QnaAccordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="max-w-3xl mx-auto plus-jakarta-sans py-10">
      {items.map((item, index) => (
        <div key={index} className="text-white  rounded-lg mb-4">
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
  );
};

export default QnaAccordion;
