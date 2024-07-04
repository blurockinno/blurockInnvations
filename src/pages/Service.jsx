import { useRef } from "react";
import service from "../assets/service.png";
import { motion, useInView } from "framer-motion";
import wd from "../assets/development.png";
import md from "../assets/app-development.png";
import graphicDesign from "../assets/web-design.png";
import seo from "../assets/search-engine-optimisation.png";
import dm from "../assets/digital-marketing.png";
import consulting from "../assets/consultant.png";
import ContactUsSection from "../components/ContactUsSection";

const Service = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const services = [
    {
      title: "Web Development",
      description:
        "Creating stunning and responsive websites tailored to your needs.",
      icon: `${wd}`, // Replace with your own icon or image URL
    },
    {
      title: "Mobile App Development",
      description:
        "Building user-friendly mobile applications for both iOS and Android platforms.",
      icon: `${md}`, // Replace with your own icon or image URL
    },
    {
      title: "Digital Marketing",
      description:
        "Providing comprehensive digital marketing strategies to boost your online presence.",
      icon: `${dm}`, // Replace with your own icon or image URL
    },
    {
      title: "SEO Optimization",
      description:
        "Enhancing your website’s visibility on search engines to attract more traffic.",
      icon: `${seo}`, // Replace with your own icon or image URL
    },
    {
      title: "Graphic Design",
      description:
        "Designing visually appealing graphics for your brand and marketing materials.",
      icon: `${graphicDesign}`, // Replace with your own icon or image URL
    },
    {
      title: "Consulting Services",
      description:
        "Offering expert advice and strategies to help your business grow.",
      icon: `${consulting}`, // Replace with your own icon or image URL
    },
    // Add more services as needed
  ];
  return (
    <>
      <div className="container mx-auto mt-[88px]">
        <section
          className="text-center mb-12"
          style={{
            backgroundImage: `linear-gradient(45deg,
        rgba(0, 0, 0, 200.605),
        rgba(0, 0, 200, 0.9)), url(${service})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className=" h-auto items-center">
            <div className="flex justify-between items-center gap-4">
              {/* First set of bars */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "10%" }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="h-20 w-[10%] flex flex-col mt-10"
              >
                <div className="h-7 bg-gradient-to-l from-yellow-100 rounded-tr-full rounded-br-full"></div>
              </motion.div>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "10%" }}
                transition={{
                  duration: 5,
                  delay: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="h-20 w-[10%] flex flex-col mt-10"
              >
                <div className="h-7 bg-gradient-to-r from-yellow-100 rounded-tl-full rounded-bl-full"></div>
              </motion.div>
            </div>
            <h1 className="text-4xl font-bold mb-4 uppercase text-white  ">
              Managed IT Services You Can Trust
            </h1>
            <p className="text-lg  text-gray-100 ">
              Discover the range of services we offer to help your business
              thrive.
            </p>
            <div className="flex justify-between items-center gap-4">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "25%" }}
                transition={{
                  duration: 3,
                }}
                className="h-20 w-[25%] flex flex-col mt-10"
              >
                <div className="h-7 bg-gradient-to-l from-yellow-400 rounded-tr-full rounded-br-full"></div>
              </motion.div>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "25%" }}
                transition={{
                  duration: 3,
                  delay: 0.5,
                }}
                className="h-20 w-[25%] flex flex-col mt-10"
              >
                <div className="h-7 rounded-tl-full rounded-bl-full bg-gradient-to-r from-yellow-400"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* service section  */}
        <motion.section
          className="w-full auto flex flex-col  px-20"
          ref={sectionRef}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.span
            className="text-4xl font-semibold text-start text-black uppercase hover:border-b"
            initial={{ y: -50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Digital Core Capabilities
          </motion.span>
          <motion.p
            className="text-xl font-semibold mt-3 mb-10 text-start text-black"
            initial={{ y: -50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Build vital capabilities to deliver digital outcomes.
          </motion.p>
          <motion.section
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <motion.h2
              className="text-xl text-white font-semibold mb-8"
              initial={{ y: -50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.2 }}
            >
              What We Offer
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className={`p-10 shadow-lg  text-center  bg-gradient-to-t from-white ${
                    index % 2 ? "from-blue-300" : null
                  }`}
                  initial={{ y: 50, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 1.5 + index * 0.3 }}
                >
                  <div className="mb-4">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-24 h-24 mx-auto"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-blue-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-700">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.section>
        {/* service setion end */}

        <ContactUsSection />
      </div>
    </>
  );
};

export default Service;
