import team from "../../assets/scooter.svg";
import bg from "../../assets/linegroup3.svg";
const ServiceTourSection = () => {
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
            <img
              src={team}
              alt="Team"
              className="w-full h-auto rounded-lg px-10"
            />
          </div>
          <div className="md:w-1/2 text-black flex flex-col  justify-start bg-white my-auto p-10 rounded-l-[70px]">
            <p className="text-3xl md:text-xl font-bold mb-6 text-start  ">
              A TOUR OF
            </p>
            <p className="text-5xl mb-4">Offering Services by Blurock</p>
            <p className="text-lg mb-4">
              At Blurock innovations, we are dedicated to delivering innovative
              and reliable IT solutions that meet the unique needs of each of
              our clients.
            </p>
            <button
              className="w-40 relative px-6 py-2 mx-5 hover:text-white bg-white isolation-auto z-10 border border-black
                hover:border-white-600
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-blue-600 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
            >
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTourSection;
