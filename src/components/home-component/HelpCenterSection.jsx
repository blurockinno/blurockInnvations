import QnaAccordion from "./QnaAccordion";

const HelpCenterSection = () => {
  const items = [
    {
      question: "1. Is there a free trial available?",
      answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free 30-minute onboarding call to get you up and running.",
    },
    {
      question: "2. Can I change my plan later?",
      answer: "Of course you can! Our pricing scales with your company. Chat to our friendly team to find a solution that works for you as you grow.",
    },
    {
      question: "3. What is your cancellation policy?",
      answer: "We understand that things change. You can cancel your plan at any time and we'll refund you the difference already paid.",
    },
    {
      question: "4. Can other info be added to an invoice?",
      answer: "At the moment, the only way to add additional information to invoices is to add the information to the workspace's name manually.",
    },
    {
      question: "5. How does bill works?",
      answer: "Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.",
    },
  ];

  return (
    <div className="px-4 md:px-10 lg:px-20 plus-jakarta-sans bg-[#141415]">
      <div className="flex flex-col md:flex-row rounded-lg">
        <div className="p-6 md:p-12 w-full md:w-1/2 flex flex-col items-center justify-center">
          <h6 className="text-[#146EF5] text-center uppercase font-semibold">
            Help center
          </h6>
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight mt-4 md:mt-6 text-center">
            Got a question? Get your answer
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mt-4 md:mt-6 text-center">
            Quick answers to questions you may have. Can&apos;t find what
            you&apos;re looking for? Check out our full documentation.
          </p>
        </div>
        <div className="w-full md:w-1/2 p-6 md:p-12 bg-[#1D1F20] rounded-lg mt-6 md:mt-0">
          <QnaAccordion items={items} />
        </div>
      </div>
    </div>
  );
};

export default HelpCenterSection;
