import BG5 from "/assets/path2.svg";
import { Camera } from "lucide-react";

const Blg =()=>{
    return(
        <div className="flex bg-no-repeat bg-[#141415] h-auto px-10 md:px-24 justify-center"
        style={{ backgroundImage: `url(${BG5})` }} >

            <div className="flex flex-col h-auto w-[2100px] bg-[#171718] my-14 rounded-2xl">

                <section className="flex">

                    <div className="flex flex-col justify-center items-center h-64 w-64 pt-3 bg-[#121214a9] rounded-full m-10 hover:bg-[#121214] cursor-pointer">
                        <Camera className="text-white w-[40px] h-[40px] "></Camera>
                        <p className="text-white font-semibold">Photo</p>
                    </div>

                    <section className="flex flex-col h-64 justify-center mt-10">
                        <h1 className="text-center ml-10 text-[50px] font-bold text-white">Handling Orders</h1>
                        <h1 className="font-semibold text-[#146EF5] flex text-left ml-10">Yash Juyal</h1>
                    </section>
                </section>

                <p className="mx-14 my-10 text-white text-[20px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo ratione quia, molestiae amet dolorum enim tenetur iure ut corporis doloribus accusamus tempore, harum vero assumenda dolorem quisquam voluptate odio. Ex repellendus tempore impedit. Tempora alias, asperiores delectus ex quis dignissimos voluptates deleniti nisi libero cupiditate consectetur iste in sint rem ullam, eaque quos recusandae unde numquam suscipit sit corrupti officiis natus? Expedita dignissimos ducimus ratione asperiores architecto voluptates nihil iusto, animi earum neque aperiam debitis sit quae officiis dolor consequatur sequi magnam minima distinctio repellat ipsam doloremque tempore est? Esse quos ut aspernatur quae ad enim. Similique itaque ut vitae quam ipsa unde consectetur cum quae sequi corporis iure laboriosam magnam esse doloribus, tempora repellendus, dignissimos recusandae nisi nulla. Eos, ex, deserunt laudantium voluptate impedit consequuntur quasi quia, tempore cum libero illo commodi quos exercitationem quaerat saepe! Ad nemo impedit autem odit numquam facilis voluptates ullam inventore blanditiis beatae iure nihil ut eos, sint quae consectetur, nisi harum nostrum laboriosam quia. Qui suscipit non dolore sed veniam, incidunt perferendis quia reprehenderit laborum officia voluptates quas sapiente, doloremque velit porro at molestiae odit consequuntur illo distinctio nostrum impedit voluptatem tempora. Quaerat libero eos debitis dolore ab voluptate recusandae. Soluta animi ut similique ab deserunt magnam eum ex quod, tenetur et iste voluptatum, incidunt quo vel mollitia quia blanditiis dolorem veritatis rerum laborum tempore officiis odio at. Voluptate, iusto? Aliquid vero accusamus consequatur aperiam recusandae cumque placeat, laboriosam voluptates, est, blanditiis aspernatur expedita esse deserunt nihil asperiores ex? Adipisci veritatis nostrum tempore.</p>
               
            </div>
        </div>
    )
}

export default Blg;