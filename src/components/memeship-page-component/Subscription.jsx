const Subscription = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="pb-8 font-bold md:text-6xl text-white">
          Subscription <h1 className="text-[#146EF5]">Plans</h1>
        </h1>
        <section className="flex justify-center">
          <div className="w-full h-auto space-x-1 bg-white rounded-2xl flex justify-evenly items-center py-8 mb-8">

            <div className="h-[500px] w-[400px] bg-[#141415] rounded-xl shadow-2xl flex flex-col justify-between items-center py-10">
              <div className="text-start w-full pl-6">
                <h1 className="text-3xl font-bold text-white">Basic</h1>
                <h1 className="flex text-[44px] font-bold text-white pt-1">₹1000<p className="font-thin">/mo</p></h1>
              </div>
              <div className="w-[280px] h-[230px] bg-white rounded-2xl flex items-center justify-center"></div>

              <button className="w-[280px] h-[48px]  bg-[#146EF5] rounded-2xl text-white font-bold text-[20px]">Buy Now</button>
            </div>

            <div className="h-[500px] w-[400px] bg-[#141415] rounded-xl shadow-2xl flex flex-col justify-between items-center py-10">
              <div className="text-start w-full pl-6">
                <h1 className="text-3xl font-bold text-white">Professional</h1>
                <h1 className="flex text-[44px] font-bold text-white pt-1">₹2000<p className="font-thin">/mo</p></h1>
              </div>
              <div className="w-[280px] h-[230px] bg-white rounded-2xl flex items-center justify-center"></div>

              <button className=" flex text-center items-center justify-center w-[280px] h-[48px]  bg-[#146EF5] rounded-2xl text-white font-bold text-[20px]">Buy Now</button>
            </div>

            <div className="h-[500px] w-[400px] bg-[#141415] rounded-xl shadow-2xl flex flex-col justify-between items-center py-10">
              <div className="text-start w-full pl-6">
                <h1 className="text-3xl font-bold text-white">Enterprise</h1>
                <h1 className="flex text-[44px] font-bold text-white pt-1">₹3000<p className="font-thin">/mo</p></h1>
              </div>
              <div className="w-[280px] h-[230px] bg-white rounded-2xl flex items-center justify-center"></div>

              <button className="w-[280px] h-[48px]  bg-[#146EF5] rounded-2xl text-white font-bold text-[20px]">Buy Now</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Subscription;
