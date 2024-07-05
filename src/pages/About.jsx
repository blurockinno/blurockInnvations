import { useRef } from "react";
import service from "../assets/service.png";
import { motion, useInView } from "framer-motion";

const About = () => {
  const teamMembers = [
    {
      name: "Jatinder Goswami",
      role: "CEO",
      photo: "https://via.placeholder.com/150",
      bio: "John is a visionary leader with over 20 years of experience in the industry.",
    },
    {
      name: "Devinder Goswami",
      role: "CTO",
      photo: "https://via.placeholder.com/150",
      bio: "Jane is an expert in technology and innovation, driving our tech strategy.",
    },
    {
      name: "Akash Shrotiya",
      role: "COO",
      photo: "https://via.placeholder.com/150",
      bio: "Sam ensures our operations run smoothly and efficiently.",
    },
    {
      name: "Arun Upadhayay",
      role: "Developer",
      photo: "https://via.placeholder.com/150",
      bio: "Sam ensures our operations run smoothly and efficiently.",
    },
    {
      name: "Bhagwan Biruly",
      role: "Developer",
      photo: "https://via.placeholder.com/150",
      bio: "Sam ensures our operations run smoothly and efficiently.",
    },
    {
      name: "Sai Aryan Goswami",
      role: "Developer",
      photo: "https://via.placeholder.com/150",
      bio: "Sam ensures our operations run smoothly and efficiently.",
    },
    // {
    //   name: "Rishabh Parashar",
    //   role: "Developer",
    //   photo: "https://via.placeholder.com/150",
    //   bio: "Sam ensures our operations run smoothly and efficiently.",
    // },
    // Add more team members as needed
  ];

  const sections = [
    {
      title: "Blurock Innovations",
      content:
        "Blurock Innovations is a dynamic tech startup dedicated to pioneering innovative solutions. Specializing in cutting-edge technology such as AI, software development, and data analytics, we empower businesses to thrive in a fast-paced digital landscape. Our passionate team of experts drives forward-thinking strategies that enhance efficiency, foster growth, and ensure client success. Committed to continuous innovation and customer satisfaction, we deliver tailored solutions that meet unique business needs. With a focus on excellence and forward momentum, Blurock Innovations is redefining the future of technology, creating opportunities, and setting new industry standards.",
    },
    {
      title: "Our Mission",
      content:
        "Our mission at Blurock Innovations is to revolutionize industries through advanced technology and exceptional service. We aim to empower businesses with cutting-edge solutions that drive efficiency, foster growth, and ensure long-term success in a rapidly evolving digital world. By leveraging our expertise in AI, software development, and data analytics, we strive to deliver tailored, innovative solutions that exceed client expectations. Committed to continuous improvement and client satisfaction, we forge strong partnerships built on trust, transparency, and mutual respect. Together, we envision a future where technology transforms businesses, unlocks new opportunities, and sets new standards of excellence.",
    },
    {
      title: "Our Team",
      content:
        "Meet our dedicated team members who are the driving force behind our success.",
    },
    {
      title: "Contact Us",
      content:
        "We'd love to hear from you! Whether you have a question about our services, need assistance, or just want to talk, feel free to reach out to us.",
    },
  ];

  const refs = sections.map(() => useRef(null));
  const inViewStates = refs.map((ref) => useInView(ref, { once: true }));

  const sectionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <div className="container mx-auto mt-[88px]">
        <section
          className="text-center mb-12"
          style={{
            backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 200, 0.9)), url(${service})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="h-auto items-center">
            <div className="flex justify-between items-center gap-4">
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
            <h1 className="text-4xl font-bold mb-4 uppercase text-white">
              Empowering success through innovative solutions.
            </h1>
            <p className="text-lg text-gray-100">About Blurock Innovations</p>
            <div className="flex justify-between items-center gap-4">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "25%" }}
                transition={{ duration: 3 }}
                className="h-20 w-[25%] flex flex-col mt-10"
              >
                <div className="h-7 bg-gradient-to-l from-yellow-400 rounded-tr-full rounded-br-full"></div>
              </motion.div>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "25%" }}
                transition={{ duration: 3, delay: 0.5 }}
                className="h-20 w-[25%] flex flex-col mt-10"
              >
                <div className="h-7 bg-gradient-to-r from-yellow-400 rounded-tl-full rounded-bl-full"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {sections.map((section, index) => (
          <motion.section
            key={section.title}
            ref={refs[index]}
            className="mb-12 px-20"
            initial="hidden"
            animate={inViewStates[index] ? "visible" : "hidden"}
            variants={sectionVariants}
          >
            <h2 className="text-xl font-semibold mb-4 uppercase">
              {section.title}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-20">
              {section.content}
            </p>
            {section.title === "Our Team" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gray-50 p-6">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    className={`bg-white ${
                      index % 2 ? "bg-gradient-to-t from-blue-100" : null
                    } p-6 rounded-lg shadow-md text-center`}
                    variants={sectionVariants}
                  >
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2 text-blue-700">{member.name}</h3>
                    <p className="text-gray-700 mb-2">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </motion.div>
                ))}
              </div>
            )}
            {section.title === "Contact Us" && (
              <div className="flex flex-col md:flex-row md:space-x-8">
                <div className="flex-1 mb-4 md:mb-0">
                  <h3 className="text-sm font-semibold mb-2">Address</h3>
                  <p className="text-gray-700">
                    123 Main Street, Suite 101, City, State, ZIP
                  </p>
                </div>
                <div className="flex-1 mb-4 md:mb-0">
                  <h3 className="text-sm font-semibold mb-2">Email</h3>
                  <p className="text-gray-700">info@company.com</p>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold mb-2">Phone</h3>
                  <p className="text-gray-700">(123) 456-7890</p>
                </div>
              </div>
            )}
          </motion.section>
        ))}
      </div>
    </>
  );
};

export default About;
