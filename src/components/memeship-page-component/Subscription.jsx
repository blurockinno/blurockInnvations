const Subscription = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="pb-8 font-bold md:text-6xl text-white">
          Subscription <h1 className="text-[#146EF5]">Plans</h1>
        </h1>
        <section className="flex justify-center">
          <div className="w-full h-auto space-x-1 bg-white rounded-2xl flex justify-evenly items-center py-8 mb-8">

            <div className="h-[440px] w-[400px] bg-[#141415] rounded-xl shadow-2xl ">

              <section>

                <div>
                  <h1 className="text-4xl font-bold text-white pt-5">Basic</h1>
                </div>

              </section>

            </div>

            <div className="h-[440px] w-[400px] bg-[#141415] rounded-xl shadow-2xl ">
              <section>

                <div>
                  <h1 className="text-4xl font-bold text-white pt-5">Professional</h1>
                </div>

              </section>
            </div>

            <div className="h-[440px] w-[400px] bg-[#141415] rounded-xl shadow-2xl ">
              
              <section>

                <div>
                  <h1 className="text-4xl font-bold text-white pt-5">Enterprise</h1>
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
