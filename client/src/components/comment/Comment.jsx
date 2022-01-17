import "./comment.css";
import { useState, useEffect } from "react";
import axios from "axios"

export default function Comment({ comment }) {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState([]);
    useEffect(()=>{
      const fetchUsers = async()=>{
        const res = await axios.get(`users/${comment.userId}`)
        setUser(res.data)
      }
      fetchUsers()
    }, [])
  return (
      <div>
        <div className="commentHeader">
            <img
                className="commentCommentProfileImg"
                src={PF+user.profilePicture}
                alt=""
            />
            <span className="commentCommentUsername">
                {user.username}
            </span>
            <span className="commentDate">{comment.date}</span>
        </div>
        <div className="commentContent">
            <span className="commentText">{comment.content}</span>
        </div>
      </div>
    
  )}


