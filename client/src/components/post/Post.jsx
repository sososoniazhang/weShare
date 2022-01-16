import "./post.css";
import Comment from "../comment/Comment";
import { useState, useEffect } from "react";
import axios from "axios"

export default function Post({ post }) {
  const [like,setLike] = useState(post.like);
  const [isLiked,setIsLiked] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  const [Users, setUser] = useState([]);
  useEffect(()=>{
    const fetchUsers = async()=>{
      const res = await axios.get(`users/${post.userId}`)
      console.log(res)
    }
    fetchUsers()
  }, [])
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
          <span class="material-icons">more_vert</span>
          </div>
        </div>
        <div className="postCenter">
        <span className="postTitle">{post?.desc}</span>
          <div className="postContents">
            <div className="postContent">
              <div className="postContentIcon">
                  <span class="material-icons">today</span>
              </div>
              <span className="postContentItemText">Date/Time</span>
            </div>
              
            <div className="postContent">
              <div className="postContentIcon">
                  <span class="material-icons">place</span>
              </div>
            <span className="postContentItemText">Location</span>
            </div>

            <div className="postContent">
              <div className="postContentIcon">
                  <span class="material-icons">groups</span>
              </div>
            <span className="postContentItemText">Organization</span>
            </div>
          </div>
            
            {/* <div className="postContentIcon">
                <span class="material-icons">groups</span>
            </div>
            <span className="postContentItemText">Organization</span> */}
            
          
          <img className="postImg" src={PF+post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={`${PF}like.png`} onClick={likeHandler} alt="" />
            <img className="likeIcon" src={`${PF}heart.png`} onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
        <hr className="postBottomHr" />
        <div className="postBottomBottom">
          <Comment key={post._id} post={post}/>
          <Comment key={post._id} post={post}/>
        </div>
      </div>
    </div>
  );
}
