const RelationshipsSection = () => {
  return (
    <section className="bg-black text-white py-20">
        <span className="px-10 text-3xl md:text-5xl font-bold  text-center bg-gradient-to-l from-blue-700  rounded-r-3xl p-6 ">
          We believe in building long-term relationships
        </span>
      <div className="container mx-auto px-10">
        <p className="text-lg mb-6  mt-10 w-3/4">
          We understand your unique needs and goals, and tailor our solutions to
          meet those specific requirements. Our dedicated support team is
          available 24/7 to answer any questions and provide ongoing maintenance
          and support. Discover the power of technology and how it can transform
          your business.
          <br />
          <br />
          Contact us today to schedule a free consultation and see how we can
          help you reach new heights. Join the ranks of our satisfied clients
          and experience the benefits of working with us.
        </p>

        <button
          className="relative px-6 py-2  hover:text-white bg-black isolation-auto z-10 border
                hover:border-white-600
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-blue-600 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
        >
          Contact Us
        </button>
        <button
          className="relative px-6 py-2 mx-5 hover:text-white bg-black isolation-auto z-10 border
                hover:border-white-600
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-blue-600 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
        >
          Read More
        </button>
      </div>
    </section>
  );
};

export default RelationshipsSection;
