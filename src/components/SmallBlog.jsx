import React, {useState,useEffect,useRef} from 'react'
import axios from 'axios'
import { useNavigate,useParams,Link } from 'react-router-dom';
import { Heart, Eye, Camera } from "lucide-react";

function SmallBlog(props) {
  const blog = props.blog;

  function limitString(text, wordLimit, charLimit) {
    return text.trim().split(/\s+/).slice(0, wordLimit).join(' ').slice(0, charLimit) + (text.length > charLimit || text.split(/\s+/).length > wordLimit ? '...' : '');
  }
  const title = limitString(blog.title, 6, 40);

  return (
    <Link to={`/blog/${blog._id}`}>
      <div className="hover:scale-105 transition duration-500 relative">
        <div
          className="rounded-xl h-[375px] w-[396px] bg-[#171718] pb-7 bg-cover bg-center relative group"
          style={{ backgroundImage: `url(${blog.blogPicture})` }}
        >
          {/* Gradient Overlay for Shadow Effect on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

          <div className="absolute bottom-0 left-0 p-4 text-white z-10">
            <h2 className="text-xl font-semibold">{title}</h2>
          </div>
        </div>
        <section className="flex pt-2 items-center justify-between px-2"> 
          <h1 className="text-white font-semibold text-[18px]">{blog.fullName}</h1>
          <button><Heart className="text-red-700"/></button> 
        </section>
      </div>
    </Link>
  );
}

export default SmallBlog;
