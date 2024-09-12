import { Carousel } from "@material-tailwind/react";
import BG5 from "/assets/path2.svg";
import { Heart, Eye, Camera } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useNavigate,useParams } from 'react-router-dom';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import { app } from "../firebase";
import axios from "axios";

const Blg =()=>{
    let { id } = useParams();
    const [blog, setBlog] = useState({
        title: "loading...",
        fullName: "loading...",
        blog: "loading...",
        blogPicture: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    });
    const [isLoading, setIsLoading] = useState(false);

    //fetch blog
    useEffect(() => {
        const fetchBlog = async () => {
        try {
            const response = await axios.get(`/api/v1/blog/getBlog/${id}`);
            console.log(response.data.blog);
            setBlog(response.data.blog);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        } finally {
            setIsLoading(false);
        }
        };

        fetchBlog();
    }, [isLoading]);

    return(
        <div className="flex bg-no-repeat bg-[#141415] h-auto px-10 md:px-24 justify-center"
        style={{ backgroundImage: `url(${BG5})` }} >
            <div className="flex flex-col h-auto w-[2100px] bg-[#171718] my-14 rounded-2xl">
                <section className="flex">
                    <div 
                        className="flex-shrink-0 flex flex-col justify-center items-center h-64 w-64 pt-3 m-10 bg-[#121214a9] rounded-full hover:bg-[#121214] cursor-pointer bg-cover bg-center"
                        style={{ backgroundImage: `url(${blog.blogPicture})` }}
                    >
                    </div>
                    <section className="flex flex-col h-64 justify-center mt-10">
                        <h1 className="text-center text-[50px] font-bold text-white">{blog.title}</h1>
                        <h1 className="font-semibold text-[#146EF5] flex text-left ml-10 hover:cursor-pointer hover:underline">
                            {blog.fullName}
                        </h1>
                    </section>
                </section>
                <p className="mx-14 my-14 text-white text-[20px]">{blog.blog}</p>
            </div>
        </div>
    )
}

export default Blg;