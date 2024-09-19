import { Carousel } from "@material-tailwind/react";
import BG5 from "/assets/path2.svg";
import { Heart, Eye, Camera, Share2 } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "../custom-css/blog.css";
import Comment from '../components/Comment';

const Blg = () => {
    let { id } = useParams();
    const navigate = useNavigate();
    const { currentUser } = useSelector((state) => state.user);
    const [blog, setBlog] = useState({
        title: "loading...",
        fullName: "loading...",
        blog: "loading...",
        blogPicture: "https://cdn.pixabay.com/photo/2015/12/22/04/00/photo-1103594_1280.png",
        views: 0,
        likes: 0,
        likedBy: [],
        comments: [],
    });
    const [isLiked, setIsLiked] = useState(false);
    const [commentTitle, setCommentTitle] = useState("");
    const [commentContent, setCommentContent] = useState("");

    // Convert date to DD/MM/YY
    const blogDate = new Date(blog.createdAt);
    const formatDate = (date) => {
        if (date == undefined) { return "00.00.00" }
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear()).slice(-2);

        return `${day}.${month}.${year}`;
    };
    const comments = [...blog.comments].reverse();

    // Fetch blog
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`/api/v1/blog/getBlog/${id}`);
                setBlog(response.data.blog);

                // Check if the current user has already liked the blog post
                if (response.data.blog.likedBy.includes(currentUser._id)) {
                    setIsLiked(true);
                }
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };

        fetchBlog();
    }, [id, currentUser]);

    // Handle like/unlike logic
    const handleLike = async () => {
        try {
            if (isLiked) {
                await axios.put(`/api/v1/blog/${id}/unlike`, { userId: currentUser._id });
                setBlog((prevBlog) => ({
                    ...prevBlog,
                    likes: prevBlog.likes - 1,
                    likedBy: prevBlog.likedBy.filter((user) => user !== currentUser._id),
                }));
            } else {
                await axios.put(`/api/v1/blog/${id}/like`, { userId: currentUser._id });
                setBlog((prevBlog) => ({
                    ...prevBlog,
                    likes: prevBlog.likes + 1,
                    likedBy: [...prevBlog.likedBy, currentUser._id],
                }));
            }
            setIsLiked(!isLiked);
        } catch (error) {
            console.error("Error liking/unliking blog:", error);
        }
    };

    const handlePost = async () => {
        try {
            await axios.post(`/api/v1/blog/${id}/comments`, {
                fullName: currentUser.fullName,
                email: currentUser.email,
                content: commentContent,
                profilePicture: currentUser.profilePicture,
            });
            navigate(`/blog`);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="flex bg-no-repeat bg-[#141415] h-auto px-10 md:px-24 justify-center"
            style={{ backgroundImage: `url(${BG5})` }}>
            <div className="flex flex-col h-auto w-[2100px] bg-[#171718] my-14 rounded-2xl">
                <div className="flex justify-end m-12 mb-0">
                    <Share2 className="" size={42} color="gray" />
                </div>
                <section className="flex flex-col mx-20">
                    <section className="flex flex-col justify-center">
                        <h1 className="text-center text-[45px] font-bold text-white">{blog.title}</h1>
                        <div className="flex justify-center mt-4">
                            <h1 className="text-[white]">
                                {formatDate(blogDate)} | by&nbsp;
                            </h1>
                            <h1 className="text-[#146EF5] hover:cursor-pointer hover:underline">
                                {blog.fullName}
                            </h1>
                        </div>
                    </section>
                    <hr className="mt-4 h-[3px] bg-[white] rounded-lg" />
                    <div className="flex justify-center mt-6">
                        <h1 className="font-semibold text-[white] border-2 p-1 px-2 rounded-md">
                            #tags
                        </h1>
                    </div>
                    <img
                        src={blog.blogPicture}
                        alt="Blog Picture"
                        className="self-auto max-h-screen h-[auto] m-10 mb-0 rounded-xl"
                    />
                    <div className="flex justify-end mx-11 mb-6">
                        <div className="text-[white] font-light">{blog.views} views</div>
                    </div>
                </section>
                <p className="mx-20 my-14 mb-8 text-white text-[25px] text-justify">{blog.blog}</p>

                <section className="m-6 mx-20">
                    <hr className="h-[3px] mx-6 bg-[white] rounded-lg" />
                    <section className="flex mt-6">
                        <div className="flex justify-center items-center bg-[#242424] p-2 py-0 rounded-xl">
                            <Heart
                                className={`cursor-pointer ${isLiked ? "text-red-600" : "text-gray-400"}`}
                                size={36}
                                onClick={handleLike}
                            />
                            <span className="text-white ml-2 text-xl font-light">{blog.likes} Likes</span>
                            <span className="text-white m-0 p-0 text-[200%]">&nbsp;|&nbsp;</span>
                            <Share2 className="mx-1" size={32} color="gray" />
                            <Share2 className="mx-1" size={32} color="gray" />
                            <Share2 className="mx-1" size={32} color="gray" />
                            <Share2 className="mx-1" size={32} color="gray" />
                        </div>
                    </section>
                    <h1 className="text-center text-[50px] font-bold text-white">Comments</h1>
                    <div className="flex">
                        <div className='w-1/3 mt-16'>
                            <div className='text-center text-[30px] font-semibold text-white'>
                                Write your own comment
                            </div>
                            <div className="bg-[#242424] mt-16 p-10 pt-8 rounded-xl">
                                <div className='mb-3 text-[30px] font-semibold text-white'>
                                    Comment
                                </div>
                                <textarea
                                    value={commentContent}
                                    onChange={(e) => setCommentContent(e.target.value)}
                                    className='comment-input rounded-lg'
                                    rows={8}
                                    placeholder='Start writing comment...' />
                                <div className='flex justify-center'>
                                    <button onClick={handlePost} className='mt-8 w-[100%] text-center text-[25px] text-white bg-[#163BAD] rounded-lg'>
                                        Post Comment
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-2/3 mt-16 mx-16 pl-12">
                            <div className='text-center text-[30px] font-semibold text-white'>
                                Recent Comments
                            </div>
                            <div className="flex flex-col">
                                {comments.slice(0,10).map((comment) => (
                                    <Comment key={blog._id} comment={comment}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Blg;
