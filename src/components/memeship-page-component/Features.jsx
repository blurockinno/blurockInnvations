import { Cpu, MoveRight, LocateFixed, ListRestart, ClipboardMinus, Airplay, FileBarChart} from 'lucide-react';

const Features = () => {
  return (
      <div className='h-[1200px] space-y-24 pt-10 pb-10'>
        <section className='flex py-10 px-9 justify-center items-center space-x-36'>
          <section className='flex space-x-10'>

            <div className='h-[250px] w-[340px] bg-white  rounded-2xl shadow-2xl flex '>
              <section className='pl-4 pt-2 flex flex-col'>
                <Cpu className='h-auto w-9 pt-2' />
                <h1 className='pt-3 font-bold text-[22px]'>Automated Order Entry</h1>
                <p className='pr-7 text-[15px] pt-2'>The OMS software automates the process of order entry, reducing manual data entry errors and speeding up order processing times.</p>
                <section className='flex justify-end pr-4 pt-1 transform transition duration-500 hover:scale-105'>
                  <button className='h-10 w-10 bg-[#141415] rounded-full'><MoveRight className='text-white'/></button>
                </section>  
              </section>
            </div>

            <div className='h-[250px] w-[340px] bg-white rounded-2xl shadow-2xl'>
              <section className='pl-4 pt-2 flex flex-col'>
               <LocateFixed className='h-auto w-9 pt-2' />
                <h1 className='pt-3 font-bold text-[22px]'>Real-Time Order Tracking</h1>
                <p className='pr-7 text-[15px] pt-2'>Users can track orders in real-time, providing transparency and up-to-date information on order status, shipment, and delivery.</p>
                <section className='flex justify-end pr-4 pt-1 transform transition duration-500 hover:scale-105'>
                  <button className='h-10 w-10 bg-[#141415] rounded-full'><MoveRight className='text-white'/></button>
                </section> 
              </section>
            </div>

            </section>
              <h1 className='text-[60px] font-semibold text-gray-400'><h1 className='text-[#146EF5]'>Order</h1>Processing</h1>
            </section>

            <section className='flex py-10 px-9 justify-center items-center space-x-36 '>
              <h1 className='text-[60px] font-semibold text-gray-400'><h1 className='text-[#146EF5]'>Inventory</ h1>Management</h1>

              <section className='flex space-x-10'>
                <div className='h-[250px] w-[340px] bg-white rounded-2xl shadow-2xl flex'>
                <section className='pl-4 pt-2 flex flex-col'>
                    <ListRestart className='h-auto w-9 pt-2' />
                    <h1 className='pt-3 font-bold text-[22px]'>Automated Replenishment</h1>
                    <p className='pr-7 text-[15px] pt-2'>The software continuously monitors stock levels, ensuring that inventory is updated in real-time and alerting users when stock is low.</p>
                    <section className='flex justify-end pr-4 pt-1 transform transition duration-500 hover:scale-105'>
                    <button className='h-10 w-10 bg-[#141415] rounded-full'><MoveRight className='text-white'/></button>
                    </section>  
                  </section>
                </div>

                <div className='h-[250px] w-[340px] bg-white rounded-2xl shadow-2xl flex'>
                <section className='pl-4 pt-2 flex flex-col'>
                    <Airplay className='h-auto w-9 pt-2' />
                    <h1 className='pt-3 font-bold text-[22px]'>Stock Level Monitoring</h1>
                    <p className='pr-7 text-[15px] pt-2'>The software continuously monitors stock levels, ensuring that inventory is updated in real-time and alerting users when stock is low.</p>
                    <section className='flex justify-end pr-4 pt-1 transform transition duration-500 hover:scale-105'>
                    <button className='h-10 w-10 bg-[#141415] rounded-full'><MoveRight className='text-white'/></button>
                    </section>  
                  </section>
                </div>

              </section>
            </section>

            <section className='flex py-10 px-9 justify-center items-center space-x-36 '>

              <section className='flex space-x-10'>

              <div className='h-[250px] w-[340px] bg-white rounded-2xl shadow-2xl flex'>
                <section className='pl-4 pt-2 flex flex-col'>
                    <ClipboardMinus className='h-auto w-9 pt-2' />
                    <h1 className='pt-3 font-bold text-[22px]'>Customizable Reports</h1>
                    <p className='pr-7 text-[15px] pt-2'>Users can generate customizable reports to analyze sales trends, order patterns, and inventory levels, aiding in strategic decision-making.</p>
                    <section className='flex justify-end pr-4 pt-1 transform transition duration-500 hover:scale-105'>
                    <button className='h-10 w-10 bg-[#141415] rounded-full'><MoveRight className='text-white'/></button>
                    </section>  
                  </section>
                </div>


                <div className='h-[250px] w-[340px] bg-white rounded-2xl shadow-2xl flex'>
                <section className='pl-4 pt-2 flex flex-col'>
                    <FileBarChart className='h-auto w-9 pt-2' />
                    <h1 className='pt-3 font-bold text-[22px]'>Advanced Data Analytics</h1>
                    <p className='pr-7 text-[15px] pt-2'>The OMS software's advanced analytics tools offer insights to help users identify improvements and optimize operations.</p>
                    <section className='flex justify-end pr-4 pt-6 transform transition duration-500 hover:scale-105'>
                    <button className='h-10 w-10 bg-[#141415] rounded-full'><MoveRight className='text-white'/></button>
                    </section>  
                  </section>
                </div>

              </section>

              <h1 className='text-[60px] font-semibold text-gray-400'><h1 className='text-[#146EF5]'>Reporting and</h1>Analytics</h1>

            </section>
        <section/>   
      </div>
  );
};

export default Features;