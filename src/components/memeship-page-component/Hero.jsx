import Waves from '../../assets/hero.svg';

const Hero = () => {
  return (
    <>
      <div className="flex justify-center items-center py-10 ">
        <section className="lg:pl-20 bg-opacity-50 rounded-lg w-full ">
          <h1 className="text-3xl lg:text-7xl font-semibold text-white">
            Order Management <h1 className='text-[#146EF5]'>System</h1>
          </h1>
          <br />
          <p className="text-white w-full sm:w-[80%] h-auto text-[16px] sm:text-[18px] text-center sm:text-left lg:w-1/2">
            Welcome to the cutting-edge Order Management System (OMS) by Infinity Technologies,
            designed to revolutionize the way you handle orders,
            inventory, and customer relationships. Our OMS is a comprehensive,
            user-friendly solution tailored to streamline your business
            operations, enhance efficiency, and drive growth. Whether you&apos;re a
            small business or a large enterprise, our OMS is built to scale with
            your needs, providing real-time insights and automation that empower
            your team to focus on what truly matters.
          </p>
        </section>
      </div>
    </>
  );
};

export default Hero;
