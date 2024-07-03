const Demo = () => {
  return (
    <div className="h-[800px">
      <h1 className="text-[30px] font-bold text-center pt-9">
        Experience the Demo
      </h1>
      <section className="pt-[70px] justify-center  flex">
        <div className="shadow-deep flex justify-center items-center h-[550px] w-[1000px] border-2 rounded-2xl bg-gradient-to-r from-[#3E1A78] to-[#F09AB2]">
          <div className=" h-[535px] w-[986px] border-2 rounded-[11px] bg-white">
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
