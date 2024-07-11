import { PhoneCallIcon } from "lucide-react";
import bg from "../../assets/bg-code.jpg";

const CustomerSupport = () => {
  return (
    <div
      className="w-full h-screen bg-[#141415] plus-jakarta-sans flex items-center justify-center flex-col"
      style={{
        backgroundImage: `linear-gradient(45deg,
        rgba(0, 0, 0, 200.605),
        rgba(0, 0, 0, 0.3)), url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center end",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <span className="text-white text-2xl md:text-4xl lg:text-5xl font-bold px-6 md:px-24 lg:px-44 text-center leading-tight">
        Empower your creativity and craft stunning <br className="hidden md:block" /> sites while enjoying
        real-time customer <br className="hidden md:block" /> support at every step.
      </span>

      <span className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 flex items-center justify-center mt-6 md:mt-10 hover:border-[#146ef5] group cursor-pointer">
        <PhoneCallIcon className="text-white group-hover:text-[#146ef5]" />
      </span>
    </div>
  );
};

export default CustomerSupport;
