import React, {useState,useEffect,useRef} from 'react'
import axios from 'axios'
import { useNavigate,useParams,Link } from 'react-router-dom';


function Comment(props) {
    const comment = props.comment;

    const commentDate = new Date(comment.timestamp);
    const formatDate = (date) => {
        if (date == undefined) { return "00.00.00" }
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear()).slice(-2);

        return `${day}.${month}.${year}`;
    };

    return (
        <div className="bg-[#242424] mt-16 p-6 pt-8 text-white rounded-xl">
            <div className="flex">
                <img
                    src={comment.profilePicture}
                    alt="Profile Picture"
                    className="self-auto h-[50px] w-[50px] mb-0 rounded-full"
                />
                <div className='flex flex-col'>
                    <span className='ml-3 font-semibold text-[1.25rem]'>{comment.fullName}</span>
                    <span className='ml-3 font-light text-[0.75rem]'>{formatDate(commentDate)}</span>
                </div>
            </div>
            <div className='mt-5 text-[20px]'>
                {comment.content}
            </div>
        </div>
    );
}

export default Comment;
