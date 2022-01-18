import "./feed.css";
import Post from "../post/Post";
import Share from "../share/Share";
import { useEffect, useState } from "react";
import axios from "axios"

export default function Feed({username}) {
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    const fetchPosts = async()=>{
      const res = username ? await axios.get("/posts/profile/"+username) : await axios.get("/posts/timeline/61e4844bebe2c7c5fe769e2c")
      console.log(res.data)
      
      setPosts(res.data)
    }
    fetchPosts()
  }, [username])

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
