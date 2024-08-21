import { Carousel } from "@material-tailwind/react";
import BG5 from "/assets/path2.svg";
import { Heart, Eye } from "lucide-react";
import HeroLeft from "@/components/BlogPageComp/HeroLeft";
import HeroRight from "@/components/BlogPageComp/HeroRight";


const Blog = ()=>{
    return(
        <div  className="bg-no-repeat bg-[#141415] plus-jakarta-sans h-auto "
        style={{ backgroundImage: `url(${BG5})` }}>

            <div className="flex space-x-28 md:px-28 py-20 ">
                <HeroLeft></HeroLeft>
                <HeroRight></HeroRight>

            </div>
           
        </div>
    )
}

export default Blog;