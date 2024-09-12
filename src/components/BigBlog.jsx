import React, {useState,useEffect,useRef} from 'react'
import axios from 'axios'
import { useNavigate,useParams,Link } from 'react-router-dom';


function BigBlog(props) {
    const blog = props.blog;

    function limitString(text, wordLimit, charLimit) {
        return text.trim().split(/\s+/).slice(0, wordLimit).join(' ').slice(0, charLimit) + (text.length > charLimit || text.split(/\s+/).length > wordLimit ? '...' : '');
    }
    const title = limitString(blog.title, 6, 50);

    return (
      <Link to={`/blog/${blog._id}`}>
        <section className="flex pb-20 items-center justify-center">
        <div
            className="h-[500px] w-[1200px] bg-[#171718] rounded-xl hover:scale-105 transition duration-500 relative bg-cover bg-center"
            style={{ backgroundImage: `url(${blog.blogPicture})` }}
        >
            <p className="absolute bottom-0 left-0 p-8 text-gray-100 text-3xl">
            {title}
            </p>
        </div>
        </section>

      </Link>
    );
}

export default BigBlog;
