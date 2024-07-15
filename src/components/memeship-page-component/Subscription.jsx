import { Check } from 'lucide-react';


const Subscription = () => {
  return (
    <>
      <div className='h-[800px] text-center'>
        <h1 className='pb-5 font-bold text-[80px] text-white'>Subscription Plans</h1>
        <section className='flex justify-center'>
          <div className='h-[600px] w-[1300px] space-x-6 bg-white opacity-15 rounded-2xl flex justify-center items-center'>
            <div className='h-[500px] w-[400px] bg-black rounded-xl shadow-2xl relative z-10'>
              <section>

              </section>
            </div>

            <div className='h-[500px] w-[400px] bg-black rounded-xl shadow-2xl relative z-10'></div>
            <div className='h-[500px] w-[400px] bg-black rounded-xl shadow-2xl relative z-10'></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Subscription;
