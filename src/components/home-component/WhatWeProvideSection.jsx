import support from "/assets/support.svg";
import grow from "/assets/grow.svg";
import saving from "/assets/saving.svg";
const services = [
  {
    title: " Products",
    description:
      "Dive into the future of next-generation technology with our business custom tailored software.",
    imageUrl: grow,
  },
  {
    title: "Solutions",
    description:
      "Explore a spectrum of solutions meticulously designed to empower your business growth.",
    imageUrl: saving,
  },
  {
    title: "Resources",
    description:
      "Harness actionable insights and unmatched efficiency to fuel your business growth.",
    imageUrl: support,
  },
];

const WhatWeProvideSection = () => {
  return (
    <section className="py-20 plus-jakarta-sans">
      <h6 className="text-[#146EF5] text-center uppercase font-semibold">
        What we do
      </h6>
      <h1 className="text-white text-center text-5xl font-bold p-4">
        Supercharge your business
      </h1>
      <p className="text-gray-400 text-center text-lg ">
        Explore tailored products, innovative solutions, and valuable <br />
        resources designed to accelerate your business growth.
      </p>
      <div className="container mx-auto px-6 ">
        <div className="flex flex-wrap justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 flex mt-10"
            >
              <div
                className="bg-[#1D1F20] p-6 rounded-lg shadow-lg flex flex-col h-full cursor-pointer hover:shadow-lg transform transition-transform duration-300 hover:-translate-y-2"
                style={{ willChange: "transform" }}
              >
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-36 rounded-t-lg"
                  width="100%"
                  height="144px"
                />
                <div className="p-4 flex-grow">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeProvideSection;
