const Subscription = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="pb-5 font-bold md:text-5xl text-white">
          Subscription Plans
        </h1>
        <section className="flex justify-center">
          <div className="w-full h-auto space-x-6 bg-white opacity-10 rounded-2xl flex justify-evenly items-center md:mx-40 md:px-5 py-10 mb-10">
            <div className="h-[300px] w-80 bg-black rounded-xl shadow-2xl "></div>

            <div className="h-[300px] w-80 bg-black rounded-xl shadow-2xl ">
              <section></section>
            </div>

            <div className="h-[300px] w-80 bg-black rounded-xl shadow-2xl ">
              <section></section>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Subscription;
