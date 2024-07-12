import { ChevronRight } from "lucide-react";

const SolutionCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg p-6 flex flex-col items-start plus-jakarta-sans transform transition-transform duration-300 hover:-translate-y-2 group">
      <div className="text-7xl mb-4 text-[#146ef5]">{icon}</div>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-400 mb-4">{description}</p>
      <button className="bg-[#FAFAFC] text-[#141415] p-2 rounded-full transition-colors duration-300 group-hover:text-white group-hover:bg-[#146ef5]">
        <ChevronRight />
      </button>
    </div>
  );
};

export default SolutionCard;
