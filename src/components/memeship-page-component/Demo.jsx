const Demo = () => {
  return (
    <div className="md:py-20 space-y-10 lg:space-y-0 lg:space-x-36 w-full flex flex-col lg:flex-row items-center justify-center mb-10 px-6 lg:px-0">
      <h1 className="text-3xl lg:text-6xl text-[#9CA3AF] font-semibold text-center">
        Experience <br />
        <span className="text-[#146EF5]">the Demo</span>
      </h1>
      <section className="flex justify-center w-full lg:w-auto">
        <div className="shadow-deep flex justify-center items-center border-2 rounded-2xl bg-white p-2">
          <div className="w-full h-[400px] lg:w-[586px] border-2 rounded-[11px] bg-white">
            <iframe
              className="h-full w-full rounded-lg"
              src="https://www.youtube.com/embed/4WiH9pf2ULQ?si=2TzjHgKzRDOgi528"
              width="100%"
              height="100%"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;
