import {
  Cpu,
  MoveRight,
  LocateFixed,
  ListRestart,
  ClipboardMinus,
  Airplay,
  FileBarChart,
} from "lucide-react";

const Features = () => {
  return (
    <div className="h-auto ">

      <section className="md:py-20 md:px-20 flex flex-col lg:flex-row  justify-center items-center space-y-10 lg:space-y-0 lg:space-x-36">

        <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10">
          <div className="w-[340px] bg-white rounded-2xl shadow-2xl flex p-4">
            <section className="flex flex-col">
              <Cpu className="h-auto w-9 mb-2" />
              <h1 className="font-bold text-xl mb-2">Automated Order Entry</h1>
              <p className="text-sm mb-4">
                The OMS software automates the process of order entry, reducing
                manual data entry errors and speeding up order processing times.
              </p>
              <section className="flex justify-end transform transition duration-500 hover:scale-105">
                <button className="h-10 w-10 bg-[#141415] rounded-full">
                  <MoveRight className="text-white" />
                </button>
              </section>
            </section>
          </div>

          <div className="w-[340px] bg-white rounded-2xl shadow-2xl flex p-4">
            <section className="flex flex-col">
              <LocateFixed className="h-auto w-9 mb-2" />
              <h1 className="font-bold text-xl mb-2">
                Real-Time Order Tracking
              </h1>
              <p className="text-sm mb-4">
                Users can track orders in real-time, providing transparency and
                up-to-date information on order status, shipment, and delivery.
              </p>
              <section className="flex justify-end transform transition duration-500 hover:scale-105">
                <button className="h-10 w-10 bg-[#141415] rounded-full">
                  <MoveRight className="text-white" />
                </button>
              </section>
            </section>
          </div>
        </div>
        <h1 className="text-5xl font-semibold text-gray-400 text-center sm: lg:text-left">
          <span className="text-[#146EF5]">Order </span>Processing
        </h1>
      </section>

      <section className="md:py-20 md:px-20 flex flex-col lg:flex-row  justify-center items-center space-y-10 lg:space-y-0 lg:space-x-36">
        <h1 className="text-5xl font-semibold text-gray-400 text-center lg:text-left">
          <span className="text-[#146EF5]">Inventory</span> Management
        </h1>
        <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10">
          <div className=" w-[340px] bg-white rounded-2xl shadow-2xl flex p-4">
            <section className="flex flex-col">
              <ListRestart className="h-auto w-9 mb-2" />
              <h1 className="font-bold text-xl mb-2">
                Automated Replenishment
              </h1>
              <p className="text-sm mb-4">
                The software continuously monitors stock levels, ensuring that
                inventory is updated in real-time and alerting users when stock
                is low.
              </p>
              <section className="flex justify-end transform transition duration-500 hover:scale-105">
                <button className="h-10 w-10 bg-[#141415] rounded-full">
                  <MoveRight className="text-white" />
                </button>
              </section>
            </section>
          </div>

          <div className="w-[340px] bg-white rounded-2xl shadow-2xl flex p-4">
            <section className="flex flex-col">
              <Airplay className="h-auto w-9 mb-2" />
              <h1 className="font-bold text-xl mb-2">Stock Level Monitoring</h1>
              <p className="text-sm mb-4">
                The software continuously monitors stock levels, ensuring that
                inventory is updated in real-time and alerting users when stock
                is low.
              </p>
              <section className="flex justify-end transform transition duration-500 hover:scale-105">
                <button className="h-10 w-10 bg-[#141415] rounded-full">
                  <MoveRight className="text-white" />
                </button>
              </section>
            </section>
          </div>
        </div>
      </section>

      <section className="md:py-20 md:px-20 flex flex-col lg:flex-row  justify-center items-center space-y-10 lg:space-y-0 lg:space-x-36">

        <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10">
          <div className="w-[340px] bg-white rounded-2xl shadow-2xl flex p-4">
            <section className="flex flex-col">
              <ClipboardMinus className="h-auto w-9 mb-2" />
              <h1 className="font-bold text-xl mb-2">Customizable Reports</h1>
              <p className="text-sm mb-4">
                Users can generate customizable reports to analyze sales trends,
                order patterns, and inventory levels, aiding in strategic
                decision-making.
              </p>
              <section className="flex justify-end transform transition duration-500 hover:scale-105">
                <button className="h-10 w-10 bg-[#141415] rounded-full">
                  <MoveRight className="text-white" />
                </button>
              </section>
            </section>
          </div>

          <div className="w-[340px] bg-white rounded-2xl shadow-2xl p-4">
            <section className="flex flex-col">
              <FileBarChart className="h-auto w-9 mb-2" />
              <h1 className="font-bold text-xl mb-2">
                Advanced Data Analytics
              </h1>
              <p className="text-sm mb-4">
                The OMS software's advanced analytics tools offer insights to
                help users identify improvements and optimize operations.
              </p>
              <section className="flex justify-end transform transition duration-500 hover:scale-105">
                <button className="h-10 w-10 bg-[#141415] rounded-full">
                  <MoveRight className="text-white" />
                </button>
              </section>
            </section>
          </div>
        </div>
        <h1 className="text-5xl font-semibold text-gray-400 text-center lg:text-left">
          <span className="text-[#146EF5]">Reporting and</span> Analytics
        </h1>
      </section>
    </div>
  );
};

export default Features;
