import { Carousel } from "@material-tailwind/react";
import BG5 from "/assets/path2.svg";
import { Heart, Eye, Camera } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useNavigate,useParams } from 'react-router-dom';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import { app } from "../firebase";
import axios from "axios";
import BigBlog from "../components/BigBlog";
import SmallBlog from "../components/SmallBlog";

const Blog = ()=>{
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

      // Fetch all blogs
    useEffect(() => {
        const fetchAllBlogs = async () => {
        try {
            const response = await axios.get("/api/v1/blog/getBlogs");
            console.log(response.data.blogs);
            console.log([1,2].slice(2,4));
            setBlogs(response.data.blogs.reverse());
        } catch (error) {
            console.error("Error fetching blogs:", error);
        } finally {
            setIsLoading(false);
        }
        };

        fetchAllBlogs();
    }, [isLoading]);

    return(
        <div  className="bg-no-repeat bg-[#141415] plus-jakarta-sans h-auto px-10 md:px-24 "
        style={{ backgroundImage: `url(${BG5})` }}>

            <section className="flex flex-col justify-center items-center text-center">
                <div className="text-[60px] text-[#146EF5] font-bold mt-16 mb-7">Blog Page</div>

                <p className="text-[18px] text-white font-semibold mb-40">Optimize your business operations with OMS by Infinity Technologies, a comprehensive solution for seamless order processing, real-time inventory tracking, and detailed analytics. Enhance efficiency and customer satisfaction with our user-friendly and scalable system.</p>
            </section>
            {/* only loads if blogs are fetched */}
            {(blogs.length > 0) ? (
                <BigBlog blog={blogs[0]}/>
            ) : (<></>)}

            {/* only loads if blogs are fetched */}
            {(blogs.length > 0) ? (
            <section className="boxes1 space-y-20 pb-16 ml-16 mr-16">

                <div className="flex space-x-24 items-center justify-center ">
                    {blogs.slice(1,4).map((blog) => (
                        <SmallBlog key={blog._id} blog={blog}/>
                    ))}
                </div>

                <div className="flex space-x-24 items-center justify-center ">

                    {blogs.slice(4,7).map((blog) => (
                        <SmallBlog key={blog._id} blog={blog}/>
                    ))}
                    
                </div>

                <div className="flex space-x-24 items-center justify-center ">

                    {blogs.slice(7,10).map((blog) => (
                        <SmallBlog key={blog._id} blog={blog}/>
                    ))}
                  
                </div>

        

            </section>
            ) : (<></>)}
        </div>
    )
}

export default Blog;