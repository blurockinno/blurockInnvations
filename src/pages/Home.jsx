import { useEffect, useRef, useState } from "react";
import bg from "../assets/bg_home.jpg";
import card from "../assets/card_bg.jpg";
import oms from "../assets/oms.jpg";
import {  motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import wd from "../assets/development.png";
import md from "../assets/app-development.png";
import graphicDesign from "../assets/web-design.png";
import seo from "../assets/search-engine-optimisation.png";
import dm from "../assets/digital-marketing.png";
import consulting from "../assets/consultant.png";
import { useDispatch, useSelector } from "react-redux";
import {
  currentSubscriptionCheckFailure,
  currentSubscriptionCheckStart,
  currentSubscriptionCheckSuccess,
} from "../redux/subscription/subscriptionSlice";
import axios from "axios";
import WelcomeSection from "../components/home-component/WelcomeSection";
import WhoWeAreSection from "../components/home-component/WhoWeAreSection";
import AboutusHome from "../components/home-component/AboutusHome";
import RelationshipsSection from "../components/home-component/RelationshipsSection";
import WhatWeProvideSection from "../components/home-component/WhatWeProvideSection";
import GetInTouchSection from "../components/home-component/GetInTouchSection";
import ServiceTourSection from "../components/home-component/ServiceTourSection";
import SupportSection from "../components/home-component/SupportSection";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [email, setEmail] = useState("");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const dispatch = useDispatch();
  const [allSubcribedPlans, setAllSubscribedPlans] = useState([]);
  const { currentSubscription } = useSelector((state) => state?.subscription);
  const { currentUser } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your own logic to handle the subscription (e.g., API call, validation)
    console.log(`Subscribing ${email} to updates...`);
    // Clear the email input after submission
    setEmail("");
  };
  const clientStats = [
    { title: "Clients", count: 1200 },
    { title: "Projects Completed", count: 350 },
    { title: "Countries Served", count: 25 },
    { title: "Years in Business", count: 10 },
  ];
  const testimonials = [
    {
      id: 1,
      quote:
        "Working with Company X has been a game-changer for us. Their dedication to quality and innovation is unmatched.",
      name: "John Doe",
      position: "CEO, ABC Inc.",
      image: "https://randomuser.me/api/portraits/men/1.jpg", // Example image URL
    },
    {
      id: 2,
      quote:
        "The team at Company X delivered results beyond our expectations. Highly recommended!",
      name: "Jane Smith",
      position: "Marketing Director, XYZ Corp.",
      image: "https://randomuser.me/api/portraits/women/2.jpg", // Example image URL
    },
    {
      id: 3,
      quote:
        "Exceptional service! Company X truly understands our needs and delivers with precision every time.",
      name: "Michael Johnson",
      position: "COO, PQR Ltd.",
      image: "https://randomuser.me/api/portraits/men/3.jpg", // Example image URL
    },
    {
      id: 3,
      quote:
        "Exceptional service! Company X truly understands our needs and delivers with precision every time.",
      name: "Michael Johnson",
      position: "COO, PQR Ltd.",
      image: "https://randomuser.me/api/portraits/men/3.jpg", // Example image URL
    },
  ];
  const feedbacks = [
    {
      id: 1,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero nec sapien rutrum.",
      name: "John Doe",
      position: "CEO, ABC Inc.",
    },
    {
      id: 2,
      quote:
        "The team at Company X delivered results beyond our expectations. Highly recommended!",
      name: "Jane Smith",
      position: "Marketing Director, XYZ Corp.",
    },
    {
      id: 3,
      quote:
        "Exceptional service! Company X truly understands our needs and delivers with precision every time.",
      name: "Michael Johnson",
      position: "COO, PQR Ltd.",
    },
  ];
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

  useEffect(() => {
    // handle for get plans
    const getAllPlans = async () => {
      try {
        //despatch the value
        dispatch(currentSubscriptionCheckStart());
        const response = await axios.get(
          `/api/v1/subscription/${currentUser.companyId}`
        );

        const { plans } = response.data;
        setAllSubscribedPlans(plans);
        dispatch(currentSubscriptionCheckSuccess(plans));
      } catch (error) {
        console.log(error);
        dispatch(currentSubscriptionCheckFailure(error.response.message));
      }
    };
    getAllPlans();
  }, [currentUser.companyId, dispatch]);

  const nextFeedback = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
  };

  const prevFeedback = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + feedbacks.length) % feedbacks.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextFeedback();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [nextFeedback]);

  //filter the array
  const omsSubscribed = allSubcribedPlans.filter(
    (plan) => plan.softwareName === "order management system"
  );

  return (
    <>
      {/* carousel  */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full h-screen "
      >
        <div
          style={{
            backgroundImage: `linear-gradient(45deg,
            rgba(0, 0, 0, 200.605),
            rgba(0, 0, 200, 0.5)), url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-100  -z-10  bg-black"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-20 ">
          <div className="pl-20 bg-opacity-50 rounded-lg w-3/4 ">
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-sm mb-4 font-semibold text-white w-auto"
            >
              CUTTING EDGE CREATION
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-7xl mb-4 font-semibold text-white "
            >
              Software & Tech Development for the Future
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              className="mb-6 text-lg font-light text-white"
            >
              Sure, you may be able to get by with whatever software your
              business is currently using, but will you grow?
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 3 }}
              className="relative px-6 py-2  hover:text-white bg-white isolation-auto z-10 border
                hover:border-white-600
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-blue-600 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
            >
              Get Started
            </motion.button>
          </div>
          {/* <div
            className=" h-[400px] w-3/4  mr-20 "
            style={{
              backgroundImage: `url(${kite})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "900px auto",
            }}
          ></div> */}
        </div>
      </motion.section>
      {/* carousel end */}

      {/* welcome section  */}
      <WelcomeSection />
      {/* welcome section end  */}

      {/* who we are section  */}
      <WhoWeAreSection />
      {/* who we are section end */}

      {/* about us in home page  */}
      <AboutusHome />
      {/* about us in home page end */}

      {/* relationships section  */}
      <RelationshipsSection />
      {/* relationships section end */}

      {/* what we provide  */}
      <WhatWeProvideSection />
      {/* what we provide end  */}

      {/* get in touch section  */}
      <GetInTouchSection />
      {/* get in touch section end */}

      {/* service section  */}
      <motion.section
        className="w-full auto flex flex-col  p-20 bg-black"
        ref={sectionRef}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <motion.span
          className="text-4xl font-semibold text-start text-white uppercase "
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Digital Core Capabilities
        </motion.span>
        <motion.p
          className="text-xl font-semibold mt-3 mb-20 text-start text-white"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className=" border p-10 shadow-lg  text-center  bg-gradient-to-t from-white to-blue-500 rounded-md"
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1.5 + index * 0.3 }}
                style={{
                  backgroundImage: `linear-gradient(45deg,
                  rgba(0, 0, 255, 0.6),
                  rgba(255, 255, 255, 0.9)), url(${card})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="mb-4">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-24 h-24 mx-auto "
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-200">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.section>
      {/* service setion end */}

      {/* happy client  */}
      {/* <section className="w-full flex flex-col justify-center items-center py-20">
        <h2 className="text-3xl font-semibold text-[#AB6604] mb-10">
          Our Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-black">
          {clientStats.map((stat, index) => (
            <AnimatedCounter
              key={index}
              title={stat.title}
              count={stat.count}
            />
          ))}
        </div>
      </section> */}
      {/* happy client end */}

      {/* oms product section  */}
      <motion.section className="px-20 py-12 bg-black">
        <motion.span
          className="text-4xl font-semibold text-start text-white uppercase hover:border-b"
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Our Software
        </motion.span>
        <motion.p
          className="text-xl font-semibold mt-3 mb-20 text-start text-white"
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Build vital capabilities to deliver digital outcomes.
        </motion.p>
        <motion.div
          className="max-w-7xl mx-auto "
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12  p-6 ">
            <div>
              <img
                src={oms}
                alt="Product Screenshot"
                className="w-full rounded-lg shadow-lg shadow-black"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-2xl font-semibold mb-4 text-white uppercase underline">
                Order Management System
              </p>
              <p className="text-xl mb-4 text-justify text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                convallis libero nec sapien rutrum, at dignissim magna
                fermentum.
              </p>
              <ul className="text-left mb-6">
                <li className="mb-2 text-white">
                  <span className="text-white mr-2">&#x2713;</span> Feature 1:
                  Lorem ipsum dolor sit amet
                </li>
                <li className="mb-2 text-white">
                  <span className="text-white mr-2">&#x2713;</span> Feature 2:
                  Consectetur adipiscing elit
                </li>
                <li className="mb-2 text-white">
                  <span className="text-white mr-2">&#x2713;</span> Feature 3:
                  Nulla convallis libero nec sapien
                </li>
                <li className="mb-2 text-white">
                  <span className="text-white mr-2">&#x2713;</span> Feature 4:
                  Dignissim magna fermentum
                </li>
              </ul>

              {omsSubscribed.length > 0 ? (
                <Link to={"/profile"}>
                  <button
                    className="relative px-6 py-2  hover:text-white bg-white isolation-auto z-10 border
                  hover:border-white-600
          before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-blue-600 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
                  >
                    Open Now
                  </button>
                </Link>
              ) : (
                <Link to={"/oms-plan"}>
                  <button
                    className="relative px-6 py-2  hover:text-white bg-white isolation-auto z-10 border
                  hover:border-white-600
          before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-blue-600 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
                  >
                    See plan
                  </button>
                </Link>
              )}
            </div>
          </div>
        </motion.div>
        {/* ems product section  */}
        <motion.div
          className="max-w-7xl mx-auto "
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12  p-6 ">
            <div>
              <img
                src={oms}
                alt="Product Screenshot"
                className="w-full rounded-lg shadow-lg shadow-black"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-2xl font-semibold mb-4 text-white uppercase underline">
                Order Management System
              </p>
              <p className="text-xl mb-4 text-justify text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                convallis libero nec sapien rutrum, at dignissim magna
                fermentum.
              </p>
              <ul className="text-left mb-6">
                <li className="mb-2 text-white">
                  <span className="text-white mr-2">&#x2713;</span> Feature 1:
                  Lorem ipsum dolor sit amet
                </li>
                <li className="mb-2 text-white">
                  <span className="text-white mr-2">&#x2713;</span> Feature 2:
                  Consectetur adipiscing elit
                </li>
                <li className="mb-2 text-white">
                  <span className="text-white mr-2">&#x2713;</span> Feature 3:
                  Nulla convallis libero nec sapien
                </li>
                <li className="mb-2 text-white">
                  <span className="text-white mr-2">&#x2713;</span> Feature 4:
                  Dignissim magna fermentum
                </li>
              </ul>
              <Link to={"/oms-plan"}>
                <button
                  className="relative px-6 py-2  hover:text-white bg-white isolation-auto z-10 border
                hover:border-white-600
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-blue-600 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
                >
                  See plan
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
        {/* ems product section end  */}
      </motion.section>
      {/* pms product section end  */}

      {/* textimonials sections */}
      <section className="px-20 py-12 bg-black ">
        <motion.span
          className="text-4xl font-semibold text-start text-white uppercase hover:border-b"
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          What our clients say about us
        </motion.span>
        <motion.p
          className="text-md font-semibold mt-3 mb-20 text-start text-white"
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Our mission is to help customers achieve their business objectives by
          providing innovative, best-in-class consulting, IT solutions.
          <br /> Clients who are satisfied with our services have had a positive
          experience with the services we provide. Satisfied clients may leave
          reviews or testimonials.
        </motion.p>
        <div className="max-w-7xl mx-auto text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="mb-4">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="text-lg font-semibold">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* textimonials sections end */}

      {/* customer feedback  */}

      {/* endc suctomer feedback  */}

      {/* <section className="flex flex-col px-20 py-20 bg-black">
        <motion.span
          className="text-4xl font-semibold text-start text-white uppercase hover:border-b "
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Cutomer Feedback
        </motion.span>
        <motion.p
          className="text-xl font-semibold mt-3 mb-20 text-start text-balck"
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Build vital capabilities to deliver digital outcomes.
        </motion.p>
        <div className="relative w-full max-w-7xl flex items-center justify-center">
          <button
            onClick={prevFeedback}
            className="absolute left-0 text-[#AB6604] text-2xl"
          >
            &larr;
          </button>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="p-10 bg-white rounded-lg shadow-md text-center"
            >
              <p className="text-xl text-gray-700 flex">
                <span className="text-6xl mb-3">&ldquo;</span>
                <br />
                {feedbacks[currentIndex].quote}
                <br />
                <br />
                <span className="text-6xl">&rdquo;</span>
              </p>
              <h3 className="text-2xl font-bold text-[#AB6604] mt-4">
                {feedbacks[currentIndex].name}
              </h3>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={nextFeedback}
            className="absolute right-0 text-[#AB6604] text-2xl"
          >
            &rarr;
          </button>
        </div>
      </section> */}

      {/* tour  */}
      <ServiceTourSection />
      {/* tour end */}

      {/* subscribe section  */}
      {/* <section className="bg-gradient-to-l from-pink-800 to-violet-900 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4 text-white">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-white mb-8">
            Stay updated with the latest news and trends.
          </p>
          <form onSubmit={handleSubmit} className="flex justify-center">
            <input
              type="email"
              className="px-4 py-2 w-64 sm:w-80 rounded-l-md focus:outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md transition duration-300 ease-in-out"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section> */}
      {/* subscribe section  */}

      {/* support sectio  */}
      <SupportSection />
      {/* support sectio end */}
    </>
  );
};

export default Home;
