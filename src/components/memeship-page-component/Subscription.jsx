import tick from '../../assets/check-solid.svg'

const Subscription = () => {
  return (
    <>
      <div className="h-[1100px] ">
        <h1 className="text-[30px] font-bold text-center pt-9">
          Subscription Plans
        </h1>
        <section className="pt-[70px] justify-center opacity-2 flex ">
          <div className="z-10 shadow-deep flex justify-center items-center h-[810px] w-[1250px] border-2 rounded-2xl bg-gradient-to-r from-[#3E1A78] to-[rgb(240,154,178)]">
            <div className="z-10  shadow-2xl h-[740px] w-[1185px] border-2 rounded-[11px] bg-white px-5 py-10">
              <p className="text-center mb-10 text-3xl font-bold">Choose Your Plan</p>
              <section className="opacity-100 space-x-8 flex items-center justify-center">
                {/* 1st box */}
                <div className="flex flex-col justify-between items-center rounded-lg h-[500px] w-[350px] border-[2px] border-blue-500 p-4">
                  <div className="w-full">
                    <div className="flex rounded-md justify-center h-[50px] bg-gradient-to-r from-[#B0B0B0] to-[#4B4B4B] font-bold text-[25px] pt-[6px] text-white">
                      SILVER
                    </div>
                    <p className="font-extrabold text-[20px] text-center mt-4">Includes</p>
                    <ol className="text-center space-y-3 pt-4 text-[18px] font-semibold">
                      <li>Authentication</li>
                      <li>Add upto 10 users</li>
                      <li>Email Notification</li>
                      <li>Calendar Integration</li>
                      <li>Download PDF</li>
                    </ol>
                  </div>
                  <button className="border-2 border-blue-500 hover:border-white hover:bg-gradient-to-r from-[#3E1A78] to-[hsl(343,74%,77%)] hover:text-white hover:transition ease-linear duration-50 rounded-md h-[40px] w-full font-medium">
                    ₹1000/user
                  </button>
                </div>

                {/* 2nd box */}
                <div className="flex flex-col justify-between items-center rounded-lg h-[500px] w-[350px] border-[2px] border-blue-500 p-4">
                  <div className="w-full">
                    <div className="rounded-md h-[50px] bg-gradient-to-r from-[#947D09] to-[#FAD310] text-center font-outfit font-bold text-[25px] pt-[6px]">
                      GOLD
                    </div>
                    <p className="font-extrabold text-[20px] text-center mt-4">Includes</p>
                    <ul className="list-disk list-inside text-center space-y-3 pt-4 text-[18px] font-semibold">
                      <li>Authentication</li>
                      <li>Add upto 20 users</li>
                      <li>Email Notification</li>
                      <li>End to End Encryption</li>
                      <li>Download and Print PDF</li>
                    </ul>
                  </div>
                  <button className="border-2 border-blue-500 hover:border-white hover:bg-gradient-to-r from-[#3E1A78] to-[rgb(240,154,178)] hover:text-white rounded-md h-[40px] w-full hover:transition ease-linear duration-50 font-medium">
                    ₹2000/user
                  </button>
                </div>

                {/* 3rd box */}
                <div className="flex flex-col justify-between items-center rounded-lg h-[500px] w-[350px] border-[2px] border-blue-500 p-4">
                  <div className="w-full">
                    <div className="rounded-md h-[50px] bg-[#AAAAAA] text-center font-outfit font-bold text-[25px] pt-[6px]">
                      PLATINUM
                    </div>
                    <p className="font-extrabold text-[20px] text-center mt-4">Includes</p>
                    <ol className="text-center space-y-3 pt-4 text-[18px] font-semibold">
                      <li>Authentication</li>
                      <li>Add 100+ users</li>
                      <li>Email/Whatsapp Notification</li>
                      <li>End to End Encryption</li>
                      <li>Unlimited PDF downloads</li>
                    </ol>
                  </div>
                  <button className="border-2 border-blue-500 hover:border-white hover:bg-gradient-to-r from-[#3E1A78] to-[rgb(240,154,178)] hover:text-white rounded-md h-[40px] w-full hover:transition ease-linear duration-50 font-medium">
                    ₹3000/user
                  </button>
                </div>
              </section>

              {/* Buy button */}
              <div className="flex justify-center mt-10">
                <button className="bg-blue-500 w-[250px] shadow-2xl text-white px-8 py-3 rounded-md hover:bg-blue-600 transition ease-linear font-semibold cursor-pointer hover:translate-y-1 hover:scale-110 duration-300">
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Subscription;
