import React, {useState,useEffect,useRef} from 'react'
import axios from 'axios'
import { useNavigate,useParams,Link } from 'react-router-dom';

const HeroRight = (props) => {
    const blogs = props.blogs;

    function limitString(text, wordLimit, charLimit) {
        return text.trim().split(/\s+/).slice(0, wordLimit).join(' ').slice(0, charLimit) + (text.length > charLimit || text.split(/\s+/).length > wordLimit ? '...' : '');
    }
  
    return (
      <div className="">
        <h1 className="text-white text-[60px] font-semibold items-center">Featured</h1>
        <div className="w-[450px] h-0 border-white border-4 items-center rounded-sm"></div>
  
        <section className="pt-10 space-y-5">
          {blogs.map((blog, index) => (
                <section key={index} className="w-[100%]">
                    <Link to={`/blog/${blog._id}`}>
                        <div className="flex space-x-10 ">
                            <img
                                src={blog.blogPicture}
                                alt={blog.title}
                                className="border-2 min-w-[175px] h-[100px] w-[175px] rounded-sm object-cover"
                            />
                            <div className="flex-col w-[100%]">
                                <h2 className="w-[100%] text-[25px] font-bold text-white">
                                    {limitString(blog.title, 6, 32)}
                                </h2>
                                <div className='flex'>
                                    <p className="text-[13px] font-semibold text-slate-500">
                                        {blog.fullName}
                                    </p>
                                    <p className="w-[100%] text-right text-[13px] font-semibold text-slate-500">
                                        {blog.views} views
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </section>
          ))}
        </section>
      </div>
    );
  };
  
  export default HeroRight;
  