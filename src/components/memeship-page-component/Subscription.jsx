const Subscription = () => {
  return (
    <>
      <div className="h-[1000px] pt-[50px]">
        <h1 className="text-[30px] font-bold text-center pt-9">
          Subscription Plans
        </h1>
        <section className="pt-[70px] justify-center opacity-2 flex">
          <div className="opacity-1 shadow-deep flex justify-center items-center  w-[1250px] border-2 rounded-2xl bg-gradient-to-r from-[#3E1A78] to-[rgb(240,154,178)]">
            <div className="  shadow-2xl  w-[1185px] border-2 rounded-[11px] bg-white px-10 py-20">
              {/* subscribe box */}
              <p className="text-center mb-10 text-3xl"> Choose Plan</p>
              <section className="space-x-8 flex items-center justify-center">
                <div className=" flex items-start justify-center rounded-lg h-[500px] w-[350px] border-[2px] border-blue-500">
                  <div className="rounded-md mt-[20px] h-[50px] w-[300px] bg-gradient-to-r from-[#B0B0B0] to-[#4B4B4B] text-center font-outfit font-bold text-[25px] pt-[6px] text-white">
                    SILVER
                  </div>
                </div>
                <div className="flex items-start justify-center rounded-lg h-[500px] w-[350px] border-[2px] border-blue-500">
                  <div className="rounded-md mt-[20px] h-[50px] w-[300px] bg-gradient-to-r from-[#947D09] to-[#FAD310] text-center font-outfit font-bold text-[25px] pt-[6px]">
                    GOLD
                  </div>
                </div>
                <div className="flex items-start justify-center rounded-lg h-[500px] w-[350px] border-[2px] border-blue-500">
                  <div className="rounded-md mt-[20px] h-[50px] w-[300px] bg-[#AAAAAA] text-center font-outfit font-bold text-[25px] pt-[6px]">
                    PLATINUM
                  </div>
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
