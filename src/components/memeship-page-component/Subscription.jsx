

const Subscription = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="pb-8 font-bold md:text-6xl text-white">
          Subscription <h1 className="text-[#146EF5]">Plans</h1>
        </h1>
        <section className="flex justify-center">
          <div className="w-full h-auto space-x-1 bg-white rounded-2xl flex justify-evenly items-center py-8 mb-8">

            <div className="h-[470px] w-[400px] bg-[#141415] rounded-xl shadow-2xl ">

              <section>

                <div className="flex flex-col">
                  <h1 className="text-start text-3xl font-bold text-white pl-6 pt-4">Basic</h1>
                  <h1 className="flex text-start text-[44px] font-bold text-white pt-1 pl-6">₹1000<p className="font-thin">/mo</p></h1>
                  
                  <div className="w-[280px] h-[230px] bg-white rounded-2xl "></div>

                </div>

              </section>

            </div>

            <div className="h-[470px] w-[400px] bg-[#141415] rounded-xl shadow-2xl ">
              <section>

              <div className="flex flex-col">
                  <h1 className="text-start text-3xl font-bold text-white pl-6 pt-4">Basic</h1>
                  <h1 className="flex text-start text-[44px] font-bold text-white pt-1 pl-6">₹1000<p className="font-thin">/mo</p></h1>
                  
                  <div className="w-[280px] h-[230px] bg-white rounded-2xl "></div>

                </div>


              </section>
            </div>

            <div className="h-[470px] w-[400px] bg-[#141415] rounded-xl shadow-2xl ">
              
              <section>

              <div className="flex flex-col">
                  <h1 className="text-start text-3xl font-bold text-white pl-6 pt-4">Basic</h1>
                  <h1 className="flex text-start text-[44px] font-bold text-white pt-1 pl-6">₹1000<p className="font-thin">/mo</p></h1>
                  
                  <div className="w-[280px] h-[230px] bg-white rounded-2xl "></div>

                </div>


              </section>

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Subscription;
