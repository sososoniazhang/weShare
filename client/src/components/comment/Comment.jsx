import "./comment.css";
import { Users } from "../../dummyData";

export default function Comment({ post }) {
  return (
      <div>
        <div className="commentHeader">
            <img
                className="postCommentProfileImg"
                src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
                alt=""
            />
            <span className="postCommentUsername">
                {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="commentDate">{post.date}</span>
        </div>
        <div className="commentContent">
            <span className="commentText">This is the content</span>
        </div>
      </div>
    
  )}


