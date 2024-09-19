import React, {useState,useEffect,useRef} from 'react'
import axios from 'axios'
import { useNavigate,useParams,Link } from 'react-router-dom';


const HeroLeft = (props) =>{
    const blog = props.blog;

    function limitString(text, wordLimit, charLimit) {
        return text.trim().split(/\s+/).slice(0, wordLimit).join(' ').slice(0, charLimit) + (text.length > charLimit || text.split(/\s+/).length > wordLimit ? '...' : '');
    }
    const title = limitString(blog.title, 6, 50);

    return(
        <div>
            <div className="h-[450px] w-[700px] text-center">
                <div className="bg-cover h-full w-full rounded-xl"  style={{ backgroundImage: `url(${blog.blogPicture})` }}></div>

            </div>
            <h1 className="text-[39px] text-center font-bold text-white mr-[15px] mt-10">{title}</h1>
        </div>
    )
}

export default HeroLeft;