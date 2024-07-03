const Features = () => {
  return (
    <div className="grid place-items-center p-5 sm:p-20 w-full">
      <section className="flex flex-wrap justify-center gap-10 lg:space-x-48">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="shadow-deep flex justify-center items-center shadow-2 h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] border-2 rounded-full bg-gradient-to-r from-[#3E1A78] to-[#F09AB2] hover:scale-110 cursor-pointer transition"
          >
            <div className="h-[185px] w-[185px] sm:h-[235px] sm:w-[235px] rounded-full bg-white"></div>
          </div>
        ))}
      </section>
      <br />
      <br />
      <section className="flex flex-wrap justify-center gap-10 lg:space-x-48">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="shadow-deep flex justify-center items-center shadow-2 h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] border-2 rounded-full bg-gradient-to-r from-[#3E1A78] to-[#F09AB2] hover:scale-110 cursor-pointer transition"
          >
            <div className="h-[185px] w-[185px] sm:h-[235px] sm:w-[235px] rounded-full bg-white"></div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Features;
