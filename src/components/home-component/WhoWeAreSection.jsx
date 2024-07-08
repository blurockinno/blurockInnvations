import team from "../../assets/team.svg";
import bg from "../../assets/linegroup3.svg";
const WhoWeAreSection = () => {
  return (
    <section
      className="bg-white text-gray-800 py-20"
      style={{
        backgroundImage: `linear-gradient(45deg,
        rgba(0, 0, 0, 200.605),
        rgba(0, 0, 200, 0.9)), url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 mt-10">
            <img src={team} alt="Team" className="w-full h-auto rounded-lg px-10" />
          </div>
          <div className="md:w-1/2 text-black flex flex-col  justify-start bg-white my-auto p-10 rounded-l-[70px]">
            <p className="text-3xl md:text-xl font-bold mb-6 text-start  ">
              Who We Are
            </p>
            <p className="text-5xl mb-4">We build futures through innovation</p>
            <p className="text-lg mb-4">
              With a diverse team of experts in software development, design,
              and strategy, we bring a wealth of experience and creativity to
              every project. Our values are rooted in collaboration, integrity,
              and a relentless pursuit of excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
