import {
  Bell,
  Coffee,
  Lightbulb,
  Mouse,
  PlusCircleIcon,
  Watch,
} from "lucide-react";
import SolutionCard from "./SolutionCard";

const SolutionSection = () => {
  const cards = [
    {
      icon: <Watch size={45} />,
      title: "Scalability optimization",
      description:
        "Our scalability solutions analyze your current infrastructure, identifying bottlenecks and optimizing processes.",
    },
    {
      icon: <Bell size={45} />,
      title: "Process automation",
      description:
        "Streamline your workflows and reduce manual tasks. Enhance efficiency, and focus on strategic initiatives.",
    },
    {
      icon: <Lightbulb size={45} />,
      title: "Solid planning",
      description:
        "Get free access to our global partner network and marketplace to receive premium assistance.",
    },
    {
      icon: <Coffee size={45} />,
      title: "Training and development",
      description:
        "Enhance employee skills, foster a culture of learning, and boost overall organizational performance.",
    },
    {
      icon: <Mouse size={45} />,
      title: "Supply chain optimization",
      description:
        "Leverage data analytics and predictive algorithms to optimize inventory and supplier relationships.",
    },
    {
      icon: <PlusCircleIcon size={45} />,
      title: "Data integration",
      description:
        "Our data integration solutions unify data sets, enabling real-time insights and strategic decision-making.",
    },
  ];

  return (
    <div className="bg-[#FAFAFC] h-auto py-20 plus-jakarta-sans">
      <h6 className="text-[#146EF5] text-center uppercase font-semibold">
        Solutions
      </h6>
      <h1 className="text-[#141415] text-center text-3xl md:text-4xl lg:text-5xl font-bold p-4 leading-tight">
        Every feature you need,
        <br />
        all in a single system
      </h1>

      <p className="text-gray-400 text-center text-sm md:text-lg px-4 md:px-0">
        Explore a spectrum of solutions meticulously designed to
        <br className="hidden md:block" />
        empower your business growth.
      </p>

      <div className="container mx-auto px-4 md:px-12 lg:px-36 mt-10 md:mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
  );
};

export default SolutionSection;
