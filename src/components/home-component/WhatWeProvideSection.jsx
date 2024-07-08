import support from "../../assets/support.svg";
import grow from "../../assets/grow.svg";
import saving from "../../assets/saving.svg";
const services = [
  {
    title: " Grow your business faster with the help of tech",
    description:
      "Now a days technology has a power to shine your business world wide & connect people throughout the globe.",
    imageUrl: grow,
  },
  {
    title: "We serve services at very competitive Cost",
    description:
      "All of our services is being offered at very Competitive cost, we serve clients without hurting their pockets.",
    imageUrl: saving,
  },
  {
    title: "Get 24*7 Service Support from Blurock Team",
    description:
      "Our team is at active mode for any of your queries. You will get 24*7 Service Support from BLurock innovations Team.",
    imageUrl:  support ,
  },
];

const WhatWeProvideSection = () => {
  return (
    <section className="bg-black text-gray-800 py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center">
          {services.map((service, index) => (
            <div key={index} className="w-full md:w-1/3 p-4 flex">
              <div className="bg-gradient-to-b from-blue-700 to-white p-6 rounded-lg shadow-lg flex flex-col h-full">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-48  rounded-t-lg"
                />
                <div className="p-4 flex-grow">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p>{service.description}</p>
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
