import { Carousel } from "@material-tailwind/react";
import BG5 from "/assets/path2.svg";
import { Heart, Eye } from "lucide-react";

const Blog = ()=>{
    return(
        <div  className="bg-no-repeat bg-[#141415] plus-jakarta-sans h-auto px-10 md:px-24 "
        style={{ backgroundImage: `url(${BG5})` }}>

            <section className="flex flex-col justify-center items-center text-center">
                <div className="text-[60px] text-[#146EF5] font-bold mt-16 mb-7">Blog Page</div>

                <p className="text-[18px] text-white font-semibold mb-40">Optimize your business operations with OMS by Infinity Technologies, a comprehensive solution for seamless order processing, real-time inventory tracking, and detailed analytics. Enhance efficiency and customer satisfaction with our user-friendly and scalable system.</p>
            </section>

            {/* big box */}
            <section className="flex pb-20 items-center justify-center">

                <div className="h-[500px] w-[1200px] bg-[#171718] rounded-xl hover:scale-105 transition duration-500 flex justify-center items-center"></div>

            </section>


            {/* small boxes */}
            <section className="boxes1 space-y-20 pb-16">

                <div className="flex space-x-24 items-center justify-center ">

                    <div className="hover:scale-105 transition duration-500 justify-center items-center">
                        <div className="rounded-xl h-[375px] w-[396px] bg-[#171718] pb-7 "></div>

                        <section className="flex pt-2 items-center justify-between px-2"> 
                            <h1 className="text-white font-semibold text-[18px]">Yash Juyal</h1>
                            <button><Heart className="text-red-700"/></button> 
                        </section>     
                    </div>

                    <div className="hover:scale-105 transition duration-500 justify-center items-center">
                        <div className="rounded-xl h-[375px] w-[396px] bg-[#171718] pb-7"></div>

                        <section className="flex pt-2 items-center justify-between px-2"> 
                            <h1 className="text-white font-semibold text-[18px]">Yash Juyal</h1>
                            <button><Heart className="text-red-700 "/></button> 
                        </section>     
                    </div>

                    <div className="hover:scale-105 transition duration-500 justify-center items-center">
                        <div className="rounded-xl h-[375px] w-[396px] bg-[#171718] pb-7"></div>

                        <section className="flex pt-2 items-center justify-between px-2"> 
                            <h1 className="text-white font-semibold text-[18px]">Yash Juyal</h1>
                            <button><Heart className="text-red-700 "/></button> 
                        </section>     
                    </div>
                </div>

                <div className="flex space-x-24 items-center justify-center ">

                    <div className="hover:scale-105 transition duration-500 justify-center items-center">
                        <div className="rounded-xl h-[375px] w-[396px] bg-[#171718] pb-7"></div>

                        <section className="flex pt-2 items-center justify-between px-2"> 
                            <h1 className="text-white font-semibold text-[18px]">Yash Juyal</h1>
                            <button><Heart className="text-red-700 "/></button> 
                        </section>     
                    </div>

                    <div className="hover:scale-105 transition duration-500 justify-center items-center">
                        <div className="rounded-xl h-[375px] w-[396px] bg-[#171718] pb-7"></div>

                        <section className="flex pt-2 items-center justify-between px-2"> 
                            <h1 className="text-white font-semibold text-[18px]">Yash Juyal</h1>
                            <button><Heart className="text-red-700 "/></button> 
                        </section>     
                    </div>

                    <div className="hover:scale-105 transition duration-500 justify-center items-center">
                        <div className="rounded-xl h-[375px] w-[396px] bg-[#171718] pb-7"></div>

                        <section className="flex pt-2 items-center justify-between px-2"> 
                            <h1 className="text-white font-semibold text-[18px]">Yash Juyal</h1>
                            <button><Heart className="text-red-700 "/></button> 
                        </section>     
                    </div>
                </div>

                  <div className="flex space-x-24 items-center justify-center ">

                  <div className="hover:scale-105 transition duration-500 justify-center items-center">
                        <div className="rounded-xl h-[375px] w-[396px] bg-[#171718] pb-7"></div>

                        <section className="flex pt-2 items-center justify-between px-2"> 
                            <h1 className="text-white font-semibold text-[18px]">Yash Juyal</h1>
                            <button><Heart className="text-red-700 "/></button> 
                        </section>     
                    </div>

                    <div className="hover:scale-105 transition duration-500 justify-center items-center">
                        <div className="rounded-xl h-[375px] w-[396px] bg-[#171718] pb-7"></div>

                        <section className="flex pt-2 items-center justify-between px-2"> 
                            <h1 className="text-white font-semibold text-[18px]">Yash Juyal</h1>
                            <button><Heart className="text-red-700 "/></button> 
                        </section>     
                    </div>

                    <div className="hover:scale-105 transition duration-500 justify-center items-center">
                        <div className="rounded-xl h-[375px] w-[396px] bg-[#171718] pb-7"></div>

                        <section className="flex pt-2 items-center justify-between px-2"> 
                            <h1 className="text-white font-semibold text-[18px]">Yash Juyal</h1>
                            <button><Heart className="text-red-700 "/></button> 
                        </section>     
                    </div>
                </div>

        

            </section>

        </div>
    )
}

export default Blog;