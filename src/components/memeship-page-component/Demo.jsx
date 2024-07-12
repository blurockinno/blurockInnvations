const Demo = () => {
  return (
    <div className="space-x-36 h-[600px] w-full flex flex-col lg:flex-row items-center justify-center mb-10 px-6 lg:px-0">
      <h1 className="text-3xl lg:text-7xl text-white font-semibold text-center mb-4">
        Experience <h1 className="text-[#146EF5]">the Demo</h1>
      </h1>
      <section className=" justify-center">
        <div className=" shadow-deep flex justify-center items-center h-[350px] w-[600px] border-2 rounded-2xl bg-white">
          <div className=" h-[335px] w-[586px] border-2 rounded-[11px] bg-white">
            <iframe
              className=" h-full w-full rounded-lg"
              src="https://www.youtube.com/embed/4WiH9pf2ULQ?si=2TzjHgKzRDOgi528"
              width="100%"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;
