import welcome from "../../assets/welcome.svg";
const WelcomeSection = () => {
  return (
    <section className="bg-[#141415] text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 ">
        <div className=" md:text-left md:w-1/2 ml-10  ">
          <h1 className="text-4xl md:text-4xl font-bold mb-4 ">
            Welcome to Blurock Innovations, the leading provider of innovative
            technology solutions
          </h1>
          <p className="text-md mb-8 ">
            Our mission is to empower companies to reach their full potential
            through the use of cutting-edge technology. We offer a wide range of
            services including Website Designing & Development, Digital
            Marketing, App Development, Software Development, Graphic Designing
            and many other latest Technology Services.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white  font-bold py-2 px-4 rounded">
            Contact Us
          </button>
        </div>
        <div className="mt-8 md:mt-0 md:ml-6 md:w-1/2">
          <img
            src={welcome}
            alt="Welcome"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
