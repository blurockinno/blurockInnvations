import { HelpCircle } from "lucide-react";
import bg from "../../assets/getquote_bg.jpg";
import contact from "../../assets/contact.svg";
const GetInTouchSection = () => {
  return (
    <section
      className="bg-gray-100 text-gray-800 py-20"
      style={{
        backgroundImage: `linear-gradient(45deg,
        rgba(0, 0, 0, 200.605),
        rgba(0, 0, 200, 0.5)), url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-6">
        <div className="flex  justify-center">
          <div
            className=" p-6 rounded-lg shadow-lg text-white shadow-white border "
        //     style={{
        //       backgroundImage: `linear-gradient(45deg,
        // rgba(255, 255, 255, 0.605),
        // rgba(0, 0, 0, .5)), url(${contact})`,
        //       backgroundSize: "cover",
        //       backgroundPosition: "center",
        //       backgroundRepeat: "no-repeat",
        //     }}
          >
            <h2 className="text-md md:text-xl mb-6 flex">
              Get in Touch <HelpCircle className="mx-2" />
            </h2>
            <p className="text-5xl mb-6 font-semibold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              Explore your project with <br />
              our team !
            </p>
            <p className="text-lg mb-4 text-white">
              If you have any project on mind? For enquiry :
            </p>
            <p href="tel:+916200932331" className="text-white font-bol  text-2xl">
              +91-6200932331
            </p>
            <p className="text-sm mt-1 text-white">
              We&apos;re available Mon-Fri, 9am-5pm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
