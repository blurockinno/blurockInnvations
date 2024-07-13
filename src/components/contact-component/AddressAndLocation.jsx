
const AddressAndLocation = () => {
  return (
    <div className="bg-[#FAFAFC] plus-jakarta-sans">
        <div className="px-6 md:px-10 lg:px-20 py-10  mx-auto md:mx-40 rounded-lg ">
          <div className="flex flex-col md:flex-row rounded-lg">
            <div className="w-full md:w-2/5 flex flex-col items-start justify-center">
              <h6 className="text-[#146EF5] text-center uppercase font-semibold">
                OUR LOCATIONS
              </h6>
              <h1 className="text-[#141415] text-3xl md:text-5xl font-bold leading-tight mt-2">
                Planning a visit? Here&apos;s our location.
              </h1>

              <p className="text-gray-400 text-lg mt-5">
                Whether you&apos;re attending a scheduled meeting, workshop, or
                just dropping by, use the following directions to reach our
                office.
              </p>

              <div className="flex flex-col mt-5">
                <h1 className="text-xl text-[#141415]">Address:</h1>
                <p className="text-lg text-gray-400">Joshi Nagar, Ludhiana</p>
                <p className="text-lg text-gray-400">Panjab, India</p>
              </div>
              <div className="flex flex-col mt-5">
                <h1 className="text-xl text-[#141415]">Working hours:</h1>
                <p className="text-lg text-gray-400">
                  Monday - Friday: 10AM - 6PM
                </p>
              </div>

              <div className="flex gap-4 md:gap-10 mt-6 md:mt-10"></div>
            </div>
            <div className="w-full md:w-3/5  md:p-10 mt-2 md:mt-0 rounded-lg">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "0",
                  paddingBottom: "75%",
                }}
              >
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3422.906230091628!2d75.81029097465446!3d30.91724507669361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a810423f72b61%3A0x6dc83aeace8a2e30!2sBluRock%20Wealth!5e0!3m2!1sen!2sin!4v1720685912215!5m2!1sen!2sin"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    border: "0",
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default AddressAndLocation