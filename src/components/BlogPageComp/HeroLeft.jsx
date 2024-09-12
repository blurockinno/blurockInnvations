import BGB from "../../../../blurockInnvations/public/assets/bg_home.jpg"

const HeroLeft = () =>{
    return(
        <div>
            <div className="h-[450px] w-[700px] bg-[#141415] border-[#146EF5] border-4 rounded-xl text-center">
                <div className="bg-cover h-full w-full rounded-xl"  style={{ backgroundImage: `url(${BGB})` }}></div>

            </div>
            <h1 className="text-[39px] text-center font-bold text-white mr-[15px] mt-10">Order Management System : <br />A software solution to all your clutured orders</h1>
        </div>
    )
}
 

export default HeroLeft;