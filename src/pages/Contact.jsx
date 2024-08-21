import path from "/assets/path.svg";
import { motion } from "framer-motion";
import { Book, ChevronRight, MessageSquareText, PhoneCall } from "lucide-react";
import { useState } from "react";
import team from "/assets/team-work.jpg";
import ContactType from "../components/contact-component/ContactType";
import AddressAndLocation from "../components/contact-component/AddressAndLocation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Example: Send form data using axios
      const response = await axios.post(
        "/api/v1/contact-us/contactus",
        formData
      );

      const { success, message } = response.data;
      console.log(success, message);

      if (success) {
        setLoading(false);
        toast.success("Thank you for find us.");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      setLoading(false);
      alert("Error submitting form. Please try again later.");
    }
  };
  return (
    <>
      <Toaster />
      <div
        className="h-screen mx-auto bg-[#141415] plus-jakarta-sans"
        style={{
          backgroundImage: `url(${path})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "end",
          backgroundSize: "cover",
        }}
      >
        <section className="text-center mb-12">
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
                <div className="h-7 bg-transparent rounded-tr-full rounded-br-full"></div>
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
                <div className="h-7 bg-transparent rounded-tl-full rounded-bl-full"></div>
              </motion.div>
            </div>
            <h1 className="text-md font-bold mb-4 uppercase text-[#146ef5]">
              LET&apos;S GET IN TOUCH
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white mt-6">
              Connect with us
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mx-4 md:mx-0 mb-4 flex justify-center items-center">
              Feel free to reach out to us using the options below,
              <br className="hidden md:block" />
              and our dedicated team will respond to your inquiries promptly.
            </p>
            <p className="text-md text-gray-100 flex justify-center items-center mt-2">
              Home <ChevronRight className="text-sm" /> Contact
            </p>
          </div>
        </section>
      </div>
      <div className="bg-white plus-jakarta-sans">
        <div className="py-10 md:py-24 bg-white relative mx-4 md:mx-40 px-4 md:px-20 rounded-tl-md z-10 md:-top-60">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div>
              <h2 className="text-lg md:text-md font-bold mb-2 md:mb-4 uppercase text-[#146ef5]">
                CONTACT US
              </h2>
              <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 text-[#141415] leading-tight">
                How can we help?
              </h2>
              <p className="text-base md:text-lg text-gray-400">
                Have a question? Fill out the form below, and we&apos;ll get
                back to you as soon as possible.
              </p>
              <form
                onSubmit={handleSubmit}
                className="bg-white  rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md"
              >
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex items-center justify-center">
                  <button
                    className={`w-full bg-[#146ef5] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                      loading ? "cursor-not-allowed opacity-50" : ""
                    }`}
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
            <div>
              <img
                src={team}
                alt="form-image"
                className="h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row container mx-auto px-4 md:px-40 py-8 gap-5 relative md:-top-40">
        <ContactType
          icon={<Book />}
          title="Knowledge hub"
          description="A comprehensive repository of knowledge designed to address your queries."
        />
        <ContactType
          icon={<MessageSquareText />}
          title="Chat  to sales"
          description="Get detailed information about our products, pricing, and any current promotions."
        />
        <ContactType
          icon={<PhoneCall />}
          title="Call for assistance"
          description="Our support team is available to answer your questions, and provide technical help."
        />
      </div>
      <AddressAndLocation />
    </>
  );
};

export default Contact;
