import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import contactusImage from "../assets/contact.svg";

const ContactUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const imageRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: true });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      ref={ref}
      className=" px-20 py-5 bg-gray-950"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <h2 className="text-4xl font-semibold mb-4 text-white uppercase">
        Contact Us
      </h2>
      <p className="text-gray-100 leading-relaxed mb-4">
        Have questions about our services? Get in touch with us using the form
        below.
      </p>
      <div className="flex gap-5 justify-between">
        <div className="w-1/2 flex items-center justify-center">
          <motion.img
            ref={imageRef}
            src={contactusImage}
            alt="contact us"
            className="h-[400px] px-10"
            initial={{ opacity: 0, x: -100 }}
            animate={
              isImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
            }
            transition={{ duration: 0.5 }}
          />
        </div>
        <motion.form
          variants={containerVariants}
          className=" bg-gray-800 rounded-lg shadow-md p-5 w-1/2"
        >
          <motion.div className="mb-4" variants={itemVariants}>
            <label htmlFor="name" className="block text-gray-100 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter name"
              className="w-full p-2 border border-gray-100 rounded-lg bg-gray-600"
            />
          </motion.div>
          <motion.div className="mb-4" variants={itemVariants}>
            <label htmlFor="email" className="block text-gray-100 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              className="w-full p-2 border border-gray-300 rounded-lg bg-gray-600"
            />
          </motion.div>
          <motion.div className="mb-4" variants={itemVariants}>
            <label htmlFor="message" className="block text-gray-100 mb-2">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Enter message"
              className="w-full p-2 border border-gray-300 rounded-lg bg-gray-600"
              rows="4"
            ></textarea>
          </motion.div>
          <div className="flex justify-end">
            <motion.button
              variants={itemVariants}
              className="relative px-6 py-2 text-white  hover:text-white  isolation-auto z-10 border border-white
                hover:border-white-600
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-blue-600 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default ContactUsSection;
